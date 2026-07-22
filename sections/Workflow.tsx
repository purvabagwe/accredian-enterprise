"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Compass, PencilRuler, PlayCircle, LineChart, Sliders } from "lucide-react";

const WORKFLOW_STEPS = [
  {
    step: "01",
    title: "Understand Business Needs",
    description: "We conduct detailed diagnostic mapping sessions with engineering leads and L&D managers to identify skill bottlenecks, target roles, and tooling goals.",
    duration: "Week 1",
    icon: Compass,
    color: "from-blue-500 to-indigo-500"
  },
  {
    step: "02",
    title: "Build Custom Curriculum",
    description: "Our instructors build custom modules and sandboxed cloud coding assignments mapping precisely to your tech stack, APIs, and microservice setups.",
    duration: "Week 2 - 3",
    icon: PencilRuler,
    color: "from-indigo-500 to-violet-500"
  },
  {
    step: "03",
    title: "Deliver Interactive Training",
    description: "Cohorts begin learning via sandboxed environments and interactive live critique sessions, supported by mentors addressing blockages in real-time.",
    duration: "Active Phase",
    icon: PlayCircle,
    color: "from-violet-500 to-fuchsia-500"
  },
  {
    step: "04",
    title: "Track Performance Metrics",
    description: "L&D directors receive executive capabilities dashboards showing individual completion metrics, skill growth, baseline shifts, and project marks.",
    duration: "Weekly Reports",
    icon: LineChart,
    color: "from-fuchsia-500 to-pink-500"
  },
  {
    step: "05",
    title: "Optimize Upskilling Results",
    description: "We review qualitative cohort feedback, identify bottom performers for specialized attention, and adjust path trajectories based on project scores.",
    duration: "Continuous",
    icon: Sliders,
    color: "from-pink-500 to-emerald-500"
  }
];

export function Workflow() {
  return (
    <section id="process" className="py-24 bg-white dark:bg-slate-950 scroll-mt-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Badge variant="primary" className="mb-4">
            Integration Path
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How We Partner With You
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            A frictionless, end-to-end consulting and execution workflow to ensure training delivers measurable business returns.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative">
          
          {/* Vertical axis line (desktop only) */}
          <div className="absolute left-[50%] top-8 bottom-8 w-0.5 bg-slate-200 dark:bg-slate-700 -translate-x-1/2 hidden lg:block z-0" />

          {/* Steps List */}
          <div className="space-y-12 lg:space-y-16 relative z-10">
            {WORKFLOW_STEPS.map((step, idx) => {
              const Icon = step.icon;
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={step.step}
                  className={`flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12 w-full ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  
                  {/* Left Column (Card wrapper) */}
                  <div className="w-full lg:w-[45%]">
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.6 }}
                    >
                      <Card className="glass-card p-6 sm:p-8 hover:shadow-xl border-slate-100 dark:border-slate-800 relative group overflow-hidden bg-white/70 dark:bg-slate-800/70">
                        {/* Interactive glow border on hover */}
                        <div className={`absolute top-0 left-0 bottom-0 w-1.5 bg-gradient-to-b ${step.color}`} />
                        
                        <div className="flex justify-between items-start mb-4 pl-2">
                          <span className={`text-4xl font-black bg-gradient-to-r ${step.color} bg-clip-text text-transparent leading-none`}>
                            {step.step}
                          </span>
                          <Badge variant="outline" className="text-[10px] font-bold text-slate-500 uppercase tracking-wider bg-slate-50 border-slate-200">
                            {step.duration}
                          </Badge>
                        </div>
                        
                        <h3 className="text-xl font-extrabold text-slate-800 dark:text-white tracking-tight mb-2 pl-2">
                          {step.title}
                        </h3>
                        <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-medium leading-relaxed pl-2">
                          {step.description}
                        </p>
                      </Card>
                    </motion.div>
                  </div>

                  {/* Middle Node Bullet (Desktop only) */}
                  <div className="hidden lg:flex items-center justify-center w-12 h-12 rounded-full border-4 border-white dark:border-slate-900 bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-md z-25 relative select-none">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Right Column (Placeholder space for asymmetry) */}
                  <div className="hidden lg:block w-[45%]" />

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
