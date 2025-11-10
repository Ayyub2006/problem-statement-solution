"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import Navigation from "@/components/Navigation";
import {
  ChevronLeft,
  ChevronRight,
  Volume2,
  VolumeX,
  Download,
  BookOpen,
  CheckCircle2,
  XCircle,
  Trophy,
  Brain,
  Lightbulb,
  MessageSquare,
  Globe,
  Play,
  Pause,
  RotateCcw,
  ChevronDown,
  ChevronUp
} from "lucide-react";

export default function LessonPlayer() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("english");
  const [playbackSpeed, setPlaybackSpeed] = useState(1.0);
  const [quizActive, setQuizActive] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answeredCorrectly, setAnsweredCorrectly] = useState<boolean | null>(null);
  const [difficulty, setDifficulty] = useState<"easy" | "medium" | "hard">("medium");
  const [showHint, setShowHint] = useState(false);
  const [offlineMode, setOfflineMode] = useState(false);

  const lessonContent = [
    {
      id: 1,
      title: "Introduction to Quadratic Equations",
      content: "A quadratic equation is a second-order polynomial equation in a single variable x with a coefficient not equal to zero.",
      formula: "ax² + bx + c = 0",
      example: "x² - 5x + 6 = 0",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=500&fit=crop"
    },
    {
      id: 2,
      title: "Standard Form",
      content: "The standard form of a quadratic equation is ax² + bx + c = 0, where a, b, and c are constants and a ≠ 0.",
      formula: "ax² + bx + c = 0",
      example: "2x² + 3x - 5 = 0",
      image: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?w=800&h=500&fit=crop"
    },
    {
      id: 3,
      title: "Solving Methods",
      content: "There are several methods to solve quadratic equations: Factoring, Completing the Square, and the Quadratic Formula.",
      formula: "x = [-b ± √(b² - 4ac)] / 2a",
      example: "For x² - 5x + 6 = 0: x = 2 or x = 3",
      image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&h=500&fit=crop"
    }
  ];

  const quizQuestions = {
    easy: [
      {
        question: "What is the standard form of a quadratic equation?",
        options: ["ax + b = 0", "ax² + bx + c = 0", "ax³ + bx² + c = 0", "a + b + c = 0"],
        correct: 1,
        hint: "Remember, it's a second-degree polynomial equation."
      }
    ],
    medium: [
      {
        question: "Solve: x² - 5x + 6 = 0",
        options: ["x = 1, 6", "x = 2, 3", "x = -2, -3", "x = 5, 6"],
        correct: 1,
        hint: "Try factoring the equation first: (x - 2)(x - 3) = 0"
      }
    ],
    hard: [
      {
        question: "What is the discriminant of 2x² + 3x - 5 = 0?",
        options: ["49", "29", "19", "9"],
        correct: 0,
        hint: "Discriminant = b² - 4ac. Calculate with a=2, b=3, c=-5"
      }
    ]
  };

  const languages = [
    { value: "english", label: "English" },
    { value: "hindi", label: "हिंदी (Hindi)" },
    { value: "bengali", label: "বাংলা (Bengali)" },
    { value: "tamil", label: "தமிழ் (Tamil)" },
    { value: "telugu", label: "తెలుగు (Telugu)" },
    { value: "marathi", label: "मराठी (Marathi)" },
  ];

  useEffect(() => {
    const handleOnlineStatus = () => {
      setOfflineMode(!navigator.onLine);
    };

    handleOnlineStatus();
    window.addEventListener('online', handleOnlineStatus);
    window.addEventListener('offline', handleOnlineStatus);

    return () => {
      window.removeEventListener('online', handleOnlineStatus);
      window.removeEventListener('offline', handleOnlineStatus);
    };
  }, []);

  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      setIsSpeaking(true);
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = playbackSpeed;
      utterance.onend = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
    }
  };

  const stopSpeaking = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  const handleNext = () => {
    if (currentSlide < lessonContent.length - 1) {
      setCurrentSlide(currentSlide + 1);
      setQuizActive(false);
      setSelectedAnswer(null);
      setAnsweredCorrectly(null);
      setShowHint(false);
    } else {
      setQuizActive(true);
    }
  };

  const handlePrevious = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
      setQuizActive(false);
    }
  };

  const handleAnswerSelect = (index: number) => {
    setSelectedAnswer(index);
    const currentQuestion = quizQuestions[difficulty][0];
    const isCorrect = index === currentQuestion.correct;
    setAnsweredCorrectly(isCorrect);
    
    // AI-adaptive: adjust difficulty based on performance
    if (isCorrect && difficulty === "easy") {
      setTimeout(() => setDifficulty("medium"), 2000);
    } else if (!isCorrect && difficulty === "hard") {
      setTimeout(() => setDifficulty("medium"), 2000);
    }
  };

  const currentContent = lessonContent[currentSlide];
  const currentQuestion = quizQuestions[difficulty][0];
  const progressPercentage = ((currentSlide + 1) / lessonContent.length) * 100;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="/student">
                  <ChevronLeft className="h-5 w-5" />
                </a>
              </Button>
              <div>
                <h1 className="text-2xl font-bold">Quadratic Equations</h1>
                <p className="text-sm text-muted-foreground">Mathematics - Class 10</p>
              </div>
            </div>
            {offlineMode && (
              <Badge variant="outline" className="text-orange-500 border-orange-500">
                <Download className="h-3 w-3 mr-1" />
                Offline Mode
              </Badge>
            )}
          </div>

          {/* Progress Bar */}
          <Card className="p-4 mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">
                Slide {currentSlide + 1} of {lessonContent.length}
              </span>
              <span className="text-sm font-medium">{Math.round(progressPercentage)}% Complete</span>
            </div>
            <Progress value={progressPercentage} className="h-2" />
          </Card>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Card className="overflow-hidden">
                {!quizActive ? (
                  <>
                    {/* Lesson Content */}
                    <div className="aspect-video bg-gradient-to-br from-blue-500/10 to-purple-500/10 relative">
                      <img 
                        src={currentContent.image} 
                        alt={currentContent.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <h2 className="text-2xl font-bold text-white mb-2">{currentContent.title}</h2>
                      </div>
                    </div>
                    
                    <div className="p-6 space-y-6">
                      <div>
                        <h3 className="font-semibold mb-2 flex items-center gap-2">
                          <BookOpen className="h-5 w-5 text-blue-500" />
                          Concept
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">{currentContent.content}</p>
                      </div>

                      {currentContent.formula && (
                        <Card className="p-4 bg-muted/50">
                          <h4 className="font-semibold mb-2 text-sm">Formula</h4>
                          <div className="font-mono text-lg">{currentContent.formula}</div>
                        </Card>
                      )}

                      {currentContent.example && (
                        <div>
                          <h4 className="font-semibold mb-2 flex items-center gap-2">
                            <Lightbulb className="h-5 w-5 text-yellow-500" />
                            Example
                          </h4>
                          <div className="font-mono p-4 bg-muted/50 rounded-lg">{currentContent.example}</div>
                        </div>
                      )}

                      {/* Navigation Buttons */}
                      <div className="flex items-center justify-between pt-4 border-t">
                        <Button 
                          variant="outline" 
                          onClick={handlePrevious}
                          disabled={currentSlide === 0}
                        >
                          <ChevronLeft className="h-4 w-4 mr-2" />
                          Previous
                        </Button>
                        <Button onClick={handleNext}>
                          {currentSlide === lessonContent.length - 1 ? 'Take Quiz' : 'Next'}
                          <ChevronRight className="h-4 w-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </>
                ) : (
                  /* Quiz Section */
                  <div className="p-8">
                    <div className="text-center mb-8">
                      <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-purple-500/20 mb-4">
                        <Brain className="h-8 w-8 text-purple-500" />
                      </div>
                      <h2 className="text-2xl font-bold mb-2">Adaptive Quiz</h2>
                      <p className="text-muted-foreground">
                        Test your understanding - difficulty adjusts based on your performance
                      </p>
                      <Badge className="mt-2" variant={
                        difficulty === "easy" ? "secondary" : 
                        difficulty === "medium" ? "default" : 
                        "destructive"
                      }>
                        {difficulty.toUpperCase()} Level
                      </Badge>
                    </div>

                    <Card className="p-6 mb-6">
                      <h3 className="text-lg font-semibold mb-6">{currentQuestion.question}</h3>
                      
                      <div className="space-y-3">
                        {currentQuestion.options.map((option, index) => (
                          <button
                            key={index}
                            onClick={() => handleAnswerSelect(index)}
                            disabled={selectedAnswer !== null}
                            className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                              selectedAnswer === index
                                ? answeredCorrectly
                                  ? 'border-green-500 bg-green-500/10'
                                  : 'border-red-500 bg-red-500/10'
                                : selectedAnswer !== null && index === currentQuestion.correct
                                ? 'border-green-500 bg-green-500/10'
                                : 'border-border hover:border-primary hover:bg-muted'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span>{option}</span>
                              {selectedAnswer === index && (
                                answeredCorrectly ? (
                                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                                ) : (
                                  <XCircle className="h-5 w-5 text-red-500" />
                                )
                              )}
                              {selectedAnswer !== null && index === currentQuestion.correct && selectedAnswer !== index && (
                                <CheckCircle2 className="h-5 w-5 text-green-500" />
                              )}
                            </div>
                          </button>
                        ))}
                      </div>

                      {selectedAnswer !== null && (
                        <div className={`mt-6 p-4 rounded-lg ${
                          answeredCorrectly ? 'bg-green-500/10 border border-green-500/20' : 'bg-red-500/10 border border-red-500/20'
                        }`}>
                          <div className="flex items-center gap-2 mb-2">
                            {answeredCorrectly ? (
                              <>
                                <Trophy className="h-5 w-5 text-green-500" />
                                <span className="font-semibold text-green-700 dark:text-green-400">Excellent! That's correct!</span>
                              </>
                            ) : (
                              <>
                                <XCircle className="h-5 w-5 text-red-500" />
                                <span className="font-semibold text-red-700 dark:text-red-400">Not quite. Let's review!</span>
                              </>
                            )}
                          </div>
                          {!answeredCorrectly && (
                            <p className="text-sm text-muted-foreground">
                              The correct answer is: {currentQuestion.options[currentQuestion.correct]}
                            </p>
                          )}
                        </div>
                      )}

                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setShowHint(!showHint)}
                        className="mt-4"
                      >
                        {showHint ? <ChevronUp className="h-4 w-4 mr-2" /> : <ChevronDown className="h-4 w-4 mr-2" />}
                        {showHint ? 'Hide Hint' : 'Show Hint'}
                      </Button>

                      {showHint && (
                        <div className="mt-3 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                          <div className="flex items-start gap-2">
                            <Lightbulb className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                            <p className="text-sm">{currentQuestion.hint}</p>
                          </div>
                        </div>
                      )}
                    </Card>

                    <div className="flex gap-4">
                      <Button 
                        variant="outline" 
                        onClick={() => {
                          setQuizActive(false);
                          setSelectedAnswer(null);
                          setAnsweredCorrectly(null);
                          setShowHint(false);
                        }}
                        className="flex-1"
                      >
                        <RotateCcw className="h-4 w-4 mr-2" />
                        Review Lesson
                      </Button>
                      <Button className="flex-1">
                        Next Question
                        <ChevronRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                )}
              </Card>
            </div>

            {/* Sidebar Controls */}
            <div className="space-y-6">
              {/* Language & Audio */}
              <Card className="p-6">
                <h3 className="font-bold mb-4 flex items-center gap-2">
                  <Globe className="h-5 w-5 text-blue-500" />
                  Language & Audio
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Select Language</label>
                    <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {languages.map((lang) => (
                          <SelectItem key={lang.value} value={lang.value}>
                            {lang.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Playback Speed</label>
                    <div className="flex items-center gap-3">
                      <Slider 
                        value={[playbackSpeed]} 
                        onValueChange={([value]) => setPlaybackSpeed(value)}
                        min={0.5}
                        max={2}
                        step={0.25}
                        className="flex-1"
                      />
                      <span className="text-sm font-medium w-12">{playbackSpeed}x</span>
                    </div>
                  </div>

                  {!quizActive && (
                    <Button 
                      className="w-full" 
                      variant={isSpeaking ? "destructive" : "default"}
                      onClick={() => {
                        if (isSpeaking) {
                          stopSpeaking();
                        } else {
                          speakText(currentContent.content);
                        }
                      }}
                    >
                      {isSpeaking ? (
                        <>
                          <VolumeX className="h-4 w-4 mr-2" />
                          Stop Audio
                        </>
                      ) : (
                        <>
                          <Volume2 className="h-4 w-4 mr-2" />
                          Read Aloud
                        </>
                      )}
                    </Button>
                  )}
                </div>
              </Card>

              {/* Notes & Discussion */}
              <Card className="p-6">
                <h3 className="font-bold mb-4 flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-green-500" />
                  Notes & Discussion
                </h3>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Add Note
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Ask Doubt
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Download className="h-4 w-4 mr-2" />
                    Download Content
                  </Button>
                </div>
              </Card>

              {/* Learning Stats */}
              <Card className="p-6">
                <h3 className="font-bold mb-4">Your Progress</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">Quiz Accuracy</span>
                      <span className="font-medium">85%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">Time Spent</span>
                      <span className="font-medium">12 min</span>
                    </div>
                    <Progress value={60} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">Course Progress</span>
                      <span className="font-medium">67%</span>
                    </div>
                    <Progress value={67} className="h-2" />
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
