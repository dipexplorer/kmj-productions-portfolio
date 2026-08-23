"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  quote: string;
  couple: string;
  location: string;
  storyType: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "KMJ did not just take photos — they captured our dynamic. Running through that sunset mustard field felt like a normal date, and looking at the pictures, we can hear our laughter and feel the breeze. They made us feel so comfortable we forgot the cameras were even there. Truly magicians of raw emotion.",
    couple: "Vipul & Neha",
    location: "Guwahati, Assam",
    storyType: "Editorial Wedding & Film",
  },
  {
    quote:
      "Their films feel like high-end editorial cinema rather than a generic wedding video. The Haldi teaser feels like a vibrant music video, and the main highlight is so intimate it brings tears to our eyes every time. The team became like family during three days of shooting.",
    couple: "Dev & Shruthi",
    location: "Shillong, Meghalaya",
    storyType: "Candid Love Story",
  },
  {
    quote:
      "From our first bonfire shoot in Sikkim to our wedding in Jaipur, KMJ's lens captured our transition with such sensitivity. They reject stiff poses in favour of actual playfulness. We couldn't have asked for a better couple storyteller to preserve our memories.",
    couple: "Anirudh & Meera",
    location: "Jaipur, Rajasthan",
    storyType: "Destination Storybook",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [mounted, setMounted] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => { setMounted(true); }, []);

  const next = () => setCurrent((p) => (p + 1) % TESTIMONIALS.length);
  const prev = () => setCurrent((p) => (p - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  const t = TESTIMONIALS[current];
  const t0 = TESTIMONIALS[0];

  return (
    <section
      id="testimonials"
      ref={ref}
      className="relative py-28 bg-[#0E0C0B] overflow-hidden"
    >
      {/* Large decorative quotation mark */}
      <div
        className="absolute top-12 right-12 pointer-events-none select-none hidden lg:block"
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "220px",
          lineHeight: 1,
          color: "rgba(184,92,58,0.1)",
          fontWeight: 300,
        }}
      >
        "
      </div>

      {/* Left accent line */}
      <div
        className="absolute left-0 top-1/4 bottom-1/4 w-px hidden lg:block"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(184,92,58,0.18), transparent)" }}
      />

      <div className="max-w-5xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 relative">

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="section-label block mb-4">05 // TESTIMONIALS</span>
          <h2
            className="section-heading"
            style={{ fontSize: "clamp(2rem, 3.5vw, 3.2rem)", color: "#F5F1EB" }}
          >
            Shared Words
          </h2>
          <div className="rule" />
        </motion.div>

        {/* Quote area */}
        <div className="min-h-[260px] flex items-start">
          {!mounted ? (
            /* SSR fallback */
            <div>
              <blockquote
                className="italic"
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(1.1rem, 1.8vw, 1.45rem)",
                  lineHeight: 1.65,
                  color: "rgba(245,241,235,0.80)",
                  maxWidth: "780px",
                }}
              >
                &ldquo;{t0.quote}&rdquo;
              </blockquote>
              <cite className="not-italic mt-8 block">
                <span
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(0.9rem, 1.2vw, 1.05rem)",
                    color: "#B85C3A",
                    fontWeight: 500,
                  }}
                >
                  {t0.couple}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "9px",
                    letterSpacing: "0.24em",
                    textTransform: "uppercase",
                    color: "rgba(245,241,235,0.40)",
                    display: "block",
                    marginTop: "5px",
                  }}
                >
                  {t0.storyType} — {t0.location}
                </span>
              </cite>
            </div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                <blockquote
                  className="italic"
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(1.1rem, 1.8vw, 1.45rem)",
                    lineHeight: 1.65,
                    color: "rgba(245,241,235,0.80)",
                    maxWidth: "780px",
                  }}
                >
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <cite className="not-italic mt-8 block">
                  <span
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "clamp(0.9rem, 1.2vw, 1.05rem)",
                      color: "#B85C3A",
                      fontWeight: 500,
                    }}
                  >
                    {t.couple}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "9px",
                      letterSpacing: "0.24em",
                      textTransform: "uppercase",
                      color: "rgba(245,241,235,0.40)",
                      display: "block",
                      marginTop: "5px",
                    }}
                  >
                    {t.storyType} — {t.location}
                  </span>
                </cite>
              </motion.div>
            </AnimatePresence>
          )}
        </div>

        {/* Controls */}
        <div className="flex items-center gap-5 mt-12">
          {[{ fn: prev, Icon: ChevronLeft, label: "prev" }, { fn: next, Icon: ChevronRight, label: "next" }].map(
            ({ fn, Icon, label }) => (
              <button
                key={label}
                onClick={fn}
                className="flex items-center justify-center w-10 h-10 border border-[#F5F1EB]/15 text-[#F5F1EB]/40 hover:border-[#B85C3A] hover:text-[#B85C3A] bg-transparent transition-all duration-300 cursor-pointer rounded-none"
                aria-label={label}
              >
                <Icon style={{ width: "16px", height: "16px" }} />
              </button>
            )
          )}

          {/* Progress indicator */}
          <div className="flex items-center gap-2 ml-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-0.5 transition-all duration-300 cursor-pointer border-none p-0 rounded-none ${
                  i === current ? "w-6 bg-[#B85C3A]" : "w-1.5 bg-[#F5F1EB]/18"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <span
            className="ml-auto"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "9px",
              letterSpacing: "0.20em",
              color: "rgba(245,241,235,0.30)",
            }}
          >
            {String(current + 1).padStart(2, "0")} / {String(TESTIMONIALS.length).padStart(2, "0")}
          </span>
        </div>
      </div>
    </section>
  );
}
