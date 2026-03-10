// Master Frame Industries — Product Detail Page
// Design: Architectural Precision — Swiss Grid Modernism

import { Link, useParams } from "wouter";
import { ChevronRight, Check, Phone, MessageSquare } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { PRODUCTS, COMPANY_INFO } from "@/lib/data";

export default function ProductDetail() {
  const params = useParams<{ id: string }>();
  const product = PRODUCTS.find((p) => p.id === params.id);

  if (!product) {
    return (
      <div className="min-h-screen bg-[oklch(0.99_0.005_75)]">
        <Navbar />
        <div className="pt-[4.5rem] container py-20 text-center">
          <h1 className="font-['Cormorant_Garamond'] text-3xl text-[oklch(0.18_0.02_265)] mb-4">Product Not Found</h1>
          <Link href="/products" className="btn-primary">Back to Products</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const related = PRODUCTS.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-[oklch(0.99_0.005_75)]">
      <Navbar />

      <div className="pt-[4.5rem]">
        {/* Breadcrumb */}
        <div className="bg-[oklch(0.97_0.01_75)] border-b border-[oklch(0.88_0.02_75)]">
          <div className="container py-3">
            <div className="flex items-center gap-2 text-xs font-['IBM_Plex_Sans'] text-[oklch(0.52_0.02_265)] tracking-wide">
              <Link href="/" className="hover:text-[oklch(0.32_0.08_145)] transition-colors">Home</Link>
              <ChevronRight size={12} />
              <Link href="/products" className="hover:text-[oklch(0.32_0.08_145)] transition-colors">Products</Link>
              <ChevronRight size={12} />
              <span className="text-[oklch(0.18_0.02_265)]">{product.name}</span>
            </div>
          </div>
        </div>

        {/* Product detail */}
        <div className="container py-12">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden bg-[oklch(0.97_0.01_75)]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {product.badge && (
                <div className="absolute top-4 left-4 bg-[oklch(0.32_0.08_145)] text-white text-[0.6rem] font-['IBM_Plex_Sans'] tracking-[0.12em] uppercase px-3 py-1.5">
                  {product.badge}
                </div>
              )}
            </div>

            {/* Info */}
            <div>
              <div className="section-label mb-3">{product.subcategory}</div>
              <h1 className="font-['Cormorant_Garamond'] font-semibold text-[oklch(0.18_0.02_265)] mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                {product.name}
              </h1>
              <div className="hairline mb-6" />
              <p className="text-[oklch(0.35_0.02_265)] font-['IBM_Plex_Sans'] text-sm leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Price */}
              <div className="bg-[oklch(0.97_0.01_75)] border border-[oklch(0.88_0.02_75)] p-4 mb-8 flex items-center justify-between">
                <div>
                  <div className="text-xs font-['IBM_Plex_Sans'] text-[oklch(0.52_0.02_265)] tracking-wide mb-1">Estimated Price Range</div>
                  <div className="font-['IBM_Plex_Mono'] text-xl font-medium text-[oklch(0.32_0.08_145)]">
                    {product.priceRange}
                  </div>
                </div>
                <div className="text-xs text-[oklch(0.52_0.02_265)] font-['IBM_Plex_Sans'] text-right max-w-[140px]">
                  Final price depends on customization & installation
                </div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="font-['IBM_Plex_Sans'] font-semibold text-sm text-[oklch(0.18_0.02_265)] mb-4 tracking-wide uppercase">
                  Key Features
                </h3>
                <ul className="space-y-2.5">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <Check size={14} className="text-[oklch(0.32_0.08_145)] mt-0.5 shrink-0" />
                      <span className="text-sm font-['IBM_Plex_Sans'] text-[oklch(0.35_0.02_265)]">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Specs table */}
              <div className="mb-8">
                <h3 className="font-['IBM_Plex_Sans'] font-semibold text-sm text-[oklch(0.18_0.02_265)] mb-4 tracking-wide uppercase">
                  Specifications
                </h3>
                <table className="w-full text-sm font-['IBM_Plex_Sans']">
                  <tbody>
                    <tr className="border-b border-[oklch(0.88_0.02_75)]">
                      <td className="py-2.5 text-[oklch(0.52_0.02_265)] w-1/3">Materials</td>
                      <td className="py-2.5 text-[oklch(0.18_0.02_265)]">{product.materials.join(", ")}</td>
                    </tr>
                    <tr className="border-b border-[oklch(0.88_0.02_75)]">
                      <td className="py-2.5 text-[oklch(0.52_0.02_265)]">Sizes</td>
                      <td className="py-2.5 text-[oklch(0.18_0.02_265)]">{product.sizes.join(", ")}</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 text-[oklch(0.52_0.02_265)]">Category</td>
                      <td className="py-2.5 text-[oklch(0.18_0.02_265)]">{product.subcategory}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3">
                <Link href="/quotation" className="btn-primary flex items-center gap-2">
                  Request Quotation
                </Link>
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(`Hi! I'm interested in the ${product.name}. Can you provide more information?`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-green flex items-center gap-2"
                >
                  <MessageSquare size={14} />
                  WhatsApp Enquiry
                </a>
                <a href={`tel:${COMPANY_INFO.phone}`} className="btn-outline flex items-center gap-2">
                  <Phone size={14} />
                  Call Us
                </a>
              </div>
            </div>
          </div>

          {/* Related products */}
          {related.length > 0 && (
            <div>
              <div className="hairline mb-10" />
              <h2 className="font-['Cormorant_Garamond'] text-2xl font-semibold text-[oklch(0.18_0.02_265)] mb-8">
                Related Products
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {related.map((p) => (
                  <Link key={p.id} href={`/product/${p.id}`} className="group block product-card">
                    <div className="relative overflow-hidden aspect-[4/3]">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <div className="text-[0.6rem] font-['IBM_Plex_Sans'] tracking-[0.15em] uppercase text-[oklch(0.52_0.02_265)] mb-1">
                        {p.subcategory}
                      </div>
                      <h3 className="font-['Cormorant_Garamond'] text-lg font-semibold text-[oklch(0.18_0.02_265)]">
                        {p.name}
                      </h3>
                      <div className="text-sm font-['IBM_Plex_Mono'] text-[oklch(0.32_0.08_145)] mt-2">
                        {p.priceRange}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
