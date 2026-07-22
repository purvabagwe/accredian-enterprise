"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote, MessageSquare } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Aisha Rahman",
    designation: "VP of Engineering",
    company: "AcroTech Solutions",
    stars: 5,
    quote: "Accredian completely re-engineered our engineering onboarding. We reduced the ramp-up time of our fresh graduate software developers from 4 months to just 6 weeks. The sandboxed code environments are game-changing.",
    avatarText: "AR",
    avatarBg: "from-blue-500 to-indigo-500"
  },
  {
    id: 2,
    name: "David Chen",
    designation: "Head of Learning & Development",
    company: "GlobalFin Systems",
    stars: 5,
    quote: "Custom learning paths allowed us to upskill 250 engineers from legacy databases to distributed system pipelines smoothly. The metrics dashboard gave our executives complete visibility into L&D ROI.",
    avatarText: "DC",
    avatarBg: "from-indigo-500 to-violet-500"
  },
  {
    id: 3,
    name: "Sarah Jenkins",
    designation: "Chief Technology Officer",
    company: "SaaSify Inc.",
    stars: 5,
    quote: "The AI Code Evaluator gave our students immediate feedback during coding practice. Our mentors could focus their weekly reviews on architecture instead of style corrections. Exceptional SaaS training product.",
    avatarText: "SJ",
    avatarBg: "from-violet-500 to-fuchsia-500"
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const setSlide = (idx: number) => {
    setDirection(idx > currentIndex ? 1 : -1);
    setCurrentIndex(idx);
  };

  const current = TESTIMONIALS[currentIndex];

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0
    })
  };

  return (
    <section id="testimonials" className="py-24 bg-white dark:bg-slate-950 scroll-mt-20 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-indigo-100/20 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full bg-violet-100/10 blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="primary" className="mb-4">
            <MessageSquare className="w-3.5 h-3.5 text-indigo-650 shrink-0" />
            Client Reviews
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Loved by L&D and Engineering Leads
          </h2>
          <p className="mt-4 text-slate-500 dark:text-slate-400 font-semibold text-sm sm:text-base">
            Read how global engineering organizations leverage Accredian to hit capability metrics.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative min-h-[380px] sm:min-h-[340px] flex items-center justify-center">
          
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={current.id}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="w-full"
            >
              <Card className="glass-card p-8 sm:p-12 border-indigo-100/50 dark:border-slate-700/50 shadow-xl flex flex-col justify-between relative bg-white/70 dark:bg-slate-800/70">
                {/* Large Quote Mark */}
                <div className="absolute top-6 right-8 text-indigo-50/70 select-none">
                  <Quote className="w-16 h-16 transform rotate-180" />
                </div>

                <div className="space-y-6 relative z-10">
                  {/* Rating Stars */}
                  <div className="flex gap-1.5 text-amber-400">
                    {Array.from({ length: current.stars }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-lg sm:text-xl text-slate-700 dark:text-slate-200 leading-relaxed font-semibold italic">
                    "{current.quote}"
                  </p>

                  <div className="w-full border-t border-slate-100/80 dark:border-slate-700/80 my-4" />

                  {/* Profile info */}
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-tr ${current.avatarBg} text-white font-extrabold flex items-center justify-center shadow-md shrink-0 text-sm`}>
                      {current.avatarText}
                    </div>
                    <div>
                      <h4 className="font-extrabold text-slate-900 dark:text-white text-base sm:text-lg">
                        {current.name}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-500 font-semibold mt-0.5">
                        {current.designation} <span className="text-indigo-600 font-extrabold">@ {current.company}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Left Arrow Button */}
          <button
            onClick={prevSlide}
            className="absolute left-0 lg:-left-16 top-1/2 -translate-y-1/2 p-3 rounded-full border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 backdrop-blur text-slate-600 dark:text-slate-300 hover:text-indigo-600 shadow-md hover:shadow-lg transition-all duration-200 translate-x-2 lg:translate-x-0 cursor-pointer"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={nextSlide}
            className="absolute right-0 lg:-right-16 top-1/2 -translate-y-1/2 p-3 rounded-full border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 backdrop-blur text-slate-600 dark:text-slate-300 hover:text-indigo-600 shadow-md hover:shadow-lg transition-all duration-200 -translate-x-2 lg:-translate-x-0 cursor-pointer"
            aria-label="Next Testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center gap-2.5 mt-8">
          {TESTIMONIALS.map((t, idx) => (
            <button
              key={t.id}
              onClick={() => setSlide(idx)}
              className={`w-3.5 h-3.5 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === idx 
                  ? "bg-indigo-600 w-8" 
                  : "bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
