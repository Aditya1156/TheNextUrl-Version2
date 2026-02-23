import Link from "next/link";
import {
  GraduationCap,
  BookOpen,
  Store,
  Rocket,
  UtensilsCrossed,
  Building2,
  ArrowRight,
} from "lucide-react";
import SectionTag from "@/components/ui/SectionTag";
import CTA from "@/components/sections/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "Digital solutions for schools, colleges, restaurants, startups, local businesses, and enterprises across India.",
};

const industries = [
  {
    icon: GraduationCap,
    title: "Schools & Colleges",
    description:
      "Complete digital management systems for educational institutions. From student enrollment to result publication — everything automated.",
    solutions: ["Student ERP", "Fee Management", "Attendance System", "Exam Portal"],
    href: "/services/school-erp-development",
  },
  {
    icon: BookOpen,
    title: "Coaching Institutes",
    description:
      "Online learning platforms, batch management, student progress tracking, and automated fee reminders.",
    solutions: ["LMS Platform", "Batch Management", "Progress Reports", "Fee Reminders"],
    href: "/contact",
  },
  {
    icon: Store,
    title: "Local Businesses",
    description:
      "Professional websites, Google presence, booking systems, and digital catalogs to grow your local business.",
    solutions: ["Business Website", "Google My Business", "Booking System", "Digital Catalog"],
    href: "/services/website-design-karnataka",
  },
  {
    icon: Rocket,
    title: "Startups",
    description:
      "MVPs, web applications, and scalable architecture to validate your idea and grow fast.",
    solutions: ["MVP Development", "Web Application", "Landing Pages", "API Development"],
    href: "/contact",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurants & Hospitality",
    description:
      "POS systems, online ordering, table reservations, and menu management for modern restaurants.",
    solutions: ["POS System", "Online Ordering", "Menu Management", "Table Booking"],
    href: "/contact",
  },
  {
    icon: Building2,
    title: "Enterprises",
    description:
      "Custom enterprise software, dashboards, workflow automation, and multi-location management.",
    solutions: ["Custom Software", "Admin Dashboard", "Workflow Automation", "Multi-branch System"],
    href: "/services/admin-dashboard-development",
  },
];

export default function IndustriesPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-primary-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <SectionTag>Industries</SectionTag>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Built for Your Industry
          </h1>
          <p className="text-lg text-slate-300 max-w-xl mx-auto">
            Specialized digital solutions tailored to your sector.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl border border-border p-8 hover-lift"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-surface text-primary-dark transition-colors group-hover:bg-accent group-hover:text-white">
                  <item.icon className="h-7 w-7 stroke-[1.5]" />
                </div>

                <h3 className="text-xl font-bold text-primary-dark mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-5">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {item.solutions.map((s) => (
                    <span
                      key={s}
                      className="rounded-full bg-surface px-3 py-1 text-xs font-medium text-text-secondary"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-accent hover:text-accent-dark transition-colors"
                >
                  Learn More
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
