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
          {/* Left - Image with overlay card (Nexbiz style) */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden relative">
              <Image
                src="/images/team-working.jpg"
                alt="Expert team collaborating on digital solutions"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating card overlay */}
            <div className="absolute -bottom-6 -left-6 rounded-xl bg-accent p-6 max-w-[220px] shadow-xl hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
                  <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25A2.25 2.25 0 015.25 3h13.5A2.25 2.25 0 0121 5.25z" />
                  </svg>
                </div>
                <span className="text-sm font-semibold text-white">
                  IT Solutions For The Modern Workplace.
                </span>
              </div>
            </div>
            {/* Decorative circle */}
            <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full border-2 border-accent/20 hidden lg:block" />
          </div>

          {/* Right - Content */}
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

            {/* Checklist */}
            <ul className="space-y-4">
              {differentiators.map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded bg-accent/10 text-accent">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <div>
                    <span className="font-semibold text-primary-dark">
                      {item.title}
                    </span>
                    <span className="text-text-secondary"> — {item.description}</span>
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
