import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 bg-primary-dark relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent/5 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/2" />

      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to Build Your Digital Foundation?
        </h2>
        <p className="text-lg text-slate-300 mb-10 max-w-xl mx-auto">
          Let&apos;s discuss your project. Free consultation. No obligations.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-4 text-base font-semibold text-white transition-all hover:bg-accent-dark hover:shadow-lg hover:shadow-accent/25"
        >
          Schedule Free Consultation
          <ArrowRight className="h-5 w-5" />
        </Link>
      </div>
    </section>
  );
}
