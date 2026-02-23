"use client";

import { Briefcase, ThumbsUp, Headphones, Shield } from "lucide-react";

const stats = [
  {
    icon: Briefcase,
    value: "9+",
    label: "Projects Delivered",
  },
  {
    icon: ThumbsUp,
    value: "100%",
    label: "Client Satisfaction",
  },
  {
    icon: Headphones,
    value: "24/7",
    label: "Support Available",
  },
  {
    icon: Shield,
    value: "100%",
    label: "Production-Grade Security",
  },
];

export default function Results() {
  return (
    <section className="py-20 bg-primary-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5">
                <stat.icon className="h-7 w-7 text-accent stroke-[1.5]" />
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
