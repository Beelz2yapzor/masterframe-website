// Master Frame Industries — Navbar Component
// Design: Architectural Precision — Swiss Grid Modernism
// Sticky top nav with logo, navigation links, and CTA button

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone } from "lucide-react";
import { COMPANY_INFO } from "@/lib/data";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/customize", label: "Configurator" },
  { href: "/quotation", label: "Get Quote" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-[oklch(0.88_0.02_75)]"
            : "bg-white border-b border-[oklch(0.88_0.02_75)]"
        }`}
      >
        {/* Top bar */}
        <div className="bg-[oklch(0.18_0.02_265)] text-white py-1.5 px-4">
          <div className="container flex items-center justify-between">
            <span className="text-xs font-['IBM_Plex_Sans'] tracking-wide opacity-80">
              Mon–Sat: 8:30am – 5:30pm
            </span>
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center gap-1.5 text-xs font-['IBM_Plex_Sans'] tracking-wide opacity-80 hover:opacity-100 transition-opacity"
            >
              <Phone size={11} />
              {COMPANY_INFO.phone}
            </a>
          </div>
        </div>

        {/* Main nav */}
        <div className="container">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-0 leading-none group min-w-0 shrink-0">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663404946434/GdNs5yfBimhBHqkRgaSdDG/LOGO-02_a8b22de6.png"
                alt="Master Frame Industries Logo"
                className="h-40 w-auto group-hover:opacity-80 transition-opacity shrink-0"
              />
              <div className="flex flex-col min-w-0" style={{ marginLeft: '-2.5rem' }}>
                <span
                  className="font-['Cormorant_Garamond'] font-600 text-lg md:text-xl tracking-tight text-[oklch(0.18_0.02_265)] group-hover:text-[oklch(0.32_0.08_145)] transition-colors truncate"
                  style={{ fontWeight: 600 }}
                >
                  MASTER FRAME
                </span>
                <span className="text-[0.5rem] md:text-[0.6rem] font-['IBM_Plex_Sans'] tracking-[0.18em] uppercase text-[oklch(0.52_0.02_265)] truncate">
                  Industries Sdn Bhd
                </span>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link ${location === link.href ? "active text-[oklch(0.32_0.08_145)]" : ""}`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA + Mobile toggle */}
            <div className="flex items-center gap-3">
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex btn-green text-xs py-2.5 px-5 items-center gap-2"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us
              </a>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 text-[oklch(0.18_0.02_265)] hover:text-[oklch(0.32_0.08_145)] transition-colors"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-30 bg-white pt-[calc(3.5rem+2.5rem)]">
          <nav className="container py-8 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`py-4 border-b border-[oklch(0.88_0.02_75)] font-['IBM_Plex_Sans'] text-sm tracking-widest uppercase transition-colors ${
                  location === link.href
                    ? "text-[oklch(0.32_0.08_145)]"
                    : "text-[oklch(0.18_0.02_265)]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 btn-green flex items-center justify-center gap-2"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
