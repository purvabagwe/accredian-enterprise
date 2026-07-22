"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Play, ArrowRight, TrendingUp, Award, BookOpen, Brain, Users } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-slate-50/50 dark:bg-slate-950">
      {/* Background Gradient Mesh & Blurred Circles */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-blue-400/20 blur-[120px]" />
        <div className="absolute top-[30%] -left-40 w-[500px] h-[500px] rounded-full bg-indigo-400/15 blur-[150px]" />
        <div className="absolute -bottom-20 right-[20%] w-80 h-80 rounded-full bg-purple-400/20 blur-[100px]" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-35" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Split Asymmetric Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading, Badges, CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="primary" className="mb-6 hover:scale-105 transition-transform duration-300">
                <SparkleIcon className="w-3.5 h-3.5 text-indigo-600 animate-pulse" />
                Enterprise Upskilling Reimagined
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]"
            >
              Empowering Teams Through <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
                Modern Learning
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed"
            >
              Re-engineer your workforce training. Accredian delivers tailor-made development programs combining expert mentorship, curated tracks, and real-time skill analytics to power your digital future.
            </motion.p>

            {/* Micro-Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              {[
                "Personalized Learning",
                "Industry Experts",
                "Measurable Outcomes"
              ].map((text) => (
                <div
                  key={text}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-slate-800 border border-indigo-50/80 dark:border-slate-700 shadow-sm text-slate-700 dark:text-slate-200 text-sm font-semibold hover:border-indigo-200 dark:hover:border-indigo-500/30 transition-all duration-300"
                >
                  <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
                  {text}
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 flex flex-wrap gap-4 items-center w-full sm:w-auto"
            >
              <Button
                variant="primary"
                size="lg"
                className="w-full sm:w-auto"
                onClick={() => window.location.href = "#cta"}
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto flex items-center gap-2 text-slate-800 dark:text-slate-200"
                onClick={() => window.location.href = "#faq"}
              >
                <div className="p-1.5 rounded-full bg-indigo-50 text-indigo-600">
                  <Play className="w-4 h-4 fill-indigo-600 text-indigo-600" />
                </div>
                Watch Demo
              </Button>
            </motion.div>
          </div>

          {/* Right Column: Layered Mockups / Glassmorphism widgets */}
          <div className="lg:col-span-5 relative w-full h-[450px] sm:h-[550px] flex items-center justify-center mt-10 lg:mt-0">
            {/* Main Profile Widget */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="w-full max-w-[360px] sm:max-w-[400px] glass-panel rounded-3xl p-6 relative border-white/60 shadow-2xl z-20"
            >
              {/* Employee Header */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  {/* Custom CSS Avatar Illustration */}
                  <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-blue-500 via-indigo-500 to-violet-500 flex items-center justify-center text-white text-lg font-bold shadow-md shadow-indigo-500/20">
                    SK
                  </div>
                  <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-base sm:text-lg">Siddharth Kumar</h4>
                  <p className="text-xs text-indigo-600 font-semibold tracking-wide">Sr. DevOps Engineer</p>
                </div>
              </div>

              {/* Progress Ring Widget */}
              <div className="mt-8 p-4 rounded-2xl bg-white/60 dark:bg-slate-800/60 border border-white/80 dark:border-slate-700/80 shadow-sm flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Current Track</span>
                  <span className="font-bold text-slate-800 dark:text-slate-100 text-sm sm:text-base mt-0.5 block">Advanced AI Pipelines</span>
                </div>
                {/* SVG Progress Circle */}
                <div className="relative w-14 h-14 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="28" cy="28" r="23" stroke="#e2e8f0" strokeWidth="4" fill="transparent" />
                    <circle 
                      cx="28" 
                      cy="28" 
                      r="23" 
                      stroke="url(#hero-gradient)" 
                      strokeWidth="4" 
                      fill="transparent" 
                      strokeDasharray="144" 
                      strokeDashoffset="36" 
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="hero-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#2563eb" />
                        <stop offset="100%" stopColor="#8b5cf6" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <span className="absolute text-[11px] font-bold text-slate-700 dark:text-slate-200">75%</span>
                </div>
              </div>

              {/* Sparkline / Study activity */}
              <div className="mt-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-slate-500">Weekly Activity</span>
                  <span className="text-xs font-bold text-emerald-500">+14% Growth</span>
                </div>
                <div className="h-16 flex items-end gap-1.5 justify-between">
                  {[25, 45, 30, 60, 40, 80, 95].map((val, idx) => (
                    <div key={idx} className="w-full bg-indigo-50 rounded-md overflow-hidden relative" style={{ height: '100%' }}>
                      <motion.div 
                        initial={{ height: 0 }}
                        animate={{ height: `${val}%` }}
                        transition={{ duration: 1, delay: 0.5 + idx * 0.1 }}
                        className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-blue-500 to-indigo-600 rounded-md" 
                      />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Floating Widget 1: Growth Rates (Top Left) */}
            <motion.div
              className="absolute top-8 left-0 sm:left-4 z-30 animate-float-slow"
              style={{ originX: 0.5, originY: 0.5 }}
            >
              <Card className="glass-card shadow-lg py-3 px-4 flex items-center gap-3 border-indigo-100/50 max-w-[170px]">
                <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Skill Index</span>
                  <span className="font-extrabold text-slate-800 dark:text-white text-base sm:text-lg block leading-none mt-1">94.8%</span>
                </div>
              </Card>
            </motion.div>

            {/* Floating Widget 2: AWS Certificate Badge (Bottom Right) */}
            <motion.div
              className="absolute bottom-8 right-0 sm:right-4 z-30 animate-float-medium"
            >
              <Card className="glass-card shadow-lg py-3.5 px-4 flex items-center gap-3 border-indigo-100/50 max-w-[200px]">
                <div className="p-2.5 rounded-xl bg-amber-50 text-amber-600">
                  <Award className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Completed</span>
                  <span className="font-extrabold text-slate-800 dark:text-white text-sm block mt-0.5 leading-tight">AI & Cloud Expert</span>
                </div>
              </Card>
            </motion.div>

            {/* Floating Widget 3: Live Session Pill (Top Right) */}
            <motion.div
              className="absolute top-12 right-0 sm:right-6 z-30 animate-float-fast"
            >
              <div className="glass-card shadow-md py-2 px-3 flex items-center gap-2 rounded-full border-white/80">
                <span className="w-2.5 h-2.5 bg-rose-500 rounded-full animate-ping" />
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">Mentorship Live</span>
              </div>
            </motion.div>

            {/* Decorative Background Elements */}
            <div className="absolute -left-6 bottom-16 w-32 h-32 border border-dashed border-indigo-200 rounded-full opacity-40 animate-[spin_40s_linear_infinite] pointer-events-none" />
            <div className="absolute right-12 top-6 w-20 h-20 border border-dashed border-blue-200 rounded-xl opacity-30 animate-[spin_25s_linear_infinite] pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
}

// Sparkle Icon helper
function SparkleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.3-6.3l-.7.7M6.7 17.3l-.7.7m12.6 0l-.7-.7M6.7 6.7l-.7-.7N" />
      <path d="M12 8a4 4 0 0 0-4 4 4 4 0 0 0 4 4 4 4 0 0 0 4-4 4 4 0 0 0-4-4z" />
    </svg>
  );
}
