"use client";

import { Marquee } from "@/components/ui/Marquee";
import { Card } from "@/components/ui/Card";
import { ShieldCheck } from "lucide-react";

const COMPANIES = [
  {
    name: "Google",
    industry: "Technology & AI",
    logoColor: "text-blue-500",
    logoSvg: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
      </svg>
    )
  },
  {
    name: "Microsoft",
    industry: "Cloud & Software",
    logoColor: "text-slate-800",
    logoSvg: (
      <svg className="w-6 h-6" viewBox="0 0 23 23" fill="currentColor">
        <rect x="0" y="0" width="11" height="11" fill="#F25022" />
        <rect x="12" y="0" width="11" height="11" fill="#7FBA00" />
        <rect x="0" y="12" width="11" height="11" fill="#00A1F1" />
        <rect x="12" y="12" width="11" height="11" fill="#FFB900" />
      </svg>
    )
  },
  {
    name: "Amazon",
    industry: "Retail & Cloud",
    logoColor: "text-amber-500",
    logoSvg: (
      <svg className="w-8 h-6 fill-slate-900" viewBox="0 0 24 24">
        <path d="M11.967 15.688c-1.396.115-2.932.327-3.957.942-1.026.615-1.457 1.48-1.457 2.404 0 1.557 1.252 2.5 3.344 2.5 1.956 0 3.23-.98 3.99-2.316h.102v1.942h3.585V14.15c0-3.32-1.99-4.857-5.59-4.857-3.128 0-5.69 1.147-5.918 3.668h3.693c.123-1.003.882-1.414 2.174-1.414 1.354 0 1.954.595 1.954 1.968v1.085c-1.027-.08-2.6-.08-3.926.088zm.677-2.378c1.806 0 2.585.553 2.585 1.967v.512c-.595.84-1.6 1.455-2.73 1.455-1.127 0-1.743-.512-1.743-1.413 0-.964.677-2.52 3.888-2.52zM21.5 22.3s-1.8 1.4-5 1.4c-4.3 0-7.8-2.9-7.8-7.7 0-5.4 4.3-8.8 8.8-8.8 2.2 0 4.1.7 4.7 1.3l-1.3 2.7c-.5-.4-1.6-1-3.1-1-3.2 0-5.4 2.4-5.4 5.8 0 3.3 2 5.2 4.9 5.2 2.1 0 3.3-.8 3.8-1.2l.4 2.3z" />
        <path d="M1.5 20.8s8.5 5 19.5 1.5c1.4-.4 2.5-1.2 2.5-1.2s-1.3 1.3-3.4 1.8c-10 2.2-17-1.8-18.6-2.1z" fill="#FF9900" />
      </svg>
    )
  },
  {
    name: "Meta",
    industry: "Social Media & VR",
    logoColor: "text-blue-600",
    logoSvg: (
      <svg className="w-8 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16.5 6a5.5 5.5 0 0 0-4.14 1.89L12 8.28l-.36-.39A5.5 5.5 0 0 0 7.5 6c-3 0-5.5 2.5-5.5 5.5S4.5 17 7.5 17a5.5 5.5 0 0 0 4.14-1.89l.36-.39.36.39A5.5 5.5 0 0 0 16.5 17c3 0 5.5-2.5 5.5-5.5S19.5 6 16.5 6zm-9 9c-1.93 0-3.5-1.57-3.5-3.5S5.57 8 7.5 8a3.5 3.5 0 0 1 2.62 1.2l-2.62 2.62a1.25 1.25 0 0 0 1.77 1.77l2.62-2.62A3.5 3.5 0 0 1 7.5 15zm9 0a3.5 3.5 0 0 1-2.62-1.2l2.62-2.62a1.25 1.25 0 0 0-1.77-1.77l-2.62 2.62A3.5 3.5 0 0 1 16.5 8c1.93 0 3.5 1.57 3.5 3.5S18.43 15 16.5 15z" fill="#0064E0"/>
      </svg>
    )
  },
  {
    name: "Netflix",
    industry: "Entertainment",
    logoColor: "text-rose-600",
    logoSvg: (
      <svg className="w-6 h-6 fill-red-600" viewBox="0 0 24 24">
        <path d="M5.59 21.36V2.64C7 2.45 8.44 2.29 9.87 2.15v18.9c-1.43.1-2.85.2-4.28.31zM18.41 2.64v18.72c-1.42.14-2.85.25-4.28.38V2.9c1.42-.1 2.85-.18 4.28-.26z" />
        <path d="M9.87 2.15l8.54 19.21c-1.43.15-2.86.32-4.28.5L5.59 2.64c1.42-.2 2.85-.35 4.28-.49z" />
      </svg>
    )
  },
  {
    name: "Stripe",
    industry: "Fintech & Payments",
    logoColor: "text-indigo-600",
    logoSvg: (
      <svg className="w-6 h-6 fill-indigo-600" viewBox="0 0 24 24">
        <path d="M13.962 10.3c0-1.13-.949-1.5-2.436-1.5-1.554 0-2.822.42-3.83 1.01V5.772C8.75 5.378 10.198 5 11.758 5c3.8 0 6.275 1.838 6.275 5.252 0 4.148-5.69 4.885-5.69 6.346 0 1.258 1.134 1.637 2.766 1.637 1.83 0 3.242-.515 4.238-1.127V21.2c-1.144.493-2.735.8-4.32.8-3.978 0-6.666-1.92-6.666-5.32 0-4.382 5.601-5.074 5.601-6.38z" />
      </svg>
    )
  },
  {
    name: "Salesforce",
    industry: "CRM & SaaS",
    logoColor: "text-sky-500",
    logoSvg: (
      <svg className="w-7 h-6 fill-sky-400" viewBox="0 0 24 24">
        <path d="M12 2C9.07 2 6.55 3.88 5.48 6.54a5.32 5.32 0 0 0-1.89-.34C1.61 6.2 0 7.81 0 9.8c0 1.88 1.45 3.42 3.28 3.58.26 1.84 1.84 3.25 3.75 3.25.99 0 1.89-.37 2.58-.97a5.95 5.95 0 0 0 4.78 1.34c2.51 0 4.67-1.63 5.45-3.92 1.23-.27 2.16-1.37 2.16-2.68 0-1.13-.68-2.1-1.66-2.52C19.78 4.7 16.2 2 12 2z" />
      </svg>
    )
  }
];

export function TrustedCompanies() {
  return (
    <section id="partners" className="py-20 bg-slate-50 dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800 scroll-mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/50 dark:bg-slate-800/50 border border-slate-300/30 dark:border-slate-700/30 text-slate-600 dark:text-slate-300 text-xs font-bold uppercase tracking-wider mb-4">
          <ShieldCheck className="w-3.5 h-3.5 text-indigo-600" />
          Industry Partners
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800 dark:text-white tracking-tight">
          Trusted by Industry Leaders Worldwide
        </h2>
        <p className="mt-2 text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
          We train teams from leading startups and Fortune 500 enterprises.
        </p>
      </div>

      <div className="w-full relative">
        {/* Left Fading Gradient Overlay */}
        <div className="absolute top-0 left-0 bottom-0 w-24 sm:w-48 bg-gradient-to-r from-slate-50 dark:from-slate-900 to-transparent z-10 pointer-events-none" />
        
        {/* Infinite Scrolling Marquee */}
        <Marquee speed={35} pauseOnHover className="py-4">
          {COMPANIES.map((company) => (
            <Card
              key={company.name}
              hoverEffect={false}
              className="flex items-center gap-4 py-4 px-6 min-w-[240px] bg-white dark:bg-slate-800 border-slate-200/60 dark:border-slate-700/60 rounded-2xl shadow-sm cursor-default select-none shrink-0"
            >
              <div className="flex-shrink-0">
                {company.logoSvg}
              </div>
              <div className="text-left">
                <h4 className="font-extrabold text-slate-800 dark:text-white text-base leading-none">
                  {company.name}
                </h4>
                <span className="text-xs text-slate-400 font-semibold mt-1.5 block">
                  {company.industry}
                </span>
              </div>
            </Card>
          ))}
        </Marquee>

        {/* Right Fading Gradient Overlay */}
        <div className="absolute top-0 right-0 bottom-0 w-24 sm:w-48 bg-gradient-to-l from-slate-50 dark:from-slate-900 to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
}
