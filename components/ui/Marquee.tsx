"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children: React.ReactNode;
  speed?: number; // speed in seconds
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = true,
  children,
  speed = 40,
}: MarqueeProps) {
  return (
    <div
      className={cn(
        "group flex overflow-hidden p-2 [--gap:1.5rem] [gap:var(--gap)] flex-row w-full",
        className
      )}
      style={{ "--duration": `${speed}s` } as React.CSSProperties}
    >
      <div
        className={cn(
          "flex shrink-0 justify-around [gap:var(--gap)] min-w-full flex-row items-stretch",
          reverse ? "animate-[marquee-reverse_var(--duration)_linear_infinite]" : "animate-[marquee_var(--duration)_linear_infinite]",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
      >
        {children}
      </div>
      <div
        aria-hidden
        className={cn(
          "flex shrink-0 justify-around [gap:var(--gap)] min-w-full flex-row items-stretch",
          reverse ? "animate-[marquee-reverse_var(--duration)_linear_infinite]" : "animate-[marquee_var(--duration)_linear_infinite]",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
      >
        {children}
      </div>
    </div>
  );
}
