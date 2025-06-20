"use client";

import { useEffect, useState } from "react";
import { getAssessments } from "@/actions/interview";
import StatsCards from "./_components/stats-cards";
import PerformanceChart from "./_components/performance-chart";
import QuizList from "./_components/quiz-list";
import { toast } from "sonner";

export default function InterviewPage() {
  const [assessments, setAssessments] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAssessments = async () => {
    try {
      setLoading(true);
      const data = await getAssessments();
      setAssessments(data || []);
    } catch (error) {
      console.error("Failed to fetch assessments:", error);
      toast.error("Failed to load quiz data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAssessments();
    // Listen for quiz completion event to refresh assessments
    const handleQuizCompleted = () => {
      fetchAssessments();
    };
    window.addEventListener('quizCompleted', handleQuizCompleted);
    return () => {
      window.removeEventListener('quizCompleted', handleQuizCompleted);
    };
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between mb-5 flex-wrap gap-4">
        <h1 className="text-6xl font-bold gradient-title mb-5">
          Interview Preparation
        </h1>
        <button
          onClick={() => window.location.href = '/interview/mock'}
          className="px-6 py-3 rounded-lg bg-gradient-to-r from-slate-700 via-gray-800 to-slate-900 text-white font-semibold shadow-md hover:from-gray-800 hover:via-slate-900 hover:to-gray-800 hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 cursor-pointer"
        >
          Start New Quiz
        </button>
      </div>
      <div className="space-y-10">
        <StatsCards assessments={assessments} />
        <PerformanceChart assessments={assessments} />
        <QuizList assessments={assessments} onRefresh={fetchAssessments} />
      </div>
    </div>
  );
}

/* Add animation keyframes at the end of the file */
