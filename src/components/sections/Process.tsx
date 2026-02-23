import { Search, Palette, Code, Rocket } from "lucide-react";
import SectionTag from "@/components/ui/SectionTag";

const steps = [
  { icon: Search, title: "Discovery", description: "We understand your goals, audience, and requirements." },
  { icon: Palette, title: "Design", description: "Clean UI/UX tailored to your brand and users." },
  { icon: Code, title: "Build", description: "Production-grade code with modern frameworks." },
  { icon: Rocket, title: "Launch", description: "Deployed, tested, and ready for growth." },
];

export default function Process() {
  return (
    <section className="py-24 bg-surface" id="process">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionTag>Our Process</SectionTag>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-dark">
            How We Work
          </h2>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step.title} className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-white border border-border">
                <step.icon className="h-6 w-6 text-accent stroke-[1.5]" />
              </div>
              <p className="text-[11px] font-medium text-text-light tracking-wider uppercase mb-1">
                Step 0{i + 1}
              </p>
              <h3 className="text-base font-semibold text-primary-dark mb-1">
                {step.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
