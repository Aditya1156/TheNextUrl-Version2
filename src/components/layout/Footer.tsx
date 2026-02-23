import Link from "next/link";
import { Zap, Phone, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/config";

const serviceLinks = [
  { label: "Web Development", href: "/services/website-design-karnataka" },
  { label: "School ERP Systems", href: "/services/school-erp-development" },
  { label: "E-Commerce Platforms", href: "/services/ecommerce-development" },
  { label: "Mobile App Development", href: "/services/mobile-app-development" },
  { label: "Admin Dashboards", href: "/services/admin-dashboard-development" },
];

const companyLinks = [
  { label: "Solutions", href: "/solutions" },
  { label: "Industries", href: "/industries" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-white">
                <Zap className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold">{siteConfig.name}</span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              {siteConfig.tagline}. Built with precision. Designed to scale.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span className="inline-block rounded bg-slate-800 px-2 py-1">
                {siteConfig.msme}
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-300">
              Services
            </h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-300">
              Company
            </h3>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-300">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-slate-400">
                <Phone className="h-4 w-4 mt-0.5 text-accent shrink-0" />
                <a href={`tel:${siteConfig.phone}`} className="hover:text-white">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-400">
                <Mail className="h-4 w-4 mt-0.5 text-accent shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-400">
                <MapPin className="h-4 w-4 mt-0.5 text-accent shrink-0" />
                <span>{siteConfig.location}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">
            Built with Next.js &middot; Serving Clients Across India
          </p>
        </div>
      </div>
    </footer>
  );
}
