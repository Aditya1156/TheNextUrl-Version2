export const siteConfig = {
  name: "TheNextUrl",
  tagline: "Digital Infrastructure for Institutions & Businesses",
  description:
    "Custom websites, ERP systems, and mobile apps for institutions and businesses. MSME registered digital agency serving clients across India.",
  url: "https://thenexturl.com",
  phone: "+91 9353615975",
  email: "contact@thenexturl.com",
  whatsapp: "919353615975",
  location: "Karnataka, India",
  msme: "MSME Registered",
  socials: {
    instagram: "https://instagram.com/thenexturl",
    linkedin: "https://linkedin.com/company/thenexturl",
    twitter: "https://twitter.com/thenexturl",
  },
};

export const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      { label: "Web Development", href: "/services/website-design-karnataka" },
      { label: "School ERP", href: "/services/school-erp-development" },
      { label: "E-Commerce", href: "/services/ecommerce-development" },
      { label: "Mobile Apps", href: "/services/mobile-app-development" },
      { label: "Admin Dashboards", href: "/services/admin-dashboard-development" },
    ],
  },
  { label: "Industries", href: "/industries" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];
