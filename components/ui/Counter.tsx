"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { useCountUp } from "@/hooks/useCountUp";

interface CounterProps {
  value: number;
  duration?: number;
  suffix?: string;
  className?: string;
}

export function Counter({ value, duration = 1500, suffix = "", className = "" }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const count = useCountUp(value, duration, isInView);

  return (
    <span ref={ref} className={className}>
      {count}
      {suffix}
    </span>
  );
}
