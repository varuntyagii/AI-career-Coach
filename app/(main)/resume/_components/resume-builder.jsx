
// "use client";

// import { useState, useEffect } from "react";
// import { useForm, Controller } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import {
//   AlertTriangle,
//   Download,
//   Edit,
//   Loader2,
//   Monitor,
//   Save,
// } from "lucide-react";
// import { toast } from "sonner";
// import MDEditor from "@uiw/react-md-editor";
// import { Button } from "@/components/ui/button";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Textarea } from "@/components/ui/textarea";
// import { Input } from "@/components/ui/input";
// import { saveResume } from "@/actions/resume";
// import { EntryForm } from "./entry-form";
// import useFetch from "@/hooks/use-fetch";
// import { useUser } from "@clerk/nextjs";
// import { entriesToMarkdown } from "@/app/lib/helper";
// import { resumeSchema } from "@/app/lib/schema";

// export default function ResumeBuilder({ initialContent }) {
//   const [activeTab, setActiveTab] = useState("edit");
//   const [previewContent, setPreviewContent] = useState(initialContent || "");
//   const { user } = useUser();
//   const [resumeMode, setResumeMode] = useState("preview");
//   const [isGenerating, setIsGenerating] = useState(false);

//   const {
//     control,
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm({
//     resolver: zodResolver(resumeSchema),
//     defaultValues: {
//       contactInfo: {},
//       summary: "",
//       skills: "",
//       experience: [],
//       education: [],
//       projects: [],
//     },
//   });

//   const {
//     loading: isSaving,
//     fn: saveResumeFn,
//     data: saveResult,
//     error: saveError,
//   } = useFetch(saveResume);

//   const formValues = watch();

//   useEffect(() => {
//     if (initialContent) setActiveTab("preview");
//   }, [initialContent]);

//   useEffect(() => {
//     if (activeTab === "edit") {
//       const newContent = getCombinedContent();
//       setPreviewContent(newContent || initialContent || "");
//     }
//   }, [formValues, activeTab]);

//   useEffect(() => {
//     if (saveResult && !isSaving) {
//       toast.success("Resume saved successfully!");
//     }
//     if (saveError) {
//       toast.error(saveError.message || "Failed to save resume");
//     }
//   }, [saveResult, saveError, isSaving]);

//   const getContactMarkdown = () => {
//     const { contactInfo } = formValues;
//     const parts = [];
//     if (contactInfo?.email) parts.push(`📧 ${contactInfo.email}`);
//     if (contactInfo?.mobile) parts.push(`📱 ${contactInfo.mobile}`);
//     if (contactInfo?.linkedin) parts.push(`💼 [LinkedIn](${contactInfo.linkedin})`);
//     if (contactInfo?.twitter) parts.push(`🐦 [Twitter](${contactInfo.twitter})`);

//     return parts.length > 0
//       ? `## <div align="center">${user?.fullName || "Your Name"}</div>
//         \n\n<div align="center">\n\n${parts.join(" | ")}\n\n</div>`
//       : "";
//   };

//   const getCombinedContent = () => {
//     const { summary, skills, experience, education, projects } = formValues;
//     return [
//       getContactMarkdown(),
//       summary && `## Professional Summary\n\n${summary}`,
//       skills && `## Skills\n\n${skills}`,
//       entriesToMarkdown(experience, "Work Experience"),
//       entriesToMarkdown(education, "Education"),
//       entriesToMarkdown(projects, "Projects"),
//     ]
//       .filter(Boolean)
//       .join("\n\n");
//   };

//   const handleGeneratePDF = async () => {
//     setIsGenerating(true);
//     try {
//       const html2pdf = (await import("html2pdf.js")).default;
//       const element = document.getElementById("resume-pdf");
//       const opt = {
//         margin: [15, 15],
//         filename: "resume.pdf",
//         image: { type: "jpeg", quality: 0.98 },
//         html2canvas: { scale: 2 },
//         jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
//       };

//       await html2pdf().set(opt).from(element).save();
//     } catch (error) {
//       console.error("PDF generation error:", error);
//       toast.error("Failed to generate PDF");
//     } finally {
//       setIsGenerating(false);
//     }
//   };

//   const onSubmit = async (data) => {
//     try {
//       const formattedContent = previewContent
//         .replace(/\n/g, "\n")
//         .replace(/\n\s*\n/g, "\n\n")
//         .trim();

//       await saveResumeFn(formattedContent);
//     } catch (error) {
//       console.error("Save error:", error);
//     }
//   };

//   return (
//     <div data-color-mode="light" className="space-y-4">
//       <div className="flex flex-col md:flex-row justify-between items-center gap-2">
//         <h1 className="font-bold gradient-title text-5xl md:text-6xl">
//           Resume Builder
//         </h1>
//         <div className="space-x-2">
//           <Button
//             variant="destructive"
//             onClick={handleSubmit(onSubmit)}
//             disabled={isSaving}
//           >
//             {isSaving ? (
//               <>
//                 <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//                 Saving...
//               </>
//             ) : (
//               <>
//                 <Save className="h-4 w-4" />
//                 Save
//               </>
//             )}
//           </Button>
//           <Button onClick={handleGeneratePDF} disabled={isGenerating}>
//             {isGenerating ? (
//               <>
//                 <Loader2 className="h-4 w-4 animate-spin" />
//                 Generating PDF...
//               </>
//             ) : (
//               <>
//                 <Download className="h-4 w-4" />
//                 Download PDF
//               </>
//             )}
//           </Button>
//         </div>
//       </div>

//       <Tabs value={activeTab} onValueChange={setActiveTab}>
//         <TabsList>
//           <TabsTrigger value="edit">Form</TabsTrigger>
//           <TabsTrigger value="preview">Markdown</TabsTrigger>
//         </TabsList>

//         <TabsContent value="edit">
//           <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
//             {/* Contact Information */}
//             <div className="space-y-4">
//               <h3 className="text-lg font-medium">Contact Information</h3>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 border rounded-lg bg-muted/50">
//                 <div className="space-y-2">
//                   <label className="text-sm font-medium">Name: </label>
//                   <Input
//                     {...register("contactInfo.name")}
//                     type="text"
//                     placeholder="First Name"
//                     error={errors.contactInfo?.email}
//                   />
//                   {errors.contactInfo?.name && (
//                     <p className="text-sm text-red-500">
//                       {errors.contactInfo.name.message}
//                     </p>
//                   )}
//                 </div>
//                 <div className="space-y-2">
//                   <label className="text-sm font-medium">Surname: </label>
//                   <Input
//                     {...register("contactInfo.surname")}
//                     type="text"
//                     placeholder="Last Name"
//                     error={errors.contactInfo?.surname}
//                   />
//                   {errors.contactInfo?.surname && (
//                     <p className="text-sm text-red-500">
//                       {errors.contactInfo.surname.message}
//                     </p>
//                   )}
//                 </div>
//                 <div className="space-y-2">
//                   <label className="text-sm font-medium">Email</label>
//                   <Input
//                     {...register("contactInfo.email")}
//                     type="email"
//                     placeholder="your@email.com"
//                     error={errors.contactInfo?.email}
//                   />
//                   {errors.contactInfo?.email && (
//                     <p className="text-sm text-red-500">
//                       {errors.contactInfo.email.message}
//                     </p>
//                   )}
//                 </div>
//                 <div className="space-y-2">
//                   <label className="text-sm font-medium">Mobile Number</label>
//                   <Input
//                     {...register("contactInfo.mobile")}
//                     type="tel"
//                     placeholder="+1 234 567 8900"
//                   />
//                   {errors.contactInfo?.mobile && (
//                     <p className="text-sm text-red-500">
//                       {errors.contactInfo.mobile.message}
//                     </p>
//                   )}
//                 </div>
//                 <div className="space-y-2">
//                   <label className="text-sm font-medium">LinkedIn URL</label>
//                   <Input
//                     {...register("contactInfo.linkedin")}
//                     type="url"
//                     placeholder="https://linkedin.com/in/your-profile"
//                   />
//                   {errors.contactInfo?.linkedin && (
//                     <p className="text-sm text-red-500">
//                       {errors.contactInfo.linkedin.message}
//                     </p>
//                   )}
//                 </div>
//                 <div className="space-y-2">
//                   <label className="text-sm font-medium">
//                     Twitter/X Profile
//                   </label>
//                   <Input
//                     {...register("contactInfo.twitter")}
//                     type="url"
//                     placeholder="https://twitter.com/your-handle"
//                   />
//                   {errors.contactInfo?.twitter && (
//                     <p className="text-sm text-red-500">
//                       {errors.contactInfo.twitter.message}
//                     </p>
//                   )}
//                 </div>
//               </div>
//             </div>

//             {/* Summary */}
//             <div className="space-y-4">
//               <h3 className="text-lg font-medium">Professional Summary</h3>
//               <Controller
//                 name="summary"
//                 control={control}
//                 render={({ field }) => (
//                   <Textarea
//                     {...field}
//                     className="h-32"
//                     placeholder="Write a compelling professional summary..."
//                     error={errors.summary}
//                   />
//                 )}
//               />
//               {errors.summary && (
//                 <p className="text-sm text-red-500">{errors.summary.message}</p>
//               )}
//             </div>

//             {/* Skills */}
//             <div className="space-y-4">
//               <h3 className="text-lg font-medium">Skills</h3>
//               <Controller
//                 name="skills"
//                 control={control}
//                 render={({ field }) => (
//                   <Textarea
//                     {...field}
//                     className="h-32"
//                     placeholder="List your key skills..."
//                     error={errors.skills}
//                   />
//                 )}
//               />
//               {errors.skills && (
//                 <p className="text-sm text-red-500">{errors.skills.message}</p>
//               )}
//             </div>

//             {/* Experience */}
//             <div className="space-y-4">
//               <h3 className="text-lg font-medium">Work Experience</h3>
//               <Controller
//                 name="experience"
//                 control={control}
//                 render={({ field }) => (
//                   <EntryForm
//                     type="Experience"
//                     entries={field.value}
//                     onChange={field.onChange}
//                   />
//                 )}
//               />
//               {errors.experience && (
//                 <p className="text-sm text-red-500">
//                   {errors.experience.message}
//                 </p>
//               )}
//             </div>

//             {/* Education */}
//             <div className="space-y-4">
//               <h3 className="text-lg font-medium">Education</h3>
//               <Controller
//                 name="education"
//                 control={control}
//                 render={({ field }) => (
//                   <EntryForm
//                     type="Education"
//                     entries={field.value}
//                     onChange={field.onChange}
//                   />
//                 )}
//               />
//               {errors.education && (
//                 <p className="text-sm text-red-500">
//                   {errors.education.message}
//                 </p>
//               )}
//             </div>

//             {/* Projects */}
//             <div className="space-y-4">
//               <h3 className="text-lg font-medium">Projects</h3>
//               <Controller
//                 name="projects"
//                 control={control}
//                 render={({ field }) => (
//                   <EntryForm
//                     type="Project"
//                     entries={field.value}
//                     onChange={field.onChange}
//                   />
//                 )}
//               />
//               {errors.projects && (
//                 <p className="text-sm text-red-500">
//                   {errors.projects.message}
//                 </p>
//               )}
//             </div>
//           </form>
//         </TabsContent>

//         <TabsContent value="preview">
//           {activeTab === "preview" && (
//             <Button
//               variant="link"
//               type="button"
//               className="mb-2"
//               onClick={() =>
//                 setResumeMode(resumeMode === "preview" ? "edit" : "preview")
//               }
//             >
//               {resumeMode === "preview" ? (
//                 <>
//                   <Edit className="h-4 w-4" />
//                   Edit Resume
//                 </>
//               ) : (
//                 <>
//                   <Monitor className="h-4 w-4" />
//                   Show Preview
//                 </>
//               )}
//             </Button>
//           )}

//           {activeTab === "preview" && resumeMode !== "preview" && (
//             <div className="flex p-3 gap-2 items-center border-2 border-yellow-600 text-yellow-600 rounded mb-2">
//               <AlertTriangle className="h-5 w-5" />
//               <span className="text-sm">
//                 You will lose edited markdown if you update the form data.
//               </span>
//             </div>
//           )}
//           <div className="border rounded-lg">
//             <MDEditor
//               value={previewContent}
//               onChange={setPreviewContent}
//               height={800}
//               preview={resumeMode}
//             />
//           </div>
//           <div className="hidden">
//             <div id="resume-pdf">
//               <MDEditor.Markdown
//                 source={previewContent}
//                 style={{
//                   background: "white",
//                   color: "black",
//                 }}
//               />
//             </div>
//           </div>
//         </TabsContent>
//       </Tabs>
//     </div>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  AlertTriangle,
  Download,
  Edit,
  Loader2,
  Monitor,
  Save,
} from "lucide-react";
import { toast } from "sonner";
import MDEditor from "@uiw/react-md-editor";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { saveResume } from "@/actions/resume";
import { EntryForm } from "./entry-form";
import useFetch from "@/hooks/use-fetch";
import { useUser } from "@clerk/nextjs";
import { entriesToMarkdown } from "@/app/lib/helper";
import { resumeSchema } from "@/app/lib/schema";

export default function ResumeBuilder({ initialContent }) {
  const [activeTab, setActiveTab] = useState("edit");
  const [previewContent, setPreviewContent] = useState(initialContent || "");
  const { user } = useUser();
  const [resumeMode, setResumeMode] = useState("preview");
  const [isGenerating, setIsGenerating] = useState(false);
  const [isSaved, setIsSaved] = useState(!!initialContent);
  const [hasRequiredContent, setHasRequiredContent] = useState(false);

  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(resumeSchema),
    defaultValues: {
      contactInfo: {},
      summary: "",
      skills: "",
      experience: [],
      education: [],
      projects: [],
    },
  });

  const {
    loading: isSaving,
    fn: saveResumeFn,
    data: saveResult,
    error: saveError,
  } = useFetch(saveResume);

  const formValues = watch();

  // Check if required fields are filled
  const checkRequiredContent = () => {
    const { contactInfo, summary, skills, experience, education } = formValues;
    
    // Check if at least basic required fields are filled
    const hasBasicInfo = contactInfo?.name || contactInfo?.surname || contactInfo?.email;
    const hasContent = summary || skills || (experience && experience.length > 0) || (education && education.length > 0);
    
    return hasBasicInfo || hasContent;
  };

  useEffect(() => {
    if (initialContent) setActiveTab("preview");
  }, [initialContent]);

  useEffect(() => {
    if (activeTab === "edit") {
      const newContent = getCombinedContent();
      setPreviewContent(newContent || initialContent || "");
    }
  }, [formValues, activeTab]);

  // Always update preview content when form values change, regardless of active tab
  useEffect(() => {
    const newContent = getCombinedContent();
    if (newContent && newContent.trim() !== "") {
      setPreviewContent(newContent);
    }
    
    // Update required content status
    setHasRequiredContent(checkRequiredContent());
  }, [formValues]);

  useEffect(() => {
    if (saveResult && !isSaving) {
      toast.success("Resume saved successfully! You can now download the PDF.");
      setIsSaved(true);
    }
    if (saveError) {
      toast.error(saveError.message || "Failed to save resume");
    }
  }, [saveResult, saveError, isSaving]);

  const getContactMarkdown = () => {
    const { contactInfo } = formValues;
    const parts = [];
    if (contactInfo?.email) parts.push(`📧 ${contactInfo.email}`);
    if (contactInfo?.mobile) parts.push(`📱 ${contactInfo.mobile}`);
    if (contactInfo?.linkedin) parts.push(`💼 [LinkedIn](${contactInfo.linkedin})`);
    if (contactInfo?.twitter) parts.push(`🐦 [Twitter](${contactInfo.twitter})`);

    // Get the full name from form data (name + surname) or fallback to Google profile name
    const fullName = contactInfo?.name && contactInfo?.surname 
      ? `${contactInfo.name} ${contactInfo.surname}`
      : contactInfo?.name || contactInfo?.surname || user?.fullName || "Your Name";

    return parts.length > 0 || fullName !== "Your Name"
      ? `## <div align="center">${fullName}</div>
        \n\n<div align="center">\n\n${parts.join(" | ")}\n\n</div>`
      : "";
  };

  const getCombinedContent = () => {
    const { summary, skills, experience, education, projects } = formValues;
    return [
      getContactMarkdown(),
      summary && `## Professional Summary\n\n${summary}`,
      skills && `## Skills\n\n${skills}`,
      entriesToMarkdown(experience, "Work Experience"),
      entriesToMarkdown(education, "Education"),
      entriesToMarkdown(projects, "Projects"),
    ]
      .filter(Boolean)
      .join("\n\n");
  };

  const handleGeneratePDF = async () => {
    console.log("PDF generation button clicked!");
    
    // Check if resume is saved first
    if (!isSaved) {
      toast.error("Please save your resume first before downloading PDF");
      return;
    }
    
    // Check if required content is available
    if (!hasRequiredContent) {
      toast.error("Please fill in some resume details before downloading PDF");
      return;
    }
    
    // Get the most current content from form or preview
    const currentContent = getCombinedContent() || previewContent;
    
    // Validate if there's content to generate PDF
    if (!currentContent || currentContent.trim() === "") {
      toast.error("Please add some content to your resume before downloading");
      return;
    }

    console.log("Current content for PDF:", currentContent);
    console.log("Is saved:", isSaved);
    console.log("Form values:", formValues);

    setIsGenerating(true);
    try {
      // Dynamic import of html2pdf.js
      console.log("Loading html2pdf.js...");
      const html2pdf = (await import("html2pdf.js")).default;
      console.log("html2pdf loaded successfully:", html2pdf);
      
      // Get the full name from form data for filename
      const { contactInfo } = formValues;
      const fullName = contactInfo?.name && contactInfo?.surname 
        ? `${contactInfo.name}_${contactInfo.surname}`
        : contactInfo?.name || contactInfo?.surname || user?.fullName || "resume";
      
      // Create a temporary element with the content for PDF generation
      const tempElement = document.createElement('div');
      tempElement.style.cssText = `
        background: white;
        color: black;
        padding: 20px;
        font-family: Arial, sans-serif;
        line-height: 1.6;
        width: 210mm;
        min-height: 297mm;
      `;
      
      // Convert markdown to HTML for better PDF rendering
      const htmlContent = currentContent
        .replace(/^## (.*$)/gim, '<h2 style="text-align: center; margin: 20px 0;">$1</h2>')
        .replace(/^### (.*$)/gim, '<h3 style="margin: 15px 0;">$1</h3>')
        .replace(/^#### (.*$)/gim, '<h4 style="margin: 10px 0;">$1</h4>')
        .replace(/^\*\*(.*)\*\*/gim, '<strong>$1</strong>')
        .replace(/^\*(.*)\*/gim, '<em>$1</em>')
        .replace(/\[([^\]]+)\]\(([^)]+)\)/gim, '<a href="$2">$1</a>')
        .replace(/\n\n/g, '</p><p>')
        .replace(/\n/g, '<br>');
      
      tempElement.innerHTML = `<p>${htmlContent}</p>`;
      document.body.appendChild(tempElement);
      
      const opt = {
        margin: [10, 10, 10, 10],
        filename: `${fullName}_resume.pdf`,
        image: { type: "jpeg", quality: 0.8 },
        html2canvas: { 
          scale: 1.5,
          useCORS: true,
          allowTaint: true,
          backgroundColor: '#ffffff',
          width: 794, // A4 width in pixels at 96 DPI
          height: 1123 // A4 height in pixels at 96 DPI
        },
        jsPDF: { 
          unit: "mm", 
          format: "a4", 
          orientation: "portrait" 
        }
      };

      // Generate and save PDF
      await html2pdf().set(opt).from(tempElement).save();
      
      // Clean up temporary element
      document.body.removeChild(tempElement);
      
      toast.success("PDF downloaded successfully!");
    } catch (error) {
      console.error("PDF generation error:", error);
      
      // Fallback: Try with even simpler options
      try {
        toast.info("Retrying with basic PDF generation...");
        const html2pdf = (await import("html2pdf.js")).default;
        
        // Create simple text content
        const tempElement = document.createElement('div');
        tempElement.style.cssText = `
          background: white;
          color: black;
          padding: 20px;
          font-family: Arial, sans-serif;
          line-height: 1.6;
        `;
        tempElement.textContent = currentContent;
        document.body.appendChild(tempElement);
        
        const simpleOpt = {
          margin: 10,
          filename: `${fullName}_resume.pdf`,
          image: { type: "jpeg", quality: 0.7 },
          html2canvas: { scale: 1 },
          jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
        };

        await html2pdf().set(simpleOpt).from(tempElement).save();
        
        // Clean up
        document.body.removeChild(tempElement);
        
        toast.success("PDF downloaded successfully!");
      } catch (fallbackError) {
        console.error("Fallback PDF generation error:", fallbackError);
        
        // Final fallback: Use browser print functionality
        try {
          toast.info("Using browser print as final fallback...");
          const printWindow = window.open('', '_blank');
          printWindow.document.write(`
            <html>
              <head>
                <title>Resume - ${fullName}</title>
                <style>
                  body { font-family: Arial, sans-serif; line-height: 1.6; padding: 20px; }
                  h2 { text-align: center; margin: 20px 0; }
                  h3 { margin: 15px 0; }
                  h4 { margin: 10px 0; }
                  p { margin: 10px 0; }
                  @media print { body { margin: 0; } }
                </style>
              </head>
              <body>
                ${currentContent.replace(/\n/g, '<br>')}
              </body>
            </html>
          `);
          printWindow.document.close();
          printWindow.print();
          toast.success("Print dialog opened. You can save as PDF from there.");
        } catch (printError) {
          console.error("Print fallback error:", printError);
          toast.error(`PDF generation failed completely. Please try refreshing the page and try again.`);
        }
      }
    } finally {
      setIsGenerating(false);
    }
  };

  const onSubmit = async (data) => {
    try {
      // Get the most current content from form or preview
      const currentContent = getCombinedContent() || previewContent;
      const formattedContent = currentContent
        .replace(/\n/g, "\n")
        .replace(/\n\s*\n/g, "\n\n")
        .trim();

      if (!formattedContent || formattedContent.trim() === "") {
        toast.error("Please add some content to your resume before saving");
        return;
      }

      // Update preview content with the formatted content
      setPreviewContent(formattedContent);
      
      await saveResumeFn(formattedContent);
      
      // Switch to markdown tab after successful save
      setActiveTab("preview");
    } catch (error) {
      console.error("Save error:", error);
      toast.error("Failed to save resume. Please try again.");
    }
  };

  return (
    <div data-color-mode="light" className="space-y-6 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <h1 className="font-bold gradient-title text-3xl sm:text-4xl lg:text-5xl tracking-tight">
          Resume Builder
        </h1>
        <div className="flex gap-3">
          <Button
            onClick={handleSubmit(onSubmit)}
            disabled={isSaving || !hasRequiredContent}
            className={`transition-all duration-200 hover:scale-105 ${
              !hasRequiredContent 
                ? "opacity-50 cursor-not-allowed bg-gray-400" 
                : "bg-emerald-600 hover:bg-emerald-700 text-white cursor-pointer shadow-md"
            }`}
            title={!hasRequiredContent ? "Please fill in some resume details first" : "Save your resume"}
          >
            {isSaving ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Saving...
              </>
            ) : (
              <>
                <Save className="mr-2 h-4 w-4" />
                Save Resume
              </>
            )}
          </Button>
          <Button
            onClick={() => {
              console.log("Button clicked!");
              handleGeneratePDF();
            }}
            disabled={isGenerating || !isSaved}
            className={`transition-all duration-200 hover:scale-105 ${
              isSaved 
                ? "bg-purple-600 hover:bg-purple-700 text-white cursor-pointer shadow-md" 
                : "bg-gray-400 cursor-not-allowed opacity-50"
            }`}
            title={!isSaved ? "Please save your resume first" : "Download your resume as PDF"}
          >
            {isGenerating ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating PDF...
              </>
            ) : (
              <>
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </>
            )}
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-6">
          <TabsTrigger value="edit" className="transition-all duration-200 cursor-pointer">
            Form
          </TabsTrigger>
          <TabsTrigger value="preview" className="transition-all duration-200 cursor-pointer">
            Markdown
          </TabsTrigger>
        </TabsList>

        <TabsContent value="edit" className="mt-0">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Contact Information</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 sm:p-6 border rounded-lg bg-muted/50">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Name</label>
                  <Input
                    {...register("contactInfo.name")}
                    type="text"
                    placeholder="First Name"
                    className="transition-all duration-200 focus:ring-2 focus:ring-primary"
                    error={errors.contactInfo?.name}
                  />
                  {errors.contactInfo?.name && (
                    <p className="text-sm text-red-500">{errors.contactInfo.name.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Surname</label>
                  <Input
                    {...register("contactInfo.surname")}
                    type="text"
                    placeholder="Last Name"
                    className="transition-all duration-200 focus:ring-2 focus:ring-primary"
                    error={errors.contactInfo?.surname}
                  />
                  {errors.contactInfo?.surname && (
                    <p className="text-sm text-red-500">{errors.contactInfo.surname.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input
                    {...register("contactInfo.email")}
                    type="email"
                    placeholder="your@email.com"
                    className="transition-all duration-200 focus:ring-2 focus:ring-primary"
                    error={errors.contactInfo?.email}
                  />
                  {errors.contactInfo?.email && (
                    <p className="text-sm text-red-500">{errors.contactInfo.email.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Mobile Number</label>
                  <Input
                    {...register("contactInfo.mobile")}
                    type="tel"
                    placeholder="+1 234 567 8900"
                    className="transition-all duration-200 focus:ring-2 focus:ring-primary"
                  />
                  {errors.contactInfo?.mobile && (
                    <p className="text-sm text-red-500">{errors.contactInfo.mobile.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">LinkedIn URL</label>
                  <Input
                    {...register("contactInfo.linkedin")}
                    type="url"
                    placeholder="https://linkedin.com/in/your-profile"
                    className="transition-all duration-200 focus:ring-2 focus:ring-primary"
                  />
                  {errors.contactInfo?.linkedin && (
                    <p className="text-sm text-red-500">{errors.contactInfo.linkedin.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Twitter/X Profile</label>
                  <Input
                    {...register("contactInfo.twitter")}
                    type="url"
                    placeholder="https://twitter.com/your-handle"
                    className="transition-all duration-200 focus:ring-2 focus:ring-primary"
                  />
                  {errors.contactInfo?.twitter && (
                    <p className="text-sm text-red-500">{errors.contactInfo.twitter.message}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Professional Summary</h3>
              <Controller
                name="summary"
                control={control}
                render={({ field }) => (
                  <Textarea
                    {...field}
                    className="h-32 transition-all duration-200 focus:ring-2 focus:ring-primary"
                    placeholder="Write a compelling professional summary..."
                    error={errors.summary}
                  />
                )}
              />
              {errors.summary && (
                <p className="text-sm text-red-500">{errors.summary.message}</p>
              )}
            </div>

            {/* Skills */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Skills</h3>
              <Controller
                name="skills"
                control={control}
                render={({ field }) => (
                  <Textarea
                    {...field}
                    className="h-32 transition-all duration-200 focus:ring-2 focus:ring-primary"
                    placeholder="List your key skills..."
                    error={errors.skills}
                  />
                )}
              />
              {errors.skills && (
                <p className="text-sm text-red-500">{errors.skills.message}</p>
              )}
            </div>

            {/* Experience */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Work Experience</h3>
              <Controller
                name="experience"
                control={control}
                render={({ field }) => (
                  <EntryForm
                    type="Experience"
                    entries={field.value}
                    onChange={field.onChange}
                  />
                )}
              />
              {errors.experience && (
                <p className="text-sm text-red-500">{errors.experience.message}</p>
              )}
            </div>

            {/* Education */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Education</h3>
              <Controller
                name="education"
                control={control}
                render={({ field }) => (
                  <EntryForm
                    type="Education"
                    entries={field.value}
                    onChange={field.onChange}
                  />
                )}
              />
              {errors.education && (
                <p className="text-sm text-red-500">{errors.education.message}</p>
              )}
            </div>

            {/* Projects */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Projects</h3>
              <Controller
                name="projects"
                control={control}
                render={({ field }) => (
                  <EntryForm
                    type="Project"
                    entries={field.value}
                    onChange={field.onChange}
                  />
                )}
              />
              {errors.projects && (
                <p className="text-sm text-red-500">{errors.projects.message}</p>
              )}
            </div>
          </form>
        </TabsContent>

        <TabsContent value="preview" className="mt-0">
          {activeTab === "preview" && (
            <Button
              variant="link"
              type="button"
              className="mb-4 transition-all duration-200 hover:text-primary cursor-pointer"
              onClick={() =>
                setResumeMode(resumeMode === "preview" ? "edit" : "preview")
              }
            >
              {resumeMode === "preview" ? (
                <>
                  <Edit className="mr-2 h-4 w-4" />
                  Edit Resume
                </>
              ) : (
                <>
                  <Monitor className="mr-2 h-4 w-4" />
                  Show Preview
                </>
              )}
            </Button>
          )}

          {activeTab === "preview" && resumeMode !== "preview" && (
            <div className="flex p-3 gap-2 items-center border-2 border-yellow-600 text-yellow-600 rounded mb-4">
              <AlertTriangle className="h-5 w-5" />
              <span className="text-sm">
                You will lose edited markdown if you update the form data.
              </span>
            </div>
          )}

          
          <div className="border rounded-lg shadow-sm">
            <MDEditor
              value={previewContent}
              onChange={setPreviewContent}
              height={800}
              preview={resumeMode}
              className="w-full"
            />
          </div>
          <div className="hidden">
            <div id="resume-pdf" style={{ 
              background: "white", 
              color: "black", 
              padding: "20px",
              minHeight: "800px",
              fontFamily: "Arial, sans-serif",
              lineHeight: "1.6"
            }}>
              <MDEditor.Markdown
                source={getCombinedContent() || previewContent}
                style={{
                  background: "white",
                  color: "black",
                  padding: "0",
                  margin: "0"
                }}
              />
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}