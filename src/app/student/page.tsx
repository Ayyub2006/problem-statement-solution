"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navigation from "@/components/Navigation";
import {
  BookOpen,
  Award,
  Flame,
  TrendingUp,
  Clock,
  Target,
  Star,
  ChevronRight,
  Download,
  Play,
  CheckCircle2,
  Zap,
  Trophy,
  Brain,
  Lock
} from "lucide-react";
import Link from "next/link";

export default function StudentDashboard() {
  // Mock data - in production this would come from API/database
  const studentData = {
    name: "Priya Kumar",
    points: 2450,
    streak: 12,
    level: 8,
    badges: 15,
    coursesCompleted: 8,
    learningHours: 47,
    currentStreak: 12,
    longestStreak: 28,
    nextLevelPoints: 3000,
  };

  const courses = [
    {
      id: 1,
      title: "Mathematics - Class 10",
      progress: 67,
      chapters: 15,
      completed: 10,
      aiRecommended: true,
      offline: true,
      nextLesson: "Quadratic Equations",
      thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      title: "Science - Physics",
      progress: 45,
      chapters: 12,
      completed: 5,
      aiRecommended: true,
      offline: true,
      nextLesson: "Laws of Motion",
      thumbnail: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      title: "English Literature",
      progress: 80,
      chapters: 10,
      completed: 8,
      aiRecommended: false,
      offline: false,
      nextLesson: "Poetry Analysis",
      thumbnail: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      title: "Hindi Vyakaran",
      progress: 30,
      chapters: 8,
      completed: 2,
      aiRecommended: true,
      offline: true,
      nextLesson: "Sandhi Vichchhed",
      thumbnail: "https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=400&h=300&fit=crop"
    }
  ];

  const achievements = [
    { icon: Flame, title: "12 Day Streak", color: "text-orange-500", bg: "bg-orange-500/20" },
    { icon: Trophy, title: "Top 10% Learner", color: "text-yellow-500", bg: "bg-yellow-500/20" },
    { icon: Star, title: "Math Master", color: "text-blue-500", bg: "bg-blue-500/20" },
    { icon: Zap, title: "Quick Learner", color: "text-purple-500", bg: "bg-purple-500/20" },
    { icon: Brain, title: "Problem Solver", color: "text-green-500", bg: "bg-green-500/20" },
    { icon: Award, title: "Quiz Champion", color: "text-pink-500", bg: "bg-pink-500/20" }
  ];

  const aiRecommendations = [
    {
      title: "Review Trigonometry",
      reason: "You struggled with this topic last week",
      priority: "high"
    },
    {
      title: "Practice Algebra Problems",
      reason: "Strengthen your foundation",
      priority: "medium"
    },
    {
      title: "Explore Advanced Physics",
      reason: "You're excelling! Ready for next level",
      priority: "low"
    }
  ];

  const upcomingLessons = [
    {
      title: "Quadratic Equations - Practice",
      subject: "Mathematics",
      time: "Today, 4:00 PM",
      duration: "30 min",
      type: "live"
    },
    {
      title: "Chemical Reactions",
      subject: "Chemistry",
      time: "Tomorrow, 3:00 PM",
      duration: "45 min",
      type: "recorded"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Welcome back, {studentData.name}! 👋</h1>
            <p className="text-muted-foreground">Continue your learning journey</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <Card className="p-6">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-orange-500/20 flex items-center justify-center">
                  <Flame className="h-6 w-6 text-orange-500" />
                </div>
                <div>
                  <div className="text-2xl font-bold">{studentData.streak}</div>
                  <div className="text-sm text-muted-foreground">Day Streak</div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <Star className="h-6 w-6 text-blue-500" />
                </div>
                <div>
                  <div className="text-2xl font-bold">{studentData.points}</div>
                  <div className="text-sm text-muted-foreground">Total Points</div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-purple-500" />
                </div>
                <div>
                  <div className="text-2xl font-bold">Level {studentData.level}</div>
                  <div className="text-sm text-muted-foreground">Current Level</div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-green-500/20 flex items-center justify-center">
                  <Award className="h-6 w-6 text-green-500" />
                </div>
                <div>
                  <div className="text-2xl font-bold">{studentData.badges}</div>
                  <div className="text-sm text-muted-foreground">Badges Earned</div>
                </div>
              </div>
            </Card>
          </div>

          {/* Level Progress */}
          <Card className="p-6 mb-8">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-bold">Level {studentData.level} Progress</h3>
                <p className="text-sm text-muted-foreground">
                  {studentData.nextLevelPoints - studentData.points} points to Level {studentData.level + 1}
                </p>
              </div>
              <Trophy className="h-8 w-8 text-yellow-500" />
            </div>
            <Progress value={(studentData.points / studentData.nextLevelPoints) * 100} className="h-3" />
          </Card>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* My Courses */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">My Learning Path</h2>
                  <Button variant="outline" size="sm">View All</Button>
                </div>

                <Tabs defaultValue="in-progress" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="in-progress">In Progress</TabsTrigger>
                    <TabsTrigger value="recommended">AI Recommended</TabsTrigger>
                    <TabsTrigger value="completed">Completed</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="in-progress" className="space-y-4 mt-6">
                    {courses.map((course) => (
                      <Card key={course.id} className="p-6 hover:shadow-lg transition-shadow">
                        <div className="flex gap-4">
                          <img 
                            src={course.thumbnail} 
                            alt={course.title}
                            className="w-32 h-24 object-cover rounded-lg flex-shrink-0"
                          />
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <h3 className="font-bold text-lg mb-1">{course.title}</h3>
                                <p className="text-sm text-muted-foreground">
                                  Next: {course.nextLesson}
                                </p>
                              </div>
                              <div className="flex gap-2">
                                {course.aiRecommended && (
                                  <Badge className="bg-purple-500/20 text-purple-700 dark:text-purple-300">
                                    <Brain className="h-3 w-3 mr-1" />
                                    AI Pick
                                  </Badge>
                                )}
                                {course.offline && (
                                  <Badge variant="outline">
                                    <Download className="h-3 w-3 mr-1" />
                                    Offline
                                  </Badge>
                                )}
                              </div>
                            </div>
                            <div className="mb-3">
                              <div className="flex justify-between text-sm mb-2">
                                <span className="text-muted-foreground">
                                  {course.completed}/{course.chapters} chapters
                                </span>
                                <span className="font-medium">{course.progress}%</span>
                              </div>
                              <Progress value={course.progress} className="h-2" />
                            </div>
                            <Link href="/lesson">
                              <Button size="sm">
                                <Play className="h-4 w-4 mr-2" />
                                Continue Learning
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </TabsContent>

                  <TabsContent value="recommended" className="space-y-4 mt-6">
                    {courses.filter(c => c.aiRecommended).map((course) => (
                      <Card key={course.id} className="p-6 hover:shadow-lg transition-shadow">
                        <div className="flex gap-4">
                          <img 
                            src={course.thumbnail} 
                            alt={course.title}
                            className="w-32 h-24 object-cover rounded-lg flex-shrink-0"
                          />
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <h3 className="font-bold text-lg mb-1">{course.title}</h3>
                                <p className="text-sm text-muted-foreground">
                                  Based on your learning style
                                </p>
                              </div>
                              <Badge className="bg-purple-500/20 text-purple-700 dark:text-purple-300">
                                <Brain className="h-3 w-3 mr-1" />
                                AI Recommended
                              </Badge>
                            </div>
                            <div className="mb-3">
                              <Progress value={course.progress} className="h-2" />
                            </div>
                            <Link href="/lesson">
                              <Button size="sm">Start Course</Button>
                            </Link>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </TabsContent>

                  <TabsContent value="completed" className="mt-6">
                    <Card className="p-12 text-center">
                      <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-xl font-bold mb-2">Great Progress!</h3>
                      <p className="text-muted-foreground">
                        You've completed {studentData.coursesCompleted} courses so far
                      </p>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>

              {/* Achievements */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Your Achievements</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {achievements.map((achievement, index) => {
                    const Icon = achievement.icon;
                    return (
                      <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
                        <div className={`h-16 w-16 rounded-full ${achievement.bg} flex items-center justify-center mx-auto mb-3`}>
                          <Icon className={`h-8 w-8 ${achievement.color}`} />
                        </div>
                        <div className="font-semibold text-sm">{achievement.title}</div>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* AI Insights */}
              <Card className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Brain className="h-5 w-5 text-purple-500" />
                  <h3 className="font-bold">AI Insights</h3>
                </div>
                <div className="space-y-3">
                  {aiRecommendations.map((rec, index) => (
                    <div 
                      key={index} 
                      className={`p-3 rounded-lg border ${
                        rec.priority === 'high' 
                          ? 'border-red-500/20 bg-red-500/5' 
                          : rec.priority === 'medium'
                          ? 'border-yellow-500/20 bg-yellow-500/5'
                          : 'border-blue-500/20 bg-blue-500/5'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <Target className="h-4 w-4" />
                        <div className="font-semibold text-sm">{rec.title}</div>
                      </div>
                      <p className="text-xs text-muted-foreground">{rec.reason}</p>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Upcoming Sessions */}
              <Card className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="h-5 w-5 text-blue-500" />
                  <h3 className="font-bold">Upcoming</h3>
                </div>
                <div className="space-y-4">
                  {upcomingLessons.map((lesson, index) => (
                    <div key={index} className="p-3 border rounded-lg">
                      <div className="font-semibold text-sm mb-1">{lesson.title}</div>
                      <div className="text-xs text-muted-foreground mb-2">
                        {lesson.subject} • {lesson.duration}
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs">{lesson.time}</span>
                        <Badge variant={lesson.type === 'live' ? 'default' : 'secondary'} className="text-xs">
                          {lesson.type}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Daily Goal */}
              <Card className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Target className="h-5 w-5 text-green-500" />
                  <h3 className="font-bold">Daily Goal</h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Learning Time</span>
                      <span className="font-medium">25/30 min</span>
                    </div>
                    <Progress value={83} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Lessons Completed</span>
                      <span className="font-medium">2/3</span>
                    </div>
                    <Progress value={67} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Practice Questions</span>
                      <span className="font-medium">8/10</span>
                    </div>
                    <Progress value={80} className="h-2" />
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
