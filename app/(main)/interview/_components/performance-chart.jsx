

// // "use client";

// // import {
// //   LineChart,
// //   Line,
// //   XAxis,
// //   YAxis,
// //   CartesianGrid,
// //   Tooltip,
// //   ResponsiveContainer,
// // } from "recharts";
// // import {
// //   Card,
// //   CardContent,
// //   CardDescription,
// //   CardHeader,
// //   CardTitle,
// // } from "@/components/ui/card";
// // import { useEffect, useState } from "react";
// // import { format } from "date-fns";

// // // ✅ Custom Tooltip Component
// // const CustomTooltip = ({ active, payload }) => {
// //   if (active && payload?.length) {
// //     return (
// //       <div className="bg-background border rounded-lg p-2 shadow-md">
// //         <p className="text-sm font-medium">Score: {payload[0].value}%</p>
// //         <p className="text-xs text-muted-foreground">{payload[0].payload.date}</p>
// //       </div>
// //     );
// //   }
// //   return null;
// // };

// // export default function PerformanceChart({ assessments }) {
// //   const [chartData, setChartData] = useState([]);

// //   useEffect(() => {
// //     if (assessments) {
// //       const formattedData = assessments.map((assessment) => ({
// //         date: format(new Date(assessment.createdAt),  "MMM dd, hh:mm a"),
// //         score: assessment.quizScore,
// //       }));
// //       setChartData(formattedData);
// //     }
// //   }, [assessments]);

// //   return (
// //     <Card>
// //       <CardHeader>
// //         <CardTitle className="gradient-title text-3xl md:text-4xl">
// //           Performance Trend
// //         </CardTitle>
// //         <CardDescription>Your quiz scores over time</CardDescription>
// //       </CardHeader>
// //       <CardContent>
// //         <div className="h-[300px]">
// //           <ResponsiveContainer width="100%" height="100%">
// //             <LineChart data={chartData}>
// //               <CartesianGrid strokeDasharray="3 3" />
// //               <XAxis dataKey="date" />
// //               <YAxis domain={[0, 100]} />
// //               <Tooltip content={<CustomTooltip />} />
// //               <Line
// //                 type="monotone"
// //                 dataKey="score"
// //                 stroke="#6366f1" // Indigo-500 (Tailwind)
// //                 strokeWidth={2}
// //                 dot={{ r: 3, stroke: "#6366f1", fill: "#fff" }}
// //                 activeDot={{ r: 6, stroke: "#6366f1", strokeWidth: 2, fill: "#fff" }}
// //               />




// //             </LineChart>
// //           </ResponsiveContainer>
// //         </div>
// //       </CardContent>
// //     </Card>
// //   );
// // }


"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect, useState } from "react";
import { format } from "date-fns";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload?.length) {
    return (
      <div className="bg-background border rounded-lg p-2 shadow-md">
        <p className="text-sm font-medium">Score: {payload[0].value}%</p>
        <p className="text-xs text-muted-foreground">{payload[0].payload.date}</p>
      </div>
    );
  }
  return null;
};

export default function PerformanceChart({ assessments = [] }) {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    if (assessments.length) {
      const formattedData = assessments.map((assessment) => ({
        date: format(new Date(assessment.createdAt), "MMM dd, hh:mm a"),
        score: assessment.quizScore,
      }));
      setChartData(formattedData);
    }
  }, [assessments]);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="gradient-title text-3xl md:text-4xl">
          Performance Trend
        </CardTitle>
        <CardDescription>Your quiz scores over time</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis domain={[0, 100]} />
              <Tooltip content={<CustomTooltip />} />
              <Line
                type="monotone"
                dataKey="score"
                stroke="#6366f1"
                strokeWidth={2}
                dot={{ r: 3, stroke: "#6366f1", fill: "#fff" }}
                activeDot={{ r: 6, stroke: "#6366f1", strokeWidth: 2, fill: "#fff" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
