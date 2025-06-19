// "use client";

// import Link from "next/link";
// import { ArrowLeft } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import CoverLetterGenerator from "../_components/cover-letter-generator";

// export default function NewCoverLetterPage() {
//   return (
//     <div className="container mx-auto py-8">
//       <div className="mb-6">
//         <Link href="/ai-cover-letter">
//           <Button variant="link" className="gap-2 pl-0">
//             <ArrowLeft className="h-4 w-4" />
//             Back to Cover Letters
//           </Button>
//         </Link>
//       </div>

//       <div className="mb-8">
//         <h1 className="text-4xl sm:text-6xl font-bold gradient-title">
//           Create Cover Letter
//         </h1>
//         <p className="text-muted-foreground mt-2 text-sm sm:text-base">
//           Generate a tailored cover letter for your job application.
//         </p>
//       </div>

//       <CoverLetterGenerator />
//     </div>
//   );
// }


"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import CoverLetterGenerator from "../_components/cover-letter-generator";

export default function NewCoverLetterPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="mb-6">
        <Link href="/ai-cover-letter">
          <Button variant="link" className="gap-2 pl-0 cursor-pointer">
            <ArrowLeft className="h-4 w-4 " />
            Back to Cover Letters
          </Button>
        </Link>
      </div>
      <div className="mb-8">
        <h1 className="text-4xl sm:text-6xl font-bold gradient-title">
          Create Cover Letter
        </h1>
        <p className="text-muted-foreground mt-2 text-sm sm:text-base">
          Generate a tailored cover letter for your job application.
        </p>
      </div>
      <CoverLetterGenerator />
    </div>
  );
}
