import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 bg-primary-dark">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Ready to Build Your Digital Foundation?
        </h2>
        <p className="text-base text-slate-400 mb-10 max-w-lg mx-auto">
          Let&apos;s discuss your project. Free consultation. No obligations.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-lg bg-accent px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-accent-dark"
        >
          Schedule Free Consultation
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
