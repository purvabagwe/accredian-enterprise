"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "glass" | "glass-dark" | "default";
  hoverEffect?: boolean;
  animate?: boolean;
  delay?: number;
}

export function Card({
  className,
  variant = "glass",
  hoverEffect = true,
  animate = false,
  delay = 0,
  children,
  ...props
}: CardProps) {
  const baseStyles = "rounded-2xl p-6 border transition-all duration-300";
  
  const variants = {
    glass: "glass-card",
    "glass-dark": "glass-panel-dark text-slate-100 border-white/5",
    default: "bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 shadow-sm"
  };

  const hoverStyles = hoverEffect && variant === "glass" 
    ? "hover:border-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/5 hover:-translate-y-1"
    : hoverEffect && variant === "glass-dark"
    ? "hover:border-violet-500/40 hover:shadow-2xl hover:shadow-violet-500/10 hover:-translate-y-1"
    : hoverEffect
    ? "hover:shadow-md hover:-translate-y-1"
    : "";

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay }}
        className={cn(baseStyles, variants[variant], hoverStyles, className)}
        {...(props as any)}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div
      className={cn(baseStyles, variants[variant], hoverStyles, className)}
      {...props}
    >
      {children}
    </div>
  );
}
