"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/Navigation";
import {
  MessageSquare,
  ThumbsUp,
  MessageCircle,
  Users,
  Search,
  TrendingUp,
  Clock,
  Award,
  BookOpen,
  Send,
  FileText,
  Download,
  Upload,
  Star,
  CheckCircle2,
  ArrowUp,
  ArrowDown,
  Share2,
  Bookmark,
  Filter,
  Plus,
  UserPlus,
  Wifi,
  WifiOff,
  ImageIcon
} from "lucide-react";

export default function CommunityPage() {
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);
  const [replyText, setReplyText] = useState("");

  const questions = [
    {
      id: 1,
      title: "How do I solve quadratic equations using factoring method?",
      description: "I'm struggling to understand when to use factoring vs the quadratic formula. Can someone explain with examples?",
      author: "Priya Kumar",
      authorLevel: 8,
      subject: "Mathematics",
      tags: ["algebra", "equations", "problem-solving"],
      upvotes: 24,
      replies: 12,
      views: 156,
      timeAgo: "2 hours ago",
      solved: false,
      trending: true,
      lowBandwidth: true
    },
    {
      id: 2,
      title: "Newton's Laws of Motion - Real world examples?",
      description: "Looking for practical examples of Newton's third law that I can observe in daily life.",
      author: "Rahul Sharma",
      authorLevel: 6,
      subject: "Physics",
      tags: ["mechanics", "laws-of-motion", "examples"],
      upvotes: 18,
      replies: 8,
      views: 92,
      timeAgo: "5 hours ago",
      solved: true,
      trending: false,
      lowBandwidth: true
    },
    {
      id: 3,
      title: "Help with Hindi Grammar - Sandhi Vichchhed",
      description: "मुझे संधि विच्छेद समझने में परेशानी हो रही है। कोई सरल तरीके से समझा सकता है?",
      author: "Ananya Patel",
      authorLevel: 7,
      subject: "Hindi",
      tags: ["grammar", "hindi", "sandhi"],
      upvotes: 15,
      replies: 6,
      views: 78,
      timeAgo: "1 day ago",
      solved: false,
      trending: false,
      lowBandwidth: true
    },
    {
      id: 4,
      title: "Photosynthesis process diagram needed",
      description: "Can someone share a simple diagram explaining photosynthesis? Preferably in Hindi or English.",
      author: "Vijay Rao",
      authorLevel: 5,
      subject: "Biology",
      tags: ["biology", "plants", "diagrams"],
      upvotes: 32,
      replies: 15,
      views: 203,
      timeAgo: "3 days ago",
      solved: true,
      trending: true,
      lowBandwidth: true
    }
  ];

  const mentors = [
    {
      name: "Dr. Sanjay Mehta",
      expertise: "Mathematics & Physics",
      students: 45,
      rating: 4.9,
      sessions: 128,
      languages: ["English", "Hindi", "Marathi"],
      available: true,
      subjects: ["Math", "Physics"]
    },
    {
      name: "Prof. Lakshmi Iyer",
      expertise: "Chemistry & Biology",
      students: 38,
      rating: 4.8,
      sessions: 95,
      languages: ["English", "Tamil", "Telugu"],
      available: false,
      subjects: ["Chemistry", "Biology"]
    },
    {
      name: "Ravi Shankar",
      expertise: "Computer Science",
      students: 52,
      rating: 4.9,
      sessions: 156,
      languages: ["English", "Hindi", "Bengali"],
      available: true,
      subjects: ["Programming", "CS"]
    },
    {
      name: "Meera Desai",
      expertise: "English & Literature",
      students: 41,
      rating: 4.7,
      sessions: 112,
      languages: ["English", "Hindi", "Gujarati"],
      available: true,
      subjects: ["English", "Literature"]
    }
  ];

  const resources = [
    {
      title: "NCERT Solutions - Class 10 Math",
      type: "PDF",
      size: "2.4 MB",
      downloads: 1234,
      uploadedBy: "Mathematics Community",
      rating: 4.8,
      language: "English & Hindi",
      optimized: true
    },
    {
      title: "Physics Formula Sheet",
      type: "PDF",
      size: "0.8 MB",
      downloads: 856,
      uploadedBy: "Physics Study Group",
      rating: 4.9,
      language: "English",
      optimized: true
    },
    {
      title: "Chemistry Lab Experiments Videos",
      type: "Video Pack",
      size: "45 MB",
      downloads: 567,
      uploadedBy: "Science Hub",
      rating: 4.7,
      language: "Hindi",
      optimized: false
    },
    {
      title: "English Grammar Quick Reference",
      type: "PDF",
      size: "1.2 MB",
      downloads: 2134,
      uploadedBy: "English Learners",
      rating: 4.6,
      language: "English",
      optimized: true
    }
  ];

  const studyGroups = [
    {
      name: "NEET 2024 Aspirants",
      members: 234,
      subject: "Science",
      description: "Group for students preparing for NEET entrance exam",
      active: true,
      posts: 456
    },
    {
      name: "JEE Mathematics Master",
      members: 189,
      subject: "Mathematics",
      description: "Advanced mathematics for JEE preparation",
      active: true,
      posts: 678
    },
    {
      name: "Regional Language Learners",
      members: 156,
      subject: "Languages",
      description: "Practice and help with Hindi, Tamil, Telugu, and more",
      active: true,
      posts: 234
    },
    {
      name: "Class 10 Board Prep",
      members: 412,
      subject: "All Subjects",
      description: "Comprehensive preparation for Class 10 board exams",
      active: true,
      posts: 892
    }
  ];

  const replies = [
    {
      id: 1,
      author: "Arjun Singh",
      authorLevel: 9,
      content: "Great question! Let me explain with an example. When you have x² - 5x + 6 = 0, you can factor it as (x-2)(x-3) = 0. This means x = 2 or x = 3. The key is to find two numbers that multiply to give 'c' and add to give 'b'.",
      upvotes: 15,
      timeAgo: "1 hour ago",
      helpful: true,
      bestAnswer: true
    },
    {
      id: 2,
      author: "Sneha Reddy",
      authorLevel: 7,
      content: "I found this video really helpful: [link]. It explains the difference between factoring and using the formula. Generally, use factoring when it's obvious, otherwise use the quadratic formula.",
      upvotes: 8,
      timeAgo: "45 min ago",
      helpful: true,
      bestAnswer: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Community Learning Hub</h1>
            <p className="text-muted-foreground">
              Connect, collaborate, and learn together - optimized for all network conditions
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-2">
                <MessageSquare className="h-5 w-5 text-blue-500" />
                <span className="text-2xl font-bold">1,234</span>
              </div>
              <div className="text-sm text-muted-foreground">Active Discussions</div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-3 mb-2">
                <Users className="h-5 w-5 text-purple-500" />
                <span className="text-2xl font-bold">8,567</span>
              </div>
              <div className="text-sm text-muted-foreground">Community Members</div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-3 mb-2">
                <Award className="h-5 w-5 text-yellow-500" />
                <span className="text-2xl font-bold">156</span>
              </div>
              <div className="text-sm text-muted-foreground">Expert Mentors</div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-3 mb-2">
                <FileText className="h-5 w-5 text-green-500" />
                <span className="text-2xl font-bold">2,891</span>
              </div>
              <div className="text-sm text-muted-foreground">Shared Resources</div>
            </Card>
          </div>

          <Tabs defaultValue="discussions" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="discussions">
                <MessageSquare className="h-4 w-4 mr-2" />
                Discussions
              </TabsTrigger>
              <TabsTrigger value="mentors">
                <Users className="h-4 w-4 mr-2" />
                Mentors
              </TabsTrigger>
              <TabsTrigger value="resources">
                <BookOpen className="h-4 w-4 mr-2" />
                Resources
              </TabsTrigger>
              <TabsTrigger value="groups">
                <Users className="h-4 w-4 mr-2" />
                Study Groups
              </TabsTrigger>
            </TabsList>

            {/* Discussions Tab */}
            <TabsContent value="discussions" className="space-y-6">
              {/* Search & Filter */}
              <Card className="p-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input 
                      placeholder="Search questions, topics, or keywords..." 
                      className="pl-10"
                    />
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline">
                      <Filter className="h-4 w-4 mr-2" />
                      Filter
                    </Button>
                    <Button>
                      <Plus className="h-4 w-4 mr-2" />
                      Ask Question
                    </Button>
                  </div>
                </div>
              </Card>

              <div className="grid lg:grid-cols-3 gap-6">
                {/* Questions List */}
                <div className="lg:col-span-2 space-y-4">
                  {questions.map((question) => (
                    <Card 
                      key={question.id} 
                      className={`p-6 hover:shadow-lg transition-shadow cursor-pointer ${
                        selectedQuestion === question.id ? 'ring-2 ring-primary' : ''
                      }`}
                      onClick={() => setSelectedQuestion(question.id)}
                    >
                      <div className="flex gap-4">
                        {/* Vote Section */}
                        <div className="flex flex-col items-center gap-2">
                          <button className="p-1 hover:bg-muted rounded">
                            <ArrowUp className="h-5 w-5" />
                          </button>
                          <span className="font-bold">{question.upvotes}</span>
                          <button className="p-1 hover:bg-muted rounded">
                            <ArrowDown className="h-5 w-5" />
                          </button>
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                {question.trending && (
                                  <Badge className="bg-orange-500/20 text-orange-700 dark:text-orange-300">
                                    <TrendingUp className="h-3 w-3 mr-1" />
                                    Trending
                                  </Badge>
                                )}
                                {question.solved && (
                                  <Badge className="bg-green-500/20 text-green-700 dark:text-green-300">
                                    <CheckCircle2 className="h-3 w-3 mr-1" />
                                    Solved
                                  </Badge>
                                )}
                                {question.lowBandwidth && (
                                  <Badge variant="outline">
                                    <WifiOff className="h-3 w-3 mr-1" />
                                    Low-bandwidth
                                  </Badge>
                                )}
                              </div>
                              <h3 className="font-bold text-lg mb-2">{question.title}</h3>
                              <p className="text-sm text-muted-foreground mb-3">
                                {question.description}
                              </p>
                              <div className="flex flex-wrap gap-2 mb-3">
                                {question.tags.map((tag, index) => (
                                  <Badge key={index} variant="secondary" className="text-xs">
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Meta Info */}
                          <div className="flex items-center justify-between text-sm text-muted-foreground">
                            <div className="flex items-center gap-4">
                              <div className="flex items-center gap-1">
                                <Avatar className="h-6 w-6">
                                  <AvatarFallback className="text-xs">
                                    {question.author.split(' ').map(n => n[0]).join('')}
                                  </AvatarFallback>
                                </Avatar>
                                <span>{question.author}</span>
                                <Badge variant="outline" className="text-xs">L{question.authorLevel}</Badge>
                              </div>
                              <span>•</span>
                              <span>{question.timeAgo}</span>
                              <span>•</span>
                              <Badge variant="secondary" className="text-xs">{question.subject}</Badge>
                            </div>
                            <div className="flex items-center gap-4">
                              <div className="flex items-center gap-1">
                                <MessageCircle className="h-4 w-4" />
                                <span>{question.replies}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                <span>{question.views}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Replies Section */}
                      {selectedQuestion === question.id && (
                        <div className="mt-6 pt-6 border-t space-y-4">
                          <h4 className="font-bold flex items-center gap-2">
                            <MessageCircle className="h-5 w-5" />
                            {question.replies} Replies
                          </h4>
                          
                          {replies.map((reply) => (
                            <div key={reply.id} className="flex gap-4 p-4 bg-muted/50 rounded-lg">
                              <div className="flex flex-col items-center gap-2">
                                <button className="p-1 hover:bg-background rounded">
                                  <ArrowUp className="h-4 w-4" />
                                </button>
                                <span className="text-sm font-medium">{reply.upvotes}</span>
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center justify-between mb-2">
                                  <div className="flex items-center gap-2">
                                    <Avatar className="h-8 w-8">
                                      <AvatarFallback className="text-xs">
                                        {reply.author.split(' ').map(n => n[0]).join('')}
                                      </AvatarFallback>
                                    </Avatar>
                                    <span className="font-semibold">{reply.author}</span>
                                    <Badge variant="outline" className="text-xs">L{reply.authorLevel}</Badge>
                                    {reply.bestAnswer && (
                                      <Badge className="bg-green-500/20 text-green-700 dark:text-green-300">
                                        <CheckCircle2 className="h-3 w-3 mr-1" />
                                        Best Answer
                                      </Badge>
                                    )}
                                  </div>
                                  <span className="text-xs text-muted-foreground">{reply.timeAgo}</span>
                                </div>
                                <p className="text-sm mb-2">{reply.content}</p>
                                <div className="flex gap-2">
                                  <Button variant="ghost" size="sm">
                                    <ThumbsUp className="h-3 w-3 mr-1" />
                                    Helpful
                                  </Button>
                                  <Button variant="ghost" size="sm">
                                    <MessageCircle className="h-3 w-3 mr-1" />
                                    Reply
                                  </Button>
                                  <Button variant="ghost" size="sm">
                                    <Share2 className="h-3 w-3 mr-1" />
                                    Share
                                  </Button>
                                </div>
                              </div>
                            </div>
                          ))}

                          {/* Reply Form */}
                          <div className="flex gap-3">
                            <Avatar className="h-10 w-10">
                              <AvatarFallback>PK</AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <Textarea 
                                placeholder="Write your reply..."
                                value={replyText}
                                onChange={(e) => setReplyText(e.target.value)}
                                className="mb-2"
                              />
                              <div className="flex gap-2">
                                <Button size="sm">
                                  <Send className="h-4 w-4 mr-2" />
                                  Post Reply
                                </Button>
                                <Button variant="outline" size="sm">
                                  <ImageIcon className="h-4 w-4 mr-2" />
                                  Add Image
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </Card>
                  ))}
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  {/* Trending Topics */}
                  <Card className="p-6">
                    <h3 className="font-bold mb-4 flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-orange-500" />
                      Trending Topics
                    </h3>
                    <div className="space-y-3">
                      {["Quadratic Equations", "Newton's Laws", "Photosynthesis", "Chemical Bonding", "Poetry Analysis"].map((topic, index) => (
                        <div key={index} className="flex items-center justify-between p-2 hover:bg-muted rounded-lg cursor-pointer">
                          <span className="text-sm">{topic}</span>
                          <Badge variant="secondary" className="text-xs">
                            {Math.floor(Math.random() * 50) + 10}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </Card>

                  {/* Top Contributors */}
                  <Card className="p-6">
                    <h3 className="font-bold mb-4 flex items-center gap-2">
                      <Award className="h-5 w-5 text-yellow-500" />
                      Top Contributors
                    </h3>
                    <div className="space-y-3">
                      {["Arjun Singh", "Sneha Reddy", "Raj Patel", "Meera Shah"].map((name, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="flex items-center justify-center h-8 w-8 rounded-full bg-yellow-500/20 text-yellow-700 dark:text-yellow-300 font-bold text-xs">
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-sm">{name}</div>
                            <div className="text-xs text-muted-foreground">
                              {Math.floor(Math.random() * 100) + 50} answers
                            </div>
                          </div>
                          <Star className="h-4 w-4 text-yellow-500" />
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Mentors Tab */}
            <TabsContent value="mentors" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {mentors.map((mentor, index) => (
                  <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-4">
                      <Avatar className="h-16 w-16">
                        <AvatarFallback className="text-lg font-bold">
                          {mentor.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-bold text-lg">{mentor.name}</h3>
                          {mentor.available ? (
                            <Badge className="bg-green-500/20 text-green-700 dark:text-green-300">
                              Available
                            </Badge>
                          ) : (
                            <Badge variant="secondary">Busy</Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">{mentor.expertise}</p>
                        
                        <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
                          <div>
                            <div className="font-bold">{mentor.students}</div>
                            <div className="text-xs text-muted-foreground">Students</div>
                          </div>
                          <div>
                            <div className="font-bold flex items-center gap-1">
                              {mentor.rating} <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                            </div>
                            <div className="text-xs text-muted-foreground">Rating</div>
                          </div>
                          <div>
                            <div className="font-bold">{mentor.sessions}</div>
                            <div className="text-xs text-muted-foreground">Sessions</div>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {mentor.languages.map((lang, i) => (
                            <Badge key={i} variant="outline" className="text-xs">
                              {lang}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex gap-2">
                          <Button size="sm" className="flex-1">
                            <UserPlus className="h-4 w-4 mr-2" />
                            Connect
                          </Button>
                          <Button size="sm" variant="outline" className="flex-1">
                            <MessageSquare className="h-4 w-4 mr-2" />
                            Message
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Resources Tab */}
            <TabsContent value="resources" className="space-y-6">
              <Card className="p-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input 
                      placeholder="Search study materials, notes, videos..." 
                      className="pl-10"
                    />
                  </div>
                  <Button>
                    <Upload className="h-4 w-4 mr-2" />
                    Upload Resource
                  </Button>
                </div>
              </Card>

              <div className="grid md:grid-cols-2 gap-6">
                {resources.map((resource, index) => (
                  <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                        <FileText className="h-6 w-6 text-blue-500" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-bold">{resource.title}</h3>
                          {resource.optimized && (
                            <Badge variant="outline" className="text-xs">
                              <Wifi className="h-3 w-3 mr-1" />
                              Optimized
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                          <span>{resource.type}</span>
                          <span>•</span>
                          <span>{resource.size}</span>
                          <span>•</span>
                          <span>{resource.language}</span>
                        </div>
                        <div className="flex items-center gap-2 mb-3">
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i}
                                className={`h-3 w-3 ${
                                  i < Math.floor(resource.rating) 
                                    ? 'text-yellow-500 fill-yellow-500' 
                                    : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-muted-foreground">
                            {resource.downloads} downloads
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground mb-4">
                          Uploaded by {resource.uploadedBy}
                        </p>
                        <div className="flex gap-2">
                          <Button size="sm" className="flex-1">
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </Button>
                          <Button size="sm" variant="outline">
                            <Bookmark className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Share2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Study Groups Tab */}
            <TabsContent value="groups" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {studyGroups.map((group, index) => (
                  <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-bold text-lg mb-1">{group.name}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{group.description}</p>
                        <Badge variant="secondary">{group.subject}</Badge>
                      </div>
                      {group.active && (
                        <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />
                      )}
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div>
                        <div className="font-bold">{group.members}</div>
                        <div className="text-xs text-muted-foreground">Members</div>
                      </div>
                      <div>
                        <div className="font-bold">{group.posts}</div>
                        <div className="text-xs text-muted-foreground">Posts</div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1">
                        <UserPlus className="h-4 w-4 mr-2" />
                        Join Group
                      </Button>
                      <Button size="sm" variant="outline">
                        <MessageSquare className="h-4 w-4" />
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>

              <Card className="p-8 text-center">
                <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Create Your Own Study Group</h3>
                <p className="text-muted-foreground mb-4">
                  Connect with peers studying the same subjects
                </p>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Create New Group
                </Button>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
