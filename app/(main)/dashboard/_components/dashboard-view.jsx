


"use client";

import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import {
    BriefcaseIcon,
    LineChart,
    TrendingUp,
    TrendingDown,
    Brain,
} from "lucide-react";
import { format, formatDistanceToNow } from "date-fns";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const DashboardView = ({ insights }) => {
    const salaryData = insights.salaryRanges.map((range) => ({
        name: range.role,
        min: range.min / 1000,
        max: range.max / 1000,
        median: range.median / 1000,
    }));

    const getDemandLevelColor = (level) => {
        switch (level.toLowerCase()) {
            case "high":
                return "bg-green-500";
            case "medium":
                return "bg-yellow-500";
            case "low":
                return "bg-red-500";
            default:
                return "bg-gray-500";
        }
    };

    const getMarketOutlookInfo = (outlook) => {
        switch (outlook.toLowerCase()) {
            case "positive":
                return { icon: TrendingUp, color: "text-green-500" };
            case "neutral":
                return { icon: LineChart, color: "text-yellow-500" };
            case "negative":
                return { icon: TrendingDown, color: "text-red-500" };
            default:
                return { icon: LineChart, color: "text-gray-500" };
        }
    };

    const OutlookIcon = getMarketOutlookInfo(insights.marketOutlook).icon;
    const outlookColor = getMarketOutlookInfo(insights.marketOutlook).color;

    const lastUpdatedDate = format(new Date(insights.lastUpdated), "dd/MM/yyyy");
    const nextUpdateDistance = formatDistanceToNow(
        new Date(insights.nextUpdate),
        { addSuffix: true }
    );

    return (
        <div className="space-y-6">
            <h2 className="text-sm md:text-base text-white font-semibold tracking-wide z-10">
    ⚡ Real-time Market Insights <p className="text-sm text-muted-foreground">Get a quick breakdown of industry trends, demand, and top skills</p>

  </h2>

            <div className="space-y-6">
                <div className="flex justify-between items-center">
                    <Badge
                        variant="outline"
                        className="hover:bg-muted hover:text-foreground transition-colors duration-300"
                    >
                        ⏰ Last updated: {lastUpdatedDate}
                    </Badge>
                </div>

                {/* Market Overview Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

                    {/* Card 1 - Market Outlook */}
                    <Card className="group relative hover:shadow-lg hover:border-primary border transition-all duration-300">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium group-hover:text-primary transition-colors">
                                📈 Market Outlook
                            </CardTitle>
                            <OutlookIcon className={`h-4 w-4 ${outlookColor} transition-transform group-hover:scale-110`} />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold group-hover:scale-105 transition-transform">
                                {insights.marketOutlook}
                            </div>
                            <p className="text-xs text-muted-foreground">
                                Next update {nextUpdateDistance}
                            </p>
                        </CardContent>
                    </Card>

                    {/* Card 2 - Industry Growth */}
                    <Card className="group relative hover:shadow-lg hover:border-green-500 border transition-all duration-300">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium group-hover:text-green-500 transition-colors">
                                📊 Industry Growth
                            </CardTitle>
                            <TrendingUp className="h-4 w-4 text-muted-foreground group-hover:text-green-500 transition-colors" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold group-hover:scale-110 transition-transform">
                                {insights.growthRate.toFixed(1)}%
                            </div>
                            <Progress value={insights.growthRate} className="mt-2" />
                        </CardContent>
                    </Card>

                    {/* Card 3 - Demand Level */}
                    <Card className="group relative hover:shadow-lg hover:border-yellow-400 border transition-all duration-300">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium group-hover:text-yellow-400 transition-colors">
                                💼 Demand Level
                            </CardTitle>
                            <BriefcaseIcon className="h-4 w-4 text-muted-foreground group-hover:text-yellow-400 transition-colors" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold group-hover:scale-105 transition-transform">
                                {insights.demandLevel}
                            </div>
                            <div
                                className={`h-2 w-full rounded-full mt-2 transition-all duration-300 ${getDemandLevelColor(
                                    insights.demandLevel
                                )}`}
                            />
                        </CardContent>
                    </Card>

                    {/* Card 4 - Top Skills */}
                    <Card className="group relative hover:shadow-lg hover:border-blue-500 border transition-all duration-300">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium group-hover:text-blue-500 transition-colors">
                                🧠 Top Skills
                            </CardTitle>
                            <Brain className="h-4 w-4 text-muted-foreground group-hover:text-blue-500 transition-colors" />
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-wrap gap-1">
                                {insights.topSkills.map((skill) => (
                                    <Badge
                                        key={skill}
                                        variant="secondary"
                                        className="hover:scale-105 transition-transform hover:bg-primary hover:text-background"
                                    >
                                        {skill}
                                    </Badge>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* Salary Ranges Chart */}
            <Card className="col-span-4 hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                    <CardTitle>Salary Ranges by Role</CardTitle>
                    <CardDescription>
                        Displaying minimum, median, and maximum salaries (in thousands)
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="h-[400px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={salaryData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip
                                    content={({ active, payload, label }) => {
                                        if (active && payload && payload.length) {
                                            return (
                                                <div className="bg-background border rounded-lg p-2 shadow-md animate-fade-in">
                                                    <p className="font-medium">{label}</p>
                                                    {payload.map((item) => (
                                                        <p key={item.name} className="text-sm">
                                                            {item.name}: ${item.value}K
                                                        </p>
                                                    ))}
                                                </div>
                                            );
                                        }
                                        return null;
                                    }}
                                />
                                <Bar dataKey="min" fill="#94a3b8" name="Min Salary (K)" />
                                <Bar dataKey="median" fill="#64748b" name="Median Salary (K)" />
                                <Bar dataKey="max" fill="#475569" name="Max Salary (K)" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </CardContent>
            </Card>

            {/* Industry Trends */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="relative group overflow-hidden border border-gray-600 transition-all duration-300 hover:border-[#6ee7b7] hover:shadow-[0_0_18px_1px_rgba(110,231,183,0.3)]">
                    <div className="absolute -inset-px bg-gradient-to-r from-transparent via-[#6ee7b7] to-transparent opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500 pointer-events-none" />

                    <CardHeader>
                        <CardTitle>Key Industry Trends</CardTitle>
                        <CardDescription>
                            Current trends shaping the industry
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-4">
                            {insights.keyTrends.map((trend, index) => (
                                <li
                                    key={index}
                                    className="flex items-start space-x-2 transition-transform hover:translate-x-1"
                                >
                                    <div className="h-2 w-2 mt-2 rounded-full bg-primary" />
                                    <span>{trend}</span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>

                <Card className="relative group overflow-hidden border border-gray-700 transition-all duration-300 hover:border-white hover:shadow-[0_0_20px_1px_rgba(255,255,255,0.2)]">
                    <div className="absolute -inset-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500 pointer-events-none" />
                    <CardHeader>
                        <CardTitle>Recommended Skills</CardTitle>
                        <CardDescription>Skills to consider developing</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-wrap gap-2">
                            {insights.recommendedSkills.map((skill) => (
                                <Badge
                                    key={skill}
                                    variant="outline"
                                    className="hover:bg-primary hover:text-black transition-all duration-300"
                                >
                                    {skill}
                                </Badge>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default DashboardView;

