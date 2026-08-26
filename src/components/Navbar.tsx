"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  const navLinks = [
    { label: "FILMS", href: "#films" },
    { label: "STORIES", href: "#gallery" },
    { label: "THE STUDIO", href: "#about" },
    { label: "PACKAGES", href: "#packages" },
    { label: "JOURNAL", href: "#journal" },
  ];

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className="fixed top-0 left-0 w-full z-50 transition-all duration-500"
        style={{
          background: isScrolled
            ? "rgba(14,12,11,0.97)"
            : "linear-gradient(to bottom, rgba(14,12,11,0.72) 0%, transparent 100%)",
          borderBottom: isScrolled ? "1px solid rgba(245,241,235,0.06)" : "1px solid transparent",
          backdropFilter: isScrolled ? "blur(12px)" : "none",
          WebkitBackdropFilter: isScrolled ? "blur(12px)" : "none",
        }}
      >
        <div 
          className="w-full px-8 sm:px-12 lg:px-16 xl:px-24 2xl:px-32 flex items-center justify-between transition-all duration-500"
          style={{ height: isScrolled ? "68px" : "96px" }}
        >
          {/* Brand Wordmark */}
          <a href="#" className="flex flex-col group" aria-label="House of Tales home">
            <span
              className="font-serif font-light uppercase transition-colors duration-300 group-hover:text-[#C86A4B]"
              style={{ fontSize: "13px", letterSpacing: "0.18em", color: "#F5F1EB" }}
            >
              HOUSE OF TALES
            </span>
            <span
              className="font-sans font-bold uppercase"
              style={{ fontSize: "7px", letterSpacing: "0.34em", color: "#C86A4B", marginTop: "3px" }}
            >
              COUPLE STORYTELLER
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="relative group transition-colors duration-300"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "9px",
                  letterSpacing: "0.26em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  color: "rgba(245,241,235,0.55)",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#C86A4B")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(245,241,235,0.55)")}
              >
                {link.label}
                {/* Bottom hover indicator */}
                <span
                  className="absolute -bottom-1 left-0 w-0 h-px bg-[#C86A4B] transition-all duration-400 group-hover:w-full"
                  style={{ transition: "width 0.35s cubic-bezier(0.22, 1, 0.36, 1)" }}
                />
              </motion.a>
            ))}
          </div>

          {/* Desktop CTA */}
          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.55 }}
          >
            <a
              href="#enquiry"
              className="inline-flex items-center gap-2.5 transition-all duration-400 group"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "9px",
                fontWeight: 700,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                textDecoration: "none",
                color: "#F5F1EB",
                border: "1px solid rgba(245,241,235,0.2)",
                padding: "9px 18px",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "#C86A4B";
                (e.currentTarget as HTMLAnchorElement).style.color = "#C86A4B";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(245,241,235,0.2)";
                (e.currentTarget as HTMLAnchorElement).style.color = "#F5F1EB";
              }}
            >
              ENQUIRE NOW
              <span className="transition-transform duration-300 group-hover:translate-x-0.5" style={{ fontSize: "11px" }}>→</span>
            </a>
          </motion.div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#F5F1EB] hover:text-[#C86A4B] transition-colors duration-300 focus:outline-none p-1"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isMenuOpen ? (
                <motion.span
                  key="x"
                  initial={{ rotate: -45, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 45, opacity: 0 }}
                  transition={{ duration: 0.22 }}
                >
                  <X className="w-5 h-5" />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 45, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -45, opacity: 0 }}
                  transition={{ duration: 0.22 }}
                >
                  <Menu className="w-5 h-5" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Full-Screen Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex flex-col md:hidden"
            style={{ background: "#0E0C0B" }}
          >
            {/* Subtle diagonal rule */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "radial-gradient(ellipse at 80% 20%, rgba(184,92,58,0.08), transparent 60%)",
              }}
            />

            <div className="flex flex-col justify-center flex-1 px-10 relative z-10">
              <div className="flex flex-col gap-8">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.45, delay: 0.15 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "clamp(1.8rem, 7vw, 2.8rem)",
                      fontWeight: 300,
                      letterSpacing: "0.04em",
                      textTransform: "uppercase",
                      textDecoration: "none",
                      color: "rgba(245,241,235,0.75)",
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#C86A4B")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(245,241,235,0.75)")}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.55 }}
                className="mt-12"
              >
                <a
                  href="#enquiry"
                  onClick={() => setIsMenuOpen(false)}
                  className="inline-flex items-center gap-3"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "9.5px",
                    fontWeight: 700,
                    letterSpacing: "0.24em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    color: "#F5F1EB",
                    border: "1px solid rgba(245,241,235,0.2)",
                    padding: "14px 24px",
                  }}
                >
                  ENQUIRE NOW →
                </a>
              </motion.div>
            </div>

            {/* Bottom info strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="px-10 pb-10 relative z-10"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "8.5px",
                letterSpacing: "0.22em",
                color: "rgba(245,241,235,0.3)",
                textTransform: "uppercase",
              }}
            >
              GUWAHATI · PAN-INDIA
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
