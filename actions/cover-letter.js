// "use server";
// import { db } from '@/lib/prisma';
// import { auth } from '@clerk/nextjs/server';
// import { GoogleGenerativeAI } from '@google/generative-ai';
// import { revalidatePath } from 'next/cache';


// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
// const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
// const generateCoverLetters = async (data) => {
//   const { userId } = await auth();
//   if (!userId) throw new Error("Unauthorized");

//   const user = await db.user.findUnique({
//     where:{clerkUserId: userId},
//   });
    
//   if (!user) throw new Error("User not found");


//     const prompt = `
//     Write a professional cover letter for a ${data.jobTitle} position at ${
//     data.companyName
//   }.
    
//     About the candidate:
//     - Industry: ${user.industry}
//     - Years of Experience: ${user.experience}
//     - Skills: ${user.skills?.join(", ")}
//     - Professional Background: ${user.bio}
    
//     Job Description:
//     ${data.jobDescription}
    
//     Requirements:
//     1. Use a professional, enthusiastic tone
//     2. Highlight relevant skills and experience
//     3. Show understanding of the company's needs
//     4. Keep it concise (max 400 words)
//     5. Use proper business letter formatting in markdown
//     6. Include specific examples of achievements
//     7. Relate candidate's background to job requirements
    
//     Format the letter in markdown.
//   `;
   
  
//   try {
//     const result = await model.generateContent(prompt);
//     const content = result.response.text().trim();

//     const coverLetter = await db.coverLetter.create({
//       data: {
//         content,
//         jobDescription: data.jobDescription,
//         companyName: data.companyName,
//         jobTitle: data.jobTitle,
//         status: "completed",
//         userId: user.id,
//       },
//     });

//     return coverLetter;
    
//   }     
//   catch (error) {
//     console.error("Error generating cover letter:", error.message);
//     throw new Error("Failed to generate cover letter");
//   }
// }

// export default generateCoverLetters


// export async function saveCoverLetter(content) {
//   const { userId } = await auth();
//   if (!userId) throw new Error("Unauthorized");

//   const user = await db.user.findUnique({
//     where: { clerkUserId: userId },
//   });

//   if (!user) throw new Error("User not found");

//   try {
//     const coverLetter = await db.coverLetter.upsert({
//       where: {
//         userId: user.id,
//       },
//       update: {
//         content,
//       },
//       create: {
//         userId: user.id,
//         content,
//       },
//     });

//     revalidatePath("/coverLetter");
//     return coverLetter;
//   } catch (error) {
//     console.error("Error saving coverLetter:", error.message);
//     throw new Error("Failed to save coverLetter");
//   }
// }


// export async function improveWithAI({ current, type }){
//      const { userId } = await auth();
//   if (!userId) throw new Error("Unauthorized");

//   const user = await db.user.findUnique({
//     where: { clerkUserId: userId },
//     include: {
//       industryInsight: true,
//     },
//   });

//   if (!user) throw new Error("User not found");
//   const prompt = `
//     As an expert resume writer, improve the following ${type} description for a ${user.industry} professional.
//     Make it more impactful, quantifiable, and aligned with industry standards.
//     Current content: "${current}"

//     Requirements:
//     1. Use action verbs
//     2. Include metrics and results where possible
//     3. Highlight relevant technical skills
//     4. Keep it concise but detailed
//     5. Focus on achievements over responsibilities
//     6. Use industry-specific keywords
    
//     Format the response as a single paragraph without any additional text or explanations.
//   `;
//  try {
//     const result = await model.generateContent(prompt);
//     const response = result.response;
//     const improvedContent = response.text().trim();
//     return improvedContent;
//   } catch (error) {
//     console.error("Error improving content:", error);
//     throw new Error("Failed to improve content");
//   }
// }

// export async function getCoverLetters() {
//   const { userId } = await auth();
//   if (!userId) throw new Error("Unauthorized");

//   const user = await db.user.findUnique({
//     where: { clerkUserId: userId },
//   });

//   if (!user) throw new Error("User not found");

//   return await db.coverLetter.findMany({
//     where: {
//       userId: user.id,
//     },
//     orderBy: {
//       createdAt: "desc",
//     },
//   });


  
// }

// export async function getCoverLetter(id) {
//   const { userId } = await auth();
//   if (!userId) throw new Error("Unauthorized");

//   const user = await db.user.findUnique({
//     where: { clerkUserId: userId },
//   });

//   if (!user) throw new Error("User not found");

//   return await db.coverLetter.findUnique({
//     where: {
//       id,
//       userId: user.id,
//     },
//   });
// }

// export async function deleteCoverLetter(id) {
//   const { userId } = await auth();
//   if (!userId) throw new Error("Unauthorized");

//   const user = await db.user.findUnique({
//     where: { clerkUserId: userId },
//   });

//   if (!user) throw new Error("User not found");

//   return await db.coverLetter.delete({
//     where: {
//       id,
//       userId: user.id,
//     },
//   });
// }

"use server"
import { db } from '@/lib/prisma';
import { auth } from '@clerk/nextjs/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
// import { revalidatePath } from 'next/cache';

if (!process.env.GEMINI_API_KEY) {
  throw new Error("GEMINI_API_KEY is not defined in environment variables");
}

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

// Generate a cover letter
export async function generateCoverLetter(data) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
  });
  if (!user) throw new Error("User not found");

  const fullName = `${data.firstName ?? ""} ${data.lastName ?? ""}`.trim();
  const prompt = `
    Write a professional cover letter for a ${data.jobTitle} position at ${data.companyName}.
    
    Candidate:
    - Name: ${fullName || "(use a professional placeholder if missing)"}
    - Email: ${data.email || ""}
    - Phone: ${data.phone || ""}
    - Address: ${data.address || ""}
    - Industry: ${user.industry}
    - Years of Experience: ${user.experience}
    - Skills: ${user.skills?.join(", ")}
    - Professional Background: ${user.bio}
    
    Job Description:
    ${data.jobDescription}
    
    Requirements:
    1. Use a professional, enthusiastic tone
    2. Highlight relevant skills and experience
    3. Show understanding of the company's needs
    4. Keep it concise (max 400 words)
    5. Use proper business letter formatting in markdown
    6. Include specific examples of achievements
    7. Relate candidate's background to job requirements
    8. Include a simple header with the candidate's contact details (name, email, phone, address) at the top.
    9. Close the letter with the candidate's full name: ${fullName}
    
    Format the letter in markdown.
  `;

  try {
    const result = await model.generateContent(prompt);
    const content = result.response.text().trim();

    const coverLetter = await db.coverLetter.create({
      data: {
        content,
        jobDescription: data.jobDescription,
        companyName: data.companyName,
        jobTitle: data.jobTitle,
        status: "completed",
        userId: user.id,
      },
    });

    return coverLetter;
  } catch (error) {
    console.error("Error generating cover letter:", error.message);
    throw new Error("Failed to generate cover letter");
  }
}

// Save a cover letter
// export async function saveCoverLetter(content) {
//   const { userId } = await auth();
//   if (!userId) throw new Error("Unauthorized");

//   const user = await db.user.findUnique({
//     where: { clerkUserId: userId },
//   });
//   if (!user) throw new Error("User not found");

//   try {
//     const coverLetter = await db.coverLetter.upsert({
//       where: {
//         userId: user.id,
//       },
//       update: {
//         content,
//       },
//       create: {
//         userId: user.id,
//         content,
//       },
//     });

//     revalidatePath("/coverLetter");
//     return coverLetter;
//   } catch (error) {
//     console.error("Error saving coverLetter:", error.message);
//     throw new Error("Failed to save coverLetter");
//   }
// }

// Improve content with AI
// export async function improveWithAI({ current, type }) {
//   const { userId } = await auth();
//   if (!userId) throw new Error("Unauthorized");

//   const user = await db.user.findUnique({
//     where: { clerkUserId: userId },
//     include: {
//       industryInsight: true,
//     },
//   });
//   if (!user) throw new Error("User not found");

//   const prompt = `
//     As an expert resume writer, improve the following ${type} description for a ${user.industry} professional.
//     Make it more impactful, quantifiable, and aligned with industry standards.
//     Current content: "${current}"

//     Requirements:
//     1. Use action verbs
//     2. Include metrics and results where possible
//     3. Highlight relevant technical skills
//     4. Keep it concise but detailed
//     5. Focus on achievements over responsibilities
//     6. Use industry-specific keywords
    
//     Format the response as a single paragraph without any additional text or explanations.
//   `;

//   try {
//     const result = await model.generateContent(prompt);
//     const response = result.response;
//     const improvedContent = response.text().trim();
//     return improvedContent;
//   } catch (error) {
//     console.error("Error improving content:", error);
//     throw new Error("Failed to improve content");
//   }
// }

// Get all cover letters
export async function getCoverLetters() {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
  });
  if (!user) throw new Error("User not found");

  return await db.coverLetter.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}

// Get a single cover letter
export async function getCoverLetter(id) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
  });
  if (!user) throw new Error("User not found");

  return await db.coverLetter.findUnique({
    where: {
      id,
      userId: user.id,
    },
  });
}

// Delete a cover letter
export async function deleteCoverLetter(id) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
  });
  if (!user) throw new Error("User not found");

  return await db.coverLetter.delete({
    where: {
      id,
      userId: user.id,
    },
  });
}

export async function improveWithAI(current, type) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
    include: { industryInsight: true },
  });

  if (!user) throw new Error("User not found");

  const prompt = `
    As an expert resume writer, improve the following ${type} description for a ${user.industry} professional.
    Make it more impactful, quantifiable, and aligned with industry standards.
    Current content: "${current}"

    Requirements:
    1. Use action verbs
    2. Include metrics and results where possible
    3. Highlight relevant technical skills
    4. Keep it concise but detailed
    5. Focus on achievements over responsibilities
    6. Use industry-specific keywords

    Format the response as a single paragraph without any additional text or explanations.
  `;

  const result = await model.generateContent(prompt);
  return result.response.text().trim();
}
// /actions/cover-letter.js
export async function updateCoverLetter(id, content) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
  });
  if (!user) throw new Error("User not found");

  try {
    const updated = await db.coverLetter.update({
      where: {
        id,
        userId: user.id,
      },
      data: {
        content,
      },
    });
    return updated;
  } catch (error) {
    console.error("Update error:", error);
    throw new Error("Failed to update cover letter");
  }
}
