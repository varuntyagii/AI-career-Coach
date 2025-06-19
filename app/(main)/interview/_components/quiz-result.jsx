

// // // "use client";

// // // import { Trophy, CheckCircle2, XCircle } from "lucide-react";
// // // import { Button } from "@/components/ui/button";
// // // import { CardContent, CardFooter } from "@/components/ui/card";
// // // import { Progress } from "@/components/ui/progress";
// // // import { motion } from "framer-motion";

// // // export default function QuizResult({
// // //   result,
// // //   hideStartNew = false,
// // //   onStartNew,
// // // }) {
// // //   console.log("QuizResult received result:", result);

// // //   if (!result) {
// // //     return (
// // //       <motion.div
// // //         initial={{ opacity: 0, y: 20 }}
// // //         animate={{ opacity: 1, y: 0 }}
// // //         transition={{ duration: 0.5 }}
// // //         className="text-white max-w-2xl mx-auto text-center"
// // //       >
// // //         <h1 className="flex items-center justify-center gap-2 text-2xl sm:text-3xl font-bold mb-4 gradient-title">
// // //           <Trophy className="h-6 w-6 text-yellow-500" />
// // //           Quiz Results
// // //         </h1>
// // //         <p className="text-gray-300">No results available.</p>
// // //         {!hideStartNew && (
// // //           <Button
// // //             onClick={onStartNew}
// // //             className="mt-4 w-full text-white bg-gradient-to-r from-slate-500 via-slate-700 to-slate-700 hover:from-slate-600 hover:text-[#6c757d] shadow-md hover:shadow-lg transition duration-300 px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base"
// // //           >
// // //             Start New Quiz
// // //           </Button>
// // //         )}
// // //       </motion.div>
// // //     );
// // //   }

// // //   const quizScore = result.quizScore ?? 0;

// // //   if (!Array.isArray(result.questions) || result.questions.length === 0) {
// // //     return (
// // //       <motion.div
// // //         initial={{ opacity: 0, y: 20 }}
// // //         animate={{ opacity: 1, y: 0 }}
// // //         transition={{ duration: 0.5 }}
// // //         className="text-white max-w-2xl mx-auto text-center"
// // //       >
// // //         <h1 className="flex items-center justify-center gap-2 text-2xl sm:text-3xl font-bold mb-4 gradient-title">
// // //           <Trophy className="h-6 w-6 text-yellow-500" />
// // //           Quiz Results
// // //         </h1>
// // //         <div className="text-center space-y-3">
// // //           <h3 className="text-xl sm:text-2xl font-bold">{quizScore.toFixed(1)}%</h3>
// // //           <Progress
// // //             value={quizScore}
// // //             className="w-full h-3 bg-gray-700 [&>div]:bg-blue-500"
// // //           />
// // //         </div>
// // //         <p className="mt-4 text-gray-300">
// // //           No detailed question review available.
// // //         </p>
// // //         {!hideStartNew && (
// // //           <Button
// // //             onClick={onStartNew}
// // //             className="mt-4 w-full text-white bg-gradient-to-r from-slate-500 via-slate-700 to-slate-700 hover:from-slate-600 hover:text-[#6c757d] shadow-md hover:shadow-lg transition duration-300 px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base"
// // //           >
// // //             Start New Quiz
// // //           </Button>
// // //         )}
// // //       </motion.div>
// // //     );
// // //   }

// // //   return (
// // //     <motion.div
// // //       initial={{ opacity: 0, y: 20 }}
// // //       animate={{ opacity: 1, y: 0 }}
// // //       transition={{ duration: 0.5 }}
// // //       className="max-w-2xl mx-auto text-white"
// // //     >
// // //       <h1 className="flex items-center gap-2 text-2xl sm:text-3xl font-bold mb-6 gradient-title">
// // //         <Trophy className="h-6 w-6 text-yellow-500" />
// // //         Quiz Results
// // //       </h1>

// // //       <CardContent className="space-y-6 p-0">
// // //         <div className="text-center space-y-3">
// // //           <h3 className="text-xl sm:text-2xl font-bold">{quizScore.toFixed(1)}%</h3>
// // //           <Progress
// // //             value={quizScore}
// // //             className="w-full h-3 bg-gray-700 [&>div]:bg-blue-500"
// // //           />
// // //         </div>

// // //         {result.improvementTip && (
// // //           <div className="bg-gray-800 p-4 rounded-lg">
// // //             <p className="font-medium text-sm sm:text-base">Improvement Tip:</p>
// // //             <p className="text-gray-300 text-sm">{result.improvementTip}</p>
// // //           </div>
// // //         )}

// // //         <div className="space-y-4">
// // //           <h3 className="font-medium text-lg">Question Review</h3>
// // //           {result.questions.map((q, index) => (
// // //             <div
// // //               key={index}
// // //               className="border border-gray-700 rounded-lg p-4 space-y-2"
// // //             >
// // //               <div className="flex items-start justify-between gap-2">
// // //                 <p className="font-medium text-sm sm:text-base">{q.question || "Question not available"}</p>
// // //                 {q.isCorrect ? (
// // //                   <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
// // //                 ) : (
// // //                   <XCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
// // //                 )}
// // //               </div>
// // //               <div className="text-sm text-gray-300">
// // //                 <p>Your answer: {q.userAnswer || "Not answered"}</p>
// // //                 {!q.isCorrect && q.answer && (
// // //                   <p>Correct answer: {q.answer}</p>
// // //                 )}
// // //               </div>
// // //               <div className="text-sm bg-gray-800 p-2 rounded">
// // //                 <p className="font-medium">Explanation:</p>
// // //                 <p>{q.explanation || "No explanation available"}</p>
// // //               </div>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </CardContent>

// // //       {!hideStartNew && (
// // //         <CardFooter className="pt-6 px-0">
// // //           <Button
// // //             onClick={onStartNew}
// // //             className="w-full text-white bg-gradient-to-r from-slate-500 via-slate-700 to-slate-700 hover:from-slate-600 hover:text-[#6c757d] shadow-md hover:shadow-lg transition duration-300 px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base"
// // //           >
// // //             Start New Quiz
// // //           </Button>
// // //         </CardFooter>
// // //       )}
// // //     </motion.div>
// // //   );
// // // }


// // "use client";

// // import { Trophy, CheckCircle2, XCircle } from "lucide-react";
// // import { Button } from "@/components/ui/button";
// // import { CardContent, CardFooter } from "@/components/ui/card";
// // import { Progress } from "@/components/ui/progress";
// // import { motion } from "framer-motion";

// // export default function QuizResult({
// //   result,
// //   hideStartNew = false,
// //   onStartNew,
// // }) {
// //   console.log("QuizResult received result:", result);

// //   if (!result) {
// //     return (
// //       <motion.div
// //         initial={{ opacity: 0, y: 20 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{ duration: 0.5 }}
// //         className="text-white max-w-2xl mx-auto text-center"
// //       >
// //         <h1 className="flex items-center justify-center gap-2 text-2xl sm:text-3xl font-bold mb-4 gradient-title">
// //           <Trophy className="h-6 w-6 text-yellow-500" />
// //           Quiz Results
// //         </h1>
// //         <p className="text-gray-300">No results available.</p>
// //         {!hideStartNew && (
// //           <Button
// //             onClick={onStartNew}
// //             className="mt-4 w-full text-white bg-gradient-to-r from-slate-500 via-slate-700 to-slate-700 hover:from-slate-600 hover:text-[#6c757d] shadow-md hover:shadow-lg transition duration-300 px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base"
// //           >
// //             Start New Quiz
// //           </Button>
// //         )}
// //       </motion.div>
// //     );
// //   }

// //   const quizScore = result.quizScore ?? 0;

// //   if (!Array.isArray(result.questions) || result.questions.length === 0) {
// //     return (
// //       <motion.div
// //         initial={{ opacity: 0, y: 20 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{ duration: 0.5 }}
// //         className="text-white max-w-2xl mx-auto text-center"
// //       >
// //         <h1 className="flex items-center justify-center gap-2 text-2xl sm:text-3xl font-bold mb-4 gradient-title">
// //           <Trophy className="h-6 w-6 text-yellow-500" />
// //           Quiz Results
// //         </h1>
// //         <div className="text-center space-y-3">
// //           <h3 className="text-xl sm:text-2xl font-bold">{quizScore.toFixed(1)}%</h3>
// //           <Progress
// //             value={quizScore}
// //             className="w-full h-3 bg-gray-700 [&>div]:bg-blue-500"
// //           />
// //         </div>
// //         <p className="mt-4 text-gray-300">
// //           No detailed question review available.
// //         </p>
// //         {!hideStartNew && (
// //           <Button
// //             onClick={onStartNew}
// //             className="mt-4 w-full text-white bg-gradient-to-r from-slate-500 via-slate-700 to-slate-700 hover:from-slate-600 hover:text-[#6c757d] shadow-md hover:shadow-lg transition duration-300 px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base"
// //           >
// //             Start New Quiz
// //           </Button>
// //         )}
// //       </motion.div>
// //     );
// //   }

// //   return (
// //     <motion.div
// //       initial={{ opacity: 0, y: 20 }}
// //       animate={{ opacity: 1, y: 0 }}
// //       transition={{ duration: 0.5 }}
// //       className="max-w-2xl mx-auto text-white"
// //     >
// //       <h1 className="flex items-center gap-2 text-2xl sm:text-3xl font-bold mb-6 gradient-title">
// //         <Trophy className="h-6 w-6 text-yellow-500" />
// //         Quiz Results
// //       </h1>

// //       <CardContent className="space-y-6 p-0">
// //         <div className="text-center space-y-3">
// //           <h3 className="text-xl sm:text-2xl font-bold">{quizScore.toFixed(1)}%</h3>
// //           <Progress
// //             value={quizScore}
// //             className="w-full h-3 bg-gray-700 [&>div]:bg-blue-500"
// //           />
// //         </div>

// //         {result.improvementTip && (
// //           <div className="bg-gray-800 p-4 rounded-lg">
// //             <p className="font-medium text-sm sm:text-base">Improvement Tip:</p>
// //             <p className="text-gray-300 text-sm">{result.improvementTip}</p>
// //           </div>
// //         )}

// //         <div className="space-y-4">
// //           <h3 className="font-medium text-lg">Question Review</h3>
// //           {result.questions.map((q, index) => (
// //             <div
// //               key={index}
// //               className="bg-gray-900 border border-gray-700 rounded-lg p-4 space-y-2"
// //             >
// //               <div className="flex items-start justify-between gap-2">
// //                 <p className="font-medium text-sm sm:text-base">
// //                   <span className="text-blue-400 mr-1">Q{index + 1}.</span>
// //                   {q.question || "Question not available"}
// //                 </p>
// //                 {q.isCorrect ? (
// //                   <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
// //                 ) : (
// //                   <XCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
// //                 )}
// //               </div>
// //               <div className="text-sm text-gray-300">
// //                 <p>
// //                   <strong>Your answer:</strong> {q.userAnswer || "Not answered"}
// //                 </p>
// //                 {!q.isCorrect && q.answer && (
// //                   <p>
// //                     <strong>Correct answer:</strong> {q.answer}
// //                   </p>
// //                 )}
// //               </div>
// //               <div className="text-sm bg-gray-800 p-2 rounded">
// //                 <p className="font-medium">Explanation:</p>
// //                 <p>{q.explanation || "No explanation available"}</p>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </CardContent>

// //       {!hideStartNew && (
// //         <CardFooter className="pt-6 px-0">
// //           <Button
// //             onClick={onStartNew}
// //             className="w-full text-white bg-gradient-to-r from-slate-500 via-slate-700 to-slate-700 hover:from-slate-600 hover:text-[#6c757d] shadow-md hover:shadow-lg transition duration-300 px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base"
// //           >
// //             Start New Quiz
// //           </Button>
// //         </CardFooter>
// //       )}
// //     </motion.div>
// //   );
// // }

// // "use client";

// // import { Trophy, CheckCircle2, XCircle } from "lucide-react";
// // import { Button } from "@/components/ui/button";
// // import { CardContent, CardFooter } from "@/components/ui/card";
// // import { Progress } from "@/components/ui/progress";
// // import { motion } from "framer-motion";

// // export default function QuizResult({
// //   result,
// //   hideStartNew = false,
// //   onStartNew,
// // }) {
// //   console.log("QuizResult received result:", result);

// //   if (!result) {
// //     return (
// //       <motion.div
// //         initial={{ opacity: 0, y: 20 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{ duration: 0.5 }}
// //         className="text-white max-w-3xl mx-auto text-center" // Increased max-width
// //       >
// //         <h1 className="flex items-center justify-center gap-2 text-2xl sm:text-3xl font-bold mb-4 gradient-title">
// //           <Trophy className="h-6 w-6 text-yellow-500" />
// //           Quiz Results
// //         </h1>
// //         <p className="text-gray-300">No results available.</p>
// //         {!hideStartNew && (
// //           <Button
// //             onClick={onStartNew}
// //             className="mt-4 w-full text-white bg-gradient-to-r from-slate-500 via-slate-700 to-slate-700 hover:from-slate-600 hover:text-[#6c757d] shadow-md hover:shadow-lg transition duration-300 px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base"
// //           >
// //             Start New Quiz
// //           </Button>
// //         )}
// //       </motion.div>
// //     );
// //   }

// //   const quizScore = result.quizScore ?? 0;

// //   if (!Array.isArray(result.questions) || result.questions.length === 0) {
// //     return (
// //       <motion.div
// //         initial={{ opacity: 0, y: 20 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{ duration: 0.5 }}
// //         className="text-white max-w-3xl mx-auto text-center" // Increased max-width
// //       >
// //         <h1 className="flex items-center justify-center gap-2 text-2xl sm:text-3xl font-bold mb-4 gradient-title">
// //           <Trophy className="h-6 w-6 text-yellow-500" />
// //           Quiz Results
// //         </h1>
// //         <div className="text-center space-y-3">
// //           <h3 className="text-xl sm:text-2xl font-bold">{quizScore.toFixed(1)}%</h3>
// //           <Progress
// //             value={quizScore}
// //             className="w-full h-3 bg-gray-700 [&>div]:bg-blue-500"
// //           />
// //         </div>
// //         <p className="mt-4 text-gray-300">
// //           No detailed question review available.
// //         </p>
// //         {!hideStartNew && (
// //           <Button
// //             onClick={onStartNew}
// //             className="mt-4 w-full text-white bg-gradient-to-r from-slate-500 via-slate-700 to-slate-700 hover:from-slate-600 hover:text-[#6c757d] shadow-md hover:shadow-lg transition duration-300 px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base"
// //           >
// //             Start New Quiz
// //           </Button>
// //         )}
// //       </motion.div>
// //     );
// //   }

// //   // Function to add alphabetical prefixes to options
// //   const formatAnswer = (answer) => {
// //     if (!answer) return "Not answered";
// //     if (Array.isArray(answer)) {
// //       return answer.map((item, index) => (
// //         <div key={index} className="mb-1">
// //           <span className="font-semibold">{String.fromCharCode(65 + index)}. </span>
// //           {item}
// //         </div>
// //       ));
// //     }
// //     return answer;
// //   };

// //   return (
// //     <motion.div
// //       initial={{ opacity: 0, y: 20 }}
// //       animate={{ opacity: 1, y: 0 }}
// //       transition={{ duration: 0.5 }}
// //       className="max-w-3xl mx-auto text-white" // Increased max-width
// //     >
// //       <h1 className="flex items-center gap-2 text-2xl sm:text-3xl font-bold mb-6 gradient-title">
// //         <Trophy className="h-6 w-6 text-yellow-500" />
// //         Quiz Results
// //       </h1>

// //       <CardContent className="space-y-6 p-0">
// //         <div className="text-center space-y-3">
// //           <h3 className="text-xl sm:text-2xl font-bold">{quizScore.toFixed(1)}%</h3>
// //           <Progress
// //             value={quizScore}
// //             className="w-full h-3 bg-gray-700 [&>div]:bg-blue-500"
// //           />
// //         </div>

// //         {result.improvementTip && (
// //           <div className="bg-gray-800 p-4 rounded-lg">
// //             <p className="font-medium text-sm sm:text-base">Improvement Tip:</p>
// //             <p className="text-gray-300 text-sm">{result.improvementTip}</p>
// //           </div>
// //         )}

// //         <div className="space-y-4">
// //           <h3 className="font-medium text-lg">Question Review</h3>
// //           {result.questions.map((q, index) => (
// //             <div
// //               key={index}
// //               className="bg-gray-900 border border-gray-700 rounded-lg p-5 space-y-3" // Increased padding
// //               style={{ minHeight: '200px' }} // Set minimum height
// //             >
// //               <div className="flex items-start justify-between gap-2">
// //                 <p className="font-medium text-sm sm:text-base">
// //                   <span className="text-blue-400 mr-1">Q{index + 1}.</span>
// //                   {q.question || "Question not available"}
// //                 </p>
// //                 {q.isCorrect ? (
// //                   <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
// //                 ) : (
// //                   <XCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
// //                 )}
// //               </div>
// //               <div className="text-sm text-gray-300">
// //                 <p className="font-semibold">Your answer:</p>
// //                 <div className="ml-2 mt-1">
// //                   {formatAnswer(q.userAnswer)}
// //                 </div>
// //                 {!q.isCorrect && q.answer && (
// //                   <>
// //                     <p className="font-semibold mt-2">Correct answer:</p>
// //                     <div className="ml-2 mt-1">
// //                       {formatAnswer(q.answer)}
// //                     </div>
// //                   </>
// //                 )}
// //               </div>
// //               <div className="text-sm bg-gray-800 p-3 rounded mt-2"> {/* Increased padding */}
// //                 <p className="font-medium">Explanation:</p>
// //                 <p className="mt-1">{q.explanation || "No explanation available"}</p>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </CardContent>

// //       {!hideStartNew && (
// //         <CardFooter className="pt-6 px-0">
// //           <Button
// //             onClick={onStartNew}
// //             className="w-full text-white bg-gradient-to-r from-slate-500 via-slate-700 to-slate-700 hover:from-slate-600 hover:text-[#6c757d] shadow-md hover:shadow-lg transition duration-300 px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base"
// //           >
// //             Start New Quiz
// //           </Button>
// //         </CardFooter>
// //       )}
// //     </motion.div>
// //   );
// // }


// // "use client";

// // import { Trophy, CheckCircle2, XCircle } from "lucide-react";
// // import { Button } from "@/components/ui/button";
// // import { CardContent, CardFooter } from "@/components/ui/card";
// // import { Progress } from "@/components/ui/progress";
// // import { motion } from "framer-motion";

// // export default function QuizResult({
// //   result,
// //   hideStartNew = false,
// //   onStartNew,
// // }) {
// //   console.log("QuizResult received result:", result);

// //   // Date and time to display
// //   const currentDateTime = "02:01 PM IST on Sunday, June 15, 2025";

// //   if (!result) {
// //     return (
// //       <motion.div
// //         initial={{ opacity: 0, y: 20 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{ duration: 0.5 }}
// //         className="text-white max-w-3xl mx-auto text-center py-10"
// //       >
// //         <h1 className="flex items-center justify-center gap-2 text-2xl sm:text-3xl font-bold mb-4 gradient-title">
// //           <Trophy className="h-6 w-6 text-yellow-500" />
// //           Quiz Results
// //         </h1>
// //         <p className="text-gray-300 text-sm mb-4">{currentDateTime}</p>
// //         <p className="text-gray-300">No results available.</p>
// //         {!hideStartNew && (
// //           <Button
// //             onClick={onStartNew}
// //             className="mt-4 w-full text-white bg-gradient-to-r from-slate-500 via-slate-700 to-slate-700 hover:from-slate-600 hover:text-[#6c757d] shadow-md hover:shadow-lg transition duration-300 px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base"
// //           >
// //             Start New Quiz
// //           </Button>
// //         )}
// //       </motion.div>
// //     );
// //   }

// //   const quizScore = result.quizScore ?? 0;

// //   if (!Array.isArray(result.questions) || result.questions.length === 0) {
// //     return (
// //       <motion.div
// //         initial={{ opacity: 0, y: 20 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{ duration: 0.5 }}
// //         className="text-white max-w-3xl mx-auto text-center py-10"
// //       >
// //         <h1 className="flex items-center justify-center gap-2 text-2xl sm:text-3xl font-bold mb-4 gradient-title">
// //           <Trophy className="h-6 w-6 text-yellow-500" />
// //           Quiz Results
// //         </h1>
// //         <p className="text-gray-300 text-sm mb-4">{currentDateTime}</p>
// //         <div className="text-center space-y-3">
// //           <h3 className="text-2xl sm:text-3xl font-bold text-blue-400">{quizScore.toFixed(1)}%</h3>
// //           <Progress
// //             value={quizScore}
// //             className="w-full h-4 bg-gray-700 [&>div]:bg-blue-500 rounded-full"
// //           />
// //         </div>
// //         <p className="mt-4 text-gray-300">
// //           No detailed question review available.
// //         </p>
// //         {!hideStartNew && (
// //           <Button
// //             onClick={onStartNew}
// //             className="mt-4 w-full text-white bg-gradient-to-r from-slate-500 via-slate-700 to-slate-700 hover:from-slate-600 hover:text-[#6c757d] shadow-md hover:shadow-lg transition duration-300 px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base"
// //           >
// //             Start New Quiz
// //           </Button>
// //         )}
// //       </motion.div>
// //     );
// //   }

// //   return (
// //     <motion.div
// //       initial={{ opacity: 0, y: 20 }}
// //       animate={{ opacity: 1, y: 0 }}
// //       transition={{ duration: 0.5 }}
// //       className="max-w-3xl mx-auto text-white py-10"
// //     >
// //       <h1 className="flex items-center gap-2 text-2xl sm:text-3xl font-bold mb-2 gradient-title">
// //         <Trophy className="h-6 w-6 text-yellow-500" />
// //         Quiz Results
// //       </h1>
// //       <p className="text-gray-300 text-sm mb-6">{currentDateTime}</p>

// //       <CardContent className="space-y-8 p-0">
// //         <div className="text-center space-y-4">
// //           <h3 className="text-2xl sm:text-3xl font-bold text-blue-400">{quizScore.toFixed(1)}%</h3>
// //           <Progress
// //             value={quizScore}
// //             className="w-full h-4 bg-gray-700 [&>div]:bg-blue-500 rounded-full"
// //           />
// //         </div>

// //         {result.improvementTip && (
// //           <div className="bg-gray-800 p-4 rounded-lg border border-gray-600">
// //             <p className="font-medium text-sm sm:text-base text-blue-400">Improvement Tip:</p>
// //             <p className="text-gray-300 text-sm mt-1">{result.improvementTip}</p>
// //           </div>
// //         )}

// //         <div className="space-y-6">
// //           <h3 className="font-medium text-lg text-gray-100">Question Review</h3>
// //           {result.questions.map((q, index) => (
// //             <div
// //               key={index}
// //               className="bg-gray-900 border border-gray-700 rounded-lg p-5 space-y-4 hover:bg-gray-800 transition-colors duration-200"
// //               style={{ minHeight: '200px' }}
// //             >
// //               <div className="flex items-start justify-between gap-2">
// //                 <p className="font-medium text-sm sm:text-base">
// //                   <span className="text-blue-400 mr-1">Q{index + 1}.</span>
// //                   {q.question || "Question not available"}
// //                 </p>
// //                 {q.isCorrect ? (
// //                   <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
// //                 ) : (
// //                   <XCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
// //                 )}
// //               </div>
// //               {q.options && Array.isArray(q.options) && (
// //                 <div className="text-sm text-gray-300">
// //                   <p className="font-semibold">Options:</p>
// //                   <ul className="ml-2 mt-1 list-disc list-inside">
// //                     {q.options.map((option, idx) => (
// //                       <li key={idx}>{option}</li>
// //                     ))}
// //                   </ul>
// //                 </div>
// //               )}
// //               <div className="text-sm text-gray-300">
// //                 <p className="font-semibold">Your answer:</p>
// //                 <div className="ml-2 mt-1">
// //                   {q.userAnswer || "Not answered"}
// //                 </div>
// //                 {q.answer && (
// //                   <>
// //                     <p className="font-semibold mt-2">Correct answer:</p>
// //                     <div className="ml-2 mt-1 text-green-400">
// //                       {q.answer}
// //                     </div>
// //                   </>
// //                 )}
// //               </div>
// //               <div className="text-sm bg-gray-800 p-4 rounded border border-gray-600">
// //                 <p className="font-medium text-blue-400">Explanation:</p>
// //                 <p className="mt-1 text-gray-300">{q.explanation || "No explanation available"}</p>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </CardContent>

// //       {!hideStartNew && (
// //         <CardFooter className="pt-8 px-0">
// //           <Button
// //             onClick={onStartNew}
// //             className="w-full text-white bg-gradient-to-r from-slate-500 via-slate-700 to-slate-700 hover:from-slate-600 hover:text-[#6c757d] shadow-md hover:shadow-lg transition duration-300 px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base"
// //           >
// //             Start New Quiz
// //           </Button>
// //         </CardFooter>
// //       )}
// //     </motion.div>
// //   );
// // }


// // "use client";

// // import { Trophy, CheckCircle2, XCircle } from "lucide-react";
// // import { Button } from "@/components/ui/button";
// // import { CardContent, CardFooter } from "@/components/ui/card";
// // import { Progress } from "@/components/ui/progress";
// // import { motion } from "framer-motion";

// // const optionLabels = ["A", "B", "C", "D", "E", "F"];

// // export default function QuizResult({ result, hideStartNew = false, onStartNew }) {
// //   const currentDateTime = new Date().toLocaleString("en-IN", {
// //     timeZone: "Asia/Kolkata",
// //     hour: "2-digit",
// //     minute: "2-digit",
// //     hour12: true,
// //     weekday: "long",
// //     day: "numeric",
// //     month: "long",
// //     year: "numeric",
// //   });

// //   if (!result || !Array.isArray(result.questions)) {
// //     return (
// //       <motion.div
// //         initial={{ opacity: 0, y: 20 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{ duration: 0.5 }}
// //         className="text-white max-w-3xl mx-auto text-center py-10"
// //       >
// //         <h1 className="flex items-center justify-center gap-2 text-2xl sm:text-3xl font-bold mb-4 gradient-title">
// //           <Trophy className="h-6 w-6 text-yellow-500" />
// //           Quiz Results
// //         </h1>
// //         <p className="text-gray-300 text-sm mb-4">{currentDateTime}</p>
// //         <p className="text-gray-300">No results available.</p>
// //         {!hideStartNew && (
// //           <Button onClick={onStartNew} className="mt-4 w-full bg-gradient-to-r from-slate-600 via-slate-700 to-slate-800 text-white">
// //             Start New Quiz
// //           </Button>
// //         )}
// //       </motion.div>
// //     );
// //   }

// //   const quizScore = result.quizScore ?? 0;

// //   return (
// //     <motion.div
// //       initial={{ opacity: 0, y: 20 }}
// //       animate={{ opacity: 1, y: 0 }}
// //       transition={{ duration: 0.5 }}
// //       className="max-w-3xl mx-auto text-white py-10"
// //     >
// //       <h1 className="flex items-center gap-2 text-2xl sm:text-3xl font-bold mb-2 gradient-title">
// //         <Trophy className="h-6 w-6 text-yellow-500" />
// //         Quiz Results
// //       </h1>
// //       <p className="text-gray-300 text-sm mb-6">{currentDateTime}</p>

// //       <CardContent className="space-y-8 p-0">
// //         <div className="text-center space-y-4">
// //           <h3 className="text-2xl sm:text-3xl font-bold text-blue-400">{result.quizScore.toFixed(1)}%</h3>
// //           <Progress value={result.quizScore} className="w-full h-4 bg-gray-700 [&>div]:bg-blue-500 rounded-full" />
// //         </div>

// //         {result.improvementTip && (
// //           <div className="bg-gray-800 p-4 rounded-lg border border-gray-600">
// //             <p className="font-medium text-blue-400">Improvement Tip:</p>
// //             <p className="text-gray-300 mt-1">{result.improvementTip}</p>
// //           </div>
// //         )}

// //         <div className="space-y-6">
// //           <h3 className="font-medium text-lg text-gray-100">Question Review</h3>
// //           {result.questions.map((q, index) => (
// //            <div
// //   key={index}
// //   className="relative bg-gray-900 border border-gray-700 rounded-lg p-4 sm:p-6 space-y-4 hover:bg-gray-800 transition-all"
// // >
// //   {/* ✅ Top-right icon */}
// //       <div className="absolute top-3 right-3">
// //         {q.isCorrect ? (
// //           <CheckCircle2 className="h-6 w-6 text-green-500" />
// //         ) : (
// //           <XCircle className="h-6 w-6 text-red-500" />
// //         )}
// //       </div>

// //   {/* ✅ Question */}
// //   <div className="pr-10"> {/* Extra right padding so icon doesn't overlap */}
// //     <p className="font-medium text-sm sm:text-base text-gray-100">
// //       <span className="text-blue-400 mr-1">Q{index + 1}.</span>
// //       {q.question}
// //     </p>
// //   </div>

// //   {/* ✅ Options */}
// //   {Array.isArray(q.options) && (
// //     <div className="text-sm text-gray-300 space-y-2">
// //       {q.options.map((option, idx) => {
// //         const isCorrect = option === q.answer;
// //         const isSelected = option === q.userAnswer;

// //         return (
// //           <div
// //             key={idx}
// //             className={`flex items-start gap-2 p-2 rounded-md border 
// //               ${
// //                 isCorrect
// //                   ? "bg-green-900/20 border-green-600"
// //                   : isSelected
// //                   ? "bg-red-900/20 border-red-600"
// //                   : "bg-gray-800/40 border-transparent"
// //               }
// //             `}
// //           >
// //             <span className="text-blue-400 font-bold">
// //               {optionLabels[idx]}.
// //             </span>
// //             <span>{option}</span>
// //           </div>
// //         );
// //       })}
// //     </div>
// //   )}

// //   {/* ✅ Your Answer & Correct Answer */}
// //   <div className="text-sm text-gray-300 space-y-1">
// //     <p className="font-semibold">Your answer: {q.userAnswer}</p>
// //     <div
// //       className={`ml-2 ${
// //         q.userAnswer === q.answer ? "text-green-400" : "text-red-400"
// //       }`}
// //     >
// //       {q.userAnswer || "Not answered"}
// //     </div>

// //     <p className="font-semibold mt-2"> {!q.isCorrect} && Correct answer: {q.answer} </p>
// //     <div className="ml-2 text-green-400">{q.answer}</div>
// //   </div>

// //   {/* ✅ Explanation */}
// //   {q.explanation && (
// //     <div className="text-sm bg-gray-800 p-4 rounded border border-gray-600">
// //       <p className="font-medium text-blue-400">Explanation:</p>
// //       <p className="mt-1 text-gray-300">{q.explanation}</p>
// //     </div>
// //   )}
// // </div>

// //           ))}
// //         </div>
// //       </CardContent>

// //       {!hideStartNew && (
// //         <CardFooter className="pt-8 px-0">
// //           <Button onClick={onStartNew} className="w-full bg-gradient-to-r from-slate-600 via-slate-700 to-slate-800 text-white">
// //             Start New Quiz
// //           </Button>
// //         </CardFooter>
// //       )}
// //     </motion.div>
// //   );
// // }


// "use client";

// import { Trophy, CheckCircle2, XCircle } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { CardContent, CardFooter } from "@/components/ui/card";
// import { Progress } from "@/components/ui/progress";
// import { motion } from "framer-motion";

// const optionLabels = ["A", "B", "C", "D", "E", "F"];

// export default function QuizResult({ result, hideStartNew = false, onStartNew }) {
//   const currentDateTime = new Date().toLocaleString("en-IN", {
//     timeZone: "Asia/Kolkata",
//     hour: "2-digit",
//     minute: "2-digit",
//     hour12: true,
//     weekday: "long",
//     day: "numeric",
//     month: "long",
//     year: "numeric",
//   });

//   if (!result || !Array.isArray(result.questions)) {
//     return (
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="text-white max-w-3xl mx-auto text-center py-10"
//       >
//         <h1 className="flex items-center justify-center gap-2 text-2xl sm:text-3xl font-bold mb-4 gradient-title">
//           <Trophy className="h-6 w-6 text-yellow-500" />
//           Quiz Results
//         </h1>
//         <p className="text-gray-300 text-sm mb-4">{currentDateTime}</p>
//         <p className="text-gray-300">No results available.</p>
//         {!hideStartNew && (
//           <Button
//             onClick={onStartNew}
//             className="mt-4 w-full bg-gradient-to-r from-slate-600 via-slate-700 to-slate-800 text-white"
//           >
//             Start New Quiz
//           </Button>
//         )}
//       </motion.div>
//     );
//   }

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       className="max-w-3xl mx-auto text-white py-10"
//     >
//       <h1 className="flex items-center gap-2 text-2xl sm:text-3xl font-bold mb-2 gradient-title">
//         <Trophy className="h-6 w-6 text-yellow-500" />
//         Quiz Results
//       </h1>
//       <p className="text-gray-300 text-sm mb-6">{currentDateTime}</p>

//       <CardContent className="space-y-8 p-0">
//         <div className="text-center space-y-4">
//           <h3 className="text-2xl sm:text-3xl font-bold text-blue-400">
//             {result.quizScore.toFixed(1)}%
//           </h3>
//           <Progress
//             value={result.quizScore}
//             className="w-full h-4 bg-gray-700 [&>div]:bg-blue-500 rounded-full"
//           />
//         </div>

//         {result.improvementTip && (
//           <div className="bg-gray-800 p-4 rounded-lg border border-gray-600">
//             <p className="font-medium text-blue-400">Improvement Tip:</p>
//             <p className="text-gray-300 mt-1">{result.improvementTip}</p>
//           </div>
//         )}

//         <div className="space-y-6">
//           <h3 className="font-medium text-lg text-gray-100">Question Review</h3>

//           {result.questions.map((q, index) => (
//             <div
//               key={index}
//               className="relative bg-gray-900 border border-gray-700 rounded-lg p-4 sm:p-6 space-y-4 hover:bg-gray-800 transition-all"
//             >
//               {/* ✅ Top-right icon */}
//               <div className="absolute top-3 right-3">
//                 {q.isCorrect ? (
//                   <CheckCircle2 className="h-6 w-6 text-green-500" />
//                 ) : (
//                   <XCircle className="h-6 w-6 text-red-500" />
//                 )}
//               </div>

//               {/* ✅ Question */}
//               <div className="pr-10">
//                 <p className="font-medium text-sm sm:text-base text-gray-100">
//                   <span className="text-blue-400 mr-1">Q{index + 1}.</span>
//                   {q.question}
//                 </p>
//               </div>

//               {/* ✅ Options */}
//               {Array.isArray(q.options) && (
//                 <div className="text-sm text-gray-300 space-y-2">
//                   {q.options.map((option, idx) => {
//                     const isCorrect = option === q.answer;
//                     const isSelected = option === q.userAnswer;

//                     return (
//                       <div
//                         key={idx}
//                         className={`flex items-start gap-2 p-2 rounded-md border 
//                           ${
//                             isCorrect
//                               ? "bg-green-900/20 border-green-600"
//                               : isSelected
//                               ? "bg-red-900/20 border-red-600"
//                               : "bg-gray-800/40 border-transparent"
//                           }
//                         `}
//                       >
//                         <span className="text-blue-400 font-bold">
//                           {optionLabels[idx]}.
//                         </span>
//                         <span>{option}</span>
//                       </div>
//                     );
//                   })}
//                 </div>
//               )}

//               {/* ✅ Answer Display */}
//               <div className="text-sm text-gray-300 space-y-1">
//                 <p className="font-semibold">
//                   Your answer:{" "}
//                   <span
//                     className={`ml-2 ${
//                       q.userAnswer === q.answer
//                         ? "text-green-400"
//                         : "text-red-400"
//                     }`}
//                   >
//                     {q.userAnswer || "Not answered"}
//                   </span>
//                 </p>

//                 {!q.isCorrect && (
//                   <>
//                     <p className="font-semibold mt-2">Correct answer:</p>
//                     <div className="ml-2 text-green-400">{q.answer}</div>
//                   </>
//                 )}
//               </div>

//               {/* ✅ Explanation */}
//               {q.explanation && (
//                 <div className="text-sm bg-gray-800 p-4 rounded border border-gray-600">
//                   <p className="font-medium text-blue-400">Explanation:</p>
//                   <p className="mt-1 text-gray-300">{q.explanation}</p>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </CardContent>

//       {!hideStartNew && (
//         <CardFooter className="pt-8 px-0">
//           <Button
//             onClick={onStartNew}
//             className="w-full bg-gradient-to-r from-slate-600 via-slate-700 to-slate-800 text-white"
//           >
//             Start New Quiz
//           </Button>
//         </CardFooter>
//       )}
//     </motion.div>
//   );
// }

// "use client";

// import { Trophy, CheckCircle2, XCircle } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { CardContent, CardFooter } from "@/components/ui/card";
// import { Progress } from "@/components/ui/progress";
// import { motion } from "framer-motion";

// const optionLabels = ["A", "B", "C", "D", "E", "F"];

// export default function QuizResult({ result, hideStartNew = false, onStartNew }) {
//   const currentDateTime = new Date().toLocaleString("en-IN", {
//     timeZone: "Asia/Kolkata",
//     hour: "2-digit",
//     minute: "2-digit",
//     hour12: true,
//     weekday: "long",
//     day: "numeric",
//     month: "long",
//     year: "numeric",
//   });

//   // 👇👇👇 Fix: Always parse questions if string
//   let questions = result?.questions;
//   if (typeof questions === "string") {
//     try {
//       questions = JSON.parse(questions);
//     } catch {
//       questions = [];
//     }
//   }

//   if (!result || !Array.isArray(questions)) {
//     return (
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="text-white max-w-3xl mx-auto text-center py-10"
//       >
//         <h1 className="flex items-center justify-center gap-2 text-2xl sm:text-3xl font-bold mb-4 gradient-title">
//           <Trophy className="h-6 w-6 text-yellow-500" />
//           Quiz Results
//         </h1>
//         <p className="text-gray-300 text-sm mb-4">{currentDateTime}</p>
//         <p className="text-gray-300">No results available.</p>
//         {!hideStartNew && (
//           <Button
//             onClick={onStartNew}
//             className="mt-4 w-full bg-gradient-to-r from-slate-600 via-slate-700 to-slate-800 text-white"
//           >
//             Start New Quiz
//           </Button>
//         )}
//       </motion.div>
//     );
//   }

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       className="max-w-3xl mx-auto text-white py-10"
//     >
//       <h1 className="flex items-center gap-2 text-2xl sm:text-3xl font-bold mb-2 gradient-title">
//         <Trophy className="h-6 w-6 text-yellow-500" />
//         Quiz Results
//       </h1>
//       <p className="text-gray-300 text-sm mb-6">{currentDateTime}</p>

//       <CardContent className="space-y-8 p-0">
//         <div className="text-center space-y-4">
//           <h3 className="text-2xl sm:text-3xl font-bold text-blue-400">
//             {result.quizScore.toFixed(1)}%
//           </h3>
//           <Progress
//             value={result.quizScore}
//             className="w-full h-4 bg-gray-700 [&>div]:bg-blue-500 rounded-full"
//           />
//         </div>

//         {result.improvementTip && (
//           <div className="bg-gray-800 p-4 rounded-lg border border-gray-600">
//             <p className="font-medium text-blue-400">Improvement Tip:</p>
//             <p className="text-gray-300 mt-1">{result.improvementTip}</p>
//           </div>
//         )}

//         <div className="space-y-6">
//           <h3 className="font-medium text-lg text-gray-100">Question Review</h3>

//           {questions.map((q, index) => (
//             <div
//               key={index}
//               className="relative bg-gray-900 border border-gray-700 rounded-lg p-4 sm:p-6 space-y-4 hover:bg-gray-800 transition-all"
//             >
//               {/* Top-right icon */}
//               <div className="absolute top-3 right-3">
//                 {q.isCorrect ? (
//                   <CheckCircle2 className="h-6 w-6 text-green-500" />
//                 ) : (
//                   <XCircle className="h-6 w-6 text-red-500" />
//                 )}
//               </div>

//               {/* Question */}
//               <div className="pr-10">
//                 <p className="font-medium text-sm sm:text-base text-gray-100">
//                   <span className="text-blue-400 mr-1">Q{index + 1}.</span>
//                   {q.question}
//                 </p>
//               </div>

//               {/* Options */}
//               {Array.isArray(q.options) && (
//                 <div className="text-sm text-gray-300 space-y-2">
//                   {q.options.map((option, idx) => {
//                     const isCorrect = option === q.answer;
//                     const isSelected = option === q.userAnswer;

//                     return (
//                       <div
//                         key={idx}
//                         className={`flex items-start gap-2 p-2 rounded-md border 
//                           ${
//                             isCorrect
//                               ? "bg-green-900/20 border-green-600"
//                               : isSelected
//                               ? "bg-red-900/20 border-red-600"
//                               : "bg-gray-800/40 border-transparent"
//                           }
//                         `}
//                       >
//                         <span className="text-blue-400 font-bold">
//                           {optionLabels[idx]}.
//                         </span>
//                         <span>{option}</span>
//                       </div>
//                     );
//                   })}
//                 </div>
//               )}

//               {/* Answer Display */}
//               <div className="text-sm text-gray-300 space-y-1">
//                 <p className="font-semibold">
//                   Your answer:{" "}
//                   <span
//                     className={`ml-2 ${
//                       q.userAnswer === q.answer
//                         ? "text-green-400"
//                         : "text-red-400"
//                     }`}
//                   >
//                     {q.userAnswer || "Not answered"}
//                   </span>
//                 </p>

//                 {!q.isCorrect && (
//                   <>
//                     <p className="font-semibold mt-2">Correct answer:</p>
//                     <div className="ml-2 text-green-400">{q.answer}</div>
//                   </>
//                 )}
//               </div>

//               {/* Explanation */}
//               {q.explanation && (
//                 <div className="text-sm bg-gray-800 p-4 rounded border border-gray-600">
//                   <p className="font-medium text-blue-400">Explanation:</p>
//                   <p className="mt-1 text-gray-300">{q.explanation}</p>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </CardContent>

//       {!hideStartNew && (
//         <CardFooter className="pt-8 px-0">
//           <Button
//             onClick={onStartNew}
//             className="w-full bg-gradient-to-r from-slate-600 via-slate-700 to-slate-800 text-white cursor-pointer"
//           > 
//             Start New Quiz
//           </Button>
//         </CardFooter>
//       )}
//     </motion.div>
//   );
// }

"use client";

import { Trophy, CheckCircle2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CardContent, CardFooter } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";

const optionLabels = ["A", "B", "C", "D", "E", "F"];

export default function QuizResult({ result, hideStartNew = false, onStartNew }) {
  const currentDateTime = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  let questions = result?.questions;
  if (typeof questions === "string") {
    try {
      questions = JSON.parse(questions);
    } catch {
      questions = [];
    }
  }

  if (!result || !Array.isArray(questions)) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-white max-w-3xl mx-auto text-center py-10"
      >
        <h1 className="flex items-center justify-center gap-2 text-2xl sm:text-3xl font-bold mb-4 gradient-title">
          <Trophy className="h-6 w-6 text-yellow-500" />
          Quiz Results
        </h1>
        <p className="text-gray-300 text-sm mb-4">{currentDateTime}</p>
        <p className="text-gray-300">No results available.</p>
        {!hideStartNew && (
          <Button
            onClick={onStartNew}
            className="mt-4 w-full bg-gradient-to-r from-slate-600 via-slate-700 to-slate-800 text-white"
          >
            Start New Quiz
          </Button>
        )}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto text-white py-10"
    >
      <h1 className="flex items-center gap-2 text-2xl sm:text-3xl font-bold mb-2 gradient-title">
        <Trophy className="h-6 w-6 text-yellow-500" />
        Quiz Results
      </h1>
      <p className="text-gray-300 text-sm mb-6">{currentDateTime}</p>

      <CardContent className="space-y-8 p-0">
        <div className="text-center space-y-4">
          <h3 className="text-2xl sm:text-3xl font-bold text-blue-400">
            {result.quizScore.toFixed(1)}%
          </h3>
          <Progress
            value={result.quizScore}
            className="w-full h-4 bg-gray-700 [&>div]:bg-blue-500 rounded-full"
          />
        </div>

        {result.improvementTip && (
          <div className="bg-gray-800 p-4 rounded-lg border border-gray-600">
            <p className="font-medium text-blue-400">Improvement Tip:</p>
            <p className="text-gray-300 mt-1">{result.improvementTip}</p>
          </div>
        )}

        <div className="space-y-6">
          <h3 className="font-medium text-lg text-gray-100">Question Review</h3>

          {questions.map((q, index) => (
            <div
              key={index}
              className="relative bg-gray-900 border border-gray-700 rounded-lg p-4 sm:p-6 space-y-4 hover:bg-gray-800 transition-all"
            >
              <div className="absolute top-3 right-3">
                {q.isCorrect ? (
                  <CheckCircle2 className="h-6 w-6 text-green-500" />
                ) : (
                  <XCircle className="h-6 w-6 text-red-500" />
                )}
              </div>
              <div className="pr-10">
                <p className="font-medium text-sm sm:text-base text-gray-100">
                  <span className="text-blue-400 mr-1">Q{index + 1}.</span>
                  {q.question}
                </p>
              </div>
              {Array.isArray(q.options) && (
                <div className="text-sm text-gray-300 space-y-2">
                  {q.options.map((option, idx) => {
                    const isCorrect = option === q.answer;
                    const isSelected = option === q.userAnswer;
                    return (
                      <div
                        key={idx}
                        className={`flex items-start gap-2 p-2 rounded-md border 
                          ${
                            isCorrect
                              ? "bg-green-900/20 border-green-600"
                              : isSelected
                              ? "bg-red-900/20 border-red-600"
                              : "bg-gray-800/40 border-transparent"
                          }
                        `}
                      >
                        <span className="text-blue-400 font-bold">
                          {optionLabels[idx]}.
                        </span>
                        <span>{option}</span>
                      </div>
                    );
                  })}
                </div>
              )}
              <div className="text-sm text-gray-300 space-y-1">
                <p className="font-semibold">
                  Your answer:{" "}
                  <span
                    className={`ml-2 ${
                      q.userAnswer === q.answer
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    {q.userAnswer || "Not answered"}
                  </span>
                </p>
                {!q.isCorrect && (
                  <>
                    <p className="font-semibold mt-2">Correct answer:</p>
                    <div className="ml-2 text-green-400">{q.answer}</div>
                  </>
                )}
              </div>
              {q.explanation && (
                <div className="text-sm bg-gray-800 p-4 rounded border border-gray-600">
                  <p className="font-medium text-blue-400">Explanation:</p>
                  <p className="mt-1 text-gray-300">{q.explanation}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </CardContent>

      {!hideStartNew && (
        <CardFooter className="pt-8 px-0 cursor-pointer">
          <Button
            onClick={onStartNew}
            className="w-full bg-gradient-to-r from-slate-600 via-slate-700 to-slate-800 text-white cursor-pointer"
          >
            Start New Quiz
          </Button>
        </CardFooter>
      )}
    </motion.div>
  );
}