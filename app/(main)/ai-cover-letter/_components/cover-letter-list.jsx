// "use client";

// import { useRouter } from "next/navigation";
// import { format } from "date-fns";
// import { Edit2, Eye, Trash2 } from "lucide-react";
// import { toast } from "sonner";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import {
//   AlertDialog,
//   AlertDialogAction,
//   AlertDialogCancel,
//   AlertDialogContent,
//   AlertDialogDescription,
//   AlertDialogFooter,
//   AlertDialogHeader,
//   AlertDialogTitle,
//   AlertDialogTrigger,
// } from "@/components/ui/alert-dialog";
// import { deleteCoverLetter } from "@/actions/cover-letter";

// export default function CoverLetterList({ coverLetters }) {
//   const router = useRouter();

//   const handleDelete = async (id) => {
//     try {
//       await deleteCoverLetter(id);
//       toast.success("Cover letter deleted successfully!");
//       router.refresh();
//     } catch (error) {
//       toast.error(error.message || "Failed to delete cover letter");
//     }
//   };

//   if (!coverLetters?.length) {
//     return (
//       <Card>
//         <CardHeader>
//           <CardTitle>No Cover Letters Yet</CardTitle>
//           <CardDescription>
//             Create your first cover letter to get started
//           </CardDescription>
//         </CardHeader>
//       </Card>
//     );
//   }

//   return (
//     <div className="space-y-4">
//       {coverLetters.map((letter) => (
//         <Card key={letter.id} className="group relative ">
//           <CardHeader>
//             <div className="flex items-start justify-between">
//               <div>
//                 <CardTitle className="text-xl gradient-title">
//                   {letter.jobTitle} at {letter.companyName}
//                 </CardTitle>
//                 <CardDescription>
//                   Created {format(new Date(letter.createdAt), "PPP")}
//                 </CardDescription>
//               </div>
//               <div className="flex space-x-2">
//                 <AlertDialog>
//                   <Button
//                     variant="outline"
//                     size="icon"
//                     onClick={() => router.push(`/ai-cover-letter/${letter.id}`)}
//                   >
//                     <Eye className="h-4 w-4" />
//                   </Button>
//                   <AlertDialogTrigger asChild>
//                     <Button variant="outline" size="icon">
//                       <Trash2 className="h-4 w-4" />
//                     </Button>
//                   </AlertDialogTrigger>
//                   <AlertDialogContent>
//                     <AlertDialogHeader>
//                       <AlertDialogTitle>Delete Cover Letter?</AlertDialogTitle>
//                       <AlertDialogDescription>
//                         This action cannot be undone. This will permanently
//                         delete your cover letter for {letter.jobTitle} at{" "}
//                         {letter.companyName}.
//                       </AlertDialogDescription>
//                     </AlertDialogHeader>
//                     <AlertDialogFooter>
//                       <AlertDialogCancel>Cancel</AlertDialogCancel>
//                       <AlertDialogAction
//                         onClick={() => handleDelete(letter.id)}
//                         className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
//                       >
//                         Delete
//                       </AlertDialogAction>
//                     </AlertDialogFooter>
//                   </AlertDialogContent>
//                 </AlertDialog>
//               </div>
//             </div>
//           </CardHeader>
//           <CardContent>
//             <div className="text-muted-foreground text-sm line-clamp-3">
//               {letter.jobDescription}
//             </div>
//           </CardContent>
//         </Card>
//       ))}
//     </div>
//   );
// }

// "use client";

// import { useRouter } from "next/navigation";
// import { format } from "date-fns";
// import { Eye, Trash2 } from "lucide-react";
// import { toast } from "sonner";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import {
//   AlertDialog,
//   AlertDialogAction,
//   AlertDialogCancel,
//   AlertDialogContent,
//   AlertDialogDescription,
//   AlertDialogFooter,
//   AlertDialogHeader,
//   AlertDialogTitle,
//   AlertDialogTrigger,
// } from "@/components/ui/alert-dialog";
// import { deleteCoverLetter } from "@/actions/cover-letter";

// export default function CoverLetterList({ coverLetters }) {
//   const router = useRouter();

//   const handleDelete = async (id) => {
//     try {
//       await deleteCoverLetter(id);
//       toast.success("Cover letter deleted successfully!");
//       router.refresh();
//     } catch (error) {
//       toast.error(error.message || "Failed to delete cover letter");
//     }
//   };

//   if (!coverLetters?.length) {
//     return (
//       <Card>
//         <CardHeader>
//           <CardTitle>No Cover Letters Yet</CardTitle>
//           <CardDescription>
//             Create your first cover letter to get started
//           </CardDescription>
//         </CardHeader>
//       </Card>
//     );
//   }

//   return (
//     <div className="space-y-4">
//       {coverLetters.map((letter) => (
//         <Card key={letter.id} className="group relative">
//           <CardHeader>
//             <div className="flex items-start justify-between">
//               <div>
//                 <CardTitle className="text-xl gradient-title">
//                   {letter.jobTitle} at {letter.companyName}
//                 </CardTitle>
//                 <CardDescription>
//                   Created {format(new Date(letter.createdAt), "PPP")}
//                 </CardDescription>
//               </div>
//               <div className="flex space-x-2">
//                 <Button
//                   variant="outline"
//                   size="icon"
//                   onClick={() => router.push(`/ai-cover-letter/${letter.id}`)}
//                 >
//                   <Eye className="h-4 w-4" />
//                 </Button>
//                 <AlertDialog>
//                   <AlertDialogTrigger asChild>
//                     <Button variant="outline" size="icon">
//                       <Trash2 className="h-4 w-4" />
//                     </Button>
//                   </AlertDialogTrigger>
//                   <AlertDialogContent>
//                     <AlertDialogHeader>
//                       <AlertDialogTitle>Delete Cover Letter?</AlertDialogTitle>
//                       <AlertDialogDescription>
//                         This action cannot be undone. This will permanently
//                         delete your cover letter for {letter.jobTitle} at{" "}
//                         {letter.companyName}.
//                       </AlertDialogDescription>
//                     </AlertDialogHeader>
//                     <AlertDialogFooter>
//                       <AlertDialogCancel>Cancel</AlertDialogCancel>
//                       <AlertDialogAction
//                         onClick={() => handleDelete(letter.id)}
//                         className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
//                       >
//                         Delete
//                       </AlertDialogAction>
//                     </AlertDialogFooter>
//                   </AlertDialogContent>
//                 </AlertDialog>
//               </div>
//             </div>
//           </CardHeader>
//           <CardContent>
//             <div className="text-muted-foreground text-sm line-clamp-3">
//               {letter.jobDescription}
//             </div>
//           </CardContent>
//         </Card>
//       ))}
//     </div>
//   );
// }


// "use client";

// import { useRouter } from "next/navigation";
// import { format } from "date-fns";
// import { Eye, Trash2 } from "lucide-react";
// import { toast } from "sonner";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import {
//   AlertDialog,
//   AlertDialogAction,
//   AlertDialogCancel,
//   AlertDialogContent,
//   AlertDialogDescription,
//   AlertDialogFooter,
//   AlertDialogHeader,
//   AlertDialogTitle,
//   AlertDialogTrigger,
// } from "@/components/ui/alert-dialog";
// import { deleteCoverLetter } from "@/actions/cover-letter";
// import { motion, AnimatePresence } from "framer-motion";
// // import CoverLetterPreview from "./_components/cover-letter-preview";


// // (Optional) Three.js placeholder import
// // import ThreeBG from "./ThreeBG"; // Create a ThreeBG component if you want a 3D animated background

// export default function CoverLetterList({ coverLetters }) {
//   const router = useRouter();

//   const handleDelete = async (id) => {
//     try {
//       await deleteCoverLetter(id);
//       toast.success("Cover letter deleted successfully!");
//       router.refresh();
//     } catch (error) {
//       toast.error(error.message || "Failed to delete cover letter");
//     }
//   };

//   if (!coverLetters?.length) {
//     return (
//       <div className="min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-black via-zinc-900 to-neutral-800 space-x-10">
//   <Card className="bg-[#1f1f24] border border-gray-700 text-white shadow-xl rounded-2xl px-8 py-10 max-w-md text-center">
//     <CardHeader className="space-y-3">
//       <CardTitle className="text-2xl font-bold text-white">
//         📄 No Cover Letters Yet
//       </CardTitle>
//       <CardDescription className="text-gray-400 text-base">
//         You haven’t created any cover letters yet. Start now to make a great first impression on your next opportunity.
//       </CardDescription>
//     </CardHeader>
//   </Card>
// </div>

//     );
//   }

//   return (
//     <div className="relative min-h-[100vh]  py-8 px-2 sm:px-0">
//       {/* Optional: Three.js animated background */}
//       {/* <ThreeBG /> */}

//       <div className="max-w-3xl mx-auto space-y-6">
//         <AnimatePresence>
//           {coverLetters.map((letter, idx) => (
//             <motion.div
//               key={letter.id}
//               initial={{ opacity: 0, y: 30, scale: 0.97 }}
//               animate={{ opacity: 1, y: 0, scale: 1 }}
//               exit={{ opacity: 0, y: 30, scale: 0.97 }}
//               transition={{ duration: 0.35, delay: idx * 0.07 }}
//               whileHover={{ scale: 1.025, boxShadow: "0 8px 32px 0 rgba(0,0,0,0.16)" }}
//             >
//               <Card className="group bg-[#18181b] border-gray-700 text-white transition-all duration-200 hover:border-primary/70 hover:shadow-lg">
//                 <CardHeader>
//                   <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
//                     <div>
//                       <CardTitle className="text-2xl font-bold text-white">
//                         {letter.jobTitle} at {letter.companyName}
//                       </CardTitle>
//                       <CardDescription className="text-gray-400">
//                         Created {format(new Date(letter.createdAt), "PPP")}
//                       </CardDescription>
//                     </div>
//                     <div className="flex space-x-2">
//                       <Button
//                         variant="outline"
//                         size="icon"
//                         className="hover:bg-primary/10  cursor-pointer border-gray-600 hover:text-yellow-400"
//                         onClick={() => router.push(`/ai-cover-letter/${letter.id}`)}
//                         aria-label="View Cover Letter"
//                       >
//                         <Eye className="h-5 w-5" />
//                       </Button>
//                       <AlertDialog>
//                         <AlertDialogTrigger asChild>
//                           <Button
//                             variant="outline"
//                             size="icon"
//                             className="hover:bg-red-600/20 hover:text-red-400 border-gray-600 cursor-pointer"
//                             aria-label="Delete Cover Letter"
//                           >
//                             <Trash2 className="h-5 w-5" />
//                           </Button>
//                         </AlertDialogTrigger>
//                         <AlertDialogContent className="bg-[#222] text-white border-gray-700">
//                           <AlertDialogHeader>
//                             <AlertDialogTitle>Delete Cover Letter?</AlertDialogTitle>
//                             <AlertDialogDescription className="text-gray-400">
//                               This action cannot be undone. This will permanently
//                               delete your cover letter for {letter.jobTitle} at{" "}
//                               {letter.companyName}.
//                             </AlertDialogDescription>
//                           </AlertDialogHeader>
//                           <AlertDialogFooter>
//                             <AlertDialogCancel>Cancel</AlertDialogCancel>
//                             <AlertDialogAction
//                               onClick={() => handleDelete(letter.id)}
//                               className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
//                             >
//                               Delete
//                             </AlertDialogAction>
//                           </AlertDialogFooter>
//                         </AlertDialogContent>
//                       </AlertDialog>
//                     </div>
//                   </div>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="text-gray-200 text-base line-clamp-3 group-hover:text-primary transition-all duration-200">
//                     {letter.jobDescription}
//                   </div>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// }


"use client";

import { useRouter } from "next/navigation";
import { format } from "date-fns";
import { Eye, Trash2 } from "lucide-react";
import { toast } from "sonner";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { deleteCoverLetter } from "@/actions/cover-letter";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
// import CoverLetterPreview from "./_components/cover-letter-preview";

export default function CoverLetterList({ coverLetters }) {
  const router = useRouter();

  const handleDelete = async (id) => {
    try {
      await deleteCoverLetter(id);
      toast.success("Cover letter deleted successfully!");
      router.refresh();
    } catch (error) {
      toast.error(error.message || "Failed to delete cover letter");
    }
  };

  // --- Improved Empty State ---
  if (!coverLetters?.length) {
    return (
   
<div
  className="min-h-[100vh] flex items-center justify-center"
  style={{ background: "" }}
>
        
     <Card
  className="
   bg-[#232425]
    border border-[var(--border)]
    text-white
    shadow-xl
    rounded-2xl
    px-12 py-16
    max-w-lg w-full min-h-[340px]
    text-center
    flex flex-col items-center gap-6
    transition-all duration-300
    hover:shadow-[0_0_32px_4px_rgba(99,102,241,0.5)]
    hover:ring-2 hover:ring-indigo-400/60
  "
>
  <CardHeader className="space-y-4 w-full">
    <div className="flex justify-center mb-2">
      <span className="text-4xl">📄</span>
    </div>
    <CardTitle className="text-2xl font-bold text-white">
      No Cover Letters Yet
    </CardTitle>
    <CardDescription className="text-gray-400 text-base">
      You haven’t created any cover letters yet. Start now to make a great first impression on your next opportunity.
    </CardDescription>
  </CardHeader>   
 <Link href="/ai-cover-letter/new
">
  <Button
    className="bg-white/10 text-white border border-gray-600 rounded-lg px-6 py-2 hover:bg-white/20 transition cursor-pointer"
    onClick={() => window.location.href = "/ai-cover-letter/new"}
  >
    + Create Cover Letter
  </Button>
 </Link>
</Card>

      </div>
    );
  }
 

  
  // --- Main List Rendering ---
  return (
   

    <div className="relative min-h-[100vh] py-8 px-2 sm:px-0">
     

      <div className="max-w-3xl mx-auto space-y-6">
        <AnimatePresence>
          {coverLetters.map((letter, idx) => (
            <motion.div
              key={letter.id}
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.97 }}
              transition={{ duration: 0.35, delay: idx * 0.07 }}
              whileHover={{ scale: 1.025, boxShadow: "0 8px 32px 0 rgba(0,0,0,0.16)" }}
            >
              <Card className="group bg-[#18181b] border-gray-700 text-white transition-all duration-200 hover:border-primary/70 hover:shadow-lg">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                    <div>
                      <CardTitle className="text-2xl font-bold text-white">
                        {letter.jobTitle} at {letter.companyName}
                      </CardTitle>
                      <CardDescription className="text-gray-400">
                        Created {format(new Date(letter.createdAt), "PPP")}
                      </CardDescription>
                    </div>
                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="hover:bg-primary/10 cursor-pointer border-gray-600 hover:text-yellow-400"
                        onClick={() => router.push(`/ai-cover-letter/${letter.id}`)}
                        aria-label="View Cover Letter"
                      >
                        <Eye className="h-5 w-5" />
                      </Button>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button
                            variant="outline"
                            size="icon"
                            className="hover:bg-red-600/20 hover:text-red-400 border-gray-600 cursor-pointer"
                            aria-label="Delete Cover Letter"
                          >
                            <Trash2 className="h-5 w-5" />
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent className="bg-[#222] text-white border-gray-700">
                          <AlertDialogHeader>
                            <AlertDialogTitle>Delete Cover Letter?</AlertDialogTitle>
                            <AlertDialogDescription className="text-gray-400">
                              This action cannot be undone. This will permanently
                              delete your cover letter for {letter.jobTitle} at{" "}
                              {letter.companyName}.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction
                              onClick={() => handleDelete(letter.id)}
                              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                            >
                              Delete
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-gray-200 text-base line-clamp-3 group-hover:text-primary transition-all duration-200">
                    {letter.jobDescription}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
