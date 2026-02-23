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
        <div className="text-center mb-16">
          <SectionTag>What We Build</SectionTag>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-dark">
            Scalable Digital Solutions
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((item) => (
            <Link
              key={item.number}
              href={item.href}
              className="group rounded-xl border border-border p-7 transition-colors hover:border-accent/30 hover:bg-accent/[0.02]"
            >
              <span className="text-[11px] font-semibold text-text-light tracking-wider">
                {item.number}
              </span>

              <div className="mt-4 mb-4">
                <item.icon className="h-8 w-8 text-accent stroke-[1.5]" />
              </div>

              <h3 className="text-base font-semibold text-primary-dark mb-1.5">
                {item.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {item.description}
              </p>

              <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-accent opacity-0 transition-opacity group-hover:opacity-100">
                Learn more
                <ArrowRight className="h-3 w-3" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
