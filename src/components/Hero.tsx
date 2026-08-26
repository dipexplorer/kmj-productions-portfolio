"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Play } from "lucide-react";

// Stagger variants for the text entrance
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();

  // Parallax: image moves up slightly while text moves down slightly — creates depth
  const imageY = useTransform(scrollY, [0, 700], [0, 90]);
  const textY = useTransform(scrollY, [0, 700], [0, -30]);
  // Subtle Ken Burns zoom on scroll (image grows from 100% to 106% as you scroll)
  const imageScale = useTransform(scrollY, [0, 700], [1.0, 1.06]);
  // Fade out hero content as you scroll away
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative w-full bg-[#0E0C0B] text-[#F5F1EB] overflow-hidden flex flex-col"
      style={{ fontFamily: "var(--font-sans)", minHeight: "100dvh" }}
    >
      {/* ─── BACKGROUND PHOTOGRAPH ─────────────────────────── */}
      <motion.div
        style={{ y: imageY }}
        className="absolute top-0 right-0 h-[115%] w-full md:w-[65%] z-0"
      >
        <motion.div className="relative w-full h-full" style={{ scale: imageScale }}>
          <Image
            src="/images/hero_section_frame.png"
            alt="Assamese wedding couple in traditional Mekhela Chador and Gamosa — House of Tales"
            fill
            priority
            unoptimized
            sizes="(max-width: 768px) 100vw, 65vw"
            className="object-cover object-[center_30%] select-none"
            style={{ filter: "brightness(0.92) contrast(1.04) saturate(0.93)" }}
          />
        </motion.div>

        {/* Left bleed gradient */}
        <div
          className="absolute inset-y-0 left-0 z-10 w-[85%] md:w-[50%]"
          style={{
            background:
              "linear-gradient(to right, #0E0C0B 0%, rgba(14,12,11,0.95) 30%, rgba(14,12,11,0.7) 60%, transparent 100%)",
          }}
        />
        {/* Bottom vignette */}
        <div
          className="absolute inset-x-0 bottom-0 z-10"
          style={{
            height: "45%",
            background:
              "linear-gradient(to top, #0E0C0B 0%, #0E0C0B 8%, rgba(14,12,11,0.6) 40%, transparent 100%)",
          }}
        />
        {/* Top vignette */}
        <div
          className="absolute inset-x-0 top-0 z-10"
          style={{
            height: "30%",
            background:
              "linear-gradient(to bottom, rgba(14,12,11,0.8) 0%, transparent 100%)",
          }}
        />
      </motion.div>

      {/* ─── DARK LEFT PANEL ──────────────────────────────── */}
      <div
        className="absolute inset-y-0 left-0 z-0 hidden md:block"
        style={{ width: "38%" }}
      >
        <div className="absolute inset-0 bg-[#0E0C0B]" />
        {/* Faint diamond texture */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            opacity: 0.018,
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0L40 20L20 40L0 20L20 0ZM20 2L2 20L20 38L38 20L20 2Z' fill='%23F5F1EB' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: "40px 40px",
          }}
        />
        {/* Right feather */}
        <div
          className="absolute inset-y-0 right-0 z-10"
          style={{ width: "100px", background: "linear-gradient(to right, #0E0C0B, transparent)" }}
        />
      </div>

      {/* ─── CONTENT WRAPPER ────────────────────────────────── */}
      <motion.div
        className="relative z-20 flex flex-col h-full flex-1"
        style={{ y: textY, opacity: heroOpacity }}
      >
        {/* ─── MAIN TYPOGRAPHY ──────────────────────────────── */}
        <div className="flex-1 flex items-center">
          <div className="w-full px-8 sm:px-12 lg:px-16 xl:px-24 2xl:px-32">
            <motion.div
              className="relative w-full md:max-w-[42%] lg:max-w-[40%] xl:max-w-[38%] mt-24 md:mt-16"
              variants={containerVariants}
              initial="hidden"
              animate="show"
            >
              {/* Location eyebrow */}
              <motion.div variants={itemVariants} className="flex items-center gap-2.5 mb-8">
                <span style={{ color: "#C86A4B", fontSize: "9px", lineHeight: 1 }}>✦</span>
                <span
                  className="uppercase tracking-[0.28em] font-medium"
                  style={{ fontSize: "8.5px", color: "rgba(245,241,235,0.55)", fontFamily: "var(--font-sans)" }}
                >
                  <span className="text-[#C86A4B] mr-2">✦</span> GUWAHATI & DESTINATIONS PAN-INDIA
                </span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                variants={itemVariants}
                className="uppercase font-light leading-[1.03] mb-10"
                style={{
                  fontFamily: "var(--font-hero)",
                  fontSize: "clamp(2rem, 8vw, 3.4rem)",
                  color: "#F5F1EB",
                  letterSpacing: "0.025em",
                }}
              >
                THE MOMENTS
                <br />
                <em
                  className="font-light not-italic"
                  style={{ color: "#C86A4B", letterSpacing: "0.02em", fontStyle: "italic" }}
                >
                  BETWEEN
                </em>
                <br />
                THE MOMENTS.
              </motion.h1>

              {/* Brand Positioning */}
              <motion.div variants={itemVariants} className="mb-12">
                <p
                  className="font-sans font-bold tracking-[0.22em] uppercase mb-4"
                  style={{ fontSize: "9.5px", color: "#C86A4B" }}
                >
                  TIMELESS AESTHETIC. HONEST STORIES.
                </p>
                <p
                  className="font-light leading-[1.9]"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "clamp(0.75rem, 0.88vw, 0.82rem)",
                    color: "rgba(245,241,235,0.6)",
                    maxWidth: "330px",
                  }}
                >
                  Wedding films and photographs for couples who want their day remembered as it actually felt.
                </p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-6 md:gap-10 mt-4 md:mt-0">
                {/* Primary CTA — underline style */}
                <a
                  href="#gallery"
                  className="group inline-flex items-center gap-3.5 transition-all duration-500"
                  style={{
                    color: "#F5F1EB",
                    borderBottom: "1px solid rgba(245,241,235,0.25)",
                    paddingBottom: "7px",
                    fontSize: "9px",
                    fontFamily: "var(--font-sans)",
                    fontWeight: 700,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    textDecoration: "none",
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
                  VIEW OUR WORK
                  <span
                    className="transform group-hover:translate-x-1 transition-transform duration-300"
                    style={{ fontSize: "13px" }}
                  >
                    →
                  </span>
                </a>

                {/* Secondary CTA — play button */}
                <a
                  href="#films"
                  className="group inline-flex items-center gap-3 transition-colors duration-300"
                  style={{ textDecoration: "none", color: "rgba(245,241,235,0.5)" }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color = "#F5F1EB")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(245,241,235,0.5)")
                  }
                >
                  <div
                    className="flex items-center justify-center rounded-full transition-all duration-500 group-hover:border-[#F5F1EB]"
                    style={{
                      width: "30px",
                      height: "30px",
                      border: "1px solid rgba(245,241,235,0.22)",
                    }}
                  >
                    <Play
                      style={{ width: "9px", height: "9px", fill: "currentColor", marginLeft: "2px" }}
                    />
                  </div>
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
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* ─── BOTTOM BAR ─────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.9 }}
          className="relative flex items-end justify-between pb-10 px-8 sm:px-12 lg:px-16 xl:px-20"
          style={{ zIndex: 20 }}
        >
          {/* Bottom-left dot */}
          <div className="w-1.5 h-1.5 rounded-full bg-[rgba(200,106,75,0.35)]" />

          {/* Scroll indicator */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-10 flex flex-col items-center gap-3" style={{ zIndex: 25 }}>
            <span
              className="uppercase tracking-[0.32em]"
              style={{ fontFamily: "var(--font-sans)", fontSize: "7.5px", color: "rgba(245,241,235,0.28)" }}
            >
              SCROLL TO EXPLORE
            </span>
            {/* Animated scroll line */}
            <div className="relative w-px h-9 overflow-hidden" style={{ background: "rgba(245,241,235,0.08)" }}>
              <motion.div
                className="absolute top-0 left-0 w-full bg-[rgba(245,241,235,0.35)]"
                animate={{ y: ["0%", "100%"] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.3 }}
                style={{ height: "50%" }}
              />
            </div>
          </div>

          {/* Bottom-right watermark */}
          <div className="flex items-center gap-3">
            <span
              style={{
                fontFamily: "var(--font-hero)",
                fontSize: "11.5px",
                color: "rgba(245,241,235,0.35)",
                letterSpacing: "0.1em",
              }}
            >
              HOUSE OF TALES
            </span>
            <div className="w-6 h-px bg-[rgba(245,241,235,0.12)]" />
          </div>
        </motion.div>
      </motion.div>

      {/* ─── RIGHT SIDE PAGE INDICATORS ─────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute right-7 top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col items-center gap-5"
        style={{ pointerEvents: "none" }}
      >
        {["01", "02", "03", "04"].map((num, i) => (
          <div key={num} className="flex items-center gap-2">
            {i === 0 && (
              <div style={{ width: "16px", height: "1px", background: "rgba(200,106,75,0.6)" }} />
            )}
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "8.5px",
                fontWeight: i === 0 ? 700 : 400,
                color: i === 0 ? "rgba(200,106,75,0.75)" : "rgba(245,241,235,0.2)",
                letterSpacing: "0.08em",
              }}
            >
              {num}
            </span>
          </div>
        ))}
        <div
          style={{
            width: "1px",
            height: "36px",
            background: "linear-gradient(to bottom, rgba(245,241,235,0.16), transparent)",
            marginTop: "4px",
          }}
        />
      </motion.div>

      {/* ─── EDITORIAL INNER BORDER ──────────────────────────── */}
      <div className="absolute inset-4 sm:inset-6 lg:inset-8 border border-[rgba(245,241,235,0.05)] pointer-events-none z-40 hidden md:block">
        <div className="absolute -top-px -left-px w-3 h-3 border-t border-l border-[#C86A4B] opacity-50" />
        <div className="absolute -top-px -right-px w-3 h-3 border-t border-r border-[#C86A4B] opacity-50" />
        <div className="absolute -bottom-px -left-px w-3 h-3 border-b border-l border-[#C86A4B] opacity-50" />
        <div className="absolute -bottom-px -right-px w-3 h-3 border-b border-r border-[#C86A4B] opacity-50" />
      </div>
    </section>
  );
}
