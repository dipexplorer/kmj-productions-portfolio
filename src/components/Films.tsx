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
    couple: "Kabir & Rhea",
    title: "The Golden Sunset",
    duration: "4:12 Min",
    location: "Guwahati, Assam",
    image: "/images/film_1.png",
  },
  {
    id: "film-2",
    couple: "Dev & Shruthi",
    title: "Splashes of Haldi",
    duration: "3:45 Min",
    location: "Shillong, Meghalaya",
    image: "/images/film_2.png",
  },
  {
    id: "film-3",
    couple: "Anirudh & Meera",
    title: "Sacred Pheras",
    duration: "5:20 Min",
    location: "Jaipur, Rajasthan",
    image: "/images/hand-in-hand01.png",
  },
  {
    id: "film-4",
    couple: "Ritvik & Sneha",
    title: "Bonfire & Cozy Nights",
    duration: "2:55 Min",
    location: "Sikkim",
    image: "/images/hand-in-hand02.png",
  },
];

export default function Films() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef(null);
  const isInView = useInView(scrollRef, { once: true, margin: "-100px" });

  const scroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const { scrollLeft, clientWidth } = containerRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth / 2
          : scrollLeft + clientWidth / 2;
      containerRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section id="films" className="py-24 bg-background overflow-hidden" ref={scrollRef}>
      <div className="max-w-7xl mx-auto px-6 mb-12 flex items-end justify-between">
        <div>
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-primary font-bold block mb-3">
            01 // CINEMATOGRAPHY
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold text-foreground uppercase tracking-wide">
            Featured Films
          </h2>
        </div>

        {/* Carousel Controls */}
        <div className="flex space-x-3">
          <button
            onClick={() => scroll("left")}
            className="p-3 rounded-full border border-primary/20 hover:border-primary text-foreground hover:text-primary transition-all duration-300 focus:outline-none"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-3 rounded-full border border-primary/20 hover:border-primary text-foreground hover:text-primary transition-all duration-300 focus:outline-none"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Horizontal Strip */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        ref={containerRef}
        className="flex space-x-6 overflow-x-auto overflow-y-hidden px-6 md:px-[calc((100vw-1280px)/2)] scrollbar-none snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {FILMS.map((film, index) => (
          <div
            key={film.id}
            className="shrink-0 w-[280px] sm:w-[420px] aspect-16/10 relative rounded-2xl overflow-hidden group snap-start shadow-md hover:shadow-xl transition-all duration-300"
          >
            {/* Thumbnail */}
            <Image
              src={film.image}
              alt={`${film.couple} Wedding Film Thumbnail`}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-[#1E1917]/90 via-[#1E1917]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.15 }}
                className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white cursor-pointer shadow-lg group-hover:bg-primary group-hover:border-primary transition-all duration-300"
              >
                <Play className="w-5 h-5 fill-current ml-1" />
              </motion.div>
            </div>

            {/* Card Footer Text */}
            <div className="absolute bottom-6 left-6 right-6 text-white flex justify-between items-end">
              <div>
                <h3 className="font-serif text-lg sm:text-xl font-bold tracking-wide">
                  {film.couple}
                </h3>
                <p className="font-serif italic text-xs text-[#EFEBE4]/80 mt-1">
                  {film.title}
                </p>
                <span className="text-[9px] uppercase tracking-widest text-primary font-semibold block mt-2">
                  {film.location}
                </span>
              </div>
              <span className="text-[10px] font-mono tracking-widest text-[#EFEBE4]/60">
                {film.duration}
              </span>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
