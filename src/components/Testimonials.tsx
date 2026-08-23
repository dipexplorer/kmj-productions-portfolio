"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  quote: string;
  couple: string;
  location: string;
  storyType: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "KMJ did not just take photos; they captured our dynamic. Running through that sunset mustard field felt like a normal date, and looking at the pictures, we can hear our laughter and feel the breeze. They made us feel so comfortable that we forgot the cameras were even there. They are truly magicians of raw emotion.",
    couple: "Vipul & Neha",
    location: "Guwahati, Assam",
    storyType: "Editorial Wedding & Film",
  },
  {
    quote:
      "Their films feel like a high-end editorial cinema rather than a generic wedding video. The Haldi teaser feels like a vibrant music video, and the main wedding highlight is so intimate it brings tears to our eyes every time. The team became like family during the three days. Thank you for this legacy.",
    couple: "Dev & Shruthi",
    location: "Shillong, Meghalaya",
    storyType: "Candid Love Story",
  },
  {
    quote:
      "From our first bonfire shoot in the hills of Sikkim to our wedding in Jaipur, KMJ's lens captured our transition with so much sensitivity. They reject the stiff, generic poses in favor of actual playfulness. We couldn't have asked for a better couple storyteller to preserve our memories.",
    couple: "Anirudh & Meera",
    location: "Jaipur, Rajasthan",
    storyType: "Destination Storybook",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section id="testimonials" className="relative py-24 bg-[#1E1917] text-[#FAF7F2] overflow-hidden">
      {/* Background Graphic Element */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white/5 pointer-events-none select-none z-0">
        <Quote className="w-80 h-80" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-primary font-bold block mb-3">
          05 // TESTIMONIALS
        </span>
        <h2 className="font-serif text-3xl md:text-5xl font-semibold text-white uppercase tracking-wide mb-12">
          Shared Words
        </h2>

        {/* Carousel Content */}
        <div className="min-h-[280px] sm:min-h-[220px] flex items-center justify-center w-full">
          {!mounted ? (
            /* Static SSR Fallback to prevent hydration mismatch */
            <div className="max-w-2xl">
              <blockquote className="font-serif italic text-lg md:text-2xl leading-relaxed text-[#FAF7F2]/90">
                &ldquo;{TESTIMONIALS[0].quote}&rdquo;
              </blockquote>
              <cite className="block not-italic mt-8">
                <span className="font-serif text-base md:text-lg font-bold text-primary tracking-wider">
                  {TESTIMONIALS[0].couple}
                </span>
                <span className="text-[9px] uppercase tracking-widest text-[#FAF7F2]/50 block mt-1">
                  {TESTIMONIALS[0].storyType} &mdash; {TESTIMONIALS[0].location}
                </span>
              </cite>
            </div>
          ) : (
            /* Animated Client-Side Render */
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5 }}
                className="max-w-2xl"
              >
                <blockquote className="font-serif italic text-lg md:text-2xl leading-relaxed text-[#FAF7F2]/90">
                  &ldquo;{TESTIMONIALS[current].quote}&rdquo;
                </blockquote>
                <cite className="block not-italic mt-8">
                  <span className="font-serif text-base md:text-lg font-bold text-primary tracking-wider">
                    {TESTIMONIALS[current].couple}
                  </span>
                  <span className="text-[9px] uppercase tracking-widest text-[#FAF7F2]/50 block mt-1">
                    {TESTIMONIALS[current].storyType} &mdash; {TESTIMONIALS[current].location}
                  </span>
                </cite>
              </motion.div>
            </AnimatePresence>
          )}
        </div>

        {/* Slider Controls */}
        <div className="flex items-center space-x-6 mt-12">
          <button
            onClick={handlePrev}
            className="p-3 rounded-full border border-white/20 hover:border-primary text-white/70 hover:text-primary transition-all duration-300 focus:outline-none"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span className="text-[10px] font-mono tracking-widest text-white/40">
            {current + 1} / {TESTIMONIALS.length}
          </span>
          <button
            onClick={handleNext}
            className="p-3 rounded-full border border-white/20 hover:border-primary text-white/70 hover:text-primary transition-all duration-300 focus:outline-none"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
