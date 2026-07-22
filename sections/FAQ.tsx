"use client";

import { Accordion } from "@/components/ui/Accordion";
import { Badge } from "@/components/ui/Badge";
import { HelpCircle } from "lucide-react";

const FAQ_ITEMS = [
  {
    id: "q1",
    question: "How do you assess baseline team capabilities?",
    answer: "Before starting any cohort, learners take a diagnostic benchmark test. This covers theoretical systems architecture, syntax challenges, and basic microservice coding in a sandboxed CLI. The results generate a quantitative capabilities baseline."
  },
  {
    id: "q2",
    question: "Can the learning paths be customized for our specific technology stack?",
    answer: "Yes, completely. During our custom curriculum phase (Step 2), we review your internal APIs, libraries, architectural styles (e.g. AWS vs GCP, Go vs Java), and tailor the coding labs to replicate your production setup."
  },
  {
    id: "q3",
    question: "How does the sandboxed coding work? Are there VM costs?",
    answer: "Accredian hosts virtual developer environments directly in the browser. Learners can run shell commands, write code, compile, and run tests. All VMs are fully managed by us, meaning your company pays zero auxiliary cloud provider bills."
  },
  {
    id: "q4",
    question: "What metrics do HR and L&D managers have access to?",
    answer: "Managers get access to our Executive Upskilling Console. This details weekly login activity, average task ratings, code complexity trends, pre/post curriculum baseline shifts, and direct links to completed project Git reports."
  },
  {
    id: "q5",
    question: "Are the certifications cryptographically verified?",
    answer: "Yes, all credentials are encrypted and stored with a unique digital hash on our database. Anyone can input the certificate hash on our verify portal to instantly validate the recipient name, track completed, and grade averages."
  }
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 bg-slate-50/50 dark:bg-slate-900 scroll-mt-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="primary" className="mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-indigo-650 shrink-0" />
            Support Center
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-slate-500 dark:text-slate-400 font-medium text-sm sm:text-base">
            Everything you need to know about our enterprise integrations, platform VMs, and certification verification systems.
          </p>
        </div>

        {/* FAQ Accordion Component */}
        <Accordion items={FAQ_ITEMS} />

      </div>
    </section>
  );
}
