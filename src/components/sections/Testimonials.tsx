import { Star } from "lucide-react";
import SectionTag from "@/components/ui/SectionTag";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "School Principal, Navjyot School",
    quote:
      "TheNextUrl built our school ERP from scratch. Attendance, fees, and report cards — all automated. Our staff efficiency improved dramatically.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Restaurant Owner, Spice Garden",
    quote:
      "The POS and ordering system they delivered was exactly what we needed. Clean interface, fast performance, and excellent support after launch.",
    rating: 5,
  },
  {
    name: "Dr. Anand Mehta",
    role: "Clinic Director",
    quote:
      "Professional team with clear communication. Our appointment booking system works flawlessly and patients find it very easy to use.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white" id="testimonials">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <SectionTag>Testimonials</SectionTag>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-dark">
            What Our Clients Say
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border border-border bg-white p-8 hover-lift"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-text-secondary leading-relaxed mb-6 text-sm">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-dark text-white text-sm font-bold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary-dark">
                    {t.name}
                  </p>
                  <p className="text-xs text-text-light">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
