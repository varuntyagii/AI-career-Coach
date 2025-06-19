// // // import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// // // import {  BrainCircuit, Target, Trophy } from "lucide-react";

// // // const  StatsCards = ({ assessments }) => {
// // //       const getAverageScore = () => {
// // //     if (!assessments?.length) return 0;
// // //     const total = assessments.reduce(
// // //       (sum, assessment) => sum + assessment.quizScore,
// // //       0
// // //     );
// // //     return (total / assessments.length).toFixed(1);
// // //   };

// // //     const getLatestAssessment = () => {
// // //     if (!assessments?.length) return null;
// // //     return assessments[0];
// // //   };

// // //    const getTotalQuestions = () => {
// // //     if (!assessments?.length) return 0;
// // //     return assessments.reduce(
// // //       (sum, assessment) => sum + assessment.questions.length,
// // //       0
// // //     );
// // //   };
// // //   return (
// // //         <div className="grid gap-4 md:grid-cols-3">
// // //            <Card className="group relative hover:shadow-lg hover:border-indigo-400 border transition-all duration-300">
// // //                         <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
// // //                             <CardTitle className="text-sm font-medium group-hover:text-indigo-400 transition-colors">
// // //                                  🌟 Average Score
// // //                             </CardTitle>
// // //                             <Trophy className="h-4 w-4 text-muted-foreground group-hover:text-indigo-400 transition-colors" />
// // //                         </CardHeader>
// // //                         <CardContent>
// // //                             <div className="text-2xl font-bold group-hover:scale-105 transition-transform">
                               
// // //                                 <p className="text-xs text-muted-foreground" >  Across all assessments </p>
// // //                             </div>
// // //                             <div
// // //                                 className={`h-2 w-full rounded-full mt-2 transition-all duration-300 ${getAverageScore()}% `}
// // //                             />
// // //                         </CardContent>
// // //                     </Card>
// // //            <Card className="group relative hover:shadow-lg hover:border-amber-400 border transition-all duration-300">
// // //                         <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
// // //                             <CardTitle className="text-sm font-medium group-hover:text-amber-400 transition-colors">
// // //                                     📝	 Questions Practiced
// // //                             </CardTitle>
// // //                             <BrainCircuit className="h-4 w-4 text-muted-foreground group-hover:text-amber-400 transition-colors" />
// // //                         </CardHeader>
// // //                         <CardContent>
// // //                             <div className="text-2xl font-bold group-hover:scale-105 transition-transform">
                                
// // //                             <p className="text-xs text-muted-foreground"> Total Questions </p>
// // //                             </div>
// // //                             <div
// // //                                 className={`h-2 w-full rounded-full mt-2 transition-all duration-300 ${getTotalQuestions()} `}
// // //                             />
// // //                         </CardContent>
// // //                     </Card>
// // //            <Card className="group relative hover:shadow-lg hover:border-red-500 border transition-all duration-300">
// // //                         <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
// // //                             <CardTitle className="text-sm font-medium group-hover:text-red-400 transition-colors">
// // //                                 🏅Latest Score
// // //                             </CardTitle>
// // //                             <Target className="h-4 w-4 text-muted-foreground group-hover:text-red-400 transition-colors" />
// // //                         </CardHeader>
// // //                         <CardContent>
// // //                             <div className="text-2xl font-bold group-hover:scale-105 transition-transform">
// // //                                 <p className="text-xs text-muted-foreground">Most recent quiz</p>
// // //                             </div>
// // //                             <div
// // //                                 className={`h-2 w-full rounded-full mt-2 transition-all duration-300 ${getLatestAssessment()?.quizScore.toFixed(1) || 0}% `}
// // //                             />
// // //                         </CardContent>
// // //                     </Card>

// // //     </div>
// // //   )
// // // };

// // // export default StatsCards


// // "use client";

// // import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// // import { BrainCircuit, Target, Trophy } from "lucide-react";

// // const StatsCards = ({ assessments }) => {
// //   const getAverageScore = () => {
// //     if (!assessments?.length) return 0;
// //     const total = assessments.reduce(
// //       (sum, assessment) => sum + assessment.quizScore,
// //       0
// //     );
// //     return (total / assessments.length).toFixed(1);
// //   };

// //   const getLatestAssessment = () => {
// //     if (!assessments?.length) return null;
// //     return assessments[0];
// //   };

// //   const getTotalQuestions = () => {
// //     if (!assessments?.length) return 0;
// //     return assessments.reduce(
// //       (sum, assessment) => sum + assessment.questions.length,
// //       0
// //     );
// //   };

// //   return (
// //     <div className="grid gap-4 md:grid-cols-3">
// //       {/* 🌟 Average Score */}
// //       <Card className="group relative hover:shadow-lg hover:border-indigo-400 border transition-all duration-300">
// //         <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
// //           <CardTitle className="text-sm font-medium group-hover:text-indigo-400 transition-colors">
// //             🌟 Average Score
// //           </CardTitle>
// //           <Trophy className="h-4 w-4 text-muted-foreground group-hover:text-indigo-400 transition-colors" />
// //         </CardHeader>
// //         <CardContent>
// //           <div className="text-2xl font-bold group-hover:scale-105 transition-transform">
// //             {getAverageScore()}%
// //           </div>
// //           <p className="text-xs text-muted-foreground mt-1">Across all assessments</p>
// //         </CardContent>
// //       </Card>

// //       {/* 📝 Questions Practiced */}
// //       <Card className="group relative hover:shadow-lg hover:border-amber-400 border transition-all duration-300">
// //         <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
// //           <CardTitle className="text-sm font-medium group-hover:text-amber-400 transition-colors">
// //             📝 Questions Practiced
// //           </CardTitle>
// //           <BrainCircuit className="h-4 w-4 text-muted-foreground group-hover:text-amber-400 transition-colors" />
// //         </CardHeader>
// //         <CardContent>
// //           <div className="text-2xl font-bold group-hover:scale-105 transition-transform">
// //             {getTotalQuestions()}
// //           </div>
// //           <p className="text-xs text-muted-foreground mt-1">Total questions</p>
// //         </CardContent>
// //       </Card>

// //       {/* 🏅 Latest Score */}
// //       <Card className="group relative hover:shadow-lg hover:border-red-500 border transition-all duration-300">
// //         <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
// //           <CardTitle className="text-sm font-medium group-hover:text-red-400 transition-colors">
// //             🏅 Latest Score
// //           </CardTitle>
// //           <Target className="h-4 w-4 text-muted-foreground group-hover:text-red-400 transition-colors" />
// //         </CardHeader>
// //         <CardContent>
// //           <div className="text-2xl font-bold group-hover:scale-105 transition-transform">
// //             {getLatestAssessment()?.quizScore.toFixed(1) || 0}%
// //           </div>
// //           <p className="text-xs text-muted-foreground mt-1">Most recent quiz</p>
// //         </CardContent>
// //       </Card>
// //     </div>
// //   );
// // };

// // export default StatsCards;


"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit, Target, Trophy } from "lucide-react";

const StatsCards = ({ assessments = [] }) => {
  const getAverageScore = () => {
    if (!assessments.length) return 0;
    const total = assessments.reduce(
      (sum, assessment) => sum + assessment.quizScore,
      0
    );
    return (total / assessments.length).toFixed(1);
  };

  const getLatestAssessment = () => {
    if (!assessments.length) return null;
    return assessments[0];
  };

  const getTotalQuestions = () => {
    if (!assessments.length) return 0;
    return assessments.reduce(
      (sum, assessment) => sum + assessment.questions.length,
      0
    );
  };

  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card className="group relative hover:shadow-lg hover:border-indigo-400 border transition-all duration-300">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium group-hover:text-indigo-400 transition-colors">
            🌟 Average Score
          </CardTitle>
          <Trophy className="h-4 w-4 text-muted-foreground group-hover:text-indigo-400 transition-colors" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold group-hover:scale-105 transition-transform">
            {getAverageScore()}%
          </div>
          <p className="text-xs text-muted-foreground mt-1">Across all assessments</p>
        </CardContent>
      </Card>

      <Card className="group relative hover:shadow-lg hover:border-amber-400 border transition-all duration-300">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium group-hover:text-amber-400 transition-colors">
            📝 Questions Practiced
          </CardTitle>
          <BrainCircuit className="h-4 w-4 text-muted-foreground group-hover:text-amber-400 transition-colors" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold group-hover:scale-105 transition-transform">
            {getTotalQuestions()}
          </div>
          <p className="text-xs text-muted-foreground mt-1">Total questions</p>
        </CardContent>
      </Card>

      <Card className="group relative hover:shadow-lg hover:border-red-500 border transition-all duration-300">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium group-hover:text-red-400 transition-colors">
            🏅 Latest Score
          </CardTitle>
          <Target className="h-4 w-4 text-muted-foreground group-hover:text-red-400 transition-colors" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold group-hover:scale-105 transition-transform">
            {getLatestAssessment()?.quizScore.toFixed(1) || 0}%
          </div>
          <p className="text-xs text-muted-foreground mt-1">Most recent quiz</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default StatsCards;
