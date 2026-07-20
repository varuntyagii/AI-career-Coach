

"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { generateAIInsights } from "./dashboard";

export async function updateUser(data) {
  try {
    const { userId } = await auth();
    if (!userId) throw new Error("Unauthorized");

    // Validate input
    if (!data.industry) {
      throw new Error("Industry is required to update user profile");
    }

    const user = await db.user.findUnique({
      where: { clerkUserId: userId },
    });

    if (!user) throw new Error("User not found");

    const result = await db.$transaction(async (tx) => {
      // ✅ Always use tx (transaction context) inside the transaction

      // 1. Handle industry insights
      let industryInsight = await tx.industryInsight.findUnique({
        where: { industry: data.industry },
      });

      if (!industryInsight) {
        const insights = await generateAIInsights(data.industry);
        industryInsight = await tx.industryInsight.create({
          data: {
            industry: data.industry,
            ...insights,
            nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
          },
        });
      }

      // 2. Update the user
      const updatedUser = await tx.user.update({
        where: { id: user.id },
        data: {
          industry: data.industry, // ✅ Do not allow null if it is a foreign key
          experience: data.experience,
          bio: data.bio,
          skills: data.skills,
        },
      });

      return { updatedUser, industryInsight };
    }, {
      timeout: 10000,
    });

    revalidatePath("/");
    return result.updatedUser;
  } catch (error) {
    console.error("Error updating user:", error);
    throw new Error("Failed to update profile. Please try again.");
  }
}

export async function getUserOnboardingStatus() {
  try {
    const { userId } = await auth();


    const allUsers = await db.user.findMany();


    const user = await db.user.findUnique({
      where: { clerkUserId: userId },
      select: {
        industry: true,
        experience: true,
        skills: true,
        bio: true,
      },
    });

    

    if (!user) throw new Error("User not found");

    return {
      isOnboarded: !!user?.industry,
      hasExperience: !!user?.experience,
      hasSkills: !!user?.skills?.length,
      hasBio: !!user?.bio,
      completedAll:
        !!user?.industry &&
        !!user?.experience &&
        !!user?.skills?.length &&
        !!user?.bio,
    };
  } catch (error) {
    console.error("Error checking onboarding status:", error);
    throw new Error("Failed to check onboarding status");
  }
}
