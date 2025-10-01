// // This is a Server Component
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { PlusCircle } from "lucide-react";
// import CoverLetterList from "./_components/cover-letter-list";
// import { getCoverLetters } from "@/actions/cover-letter";

// export default async function CoverLetterPage() {
//   const coverLetters = await getCoverLetters();

//   return (
//     <div className="container mx-auto py-6">
//       <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
//         <h1 className="font-bold gradient-title text-3xl sm:text-4xl lg:text-5xl tracking-tight">
//           My Cover Letters
//         </h1>
//         <Link href="/ai-cover-letter/new">
//           <Button className="gap-2 hover:bg-gray-500 cursor-pointer">
//             <PlusCircle className="w-4 h-4" />
//             Add New
//           </Button>
//         </Link>
//       </div>

//       <CoverLetterList coverLetters={coverLetters} />
//     </div>
//   );
// }
// /ai-cover-letter/page.jsx


import { getCoverLetters } from "@/actions/cover-letter";
import CoverLetterList from "./_components/cover-letter-list";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import Link from "next/link";

export default async function CoverLetterPage() {
  const coverLetters = await getCoverLetters();
  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-center ">
        <h1 className="font-bold gradient-title text-3xl sm:text-4xl lg:text-5xl tracking-tight">
          My Cover Letters
        </h1>
        <Link href="/ai-cover-letter/new">
          <Button className="gap-2 hover:bg-gray-500 cursor-pointer">
            <PlusCircle className="w-4 h-4" />
            Create Cover Letter
          </Button>
        </Link>
      </div>
      <CoverLetterList coverLetters={coverLetters} />
    </div>
  );
}
