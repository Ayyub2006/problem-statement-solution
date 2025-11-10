"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { 
  BookOpen, 
  Brain, 
  Globe, 
  WifiOff, 
  Users, 
  TrendingUp,
  Award,
  MessageSquare,
  Sparkles,
  ChevronRight,
  CheckCircle2
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary">
                <Sparkles className="h-4 w-4" />
                AI-Powered Learning Platform
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold tracking-tight">
                Bridging the Digital Education Gap
              </h1>
              <p className="text-xl text-muted-foreground">
                Empowering every student with AI-adaptive, offline-first, multilingual learning. 
                Quality education for all, regardless of connectivity or location.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/student">
                  <Button size="lg" className="w-full sm:w-auto">
                    Start Learning
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/teacher">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    For Teachers
                  </Button>
                </Link>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold">1M+</div>
                  <div className="text-sm text-muted-foreground">Students</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">50K+</div>
                  <div className="text-sm text-muted-foreground">Teachers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">15+</div>
                  <div className="text-sm text-muted-foreground">Languages</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-purple-500/20 p-8">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=800&fit=crop" 
                  alt="Students learning together" 
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-lg border">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-green-500/20 flex items-center justify-center">
                    <CheckCircle2 className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <div className="font-bold">Works Offline</div>
                    <div className="text-sm text-muted-foreground">No internet? No problem!</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Intelligent Learning, Accessible to All</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our platform combines cutting-edge AI with practical solutions for connectivity challenges
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4">
                <Brain className="h-6 w-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">AI-Adaptive Learning</h3>
              <p className="text-muted-foreground">
                Personalized learning paths that adapt to each student's pace, performance, and learning style using advanced AI algorithms.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 rounded-lg bg-orange-500/20 flex items-center justify-center mb-4">
                <WifiOff className="h-6 w-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Offline-First Design</h3>
              <p className="text-muted-foreground">
                Download content and continue learning without internet. Automatic sync when connection is restored.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 rounded-lg bg-green-500/20 flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-green-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Multilingual Support</h3>
              <p className="text-muted-foreground">
                Learn in your native language with support for 15+ regional languages and text-to-speech capabilities.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 rounded-lg bg-purple-500/20 flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-purple-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Smart Analytics</h3>
              <p className="text-muted-foreground">
                Real-time insights for teachers and parents to track progress, identify gaps, and optimize learning outcomes.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 rounded-lg bg-pink-500/20 flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-pink-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Gamified Experience</h3>
              <p className="text-muted-foreground">
                Boost engagement with badges, streaks, points, and leaderboards that make learning fun and motivating.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 rounded-lg bg-cyan-500/20 flex items-center justify-center mb-4">
                <MessageSquare className="h-6 w-6 text-cyan-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Community Learning</h3>
              <p className="text-muted-foreground">
                Peer-to-peer doubt solving, mentorship matching, and collaborative learning in a supportive community.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop" 
                alt="Rural education" 
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">Making Quality Education Accessible</h2>
              <p className="text-lg text-muted-foreground">
                We believe every student deserves access to world-class education, regardless of their location, economic background, or internet connectivity.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold">Rural & Urban Students</div>
                    <div className="text-muted-foreground">Designed to serve both demographics without barriers</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold">Cost-Effective & Scalable</div>
                    <div className="text-muted-foreground">Affordable pricing ensures accessibility for all economic backgrounds</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold">Proven Results</div>
                    <div className="text-muted-foreground">Students show 40% improvement in learning outcomes</div>
                  </div>
                </div>
              </div>
              <Button size="lg">
                Learn More About Our Impact
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold">Ready to Transform Education?</h2>
          <p className="text-xl opacity-90">
            Join millions of students and thousands of teachers already using EduBridge
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/student">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                <Users className="mr-2 h-5 w-5" />
                For Students
              </Button>
            </Link>
            <Link href="/teacher">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <BookOpen className="mr-2 h-5 w-5" />
                For Teachers
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t">
        <div className="max-w-7xl mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 EduBridge. Bridging the digital education gap, one student at a time.</p>
        </div>
      </footer>
    </div>
  );
}