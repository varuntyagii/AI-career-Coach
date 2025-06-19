"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { v4 as uuidv4 } from "uuid";
import { revalidatePath } from "next/cache";

if (!process.env.GEMINI_API_KEY) {
  throw new Error("GEMINI_API_KEY is not defined in environment variables");
}

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function generateQuiz() {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
    select: { industry: true, skills: true },
  });

  if (!user) throw new Error("User not found");

  const sessionId = uuidv4();
  const timestamp = new Date().toISOString();
  const randomSeed = Math.floor(Math.random() * 10000);

  const previous = await db.pastQuestion.findMany({
    where: { userId },
    select: { question: true },
  });

  const pastSet = new Set(previous.map((q) => q.question.trim().toLowerCase()));

  const prompt = `
You are a professional technical interviewer.

🔧 Task:
Generate 10 completely not repeated, NEW and UNIQUE multiple-choice questions (MCQs) for a "${user.industry}" role ${
  user.skills?.length ? `with skills in ${user.skills.join(", ")}` : ""
}.

🧠 Past Questions (DO NOT REPEAT ANY OF THESE):
${[...pastSet].slice(0, 50).map((q, i) => `${i + 1}. ${q}`).join("\n")}

🔒 Avoid:
- Repeating any of the above questions.
- Using generic or overly simple examples.
- Repeating option styles or phrasing.
- Any markdown or extra text.

✅ Ensure:
- All questions are challenging and diverse.
- Each question MUST have 4 options: 3 incorrect and 1 correct.
- Each object MUST clearly mention the correct answer.
- Each object MUST include a short explanation.
- Provide fresh and new questions related to interview context.

🔄 Output Format:
Return **only** valid JSON with this structure:
{
  "questions": [
    {
      "question": "string",
      "options": ["string", "string", "string", "string"],
      "correctAnswer": "string",
      "explanation": "string"
    }
  ]
}
Do not include markdown (like \`\`\`json). Do not return any other commentary.
`;


  try {
    const result = await model.generateContent(prompt);
    const text = result?.response?.text().replace(/```json|```/g, "").trim();
    const parsed = JSON.parse(text);

    if (!parsed?.questions || parsed.questions.length !== 10) {
      throw new Error("Expected 10 valid questions");
    }

    const freshQuestions = parsed.questions.filter(
      (q) => !pastSet.has(q.question.trim().toLowerCase())
    );

    if (freshQuestions.length === 0) {
      throw new Error("All generated questions were previously used");
    }

    await db.pastQuestion.createMany({
      data: freshQuestions.map((q) => ({
        userId,
        question: q.question,
      })),
    });

    return freshQuestions;
  } catch (err) {
    console.error("Gemini Quiz Generation Error:", err);
    throw new Error("Failed to generate quiz");
  }
}

export async function saveQuizResult(quizData) {
  
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
    select: { id: true },
  });

  if (!user) throw new Error("User not found");

  try {
    const result = await db.quizResult.create({
      data: {
        userId: user.id,
        sessionId: uuidv4(),
        quizData,
      },
    });
    return result;
  } catch (err) {
    console.error("Save Quiz Result Error:", err);
    throw new Error("Failed to save quiz result");
  }
}

// actions/interview.js


export async function getAssessments() {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
  });

  if (!user) throw new Error("User not found");

  try {
    const assessments = await db.assessment.findMany({
      
      where: {
        userId: user.id,
      },
      orderBy: {
        createdAt: "asc",
      },
    });

    return assessments;
  } catch (error) {
    console.error("Error fetching assessments:", error);
    throw new Error("Failed to fetch assessments");
  }
}



// export async function saveAssessment(quizData) {
//   const { userId } = await auth();
//   if (!userId) throw new Error("Unauthorized");

//   const user = await db.user.findUnique({
//     where: { clerkUserId: userId },
//     select: { id: true },
//   });

//   if (!user) throw new Error("User not found");

//   try {
//     const result = await db.assessment.create({
//       data: {
//         userId: user.id,
//         data: quizData, // ya jo bhi structure ho tumhare `assessment` model ka
//       },
//     });

//     return result;
//   } catch (err) {
//     console.error("Save Assessment Error:", err);
//     throw new Error("Failed to save assessment");
//   }
// }

export async function saveAssessment(quizData) {
    console.log("💾 Called saveAssessment with:", quizData);

  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
    select: { id: true },
  });

  if (!user) throw new Error("User not found");

  try {
    const result = await db.assessment.create({
      data: {
        userId: user.id,
        quizScore: quizData.score,  
        category: quizData.category,
        improvementTip: quizData.improvementTip || "",
        questions: quizData.questions,
      },
    });
    console.log("ass res", result);

    return result;
  } catch (err) {
    console.error("Save Assessment Error:", err);
    throw new Error("Failed to save assessment");
  }
}


export async function deleteAssessment(quizId) {
  try {
    await prisma.assessment.delete({ where: { id: quizId } });
    return { success: true };
  } catch (error) {
    console.error("Server: Failed to delete quiz:", error);
    return { success: false, error: "Failed to delete quiz" };
  }
}
