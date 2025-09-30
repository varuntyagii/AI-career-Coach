import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/prisma";

export async function GET() {
  try {
    const { userId } = await auth();
    if (!userId) {
      return new Response(JSON.stringify({ ok: true, user: null }), { status: 200 });
    }

    let user = await db.user.findUnique({ where: { clerkUserId: userId } });

    if (!user) {
      // create minimal shell user to avoid SSR creation during layout
      user = await db.user.create({
        data: {
          clerkUserId: userId,
          email: `${userId}@users.noreply`,
          name: null,
          imageUrl: null,
          skills: [],
        },
      });
    }

    return new Response(JSON.stringify({ ok: true, user }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ ok: false, error: error.message }), { status: 500 });
  }
}


