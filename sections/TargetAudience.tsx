"use client";

import { motion } from "framer-motion";
import { Code, UserCheck, Briefcase, GraduationCap, Network, Users } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

const AUDIENCE = [
  {
    id: 1,
    title: "Software Engineers",
    description: "Learn bleeding-edge cloud deployment architectures, full-stack frameworks, and automated system scalability metrics.",
    icon: Code,
    gradient: "from-blue-500 to-cyan-500",
    floatClass: "animate-float-slow"
  },
  {
    id: 2,
    title: "Managers & Tech Leads",
    description: "Orchestrate sprint schedules, identify development gaps, scale agile workflows, and manage architecture plans.",
    icon: UserCheck,
    gradient: "from-indigo-500 to-violet-500",
    floatClass: "animate-float-medium"
  },
  {
    id: 3,
    title: "Business Leaders",
    description: "Navigate digital transformation vectors, analyze industry indicators, and calculate AI integration cost benefit analysis.",
    icon: Briefcase,
    gradient: "from-violet-500 to-fuchsia-500",
    floatClass: "animate-float-fast"
  },
  {
    id: 4,
    title: "Fresh Graduates",
    description: "Close college skill gaps. Transition fast to real developer tools, git-based collaborations, and professional standards.",
    icon: GraduationCap,
    gradient: "from-emerald-500 to-teal-500",
    floatClass: "animate-float-medium"
  },
  {
    id: 5,
    title: "Working Professionals",
    description: "Re-skill into modern roles like Cloud Architect, AI Systems Builder, Zero-Trust compliance manager, and Lead Architect.",
    icon: Network,
    gradient: "from-sky-500 to-blue-500",
    floatClass: "animate-float-slow"
  },
  {
    id: 6,
    title: "HR & L&D Teams",
    description: "Design automated onboarding paths, diagnostic test sets, tracking spreadsheets, and compliant upskilling metrics.",
    icon: Users,
    gradient: "from-rose-500 to-pink-500",
    floatClass: "animate-float-fast"
  }
];

export function TargetAudience() {
  return (
    <section className="relative py-28 bg-[#090d16] text-white overflow-hidden">
      {/* Background Mesh Glows */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-indigo-500/10 blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full bg-violet-600/10 blur-[180px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Badge variant="primary" className="mb-4 bg-violet-950/50 text-violet-300 border-violet-850">
            Target Audience
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Tailored for Every Enterprise Role
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Our multi-tier learning tracks adapt to specific skill demands, ensuring relevant outcomes across all layers of the organization.
          </p>
        </div>

        {/* Audience Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AUDIENCE.map((aud, idx) => {
            const Icon = aud.icon;
            return (
              <motion.div
                key={aud.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={aud.floatClass}
              >
                <Card
                  variant="glass-dark"
                  className="h-full flex flex-col p-8 group border-white/5 hover:border-violet-500/30 hover:shadow-2xl hover:shadow-violet-600/10 transition-all duration-300 bg-slate-950/40 relative min-h-[220px]"
                >
                  {/* Glowing hover card indicator */}
                  <div className="absolute -top-px left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-violet-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${aud.gradient} p-[1px] shadow-lg mb-6 shrink-0`}>
                    <div className="w-full h-full rounded-[11px] bg-slate-950 flex items-center justify-center text-white">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-extrabold text-white tracking-tight group-hover:text-violet-400 transition-colors duration-200">
                    {aud.title}
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed font-medium">
                    {aud.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
