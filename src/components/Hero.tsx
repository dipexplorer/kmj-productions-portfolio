"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Play } from "lucide-react";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 80]);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative h-screen w-full bg-[#0E0C0B] text-[#F5F1EB] overflow-hidden flex flex-col"
      style={{ fontFamily: "var(--font-sans)" }}
    >
      {/* ─── BACKGROUND PHOTOGRAPH ─────────────────────────── */}
      {/* The photograph sits on the right 62% of the screen.
          A smooth gradient on its left edge blends it into the dark background.
          No large black rectangle — just a natural cinematic fade. */}
      <motion.div
        style={{ y }}
        className="absolute top-0 right-0 h-[110%] w-full md:w-[65%] z-0"
      >
        <Image
          src="/images/assamese_couple.png"
          alt="Assamese wedding couple — KMJ Productions"
          fill
          priority
          unoptimized
          sizes="(max-width: 768px) 100vw, 65vw"
          className="object-cover object-[20%_center] select-none"
          style={{ filter: "brightness(0.97) contrast(1.03) saturate(0.95)" }}
        />
        {/* Left bleed gradient — smooth, organic integration into dark zone */}
        <div
          className="absolute inset-y-0 left-0 z-10"
          style={{
            width: "45%",
            background:
              "linear-gradient(to right, #0E0C0B 0%, #0E0C0B 25%, rgba(14,12,11,0.85) 50%, transparent 100%)",
          }}
        />
        {/* Bottom vignette - blends flawlessly into the next section */}
        <div
          className="absolute inset-x-0 bottom-0 z-10"
          style={{
            height: "40%",
            background:
              "linear-gradient(to top, #0E0C0B 0%, #0E0C0B 10%, rgba(14,12,11,0.55) 45%, transparent 100%)",
          }}
        />
        {/* Top vignette — keeps navigation readable against bright sky */}
        <div
          className="absolute inset-x-0 top-0 z-10"
          style={{
            height: "28%",
            background:
              "linear-gradient(to bottom, rgba(14,12,11,0.75) 0%, transparent 100%)",
          }}
        />
      </motion.div>

      {/* ─── DARK LEFT PANEL (typography zone) ────────────────
          Pure dark background for the left 38%, so text always has
          maximum contrast with zero overlay on the photograph. */}
      <div
        className="absolute inset-y-0 left-0 z-0 hidden md:block"
        style={{ width: "38%" }}
      >
        {/* Solid background */}
        <div className="absolute inset-0 bg-[#0E0C0B]" />
        
        {/* Graphic: Faint Assamese-Inspired Weave Pattern (Kept extremely subtle for texture) */}
        <div
          className="absolute inset-0 z-0 opacity-[0.015] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0L40 20L20 40L0 20L20 0ZM20 2L2 20L20 38L38 20L20 2Z' fill='%23F5F1EB' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Right edge feather into photo */}
        <div
          className="absolute inset-y-0 right-0 z-10"
          style={{
            width: "80px",
            background:
              "linear-gradient(to right, #0E0C0B, transparent)",
          }}
        />
      </div>

      {/* ─── CONTENT WRAPPER ──────────────────────────────────── */}
      <div className="relative z-20 flex flex-col h-full">

        {/* ─── MAIN TYPOGRAPHY CONTENT ─────────────────────────── */}
        <div className="flex-1 flex items-center">
          <div
            className="w-full px-8 sm:px-12 lg:px-16 xl:px-20"
          >
            {/* Left column: max 40% of viewport width on desktop */}
            <div className="relative md:max-w-[42%] lg:max-w-[40%] xl:max-w-[38%] mt-12">
              
              {/* Location eyebrow */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="flex items-center gap-2.5 mb-8"
              >
                <span
                  style={{
                    color: "#C86A4B",
                    fontSize: "9px",
                    lineHeight: 1,
                  }}
                >
                  ✦
                </span>
                <span
                  className="uppercase tracking-[0.25em] font-medium"
                  style={{
                    fontSize: "9px",
                    color: "rgba(245,241,235,0.6)",
                    fontFamily: "var(--font-sans)",
                  }}
                >
                  GUWAHATI &amp; DESTINATIONS PAN-INDIA
                </span>
              </motion.div>

              {/* Main headline - resized for better hierarchy */}
              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="uppercase font-light leading-[1.05] mb-10"
                style={{
                  fontFamily: "var(--font-hero)",
                  fontSize: "clamp(2rem, 3.4vw, 3.2rem)",
                  color: "#F5F1EB",
                  letterSpacing: "0.02em",
                  wordSpacing: "0.05em",
                }}
              >
                THE MOMENTS
                <br />
                <span
                  className="italic font-light"
                  style={{ color: "#C86A4B", letterSpacing: "0.015em" }}
                >
                  BETWEEN
                </span>
                <br />
                THE MOMENTS.
              </motion.h1>

              {/* Brand Positioning */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.55 }}
                className="mb-12"
              >
                <p
                  className="font-sans font-bold tracking-[0.2em] uppercase mb-4"
                  style={{
                    fontSize: "10px",
                    color: "#C86A4B",
                  }}
                >
                  ASSAMESE ROOTS. HONEST STORIES.
                </p>
                <p
                  className="font-light leading-[1.8]"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "clamp(0.75rem, 0.9vw, 0.85rem)",
                    color: "rgba(245,241,235,0.65)",
                    maxWidth: "340px",
                  }}
                >
                  Wedding films and photographs for couples who want their day remembered as it actually felt.
                </p>
              </motion.div>

              {/* CTA buttons - Editorial style */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="flex items-center gap-10"
              >
                {/* Primary CTA */}
                <a
                  href="#gallery"
                  className="group inline-flex items-center gap-4 transition-all duration-500"
                  style={{
                    color: "#F5F1EB",
                    borderBottom: "1px solid rgba(245,241,235,0.3)",
                    paddingBottom: "6px",
                    fontSize: "9.5px",
                    fontFamily: "var(--font-sans)",
                    fontWeight: 600,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "#C86A4B";
                    (e.currentTarget as HTMLAnchorElement).style.color = "#C86A4B";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(245,241,235,0.3)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "#F5F1EB";
                  }}
                >
                  VIEW OUR WORK
                  <span
                    className="transform group-hover:translate-x-1 transition-transform duration-300"
                    style={{ fontSize: "12px" }}
                  >
                    →
                  </span>
                </a>

                {/* Secondary CTA */}
                <a
                  href="#films"
                  className="group inline-flex items-center gap-3 transition-colors duration-300"
                  style={{ textDecoration: "none", color: "rgba(245,241,235,0.6)" }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color = "#F5F1EB")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(245,241,235,0.6)")
                  }
                >
                  <span
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "9px",
                      fontWeight: 600,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                    }}
                  >
                    PLAY FILM
                  </span>
                  <div
                    className="flex items-center justify-center rounded-full transition-all duration-500 group-hover:border-[#F5F1EB]"
                    style={{
                      width: "28px",
                      height: "28px",
                      border: "1px solid rgba(245,241,235,0.2)",
                    }}
                  >
                    <Play
                      style={{ width: "9px", height: "9px", fill: "currentColor", marginLeft: "2px" }}
                    />
                  </div>
                </a>
              </motion.div>


            </div>
          </div>
        </div>

        {/* ─── BOTTOM BAR ───────────────────────────────────────── */}
        <div
          className="relative flex items-end justify-between pb-10 px-8 sm:px-12 lg:px-16 xl:px-20"
          style={{ zIndex: 20 }}
        >
          {/* Bottom-left: decorative dot */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="w-1.5 h-1.5 rounded-full bg-[rgba(200,106,75,0.4)]"
          />

          {/* Bottom-center: Scroll to explore */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="absolute left-1/2 -translate-x-1/2 bottom-10 flex flex-col items-center gap-3"
            style={{ zIndex: 25 }}
          >
            <span
              className="uppercase tracking-[0.3em]"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "8px",
                color: "rgba(245,241,235,0.3)",
              }}
            >
              SCROLL TO EXPLORE
            </span>
            <div
              className="w-px h-8 bg-gradient-to-b from-[rgba(245,241,235,0.3)] to-transparent"
            />
          </motion.div>

          {/* Bottom-right: Subtle KMJ Mark */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.0, duration: 0.9, ease: "easeOut" }}
            className="flex items-center gap-3"
          >
            <span
              style={{
                fontFamily: "var(--font-hero)",
                fontSize: "12px",
                color: "rgba(245,241,235,0.4)",
                letterSpacing: "0.1em",
              }}
            >
              KMJ
            </span>
            <div className="w-6 h-px bg-[rgba(245,241,235,0.15)]" />
          </motion.div>
        </div>
      </div>

      {/* ─── RIGHT EDGE PAGE INDICATORS ──────────────────────────
          01 / 02 / 03 / 04 — barely visible, editorial detail */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.8 }}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col items-center gap-5"
        style={{ pointerEvents: "none" }}
      >
        {["01", "02", "03", "04"].map((num, i) => (
          <div key={num} className="flex items-center gap-2">
            {i === 0 && (
              <div
                style={{
                  width: "18px",
                  height: "1px",
                  background: "rgba(200,106,75,0.65)",
                }}
              />
            )}
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "9px",
                fontWeight: i === 0 ? 700 : 400,
                color: i === 0 ? "rgba(200,106,75,0.80)" : "rgba(245,241,235,0.22)",
                letterSpacing: "0.08em",
              }}
            >
              {num}
            </span>
          </div>
        ))}
        {/* Vertical line below indicators */}
        <div
          style={{
            width: "1px",
            height: "40px",
            background:
              "linear-gradient(to bottom, rgba(245,241,235,0.18), transparent)",
            marginTop: "4px",
          }}
        />
      </motion.div>

      {/* ─── THIN EDITORIAL INNER BORDER ──────────────────────── */}
      <div className="absolute inset-4 sm:inset-6 lg:inset-8 border border-[rgba(245,241,235,0.06)] pointer-events-none z-40 hidden md:block">
        {/* Corner Terracotta Accents */}
        <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-[#C86A4B] opacity-60" />
        <div className="absolute -top-1 -right-1 w-2 h-2 border-t border-r border-[#C86A4B] opacity-60" />
        <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b border-l border-[#C86A4B] opacity-60" />
        <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-[#C86A4B] opacity-60" />
        {/* Minimal decorative dot on edges */}
        <div className="absolute top-1/2 -translate-y-1/2 -left-[2px] w-[3px] h-[3px] rounded-full bg-[rgba(245,241,235,0.15)]" />
        <div className="absolute top-1/2 -translate-y-1/2 -right-[2px] w-[3px] h-[3px] rounded-full bg-[rgba(245,241,235,0.15)]" />
      </div>

      {/* ─── FILM GRAIN OVERLAY ───────────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none z-40"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.04'/%3E%3C/svg%3E")`,
        }}
      />

    </section>
  );
}
