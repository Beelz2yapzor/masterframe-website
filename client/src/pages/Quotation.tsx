// Master Frame Industries — Quotation Request Page
// Design: Architectural Precision — Swiss Grid Modernism

import { useState } from "react";
import { Link } from "wouter";
import { ChevronRight, CheckCircle } from "lucide-react";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { COMPANY_INFO } from "@/lib/data";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  doorType: string;
  quantity: string;
  dimensions: string;
  location: string;
  installationRequired: string;
  timeline: string;
  budget: string;
  message: string;
}

const initialForm: FormData = {
  name: "",
  email: "",
  phone: "",
  company: "",
  projectType: "",
  doorType: "",
  quantity: "",
  dimensions: "",
  location: "",
  installationRequired: "yes",
  timeline: "",
  budget: "",
  message: "",
};

export default function Quotation() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.doorType) {
      toast.error("Please fill in all required fields.");
      return;
    }
    // Compose WhatsApp message
    const waMsg = encodeURIComponent(
      `*Quotation Request — Master Frame Industries*\n\n` +
      `Name: ${form.name}\n` +
      `Phone: ${form.phone}\n` +
      `Email: ${form.email}\n` +
      `Company: ${form.company || "N/A"}\n\n` +
      `*Project Details*\n` +
      `Project Type: ${form.projectType}\n` +
      `Door Type: ${form.doorType}\n` +
      `Quantity: ${form.quantity}\n` +
      `Dimensions: ${form.dimensions || "TBD"}\n` +
      `Location: ${form.location}\n` +
      `Installation: ${form.installationRequired}\n` +
      `Timeline: ${form.timeline}\n` +
      `Budget: ${form.budget || "Not specified"}\n\n` +
      `Additional Notes: ${form.message || "None"}`
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
              Quotation Request Sent!
            </h1>
            <p className="text-[oklch(0.52_0.02_265)] font-['IBM_Plex_Sans'] text-sm leading-relaxed mb-8">
              Your quotation request has been sent via WhatsApp. Our team will review your requirements and get back to you within 1 business day.
            </p>
            <div className="flex gap-3 justify-center">
              <Link href="/products" className="btn-primary">Browse Products</Link>
              <button onClick={() => setSubmitted(false)} className="btn-outline">New Request</button>
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
            <span className="text-white/70">Request Quotation</span>
          </div>
          <h1 className="font-['Cormorant_Garamond'] font-light text-white mb-2" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
            Request a Quotation
          </h1>
          <p className="text-white/60 font-['IBM_Plex_Sans'] text-sm">
            Fill in the form below and we'll provide a detailed quotation within 1 business day.
          </p>
        </div>
      </div>

      <div className="container py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Contact info */}
              <div>
                <h2 className="font-['IBM_Plex_Sans'] font-semibold text-sm tracking-widest uppercase text-[oklch(0.18_0.02_265)] mb-5 flex items-center gap-3">
                  <span className="w-6 h-6 bg-[oklch(0.18_0.02_265)] text-white flex items-center justify-center text-xs font-['IBM_Plex_Mono']">1</span>
                  Contact Information
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { name: "name", label: "Full Name *", type: "text", required: true },
                    { name: "phone", label: "Phone Number *", type: "tel", required: true },
                    { name: "email", label: "Email Address", type: "email", required: false },
                    { name: "company", label: "Company / Organization", type: "text", required: false },
                  ].map((field) => (
                    <div key={field.name}>
                      <label className="block text-xs font-['IBM_Plex_Sans'] font-medium text-[oklch(0.35_0.02_265)] mb-1.5 tracking-wide">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        name={field.name}
                        value={form[field.name as keyof FormData]}
                        onChange={handleChange}
                        required={field.required}
                        className="w-full border border-[oklch(0.88_0.02_75)] bg-white px-4 py-3 text-sm font-['IBM_Plex_Sans'] text-[oklch(0.18_0.02_265)] placeholder:text-[oklch(0.65_0.02_265)] focus:outline-none focus:border-[oklch(0.32_0.08_145)] transition-colors"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Project details */}
              <div>
                <h2 className="font-['IBM_Plex_Sans'] font-semibold text-sm tracking-widest uppercase text-[oklch(0.18_0.02_265)] mb-5 flex items-center gap-3">
                  <span className="w-6 h-6 bg-[oklch(0.18_0.02_265)] text-white flex items-center justify-center text-xs font-['IBM_Plex_Mono']">2</span>
                  Project Details
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-['IBM_Plex_Sans'] font-medium text-[oklch(0.35_0.02_265)] mb-1.5 tracking-wide">
                      Project Type *
                    </label>
                    <select
                      name="projectType"
                      value={form.projectType}
                      onChange={handleChange}
                      required
                      className="w-full border border-[oklch(0.88_0.02_75)] bg-white px-4 py-3 text-sm font-['IBM_Plex_Sans'] text-[oklch(0.18_0.02_265)] focus:outline-none focus:border-[oklch(0.32_0.08_145)] transition-colors"
                    >
                      <option value="">Select project type</option>
                      <option value="Residential — New Build">Residential — New Build</option>
                      <option value="Residential — Renovation">Residential — Renovation</option>
                      <option value="Commercial — Office">Commercial — Office</option>
                      <option value="Commercial — Retail">Commercial — Retail</option>
                      <option value="Commercial — Industrial">Commercial — Industrial</option>
                      <option value="Property Development">Property Development</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-['IBM_Plex_Sans'] font-medium text-[oklch(0.35_0.02_265)] mb-1.5 tracking-wide">
                      Door Type Required *
                    </label>
                    <select
                      name="doorType"
                      value={form.doorType}
                      onChange={handleChange}
                      required
                      className="w-full border border-[oklch(0.88_0.02_75)] bg-white px-4 py-3 text-sm font-['IBM_Plex_Sans'] text-[oklch(0.18_0.02_265)] focus:outline-none focus:border-[oklch(0.32_0.08_145)] transition-colors"
                    >
                      <option value="">Select door type</option>
                      <option value="Decorative Solid Door">Decorative Solid Door</option>
                      <option value="Laminated Door">Laminated Door</option>
                      <option value="Fire Rated Door">Fire Rated Door</option>
                      <option value="Aluminium Door">Aluminium Door</option>
                      <option value="Sliding / Folding Door">Sliding / Folding Door</option>
                      <option value="Auto Gate">Auto Gate</option>
                      <option value="Multiple Types">Multiple Types</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-['IBM_Plex_Sans'] font-medium text-[oklch(0.35_0.02_265)] mb-1.5 tracking-wide">
                      Quantity Required
                    </label>
                    <input
                      type="number"
                      name="quantity"
                      value={form.quantity}
                      onChange={handleChange}
                      min="1"
                      placeholder="e.g. 5"
                      className="w-full border border-[oklch(0.88_0.02_75)] bg-white px-4 py-3 text-sm font-['IBM_Plex_Sans'] text-[oklch(0.18_0.02_265)] placeholder:text-[oklch(0.65_0.02_265)] focus:outline-none focus:border-[oklch(0.32_0.08_145)] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-['IBM_Plex_Sans'] font-medium text-[oklch(0.35_0.02_265)] mb-1.5 tracking-wide">
                      Door Dimensions (if known)
                    </label>
                    <input
                      type="text"
                      name="dimensions"
                      value={form.dimensions}
                      onChange={handleChange}
                      placeholder="e.g. 2100 × 900 mm"
                      className="w-full border border-[oklch(0.88_0.02_75)] bg-white px-4 py-3 text-sm font-['IBM_Plex_Sans'] text-[oklch(0.18_0.02_265)] placeholder:text-[oklch(0.65_0.02_265)] focus:outline-none focus:border-[oklch(0.32_0.08_145)] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-['IBM_Plex_Sans'] font-medium text-[oklch(0.35_0.02_265)] mb-1.5 tracking-wide">
                      Installation Location
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={form.location}
                      onChange={handleChange}
                      placeholder="e.g. Petaling Jaya, Selangor"
                      className="w-full border border-[oklch(0.88_0.02_75)] bg-white px-4 py-3 text-sm font-['IBM_Plex_Sans'] text-[oklch(0.18_0.02_265)] placeholder:text-[oklch(0.65_0.02_265)] focus:outline-none focus:border-[oklch(0.32_0.08_145)] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-['IBM_Plex_Sans'] font-medium text-[oklch(0.35_0.02_265)] mb-1.5 tracking-wide">
                      Installation Required?
                    </label>
                    <select
                      name="installationRequired"
                      value={form.installationRequired}
                      onChange={handleChange}
                      className="w-full border border-[oklch(0.88_0.02_75)] bg-white px-4 py-3 text-sm font-['IBM_Plex_Sans'] text-[oklch(0.18_0.02_265)] focus:outline-none focus:border-[oklch(0.32_0.08_145)] transition-colors"
                    >
                      <option value="yes">Yes — Include installation</option>
                      <option value="no">No — Supply only</option>
                      <option value="unsure">Not sure yet</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-['IBM_Plex_Sans'] font-medium text-[oklch(0.35_0.02_265)] mb-1.5 tracking-wide">
                      Expected Timeline
                    </label>
                    <select
                      name="timeline"
                      value={form.timeline}
                      onChange={handleChange}
                      className="w-full border border-[oklch(0.88_0.02_75)] bg-white px-4 py-3 text-sm font-['IBM_Plex_Sans'] text-[oklch(0.18_0.02_265)] focus:outline-none focus:border-[oklch(0.32_0.08_145)] transition-colors"
                    >
                      <option value="">Select timeline</option>
                      <option value="ASAP (within 2 weeks)">ASAP (within 2 weeks)</option>
                      <option value="1 month">Within 1 month</option>
                      <option value="1-3 months">1–3 months</option>
                      <option value="3-6 months">3–6 months</option>
                      <option value="6+ months">6+ months (planning phase)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-['IBM_Plex_Sans'] font-medium text-[oklch(0.35_0.02_265)] mb-1.5 tracking-wide">
                      Approximate Budget
                    </label>
                    <select
                      name="budget"
                      value={form.budget}
                      onChange={handleChange}
                      className="w-full border border-[oklch(0.88_0.02_75)] bg-white px-4 py-3 text-sm font-['IBM_Plex_Sans'] text-[oklch(0.18_0.02_265)] focus:outline-none focus:border-[oklch(0.32_0.08_145)] transition-colors"
                    >
                      <option value="">Prefer not to say</option>
                      <option value="Below RM 5,000">Below RM 5,000</option>
                      <option value="RM 5,000 – RM 20,000">RM 5,000 – RM 20,000</option>
                      <option value="RM 20,000 – RM 50,000">RM 20,000 – RM 50,000</option>
                      <option value="RM 50,000 – RM 100,000">RM 50,000 – RM 100,000</option>
                      <option value="Above RM 100,000">Above RM 100,000</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Additional notes */}
              <div>
                <label className="block text-xs font-['IBM_Plex_Sans'] font-medium text-[oklch(0.35_0.02_265)] mb-1.5 tracking-wide">
                  Additional Notes or Requirements
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Describe any special requirements, design preferences, or questions..."
                  className="w-full border border-[oklch(0.88_0.02_75)] bg-white px-4 py-3 text-sm font-['IBM_Plex_Sans'] text-[oklch(0.18_0.02_265)] placeholder:text-[oklch(0.65_0.02_265)] focus:outline-none focus:border-[oklch(0.32_0.08_145)] transition-colors resize-none"
                />
              </div>

              <button type="submit" className="btn-primary w-full sm:w-auto flex items-center gap-2">
                Submit Quotation Request
                <ChevronRight size={14} />
              </button>
            </form>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-[oklch(0.18_0.02_265)] p-6 text-white">
              <h3 className="font-['Cormorant_Garamond'] text-xl font-semibold mb-4">
                What Happens Next?
              </h3>
              <ol className="space-y-4">
                {[
                  "We review your requirements within 1 business day",
                  "Our team prepares a detailed quotation",
                  "We contact you to discuss and refine the quote",
                  "Site measurement (if required) is scheduled",
                  "Final quotation with installation timeline provided",
                ].map((step, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="w-5 h-5 bg-[oklch(0.32_0.08_145)] text-white flex items-center justify-center text-[0.65rem] font-['IBM_Plex_Mono'] shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-sm text-white/70 font-['IBM_Plex_Sans'] leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="border border-[oklch(0.88_0.02_75)] p-6">
              <h3 className="font-['IBM_Plex_Sans'] font-semibold text-sm text-[oklch(0.18_0.02_265)] mb-4 tracking-wide uppercase">
                Prefer to Talk?
              </h3>
              <p className="text-sm text-[oklch(0.52_0.02_265)] font-['IBM_Plex_Sans'] mb-4">
                Call or WhatsApp us directly for a faster response.
              </p>
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="block btn-outline text-center mb-3"
              >
                {COMPANY_INFO.phone}
              </a>
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block btn-green text-center"
              >
                WhatsApp Us
              </a>
            </div>

            <div className="bg-[oklch(0.97_0.01_75)] border border-[oklch(0.88_0.02_75)] p-6">
              <h3 className="font-['IBM_Plex_Sans'] font-semibold text-sm text-[oklch(0.18_0.02_265)] mb-3 tracking-wide uppercase">
                Not sure what you need?
              </h3>
              <p className="text-sm text-[oklch(0.52_0.02_265)] font-['IBM_Plex_Sans'] mb-4">
                Try our interactive door configurator to explore options and get an instant estimate.
              </p>
              <Link href="/customize" className="btn-primary block text-center">
                Open Configurator
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
