// Master Frame Industries — Door Configurator Page
// Design: Architectural Precision — Swiss Grid Modernism
// Interactive door customization tool with visual preview and price estimate

import { useState } from "react";
import { Link } from "wouter";
import { ChevronRight, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { COMPANY_INFO } from "@/lib/data";

const DOOR_TYPES = [
  { id: "solid", label: "Solid Wood", basePrice: 1200, img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663404946434/GdNs5yfBimhBHqkRgaSdDG/product-wood-doors-VF3y2B8wdPKT8ZWPNcXRvo.webp" },
  { id: "laminated", label: "Laminated", basePrice: 500, img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80" },
  { id: "fire", label: "Fire Rated", basePrice: 2000, img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&q=80" },
  { id: "aluminium", label: "Aluminium", basePrice: 2500, img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663404946434/GdNs5yfBimhBHqkRgaSdDG/aluminium-products-NWFhDzkawqgRUDy8yCEEvF.webp" },
];

const FRAME_MATERIALS = [
  { id: "wood", label: "Wooden Frame", price: 250 },
  { id: "metal", label: "Metal Frame", price: 350 },
  { id: "aluminium", label: "Aluminium Frame", price: 450 },
];

const FINISHES = [
  { id: "walnut", label: "Dark Walnut", color: "#3D2B1F" },
  { id: "oak", label: "Natural Oak", color: "#C8A96E" },
  { id: "white", label: "Pure White", color: "#F5F5F0" },
  { id: "grey", label: "Slate Grey", color: "#6B7280" },
  { id: "charcoal", label: "Charcoal", color: "#2D2D2D" },
  { id: "cream", label: "Warm Cream", color: "#F5EDD6" },
];

const HARDWARE = [
  { id: "lever-brass", label: "Lever Handle — Brass", price: 120 },
  { id: "lever-chrome", label: "Lever Handle — Chrome", price: 90 },
  { id: "knob-black", label: "Round Knob — Matte Black", price: 75 },
  { id: "pull-stainless", label: "Pull Handle — Stainless", price: 150 },
];

const SIZES = [
  { id: "2100x900", label: "2100 × 900 mm", price: 0 },
  { id: "2100x1000", label: "2100 × 1000 mm", price: 80 },
  { id: "2400x1000", label: "2400 × 1000 mm", price: 150 },
  { id: "custom", label: "Custom Size", price: 200 },
];

export default function Customize() {
  const [doorType, setDoorType] = useState(DOOR_TYPES[0]);
  const [frame, setFrame] = useState(FRAME_MATERIALS[0]);
  const [finish, setFinish] = useState(FINISHES[0]);
  const [hardware, setHardware] = useState(HARDWARE[0]);
  const [size, setSize] = useState(SIZES[0]);
  const [quantity, setQuantity] = useState(1);

  const unitPrice = doorType.basePrice + frame.price + hardware.price + size.price;
  const totalPrice = unitPrice * quantity;

  const waMessage = encodeURIComponent(
    `Hi! I've configured a door using your online configurator:\n\n` +
    `Door Type: ${doorType.label}\n` +
    `Frame: ${frame.label}\n` +
    `Finish: ${finish.label}\n` +
    `Hardware: ${hardware.label}\n` +
    `Size: ${size.label}\n` +
    `Quantity: ${quantity}\n` +
    `Estimated Total: RM ${totalPrice.toLocaleString()}\n\n` +
    `Please provide a formal quotation.`
  );

  return (
    <div className="min-h-screen bg-[oklch(0.99_0.005_75)]">
      <Navbar />

      <div className="pt-[4.5rem] bg-[oklch(0.18_0.02_265)]">
        <div className="container py-12">
          <div className="flex items-center gap-2 text-white/40 text-xs font-['IBM_Plex_Sans'] tracking-wide mb-4">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-white/70">Door Configurator</span>
          </div>
          <h1 className="font-['Cormorant_Garamond'] font-light text-white mb-2" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
            Door Configurator
          </h1>
          <p className="text-white/60 font-['IBM_Plex_Sans'] text-sm">
            Customize your door and get an instant price estimate.
          </p>
        </div>
      </div>

      <div className="container py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Configuration panel */}
          <div className="lg:col-span-2 space-y-8">

            {/* Step 1: Door Type */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-7 h-7 bg-[oklch(0.18_0.02_265)] text-white flex items-center justify-center text-xs font-['IBM_Plex_Mono']">01</div>
                <h2 className="font-['IBM_Plex_Sans'] font-semibold text-sm tracking-widest uppercase text-[oklch(0.18_0.02_265)]">
                  Select Door Type
                </h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {DOOR_TYPES.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setDoorType(type)}
                    className={`group border transition-all overflow-hidden text-left ${
                      doorType.id === type.id
                        ? "border-[oklch(0.32_0.08_145)] ring-1 ring-[oklch(0.32_0.08_145)]"
                        : "border-[oklch(0.88_0.02_75)] hover:border-[oklch(0.18_0.02_265)]"
                    }`}
                  >
                    <div className="aspect-square overflow-hidden">
                      <img src={type.img} alt={type.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    <div className="p-2.5">
                      <div className="text-xs font-['IBM_Plex_Sans'] font-semibold text-[oklch(0.18_0.02_265)] mb-0.5">{type.label}</div>
                      <div className="text-[0.65rem] font-['IBM_Plex_Mono'] text-[oklch(0.32_0.08_145)]">from RM {type.basePrice.toLocaleString()}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Frame */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-7 h-7 bg-[oklch(0.18_0.02_265)] text-white flex items-center justify-center text-xs font-['IBM_Plex_Mono']">02</div>
                <h2 className="font-['IBM_Plex_Sans'] font-semibold text-sm tracking-widest uppercase text-[oklch(0.18_0.02_265)]">
                  Frame Material
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {FRAME_MATERIALS.map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setFrame(f)}
                    className={`p-4 border text-left transition-all ${
                      frame.id === f.id
                        ? "border-[oklch(0.32_0.08_145)] bg-[oklch(0.97_0.01_75)]"
                        : "border-[oklch(0.88_0.02_75)] hover:border-[oklch(0.18_0.02_265)]"
                    }`}
                  >
                    <div className="font-['IBM_Plex_Sans'] font-semibold text-sm text-[oklch(0.18_0.02_265)] mb-1">{f.label}</div>
                    <div className="text-xs font-['IBM_Plex_Mono'] text-[oklch(0.32_0.08_145)]">+RM {f.price}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Finish */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-7 h-7 bg-[oklch(0.18_0.02_265)] text-white flex items-center justify-center text-xs font-['IBM_Plex_Mono']">03</div>
                <h2 className="font-['IBM_Plex_Sans'] font-semibold text-sm tracking-widest uppercase text-[oklch(0.18_0.02_265)]">
                  Colour / Finish
                </h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {FINISHES.map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setFinish(f)}
                    title={f.label}
                    className={`flex items-center gap-2.5 px-3 py-2 border text-xs font-['IBM_Plex_Sans'] transition-all ${
                      finish.id === f.id
                        ? "border-[oklch(0.32_0.08_145)] bg-[oklch(0.97_0.01_75)]"
                        : "border-[oklch(0.88_0.02_75)] hover:border-[oklch(0.18_0.02_265)]"
                    }`}
                  >
                    <span
                      className="w-4 h-4 border border-black/10 shrink-0"
                      style={{ background: f.color }}
                    />
                    {f.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Hardware */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-7 h-7 bg-[oklch(0.18_0.02_265)] text-white flex items-center justify-center text-xs font-['IBM_Plex_Mono']">04</div>
                <h2 className="font-['IBM_Plex_Sans'] font-semibold text-sm tracking-widest uppercase text-[oklch(0.18_0.02_265)]">
                  Handles & Locks
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {HARDWARE.map((h) => (
                  <button
                    key={h.id}
                    onClick={() => setHardware(h)}
                    className={`p-4 border text-left transition-all flex items-center justify-between ${
                      hardware.id === h.id
                        ? "border-[oklch(0.32_0.08_145)] bg-[oklch(0.97_0.01_75)]"
                        : "border-[oklch(0.88_0.02_75)] hover:border-[oklch(0.18_0.02_265)]"
                    }`}
                  >
                    <span className="font-['IBM_Plex_Sans'] text-sm text-[oklch(0.18_0.02_265)]">{h.label}</span>
                    <span className="text-xs font-['IBM_Plex_Mono'] text-[oklch(0.32_0.08_145)] ml-3">+RM {h.price}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 5: Size */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-7 h-7 bg-[oklch(0.18_0.02_265)] text-white flex items-center justify-center text-xs font-['IBM_Plex_Mono']">05</div>
                <h2 className="font-['IBM_Plex_Sans'] font-semibold text-sm tracking-widest uppercase text-[oklch(0.18_0.02_265)]">
                  Door Size
                </h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {SIZES.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setSize(s)}
                    className={`p-3 border text-left transition-all ${
                      size.id === s.id
                        ? "border-[oklch(0.32_0.08_145)] bg-[oklch(0.97_0.01_75)]"
                        : "border-[oklch(0.88_0.02_75)] hover:border-[oklch(0.18_0.02_265)]"
                    }`}
                  >
                    <div className="font-['IBM_Plex_Mono'] text-xs text-[oklch(0.18_0.02_265)] mb-1">{s.label}</div>
                    {s.price > 0 && <div className="text-[0.65rem] text-[oklch(0.32_0.08_145)]">+RM {s.price}</div>}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Summary panel */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              {/* Door preview */}
              <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-[oklch(0.97_0.01_75)]">
                <img
                  src={doorType.img}
                  alt={`${doorType.label} preview`}
                  className="w-full h-full object-cover transition-all duration-500"
                />
                <div
                  className="absolute inset-0 transition-all duration-500"
                  style={{ background: `${finish.color}22`, mixBlendMode: "multiply" }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[oklch(0.12_0.02_265/0.7)] to-transparent p-4">
                  <div className="text-white/80 text-xs font-['IBM_Plex_Sans'] tracking-wide">
                    {doorType.label} · {finish.label}
                  </div>
                </div>
              </div>

              {/* Price summary */}
              <div className="border border-[oklch(0.88_0.02_75)] bg-white">
                <div className="p-5 border-b border-[oklch(0.88_0.02_75)]">
                  <h3 className="font-['IBM_Plex_Sans'] font-semibold text-sm tracking-widest uppercase text-[oklch(0.18_0.02_265)] mb-4">
                    Configuration Summary
                  </h3>
                  <div className="space-y-2.5 text-xs font-['IBM_Plex_Sans']">
                    {[
                      { label: doorType.label, value: `RM ${doorType.basePrice.toLocaleString()}` },
                      { label: frame.label, value: `+RM ${frame.price}` },
                      { label: hardware.label, value: `+RM ${hardware.price}` },
                      { label: size.label, value: size.price > 0 ? `+RM ${size.price}` : "Included" },
                    ].map((item) => (
                      <div key={item.label} className="flex justify-between">
                        <span className="text-[oklch(0.52_0.02_265)]">{item.label}</span>
                        <span className="font-['IBM_Plex_Mono'] text-[oklch(0.18_0.02_265)]">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-5 border-b border-[oklch(0.88_0.02_75)]">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-['IBM_Plex_Sans'] text-[oklch(0.52_0.02_265)]">Quantity</span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="w-7 h-7 border border-[oklch(0.88_0.02_75)] flex items-center justify-center text-[oklch(0.18_0.02_265)] hover:border-[oklch(0.18_0.02_265)] transition-colors"
                      >
                        −
                      </button>
                      <span className="w-8 text-center font-['IBM_Plex_Mono'] text-sm">{quantity}</span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="w-7 h-7 border border-[oklch(0.88_0.02_75)] flex items-center justify-center text-[oklch(0.18_0.02_265)] hover:border-[oklch(0.18_0.02_265)] transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="hairline mb-3" />
                  <div className="flex items-center justify-between">
                    <span className="font-['IBM_Plex_Sans'] font-semibold text-sm text-[oklch(0.18_0.02_265)]">Estimated Total</span>
                    <span className="font-['IBM_Plex_Mono'] text-xl font-medium text-[oklch(0.32_0.08_145)]">
                      RM {totalPrice.toLocaleString()}
                    </span>
                  </div>
                  <p className="text-[0.65rem] text-[oklch(0.52_0.02_265)] font-['IBM_Plex_Sans'] mt-2">
                    * Estimate only. Installation & delivery not included.
                  </p>
                </div>

                <div className="p-5 space-y-3">
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsapp.replace(/\D/g, "")}?text=${waMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-green w-full flex items-center justify-center gap-2"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Send to WhatsApp
                  </a>
                  <Link href="/quotation" className="btn-outline w-full flex items-center justify-center gap-2">
                    Request Formal Quote
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
