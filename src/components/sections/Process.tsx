import { Search, Palette, Code, Rocket } from "lucide-react";
import SectionTag from "@/components/ui/SectionTag";

const steps = [
  {
    icon: Search,
    title: "Discovery",
    description: "We understand your goals, audience, and requirements.",
  },
  {
    icon: Palette,
    title: "Design",
    description: "Clean UI/UX tailored to your brand and users.",
  },
  {
    icon: Code,
    title: "Build",
    description: "Production-grade code with modern frameworks.",
  },
  {
    icon: Rocket,
    title: "Launch",
    description: "Deployed, tested, and ready for growth.",
  },
];

export default function Process() {
  return (
    <section className="py-24 bg-surface" id="process">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <SectionTag>Our Process</SectionTag>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-dark">
            How We Work
          </h2>
        </div>

        {/* Steps */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step.title} className="relative text-center">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-px bg-border" />
              )}

              {/* Icon */}
              <div className="relative z-10 mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-white border border-border shadow-sm">
                <step.icon className="h-8 w-8 text-accent stroke-[1.5]" />
              </div>

              {/* Number */}
              <span className="text-xs font-bold text-accent tracking-wider">
                Step 0{i + 1}
              </span>

              {/* Content */}
              <h3 className="mt-2 text-lg font-bold text-primary-dark">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-text-secondary leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
