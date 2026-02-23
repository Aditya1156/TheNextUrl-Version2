"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-primary-dark">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Team collaborating in modern office"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary-dark/80" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-2xl">
          <p className="text-sm font-medium tracking-widest text-accent uppercase mb-6">
            Digital Agency
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.15] mb-6">
            Digital Infrastructure for Institutions &{" "}
            <span className="text-accent">Businesses</span>
          </h1>

          <p className="text-base text-slate-400 leading-relaxed mb-10 max-w-lg">
            Websites. ERP Systems. Booking Platforms. Mobile Apps.
            Built with precision. Designed to scale.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-14">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-dark"
            >
              Get Free Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-white/30"
            >
              View Solutions
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-500">
            <span className="flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-accent" />
              MSME Registered
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-accent" />
              Built with Next.js
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-accent" />
              Serving Clients Across India
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
