"use client";

import { motion } from "framer-motion";
import { Compass, Users, Award, BookOpen, Cpu, BarChart3, CheckCircle, ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

const FEATURES = [
  {
    id: 1,
    title: "Custom Learning Paths & Analytics",
    description: "Align skills with business objectives. We build custom-tailored developmental roadmaps for every team member, backed by granular tracking of individual upskilling performance and skill gap diagnostics.",
    bullets: [
      "Dynamic path adjustment based on baseline tests",
      "Real-time capability mapping dashboards",
      "Executive role-readiness reporting"
    ],
    badge: "Personalization & Tracking",
    icon: Compass,
    visualType: "path-analytics",
    reverse: false
  },
  {
    id: 2,
    title: "Expert Mentors & Hands-on Projects",
    description: "Move past passive video watching. Learners solve real-world engineering issues in sandboxed cloud worklabs, supported by weekly 1-on-1 critique sessions from active tech leads and practitioners.",
    bullets: [
      "Industry-active CTOs, tech leads, and advisors",
      "Production-grade git-based assignments",
      "Interactive code-review feedback loops"
    ],
    badge: "Mentorship & Sandboxing",
    icon: Users,
    visualType: "mentor-sandbox",
    reverse: true
  },
  {
    id: 3,
    title: "AI-Powered Assessment & Modern Curriculum",
    description: "Learn what's relevant today. Our curriculum is automatically kept fresh with standard tech updates. Integrated AI bots assess submission quality, syntax, architecture, and provide instant guidance.",
    bullets: [
      "Curriculum refreshed every quarter for newer frameworks",
      "Instant automated AI code linting and security checks",
      "Detailed qualitative performance scorecards"
    ],
    badge: "AI & Modern Curriculum",
    icon: Cpu,
    visualType: "ai-curriculum",
    reverse: false
  },
  {
    id: 4,
    title: "Enterprise Certification & Compliance",
    description: "Equip your teams with industry-recognized qualifications. Upon successful completion of projects and exams, team members receive secure digital credentials that integrate directly with LinkedIn and HR databases.",
    bullets: [
      "Tamper-proof cryptographic certificate validation",
      "Direct integration with Workday, Deel, and HR systems",
      "Endorsed by leading global technology providers"
    ],
    badge: "Certification",
    icon: Award,
    visualType: "certification",
    reverse: true
  }
];

export function WhyChooseUs() {
  return (
    <section id="solutions" className="py-24 bg-white dark:bg-slate-950 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Badge variant="primary" className="mb-4">
            Why Accredian Enterprise
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Designed for High-Performance Teams
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            A comprehensive, data-driven framework that bridges the gap between raw talent and production readiness.
          </p>
        </div>

        {/* Alternate Feature Rows */}
        <div className="space-y-24">
          {FEATURES.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
                  feature.reverse ? "lg:flex-row-reverse" : ""
                }`}
              >
                
                {/* Text Content Block */}
                <div className={`lg:col-span-6 ${feature.reverse ? "lg:order-2" : ""}`}>
                  <motion.div
                    initial={{ opacity: 0, x: feature.reverse ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                  >
                    <Badge variant="primary" className="mb-4 bg-indigo-50/80 text-indigo-700 font-bold border-indigo-100">
                      <Icon className="w-3.5 h-3.5 text-indigo-600" />
                      {feature.badge}
                    </Badge>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                      {feature.title}
                    </h3>
                    <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                      {feature.description}
                    </p>
                    
                    <ul className="mt-6 space-y-3">
                      {feature.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                          <span className="text-slate-700 dark:text-slate-200 text-sm sm:text-base font-semibold">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {/* Graphic Visual Block */}
                <div className={`lg:col-span-6 ${feature.reverse ? "lg:order-1" : ""}`}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    <Card className="glass-card p-6 border-indigo-100/50 dark:border-slate-700/50 shadow-xl overflow-hidden relative min-h-[300px] flex items-center justify-center bg-gradient-to-br from-indigo-50/30 via-slate-50/50 to-purple-50/30 dark:from-indigo-950/20 dark:via-slate-900/50 dark:to-purple-950/20">
                      {renderVisual(feature.visualType)}
                    </Card>
                  </motion.div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

// Function to render mock illustrations based on visualType
function renderVisual(type: string) {
  switch (type) {
    case "path-analytics":
      return (
        <div className="w-full relative flex flex-col gap-4">
          {/* Path timeline simulation */}
          <div className="flex justify-between items-center relative py-2">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-dashed bg-slate-200 z-0" />
            {[
              { label: "Base Test", pct: 100, active: true },
              { label: "Cloud Lab", pct: 65, active: true },
              { label: "Project", pct: 10, active: false }
            ].map((node, i) => (
              <div key={i} className="flex flex-col items-center gap-1.5 relative z-10">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                  node.active ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30" : "bg-slate-200 text-slate-500"
                }`}>
                  {i + 1}
                </div>
                <span className="text-[10px] font-bold text-slate-500">{node.label}</span>
              </div>
            ))}
          </div>

          {/* Simple Grid chart mockup */}
          <div className="p-4 rounded-xl bg-white/70 dark:bg-slate-800/70 border border-indigo-50 dark:border-slate-700 shadow-sm flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-extrabold text-slate-500 uppercase tracking-wider">Cohort Progress</span>
              <span className="text-xs font-extrabold text-indigo-600">82% Avg. Rating</span>
            </div>
            <div className="h-20 flex items-end justify-between gap-2">
              {[40, 60, 45, 90, 70, 85].map((h, i) => (
                <div key={i} className="w-full bg-slate-100 rounded-md h-full relative">
                  <div className="absolute bottom-0 inset-x-0 bg-indigo-600/80 rounded-md" style={{ height: `${h}%` }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      );

    case "mentor-sandbox":
      return (
        <div className="w-full flex flex-col gap-3">
          {/* Mock code editor feedback bubble */}
          <div className="rounded-xl border border-slate-200 bg-slate-900 text-slate-200 p-4 font-mono text-xs shadow-md">
            <div className="flex gap-1.5 mb-2 border-b border-slate-800 pb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span className="text-[10px] text-slate-500 ml-2">lambda_handler.py</span>
            </div>
            <div className="text-emerald-400"># Success: AWS credentials loaded.</div>
            <div className="text-slate-400">def deploy_pipeline(config):</div>
            <div className="text-indigo-400">  model = load_transformer(config.path)</div>
            <div className="text-slate-400">  return model.serve_api()</div>
          </div>

          {/* Mentor feedback bubble */}
          <div className="self-end max-w-[85%] rounded-xl p-3 bg-white dark:bg-slate-800 border border-indigo-100 dark:border-slate-700 shadow-md flex gap-2.5 items-start">
            <div className="w-7 h-7 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold text-[10px] shrink-0">
              M
            </div>
            <div>
              <span className="text-[10px] font-bold text-indigo-600 block">Mentor Review</span>
              <p className="text-[11px] font-semibold text-slate-700 dark:text-slate-300 leading-snug mt-0.5">
                "Clean deployment code! Consider caching the transformer model to improve serve speed."
              </p>
            </div>
          </div>
        </div>
      );

    case "ai-curriculum":
      return (
        <div className="w-full flex flex-col gap-3">
          {/* AI grading dashboard */}
          <div className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-indigo-50 dark:border-slate-700 shadow-md">
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 bg-indigo-500 rounded-full animate-ping" />
                <span className="text-xs font-bold text-slate-800">AI Code Evaluator</span>
              </div>
              <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full">Active</span>
            </div>
            <div className="space-y-2.5">
              {[
                { label: "Complexity", val: 88, color: "bg-indigo-600" },
                { label: "Security", val: 95, color: "bg-emerald-500" },
                { label: "Optimal Architecture", val: 78, color: "bg-blue-500" }
              ].map((bar, i) => (
                <div key={i} className="flex flex-col gap-1">
                  <div className="flex justify-between text-[11px] font-semibold text-slate-600">
                    <span>{bar.label}</span>
                    <span className="font-bold text-slate-800">{bar.val}/100</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className={`h-full ${bar.color} rounded-full`} style={{ width: `${bar.val}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );

    case "certification":
      return (
        <div className="w-full max-w-[280px] rounded-xl border border-amber-200/50 dark:border-amber-500/20 bg-gradient-to-tr from-amber-500/5 via-white dark:via-slate-800 to-amber-500/10 p-5 shadow-lg relative flex flex-col items-center text-center">
          <div className="absolute top-3 right-3 text-amber-500">
            <Award className="w-5 h-5" />
          </div>
          <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center text-amber-600 mb-3 shadow-inner">
            <Award className="w-6 h-6" />
          </div>
          <h4 className="font-extrabold text-slate-900 dark:text-white text-sm">Enterprise Certification</h4>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-1 block">Accredian Endorsed</span>
          
          <div className="w-full border-t border-dashed border-slate-200 my-3" />
          
          <div className="w-full flex justify-between items-center">
            <div className="text-left">
              <span className="text-[9px] font-bold text-slate-400 block">Recipient</span>
              <span className="text-[11px] font-extrabold text-slate-800">Siddharth Kumar</span>
            </div>
            <div className="text-right">
              <span className="text-[9px] font-bold text-slate-400 block">ID Hash</span>
              <span className="text-[11px] font-extrabold text-slate-800 font-mono">acc_98a7fd</span>
            </div>
          </div>
          
          <div className="mt-4 w-full py-1.5 bg-emerald-50 rounded-lg text-emerald-700 text-[10px] font-bold flex items-center justify-center gap-1.5">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
            Cryptographically Verified
          </div>
        </div>
      );

    default:
      return null;
  }
}
