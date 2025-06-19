// // "use server";

// // import { db } from "@/lib/prisma";
// // import { auth } from "@clerk/nextjs/server";
// // import { revalidatePath } from "next/cache";
// // import { generateAIInsights } from "./dashboard";

// // export async function updateUser(data) {
// //   const { userId } = await auth();
// //   if (!userId) throw new Error("Unauthorized");

// //   const user = await db.user.findUnique({
// //     where: { clerkUserId: userId },
// //   });

// //   if (!user) throw new Error("User not found");

// //   try {
// //     // Start a transaction to handle both operations
// //     const result = await db.$transaction(
// //       async (tx) => {
// //         // First check if industry exists
// //         let industryInsight = await tx.industryInsight.findUnique({
// //           where: {
// //             industry: data.industry,

// //           },
// //         });

// //         // If industry doesn't exist, create it with default values
// //         if (!industryInsight) {
// //           const insights = await generateAIInsights(data.industry);

// //           industryInsight = await tx.industryInsight.create({
// //             data: {
// //               industry: data.industry,
// //               salaryRanges: [],
// //               growthRate: 0,
// //               demandLevel: "Medium",
// //               topSkills: [],
// //               marketOutlook:"Neutral",
// //               keyTrends: [],

// //               recommendedSkills: [],
// //               nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
// //             },
// //           });
// //         }

// //         // Now update the user
// //         const updatedUser = await tx.user.update({
// //           where: {
// //             id: user.id,
// //           },
// //           data: {
// //             industry: data.industry,
// //             experience: data.experience,
// //             bio: data.bio,
// //             skills: data.skills,
// //           },
// //         });

// //         return { updatedUser, industryInsight };
// //       },
// //       {
// //         timeout: 10000, // default: 5000
// //       }
// //     );

// //     revalidatePath("/");
// //     return result.updatedUser;
// //   } catch (error) {
// //     console.error("Error updating user and industry:", error.message);
// //     throw new Error("Failed to update profile");
// //   }
// // }

// // export async function getUserOnboardingStatus() {
// //   const { userId } = await auth();
// //   if (!userId) throw new Error("Unauthorized");

// //   const user = await db.user.findUnique({
// //     where: { clerkUserId: userId },
// //   });

// //   if (!user) throw new Error("User not found");

// //   try {
// //     const user = await db.user.findUnique({
// //       where: {
// //         clerkUserId: userId,
// //       },
// //       select: {
// //         industry: true,
// //       },
// //     });

// //     return {
// //       isOnboarded: !!user?.industry,
// //     };
// //   } catch (error) {
// //     console.error("Error checking onboarding status:", error);
// //     throw new Error("Failed to check onboarding status");
// //   }
// // }


// "use server";

// import { db } from "@/lib/prisma";
// import { auth } from "@clerk/nextjs/server";
// import { revalidatePath } from "next/cache";
// import { generateAIInsights } from "./dashboard";

// export async function updateUser(data) {
//   const { userId } = await auth();
//   if (!userId) throw new Error("Unauthorized");

//   const user = await db.user.findUnique({
//     where: { clerkUserId: userId },
//   });

//   if (!user) throw new Error("User not found");

//   // Validate industry
//   if (!data.industry) {
//     throw new Error("Industry is required to update user profile!");
//   }

//   try {
//     // Start a transaction to handle both operations
//     const result = await db.$transaction(
//       async (tx) => {
//         // First check if industry exists
//         let industryInsight = await tx.industryInsight.findUnique({
//           where: {
//             industry: data.industry,
//           },
//         });

//         if (!user.industry) {
//   throw new Error("User has no industry assigned. Cannot generate insights.");
// }


//         // If industry doesn't exist, create it with default values

//         if (!industryInsight) {
//           const insights = await generateAIInsights(data.industry);
//           industryInsight = await tx.industryInsight.create({
//             data: {
//               industry: data.industry,
//               salaryRanges: insights.salaryRanges || [],
//               growthRate: insights.growthRate || 0,
//               demandLevel: insights.demandLevel || "Medium",
//               topSkills: insights.topSkills || [],
//               marketOutlook: insights.marketOutlook || "Neutral",
//               keyTrends: insights.keyTrends || [],
//               recommendedSkills: insights.recommendedSkills || [],
//               nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
//             },
//           });
//         }

//         // Now update the user
//         const updatedUser = await tx.user.update({
//           where: {
//             id: user.id,
//           },
//           data: {
//             industry: data.industry,
//             experience: data.experience,
//             bio: data.bio,
//             skills: data.skills,
//           },
//         });

//         return { updatedUser, industryInsight };
//       },
//       {
//         timeout: 10000, // default: 5000
//       }
//     );

//     revalidatePath("/");
//     return result.updatedUser;
//   } catch (error) {
//     console.error("Error updating user and industry:", error.message);
//     throw new Error("Failed to update profile");
//   }
// }

// export async function getUserOnboardingStatus() {
//   const { userId } = await auth();
//   if (!userId) throw new Error("Unauthorized");

//   const user = await db.user.findUnique({
//     where: { clerkUserId: userId },
//   });

//   if (!user) throw new Error("User not found");

//   try {
//     const user = await db.user.findUnique({
//       where: {
//         clerkUserId: userId,
//       },
//       select: {
//         industry: true,
//       },
//     });

//     return {
//       isOnboarded: !!user?.industry,
//     };
//   } catch (error) {
//     console.error("Error checking onboarding status:", error);
//     throw new Error("Failed to check onboarding status");
//   }
// }

// "use server";

// import { db } from "@/lib/prisma";
// import { auth } from "@clerk/nextjs/server";
// import { revalidatePath } from "next/cache";
// import { generateAIInsights } from "./dashboard";

// export async function updateUser(data) {
//   try {
//     const { userId } = await auth();
//     if (!userId) throw new Error("Unauthorized");

//     // Validate input
//     if (!data.industry) {
//       throw new Error("Industry is required to update user profile");
//     }

//     const user = await db.user.findUnique({
//       where: { clerkUserId: userId },
//     });

//     if (!user) throw new Error("User not found");

//     const result = await db.$transaction(async (tx) => {
//       // First update the user
//       const updatedUser = await tx.user.update({
//         where: { id: user.id },
//         data: {
//           industry: data.industry || null,
//           experience: data.experience,
//           bio: data.bio,
//           skills: data.skills,
//         },
//       });

//       // Then handle industry insights
//       let industryInsight = await tx.industryInsight.findUnique({
//         where: { industry: data.industry },
//       });

//       if (!industryInsight) {
//         const insights = await generateAIInsights(data.industry);
//         industryInsight = await db.industryInsight.create({
//           data: {
//             industry: data.industry,
//             ...insights,
//             nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
//           },
//         });
//       }

//       return { updatedUser, industryInsight };
//     }, {
//       timeout: 10000,
//     });

//     revalidatePath("/");
//     return result.updatedUser;
//   } catch (error) {
//     console.error("Error updating user:", error);
//     throw new Error(error.message || "Failed to update profile");
//   }
// }

// export async function getUserOnboardingStatus() {
//   try {
//     const { userId } = await auth();
//     if (!userId) throw new Error("Unauthorized");

//     const user = await db.user.findUnique({
//       where: { clerkUserId: userId },
//       select: {
//         industry: true,
//         experience: true,
//         skills: true,
//         bio: true,
//       },
//     });

//     if (!user) throw new Error("User not found");

//     return {
//       isOnboarded: !!user?.industry,
//       hasExperience: !!user?.experience,
//       hasSkills: !!user?.skills && user.skills.length > 0,
//       hasBio: !!user?.bio,
//       completedAll: !!user?.industry && !!user?.experience && 
//                   !!user?.skills?.length && !!user?.bio
//     };
//   } catch (error) {
//     console.error("Error checking onboarding status:", error);
//     throw new Error("Failed to check onboarding status");
//   }
// }


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
    if (!userId) throw new Error("Unauthorized");

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
      hasSkills: !!user?.skills && user.skills.length > 0,
      hasBio: !!user?.bio,
      completedAll: !!user?.industry && !!user?.experience && 
                  !!user?.skills?.length && !!user?.bio
    };
  } catch (error) {
    console.error("Error checking onboarding status:", error);
    throw new Error("Failed to check onboarding status");
  }
}
