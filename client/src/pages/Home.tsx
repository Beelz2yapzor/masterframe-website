// Master Frame Industries — Home Page
// Design: Architectural Precision — Swiss Grid Modernism
// Sections: Hero, Stats, Categories, Featured Products, Why Us, Testimonials, CTA

import { Link } from "wouter";
import { ArrowRight, ChevronRight, Star, Shield, Truck, Wrench, Award } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { PRODUCTS, WHY_CHOOSE_US, TESTIMONIALS, COMPANY_INFO } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1 },
  }),
};

export default function Home() {
  const featuredProducts = PRODUCTS.filter((p) => p.popular).slice(0, 4);

  return (
    <div className="min-h-screen bg-[oklch(0.99_0.005_75)]">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-end overflow-hidden pt-[4.5rem]">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663404946434/GdNs5yfBimhBHqkRgaSdDG/hero-door-H3S9SQ8Fqr6taAeRQqqyFu.webp"
            alt="Premium door by Master Frame Industries"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.12_0.02_265/0.85)] via-[oklch(0.12_0.02_265/0.5)] to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.12_0.02_265/0.7)] via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 container pb-20 lg:pb-28">
          <div className="max-w-2xl">
            <motion.div
              initial="hidden"
              animate="visible"
              custom={0}
              variants={fadeUp}
              className="section-label text-[oklch(0.42_0.1_145)] mb-4"
            >
              Est. 1994 · Selangor, Malaysia
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="visible"
              custom={1}
              variants={fadeUp}
              className="font-['Cormorant_Garamond'] font-light text-white leading-[1.05] mb-6"
              style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)" }}
            >
              Crafting Entrances
              <br />
              <em className="font-light italic">That Last a Lifetime</em>
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              custom={2}
              variants={fadeUp}
              className="text-white/70 font-['IBM_Plex_Sans'] text-base leading-relaxed mb-10 max-w-lg"
            >
              Malaysia's trusted manufacturer of premium doors, frames, and architectural fittings. 
              30+ years of craftsmanship. One-stop solution from manufacturing to installation.
            </motion.p>

            <motion.div
              initial="hidden"
              animate="visible"
              custom={3}
              variants={fadeUp}
              className="flex flex-wrap gap-3"
            >
              <Link href="/products" className="btn-primary flex items-center gap-2">
                Explore Products
                <ArrowRight size={14} />
              </Link>
              <Link href="/quotation" className="btn-outline border-white/40 text-white hover:bg-white hover:text-[oklch(0.18_0.02_265)] flex items-center gap-2">
                Get Free Quote
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 right-8 z-10 hidden lg:flex flex-col items-center gap-2">
          <span className="text-white/40 text-[0.6rem] tracking-[0.2em] uppercase font-['IBM_Plex_Sans'] rotate-90 origin-center mb-4">
            Scroll
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-[oklch(0.18_0.02_265)] py-8">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-white/10">
            {WHY_CHOOSE_US.map((stat, i) => (
              <motion.div
                key={stat.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="text-center lg:px-8"
              >
                <div className="font-['Cormorant_Garamond'] text-3xl font-semibold text-[oklch(0.42_0.1_145)] mb-1">
                  {stat.number}
                </div>
                <div className="text-xs font-['IBM_Plex_Sans'] tracking-wide text-white/60">
                  {stat.title}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCT CATEGORIES ── */}
      <section className="py-24 bg-white">
        <div className="container">
          {/* Section header */}
          <div className="flex items-end justify-between mb-14">
            <div className="relative">
              <span className="section-number absolute -top-8 -left-4 select-none">01</span>
              <div className="relative">
                <div className="section-label mb-3">Our Products</div>
                <h2 className="font-['Cormorant_Garamond'] font-light text-[oklch(0.18_0.02_265)]" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                  Complete Door Solutions
                </h2>
              </div>
            </div>
            <Link
              href="/products"
              className="hidden md:flex items-center gap-2 text-sm font-['IBM_Plex_Sans'] text-[oklch(0.32_0.08_145)] hover:gap-3 transition-all"
            >
              View all products <ChevronRight size={16} />
            </Link>
          </div>

          {/* Category grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                id: "wooden-doors",
                label: "Wooden Doors",
                count: "5 products",
                desc: "Solid, laminated & decorative",
                img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663404946434/GdNs5yfBimhBHqkRgaSdDG/product-wood-doors-VF3y2B8wdPKT8ZWPNcXRvo.webp",
              },
              {
                id: "metal-doors",
                label: "Metal Doors",
                count: "3 products",
                desc: "Fire rated & security doors",
                img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
              },
              {
                id: "aluminium",
                label: "Aluminium",
                count: "4 products",
                desc: "Doors, windows & cabinets",
                img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663404946434/GdNs5yfBimhBHqkRgaSdDG/aluminium-products-NWFhDzkawqgRUDy8yCEEvF.webp",
              },
              {
                id: "accessories",
                label: "Accessories",
                count: "4 products",
                desc: "Hardware, gates & flooring",
                img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
              },
            ].map((cat, i) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
              >
                <Link href={`/products/${cat.id}`} className="group block product-card">
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={cat.img}
                      alt={cat.label}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.12_0.02_265/0.6)] to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="text-[0.6rem] font-['IBM_Plex_Sans'] tracking-[0.15em] uppercase text-white/70 mb-1">
                        {cat.count}
                      </div>
                      <h3 className="font-['Cormorant_Garamond'] text-xl font-semibold text-white">
                        {cat.label}
                      </h3>
                    </div>
                  </div>
                  <div className="p-4 flex items-center justify-between">
                    <span className="text-sm text-[oklch(0.52_0.02_265)] font-['IBM_Plex_Sans']">
                      {cat.desc}
                    </span>
                    <ChevronRight
                      size={16}
                      className="text-[oklch(0.32_0.08_145)] group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ── */}
      <section className="py-24 bg-[oklch(0.97_0.01_75)]">
        <div className="container">
          <div className="flex items-end justify-between mb-14">
            <div className="relative">
              <span className="section-number absolute -top-8 -left-4 select-none">02</span>
              <div className="relative">
                <div className="section-label mb-3">Featured</div>
                <h2 className="font-['Cormorant_Garamond'] font-light text-[oklch(0.18_0.02_265)]" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                  Popular Products
                </h2>
              </div>
            </div>
            <Link
              href="/products"
              className="hidden md:flex items-center gap-2 text-sm font-['IBM_Plex_Sans'] text-[oklch(0.32_0.08_145)] hover:gap-3 transition-all"
            >
              View all <ChevronRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredProducts.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
              >
                <Link href={`/product/${product.id}`} className="group block product-card">
                  <div className="relative overflow-hidden aspect-[3/4]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {product.badge && (
                      <div className="absolute top-3 left-3 bg-[oklch(0.32_0.08_145)] text-white text-[0.6rem] font-['IBM_Plex_Sans'] tracking-[0.12em] uppercase px-2.5 py-1">
                        {product.badge}
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <div className="text-[0.6rem] font-['IBM_Plex_Sans'] tracking-[0.15em] uppercase text-[oklch(0.52_0.02_265)] mb-1.5">
                      {product.subcategory}
                    </div>
                    <h3 className="font-['Cormorant_Garamond'] text-lg font-semibold text-[oklch(0.18_0.02_265)] mb-2">
                      {product.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-['IBM_Plex_Mono'] text-[oklch(0.32_0.08_145)] font-medium">
                        {product.priceRange}
                      </span>
                      <ChevronRight
                        size={15}
                        className="text-[oklch(0.32_0.08_145)] group-hover:translate-x-1 transition-transform"
                      />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SHOWROOM BANNER ── */}
      <section className="relative py-0 overflow-hidden">
        <div className="relative h-[420px] lg:h-[520px]">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663404946434/GdNs5yfBimhBHqkRgaSdDG/showroom-interior-HzoYbRUvr7Z7jGB2yUzYbQ.webp"
            alt="Master Frame Industries Showroom"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.12_0.02_265/0.8)] to-[oklch(0.12_0.02_265/0.3)]" />
          <div className="absolute inset-0 flex items-center">
            <div className="container">
              <div className="max-w-lg">
                <div className="section-label text-[oklch(0.42_0.1_145)] mb-4">Visit Our Showroom</div>
                <h2 className="font-['Cormorant_Garamond'] font-light text-white mb-4" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
                  Experience Our Doors in Person
                </h2>
                <p className="text-white/70 font-['IBM_Plex_Sans'] text-sm leading-relaxed mb-8">
                  Visit our showroom in Balakong, Selangor to see our full range of doors and architectural products. 
                  Our consultants are ready to help you find the perfect solution.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/contact" className="btn-primary flex items-center gap-2">
                    Book a Visit
                    <ArrowRight size={14} />
                  </Link>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline border-white/40 text-white hover:bg-white hover:text-[oklch(0.18_0.02_265)] flex items-center gap-2"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="relative">
                <span className="section-number absolute -top-8 -left-4 select-none">03</span>
                <div className="relative">
                  <div className="section-label mb-3">Why MasterFrame</div>
                  <h2 className="font-['Cormorant_Garamond'] font-light text-[oklch(0.18_0.02_265)] mb-6" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                    The MasterFrame Difference
                  </h2>
                </div>
              </div>
              <p className="text-[oklch(0.52_0.02_265)] font-['IBM_Plex_Sans'] text-sm leading-relaxed mb-8">
                For over three decades, we have been Malaysia's trusted partner for premium doors and architectural fittings. 
                Our commitment to quality, service, and innovation sets us apart.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: <Award size={20} />, title: "30+ Years Experience", desc: "Proven track record in Malaysian market" },
                  { icon: <Shield size={20} />, title: "SIRIM Certified", desc: "Fire doors meet all safety standards" },
                  { icon: <Truck size={20} />, title: "Nationwide Delivery", desc: "Delivery across Peninsular Malaysia" },
                  { icon: <Wrench size={20} />, title: "Professional Installation", desc: "Trained installation teams" },
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-10 h-10 bg-[oklch(0.97_0.01_75)] border border-[oklch(0.88_0.02_75)] flex items-center justify-center text-[oklch(0.32_0.08_145)] shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-['IBM_Plex_Sans'] font-semibold text-sm text-[oklch(0.18_0.02_265)] mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs text-[oklch(0.52_0.02_265)] font-['IBM_Plex_Sans']">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {WHY_CHOOSE_US.map((stat, i) => (
                <motion.div
                  key={stat.number}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className={`p-8 border border-[oklch(0.88_0.02_75)] ${i === 0 ? "bg-[oklch(0.18_0.02_265)] text-white" : "bg-white"}`}
                >
                  <div
                    className={`font-['Cormorant_Garamond'] text-4xl font-semibold mb-2 ${
                      i === 0 ? "text-[oklch(0.42_0.1_145)]" : "text-[oklch(0.32_0.08_145)]"
                    }`}
                  >
                    {stat.number}
                  </div>
                  <div
                    className={`font-['IBM_Plex_Sans'] font-semibold text-sm mb-2 ${
                      i === 0 ? "text-white" : "text-[oklch(0.18_0.02_265)]"
                    }`}
                  >
                    {stat.title}
                  </div>
                  <p
                    className={`text-xs font-['IBM_Plex_Sans'] leading-relaxed ${
                      i === 0 ? "text-white/60" : "text-[oklch(0.52_0.02_265)]"
                    }`}
                  >
                    {stat.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 bg-[oklch(0.97_0.01_75)]">
        <div className="container">
          <div className="text-center mb-14">
            <div className="section-label mb-3 text-center">Testimonials</div>
            <h2 className="font-['Cormorant_Garamond'] font-light text-[oklch(0.18_0.02_265)]" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="bg-white border border-[oklch(0.88_0.02_75)] p-6"
              >
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={12} className="fill-[oklch(0.72_0.1_75)] text-[oklch(0.72_0.1_75)]" />
                  ))}
                </div>
                <p className="text-sm text-[oklch(0.35_0.02_265)] font-['IBM_Plex_Sans'] leading-relaxed mb-5 italic">
                  "{t.text}"
                </p>
                <div className="hairline mb-4" />
                <div>
                  <div className="font-['IBM_Plex_Sans'] font-semibold text-sm text-[oklch(0.18_0.02_265)]">
                    {t.name}
                  </div>
                  <div className="text-xs text-[oklch(0.52_0.02_265)] font-['IBM_Plex_Sans']">
                    {t.role} · {t.company}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <section className="py-20 bg-[oklch(0.18_0.02_265)]">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <div className="section-label text-[oklch(0.42_0.1_145)] mb-4 text-center">Get Started</div>
            <h2 className="font-['Cormorant_Garamond'] font-light text-white mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              Ready to Find Your Perfect Door?
            </h2>
            <p className="text-white/60 font-['IBM_Plex_Sans'] text-sm leading-relaxed mb-10">
              Use our door configurator to visualize your ideal door, or request a free quotation. 
              Our team is ready to assist you.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/customize" className="btn-green flex items-center gap-2">
                Try Door Configurator
                <ArrowRight size={14} />
              </Link>
              <Link href="/quotation" className="btn-outline border-white/30 text-white hover:bg-white hover:text-[oklch(0.18_0.02_265)] flex items-center gap-2">
                Request Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
