import ServicePageLayout from "@/components/sections/ServicePageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Development Company in Karnataka",
  description:
    "Custom website development services in Karnataka. Fast, SEO-optimized, mobile-first websites built with Next.js and modern technologies.",
};

export default function WebsiteDesignPage() {
  return (
    <ServicePageLayout
      tag="Web Development"
      title="Website Development Company in Karnataka"
      subtitle="Modern, fast, SEO-optimized websites that drive results. Built with Next.js and designed for your audience."
      image="/images/coding.jpg"
      description="We build production-grade websites that are fast, secure, and optimized for search engines. Every website is mobile-first, accessibility-compliant, and built to convert visitors into customers. From single-page sites to complex web applications, we deliver clean code that performs."
      features={[
        {
          title: "Responsive Design",
          description: "Pixel-perfect on every device — desktop, tablet, and mobile.",
        },
        {
          title: "SEO Optimization",
          description: "Structured data, meta tags, sitemaps, and Core Web Vitals optimization.",
        },
        {
          title: "Fast Performance",
          description: "Under 2 second load times with Next.js server-side rendering.",
        },
        {
          title: "CMS Integration",
          description: "Easy content management without touching code.",
        },
        {
          title: "Contact Forms",
          description: "WhatsApp, email, or custom form integrations.",
        },
        {
          title: "Analytics Setup",
          description: "Google Analytics and Search Console configuration.",
        },
      ]}
      benefits={[
        "90+ Google Lighthouse score guaranteed",
        "Mobile-first responsive design",
        "SSL certificate included",
        "Search engine optimized from day one",
        "Fast load times for better user experience",
        "Modern tech stack (Next.js, React, Tailwind)",
      ]}
      pricing={[
        { label: "Landing Page", price: "From ₹9,999" },
        { label: "Business Website", price: "From ₹14,999" },
        { label: "Custom Web App", price: "From ₹40,000" },
      ]}
      faqs={[
        {
          q: "How long does it take to build a website?",
          a: "A standard business website takes 1-2 weeks. Complex web applications take 3-6 weeks depending on scope.",
        },
        {
          q: "Do you provide hosting?",
          a: "We recommend and help set up Vercel or cloud hosting. We handle deployment and configuration for you.",
        },
        {
          q: "Will my website be mobile-friendly?",
          a: "Absolutely. Every website we build is mobile-first — designed for phones first, then scaled up for desktop.",
        },
        {
          q: "Do you offer ongoing maintenance?",
          a: "Yes. We offer AMC (Annual Maintenance Contract) plans starting from ₹5,000/year.",
        },
      ]}
    />
  );
}
