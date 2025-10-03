import { auth } from "@clerk/nextjs/server";
import ResumeBuilder from "./_components/resume-builder";
import { getResume } from "@/actions/resume";

export default async function ResumePage() {
  const { userId } = await auth();
  let resume = null;

  if (userId) {
    try {
      resume = await getResume();
    } catch (error) {
      console.error("Error fetching resume:", error);
      // Continue with empty resume if there's an error
    }
  }

  return (
    <div className="container mx-auto py-6 bg-background min-h-screen">
      <ResumeBuilder initialContent={resume?.content || ""} />
    </div>
  );
}