import ServicePageLayout from "@/components/sections/ServicePageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile App Development",
  description:
    "Cross-platform Android and iOS app development. React Native apps with native performance. Built for businesses and institutions.",
};

export default function MobileAppPage() {
  return (
    <ServicePageLayout
      tag="Mobile Apps"
      title="Cross-Platform Mobile App Development"
      subtitle="Android & iOS apps from a single codebase. Native performance. Fast delivery."
      image="/images/mobile-app.jpg"
      description="We build cross-platform mobile applications using React Native that run natively on both Android and iOS. One codebase, two platforms, zero compromise on performance. From business apps to customer-facing platforms, we deliver mobile experiences that users love."
      features={[
        {
          title: "Cross-Platform",
          description: "Single codebase for Android and iOS. Faster development, lower cost.",
        },
        {
          title: "Native Performance",
          description: "React Native delivers near-native speed and smooth animations.",
        },
        {
          title: "Push Notifications",
          description: "Engage users with targeted push notifications and alerts.",
        },
        {
          title: "Offline Support",
          description: "Core features work without internet connection.",
        },
        {
          title: "API Integration",
          description: "Connect with your existing backend, CMS, or third-party services.",
        },
        {
          title: "App Store Deployment",
          description: "We handle Google Play and Apple App Store submission.",
        },
      ]}
      benefits={[
        "50% lower cost vs building separate native apps",
        "Single codebase for both platforms",
        "Faster time to market",
        "Easy updates and maintenance",
        "Native device access (camera, GPS, etc.)",
        "App store optimization included",
      ]}
      pricing={[
        { label: "Simple App", price: "From ₹80,000" },
        { label: "Business App", price: "From ₹1,50,000" },
        { label: "Enterprise App", price: "Custom Quote" },
      ]}
      faqs={[
        {
          q: "Will it work on both Android and iOS?",
          a: "Yes. We use React Native to build apps that run natively on both platforms from a single codebase.",
        },
        {
          q: "Do you publish to app stores?",
          a: "Yes. We handle the entire deployment process including Google Play Store and Apple App Store submission.",
        },
        {
          q: "Can you integrate with our existing system?",
          a: "Absolutely. We can connect the app to your existing website, ERP, or any backend system via APIs.",
        },
        {
          q: "How long does app development take?",
          a: "Simple apps take 4-6 weeks. Complex apps with multiple features take 8-12 weeks depending on scope.",
        },
      ]}
    />
  );
}
