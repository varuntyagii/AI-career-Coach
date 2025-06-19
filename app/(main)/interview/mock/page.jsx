// // // import Link from "next/link";
// // // import { ArrowLeft } from "lucide-react";
// // // import { Button } from "@/components/ui/button";
// // // import Quiz from "../_components/quiz";

// // // export default function MockInterviewPage() {
// // //   return (
// // //     <div className="container mx-auto space-y-4 py-6">
// // //       <div className="flex flex-col space-y-7 mx-2">
// // // <Link href="/interview">
// // //   <Button
// // //     variant="link"
// // //     className="gap-2 pl-0 cursor-pointer hover:text-[#6D6875] text-[#dad7cd] transition-colors"
// // //   >
// // //     <ArrowLeft className="h-4 w-4" />
// // //     Back to Interview Preparation
// // //   </Button>
// // // </Link>

// // //        <div className="flex flex-col items-center justify-center text-center">
// // //   <h1 className="text-6xl font-bold gradient-title">Mock Interview</h1>
// // //   <p className="text-muted-foreground">
// // //     Test your knowledge with industry-specific questions
// // //   </p>
// // // </div>
// // //         <div className="flex flex-col items-center justify-center text-center">
// // //           <p className="text-muted-foreground">
            
// // //           </p>
// // //         </div>
// // //       </div>

// // //       <Quiz />

// // //     </div>
// // //   );
// // // }

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Quiz from "../_components/quiz";

export default function MockInterviewPage() {
  return (
    <div className="container mx-auto space-y-1 py-6">
      <div className="flex flex-col space-y-7 mx-2">
        <Link href="/interview">
          <Button
            variant="link"
            className="gap-2 pl-0 cursor-pointer hover:text-[#6D6875] text-[#dad7cd] transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Interview Preparation
          </Button>
        </Link>

               <div className="flex flex-col items-center justify-center text-center space-y-4">
          <h1 className="text-5xl sm:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-300 to-gray-700"> {/* Larger text and gradient */}
            Mock Interview
          </h1>
          <p className="text-muted-foreground text-xl"> {/* Increased text size */}
            Test your knowledge with industry-specific questions
          </p>
        </div>
      </div>

      <Quiz/>
    </div>
  );
}

