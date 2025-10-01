// // // // "use client";

// // // // import { useState } from "react";
// // // // import { useForm } from "react-hook-form";
// // // // import { zodResolver } from "@hookform/resolvers/zod";
// // // // import { toast } from "sonner";
// // // // import { Loader2 } from "lucide-react";
// // // // import { Button } from "@/components/ui/button";
// // // // import {
// // // //   Card,
// // // //   CardContent,
// // // //   CardDescription,
// // // //   CardHeader,
// // // //   CardTitle,
// // // // } from "@/components/ui/card";
// // // // import { Input } from "@/components/ui/input";
// // // // import { Label } from "@/components/ui/label";
// // // // import { Textarea } from "@/components/ui/textarea";
// // // // import { generateCoverLetter } from "@/actions/cover-letter";
// // // // import useFetch from "@/hooks/use-fetch";
// // // // import { coverLetterSchema } from "@/app/lib/schema";
// // // // import { useEffect } from "react";
// // // // import { useRouter } from "next/navigation";

// // // // export default function CoverLetterGenerator() {
// // // //   const router = useRouter();

// // // //   const {
// // // //     register,
// // // //     handleSubmit,
// // // //     formState: { errors },
// // // //     reset,
// // // //   } = useForm({
// // // //     resolver: zodResolver(coverLetterSchema),
// // // //   });

// // // //   const {
// // // //     loading: generating,
// // // //     fn: generateLetterFn,
// // // //     data: generatedLetter,
// // // //   } = useFetch(generateCoverLetter);

// // // //   // Update content when letter is generated
// // // //   useEffect(() => {
// // // //     if (generatedLetter) {
// // // //       toast.success("Cover letter generated successfully!");
// // // //       router.push(`/ai-cover-letter/${generatedLetter.id}`);
// // // //       reset();
// // // //     }
// // // //   }, [generatedLetter]);

// // // //   const onSubmit = async (data) => {
// // // //     try {
// // // //       await generateLetterFn(data);
// // // //     } catch (error) {
// // // //       toast.error(error.message || "Failed to generate cover letter");
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="space-y-6">
// // // //       <Card>
// // // //         <CardHeader>
// // // //           <CardTitle>Job Details</CardTitle>
// // // //           <CardDescription>
// // // //             Provide information about the position you're applying for
// // // //           </CardDescription>
// // // //         </CardHeader>
// // // //         <CardContent>
// // // //           <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
// // // //             {/* Form fields remain the same */}
// // // //             <div className="grid grid-cols-2 gap-4">
// // // //               <div className="space-y-2">
// // // //                 <Label htmlFor="companyName">Company Name</Label>
// // // //                 <Input
// // // //                   id="companyName"
// // // //                   placeholder="Enter company name"
// // // //                   {...register("companyName")}
// // // //                 />
// // // //                 {errors.companyName && (
// // // //                   <p className="text-sm text-red-500">
// // // //                     {errors.companyName.message}
// // // //                   </p>
// // // //                 )}
// // // //               </div>

// // // //               <div className="space-y-2">
// // // //                 <Label htmlFor="jobTitle">Job Title</Label>
// // // //                 <Input
// // // //                   id="jobTitle"
// // // //                   placeholder="Enter job title"
// // // //                   {...register("jobTitle")}
// // // //                 />
// // // //                 {errors.jobTitle && (
// // // //                   <p className="text-sm text-red-500">
// // // //                     {errors.jobTitle.message}
// // // //                   </p>
// // // //                 )}
// // // //               </div>
// // // //             </div>

// // // //             {/* <div className="space-y-2">
// // // //               <Label htmlFor="jobDescription">Job Description</Label>
// // // //               <Textarea
// // // //                 id="jobDescription"
// // // //                 placeholder="Paste the job description here"
// // // //                 className="h-32"
// // // //                 {...register("jobDescription")}
// // // //               />
// // // //               {errors.jobDescription && (
// // // //                 <p className="text-sm text-red-500">
// // // //                   {errors.jobDescription.message}
// // // //                 </p>
// // // //               )}
// // // //             </div> */}
// // // //                       <div className="space-y-2">
// // // //                           <Textarea
// // // //                             placeholder={`Description of your ${type.toLowerCase()}`}
// // // //                             className="h-32"
// // // //                             {...register("jobDescription")}
// // // //                             error={errors.jobDescription}
// // // //                           />
// // // //                           {errors.jobDescription && (
// // // //                             <p className="text-sm text-red-500">
// // // //                               {errors.jobDescription.message}
// // // //                             </p>
// // // //                           )}
// // // //                         </div>
// // // //                         <Button
// // // //                           type="button"
// // // //                           variant="ghost"
// // // //                           size="sm"
// // // //                           onClick={handleImproveDescription}
// // // //                           disabled={isImproving || !watch("jobDescription")}
// // // //                         >
// // // //                           {isImproving ? (
// // // //                             <>
// // // //                               <Loader2 className="h-4 w-4 mr-2 animate-spin" />
// // // //                               Improving...
// // // //                             </>
// // // //                           ) : (
// // // //                             <>
// // // //                               <Sparkles className="h-4 w-4 mr-2" />
// // // //                               Improve with AI
// // // //                             </>
// // // //                           )}
// // // //                         </Button>

// // // //             <div className="flex justify-end">
// // // //               <Button type="submit" disabled={generating}>
// // // //                 {generating ? (
// // // //                   <>
// // // //                     <Loader2 className="mr-2 h-4 w-4 animate-spin" />
// // // //                     Generating...
// // // //                   </>
// // // //                 ) : (
// // // //                   "Generate Cover Letter"
// // // //                 )}
// // // //               </Button>
// // // //             </div>
// // // //           </form>
// // // //         </CardContent>
// // // //       </Card>
// // // //     </div>
// // // //   );
// // // // }


// // // "use client";

// // // import { useState, useEffect } from "react";
// // // import { useForm } from "react-hook-form";
// // // import { zodResolver } from "@hookform/resolvers/zod";
// // // import { toast } from "sonner";
// // // import { Loader2, Sparkles } from "lucide-react";
// // // import { Button } from "@/components/ui/button";
// // // import {
// // //   Card,
// // //   CardContent,
// // //   CardDescription,
// // //   CardHeader,
// // //   CardTitle,
// // // } from "@/components/ui/card";
// // // import { Input } from "@/components/ui/input";
// // // import { Label } from "@/components/ui/label";
// // // import { Textarea } from "@/components/ui/textarea";
// // // import { generateCoverLetter, improveWithAI } from "@/actions/cover-letter";
// // // import useFetch from "@/hooks/use-fetch";
// // // import { coverLetterSchema } from "@/app/lib/schema";
// // // import { useRouter } from "next/navigation";
// // // import { improveWithAI } from "@/actions/cover-letter"; // 👈 your server action


// // // export default function CoverLetterGenerator() {
// // //   const router = useRouter();

// // //   const {
// // //     register,
// // //     handleSubmit,
// // //     formState: { errors },
// // //     watch,
// // //     reset,
// // //     setValue,
// // //   } = useForm({
// // //     resolver: zodResolver(coverLetterSchema),
// // //   });

// // //   const {
// // //     loading: generating,
// // //     fn: generateLetterFn,
// // //     data: generatedLetter,
// // //   } = useFetch(generateCoverLetter);

// // //   const {
// // //     loading: isImproving,
// // //     fn: improveFn,
// // //   } = useFetch(improveWithAI);

// // //   useEffect(() => {
// // //     if (generatedLetter) {
// // //       toast.success("Cover letter generated successfully!");
// // //       router.push(`/ai-cover-letter/${generatedLetter.id}`);
// // //       reset();
// // //     }
// // //   }, [generatedLetter]);

// // //   const onSubmit = async (data) => {
// // //     try {
// // //       await generateLetterFn(data);
// // //     } catch (error) {
// // //       toast.error(error.message || "Failed to generate cover letter");
// // //     }
// // //   };

// // //   const handleImproveDescription = async () => {
// // //     const current = watch("jobDescription");

// // //     if (!current) return;

// // //     try {
// // //       const improved = await improveFn({
// // //         current,
// // //         type: "Job Description",
// // //       });

// // //       setValue("jobDescription", improved);
// // //       toast.success("Improved with AI!");
// // //     } catch (error) {
// // //       toast.error("Failed to improve job description");
// // //     }
// // //   };

// // //   return (
// // //     <div className="space-y-6">
// // //       <Card>
// // //         <CardHeader>
// // //           <CardTitle>Job Details</CardTitle>
// // //           <CardDescription>
// // //             Provide information about the position you're applying for
// // //           </CardDescription>
// // //         </CardHeader>
// // //         <CardContent>
// // //           <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
// // //             <div className="grid grid-cols-2 gap-4">
// // //               <div className="space-y-2">
// // //                 <Label htmlFor="companyName">Company Name</Label>
// // //                 <Input
// // //                   id="companyName"
// // //                   placeholder="Enter company name"
// // //                   {...register("companyName")}
// // //                 />
// // //                 {errors.companyName && (
// // //                   <p className="text-sm text-red-500">
// // //                     {errors.companyName.message}
// // //                   </p>
// // //                 )}
// // //               </div>

// // //               <div className="space-y-2">
// // //                 <Label htmlFor="jobTitle">Job Title</Label>
// // //                 <Input
// // //                   id="jobTitle"
// // //                   placeholder="Enter job title"
// // //                   {...register("jobTitle")}
// // //                 />
// // //                 {errors.jobTitle && (
// // //                   <p className="text-sm text-red-500">
// // //                     {errors.jobTitle.message}
// // //                   </p>
// // //                 )}
// // //               </div>
// // //             </div>

// // //             <div className="space-y-2">
// // //               <Label htmlFor="jobDescription">Job Description</Label>
// // //               <Textarea
// // //                 id="jobDescription"
// // //                 placeholder="Paste the job description here"
// // //                 className="h-32"
// // //                 {...register("jobDescription")}
// // //               />
// // //               {errors.jobDescription && (
// // //                 <p className="text-sm text-red-500">
// // //                   {errors.jobDescription.message}
// // //                 </p>
// // //               )}
// // //             </div>

// // //             <div className="flex justify-between items-center">
// // //               <Button
// // //                 type="button"
// // //                 variant="ghost"
// // //                 size="sm"
// // //                 onClick={handleImproveDescription}
// // //                 disabled={isImproving || !watch("jobDescription")}
// // //               >
// // //                 {isImproving ? (
// // //                   <>
// // //                     <Loader2 className="h-4 w-4 mr-2 animate-spin" />
// // //                     Improving...
// // //                   </>
// // //                 ) : (
// // //                   <>
// // //                     <Sparkles className="h-4 w-4 mr-2" />
// // //                     Improve with AI
// // //                   </>
// // //                 )}
// // //               </Button>

// // //               <Button type="submit" disabled={generating}>
// // //                 {generating ? (
// // //                   <>
// // //                     <Loader2 className="mr-2 h-4 w-4 animate-spin" />
// // //                     Generating...
// // //                   </>
// // //                 ) : (
// // //                   "Generate Cover Letter"
// // //                 )}
// // //               </Button>
// // //             </div>
// // //           </form>
// // //         </CardContent>
// // //       </Card>
// // //     </div>
// // //   );
// // // }

// // "use client";

// // import { useState, useEffect } from "react";
// // import { useForm } from "react-hook-form";
// // import { zodResolver } from "@hookform/resolvers/zod";
// // import { toast } from "sonner";
// // import { AlertTriangle, Loader2, Sparkles } from "lucide-react";
// // import { Button } from "@/components/ui/button";
// // import {
// //   Card,
// //   CardContent,
// //   CardDescription,
// //   CardHeader,
// //   CardTitle,
// // } from "@/components/ui/card";
// // import { Input } from "@/components/ui/input";
// // import { Label } from "@/components/ui/label";
// // import { Textarea } from "@/components/ui/textarea";
// // import { generateCoverLetter } from "@/actions/cover-letter";
// // import { improveWithAI } from "@/actions/cover-letter"; // 👈 import your AI logic
// // import useFetch from "@/hooks/use-fetch";
// // import { coverLetterSchema } from "@/app/lib/schema";
// // import { useRouter } from "next/navigation";

// // export default function CoverLetterGenerator() {
// //   const router = useRouter();
// //   const [isImproving, setIsImproving] = useState(false);
// //   const [type] = useState("Job Description");

// //   const {
// //     register,
// //     handleSubmit,
// //     formState: { errors },
// //     reset,
// //     watch,
// //     setValue,
// //   } = useForm({
// //     resolver: zodResolver(coverLetterSchema),
// //   });

// //   const {
// //     loading: generating,
// //     fn: generateLetterFn,
// //     data: generatedLetter,
// //   } = useFetch(generateCoverLetter);

// //   useEffect(() => {
// //     if (generatedLetter) {
// //       toast.success("Cover letter generated successfully!");
// //       router.push(`/ai-cover-letter/${generatedLetter.id}`);
// //       reset();
// //     }
// //   }, [generatedLetter]);

// //   const onSubmit = async (data) => {
// //     try {
// //       await generateLetterFn(data);
// //     } catch (error) {
// //       toast.error(error.message || "Failed to generate cover letter");
// //     }
// //   };

// //   const handleImproveDescription = async () => {
// //     const currentDesc = watch("jobDescription");
// //     if (!currentDesc) return;

// //     try {
// //       setIsImproving(true);
// //       const improved = await improveWithAI(currentDesc, type);
// //       setValue("jobDescription", improved);
// //       toast.success("Description improved successfully!");
// //     } catch (error) {
// //       toast.error("Failed to improve description.");
// //       console.error(error);
// //     } finally {
// //       setIsImproving(false);
// //     }
// //   };

// //   return (
// //     <div className="space-y-6">
// //       <Card>
// //         <CardHeader>
// //           <CardTitle>Job Details</CardTitle>
// //           <CardDescription>
// //             Provide information about the position you're applying for
// //           </CardDescription>
// //         </CardHeader>
// //         <CardContent>
// //           <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
// //             <div className="grid grid-cols-2 gap-4">
// //               <div className="space-y-2">
// //                 <Label htmlFor="companyName">Company Name</Label>
// //                 <Input
// //                   id="companyName"
// //                   placeholder="Enter company name"
// //                   {...register("companyName")}
// //                 />
// //                 {errors.companyName && (
// //                   <p className="text-sm text-red-500">
// //                     {errors.companyName.message}
// //                   </p>
// //                 )}
// //               </div>

// //               <div className="space-y-2">
// //                 <Label htmlFor="jobTitle">Job Title</Label>
// //                 <Input
// //                   id="jobTitle"
// //                   placeholder="Enter job title"
// //                   {...register("jobTitle")}
// //                 />
// //                 {errors.jobTitle && (
// //                   <p className="text-sm text-red-500">
// //                     {errors.jobTitle.message}
// //                   </p>
// //                 )}
// //               </div>
// //             </div>



// //             {/* Warning */}
// //             {watch("jobDescription") && resumeMode !== "preview" && (
// //               <div className="flex p-3 gap-2 items-center border-2 border-yellow-600 text-yellow-600 rounded mb-2">
// //                 <AlertTriangle className="h-5 w-5" />
// //                 <span className="text-sm">
// //                   You will lose edited markdown if you update the form data.
// //                 </span>
// //               </div>
// //             )}

// //             {/* Show preview or textarea based on mode */}
// //             {resumeMode === "preview" ? (
// //               <div className="border rounded-md bg-white p-4">
// //                 <MDEditor.Markdown
// //                   source={watch("jobDescription")}
// //                   style={{ whiteSpace: "pre-wrap" }}
// //                 />
// //               </div>
// //             ) : (
// //               <div className="space-y-2">
// //                 <Textarea
// //                   placeholder={`Description of your ${type.toLowerCase()}`}
// //                   className="h-32"
// //                   {...register("jobDescription")}
// //                 />
// //                 {errors.jobDescription && (
// //                   <p className="text-sm text-red-500">
// //                     {errors.jobDescription.message}
// //                   </p>
// //                 )}
// //               </div>
// //             )}


// //             <div className="flex justify-between items-center">
// //               <Button
// //                 type="button"
// //                 variant="ghost"
// //                 size="sm"
// //                 onClick={handleImproveDescription}
// //                 disabled={isImproving || !watch("jobDescription")}
// //               >
// //                 {isImproving ? (
// //                   <>
// //                     <Loader2 className="h-4 w-4 mr-2 animate-spin" />
// //                     Improving...
// //                   </>
// //                 ) : (
// //                   <>
// //                     <Sparkles className="h-4 w-4 mr-2" />
// //                     Improve with AI
// //                   </>
// //                 )}
// //               </Button>

// //               <Button type="submit" disabled={generating}>
// //                 {generating ? (
// //                   <>
// //                     <Loader2 className="mr-2 h-4 w-4 animate-spin" />
// //                     Generating...
// //                   </>
// //                 ) : (
// //                   "Generate Cover Letter"
// //                 )}
// //               </Button>
// //             </div>
// //           </form>
// //         </CardContent>
// //       </Card>
// //     </div>
// //   );
// // }

// // "use client";

// // import { useState, useEffect } from "react";
// // import { useForm } from "react-hook-form";
// // import { zodResolver } from "@hookform/resolvers/zod";
// // import { toast } from "sonner";
// // import { AlertTriangle, Loader2, Sparkles } from "lucide-react";
// // import { Button } from "@/components/ui/button";
// // import {
// //   Card,
// //   CardContent,
// //   CardDescription,
// //   CardHeader,
// //   CardTitle,
// // } from "@/components/ui/card";
// // import { Input } from "@/components/ui/input";
// // import { Label } from "@/components/ui/label";
// // import MDEditor from "@uiw/react-md-editor";
// // import { generateCoverLetter } from "@/actions/cover-letter";
// // import { improveWithAI } from "@/actions/cover-letter";
// // import useFetch from "@/hooks/use-fetch";
// // import { coverLetterSchema } from "@/app/lib/schema";
// // import { useRouter } from "next/navigation";

// // export default function CoverLetterGenerator() {
// //   const router = useRouter();
// //   const [isImproving, setIsImproving] = useState(false);
// //   const [type] = useState("Job Description");
// //   const [editMode, setEditMode] = useState(true); // true = edit, false = preview

// //   const {
// //     register,
// //     handleSubmit,
// //     formState: { errors },
// //     reset,
// //     watch,
// //     setValue,
// //   } = useForm({
// //     resolver: zodResolver(coverLetterSchema),
// //   });

// //   const {
// //     loading: generating,
// //     fn: generateLetterFn,
// //     data: generatedLetter,
// //   } = useFetch(generateCoverLetter);

// //   useEffect(() => {
// //     if (generatedLetter) {
// //       toast.success("Cover letter generated successfully!");
// //       router.push(`/ai-cover-letter/${generatedLetter.id}`);
// //       reset();
// //     }
// //   }, [generatedLetter, reset, router]);

// //   const onSubmit = async (data) => {
// //     try {
// //       await generateLetterFn(data);
// //     } catch (error) {
// //       toast.error(error.message || "Failed to generate cover letter");
// //     }
// //   };

// //   const handleImproveDescription = async () => {
// //     const currentDesc = watch("jobDescription");
// //     if (!currentDesc) return;

// //     try {
// //       setIsImproving(true);
// //       const improved = await improveWithAI(currentDesc, type);
// //       setValue("jobDescription", improved);
// //       toast.success("Description improved successfully!");
// //     } catch (error) {
// //       toast.error("Failed to improve description.");
// //       console.error(error);
// //     } finally {
// //       setIsImproving(false);
// //     }
// //   };

// //   const jobDescription = watch("jobDescription");

// //   return (
// //     <div className="space-y-6">
// //       <Card>
// //         <CardHeader>
// //           <CardTitle>Job Details</CardTitle>
// //           <CardDescription>
// //             Provide information about the position you're applying for
// //           </CardDescription>
// //         </CardHeader>
// //         <CardContent>
// //           <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
// //             <div className="grid grid-cols-2 gap-4">
// //               <div className="space-y-2">
// //                 <Label htmlFor="companyName">Company Name</Label>
// //                 <Input
// //                   id="companyName"
// //                   placeholder="Enter company name"
// //                   {...register("companyName")}
// //                 />
// //                 {errors.companyName && (
// //                   <p className="text-sm text-red-500">
// //                     {errors.companyName.message}
// //                   </p>
// //                 )}
// //               </div>
// //               <div className="space-y-2">
// //                 <Label htmlFor="jobTitle">Job Title</Label>
// //                 <Input
// //                   id="jobTitle"
// //                   placeholder="Enter job title"
// //                   {...register("jobTitle")}
// //                 />
// //                 {errors.jobTitle && (
// //                   <p className="text-sm text-red-500">
// //                     {errors.jobTitle.message}
// //                   </p>
// //                 )}
// //               </div>
// //             </div>

// //             {/* Warning */}
// //             {jobDescription && !editMode && (
// //               <div className="flex p-3 gap-2 items-center border-2 border-yellow-600 text-yellow-600 rounded mb-2">
// //                 <AlertTriangle className="h-5 w-5" />
// //                 <span className="text-sm">
// //                   You will lose edited markdown if you update the form data.
// //                 </span>
// //               </div>
// //             )}

// //             {/* Show preview or editor based on mode */}
// //             {editMode ? (
// //               <div className="space-y-2">
// //                 <MDEditor
// //                   value={jobDescription}
// //                   onChange={(value) => setValue("jobDescription", value)}
// //                   height={200}
// //                   preview="edit"
// //                   placeholder={`Description of your ${type.toLowerCase()}`}
// //                 />
// //                 {errors.jobDescription && (
// //                   <p className="text-sm text-red-500">
// //                     {errors.jobDescription.message}
// //                   </p>
// //                 )}
// //               </div>
// //             ) : (
// //               <div className="border rounded-md bg-white p-4">
// //                 <MDEditor.Markdown
// //                   source={jobDescription}
// //                   style={{ whiteSpace: "pre-wrap" }}
// //                 />
// //               </div>
// //             )}

// //             <div className="flex flex-col sm:flex-row gap-2 sm:justify-between items-center">
// //               <div className="flex gap-2">
// //                 <Button
// //                   type="button"
// //                   variant="ghost"
// //                   size="sm"
// //                   onClick={() => setEditMode(!editMode)}
// //                 >
// //                   {editMode ? "Preview" : "Edit"}
// //                 </Button>
// //                 <Button
// //                   type="button"
// //                   variant="ghost"
// //                   size="sm"
// //                   onClick={handleImproveDescription}
// //                   disabled={isImproving || !jobDescription}
// //                 >
// //                   {isImproving ? (
// //                     <>
// //                       <Loader2 className="h-4 w-4 mr-2 animate-spin" />
// //                       Improving...
// //                     </>
// //                   ) : (
// //                     <>
// //                       <Sparkles className="h-4 w-4 mr-2" />
// //                       Improve with AI
// //                     </>
// //                   )}
// //                 </Button>
// //               </div>
// //               <Button type="submit" disabled={generating}>
// //                 {generating ? (
// //                   <>
// //                     <Loader2 className="mr-2 h-4 w-4 animate-spin" />
// //                     Generating...
// //                   </>
// //                 ) : (
// //                   "Generate Cover Letter"
// //                 )}
// //               </Button>
// //             </div>
// //           </form>
// //         </CardContent>
// //       </Card>
// //     </div>
// //   );
// // }


// // "use client";

// // import { useState, useEffect } from "react";
// // import { useForm } from "react-hook-form";
// // import { zodResolver } from "@hookform/resolvers/zod";
// // import { toast } from "sonner";
// // import { Loader2, Sparkles } from "lucide-react";
// // import { Button } from "@/components/ui/button";
// // import {
// //   Card,
// //   CardContent,
// //   CardDescription,
// //   CardHeader,
// //   CardTitle,
// // } from "@/components/ui/card";
// // import { Input } from "@/components/ui/input";
// // import { Label } from "@/components/ui/label";
// // import { generateCoverLetter, improveWithAI } from "@/actions/cover-letter";
// // import useFetch from "@/hooks/use-fetch";
// // import { coverLetterSchema } from "@/app/lib/schema";
// // import { useRouter } from "next/navigation";

// // export default function CoverLetterGenerator() {
// //   const router = useRouter();
// //   const [isImproving, setIsImproving] = useState(false);
// //   const [type] = useState("Job Description");

// //   const {
// //     register,
// //     handleSubmit,
// //     formState: { errors },
// //     reset,
// //     watch,
// //     setValue,
// //   } = useForm({
// //     resolver: zodResolver(coverLetterSchema),
// //   });

// //   const {
// //     loading: generating,
// //     fn: generateLetterFn,
// //     data: generatedLetter,
// //   } = useFetch(generateCoverLetter);

// //   const jobDescription = watch("jobDescription");

// //   useEffect(() => {
// //     if (generatedLetter) {
// //       toast.success("Cover letter generated successfully!");
// //       router.push(`/ai-cover-letter/${generatedLetter.id}`);
// //       reset();
// //     }
// //   }, [generatedLetter, reset, router]);

// //   const onSubmit = async (data) => {
// //     try {
// //       await generateLetterFn(data);
// //     } catch (error) {
// //       toast.error(error.message || "Failed to generate cover letter");
// //     }
// //   };

// //   const handleImproveDescription = async () => {
// //     const currentDesc = watch("jobDescription");
// //     if (!currentDesc) return;

// //     try {
// //       setIsImproving(true);
// //       const improved = await improveWithAI(currentDesc, type);
// //       setValue("jobDescription", improved);
// //       toast.success("Description improved successfully!");
// //     } catch (error) {
// //       toast.error("Failed to improve description.");
// //       console.error(error);
// //     } finally {
// //       setIsImproving(false);
// //     }
// //   };

// //   return (
// //     <div className="space-y-6">
// //       <Card>
// //         <CardHeader>
// //           <CardTitle>Job Details</CardTitle>
// //           <CardDescription>
// //             Provide information about the position you're applying for
// //           </CardDescription>
// //         </CardHeader>

// //         <CardContent>
// //           <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
// //             <div className="grid grid-cols-2 gap-4">
// //               <div className="space-y-2">
// //                 <Label htmlFor="companyName">Company Name</Label>
// //                 <Input
// //                   id="companyName"
// //                   placeholder="Enter company name"
// //                   {...register("companyName")}
// //                 />
// //                 {errors.companyName && (
// //                   <p className="text-sm text-red-500">{errors.companyName.message}</p>
// //                 )}
// //               </div>

// //               <div className="space-y-2">
// //                 <Label htmlFor="jobTitle">Job Title</Label>
// //                 <Input
// //                   id="jobTitle"
// //                   placeholder="Enter job title"
// //                   {...register("jobTitle")}
// //                 />
// //                 {errors.jobTitle && (
// //                   <p className="text-sm text-red-500">{errors.jobTitle.message}</p>
// //                 )}
// //               </div>
// //             </div>

// //             <div className="space-y-2">
// //               <Label htmlFor="jobDescription">Job Description</Label>
// //               <textarea
// //                 id="jobDescription"
// //                 {...register("jobDescription")}
// //                 rows={8}
// //                 className="w-full border rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-y bg-[#2E2C2C]"
// //                 placeholder="Paste or write the job description here..."
// //               ></textarea>
// //               {errors.jobDescription && (
// //                 <p className="text-sm text-red-500">{errors.jobDescription.message}</p>
// //               )}
// //             </div>

// //             {/* Buttons */}
// //             <div className="flex flex-col sm:flex-row gap-2 sm:justify-between items-center mt-4">
// //               <Button
// //                 type="button"
// //                 variant="ghost"
// //                 size="sm"
// //                 onClick={handleImproveDescription}
// //                 disabled={isImproving || !jobDescription}
// //               >
// //                 {isImproving ? (
// //                   <>
// //                     <Loader2 className="h-4 w-4 mr-2 animate-spin" />
// //                     Improving...
// //                   </>
// //                 ) : (
// //                   <>
// //                     <Sparkles className="h-4 w-4 mr-2" />
// //                     Improve with AI
// //                   </>
// //                 )}
// //               </Button>

// //               <Button type="submit" disabled={generating}>
// //                 {generating ? (
// //                   <>
// //                     <Loader2 className="mr-2 h-4 w-4 animate-spin" />
// //                     Generating...
// //                   </>
// //                 ) : (
// //                   "Generate Cover Letter"
// //                 )}
// //               </Button>
// //             </div>
// //           </form>
// //         </CardContent>
// //       </Card>
// //     </div>
// //   );
// // }


// "use client";

// import { useState, useEffect } from "react";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { toast } from "sonner";
// import { Loader2, Sparkles } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { generateCoverLetter, improveWithAI } from "@/actions/cover-letter";
// import useFetch from "@/hooks/use-fetch";
// import { coverLetterSchema } from "@/app/lib/schema";
// import { useRouter } from "next/navigation";

// export default function CoverLetterGenerator() {
//   const router = useRouter();
//   const [isImproving, setIsImproving] = useState(false);
//   const [type] = useState("Job Description");

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//     watch,
//     setValue,
//   } = useForm({
//     resolver: zodResolver(coverLetterSchema),
//   });

//   const {
//     loading: generating,
//     fn: generateLetterFn,
//     data: generatedLetter,
//   } = useFetch(generateCoverLetter);

//   const jobDescription = watch("jobDescription");

//   useEffect(() => {
//     if (generatedLetter) {
//       toast.success("Cover letter generated successfully!");
//       router.push(`/ai-cover-letter/${generatedLetter.id}`);
//       reset();
//     }
//   }, [generatedLetter, reset, router]);

//   const onSubmit = async (data) => {
//     try {
//       await generateLetterFn(data);
//     } catch (error) {
//       toast.error(error.message || "Failed to generate cover letter");
//     }
//   };

//   const handleImproveDescription = async () => {
//     const currentDesc = watch("jobDescription");
//     if (!currentDesc) return;

//     try {
//       setIsImproving(true);
//       const improved = await improveWithAI(currentDesc, type);
//       setValue("jobDescription", improved);
//       toast.success("Description improved successfully!");
//     } catch (error) {
//       toast.error("Failed to improve description.");
//       console.error(error);
//     } finally {
//       setIsImproving(false);
//     }
//   };

//   return (
//     <div className="space-y-6">
//       <Card>
//         <CardHeader>
//           <CardTitle>Job Details</CardTitle>
//           <CardDescription>
//             Provide information about the position you're applying for
//           </CardDescription>
//         </CardHeader>
//         <CardContent>
//           <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//             <div className="grid grid-cols-2 gap-4">
//               <div className="space-y-2">
//                 <Label htmlFor="companyName">Company Name</Label>
//                 <Input
//                   id="companyName"
//                   placeholder="Enter company name"
//                   {...register("companyName")}
//                 />
//                 {errors.companyName && (
//                   <p className="text-sm text-red-500">{errors.companyName.message}</p>
//                 )}
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="jobTitle">Job Title</Label>
//                 <Input
//                   id="jobTitle"
//                   placeholder="Enter job title"
//                   {...register("jobTitle")}
//                 />
//                 {errors.jobTitle && (
//                   <p className="text-sm text-red-500">{errors.jobTitle.message}</p>
//                 )}
//               </div>
//             </div>
//             <div className="space-y-2">
//               <Label htmlFor="jobDescription">Job Description</Label>
//               <textarea
//                 id="jobDescription"
//                 {...register("jobDescription")}
//                 rows={8}
//                 className="w-full border rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-y bg-[#2E2C2C]"
//                 placeholder="Paste or write the job description here..."
//               ></textarea>
//               {errors.jobDescription && (
//                 <p className="text-sm text-red-500">{errors.jobDescription.message}</p>
//               )}
//             </div>
//             {/* Buttons */}
//             <div className="flex flex-col sm:flex-row gap-2 sm:justify-between items-center mt-4 cursor-pointer">
//               <Button
//                 type="button"
//                 variant="ghost"
//                 size="sm"
//                 onClick={handleImproveDescription}
//                 disabled={isImproving || !jobDescription}
//                 className="cursor-pointer"
//               >
//                 {isImproving ? (
//                   <>
//                     <Loader2 className="h-4 w-4 mr-2 animate-spin" />
//                     Improving...
//                   </>
//                 ) : (
//                   <>
//                     <Sparkles className="h-4 w-4 mr-2 cursor-pointer" />
//                        Improve with AI
//                    </>
//                 )}
//               </Button>
//              <Button
//                 type="submit"
//                 disabled={generating}
//                 className="cursor-pointer"
//               >
//                 {generating ? (
//                   <>
//                     <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//                     Generating...
//                   </>
//                 ) : (
//                   "Generate Cover Letter"
//                 )}
//               </Button>

//             </div>
//           </form>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }


"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Loader2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { generateCoverLetter, improveWithAI } from "@/actions/cover-letter";
import useFetch from "@/hooks/use-fetch";
import { coverLetterSchema } from "@/app/lib/schema";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion"; // 🟡 Framer Motion imported

export default function CoverLetterGenerator() {
  const router = useRouter();
  const [isImproving, setIsImproving] = useState(false);
  const [type] = useState("Job Description");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue,
  } = useForm({
    resolver: zodResolver(coverLetterSchema),
  });

  const {
    loading: generating,
    fn: generateLetterFn,
    data: generatedLetter,
  } = useFetch(generateCoverLetter);

  const jobDescription = watch("jobDescription");

  useEffect(() => {
    if (generatedLetter) {
      toast.success("Cover letter generated successfully!");
      router.push(`/ai-cover-letter/${generatedLetter.id}`);
      reset();
    }
  }, [generatedLetter, reset, router]);

  const onSubmit = async (data) => {
    try {
      await generateLetterFn(data);
    } catch (error) {
      toast.error(error.message || "Failed to generate cover letter");
    }
  };

  const handleImproveDescription = async () => {
    const currentDesc = watch("jobDescription");
    if (!currentDesc) return;

    try {
      setIsImproving(true);
      const improved = await improveWithAI(currentDesc, type);
      setValue("jobDescription", improved);
      toast.success("Description improved successfully!");
    } catch (error) {
      toast.error("Failed to improve description.");
      console.error(error);
    } finally {
      setIsImproving(false);
    }
  };

  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Card>
        <CardHeader>
          <CardTitle>Job Details</CardTitle>
          <CardDescription>
            Provide information about the position you're applying for
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  placeholder="Enter your first name"
                  {...register("firstName")}
                />
                {errors.firstName && (
                  <p className="text-sm text-red-500">{errors.firstName.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  placeholder="Enter your last name"
                  {...register("lastName")}
                />
                {errors.lastName && (
                  <p className="text-sm text-red-500">{errors.lastName.message}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  placeholder="e.g., +1 555 123 4567"
                  {...register("phone")}
                />
                {errors.phone && (
                  <p className="text-sm text-red-500">{errors.phone.message}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Input
                id="address"
                placeholder="Street, City, State, ZIP"
                {...register("address")}
              />
              {errors.address && (
                <p className="text-sm text-red-500">{errors.address.message}</p>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="companyName">Company Name</Label>
                <Input
                  id="companyName"
                  placeholder="Enter company name"
                  {...register("companyName")}
                />
                {errors.companyName && (
                  <p className="text-sm text-red-500">{errors.companyName.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="jobTitle">Job Title</Label>
                <Input
                  id="jobTitle"
                  placeholder="Enter job title"
                  {...register("jobTitle")}
                />
                {errors.jobTitle && (
                  <p className="text-sm text-red-500">{errors.jobTitle.message}</p>
                )}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-2"
            >
              <Label htmlFor="jobDescription">Job Description</Label>
              <textarea
                id="jobDescription"
                {...register("jobDescription")}
                rows={8}
                className="w-full border rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-y bg-[#2E2C2C]"
                placeholder="Paste or write the job description here..."
              ></textarea>
              {errors.jobDescription && (
                <p className="text-sm text-red-500">{errors.jobDescription.message}</p>
              )}
            </motion.div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:justify-between sm:items-center mt-4">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto"
              >
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={handleImproveDescription}
                  disabled={isImproving || !jobDescription}
                  className="w-full sm:w-auto cursor-pointer"
                >
                  {isImproving ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Improving...
                    </>
                  ) : (
                    <>
                      <Sparkles className="h-4 w-4 mr-2" />
                      Improve with AI
                    </>
                  )}
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto"
              >
                <Button type="submit" disabled={generating} className="w-full sm:w-auto cursor-pointer">
                  {generating ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    "Generate Cover Letter"
                  )}
                </Button>
              </motion.div>
            </div>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
}
