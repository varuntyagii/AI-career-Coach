// "use client";

// import Link from "next/link";
// import { use, useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { ArrowLeft, Edit, Monitor, AlertTriangle, Loader2 } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { toast } from "sonner";

// import { getCoverLetter, updateCoverLetter } from "@/actions/cover-letter";
// import CoverLetterPreview from "../_components/cover-letter-preview";

// export default function EditCoverLetterPage({ params }) {
//   const [coverLetter, setCoverLetter] = useState(null);
//   const [mode, setMode] = useState("preview");
//   const [updatedContent, setUpdatedContent] = useState("");
//   const [saving, setSaving] = useState(false);
//   const router = useRouter();

//   const { id } = params;

//   useEffect(() => {
//     async function fetchData() {
//       const data = await getCoverLetter(id);
//       setCoverLetter(data);
//       setUpdatedContent(data?.content || "");
//     }
//     fetchData();
//   }, [id]);

//   const handleUpdate = async () => {
//     try {
//       setSaving(true);
//       await updateCoverLetter(id, updatedContent);
//       toast.success("Cover letter updated!");
//       setMode("preview");
//       setCoverLetter({ ...coverLetter, content: updatedContent });
//     } catch (err) {
//       toast.error("Failed to update cover letter.");
//     } finally {
//       setSaving(false);
//     }
//   };

//   if (!coverLetter) return <p>Loading...</p>;

//   return (
//     <div className="container mx-auto py-6">
//       <div className="flex flex-col space-y-2">
//         <Link href="/ai-cover-letter">
//           <Button variant="link" className="gap-2 pl-0">
//             <ArrowLeft className="h-4 w-4" />
//             Back to Cover Letters
//           </Button>
//         </Link>

//         <div className="flex justify-between items-center">
//           <h1 className="text-4xl font-bold gradient-title mb-4">
//             {coverLetter.jobTitle} at {coverLetter.companyName}
//           </h1>

//           <Button
//             variant="link"
//             onClick={() => setMode(mode === "preview" ? "edit" : "preview")}
//             className="mb-2"
//           >
//             {mode === "preview" ? (
//               <>
//                 <Edit className="mr-2 h-4 w-4" />
//                 Edit Cover Letter
//               </>
//             ) : (
//               <>
//                 <Monitor className="mr-2 h-4 w-4" />
//                 Show Preview
//               </>
//             )}
//           </Button>
//         </div>
//       </div>

//       {/* Warning */}
//       {mode === "edit" && (
//         <div className="flex p-3 gap-2 items-center border-2 border-yellow-600 text-yellow-600 rounded mb-4">
//           <AlertTriangle className="h-5 w-5" />
//           <span className="text-sm">
//             You will lose unsaved changes if you leave without saving.
//           </span>
//         </div>
//       )}

//       {/* Preview or Edit Mode */}
//       {mode === "preview" ? (
//         <CoverLetterPreview content={coverLetter.content} />
//       ) : (
//         <div className="space-y-2">
//           <Label htmlFor="coverLetter">Edit Cover Letter</Label>
//           <textarea
//             id="coverLetter"
//             rows={16}
//             className="w-full border rounded-md p-2 text-sm"
//             value={updatedContent}
//             onChange={(e) => setUpdatedContent(e.target.value)}
//           />
//           <Button onClick={handleUpdate} disabled={saving}>
//             {saving ? (
//               <>
//                 <Loader2 className="h-4 w-4 animate-spin mr-2" />
//                 Saving...
//               </>
//             ) : (
//               "Save Changes"
//             )}
//           </Button>
//         </div>
//       )}
//     </div>
//   );
// }


"use client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { toast } from "sonner";
import { ArrowLeft, Edit, Monitor, AlertTriangle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { getCoverLetter, updateCoverLetter } from "@/actions/cover-letter";
import CoverLetterPreview from "../_components/cover-letter-preview";
import { jsPDF } from "jspdf"; // <-- Import jsPDF

function downloadPDF(filename, content) {
  const doc = new jsPDF();
  doc.setFont("times", "normal");
  doc.setFontSize(12);
  // Split content into lines for better formatting
  const lines = doc.splitTextToSize(content, 180);
  doc.text(lines, 10, 10);
  doc.save(filename);
}

export default function CoverLetterPage() {
  const { id } = useParams();
  const router = useRouter();

  const [coverLetter, setCoverLetter] = useState(null);
  const [updatedContent, setUpdatedContent] = useState("");
  const [mode, setMode] = useState("preview");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCoverLetter(id);
      setCoverLetter(data);
      setUpdatedContent(data?.content || "");
    };
    if (id) fetchData();
  }, [id]);

  const handleUpdate = async () => {
    try {
      setSaving(true);
      await updateCoverLetter(id, updatedContent);
      toast.success("Cover letter updated!");
      setCoverLetter({ ...coverLetter, content: updatedContent });
      setMode("preview");
    } catch (error) {
      toast.error("Failed to update cover letter");
    } finally {
      setSaving(false);
    }
  };

  if (!coverLetter) return <p className="p-4">Loading...</p>;

  return (
    <div className="container mx-auto py-6 ">
      <Link href="/ai-cover-letter">
        <Button variant="link" className="gap-2 pl-0 mb-4 cursor-pointer">
          <ArrowLeft className="h-4 w-4" />
          Back to Cover Letters
        </Button>
      </Link>
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-4xl font-bold gradient-title">
          {coverLetter.jobTitle} at {coverLetter.companyName}
        </h1>
        <Button
          variant="link"
          className="cursor-pointer"
          onClick={() => setMode(mode === "preview" ? "edit" : "preview")}
        >
          {mode === "preview" ? (
            <>
              <Edit className="mr-2 h-4 w-4" />
              Edit Cover Letter
            </>
          ) : (
            <>
              <Monitor className="mr-2 h-4 w-4" />
              Show Preview
            </>
          )}
        </Button>
      </div>
      {mode === "edit" && (
        <div className="flex items-center p-3 border-2 border-yellow-600 text-yellow-600 rounded mb-4">
          <AlertTriangle className="h-5 w-5 mr-2" />
          <span className="text-sm">
            You will lose unsaved changes if you leave without saving.
          </span>
        </div>
      )}

      {/* Download as PDF Button */}
      <div className="flex gap-2 mb-4 cursor-pointer">
        <Button
          type="button"
          variant="outline"
          className="cursor-pointer"

          onClick={() =>
            downloadPDF(
              `${coverLetter.jobTitle.replace(/\s+/g, "_")}_Cover_Letter.pdf`,
              mode === "edit" ? updatedContent : coverLetter.content
            )
          }
        >
          Download as PDF
        </Button>
        {mode === "edit" && (
          <Button onClick={handleUpdate} disabled={saving} className="cursor-pointer"
          >
            {saving ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin mr-2" />
                Saving...
              </>
            ) : (
              "Save Changes"
            )}
          </Button>
        )}
      </div>

      {mode === "preview" ? (
        <CoverLetterPreview content={coverLetter.content} />
      ) : (
        <div className="space-y-2">
          <Label htmlFor="coverLetter">Edit Cover Letter</Label>
          <textarea
            id="coverLetter"
            rows={16}
            className="w-full border rounded-md p-2 text-sm"
            value={updatedContent}
            onChange={(e) => setUpdatedContent(e.target.value)}
          />
        </div>
      )}
    </div>
  );
}
