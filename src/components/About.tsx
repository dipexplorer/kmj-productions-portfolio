"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Camera, Film, Users, MapPin } from "lucide-react";

const stats = [
  { icon: Camera, value: "8+", label: "Years Active" },
  { icon: Film, value: "350+", label: "Weddings Captured" },
  { icon: Users, value: "15K+", label: "IG Followers" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-32 lg:py-48 bg-[#0E0C0B] overflow-hidden"
    >
      {/* Cinematic noise texture overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.025] pointer-events-none mix-blend-overlay"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" }}
      />

      {/* Subtle vertical rule on far-left edge */}
      <div
        className="absolute left-12 top-1/4 bottom-1/4 w-px hidden xl:block z-0"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(200,106,75,0.15), transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* ── IMAGE COLUMN ─────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* ── HIGH-END EDITORIAL IMAGE FRAME ── */}
            <div className="relative aspect-[3/4] p-[1px] group cursor-pointer">
              {/* Refined double-border matte */}
              <div className="absolute inset-0 border border-[rgba(245,241,235,0.1)] transition-colors duration-700 group-hover:border-[rgba(200,106,75,0.3)] z-20 pointer-events-none" />
              <div className="absolute inset-3 border border-[rgba(245,241,235,0.05)] transition-all duration-700 group-hover:inset-4 group-hover:border-[rgba(245,241,235,0.15)] z-20 pointer-events-none" />

              {/* Offset elegant shadow block (more subtle) */}
              <div
                className="absolute -bottom-4 -right-4 w-full h-full bg-[#0a0908] -z-10 transition-transform duration-700 group-hover:translate-x-1 group-hover:translate-y-1"
                style={{ border: "1px solid rgba(245,241,235,0.04)" }}
              />

              {/* Main image container */}
              <div className="relative w-full h-full overflow-hidden bg-[#0a0908]">
                <Image
                  src="/images/candid_couple_laughing,.png"
                  alt="KMJ Productions — Behind the Scenes"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-all duration-1000 group-hover:scale-105 filter grayscale-[20%] opacity-90 group-hover:grayscale-0 group-hover:opacity-100"
                  style={{ filter: "brightness(0.98) contrast(1.02) saturate(0.95)" }}
                />

                {/* Bottom caption with gradient fade */}
                <div
                  className="absolute bottom-0 inset-x-0 p-8 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{
                    background: "linear-gradient(to top, rgba(14,12,11,0.95) 0%, rgba(14,12,11,0.2) 50%, transparent 100%)",
                  }}
                >
                  <p
                    className="italic font-light transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700"
                    style={{
                      fontFamily: "var(--font-hero)",
                      fontSize: "15px",
                      color: "rgba(245,241,235,0.9)",
                      letterSpacing: "0.02em",
                    }}
                  >
                    Behind the lens — Guwahati, Assam
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Ring Badge (Replaces heavy glass seal) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -30 }}
              animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
              transition={{ delay: 0.6, duration: 1.2, ease: "easeOut" }}
              className="absolute -left-8 top-12 lg:-left-12 z-30 flex items-center justify-center rounded-full pointer-events-none mix-blend-screen"
              style={{
                width: "120px",
                height: "120px",
              }}
            >
              {/* Center KMJ Text */}
              <div className="text-center">
                <span
                  style={{
                    fontFamily: "var(--font-hero)",
                    fontSize: "22px",
                    fontWeight: 300,
                    color: "#C86A4B",
                    lineHeight: 1,
                    display: "block",
                  }}
                >
                  KMJ
                </span>
              </div>
              
              {/* Rotating SVG Text Ring */}
              <motion.svg
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 100 100"
              >
                <path
                  id="weddingsCircle"
                  d="M 50,50 m -40,0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
                  fill="none"
                />
                <text
                  style={{
                    fontSize: "8.5px",
                    textTransform: "uppercase",
                    letterSpacing: "0.3em",
                    fill: "rgba(245,241,235,0.7)",
                    fontFamily: "var(--font-sans)",
                    fontWeight: 600,
                  }}
                >
                  <textPath href="#weddingsCircle" startOffset="0%">
                    · 350+ WEDDINGS · PAN INDIA
                  </textPath>
                </text>
              </motion.svg>
            </motion.div>
          </motion.div>

          {/* ── TEXT COLUMN ─────────────────────────── */}
          <div className="flex flex-col">
            {/* Label */}
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className="mb-8 relative"
            >
              <div className="w-4 h-[1px] bg-[#C86A4B] mb-5" />
              <span className="font-sans text-[10px] font-bold tracking-[0.3em] uppercase text-[#F5F1EB]/60">
                03 <span className="text-[#C86A4B] mx-2">/</span> THE STUDIO
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className="section-heading mb-10 leading-[1.05]"
              style={{ fontFamily: "var(--font-hero)", fontSize: "clamp(2.6rem, 4vw, 4.2rem)", color: "#F5F1EB" }}
            >
              STORYTELLERS<br />
              <span className="italic text-[#C86A4B] font-light normal-case">at heart.</span>
            </motion.h2>

            {/* Body copy */}
            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className="space-y-6 mb-12"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "14px",
                fontWeight: 300,
                lineHeight: "1.85",
                color: "rgba(245,241,235,0.75)",
              }}
            >
              <p>
                We don&apos;t do stiff, traditional poses. Based in Guwahati, Assam,{" "}
                <strong style={{ color: "#F5F1EB", fontWeight: 500 }}>KMJ Productions</strong> is a
                collective of candid photographers and cinematic filmmakers dedicated to catching love
                in its truest, most joyful motion.
              </p>
              <p>
                From the emotional chaos of traditional Bihu celebrations to intimate Haldi moments,
                we capture the unscripted fragments of your celebration — every frame treated as a
                customised storybook of your wedding day.
              </p>
            </motion.div>

            {/* Location indicator - editorial style */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className="flex flex-col gap-3 mb-16"
            >
              <div className="flex items-center gap-3">
                <MapPin style={{ width: "12px", height: "12px", color: "#C86A4B" }} strokeWidth={1.5} />
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "9px",
                    fontWeight: 600,
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    color: "rgba(245,241,235,0.8)",
                  }}
                >
                  Guwahati <span className="text-[#C86A4B] mx-2">—</span> Travelling Pan-India
                </span>
              </div>
              <div className="w-12 h-px bg-gradient-to-r from-[rgba(245,241,235,0.15)] to-transparent ml-6" />
            </motion.div>

            {/* Stats row */}
            <motion.div
              custom={5}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className="flex flex-wrap items-center justify-between gap-8 pt-10 relative"
            >
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-[rgba(245,241,235,0.1)] to-transparent" />
              
              {stats.map(({ icon: Icon, value, label }, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <div className="flex items-center gap-2.5">
                    <Icon style={{ width: "11px", height: "11px", color: "#C86A4B" }} strokeWidth={1.5} />
                    <span
                      style={{
                        fontFamily: "var(--font-hero)",
                        fontSize: "clamp(1.8rem, 2.5vw, 2.2rem)",
                        fontWeight: 300,
                        color: "#F5F1EB",
                        lineHeight: 1,
                      }}
                    >
                      {value}
                    </span>
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "8px",
                      fontWeight: 700,
                      letterSpacing: "0.25em",
                      textTransform: "uppercase",
                      color: "rgba(245,241,235,0.4)",
                    }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
