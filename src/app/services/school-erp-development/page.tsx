import ServicePageLayout from "@/components/sections/ServicePageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "School ERP Development",
  description:
    "Custom school and college ERP systems. Student management, fee collection, attendance tracking, and exam portal. Built for Indian institutions.",
};

export default function SchoolERPPage() {
  return (
    <ServicePageLayout
      tag="ERP Systems"
      title="School & College ERP Development"
      subtitle="Complete digital management for educational institutions. Automate attendance, fees, exams, and more."
      image="/images/school.jpg"
      description="Our School ERP system digitizes every aspect of institutional management. From student enrollment to result publication, fee collection to staff payroll — everything runs on a single, integrated platform. Built specifically for Indian schools and colleges with multi-branch support."
      features={[
        {
          title: "Student Management",
          description: "Enrollment, profiles, class allocation, and academic records.",
        },
        {
          title: "Fee Management",
          description: "Online fee collection, receipts, due reminders, and reports.",
        },
        {
          title: "Attendance System",
          description: "Digital attendance with parent notifications and reports.",
        },
        {
          title: "Exam & Results",
          description: "Exam scheduling, marks entry, report cards, and grade analysis.",
        },
        {
          title: "Staff & Payroll",
          description: "Staff management, payroll processing, and leave tracking.",
        },
        {
          title: "Parent Portal",
          description: "Parents can track fees, attendance, and results online.",
        },
      ]}
      benefits={[
        "Reduce administrative workload by 70%",
        "Zero paper-based processes",
        "Real-time parent notifications",
        "Multi-branch support for chains",
        "Secure student data management",
        "Custom report generation",
      ]}
      pricing={[
        { label: "Single Branch", price: "From ₹50,000" },
        { label: "Multi-Branch", price: "From ₹1,00,000" },
        { label: "Enterprise", price: "Custom Quote" },
      ]}
      faqs={[
        {
          q: "Can it handle multiple branches?",
          a: "Yes. Our ERP supports multi-branch management with centralized admin control and branch-level access.",
        },
        {
          q: "Is training provided?",
          a: "Yes. We provide complete training for admin staff and teachers, plus documentation and video guides.",
        },
        {
          q: "Can parents access the system?",
          a: "Yes. Parents get a dedicated portal to track attendance, fees, and academic progress in real-time.",
        },
        {
          q: "What about data security?",
          a: "All data is encrypted, backed up daily, and stored on secure cloud servers with role-based access control.",
        },
      ]}
    />
  );
}
