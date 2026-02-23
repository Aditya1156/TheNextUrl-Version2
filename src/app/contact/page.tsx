"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Send, MessageCircle } from "lucide-react";
import SectionTag from "@/components/ui/SectionTag";
import { siteConfig } from "@/lib/config";
import type { Metadata } from "next";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name");
    const service = data.get("service");
    const budget = data.get("budget");
    const message = data.get("message");

    const text = `Hi, I'm ${name}. I'm interested in ${service}. Budget: ${budget}. ${message}`;
    window.open(
      `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
    setSubmitted(true);
  };

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-primary-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <SectionTag>Contact Us</SectionTag>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Let&apos;s Build Something Great
          </h1>
          <p className="text-lg text-slate-300 max-w-xl mx-auto">
            Free consultation. No obligations. Tell us about your project.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Form */}
            <div>
              {submitted ? (
                <div className="rounded-2xl border border-green-200 bg-green-50 p-12 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                    <Send className="h-7 w-7 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-green-800 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-green-700">
                    We&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium text-primary-dark mb-2">
                        Full Name
                      </label>
                      <input
                        name="name"
                        required
                        className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary-dark mb-2">
                        Email
                      </label>
                      <input
                        name="email"
                        type="email"
                        required
                        className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium text-primary-dark mb-2">
                        Service Required
                      </label>
                      <select
                        name="service"
                        required
                        className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent"
                      >
                        <option value="">Select a service</option>
                        <option>Website Development</option>
                        <option>School ERP System</option>
                        <option>E-Commerce Platform</option>
                        <option>Mobile App Development</option>
                        <option>Admin Dashboard</option>
                        <option>Custom Software</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary-dark mb-2">
                        Budget Range
                      </label>
                      <select
                        name="budget"
                        className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent"
                      >
                        <option value="">Select budget</option>
                        <option>Under ₹25,000</option>
                        <option>₹25,000 – ₹50,000</option>
                        <option>₹50,000 – ₹1,00,000</option>
                        <option>₹1,00,000 – ₹2,00,000</option>
                        <option>₹2,00,000+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-primary-dark mb-2">
                      Project Details
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-accent-dark"
                  >
                    Send via WhatsApp
                    <MessageCircle className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <SectionTag>Get In Touch</SectionTag>
              <h2 className="text-2xl font-bold text-primary-dark mb-6">
                Contact Information
              </h2>
              <p className="text-text-secondary leading-relaxed mb-8">
                We respond within 24 hours. For urgent queries, reach us directly on WhatsApp.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-primary-dark">Phone</h4>
                    <a href={`tel:${siteConfig.phone}`} className="text-sm text-text-secondary hover:text-accent">
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-primary-dark">Email</h4>
                    <a href={`mailto:${siteConfig.email}`} className="text-sm text-text-secondary hover:text-accent">
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-primary-dark">Location</h4>
                    <p className="text-sm text-text-secondary">{siteConfig.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
