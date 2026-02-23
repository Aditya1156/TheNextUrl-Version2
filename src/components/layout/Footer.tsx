import Link from "next/link";
import { Zap, Phone, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/config";

const serviceLinks = [
  { label: "Web Development", href: "/services/website-design-karnataka" },
  { label: "School ERP", href: "/services/school-erp-development" },
  { label: "E-Commerce", href: "/services/ecommerce-development" },
  { label: "Mobile Apps", href: "/services/mobile-app-development" },
  { label: "Dashboards", href: "/services/admin-dashboard-development" },
];

const companyLinks = [
  { label: "Solutions", href: "/solutions" },
  { label: "Industries", href: "/industries" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-primary-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-3">
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-accent text-white">
                <Zap className="h-3.5 w-3.5" />
              </div>
              <span className="text-base font-semibold text-white">{siteConfig.name}</span>
            </Link>
            <p className="text-xs text-slate-500 leading-relaxed mb-3">
              {siteConfig.tagline}.
            </p>
            <span className="text-[10px] text-slate-600 uppercase tracking-wider">
              {siteConfig.msme}
            </span>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
              Services
            </h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-xs text-slate-500 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
              Company
            </h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-xs text-slate-500 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
              Contact
            </h3>
            <ul className="space-y-2.5">
              <li className="flex items-center gap-2 text-xs text-slate-500">
                <Phone className="h-3 w-3 text-slate-600 shrink-0" />
                <a href={`tel:${siteConfig.phone}`} className="hover:text-white">{siteConfig.phone}</a>
              </li>
              <li className="flex items-center gap-2 text-xs text-slate-500">
                <Mail className="h-3 w-3 text-slate-600 shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white">{siteConfig.email}</a>
              </li>
              <li className="flex items-center gap-2 text-xs text-slate-500">
                <MapPin className="h-3 w-3 text-slate-600 shrink-0" />
                <span>{siteConfig.location}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800/50 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-slate-600">
            &copy; {new Date().getFullYear()} {siteConfig.name}
          </p>
          <p className="text-[11px] text-slate-600">
            Built with Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
