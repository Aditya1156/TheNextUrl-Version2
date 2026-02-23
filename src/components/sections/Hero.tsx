"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play, Check } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-primary-dark">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Team collaborating in modern office"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary-dark/75" />
        {/* Decorative shapes */}
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full border border-white/5 animate-float" />
        <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full border border-accent/10 animate-float" style={{ animationDelay: "3s" }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          {/* Tag */}
          <span className="section-tag mb-6 inline-block">
            Modern Digital Agency
          </span>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Digital Infrastructure for Institutions &{" "}
            <span className="relative">
              <span className="accent-underline">Businesses</span>
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-xl">
            Websites. ERP Systems. Booking Platforms. Mobile Apps.
            <br />
            Built with precision. Designed to scale.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-accent-dark hover:shadow-lg hover:shadow-accent/25"
            >
              Get Free Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-accent"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-colors hover:border-accent">
                <Play className="h-4 w-4 ml-0.5" />
              </span>
              View Solutions
            </Link>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400">
            <span className="flex items-center gap-2">
              <Check className="h-4 w-4 text-accent" />
              MSME Registered
            </span>
            <span className="flex items-center gap-2">
              <Check className="h-4 w-4 text-accent" />
              Built with Next.js
            </span>
            <span className="flex items-center gap-2">
              <Check className="h-4 w-4 text-accent" />
              Serving Clients Across India
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
