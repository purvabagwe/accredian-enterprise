"use client";

import { useState } from "react";
import { GraduationCap, Send, Check } from "lucide-react";
import { FaLinkedin, FaGithub, FaYoutube, FaXTwitter } from "react-icons/fa6";
import { AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";

const FOOTER_LINKS = {
  solutions: [
    { label: "Leadership Cohorts", href: "#solutions" },
    { label: "Technical Upskilling", href: "#solutions" },
    { label: "AI & ML Programs", href: "#solutions" },
    { label: "Cloud Certifications", href: "#solutions" }
  ],
  resources: [
    { label: "Capability Syllabus", href: "#solutions" },
    { label: "Client Case Studies", href: "#testimonials" },
    { label: "Platform Documentation", href: "#faq" },
    { label: "Capability Blogs", href: "#home" }
  ],
  company: [
    { label: "About Accredian", href: "#home" },
    { label: "Partners Ecosystem", href: "#partners" },
    { label: "Learning Framework", href: "#learning-framework" },
    { label: "Support & FAQs", href: "#faq" }
  ]
};

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail("");
    }, 2500);
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 py-16 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Column 1: Logo, Brand Text, Socials */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <a href="#home" className="flex items-center gap-2 group mb-6">
              <div className="p-2 rounded-lg bg-indigo-600 text-white shadow-md shadow-indigo-600/10 group-hover:scale-105 transition-transform duration-300">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-lg tracking-tight text-white">
                accredian<span className="text-indigo-500">.</span>
              </span>
            </a>
            <p className="text-sm font-semibold text-slate-400 max-w-sm leading-relaxed mb-6">
              Accredian is a premier corporate training SaaS helping technology firms upskill engineers, track growth diagnostics, and secure industry-recognized certifications.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              {[
                { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: FaXTwitter, href: "https://twitter.com", label: "Twitter" },
                { icon: FaGithub, href: "https://github.com", label: "GitHub" },
                { icon: FaYoutube, href: "https://youtube.com", label: "YouTube" }
              ].map((soc) => {
                const Icon = soc.icon;
                return (
                  <a
                    key={soc.label}
                    href={soc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-850 hover:bg-indigo-650 hover:text-white border border-slate-800 hover:border-indigo-600 transition-all duration-300"
                    aria-label={soc.label}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Solutions Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-extrabold text-white uppercase tracking-wider mb-5">Solutions</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.solutions.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm font-semibold text-slate-400 hover:text-white transition-colors duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company & Resources */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-extrabold text-white uppercase tracking-wider mb-5">Company</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm font-semibold text-slate-400 hover:text-white transition-colors duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <h4 className="text-xs font-extrabold text-white uppercase tracking-wider mb-5">Subscribe to Updates</h4>
            <p className="text-sm font-semibold text-slate-400 mb-4 max-w-sm">
              Receive quarterly insights into tech capability shifting, case studies, and engineering updates.
            </p>
            
            <form onSubmit={handleSubscribe} className="relative w-full max-w-md">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Work email address"
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-650 text-sm font-semibold transition-all pr-12"
              />
              <button
                type="submit"
                className="absolute right-1.5 top-1.5 bottom-1.5 p-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white transition-colors duration-200 cursor-pointer"
                aria-label="Subscribe"
              >
                {subscribed ? <Check className="w-4 h-4" /> : <Send className="w-4 h-4" />}
              </button>
            </form>

            <AnimatePresence>
              {subscribed && (
                <span className="text-xs font-bold text-emerald-400 mt-2 block">
                  Successfully subscribed!
                </span>
              )}
            </AnimatePresence>
          </div>

        </div>

        <div className="w-full border-t border-slate-800/80 my-10" />

        {/* Bottom Section: Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-semibold text-slate-500">
            © {new Date().getFullYear()} Accredian Corp. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#home" className="text-xs font-semibold text-slate-500 hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#home" className="text-xs font-semibold text-slate-500 hover:text-slate-400 transition-colors">Terms of Service</a>
            <a href="#home" className="text-xs font-semibold text-slate-500 hover:text-slate-400 transition-colors">Cookie Prefs</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
