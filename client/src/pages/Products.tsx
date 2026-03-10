// Master Frame Industries — Products Page
// Design: Architectural Precision — Swiss Grid Modernism

import { useState } from "react";
import { Link, useParams } from "wouter";
import { ChevronRight, Filter, Search } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { PRODUCTS, CATEGORIES } from "@/lib/data";

export default function Products() {
  const params = useParams<{ category?: string }>();
  const [activeCategory, setActiveCategory] = useState(params.category || "all");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = PRODUCTS.filter((p) => {
    const matchCat = activeCategory === "all" || p.category === activeCategory;
    const matchSearch =
      !searchQuery ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="min-h-screen bg-[oklch(0.99_0.005_75)]">
      <Navbar />

      {/* Page header */}
      <div className="pt-[4.5rem] bg-[oklch(0.18_0.02_265)]">
        <div className="container py-16">
          <div className="flex items-center gap-2 text-white/40 text-xs font-['IBM_Plex_Sans'] tracking-wide mb-4">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-white/70">Products</span>
          </div>
          <h1 className="font-['Cormorant_Garamond'] font-light text-white mb-3" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
            Product Catalog
          </h1>
          <p className="text-white/60 font-['IBM_Plex_Sans'] text-sm max-w-xl">
            Browse our complete range of doors, frames, aluminium products, and architectural fittings.
          </p>
        </div>
      </div>

      <div className="container py-12">
        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-10">
          {/* Category tabs */}
          <div className="flex flex-wrap gap-2 flex-1">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs font-['IBM_Plex_Sans'] tracking-[0.12em] uppercase border transition-all ${
                  activeCategory === cat.id
                    ? "bg-[oklch(0.18_0.02_265)] text-white border-[oklch(0.18_0.02_265)]"
                    : "bg-white text-[oklch(0.35_0.02_265)] border-[oklch(0.88_0.02_75)] hover:border-[oklch(0.18_0.02_265)]"
                }`}
              >
                {cat.label}
                <span className="ml-1.5 opacity-50">({cat.count})</span>
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[oklch(0.52_0.02_265)]" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 pr-4 py-2.5 border border-[oklch(0.88_0.02_75)] bg-white text-sm font-['IBM_Plex_Sans'] text-[oklch(0.18_0.02_265)] placeholder:text-[oklch(0.65_0.02_265)] focus:outline-none focus:border-[oklch(0.32_0.08_145)] w-64 transition-colors"
            />
          </div>
        </div>

        {/* Results count */}
        <div className="flex items-center gap-3 mb-8">
          <div className="hairline flex-1" />
          <span className="text-xs font-['IBM_Plex_Sans'] text-[oklch(0.52_0.02_265)] tracking-wide whitespace-nowrap">
            {filtered.length} product{filtered.length !== 1 ? "s" : ""}
          </span>
          <div className="hairline flex-1" />
        </div>

        {/* Product grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <Filter size={32} className="mx-auto text-[oklch(0.82_0.04_75)] mb-4" />
            <p className="font-['IBM_Plex_Sans'] text-[oklch(0.52_0.02_265)]">No products found. Try adjusting your filters.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
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
                    <div className="absolute inset-0 bg-[oklch(0.18_0.02_265/0)] group-hover:bg-[oklch(0.18_0.02_265/0.05)] transition-colors" />
                  </div>
                  <div className="p-4">
                    <div className="text-[0.6rem] font-['IBM_Plex_Sans'] tracking-[0.15em] uppercase text-[oklch(0.52_0.02_265)] mb-1.5">
                      {product.subcategory}
                    </div>
                    <h3 className="font-['Cormorant_Garamond'] text-lg font-semibold text-[oklch(0.18_0.02_265)] mb-1">
                      {product.name}
                    </h3>
                    <p className="text-xs text-[oklch(0.52_0.02_265)] font-['IBM_Plex_Sans'] leading-relaxed mb-3 line-clamp-2">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-['IBM_Plex_Mono'] text-[oklch(0.32_0.08_145)] font-medium">
                        {product.priceRange}
                      </span>
                      <span className="text-xs font-['IBM_Plex_Sans'] text-[oklch(0.32_0.08_145)] group-hover:underline">
                        View details →
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 p-8 bg-[oklch(0.97_0.01_75)] border border-[oklch(0.88_0.02_75)] flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-['Cormorant_Garamond'] text-xl font-semibold text-[oklch(0.18_0.02_265)] mb-1">
              Can't find what you're looking for?
            </h3>
            <p className="text-sm text-[oklch(0.52_0.02_265)] font-['IBM_Plex_Sans']">
              We offer custom manufacturing. Contact us to discuss your specific requirements.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <Link href="/quotation" className="btn-primary">
              Request Quote
            </Link>
            <Link href="/contact" className="btn-outline">
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
