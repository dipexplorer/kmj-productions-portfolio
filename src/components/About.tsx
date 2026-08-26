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
            className="relative w-full max-w-lg mx-auto lg:max-w-none order-2 lg:order-1 mt-10 lg:mt-0"
          >
            {/* ── HIGH-END DECONSTRUCTED EDITORIAL FRAME ── */}
            <div className="relative aspect-square md:aspect-[3/3.8] group cursor-pointer mt-8 md:ml-4 mb-8 md:mb-4">
              
              {/* Deconstructed Border Frame - Extending outside the image bounds */}
              <div className="absolute -inset-4 md:-inset-6 border border-[rgba(245,241,235,0.12)] z-0 transition-all duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.01] group-hover:border-[rgba(200,106,75,0.3)]" />
              
              {/* Corner Accents (Crosshairs) - Breaking the edges */}
              <div className="absolute -top-4 md:-top-8 -left-4 md:-left-8 w-4 md:w-6 h-px bg-[#C86A4B] opacity-60 transition-transform duration-700 group-hover:-translate-x-2" />
              <div className="absolute -top-4 md:-top-8 -left-4 md:-left-8 w-px h-4 md:h-6 bg-[#C86A4B] opacity-60 transition-transform duration-700 group-hover:-translate-y-2" />
              
              <div className="absolute -bottom-4 md:-bottom-8 -right-4 md:-right-8 w-4 md:w-6 h-px bg-[#C86A4B] opacity-60 transition-transform duration-700 group-hover:translate-x-2" />
              <div className="absolute -bottom-4 md:-bottom-8 -right-4 md:-right-8 w-px h-4 md:h-6 bg-[#C86A4B] opacity-60 transition-transform duration-700 group-hover:translate-y-2" />

              {/* Offset shadow/matte block with an angled cut */}
              <div
                className="absolute -top-3 md:-top-4 -right-3 md:-right-4 w-full h-full bg-[#0a0908] -z-10 transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-2 group-hover:-translate-y-2"
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 92%, 92% 100%, 0 100%)", border: "1px solid rgba(245,241,235,0.04)" }}
              />

              {/* Floating 'raw' block acting like tape or a loose cutout */}
              <div className="absolute top-8 md:top-12 -right-4 md:-right-8 w-8 md:w-12 h-12 md:h-16 bg-[#120F0D] border border-[rgba(245,241,235,0.1)] z-20 transition-transform duration-1000 group-hover:rotate-3 shadow-2xl flex items-center justify-center">
                <span className="font-mono text-[6px] md:text-[7px] text-[rgba(245,241,235,0.4)] -rotate-90 tracking-widest">FIG.1</span>
              </div>

              {/* Main image container with clipped opposite corners (top-left & bottom-right) */}
              <div 
                className="relative w-full h-full overflow-hidden bg-[#0a0908] z-10 transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{ clipPath: "polygon(6% 0, 100% 0, 100% 94%, 94% 100%, 0 100%, 0 6%)" }}
              >
                <Image
                  src="/images/STORYTELLERS.png"
                  alt="House of Tales — Behind the Scenes"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110 opacity-95 group-hover:opacity-100"
                  style={{ filter: "brightness(0.96) contrast(1.05) saturate(0.9)", objectPosition: "center 30%" }}
                />

                {/* Bottom caption with gradient fade */}
                <div
                  className="absolute bottom-0 inset-x-0 p-6 md:p-8 z-20 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-1000"
                  style={{
                    background: "linear-gradient(to top, rgba(14,12,11,0.98) 0%, rgba(14,12,11,0.4) 50%, transparent 100%)",
                  }}
                >
                  <p
                    className="italic font-light transform translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)]"
                    style={{
                      fontFamily: "var(--font-hero)",
                      fontSize: "13px",
                      color: "rgba(245,241,235,0.9)",
                      letterSpacing: "0.02em",
                    }}
                  >
                    Behind the lens — Guwahati, India
                  </p>
                </div>
              </div>

              {/* Overlapping Editorial Typography (Breaking the bounds on the left) */}
              <div className="absolute -left-6 md:-left-10 bottom-16 md:bottom-24 z-30 pointer-events-none transform -rotate-90 origin-bottom-left">
                <span className="font-mono text-[8px] md:text-[9px] uppercase tracking-[0.45em] text-[#C86A4B] whitespace-nowrap">
                  Vol. 01 — Archives
                </span>
              </div>
            </div>

            {/* Floating Ring Badge (Replaces heavy glass seal) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -30 }}
              animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
              transition={{ delay: 0.6, duration: 1.2, ease: "easeOut" }}
              className="absolute -left-4 md:-left-12 top-4 md:top-12 z-30 flex items-center justify-center rounded-full pointer-events-none mix-blend-screen scale-75 md:scale-100"
              style={{
                width: "120px",
                height: "120px",
              }}
            >
              {/* Center HOUSE OF TALES Text */}
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
                  HOUSE OF TALES
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
          <div className="flex flex-col order-1 lg:order-2">
            {/* Label */}
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className="mb-8 relative"
            >
              <div className="w-4 h-px bg-[#C86A4B] mb-5" />
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
                We don&apos;t do stiff, traditional poses. Based in Guwahati, India,{" "}
                <strong style={{ color: "#F5F1EB", fontWeight: 500 }}>House of Tales</strong> is a
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
              <div className="w-12 h-px bg-linear-to-r from-[rgba(245,241,235,0.15)] to-transparent ml-6" />
            </motion.div>

            {/* Stats row */}
            <motion.div
              custom={5}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className="flex flex-wrap items-center justify-between gap-8 pt-10 relative"
            >
              <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-[rgba(245,241,235,0.1)] to-transparent" />
              
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
