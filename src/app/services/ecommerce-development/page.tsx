import ServicePageLayout from "@/components/sections/ServicePageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-Commerce Development",
  description:
    "Custom e-commerce and online store development. Product catalogs, payment gateways, inventory management, and order tracking.",
};

export default function EcommercePage() {
  return (
    <ServicePageLayout
      tag="E-Commerce"
      title="E-Commerce & Online Store Development"
      subtitle="Sell online with custom storefronts, payment processing, and inventory management."
      image="/images/ecommerce.jpg"
      description="We build custom e-commerce platforms tailored to your business. From product catalogs to payment processing, order management to delivery tracking — everything integrated into a single platform. No marketplace commissions. You own your store."
      features={[
        {
          title: "Product Catalog",
          description: "Categories, variants, images, and inventory tracking.",
        },
        {
          title: "Payment Gateway",
          description: "Razorpay, PhonePe, UPI, and card payments integrated.",
        },
        {
          title: "Order Management",
          description: "Track orders, manage fulfillment, and handle returns.",
        },
        {
          title: "Inventory Tracking",
          description: "Real-time stock management with low-stock alerts.",
        },
        {
          title: "Customer Accounts",
          description: "User registration, order history, and wishlists.",
        },
        {
          title: "Admin Dashboard",
          description: "Complete control over products, orders, and analytics.",
        },
      ]}
      benefits={[
        "Zero marketplace commissions",
        "Complete brand control",
        "Integrated payment processing",
        "Mobile-optimized shopping experience",
        "SEO-friendly product pages",
        "Scalable architecture for growth",
      ]}
      pricing={[
        { label: "Basic Store", price: "From ₹25,000" },
        { label: "Advanced Store", price: "From ₹60,000" },
        { label: "Custom Platform", price: "Custom Quote" },
      ]}
      faqs={[
        {
          q: "Which payment gateways do you support?",
          a: "We integrate Razorpay, PhonePe, Paytm, Stripe, and direct UPI payments. We can add any payment provider you need.",
        },
        {
          q: "Can I manage products myself?",
          a: "Yes. You get a full admin dashboard to add, edit, and manage products, pricing, and inventory without any technical knowledge.",
        },
        {
          q: "Do you handle delivery integration?",
          a: "We can integrate with Shiprocket, Delhivery, or any logistics provider for automated shipping and tracking.",
        },
        {
          q: "Is it SEO optimized?",
          a: "Yes. Every product page is optimized for search engines with structured data, meta tags, and fast load times.",
        },
      ]}
    />
  );
}
