import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import SectionTag from "@/components/ui/SectionTag";

interface ServicePageProps {
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  image?: string;
  features: { title: string; description: string }[];
  benefits: string[];
  pricing: { label: string; price: string }[];
  faqs: { q: string; a: string }[];
}

export default function ServicePageLayout({
  tag,
  title,
  subtitle,
  description,
  image,
  features,
  benefits,
  pricing,
  faqs,
}: ServicePageProps) {
  return (
    <>
      {/* Header */}
      <section className="relative pt-32 pb-16 bg-primary-dark overflow-hidden">
        <div className="absolute inset-0">
          <Image src={image || "/images/office-meeting.jpg"} alt="" fill className="object-cover" />
          <div className="absolute inset-0 bg-primary-dark/85" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <SectionTag>{tag}</SectionTag>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              {title}
            </h1>
            <p className="text-base text-slate-400 mb-8">{subtitle}</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-dark"
            >
              Get Free Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-lg text-text-secondary leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTag>Features</SectionTag>
          <h2 className="text-3xl font-bold text-primary-dark mb-12">
            What&apos;s Included
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl bg-white border border-border p-6"
              >
                <h3 className="text-base font-bold text-primary-dark mb-2">
                  {f.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionTag>Benefits</SectionTag>
              <h2 className="text-3xl font-bold text-primary-dark mb-8">
                Why Choose This Solution
              </h2>
              <ul className="space-y-4">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded bg-accent/10 text-accent">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-text-secondary">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden relative">
              <Image
                src={image || "/images/office-meeting.jpg"}
                alt={title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-primary-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <SectionTag>Investment</SectionTag>
          <h2 className="text-3xl font-bold text-white mb-12">
            Pricing
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-3xl mx-auto">
            {pricing.map((p) => (
              <div
                key={p.label}
                className="rounded-2xl bg-white/5 border border-white/10 p-6 text-center"
              >
                <p className="text-sm text-slate-400 mb-2">{p.label}</p>
                <p className="text-2xl font-bold text-accent">{p.price}</p>
              </div>
            ))}
          </div>
          <Link
            href="/contact"
            className="mt-10 inline-flex items-center gap-2 rounded-lg bg-accent px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-accent-dark"
          >
            Get Detailed Quote
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionTag>FAQ</SectionTag>
            <h2 className="text-3xl font-bold text-primary-dark">
              Common Questions
            </h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-b border-border pb-6">
                <h3 className="text-base font-semibold text-primary-dark mb-2">
                  {faq.q}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary-dark mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-text-secondary mb-8">
            Free consultation. No obligations. Let&apos;s discuss your project.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-4 text-base font-semibold text-white transition-all hover:bg-accent-dark"
          >
            Schedule Free Consultation
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
