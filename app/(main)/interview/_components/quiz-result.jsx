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
                    const isCorrect = option === (q.answer || q.correctAnswer);
                    const isSelected = option === q.userAnswer;
                    let optionClass = "flex items-start gap-2 p-2 rounded-md border ";
                    if (isSelected && isCorrect) {
                      optionClass += "bg-green-500 text-white border-green-700";
                    } else if (isSelected && !isCorrect) {
                      optionClass += "bg-red-100 text-red-700 border-red-500";
                    } else if (!isSelected && isCorrect) {
                      optionClass += "bg-green-100 text-green-700 border-green-500";
                    } else {
                      optionClass += "bg-gray-800/40 border-transparent";
                    }
                    let labelClass = "font-bold ";
                    if (isCorrect) {
                      labelClass += isSelected ? "text-white" : "text-green-700";
                    } else if (isSelected && !isCorrect) {
                      labelClass += "text-red-700";
                    } else {
                      labelClass += "text-gray-400";
                    }
                    return (
                      <div
                        key={idx}
                        className={optionClass}
                      >
                        <span className={labelClass}>
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
                      q.userAnswer === (q.answer || q.correctAnswer)
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    {q.userAnswer || "Not answered"}
                  </span>
                </p>
                <p className="font-semibold text-sm sm:text-base">
                  Correct answer: <code className="bg-gray-900 text-green-300 px-1 rounded text-base font-mono whitespace-normal align-middle">{q.answer ? q.answer : (q.correctAnswer ? q.correctAnswer : "Not available")}</code>
                </p>
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