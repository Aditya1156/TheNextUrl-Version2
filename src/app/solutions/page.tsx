import Image from "next/image";
import Link from "next/link";
import {
  Globe,
  Database,
  ShoppingCart,
  Smartphone,
  LayoutDashboard,
  ArrowRight,
} from "lucide-react";
import SectionTag from "@/components/ui/SectionTag";
import CTA from "@/components/sections/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Web development, ERP systems, e-commerce platforms, mobile apps, and admin dashboards. Built with Next.js and modern technologies.",
};

const services = [
  {
    icon: Globe,
    title: "Website Development",
    image: "/images/coding.jpg",
    description:
      "Modern, fast, SEO-optimized websites built with Next.js. Mobile-first design. 90+ Lighthouse scores.",
    features: [
      "Responsive design",
      "SEO optimized",
      "Fast load times",
      "CMS integration",
    ],
    href: "/services/website-design-karnataka",
  },
  {
    icon: Database,
    title: "School & College ERP",
    image: "/images/school.jpg",
    description:
      "Complete management systems for educational institutions. Attendance, fees, exams, payroll — all automated.",
    features: [
      "Student management",
      "Fee collection",
      "Attendance tracking",
      "Report generation",
    ],
    href: "/services/school-erp-development",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Platforms",
    image: "/images/ecommerce.jpg",
    description:
      "Sell products online with custom storefronts, payment processing, inventory management, and order tracking.",
    features: [
      "Product catalog",
      "Payment gateway",
      "Order management",
      "Inventory tracking",
    ],
    href: "/services/ecommerce-development",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    image: "/images/mobile-app.jpg",
    description:
      "Cross-platform Android and iOS apps from a single codebase. Native performance with React Native.",
    features: [
      "Cross-platform",
      "Push notifications",
      "Offline support",
      "App store deployment",
    ],
    href: "/services/mobile-app-development",
  },
  {
    icon: LayoutDashboard,
    title: "Admin Dashboards",
    image: "/images/dashboard.jpg",
    description:
      "Powerful admin panels and dashboards for data management, analytics, and business operations.",
    features: [
      "Real-time analytics",
      "Role-based access",
      "Data visualization",
      "Export & reporting",
    ],
    href: "/services/admin-dashboard-development",
  },
];

export default function SolutionsPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-primary-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <SectionTag>Our Solutions</SectionTag>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Exploring Business World Through Our Services
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            End-to-end digital solutions engineered for performance, security,
            and scale.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, i) => (
              <div
                key={service.title}
                className={`grid items-center gap-12 lg:grid-cols-2 ${
                  i % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                {/* Content */}
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="mb-4">
                    <service.icon className="h-10 w-10 text-accent stroke-[1.5]" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-primary-dark mb-4">
                    {service.title}
                  </h2>
                  <p className="text-text-secondary leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-2 gap-3 mb-6">
                    {service.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2 text-sm text-text-secondary"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-dark transition-colors"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                {/* Visual */}
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden relative">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
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
