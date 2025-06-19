import { auth } from "@clerk/nextjs/server";
import ResumeBuilder from "./_components/resume-builder";

async function getResume(userId) {
  return { content: "" }; // Replace with actual database logic
}

export default async function ResumePage() {
  const { userId } = await auth();
  let resume = null;

  if (userId) {
    resume = await getResume(userId);
  }

  return (
    <div className="container mx-auto py-6 bg-background min-h-screen">
      <ResumeBuilder initialContent={resume?.content || ""} />
    </div>
  );
}