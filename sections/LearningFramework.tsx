"use client";

import { ClipboardCheck, Route, FileCode, CheckSquare, Award } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

const STEPS = [
  {
    id: 1,
    title: "Assessment",
    description: "Identify current team baseline skills and spot specific engineering deficiencies.",
    icon: ClipboardCheck,
    color: "text-blue-600 bg-blue-50 border-blue-100",
    gradient: "from-blue-600 to-indigo-600"
  },
  {
    id: 2,
    title: "Learning Path",
    description: "Generate customized course roadmaps tailored for different roles.",
    icon: Route,
    color: "text-indigo-600 bg-indigo-50 border-indigo-100",
    gradient: "from-indigo-600 to-violet-600"
  },
  {
    id: 3,
    title: "Hands-on Practice",
    description: "Solve micro-tasks in real, sandboxed cloud coding terminals.",
    icon: FileCode,
    color: "text-violet-600 bg-violet-50 border-violet-100",
    gradient: "from-violet-600 to-purple-600"
  },
  {
    id: 4,
    title: "Projects",
    description: "Build capstone solutions simulating modern enterprise codebases.",
    icon: CheckSquare,
    color: "text-fuchsia-600 bg-fuchsia-50 border-fuchsia-100",
    gradient: "from-fuchsia-600 to-pink-600"
  },
  {
    id: 5,
    title: "Certification",
    description: "Award verified digital credentials upon passing exams.",
    icon: Award,
    color: "text-emerald-600 bg-emerald-50 border-emerald-100",
    gradient: "from-emerald-600 to-teal-600"
  }
];

export function LearningFramework() {
  return (
    <section id="learning-framework" className="py-24 bg-slate-50/50 dark:bg-slate-900 scroll-mt-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-72 h-72 rounded-full bg-blue-100/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <Badge variant="primary" className="mb-4">
            Educational Ecosystem
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            The Learning Framework
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            A structured, continuous loop designed to evaluate, upskill, test, and qualify engineers efficiently.
          </p>
        </div>

        {/* Process Timeline Container */}
        <div className="relative">
          
          {/* Animated Curved SVG Connection (Desktop Only) */}
          <div className="absolute top-16 left-0 right-0 w-full h-16 z-0 hidden lg:block pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 1000 64" fill="none" preserveAspectRatio="none">
              <path
                d="M 100,32 Q 200,64 300,32 T 500,32 T 700,32 T 900,32"
                stroke="url(#timeline-gradient)"
                strokeWidth="3"
                strokeDasharray="8,4"
                className="animate-dash"
              />
              <defs>
                <linearGradient id="timeline-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#2563eb" />
                  <stop offset="25%" stopColor="#4f46e5" />
                  <stop offset="50%" stopColor="#7c3aed" />
                  <stop offset="75%" stopColor="#db2777" />
                  <stop offset="100%" stopColor="#10b981" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Steps Timeline Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
            {STEPS.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Step Bubble Circle */}
                  <div className="relative">
                    {/* Outer glow ring */}
                    <div className="absolute inset-0 rounded-2xl bg-indigo-500/0 group-hover:bg-indigo-500/5 blur-md scale-125 transition-all duration-300" />
                    
                    {/* Inner bubble */}
                    <div className={`relative w-20 h-20 rounded-2xl border flex items-center justify-center shadow-md transition-all duration-300 group-hover:scale-110 z-10 ${step.color} group-hover:shadow-lg`}>
                      <Icon className="w-8 h-8" />
                    </div>

                    {/* Step number badge */}
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-extrabold text-[10px] flex items-center justify-center border-2 border-white dark:border-slate-900 shadow">
                      {step.id}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="mt-6 text-lg sm:text-xl font-extrabold text-slate-800 dark:text-white tracking-tight group-hover:text-indigo-600 transition-colors duration-200">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-semibold max-w-[240px] lg:max-w-none px-4 lg:px-2">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
