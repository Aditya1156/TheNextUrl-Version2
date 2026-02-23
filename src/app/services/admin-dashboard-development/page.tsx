import ServicePageLayout from "@/components/sections/ServicePageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard Development",
  description:
    "Custom admin panels and dashboards for data management, analytics, and business operations. Role-based access and real-time reporting.",
};

export default function AdminDashboardPage() {
  return (
    <ServicePageLayout
      tag="Dashboards"
      title="Admin Dashboard Development"
      subtitle="Powerful admin panels for data management, analytics, and business operations."
      image="/images/dashboard.jpg"
      description="We build custom admin dashboards that give you complete control over your business data. From user management to analytics, content moderation to reporting — everything accessible from a clean, intuitive interface. Role-based access ensures the right people see the right data."
      features={[
        {
          title: "Data Visualization",
          description: "Charts, graphs, and tables for real-time business insights.",
        },
        {
          title: "Role-Based Access",
          description: "Admin, manager, staff — each sees only what they need.",
        },
        {
          title: "CRUD Operations",
          description: "Create, read, update, and delete any data entity easily.",
        },
        {
          title: "Export & Reports",
          description: "Export data to Excel, PDF, or generate custom reports.",
        },
        {
          title: "Search & Filter",
          description: "Advanced search, sorting, and filtering across all data.",
        },
        {
          title: "Audit Logs",
          description: "Track who did what and when for accountability.",
        },
      ]}
      benefits={[
        "Complete visibility into business operations",
        "Reduce manual data management time",
        "Real-time analytics and reporting",
        "Secure role-based access control",
        "Custom workflows and automation",
        "Mobile-responsive admin interface",
      ]}
      pricing={[
        { label: "Basic Dashboard", price: "From ₹30,000" },
        { label: "Advanced Panel", price: "From ₹70,000" },
        { label: "Enterprise System", price: "Custom Quote" },
      ]}
      faqs={[
        {
          q: "Can it connect to my existing database?",
          a: "Yes. We can build dashboards that connect to any database — MySQL, PostgreSQL, MongoDB, or even spreadsheets.",
        },
        {
          q: "Is it mobile-friendly?",
          a: "Yes. All our dashboards are fully responsive and work on tablets and mobile devices.",
        },
        {
          q: "Can multiple users access it?",
          a: "Yes. We implement role-based access control so different team members can have different permission levels.",
        },
        {
          q: "Do you provide the source code?",
          a: "Yes. You own the complete source code. No vendor lock-in.",
        },
      ]}
    />
  );
}
