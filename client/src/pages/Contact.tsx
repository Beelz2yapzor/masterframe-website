// Master Frame Industries — Contact & Consultation Booking Page
// Design: Architectural Precision — Swiss Grid Modernism

import { useState } from "react";
import { Link } from "wouter";
import { ChevronRight, MapPin, Phone, Mail, Clock, CheckCircle } from "lucide-react";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { COMPANY_INFO } from "@/lib/data";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    consultationType: "",
    preferredDate: "",
    preferredTime: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.consultationType) {
      toast.error("Please fill in all required fields.");
      return;
    }
    const waMsg = encodeURIComponent(
      `*Consultation Booking — Master Frame Industries*\n\n` +
      `Name: ${form.name}\n` +
      `Phone: ${form.phone}\n` +
      `Email: ${form.email || "N/A"}\n\n` +
      `Consultation Type: ${form.consultationType}\n` +
      `Preferred Date: ${form.preferredDate || "Flexible"}\n` +
      `Preferred Time: ${form.preferredTime || "Flexible"}\n\n` +
      `Message: ${form.message || "None"}`
    );
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp.replace(/\D/g, "")}?text=${waMsg}`, "_blank");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[oklch(0.99_0.005_75)]">
        <Navbar />
        <div className="pt-[4.5rem] min-h-[80vh] flex items-center">
          <div className="container py-20 text-center max-w-lg mx-auto">
            <CheckCircle size={48} className="text-[oklch(0.32_0.08_145)] mx-auto mb-6" />
            <h1 className="font-['Cormorant_Garamond'] text-3xl font-semibold text-[oklch(0.18_0.02_265)] mb-4">
              Booking Request Sent!
            </h1>
            <p className="text-[oklch(0.52_0.02_265)] font-['IBM_Plex_Sans'] text-sm leading-relaxed mb-8">
              Your consultation request has been sent via WhatsApp. We'll confirm your appointment within 1 business day.
            </p>
            <div className="flex gap-3 justify-center">
              <Link href="/" className="btn-primary">Back to Home</Link>
              <button onClick={() => setSubmitted(false)} className="btn-outline">New Booking</button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[oklch(0.99_0.005_75)]">
      <Navbar />

      <div className="pt-[4.5rem] bg-[oklch(0.18_0.02_265)]">
        <div className="container py-12">
          <div className="flex items-center gap-2 text-white/40 text-xs font-['IBM_Plex_Sans'] tracking-wide mb-4">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-white/70">Contact & Booking</span>
          </div>
          <h1 className="font-['Cormorant_Garamond'] font-light text-white mb-2" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
            Contact & Consultation
          </h1>
          <p className="text-white/60 font-['IBM_Plex_Sans'] text-sm">
            Book a showroom visit, site measurement, or phone consultation.
          </p>
        </div>
      </div>

      <div className="container py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Booking form */}
          <div className="lg:col-span-2">
            <h2 className="font-['Cormorant_Garamond'] text-2xl font-semibold text-[oklch(0.18_0.02_265)] mb-6">
              Book a Consultation
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-['IBM_Plex_Sans'] font-medium text-[oklch(0.35_0.02_265)] mb-1.5 tracking-wide">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full border border-[oklch(0.88_0.02_75)] bg-white px-4 py-3 text-sm font-['IBM_Plex_Sans'] text-[oklch(0.18_0.02_265)] placeholder:text-[oklch(0.65_0.02_265)] focus:outline-none focus:border-[oklch(0.32_0.08_145)] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-['IBM_Plex_Sans'] font-medium text-[oklch(0.35_0.02_265)] mb-1.5 tracking-wide">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    className="w-full border border-[oklch(0.88_0.02_75)] bg-white px-4 py-3 text-sm font-['IBM_Plex_Sans'] text-[oklch(0.18_0.02_265)] placeholder:text-[oklch(0.65_0.02_265)] focus:outline-none focus:border-[oklch(0.32_0.08_145)] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-['IBM_Plex_Sans'] font-medium text-[oklch(0.35_0.02_265)] mb-1.5 tracking-wide">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full border border-[oklch(0.88_0.02_75)] bg-white px-4 py-3 text-sm font-['IBM_Plex_Sans'] text-[oklch(0.18_0.02_265)] placeholder:text-[oklch(0.65_0.02_265)] focus:outline-none focus:border-[oklch(0.32_0.08_145)] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-['IBM_Plex_Sans'] font-medium text-[oklch(0.35_0.02_265)] mb-3 tracking-wide">
                  Consultation Type *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { id: "showroom", label: "Showroom Visit", desc: "Visit our Balakong showroom" },
                    { id: "site", label: "Site Measurement", desc: "We visit your location" },
                    { id: "phone", label: "Phone Consultation", desc: "Quick call with our team" },
                  ].map((type) => (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setForm({ ...form, consultationType: type.label })}
                      className={`p-4 border text-left transition-all ${
                        form.consultationType === type.label
                          ? "border-[oklch(0.32_0.08_145)] bg-[oklch(0.97_0.01_75)]"
                          : "border-[oklch(0.88_0.02_75)] hover:border-[oklch(0.18_0.02_265)]"
                      }`}
                    >
                      <div className="font-['IBM_Plex_Sans'] font-semibold text-sm text-[oklch(0.18_0.02_265)] mb-1">{type.label}</div>
                      <div className="text-xs text-[oklch(0.52_0.02_265)] font-['IBM_Plex_Sans']">{type.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-['IBM_Plex_Sans'] font-medium text-[oklch(0.35_0.02_265)] mb-1.5 tracking-wide">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    name="preferredDate"
                    value={form.preferredDate}
                    onChange={handleChange}
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full border border-[oklch(0.88_0.02_75)] bg-white px-4 py-3 text-sm font-['IBM_Plex_Sans'] text-[oklch(0.18_0.02_265)] focus:outline-none focus:border-[oklch(0.32_0.08_145)] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-['IBM_Plex_Sans'] font-medium text-[oklch(0.35_0.02_265)] mb-1.5 tracking-wide">
                    Preferred Time
                  </label>
                  <select
                    name="preferredTime"
                    value={form.preferredTime}
                    onChange={handleChange}
                    className="w-full border border-[oklch(0.88_0.02_75)] bg-white px-4 py-3 text-sm font-['IBM_Plex_Sans'] text-[oklch(0.18_0.02_265)] focus:outline-none focus:border-[oklch(0.32_0.08_145)] transition-colors"
                  >
                    <option value="">Any time</option>
                    <option value="Morning (9am – 12pm)">Morning (9am – 12pm)</option>
                    <option value="Afternoon (12pm – 3pm)">Afternoon (12pm – 3pm)</option>
                    <option value="Late Afternoon (3pm – 5:30pm)">Late Afternoon (3pm – 5:30pm)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-['IBM_Plex_Sans'] font-medium text-[oklch(0.35_0.02_265)] mb-1.5 tracking-wide">
                  Message or Requirements
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us about your project or what you'd like to discuss..."
                  className="w-full border border-[oklch(0.88_0.02_75)] bg-white px-4 py-3 text-sm font-['IBM_Plex_Sans'] text-[oklch(0.18_0.02_265)] placeholder:text-[oklch(0.65_0.02_265)] focus:outline-none focus:border-[oklch(0.32_0.08_145)] transition-colors resize-none"
                />
              </div>

              <button type="submit" className="btn-primary flex items-center gap-2">
                Book Consultation
                <ChevronRight size={14} />
              </button>
            </form>
          </div>

          {/* Contact info sidebar */}
          <div className="space-y-6">
            <div className="bg-[oklch(0.18_0.02_265)] p-6 text-white">
              <h3 className="font-['Cormorant_Garamond'] text-xl font-semibold mb-5">
                Showroom & Contact
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <MapPin size={16} className="text-[oklch(0.42_0.1_145)] mt-0.5 shrink-0" />
                  <div>
                    <div className="text-xs font-['IBM_Plex_Sans'] text-white/40 mb-1 tracking-wide uppercase">Address</div>
                    <div className="text-sm text-white/80 font-['IBM_Plex_Sans'] leading-relaxed">{COMPANY_INFO.address}</div>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Phone size={16} className="text-[oklch(0.42_0.1_145)] mt-0.5 shrink-0" />
                  <div>
                    <div className="text-xs font-['IBM_Plex_Sans'] text-white/40 mb-1 tracking-wide uppercase">Phone</div>
                    <a href={`tel:${COMPANY_INFO.phone}`} className="text-sm text-white/80 hover:text-white font-['IBM_Plex_Sans'] transition-colors">
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Mail size={16} className="text-[oklch(0.42_0.1_145)] mt-0.5 shrink-0" />
                  <div>
                    <div className="text-xs font-['IBM_Plex_Sans'] text-white/40 mb-1 tracking-wide uppercase">Email</div>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-sm text-white/80 hover:text-white font-['IBM_Plex_Sans'] transition-colors">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Clock size={16} className="text-[oklch(0.42_0.1_145)] mt-0.5 shrink-0" />
                  <div>
                    <div className="text-xs font-['IBM_Plex_Sans'] text-white/40 mb-1 tracking-wide uppercase">Hours</div>
                    <div className="text-sm text-white/80 font-['IBM_Plex_Sans']">{COMPANY_INFO.showroomHours}</div>
                  </div>
                </li>
              </ul>
            </div>

            {/* Map embed */}
            <div className="border border-[oklch(0.88_0.02_75)] overflow-hidden">
              <div className="bg-[oklch(0.97_0.01_75)] p-3 border-b border-[oklch(0.88_0.02_75)]">
                <span className="text-xs font-['IBM_Plex_Sans'] text-[oklch(0.52_0.02_265)] tracking-wide uppercase">Showroom Location</span>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.0!2d101.7!3d3.05!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwMDMnMDAuMCJOIDEwMcKwNDInMDAuMCJF!5e0!3m2!1sen!2smy!4v1620000000000!5m2!1sen!2smy"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Master Frame Industries Showroom Location"
              />
              <div className="p-3">
                <a
                  href="https://maps.google.com/?q=Balakong+Selangor+Malaysia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-['IBM_Plex_Sans'] text-[oklch(0.32_0.08_145)] hover:underline"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>

            <div className="border border-[oklch(0.88_0.02_75)] p-6">
              <h3 className="font-['IBM_Plex_Sans'] font-semibold text-sm text-[oklch(0.18_0.02_265)] mb-3 tracking-wide uppercase">
                Quick WhatsApp
              </h3>
              <p className="text-sm text-[oklch(0.52_0.02_265)] font-['IBM_Plex_Sans'] mb-4">
                For the fastest response, message us directly on WhatsApp.
              </p>
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-green w-full flex items-center justify-center gap-2"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
