import Link from "next/link";
import { Globe, Database, ShoppingCart, Smartphone, ArrowRight } from "lucide-react";
import SectionTag from "@/components/ui/SectionTag";

const solutions = [
  {
    number: "01",
    icon: Globe,
    title: "Modern Web Architecture",
    description: "Fast. SEO-optimized. Mobile-first.",
    href: "/services/website-design-karnataka",
  },
  {
    number: "02",
    icon: Database,
    title: "ERP & Management Systems",
    description: "Attendance. Fees. Payroll. Automation.",
    href: "/services/school-erp-development",
  },
  {
    number: "03",
    icon: ShoppingCart,
    title: "E-Commerce & Booking Platforms",
    description: "Sell online. Take bookings. Manage operations.",
    href: "/services/ecommerce-development",
  },
  {
    number: "04",
    icon: Smartphone,
    title: "Cross-Platform Mobile Apps",
    description: "Android & iOS from a single codebase.",
    href: "/services/mobile-app-development",
  },
];

export default function Solutions() {
  return (
    <section className="py-24 bg-white" id="solutions">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <SectionTag>What We Build</SectionTag>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-dark">
            Scalable Digital Solutions
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((item) => (
            <Link
              key={item.number}
              href={item.href}
              className="group rounded-2xl border border-border bg-white p-8 hover-lift"
            >
              {/* Number */}
              <span className="text-xs font-bold text-accent tracking-wider">
                {item.number}
              </span>

              {/* Icon */}
              <div className="mt-4 mb-5">
                <item.icon className="h-10 w-10 text-primary-dark stroke-[1.5] transition-colors group-hover:text-accent" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-primary-dark mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-4">
                {item.description}
              </p>

              {/* Arrow */}
              <span className="inline-flex items-center gap-1 text-sm font-medium text-accent opacity-0 transition-opacity group-hover:opacity-100">
                Learn more
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
