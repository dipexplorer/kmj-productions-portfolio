"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface GalleryItem {
  id: string;
  couple: string;
  storyType: string;
  category: "pre-wedding" | "wedding" | "candid" | "events";
  image: string;
  aspectClass: string; // Dynamic aspect ratio class
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g-1",
    couple: "Vipul & Neha",
    storyType: "Editorial Union",
    category: "wedding",
    image: "/images/intimate_embrace.png",
    aspectClass: "aspect-[3/4]",
  },
  {
    id: "g-2",
    couple: "Ayan & Ishita",
    storyType: "Golden Hour Run",
    category: "pre-wedding",
    image: "/images/hand-in-hand01.png",
    aspectClass: "aspect-[16/10]",
  },
  {
    id: "g-3",
    couple: "Kabir & Rhea",
    storyType: "Joyous Escape",
    category: "candid",
    image: "/images/foreheads_touching.png",
    aspectClass: "aspect-[3/4]",
  },
  {
    id: "g-4",
    couple: "Dev & Shruthi",
    storyType: "Splashes of Haldi",
    category: "events",
    image: "/images/hand-in-hand02.png",
    aspectClass: "aspect-[16/10]",
  },
  {
    id: "g-5",
    couple: "Shaurya & Ayushi",
    storyType: "Behind the Lenses",
    category: "candid",
    image: "/images/candid_couple_laughing,.png",
    aspectClass: "aspect-[16/9]",
  },
];

const CATEGORIES = [
  { id: "all", label: "All Stories" },
  { id: "pre-wedding", label: "Pre-Wedding" },
  { id: "wedding", label: "Wedding" },
  { id: "candid", label: "Candid Stories" },
  { id: "events", label: "Events" },
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredItems =
    activeFilter === "all"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section id="gallery" className="py-24 bg-[#FAF7F2] border-t border-primary/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-primary font-bold block mb-3">
            02 // PORTFOLIO
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold text-foreground uppercase tracking-wide">
            Candid Stories
          </h2>
          <p className="font-serif italic text-sm text-[#1E1917]/75 mt-3 max-w-md mx-auto">
            A visual anthology of fleeting, unscripted glances, laughter, and authentic love.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          {CATEGORIES.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-widest transition-all duration-300 border focus:outline-none ${
                activeFilter === category.id
                  ? "bg-primary border-primary text-white shadow-md"
                  : "bg-transparent border-primary/20 text-foreground hover:border-primary/50"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* CSS Columns Masonry Grid (Prevents 0 height grid-row collapses) */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                key={item.id}
                className="break-inside-avoid relative rounded-2xl overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-300 bg-accent/20"
              >
                {/* Image Container with forced Aspect Ratio */}
                <div className={`relative w-full ${item.aspectClass}`}>
                  <Image
                    src={item.image}
                    alt={`${item.couple} — ${item.storyType}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>

                {/* Narrative Caption Hover Overlay */}
                <div className="absolute inset-0 bg-[#1E1917]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center z-10">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="font-serif text-2xl font-semibold text-white tracking-wide">
                      {item.couple}
                    </p>
                    <p className="font-serif italic text-sm text-[#EFEBE4]/90 mt-2">
                      {item.storyType}
                    </p>
                    <span className="inline-block mt-4 px-4 py-1.5 rounded-full border border-white/30 text-[9px] uppercase tracking-widest text-white/90">
                      {item.category.replace("-", " ")}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
