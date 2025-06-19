"use client";

import { useEffect, useState } from "react";
import { getAssessments } from "@/actions/interview";
import StatsCards from "./_components/stats-cards";
import PerformanceChart from "./_components/performance-chart";
import QuizList from "./_components/quiz-list";
import { toast } from "sonner";

const InterviewPage = () => {
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
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-6xl font-bold gradient-title mb-5">
          Interview Preparation
        </h1>
      </div>
      <div className="space-y-10">
        <StatsCards assessments={assessments} />
        <PerformanceChart assessments={assessments} />
        <QuizList assessments={assessments} onRefresh={fetchAssessments} />
      </div>
    </div>
  );
};

export default InterviewPage;
