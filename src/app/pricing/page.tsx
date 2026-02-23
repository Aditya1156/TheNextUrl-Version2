import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import SectionTag from "@/components/ui/SectionTag";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for website development, ERP systems, mobile apps, and custom software. Starting from ₹14,999.",
};

const plans = [
  {
    name: "Starter",
    price: "₹14,999",
    suffix: "onwards",
    description: "Perfect for small businesses and personal brands.",
    features: [
      "Responsive website (up to 5 pages)",
      "Mobile-first design",
      "Basic SEO setup",
      "Contact form integration",
      "1 month free support",
      "SSL certificate",
    ],
    highlighted: false,
  },
  {
    name: "Professional",
    price: "₹40,000",
    suffix: "onwards",
    description: "For growing businesses and institutions.",
    features: [
      "Custom web application or ERP",
      "Admin dashboard",
      "Database integration",
      "Payment gateway setup",
      "Advanced SEO optimization",
      "3 months free support",
      "Performance optimization",
      "User authentication",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    suffix: "quote",
    description: "For large-scale systems and complex requirements.",
    features: [
      "Full-stack custom software",
      "Mobile app (Android + iOS)",
      "Multi-branch support",
      "API development",
      "Cloud deployment",
      "12 months AMC included",
      "Priority support",
      "Dedicated project manager",
    ],
    highlighted: false,
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-primary-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <SectionTag>Pricing</SectionTag>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Transparent Pricing
          </h1>
          <p className="text-lg text-slate-300 max-w-xl mx-auto">
            No hidden costs. Clear scope. Choose what fits your needs.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-8 ${
                  plan.highlighted
                    ? "bg-primary-dark text-white border-2 border-accent shadow-xl scale-[1.02]"
                    : "bg-white border border-border"
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-xs font-bold text-white">
                    Most Popular
                  </span>
                )}

                <h3
                  className={`text-lg font-bold mb-1 ${
                    plan.highlighted ? "text-white" : "text-primary-dark"
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm mb-6 ${
                    plan.highlighted ? "text-slate-300" : "text-text-secondary"
                  }`}
                >
                  {plan.description}
                </p>

                <div className="mb-8">
                  <span
                    className={`text-4xl font-bold ${
                      plan.highlighted ? "text-accent" : "text-primary-dark"
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`text-sm ml-1 ${
                      plan.highlighted ? "text-slate-400" : "text-text-light"
                    }`}
                  >
                    {plan.suffix}
                  </span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <Check
                        className={`h-4 w-4 mt-0.5 shrink-0 ${
                          plan.highlighted ? "text-accent" : "text-accent"
                        }`}
                      />
                      <span
                        className={
                          plan.highlighted ? "text-slate-200" : "text-text-secondary"
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-all ${
                    plan.highlighted
                      ? "bg-accent text-white hover:bg-accent-dark"
                      : "bg-primary-dark text-white hover:bg-primary"
                  }`}
                >
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>

          {/* Note */}
          <p className="text-center text-sm text-text-light mt-12">
            All prices are starting ranges. Final pricing depends on project
            scope and complexity. Contact us for a detailed quote.
          </p>
        </div>
      </section>
    </>
  );
}
