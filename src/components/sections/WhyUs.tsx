import Image from "next/image";
import { Check } from "lucide-react";
import SectionTag from "@/components/ui/SectionTag";

const differentiators = [
  {
    title: "Built on Modern Stack",
    description: "Next.js, React, TypeScript, Cloud infrastructure.",
  },
  {
    title: "SEO & Performance First",
    description: "90+ Lighthouse scores. Core Web Vitals optimized.",
  },
  {
    title: "Secure by Default",
    description: "HTTPS, input validation, secure authentication.",
  },
  {
    title: "Transparent Pricing",
    description: "No hidden costs. Clear scope. Honest timelines.",
  },
  {
    title: "Long-Term Support",
    description: "Ongoing maintenance, AMC plans, and 24/7 assistance.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-24 bg-white" id="why-us">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Image */}
          <div className="aspect-[4/3] rounded-2xl overflow-hidden relative">
            <Image
              src="/images/team-working.jpg"
              alt="Expert team collaborating on digital solutions"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <SectionTag>Why Choose Us</SectionTag>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-dark mb-4">
              Expert and Reliable Team You Can Trust
            </h2>
            <p className="text-text-secondary leading-relaxed mb-8">
              We build scalable digital systems for institutions and businesses.
              Every project is engineered for performance, security, and
              long-term growth.
            </p>

            <ul className="space-y-4">
              {differentiators.map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <Check className="h-3 w-3" />
                  </span>
                  <div>
                    <span className="text-sm font-semibold text-primary-dark">
                      {item.title}
                    </span>
                    <span className="text-sm text-text-secondary">
                      {" "}&mdash; {item.description}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
