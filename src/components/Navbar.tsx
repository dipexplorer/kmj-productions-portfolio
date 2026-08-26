"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "FILMS", href: "#films" },
    { label: "STORIES", href: "#gallery" },
    { label: "THE STUDIO", href: "#about" },
    { label: "PACKAGES", href: "#packages" },
    { label: "JOURNAL", href: "#journal" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 py-4 bg-[#0E0C0B]/95 border-b border-white/5 shadow-xl backdrop-blur-sm transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 flex items-center justify-between">
        {/* Brand Logo / Wordmark */}
        <a href="#" className="flex flex-col group">
          <span
            className="font-serif font-light uppercase transition-colors group-hover:text-primary"
            style={{ fontSize: "13.5px", letterSpacing: "0.16em", color: "#F5F1EB" }}
          >
            AURA STUDIOS
          </span>
          <span
            className="font-sans font-semibold uppercase"
            style={{ fontSize: "7px", letterSpacing: "0.30em", color: "#C86A4B", marginTop: "3px" }}
          >
            COUPLE STORYTELLER
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition-colors duration-300 font-medium"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "9.5px",
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                textDecoration: "none",
                color: "rgba(245,241,235,0.58)",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#C86A4B")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(245,241,235,0.58)")}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="#enquiry"
            className="inline-flex items-center gap-2 transition-all duration-400"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "9.5px",
              fontWeight: 600,
              letterSpacing: "0.20em",
              textTransform: "uppercase",
              textDecoration: "none",
              color: "#F5F1EB",
              border: "1px solid rgba(245,241,235,0.25)",
              padding: "8px 16px",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "#C86A4B";
              (e.currentTarget as HTMLAnchorElement).style.color = "#C86A4B";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(245,241,235,0.25)";
              (e.currentTarget as HTMLAnchorElement).style.color = "#F5F1EB";
            }}
          >
            ENQUIRE NOW
            <span style={{ fontSize: "11px" }}>→</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-[#FDFBF7] hover:text-primary transition-colors focus:outline-none"
        >
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0D0B0A] border-b border-white/10 shadow-2xl px-6 py-8 flex flex-col space-y-6 animate-in fade-in slide-in-from-top-5 duration-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-xs uppercase tracking-widest text-[#FDFBF7] font-medium hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#enquiry"
            onClick={() => setIsMenuOpen(false)}
            className="inline-flex items-center justify-center space-x-2 border border-white/20 text-[#FDFBF7] py-3 text-xs font-bold uppercase tracking-widest transition-all"
          >
            <span>ENQUIRE NOW</span>
            <span>→</span>
          </a>
        </div>
      )}
    </nav>
  );
}
