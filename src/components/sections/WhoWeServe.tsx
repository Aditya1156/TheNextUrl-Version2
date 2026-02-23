import {
  GraduationCap,
  BookOpen,
  Store,
  Rocket,
  UtensilsCrossed,
  Building2,
} from "lucide-react";
import SectionTag from "@/components/ui/SectionTag";

const industries = [
  {
    icon: GraduationCap,
    title: "Schools & Colleges",
    description: "ERP systems, portals, and digital management.",
  },
  {
    icon: BookOpen,
    title: "Coaching Institutes",
    description: "Online learning, attendance, and fee management.",
  },
  {
    icon: Store,
    title: "Local Businesses",
    description: "Websites, booking systems, and digital presence.",
  },
  {
    icon: Rocket,
    title: "Startups",
    description: "MVPs, web apps, and scalable architecture.",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurants & Hospitality",
    description: "POS, ordering systems, and online menus.",
  },
  {
    icon: Building2,
    title: "Enterprises",
    description: "Custom software, dashboards, and automation.",
  },
];

export default function WhoWeServe() {
  return (
    <section className="py-24 bg-surface" id="industries">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <SectionTag>Who We Serve</SectionTag>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-dark">
            Built for Your Industry
          </h2>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((item) => (
            <div
              key={item.title}
              className="group flex items-start gap-5 rounded-2xl bg-white p-6 border border-border hover-lift"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-surface text-primary-dark transition-colors group-hover:bg-accent group-hover:text-white">
                <item.icon className="h-6 w-6 stroke-[1.5]" />
              </div>
              <div>
                <h3 className="text-base font-bold text-primary-dark mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
