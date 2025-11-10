"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import {
  Users,
  TrendingUp,
  TrendingDown,
  BookOpen,
  Award,
  Clock,
  Target,
  BarChart3,
  PieChart,
  Activity,
  AlertCircle,
  CheckCircle2,
  Download,
  Filter,
  Search,
  ChevronRight,
  Brain,
  Zap,
  MessageSquare
} from "lucide-react";
import { LineChart, Line, BarChart, Bar, PieChart as RePieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, AreaChart } from "recharts";

export default function TeacherDashboard() {
  // Mock analytics data
  const classOverview = {
    totalStudents: 145,
    activeToday: 98,
    averageProgress: 72,
    completionRate: 68,
    engagementScore: 85,
    atRiskStudents: 12
  };

  const performanceData = [
    { month: "Jan", avgScore: 65, engagement: 70 },
    { month: "Feb", avgScore: 68, engagement: 75 },
    { month: "Mar", avgScore: 72, engagement: 78 },
    { month: "Apr", avgScore: 75, engagement: 82 },
    { month: "May", avgScore: 78, engagement: 85 },
    { month: "Jun", avgScore: 82, engagement: 88 }
  ];

  const subjectPerformance = [
    { subject: "Math", score: 78, students: 145 },
    { subject: "Science", score: 82, students: 145 },
    { subject: "English", score: 75, students: 145 },
    { subject: "History", score: 70, students: 145 },
    { subject: "Geography", score: 73, students: 145 }
  ];

  const engagementDistribution = [
    { name: "High", value: 45, color: "#22c55e" },
    { name: "Medium", value: 35, color: "#eab308" },
    { name: "Low", value: 15, color: "#ef4444" },
    { name: "At Risk", value: 5, color: "#dc2626" }
  ];

  const learningOutcomes = [
    { week: "Week 1", completed: 120, inProgress: 25, notStarted: 0 },
    { week: "Week 2", completed: 135, inProgress: 10, notStarted: 0 },
    { week: "Week 3", completed: 140, inProgress: 5, notStarted: 0 },
    { week: "Week 4", completed: 145, inProgress: 0, notStarted: 0 }
  ];

  const topPerformers = [
    { name: "Priya Kumar", score: 95, progress: 92, streak: 28 },
    { name: "Rahul Sharma", score: 93, progress: 88, streak: 25 },
    { name: "Ananya Patel", score: 91, progress: 90, streak: 22 },
    { name: "Arjun Singh", score: 89, progress: 85, streak: 20 },
    { name: "Sneha Reddy", score: 87, progress: 87, streak: 18 }
  ];

  const atRiskStudents = [
    { name: "Amit Kumar", score: 45, progress: 30, lastActive: "5 days ago", reason: "Low engagement" },
    { name: "Riya Gupta", score: 52, progress: 35, lastActive: "3 days ago", reason: "Struggling with Math" },
    { name: "Vijay Rao", score: 48, progress: 28, lastActive: "7 days ago", reason: "Inactive" }
  ];

  const recentActivity = [
    { student: "Priya Kumar", action: "Completed Math Quiz", score: "95%", time: "5 min ago" },
    { student: "Rahul Sharma", action: "Watched Physics Lecture", progress: "100%", time: "12 min ago" },
    { student: "Ananya Patel", action: "Submitted Assignment", score: "88%", time: "23 min ago" },
    { student: "Arjun Singh", action: "Asked a Question", topic: "Chemistry", time: "1 hour ago" }
  ];

  const aiInsights = [
    {
      type: "alert",
      title: "12 Students Need Attention",
      description: "Students showing signs of disengagement or struggling with content",
      priority: "high"
    },
    {
      type: "success",
      title: "Math Performance Improving",
      description: "Class average increased by 8% this month",
      priority: "low"
    },
    {
      type: "info",
      title: "Recommend Review Session",
      description: "35% of students struggling with Quadratic Equations",
      priority: "medium"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Teacher Dashboard</h1>
              <p className="text-muted-foreground">Monitor student progress and class performance</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <Button>
                <Download className="h-4 w-4 mr-2" />
                Export Report
              </Button>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 mb-8">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-2">
                <Users className="h-5 w-5 text-blue-500" />
                <Badge variant="secondary">+12</Badge>
              </div>
              <div className="text-2xl font-bold">{classOverview.totalStudents}</div>
              <div className="text-sm text-muted-foreground">Total Students</div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between mb-2">
                <Activity className="h-5 w-5 text-green-500" />
                <Badge variant="secondary" className="bg-green-500/20 text-green-700 dark:text-green-300">
                  Active
                </Badge>
              </div>
              <div className="text-2xl font-bold">{classOverview.activeToday}</div>
              <div className="text-sm text-muted-foreground">Active Today</div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between mb-2">
                <Target className="h-5 w-5 text-purple-500" />
                <TrendingUp className="h-4 w-4 text-green-500" />
              </div>
              <div className="text-2xl font-bold">{classOverview.averageProgress}%</div>
              <div className="text-sm text-muted-foreground">Avg Progress</div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between mb-2">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <TrendingUp className="h-4 w-4 text-green-500" />
              </div>
              <div className="text-2xl font-bold">{classOverview.completionRate}%</div>
              <div className="text-sm text-muted-foreground">Completion</div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between mb-2">
                <Zap className="h-5 w-5 text-yellow-500" />
                <TrendingUp className="h-4 w-4 text-green-500" />
              </div>
              <div className="text-2xl font-bold">{classOverview.engagementScore}%</div>
              <div className="text-sm text-muted-foreground">Engagement</div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between mb-2">
                <AlertCircle className="h-5 w-5 text-red-500" />
                <Badge variant="destructive">{classOverview.atRiskStudents}</Badge>
              </div>
              <div className="text-2xl font-bold">{classOverview.atRiskStudents}</div>
              <div className="text-sm text-muted-foreground">At Risk</div>
            </Card>
          </div>

          {/* AI Insights Banner */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {aiInsights.map((insight, index) => (
              <Card 
                key={index}
                className={`p-4 border-l-4 ${
                  insight.priority === 'high' 
                    ? 'border-l-red-500' 
                    : insight.priority === 'medium'
                    ? 'border-l-yellow-500'
                    : 'border-l-green-500'
                }`}
              >
                <div className="flex items-start gap-3">
                  <Brain className={`h-5 w-5 mt-0.5 ${
                    insight.priority === 'high'
                      ? 'text-red-500'
                      : insight.priority === 'medium'
                      ? 'text-yellow-500'
                      : 'text-green-500'
                  }`} />
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm mb-1">{insight.title}</h4>
                    <p className="text-xs text-muted-foreground">{insight.description}</p>
                  </div>
                  <Button variant="ghost" size="sm">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="students">Students</TabsTrigger>
              <TabsTrigger value="performance">Performance</TabsTrigger>
              <TabsTrigger value="engagement">Engagement</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <div className="grid lg:grid-cols-2 gap-6">
                {/* Performance Trends */}
                <Card className="p-6">
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-blue-500" />
                    Performance Trends
                  </h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={performanceData}>
                      <defs>
                        <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorEngagement" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Area 
                        type="monotone" 
                        dataKey="avgScore" 
                        stroke="#3b82f6" 
                        fillOpacity={1} 
                        fill="url(#colorScore)"
                        name="Average Score"
                      />
                      <Area 
                        type="monotone" 
                        dataKey="engagement" 
                        stroke="#8b5cf6" 
                        fillOpacity={1} 
                        fill="url(#colorEngagement)"
                        name="Engagement %"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </Card>

                {/* Engagement Distribution */}
                <Card className="p-6">
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <PieChart className="h-5 w-5 text-purple-500" />
                    Engagement Distribution
                  </h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <RePieChart>
                      <Pie
                        data={engagementDistribution}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, value }) => `${name}: ${value}%`}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {engagementDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </RePieChart>
                  </ResponsiveContainer>
                </Card>

                {/* Subject-wise Performance */}
                <Card className="p-6">
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-green-500" />
                    Subject-wise Performance
                  </h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={subjectPerformance}>
                      <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                      <XAxis dataKey="subject" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="score" fill="#22c55e" radius={[8, 8, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </Card>

                {/* Learning Outcomes */}
                <Card className="p-6">
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <Target className="h-5 w-5 text-orange-500" />
                    Learning Outcomes Progress
                  </h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={learningOutcomes}>
                      <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                      <XAxis dataKey="week" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="completed" stackId="a" fill="#22c55e" name="Completed" />
                      <Bar dataKey="inProgress" stackId="a" fill="#eab308" name="In Progress" />
                      <Bar dataKey="notStarted" stackId="a" fill="#ef4444" name="Not Started" />
                    </BarChart>
                  </ResponsiveContainer>
                </Card>
              </div>

              {/* Recent Activity */}
              <Card className="p-6">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-blue-500" />
                  Recent Activity
                </h3>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Users className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold">{activity.student}</div>
                        <div className="text-sm text-muted-foreground">{activity.action}</div>
                      </div>
                      {activity.score && (
                        <Badge variant="secondary">{activity.score}</Badge>
                      )}
                      {activity.progress && (
                        <Badge variant="secondary">{activity.progress}</Badge>
                      )}
                      <span className="text-xs text-muted-foreground">{activity.time}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            {/* Students Tab */}
            <TabsContent value="students" className="space-y-6">
              <div className="grid lg:grid-cols-2 gap-6">
                {/* Top Performers */}
                <Card className="p-6">
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <Award className="h-5 w-5 text-yellow-500" />
                    Top Performers
                  </h3>
                  <div className="space-y-3">
                    {topPerformers.map((student, index) => (
                      <div key={index} className="flex items-center gap-4 p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-yellow-500/20 text-yellow-700 dark:text-yellow-300 font-bold flex-shrink-0">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold">{student.name}</div>
                          <div className="flex gap-4 text-xs text-muted-foreground mt-1">
                            <span>Score: {student.score}%</span>
                            <span>Progress: {student.progress}%</span>
                            <span>🔥 {student.streak} days</span>
                          </div>
                        </div>
                        <Button size="sm" variant="outline">View</Button>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* At-Risk Students */}
                <Card className="p-6">
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 text-red-500" />
                    Students Needing Attention
                  </h3>
                  <div className="space-y-3">
                    {atRiskStudents.map((student, index) => (
                      <div key={index} className="flex items-center gap-4 p-4 border border-red-500/20 rounded-lg bg-red-500/5">
                        <div className="flex-1">
                          <div className="font-semibold">{student.name}</div>
                          <div className="flex gap-4 text-xs text-muted-foreground mt-1">
                            <span>Score: {student.score}%</span>
                            <span>Progress: {student.progress}%</span>
                          </div>
                          <div className="flex items-center gap-2 mt-2">
                            <Badge variant="destructive" className="text-xs">{student.reason}</Badge>
                            <span className="text-xs text-muted-foreground">{student.lastActive}</span>
                          </div>
                        </div>
                        <div className="flex flex-col gap-2">
                          <Button size="sm" variant="outline">Message</Button>
                          <Button size="sm">Intervene</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>

              {/* All Students List */}
              <Card className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold">All Students</h3>
                  <div className="flex gap-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <input
                        type="text"
                        placeholder="Search students..."
                        className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <Button variant="outline" size="sm">
                      <Filter className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 font-semibold">Student</th>
                        <th className="text-left py-3 px-4 font-semibold">Progress</th>
                        <th className="text-left py-3 px-4 font-semibold">Score</th>
                        <th className="text-left py-3 px-4 font-semibold">Streak</th>
                        <th className="text-left py-3 px-4 font-semibold">Status</th>
                        <th className="text-left py-3 px-4 font-semibold">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[...topPerformers, ...atRiskStudents].slice(0, 8).map((student, index) => (
                        <tr key={index} className="border-b hover:bg-muted/50">
                          <td className="py-3 px-4">{student.name}</td>
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-2">
                              <Progress value={student.progress} className="h-2 w-20" />
                              <span className="text-sm">{student.progress}%</span>
                            </div>
                          </td>
                          <td className="py-3 px-4">{student.score}%</td>
                          <td className="py-3 px-4">{student.streak || 0} days</td>
                          <td className="py-3 px-4">
                            <Badge variant={student.score > 70 ? "secondary" : "destructive"}>
                              {student.score > 70 ? "On Track" : "At Risk"}
                            </Badge>
                          </td>
                          <td className="py-3 px-4">
                            <Button size="sm" variant="ghost">View</Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </TabsContent>

            {/* Performance Tab */}
            <TabsContent value="performance" className="space-y-6">
              <div className="grid gap-6">
                <Card className="p-6">
                  <h3 className="text-lg font-bold mb-4">Detailed Performance Analysis</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <div className="text-sm text-muted-foreground mb-2">Average Score</div>
                      <div className="text-3xl font-bold mb-2">78%</div>
                      <div className="flex items-center gap-2 text-sm text-green-500">
                        <TrendingUp className="h-4 w-4" />
                        <span>+5% from last month</span>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-2">Quiz Completion</div>
                      <div className="text-3xl font-bold mb-2">92%</div>
                      <div className="flex items-center gap-2 text-sm text-green-500">
                        <TrendingUp className="h-4 w-4" />
                        <span>+8% from last month</span>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-2">Assignment Submission</div>
                      <div className="text-3xl font-bold mb-2">85%</div>
                      <div className="flex items-center gap-2 text-sm text-red-500">
                        <TrendingDown className="h-4 w-4" />
                        <span>-3% from last month</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </TabsContent>

            {/* Engagement Tab */}
            <TabsContent value="engagement" className="space-y-6">
              <div className="grid lg:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h3 className="text-lg font-bold mb-4">Daily Active Users</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={performanceData}>
                      <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="engagement" stroke="#8b5cf6" strokeWidth={3} />
                    </LineChart>
                  </ResponsiveContainer>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-bold mb-4">Engagement Metrics</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Average Session Time</span>
                        <span className="font-medium">24 min</span>
                      </div>
                      <Progress value={80} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Content Interaction</span>
                        <span className="font-medium">78%</span>
                      </div>
                      <Progress value={78} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Forum Participation</span>
                        <span className="font-medium">65%</span>
                      </div>
                      <Progress value={65} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Video Completion Rate</span>
                        <span className="font-medium">88%</span>
                      </div>
                      <Progress value={88} className="h-2" />
                    </div>
                  </div>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
