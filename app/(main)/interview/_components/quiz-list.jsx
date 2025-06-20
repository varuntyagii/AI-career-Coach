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
              <div className="mt-4 flex justify-center cursor-pointer">
                <Button
                  onClick={() => router.push("/interview/mock")}
                  className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white cursor-pointer transition-all duration-200 hover:from-pink-500 hover:via-purple-500 hover:to-blue-500 hover:scale-105 shadow-md cursor-pointer"
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
                      className="cursor-pointer hover:bg-blue-100 hover:text-blue-700 transition"
                      onClick={() => setSelectedQuiz(assessment)}
                    >
                      View
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="cursor-pointer hover:bg-orange-100 hover:text-orange-700 transition"
                      style={{ color: '#e67e22', borderColor: '#e67e22' }}
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
        <DialogContent className="max-h-[80vh] overflow-y-auto bg-white dark:bg-gray-900">
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
              startNewButtonClassName="cursor-pointer"
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default QuizList;