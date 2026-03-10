// Master Frame Industries — About Page
// Design: Architectural Precision — Swiss Grid Modernism

import { Link } from "wouter";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { WHY_CHOOSE_US, TESTIMONIALS } from "@/lib/data";

export default function About() {
  return (
    <div className="min-h-screen bg-[oklch(0.99_0.005_75)]">
      <Navbar />

      {/* Header */}
      <div className="pt-[4.5rem] bg-[oklch(0.18_0.02_265)]">
        <div className="container py-16">
          <div className="flex items-center gap-2 text-white/40 text-xs font-['IBM_Plex_Sans'] tracking-wide mb-4">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-white/70">About Us</span>
          </div>
          <h1 className="font-['Cormorant_Garamond'] font-light text-white mb-3" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
            About Master Frame
          </h1>
          <p className="text-white/60 font-['IBM_Plex_Sans'] text-sm max-w-xl">
            Three decades of craftsmanship, quality, and trusted service in Malaysia's door and architectural fittings industry.
          </p>
        </div>
      </div>

      {/* Story section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="relative">
                <span className="section-number absolute -top-8 -left-4 select-none">01</span>
                <div className="relative">
                  <div className="section-label mb-3">Our Story</div>
                  <h2 className="font-['Cormorant_Garamond'] font-light text-[oklch(0.18_0.02_265)] mb-6" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                    30 Years of Crafting Entrances
                  </h2>
                </div>
              </div>
              <div className="space-y-4 text-sm text-[oklch(0.35_0.02_265)] font-['IBM_Plex_Sans'] leading-relaxed">
                <p>
                  Founded in 1994, Master Frame Industries Sdn Bhd began as a small workshop in Selangor with a simple mission: to provide Malaysian homeowners and businesses with high-quality doors and architectural fittings that stand the test of time.
                </p>
                <p>
                  Over three decades, we have grown into one of Malaysia's trusted manufacturers, serving thousands of residential and commercial projects across Peninsular Malaysia. Our factory in Balakong, Selangor houses state-of-the-art manufacturing equipment operated by skilled craftsmen with decades of experience.
                </p>
                <p>
                  Today, we offer a comprehensive one-stop solution — from manufacturing and delivery to professional installation and after-sales support. Our product range spans decorative solid doors, fire-rated doors, aluminium systems, kitchen cabinets, auto gates, and a full range of architectural hardware.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663404946434/GdNs5yfBimhBHqkRgaSdDG/showroom-interior-HzoYbRUvr7Z7jGB2yUzYbQ.webp"
                alt="Master Frame Industries Showroom"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute -bottom-5 -right-5 bg-[oklch(0.32_0.08_145)] text-white p-6 hidden lg:block">
                <div className="font-['Cormorant_Garamond'] text-4xl font-semibold">30+</div>
                <div className="text-xs font-['IBM_Plex_Sans'] tracking-wide mt-1">Years in Business</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[oklch(0.97_0.01_75)]">
        <div className="container">
          <div className="text-center mb-14">
            <div className="section-label mb-3 text-center">Our Values</div>
            <h2 className="font-['Cormorant_Garamond'] font-light text-[oklch(0.18_0.02_265)]" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              What We Stand For
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Quality First",
                desc: "Every product that leaves our factory undergoes rigorous quality checks. We use only premium materials sourced from trusted suppliers.",
                num: "01",
              },
              {
                title: "Customer Trust",
                desc: "We build long-term relationships with our clients through transparency, reliability, and consistent after-sales support.",
                num: "02",
              },
              {
                title: "End-to-End Service",
                desc: "From the first consultation to post-installation support, we are with you every step of the way.",
                num: "03",
              },
            ].map((v, i) => (
              <motion.div
                key={v.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="bg-white border border-[oklch(0.88_0.02_75)] p-8"
              >
                <div className="font-['Cormorant_Garamond'] text-5xl font-light text-[oklch(0.88_0.02_75)] mb-4">{v.num}</div>
                <h3 className="font-['Cormorant_Garamond'] text-xl font-semibold text-[oklch(0.18_0.02_265)] mb-3">{v.title}</h3>
                <p className="text-sm text-[oklch(0.52_0.02_265)] font-['IBM_Plex_Sans'] leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-[oklch(0.18_0.02_265)]">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {WHY_CHOOSE_US.map((stat, i) => (
              <motion.div
                key={stat.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="font-['Cormorant_Garamond'] text-4xl font-semibold text-[oklch(0.42_0.1_145)] mb-2">
                  {stat.number}
                </div>
                <div className="font-['IBM_Plex_Sans'] font-semibold text-sm text-white mb-2">{stat.title}</div>
                <p className="text-xs text-white/50 font-['IBM_Plex_Sans'] leading-relaxed">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-14">
            <div className="section-label mb-3 text-center">Services</div>
            <h2 className="font-['Cormorant_Garamond'] font-light text-[oklch(0.18_0.02_265)]" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              Our End-to-End Services
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { step: "01", title: "Consultation", desc: "Free consultation at our showroom or your site. We understand your needs and recommend the right products." },
              { step: "02", title: "Manufacturing", desc: "Custom manufacturing in our Balakong factory using premium materials and precision equipment." },
              { step: "03", title: "Delivery", desc: "Reliable delivery across Peninsular Malaysia with careful handling to ensure products arrive in perfect condition." },
              { step: "04", title: "Installation", desc: "Professional installation by our trained teams. We ensure every door is fitted perfectly and functions flawlessly." },
            ].map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="border border-[oklch(0.88_0.02_75)] p-6 relative"
              >
                <div className="font-['Cormorant_Garamond'] text-5xl font-light text-[oklch(0.88_0.02_75)] mb-4">{s.step}</div>
                <h3 className="font-['Cormorant_Garamond'] text-xl font-semibold text-[oklch(0.18_0.02_265)] mb-3">{s.title}</h3>
                <p className="text-sm text-[oklch(0.52_0.02_265)] font-['IBM_Plex_Sans'] leading-relaxed">{s.desc}</p>
                {i < 3 && (
                  <div className="absolute top-8 -right-2.5 w-5 h-px bg-[oklch(0.88_0.02_75)] hidden lg:block" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[oklch(0.97_0.01_75)]">
        <div className="container">
          <div className="text-center mb-14">
            <div className="section-label mb-3 text-center">Testimonials</div>
            <h2 className="font-['Cormorant_Garamond'] font-light text-[oklch(0.18_0.02_265)]" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              Trusted by Thousands
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="bg-white border border-[oklch(0.88_0.02_75)] p-6"
              >
                <p className="text-sm text-[oklch(0.35_0.02_265)] font-['IBM_Plex_Sans'] leading-relaxed mb-5 italic">
                  "{t.text}"
                </p>
                <div className="hairline mb-4" />
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-['IBM_Plex_Sans'] font-semibold text-sm text-[oklch(0.18_0.02_265)]">{t.name}</div>
                    <div className="text-xs text-[oklch(0.52_0.02_265)] font-['IBM_Plex_Sans']">{t.role} · {t.company}</div>
                  </div>
                  <div className="font-['Cormorant_Garamond'] text-3xl font-light text-[oklch(0.88_0.02_75)]">"</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white border-t border-[oklch(0.88_0.02_75)]">
        <div className="container text-center">
          <h2 className="font-['Cormorant_Garamond'] font-light text-[oklch(0.18_0.02_265)] mb-4" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}>
            Ready to Work With Us?
          </h2>
          <p className="text-[oklch(0.52_0.02_265)] font-['IBM_Plex_Sans'] text-sm mb-8 max-w-md mx-auto">
            Contact us today to discuss your project requirements or visit our showroom.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="/contact" className="btn-primary">Book Consultation</Link>
            <Link href="/products" className="btn-outline">Browse Products</Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
