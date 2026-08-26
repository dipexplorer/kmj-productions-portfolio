"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";

interface Film {
  id: string;
  couple: string;
  title: string;
  duration: string;
  location: string;
  image: string;
}

const FILMS: Film[] = [
  {
    id: "film-1",
    couple: "Aarav & Maya",
    title: "The Golden Sunset",
    duration: "4:12 min",
    location: "Mumbai, India",
    image: "/images/film_1.png",
  },
  {
    id: "film-2",
    couple: "Rohan & Priya",
    title: "Splashes of Haldi",
    duration: "3:45 min",
    location: "Goa, India",
    image: "/images/film_2.png",
  },
  {
    id: "film-3",
    couple: "Vikram & Sneha",
    title: "Sacred Pheras",
    duration: "5:20 min",
    location: "Udaipur, Rajasthan",
    image: "/images/hand-in-hand01.png",
  },
  {
    id: "film-4",
    couple: "Karan & Aditi",
    title: "Bonfire & Baarish",
    duration: "6:15 min",
    location: "Kerala",
    image: "/images/hand-in-hand02.png",
  },
];

export default function Films() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  const scroll = (dir: "left" | "right") => {
    if (!containerRef.current) return;
    const amount = containerRef.current.clientWidth * 0.55;
    containerRef.current.scrollBy({ left: dir === "right" ? amount : -amount, behavior: "smooth" });
  };

  return (
    <section
      id="films"
      ref={sectionRef}
      className="relative py-28 bg-[#0E0C0B] overflow-hidden"
    >
      {/* Ambient top glow */}
      <div
        className="absolute top-0 left-1/4 w-96 h-64 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, rgba(184,92,58,0.08), transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20">
        {/* Header row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex items-end justify-between mb-14"
        >
          <div>
            <span
              className="section-label block mb-4"
              style={{ color: "#C86A4B" }}
            >
              01 — CINEMATOGRAPHY
            </span>
            <h2
              className="section-heading"
              style={{
                fontFamily: "var(--font-hero)",
                fontSize: "clamp(2.5rem, 4.5vw, 4rem)",
                color: "#F5F1EB",
              }}
            >
              Featured <span className="italic text-[#C86A4B] font-light">Films</span>
            </h2>
          </div>

          {/* Controls */}
          <div className="flex gap-3">
            {(["left", "right"] as const).map((dir) => (
              <button
                key={dir}
                onClick={() => scroll(dir)}
                className="flex items-center justify-center transition-all duration-300"
                style={{
                  width: "42px",
                  height: "42px",
                  border: "1px solid rgba(245,241,235,0.14)",
                  color: "rgba(245,241,235,0.55)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "#C86A4B";
                  (e.currentTarget as HTMLButtonElement).style.color = "#C86A4B";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(245,241,235,0.14)";
                  (e.currentTarget as HTMLButtonElement).style.color = "rgba(245,241,235,0.55)";
                }}
                aria-label={`Scroll ${dir}`}
              >
                {dir === "left" ? (
                  <ChevronLeft style={{ width: "18px", height: "18px" }} />
                ) : (
                  <ChevronRight style={{ width: "18px", height: "18px" }} />
                )}
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Horizontal scrolling film strip */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        ref={containerRef}
        className="scrollbar-none flex gap-5 overflow-x-auto snap-x snap-mandatory"
        style={{
          paddingLeft: "max(32px, calc((100vw - 1280px) / 2 + 80px))",
          paddingRight: "80px",
        }}
      >
        {FILMS.map((film, i) => (
          <div
            key={film.id}
            className="shrink-0 snap-start group cursor-pointer relative"
            style={{ width: "clamp(280px, 38vw, 480px)" }}
          >
            {/* Crosshairs at grid corners */}
            <div className="absolute -top-3 -left-3 w-2 h-2 border-t border-l border-[rgba(245,241,235,0.15)] transition-colors duration-500 group-hover:border-[#C86A4B]" />
            <div className="absolute -bottom-3 -right-3 w-2 h-2 border-b border-r border-[rgba(245,241,235,0.15)] transition-colors duration-500 group-hover:border-[#C86A4B]" />

            {/* Thumbnail */}
            <div
              className="relative overflow-hidden p-2 sm:p-3"
              style={{ aspectRatio: "16/10", border: "1px solid rgba(245,241,235,0.06)" }}
            >
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src={film.image}
                  alt={`${film.couple} — ${film.title}`}
                  fill
                  sizes="(max-width: 640px) 280px, 480px"
                  className="object-cover transition-transform duration-1000 group-hover:scale-[1.04] filter grayscale-[40%] opacity-90 group-hover:grayscale-0 group-hover:opacity-100"
                  style={{ filter: "brightness(0.88) contrast(1.05) saturate(0.90)" }}
                />
                
                {/* Inner hairline matte effect */}
                <div className="absolute inset-2 border border-[rgba(245,241,235,0.15)] opacity-0 pointer-events-none z-20 transition-all duration-700 group-hover:opacity-100 group-hover:inset-3" />

                {/* Overlay */}
                <div
                  className="absolute inset-0 transition-opacity duration-700"
                  style={{
                    background: "linear-gradient(to top, rgba(14,12,11,0.92) 0%, rgba(14,12,11,0.25) 50%, transparent 100%)",
                  }}
                />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <motion.div
                    whileHover={{ scale: 1.12 }}
                    className="flex items-center justify-center transition-all duration-300"
                    style={{
                      width: "52px",
                      height: "52px",
                      border: "1px solid rgba(245,241,235,0.30)",
                      background: "rgba(14,12,11,0.35)",
                      backdropFilter: "blur(6px)",
                      color: "#F5F1EB",
                    }}
                  >
                    <Play style={{ width: "16px", height: "16px", fill: "currentColor", marginLeft: "3px" }} />
                  </motion.div>
                </div>

              {/* Duration top-right */}
              <div
                className="absolute top-4 right-4 z-20"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "9px",
                  letterSpacing: "0.16em",
                  color: "rgba(245,241,235,0.50)",
                }}
              >
                {film.duration} min
              </div>

              {/* Bottom metadata */}
              <div className="absolute bottom-5 left-5 right-5 z-20">
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "8.5px",
                    letterSpacing: "0.26em",
                    textTransform: "uppercase",
                    color: "#C86A4B",
                    marginBottom: "5px",
                  }}
                >
                  {film.location}
                </p>
                <h3
                  style={{
                    fontFamily: "var(--font-hero)",
                    fontSize: "clamp(1.4rem, 2vw, 1.8rem)",
                    fontWeight: 400,
                    color: "#F5F1EB",
                    lineHeight: 1.1,
                  }}
                >
                  {film.couple}
                </h3>
                <p
                  className="italic font-light"
                  style={{
                    fontFamily: "var(--font-hero)",
                    fontSize: "13px",
                    color: "rgba(245,241,235,0.75)",
                    marginTop: "5px",
                  }}
                >
                  {film.title}
                </p>
              </div>
            </div>
          </div>

            {/* Below-card index */}
            <div
              className="mt-3 flex items-center gap-3"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "9px",
                letterSpacing: "0.20em",
                color: "rgba(245,241,235,0.22)",
              }}
            >
              <span>{String(i + 1).padStart(2, "0")}</span>
              <div style={{ flex: 1, height: "1px", background: "rgba(245,241,235,0.08)" }} />
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
