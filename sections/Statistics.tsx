"use client";

import { Users, BookOpen, Building2, CheckCircle2 } from "lucide-react";
import { Counter } from "@/components/ui/Counter";
import { Card } from "@/components/ui/Card";

const STATS_DATA = [
  {
    id: 1,
    value: 12000,
    suffix: "+",
    label: "Professionals Upskilled",
    description: "Trained in emerging tech & core fields",
    icon: Users,
    gradient: "from-blue-500 to-cyan-500",
    shadow: "shadow-blue-500/10",
    border: "group-hover:border-blue-500/30",
  },
  {
    id: 2,
    value: 300,
    suffix: "+",
    label: "Corporate Programs",
    description: "Designed specifically for modern teams",
    icon: BookOpen,
    gradient: "from-indigo-500 to-violet-500",
    shadow: "shadow-indigo-500/10",
    border: "group-hover:border-indigo-500/30",
  },
  {
    id: 3,
    value: 85,
    suffix: "+",
    label: "Enterprise Clients",
    description: "Partnering with global industry leaders",
    icon: Building2,
    gradient: "from-violet-500 to-fuchsia-500",
    shadow: "shadow-violet-500/10",
    border: "group-hover:border-violet-500/30",
  },
  {
    id: 4,
    value: 95,
    suffix: "%",
    label: "Completion Rate",
    description: "Leading the industry in learner engagement",
    icon: CheckCircle2,
    gradient: "from-emerald-500 to-teal-500",
    shadow: "shadow-emerald-500/10",
    border: "group-hover:border-emerald-500/30",
  },
];

export function Statistics() {
  return (
    <section id="statistics" className="relative py-24 bg-white dark:bg-slate-950 overflow-hidden scroll-mt-20">
      {/* Background Decorative Mesh */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-indigo-500 blur-[180px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Impact in Numbers
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            Our results speak for themselves. We help enterprise teams close skill gaps and achieve sustainable business outcomes.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS_DATA.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <Card
                key={stat.id}
                animate
                delay={idx * 0.1}
                className={`group flex flex-col p-8 glass-card border border-slate-100 dark:border-slate-800 hover:shadow-2xl ${stat.shadow} ${stat.border}`}
              >
                {/* Icon Circle */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${stat.gradient} p-[1px] shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  <div className="w-full h-full rounded-[11px] bg-white dark:bg-slate-900 flex items-center justify-center text-slate-800 dark:text-slate-200">
                    <IconComponent className="w-5 h-5 text-indigo-600" />
                  </div>
                </div>

                {/* Counter */}
                <div className="mt-6 flex items-baseline">
                  <Counter
                    value={stat.value}
                    suffix={stat.suffix}
                    className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight"
                  />
                </div>

                {/* Label & Description */}
                <h3 className="mt-3 text-lg font-bold text-slate-800 dark:text-slate-100 group-hover:text-indigo-600 transition-colors duration-200">
                  {stat.label}
                </h3>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {stat.description}
                </p>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
}
