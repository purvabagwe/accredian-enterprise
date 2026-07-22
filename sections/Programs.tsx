"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, Code2, Cpu, Cloud, Lightbulb, ArrowRight, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

const PROGRAMS = [
  {
    id: 1,
    title: "Leadership & Executive Programs",
    description: "Align engineering teams with long-term strategy, agile scaling models, and effective metrics frameworks.",
    icon: Trophy,
    gradient: "from-amber-500/10 to-orange-500/10",
    iconColor: "text-amber-600",
    modules: ["Strategic Vision & OKRs", "High-Performance Team Orchestration", "Change Management & Agility"],
    duration: "6 Weeks",
    intensity: "Intermediate - Advanced"
  },
  {
    id: 2,
    title: "Technical Engineering Upskilling",
    description: "Scale backend performance, adopt clean frontend development architectures, and modernize deployment tools.",
    icon: Code2,
    gradient: "from-blue-500/10 to-indigo-500/10",
    iconColor: "text-blue-600",
    modules: ["Microservices Architecture", "Performance Tuning in TypeScript & Go", "CI/CD & Kubernetes Orchestration"],
    duration: "12 Weeks",
    intensity: "Intermediate"
  },
  {
    id: 3,
    title: "Enterprise AI & Machine Learning Programs",
    description: "Build, deploy, and scale custom transformers, neural networks, and generative AI features safely.",
    icon: Cpu,
    gradient: "from-violet-500/10 to-purple-500/10",
    iconColor: "text-violet-600",
    modules: ["Generative AI Pipeline Integration", "Data Preprocessing at Scale", "AI Infrastructure Cost Management"],
    duration: "10 Weeks",
    intensity: "Advanced"
  },
  {
    id: 4,
    title: "Cloud & Infrastructure Certifications",
    description: "Equip teams to implement zero-trust systems, secure hybrid setups, and optimize cloud billing metrics.",
    icon: Cloud,
    gradient: "from-sky-500/10 to-indigo-500/10",
    iconColor: "text-sky-600",
    modules: ["AWS/GCP Well-Architected Review", "Infrastructure-as-Code (Terraform)", "FinOps Cloud Cost Optimization"],
    duration: "8 Weeks",
    intensity: "All Skill Levels"
  },
  {
    id: 5,
    title: "Product Innovation & Strategy Programs",
    description: "Bridge the gap between technology and customer needs with metrics-driven UX testing and agile scoping.",
    icon: Lightbulb,
    gradient: "from-rose-500/10 to-pink-500/10",
    iconColor: "text-rose-600",
    modules: ["Product Scoping & Discovery", "Quantitative User Testing Protocols", "Rapid Prototyping Workflows"],
    duration: "6 Weeks",
    intensity: "Intermediate"
  }
];

export function Programs() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="solutions" className="py-24 bg-white dark:bg-slate-950 scroll-mt-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <Badge variant="primary" className="mb-4">
              Development Cohorts
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Premium Upskilling Cohorts
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              Select standard programs designed to target specialized engineering disciplines and leadership growth.
            </p>
          </div>
          <Button variant="outline" size="md" className="shrink-0 flex items-center gap-2 group cursor-pointer" onClick={() => window.location.href = "#cta"}>
            View Custom Programs
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Horizontal Cards List */}
        <div className="space-y-4">
          {PROGRAMS.map((prog) => {
            const Icon = prog.icon;
            const isHovered = hoveredId === prog.id;

            return (
              <div
                key={prog.id}
                onMouseEnter={() => setHoveredId(prog.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="w-full"
              >
                <motion.div
                  layout="position"
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className={`w-full rounded-2xl border transition-all duration-300 ${
                    isHovered
                      ? "bg-white dark:bg-slate-800 border-indigo-200 dark:border-indigo-500/30 shadow-xl shadow-indigo-100/30 dark:shadow-indigo-500/10"
                      : "glass-card hover:bg-white dark:hover:bg-slate-800"
                  }`}
                >
                  {/* Card Main content */}
                  <div className="p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer">
                    
                    {/* Left Icon + Middle Text */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 flex-1">
                      {/* Left icon wrapper */}
                      <div className={`p-4 rounded-xl bg-gradient-to-tr ${prog.gradient} ${prog.iconColor} shrink-0`}>
                        <Icon className="w-7 h-7" />
                      </div>
                      
                      {/* Center Content */}
                      <div>
                        <div className="flex flex-wrap gap-2 items-center">
                          <h3 className="font-extrabold text-slate-900 dark:text-white text-lg sm:text-xl tracking-tight">
                            {prog.title}
                          </h3>
                          <Badge variant="outline" className="text-[10px] text-indigo-600 font-bold border-indigo-100 bg-indigo-50/20">
                            {prog.duration}
                          </Badge>
                        </div>
                        <p className="mt-2 text-sm sm:text-base text-slate-500 dark:text-slate-400 font-medium max-w-3xl leading-relaxed">
                          {prog.description}
                        </p>
                      </div>
                    </div>

                    {/* Right Arrow */}
                    <div className="flex items-center gap-3 shrink-0 self-end md:self-center">
                      <motion.div
                        animate={{ 
                          x: isHovered ? 5 : 0,
                          scale: isHovered ? 1.05 : 1
                        }}
                        transition={{ duration: 0.2 }}
                        className={`p-3.5 rounded-full border transition-all duration-300 ${
                          isHovered 
                            ? "bg-indigo-600 border-indigo-600 text-white shadow-md shadow-indigo-600/30" 
                            : "bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-400"
                        }`}
                      >
                        <ArrowRight className="w-5 h-5" />
                      </motion.div>
                    </div>

                  </div>

                  {/* Bottom Expanded content on Hover */}
                  <AnimatePresence initial={false}>
                    {isHovered && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0 border-t border-slate-100 dark:border-slate-800">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                            
                            {/* Left: Core modules list */}
                            <div>
                              <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest block mb-3">
                                Core Syllabus Modules
                              </span>
                              <div className="space-y-2.5">
                                {prog.modules.map((mod) => (
                                  <div key={mod} className="flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-indigo-500 shrink-0" />
                                    <span className="text-slate-700 dark:text-slate-200 text-xs sm:text-sm font-semibold">{mod}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Right: Technical specifications & syllabus CTA */}
                            <div className="flex flex-col justify-between items-start gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                              <div className="flex justify-between w-full">
                                <div>
                                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Duration</span>
                                  <span className="text-slate-800 dark:text-slate-100 text-xs sm:text-sm font-bold">{prog.duration}</span>
                                </div>
                                <div className="text-right">
                                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Complexity</span>
                                  <span className="text-slate-800 dark:text-slate-100 text-xs sm:text-sm font-bold">{prog.intensity}</span>
                                </div>
                              </div>
                              <Button 
                                variant="secondary" 
                                size="sm" 
                                className="w-full justify-center text-xs font-bold border-indigo-100 hover:border-indigo-200"
                                onClick={() => window.location.href = "#cta"}
                              >
                                Inquiry About Cohort
                              </Button>
                            </div>

                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
