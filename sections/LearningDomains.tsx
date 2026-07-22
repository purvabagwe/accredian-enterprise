"use client";

import { motion } from "framer-motion";
import { Brain, Database, Cloud, ShieldCheck, Target, LayoutGrid, Code, Cpu, ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

const DOMAINS = [
  {
    id: 1,
    title: "Artificial Intelligence",
    description: "Master Machine Learning pipelines, NLP systems, Deep Learning architectures, and Generative AI prompt workflows.",
    icon: Brain,
    gridClass: "lg:col-span-2",
    gradient: "from-blue-600/10 to-indigo-600/10 group-hover:from-blue-600/20 group-hover:to-indigo-600/20",
    bgPattern: "bg-[radial-gradient(circle_at_30%_30%,rgba(99,102,241,0.1),transparent_50%)]"
  },
  {
    id: 2,
    title: "Data Engineering",
    description: "Design robust pipeline workflows, manage data lakes, and process large datasets with Spark, Kafka, and DBT.",
    icon: Database,
    gridClass: "lg:col-span-1",
    gradient: "from-emerald-600/10 to-teal-600/10 group-hover:from-emerald-600/20 group-hover:to-teal-600/20",
    bgPattern: "bg-[radial-gradient(circle_at_30%_30%,rgba(16,185,129,0.1),transparent_50%)]"
  },
  {
    id: 3,
    title: "Cloud Computing",
    description: "Build scalable multi-cloud microservices on AWS, GCP, and Azure with Kubernetes, Terraform, and GitOps.",
    icon: Cloud,
    gridClass: "lg:col-span-1",
    gradient: "from-sky-600/10 to-blue-600/10 group-hover:from-sky-600/20 group-hover:to-blue-600/20",
    bgPattern: "bg-[radial-gradient(circle_at_30%_30%,rgba(14,165,233,0.1),transparent_50%)]"
  },
  {
    id: 4,
    title: "Cyber Security",
    description: "Protect systems with pen-testing, identity governance, zero-trust infrastructure models, and compliance standards.",
    icon: ShieldCheck,
    gridClass: "lg:col-span-1",
    gradient: "from-rose-600/10 to-orange-600/10 group-hover:from-rose-600/20 group-hover:to-orange-600/20",
    bgPattern: "bg-[radial-gradient(circle_at_30%_30%,rgba(244,63,94,0.1),transparent_50%)]"
  },
  {
    id: 5,
    title: "Leadership",
    description: "Transition engineers into managers. Cultivate strategic vision, feedback loops, agility, and performance coaching.",
    icon: Target,
    gridClass: "lg:col-span-1",
    gradient: "from-amber-600/10 to-orange-600/10 group-hover:from-amber-600/20 group-hover:to-orange-600/20",
    bgPattern: "bg-[radial-gradient(circle_at_30%_30%,rgba(245,158,11,0.1),transparent_50%)]"
  },
  {
    id: 6,
    title: "Product Management",
    description: "Align technical teams with product roadmaps, metrics tracking, UX testing, and growth frameworks.",
    icon: LayoutGrid,
    gridClass: "lg:col-span-1",
    gradient: "from-fuchsia-600/10 to-pink-600/10 group-hover:from-fuchsia-600/20 group-hover:to-pink-600/20",
    bgPattern: "bg-[radial-gradient(circle_at_30%_30%,rgba(217,70,239,0.1),transparent_50%)]"
  },
  {
    id: 7,
    title: "Software Development",
    description: "Design modular services. Master TypeScript, React, Next.js, Go, Rust, system performance, and clean API design.",
    icon: Code,
    gridClass: "lg:col-span-2",
    gradient: "from-indigo-600/10 to-violet-600/10 group-hover:from-indigo-600/20 group-hover:to-violet-600/20",
    bgPattern: "bg-[radial-gradient(circle_at_30%_30%,rgba(79,70,229,0.1),transparent_50%)]"
  },
  {
    id: 8,
    title: "Digital Transformation",
    description: "Re-architect enterprise practices. Migrate legacy setups to agile, modern, AI-augmented automated systems.",
    icon: Cpu,
    gridClass: "lg:col-span-1",
    gradient: "from-violet-600/10 to-purple-600/10 group-hover:from-violet-600/20 group-hover:to-purple-600/20",
    bgPattern: "bg-[radial-gradient(circle_at_30%_30%,rgba(139,92,246,0.1),transparent_50%)]"
  }
];

export function LearningDomains() {
  return (
    <section id="domains" className="py-24 bg-slate-50/50 dark:bg-slate-900 scroll-mt-20 relative">
      {/* Decorative shapes */}
      <div className="absolute right-0 bottom-0 w-80 h-80 rounded-full bg-violet-200/20 blur-[100px] pointer-events-none" />
      <div className="absolute left-0 top-1/4 w-96 h-96 rounded-full bg-blue-200/15 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="primary" className="mb-4">
            Curriculum Ecosystem
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Key Learning Domains
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            Targeted capability-building tracks covering critical technological roles and leadership disciplines.
          </p>
        </div>

        {/* Masonry / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
          {DOMAINS.map((domain, idx) => {
            const Icon = domain.icon;
            return (
              <motion.div
                key={domain.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className={domain.gridClass}
              >
                <Card
                  variant="glass"
                  className="group relative h-full flex flex-col p-8 bg-white/70 dark:bg-slate-800/70 overflow-hidden cursor-pointer min-h-[220px]"
                >
                  {/* Subtle animated gradient pattern background on hover */}
                  <div className={`absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br ${domain.gradient} ${domain.bgPattern}`} />

                  {/* Top: Icon + Arrow */}
                  <div className="flex justify-between items-start z-10">
                    <div className="p-3.5 rounded-2xl bg-indigo-50/80 dark:bg-indigo-950/50 text-indigo-600 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Bottom: Text Content */}
                  <div className="mt-auto pt-8 z-10">
                    <h3 className="text-xl font-extrabold text-slate-900 dark:text-white tracking-tight group-hover:text-indigo-700 dark:group-hover:text-indigo-400 transition-colors duration-200">
                      {domain.title}
                    </h3>
                    <p className="mt-2.5 text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                      {domain.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
