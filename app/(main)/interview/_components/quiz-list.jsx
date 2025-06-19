// // "use client"
// // import { Button } from "@/components/ui/button";
// // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
// // import { format } from "date-fns";
// // import { useRouter } from "next/navigation"
// // import { useState } from "react";
// // import QuizResult from "./quiz-result";

// // const QuizList = ({assessments}) => {
// //     const router = useRouter();
// //       const [selectedQuiz, setSelectedQuiz] = useState(null);

// //   return (
// //     <>
// //       <Card>
// //         <CardHeader>
// //           <div className="flex items-center justify-between">
// //             <div>
// //               <CardTitle className="gradient-title text-3xl md:text-4xl">
// //                 Recent Quizzes
// //               </CardTitle>
// //               <CardDescription>
// //                 Review your past quiz performance
// //               </CardDescription>
// //             </div>
// //             <Button className="cursor-pointer hover:bg-gray-500 hover:text-black" onClick={() => router.push("/interview/mock")}>
// //               Start New Quiz
// //             </Button>
// //           </div>
// //         </CardHeader>
// //         <CardContent>
// //           <div className="space-y-4">
// //             {assessments?.map((assessment, i) => (
// //               <Card
// //                 key={assessment.id}
// //                 className="cursor-pointer hover:bg-muted/50 transition-colors"
// //                 onClick={() => setSelectedQuiz(assessment)}
// //               >
// //                 <CardHeader>
// //                   <CardTitle className="gradient-title text-2xl">
// //                     Quiz {i + 1}
// //                   </CardTitle>
// //                   <CardDescription className="flex justify-between w-full">
// //                     <div>Score: {assessment.quizScore.toFixed(1)}%</div>
// //                     <div>
// //                       {format(
// //                         new Date(assessment.createdAt),
// //                         "MMMM dd, yyyy HH:mm"
// //                       )}
// //                     </div>
// //                   </CardDescription>
// //                 </CardHeader>
// //                 {assessment.improvementTip && (
// //                   <CardContent>
// //                     <p className="text-sm text-muted-foreground">
// //                       {assessment.improvementTip}
// //                     </p>
// //                   </CardContent>
// //                 )}
// //               </Card>
// //             ))}
// //           </div>
// //         </CardContent>
// //       </Card>

// //       {/* {dialog} */}

      
// //       <Dialog open={!!selectedQuiz} onOpenChange={() => setSelectedQuiz(null)}>
// //         <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
// //           <DialogHeader>
// //             <DialogTitle>Are you absolutely sure?</DialogTitle>
// //           </DialogHeader>
// //           <QuizResult
// //             result={selectedQuiz}
// //             hideStartNew
// //             onStartNew={() => router.push("/interview/mock")}
// //           />
// //         </DialogContent>
// //       </Dialog>
// //     </>
// //   )
// // }

// // export default QuizList



// "use client";

// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
// import { format } from "date-fns";
// import { useRouter } from "next/navigation";
// import { useState } from "react";
// import QuizResult from "./quiz-result";
// import { deleteAssessment } from "@/actions/interview";

// const QuizList = ({ assessments: initialAssessments }) => {
//   const router = useRouter();
//   const [assessments, setAssessments] = useState(initialAssessments || []);
//   const [selectedQuiz, setSelectedQuiz] = useState(null);
//   const [deleteQuizId, setDeleteQuizId] = useState(null);
//   const [deleteError, setDeleteError] = useState(null);

//   // Handle delete with server action
//   const handleDelete = async () => {
//     if (!deleteQuizId) return;

//     try {
//       // Call server action to delete from backend
//       const result = await deleteAssessment(deleteQuizId);
//       if (result.success) {
//         // Update local state to remove the quiz
//         setAssessments(assessments.filter((assessment) => assessment.id !== deleteQuizId));
//         setDeleteQuizId(null); // Close dialog
//         console.log(`Deleted quiz with ID: ${deleteQuizId}`);
//       } else {
//         setDeleteError(result.error || "Failed to delete quiz");
//       }
//     } catch (error) {
//       setDeleteError("An error occurred while deleting the quiz");
//       console.error("Delete error:", error);
//     }
//   };

//   return (
//     <>
//       <Card>
//         <CardHeader>
//           <div className="flex items-center justify-between">
//             <div>
//               <CardTitle className="gradient-title text-3xl md:text-4xl">
//                 Recent Quizzes
//               </CardTitle>
//               <CardDescription>
//                 Review your past quiz performance
//               </CardDescription>
//             </div>
//             <Button
//               className="cursor-pointer hover:bg-gray-500 hover:text-black"
//               onClick={() => router.push("/interview/mock")}
//             >
//               Start New Quiz
//             </Button>
//           </div>
//         </CardHeader>
//         <CardContent>
//           <div className="space-y-4">
//             {assessments?.map((assessment, i) => (
//               <Card
//                 key={assessment.id}
//                 className="cursor-pointer hover:bg-muted/50 transition-colors"
//                 onClick={() => setSelectedQuiz(assessment)}
//               >
//                 <CardHeader>
//                   <div className="flex items-center justify-between">
//                     <CardTitle className="gradient-title text-2xl">
//                       Quiz {i + 1}
//                     </CardTitle>
//                     <Button 
//                       variant="destructive"
//                       size="sm"
//                       onClick={(e) => {
//                         e.stopPropagation(); // Prevent card click from opening dialog
//                         setDeleteQuizId(assessment.id); // Open delete confirmation dialog
//                       }}
//                     >
//                       Delete
//                     </Button>
//                   </div>
//                   <CardDescription className="flex justify-between w-full">
//                     <div>Score: {assessment.quizScore.toFixed(1)}%</div>
//                     <div>
//                       {format(
//                         new Date(assessment.createdAt),
//                         "MMMM dd, yyyy HH:mm"
//                       )}
//                     </div>
//                   </CardDescription>
//                 </CardHeader>
//                 {assessment.improvementTip && (
//                   <CardContent>
//                     <p className="text-sm text-muted-foreground">
//                       {assessment.improvementTip}
//                     </p>
//                   </CardContent>
//                 )}
//               </Card>
//             ))}
//           </div>
//         </CardContent>
//       </Card>

//       <Dialog  open={!!selectedQuiz} onOpenChange={() => setSelectedQuiz(null)}>
//         <DialogContent className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
//           <DialogHeader>
//             <DialogTitle>Are you absolutely sure?</DialogTitle>
//           </DialogHeader>
//           <QuizResult 
//             result={selectedQuiz}
            
//             hideStartNew
//             onStartNew={() => router.push("/interview/mock")}
//           />
//         </DialogContent>
//       </Dialog>

//       <Dialog open={!!deleteQuizId} onOpenChange={() => {
//         setDeleteQuizId(null);
//         setDeleteError(null);
//       }}>
//         <DialogContent className="max-w-md cursor-pointer hover:underline transition-all duration-200">
//           <DialogHeader>
//             <DialogTitle>Confirm Deletion</DialogTitle>
//             <DialogDescription>
//               Are you sure you want to delete this quiz? This action cannot be undone.
//               {deleteError && (
//                 <p className="text-yellow-500 text-sm mt-2 ">{deleteError}</p>
//               )}
//             </DialogDescription>
//           </DialogHeader>
//           <DialogFooter>
//             <Button
//               variant="outline"
//               onClick={() => {
//                 setDeleteQuizId(null);
//                 setDeleteError(null);
//               }}
//             >
//               Cancel
//             </Button>
//             <Button variant="destructive" onClick={handleDelete}>
//               Delete
//             </Button>
//           </DialogFooter>
//         </DialogContent>
//       </Dialog>
//     </>
//   );
// };

// export default QuizList;


// "use client";
// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
// import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
// import { format } from "date-fns";
// import { useRouter } from "next/navigation";
// import QuizResult from "./quiz-result";
// import { deleteAssessment } from "@/actions/interview";

// const QuizList = ({ assessments }) => {
//   const router = useRouter();
//   const [selectedQuiz, setSelectedQuiz] = useState(null);
//   const [loadingId, setLoadingId] = useState(null);

//   const handleDelete = async (id) => {
//     setLoadingId(id);
//     const res = await deleteAssessment(id);
//     setLoadingId(null);
//     if (res?.success) {
//       router.refresh(); // Refresh the page to update the list
//     } else {
//       alert(res?.error || "Failed to delete quiz.");
//     }
//   };

//   return (
//     <>
//       <Card>
//         <CardHeader>
//           <div className="flex items-center justify-between">
//             <div>
//               <CardTitle className="gradient-title text-3xl md:text-4xl">
//                 Recent Quizzes
//               </CardTitle>
//               <CardDescription>
//                 View your recent quiz attempts and results.
//               </CardDescription>
//             </div>
//           </div>
//         </CardHeader>
//         <CardContent>
//           {(!assessments || assessments.length === 0) && (
//             <div className="text-muted-foreground text-center py-8">
//               No quizzes found.
//             </div>
//           )}
//           <div className="space-y-4">
//             {assessments?.map((assessment) => (
//               <Card key={assessment.id} className="border">
//                 <CardHeader className="flex flex-row items-center justify-between">
//                   <div>
//                     <CardTitle className="text-lg">
//                       {assessment.category || "Quiz"}
//                     </CardTitle>
//                     <CardDescription>
//                       Score: <b>{assessment.quizScore}</b> |{" "}
//                       {assessment.questions?.length || 0} Questions |{" "}
//                       {assessment.createdAt
//                         ? format(new Date(assessment.createdAt), "dd MMM yyyy, hh:mm a")
//                         : ""}
//                     </CardDescription>
//                   </div>
//                   <div className="flex gap-2 cursor-pointer">
//                     <Button
//                       variant="outline"
//                       size="sm"
//                       className="cursor-pointer"
//                       onClick={() => setSelectedQuiz(assessment)}
//                     >
//                       View
//                     </Button>
//                     <Button
//                       variant="destructive"
//                       size="sm"
//                       className="cursor-pointer"
//                       onClick={() => handleDelete(assessment.id)}
//                       disabled={loadingId === assessment.id}
//                     >
//                       {loadingId === assessment.id ? "Deleting..." : "Delete"}
//                     </Button>
//                   </div>
//                 </CardHeader>
//               </Card>
//             ))}
//           </div>
//         </CardContent>
//       </Card>

//       {/* Dialog for viewing quiz result */}
//       {/* <Dialog open={!!selectedQuiz} onOpenChange={() => setSelectedQuiz(null)}>
//         <DialogContent className="max-h-[80vh] overflow-y-auto">
//           <DialogHeader>
//             <DialogTitle>Quiz Result</DialogTitle>
//           </DialogHeader>
//           {selectedQuiz && (
//             <QuizResult result={selectedQuiz} />
//           )}
//         </DialogContent>
//       </Dialog> */}

//       <Dialog open={!!selectedQuiz} onOpenChange={() => setSelectedQuiz(null)}>
//   <DialogContent className="max-h-[80vh] overflow-y-auto">
//     <DialogHeader>
//       <DialogTitle>Past Quiz Review</DialogTitle>
//     </DialogHeader>
//     {selectedQuiz && (
//       <QuizResult
//         result={selectedQuiz}
//         onStartNew={() => {
//           setSelectedQuiz(null); // Close dialog
//           router.push("/interview/mock"); // Go to new quiz page
//         }}
//       />
//     )}
//   </DialogContent>
// </Dialog>
//     </>
//   );
// };

// export default QuizList;

"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { format } from "date-fns";
import { useRouter } from "next/navigation";
import QuizResult from "./quiz-result";
import { deleteAssessment } from "@/actions/interview";

const QuizList = ({ assessments }) => {
  const router = useRouter();
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [loadingId, setLoadingId] = useState(null);

  const handleDelete = async (id) => {
    setLoadingId(id);
    const res = await deleteAssessment(id);
    setLoadingId(null);
    if (res?.success) {
      router.refresh();
    } else {
      alert(res?.error || "Failed to delete quiz.");
    }
  };

  return (
    <>
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="gradient-title text-3xl md:text-4xl">
                Recent Quizzes
              </CardTitle>
              <CardDescription>
                View your recent quiz attempts and results.
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {(!assessments || assessments.length === 0) && (
            <div className="text-muted-foreground text-center py-8">
              No quizzes found.
              <div className="mt-4 flex justify-center">
              <Button
              onClick={() => router.push("/interview/mock")}
              className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white cursor-pointer transition-all duration-200 hover:from-pink-500 hover:via-purple-500 hover:to-blue-500 hover:scale-105 shadow-md"
            >
              Start New Quiz
            </Button>
              </div>
            </div>
          )}
          <div className="space-y-4">
            {assessments?.map((assessment) => (
              <Card key={assessment.id} className="border">
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle className="text-lg">
                      {assessment.category || "Quiz"}
                    </CardTitle>
                    <CardDescription>
                      Score: <b>{assessment.quizScore}</b> |{" "}
                      {Array.isArray(assessment.questions)
                        ? assessment.questions.length
                        : (typeof assessment.questions === "string"
                            ? (() => {
                                try {
                                  return JSON.parse(assessment.questions).length;
                                } catch {
                                  return 0;
                                }
                              })()
                            : 0)
                      } Questions |{" "}
                      {assessment.createdAt
                        ? format(new Date(assessment.createdAt), "dd MMM yyyy, hh:mm a")
                        : ""}
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectedQuiz(assessment)}
                    >
                      View
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDelete(assessment.id)}
                      disabled={loadingId === assessment.id}
                    >
                      {loadingId === assessment.id ? "Deleting..." : "Delete"}
                    </Button>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      <Dialog open={!!selectedQuiz} onOpenChange={() => setSelectedQuiz(null)}>
        <DialogContent className="max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Past Quiz Review</DialogTitle>
          </DialogHeader>
          {selectedQuiz && (
            <QuizResult
              result={selectedQuiz}
              onStartNew={() => {
                setSelectedQuiz(null);
                router.push("/interview/mock");
              }}
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default QuizList;