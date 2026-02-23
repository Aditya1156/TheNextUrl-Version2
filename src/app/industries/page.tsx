import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
    title: "Schools & Colleges",
    image: "/images/school.jpg",
    description:
      "Complete digital management systems for educational institutions. From student enrollment to result publication.",
    solutions: ["Student ERP", "Fee Management", "Attendance System", "Exam Portal"],
    href: "/services/school-erp-development",
  },
  {
    title: "Coaching Institutes",
    image: "/images/office-meeting.jpg",
    description:
      "Online learning platforms, batch management, student progress tracking, and automated fee reminders.",
    solutions: ["LMS Platform", "Batch Management", "Progress Reports", "Fee Reminders"],
    href: "/contact",
  },
  {
    title: "Local Businesses",
    image: "/images/consultation.jpg",
    description:
      "Professional websites, Google presence, booking systems, and digital catalogs to grow your local business.",
    solutions: ["Business Website", "Google My Business", "Booking System", "Digital Catalog"],
    href: "/services/website-design-karnataka",
  },
  {
    title: "Startups",
    image: "/images/startup.jpg",
    description:
      "MVPs, web applications, and scalable architecture to validate your idea and grow fast.",
    solutions: ["MVP Development", "Web Application", "Landing Pages", "API Development"],
    href: "/contact",
  },
  {
    title: "Restaurants & Hospitality",
    image: "/images/restaurant.jpg",
    description:
      "POS systems, online ordering, table reservations, and menu management for modern restaurants.",
    solutions: ["POS System", "Online Ordering", "Menu Management", "Table Booking"],
    href: "/contact",
  },
  {
    title: "Enterprises",
    image: "/images/enterprise.jpg",
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
      <section className="relative pt-32 pb-16 bg-primary-dark overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/enterprise.jpg" alt="" fill className="object-cover" />
          <div className="absolute inset-0 bg-primary-dark/85" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <SectionTag>Industries</SectionTag>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Built for Your Industry
          </h1>
          <p className="text-base text-slate-400 max-w-lg mx-auto">
            Specialized digital solutions tailored to your sector.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((item) => (
              <div
                key={item.title}
                className="group rounded-xl border border-border overflow-hidden hover-lift"
              >
                {/* Image */}
                <div className="aspect-[16/9] relative overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-base font-semibold text-primary-dark mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {item.solutions.map((s) => (
                      <span
                        key={s}
                        className="rounded-md bg-surface px-2.5 py-1 text-[11px] font-medium text-text-secondary"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-accent hover:text-accent-dark transition-colors"
                  >
                    Learn More
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
