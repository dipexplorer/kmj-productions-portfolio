"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";

interface GalleryItem {
  id: string;
  couple: string;
  storyType: string;
  category: "pre-wedding" | "wedding" | "candid" | "events";
  image: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g-1",
    couple: "Vipul & Neha",
    storyType: "Editorial Union",
    category: "wedding",
    image: "/images/intimate_embrace.png",
  },
  {
    id: "g-2",
    couple: "Ayan & Ishita",
    storyType: "Golden Hour Run",
    category: "pre-wedding",
    image: "/images/hand-in-hand01.png",
  },
  {
    id: "g-3",
    couple: "Kabir & Rhea",
    storyType: "Joyous Escape",
    category: "candid",
    image: "/images/foreheads_touching.png",
  },
  {
    id: "g-4",
    couple: "Dev & Shruthi",
    storyType: "Splashes of Haldi",
    category: "events",
    image: "/images/hand-in-hand02.png",
  },
  {
    id: "g-5",
    couple: "Shaurya & Ayushi",
    storyType: "Candid Laughter",
    category: "candid",
    image: "/images/candid_couple_laughing,.png",
  },
  {
    id: "g-6",
    couple: "Ritvik & Sneha",
    storyType: "A Sacred Vow",
    category: "wedding",
    image: "/images/gallery_candid.png",
  },
];

const CATEGORIES = [
  { id: "all", label: "All Stories" },
  { id: "pre-wedding", label: "Pre-Wedding" },
  { id: "wedding", label: "Wedding" },
  { id: "candid", label: "Candid" },
  { id: "events", label: "Events" },
];

export default function Gallery() {
  const [active, setActive] = useState("all");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const filtered = active === "all" ? GALLERY_ITEMS : GALLERY_ITEMS.filter((i) => i.category === active);

  return (
    <section id="gallery" ref={ref} className="relative py-32 lg:py-40 bg-[#0E0C0B] overflow-hidden">
      {/* Cinematic noise texture overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.025] pointer-events-none mix-blend-overlay"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" }}
      />
      
      {/* Faint botanical line-art background graphic */}
      <motion.svg
        initial={{ opacity: 0, rotate: -5 }}
        whileInView={{ opacity: 0.03, rotate: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute -top-32 -right-32 w-[600px] h-[600px] text-[#C86A4B] pointer-events-none z-0"
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.2"
      >
        <path d="M50 100 Q 45 50 10 10" />
        <path d="M40 75 Q 20 60 15 30" />
        <path d="M45 50 Q 60 30 80 15" />
      </motion.svg>

      {/* Subtle right-side vertical rule */}
      <div
        className="absolute right-12 top-1/4 bottom-1/4 w-px hidden xl:block z-0"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(200,106,75,0.15), transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 relative z-10">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 lg:mb-28 relative"
        >
          {/* Subtle copper accent mark above the label */}
          <div className="w-4 h-[1px] bg-[#C86A4B] mb-5" />
          
          <span className="font-sans text-[10px] font-bold tracking-[0.3em] uppercase text-[#F5F1EB]/60 block mb-6">
            02 <span className="text-[#C86A4B] mx-2">/</span> PORTFOLIO
          </span>
          
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12">
            <h2
              className="section-heading leading-[1.05]"
              style={{ fontFamily: "var(--font-hero)", fontSize: "clamp(2.5rem, 4vw, 4rem)", color: "#F5F1EB" }}
            >
              CANDID <span className="italic text-[#C86A4B] font-light normal-case">Stories</span>
            </h2>
            
            {/* Filter links — elegant minimal text with editorial border */}
            <div className="flex flex-wrap items-center gap-6 lg:gap-10 py-5 border-y border-[rgba(245,241,235,0.08)] w-full lg:w-auto">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActive(cat.id)}
                  className="relative group transition-colors duration-500 focus:outline-none pb-1"
                >
                  <span
                    className={`block transition-all duration-500 font-sans text-[9px] font-bold tracking-[0.25em] uppercase ${
                      active === cat.id
                        ? "text-[#C86A4B]"
                        : "text-[rgba(245,241,235,0.4)] group-hover:text-[rgba(245,241,235,0.8)]"
                    }`}
                  >
                    {cat.label}
                  </span>
                  {active === cat.id && (
                    <motion.div 
                      layoutId="galleryFilterIndicator" 
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#C86A4B]" 
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
          {/* Thin rule under heading */}
          <div
            className="mt-8 relative"
            style={{ height: "1px", background: "rgba(245,241,235,0.06)" }}
          >
             <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-transparent to-[rgba(200,106,75,0.4)]" />
          </div>
        </motion.div>

        {/* Cinematic Staggered Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.94, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className={`group cursor-pointer relative transition-all duration-700 hover:-translate-y-2 ${
                  i % 3 === 1 ? "lg:mt-24" : i % 3 === 2 ? "lg:mt-12" : ""
                }`}
              >
                {/* Refined copper/ivory crosshairs at grid corners */}
                <div className="absolute -top-3 -left-3 w-2 h-2 border-t border-l border-[rgba(245,241,235,0.15)] transition-all duration-500 group-hover:border-[#C86A4B] group-hover:-top-4 group-hover:-left-4 opacity-0 group-hover:opacity-100" />
                <div className="absolute -bottom-3 -right-3 w-2 h-2 border-b border-r border-[rgba(245,241,235,0.15)] transition-all duration-500 group-hover:border-[#C86A4B] group-hover:-bottom-4 group-hover:-right-4 opacity-0 group-hover:opacity-100" />
                
                <div
                  className="relative w-full overflow-hidden aspect-[4/5] p-2 sm:p-2.5 bg-[#0a0908] transition-shadow duration-700 group-hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.8)]"
                  style={{ border: "1px solid rgba(245,241,235,0.04)" }}
                >
                  <div className="relative w-full h-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={`${item.couple} — ${item.storyType}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-all duration-1000 group-hover:scale-105 filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100"
                    />
                    
                    {/* Inner hairline matte effect */}
                    <div className="absolute inset-2 border border-[rgba(245,241,235,0.15)] opacity-0 pointer-events-none z-20 transition-all duration-700 group-hover:opacity-100 group-hover:inset-3" />

                    {/* Hover overlay — elegant single div fade */}
                    <div
                      className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"
                      style={{
                        background: "linear-gradient(to top, rgba(14,12,11,0.95) 0%, rgba(14,12,11,0.2) 50%, transparent 100%)",
                      }}
                    >
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-4 h-px bg-[#C86A4B]" />
                          <p
                            style={{
                              fontFamily: "var(--font-sans)",
                              fontSize: "8px",
                              letterSpacing: "0.3em",
                              textTransform: "uppercase",
                              color: "#C86A4B",
                              fontWeight: 600,
                            }}
                          >
                            {item.category.replace("-", " ")}
                          </p>
                        </div>
                        <p
                          style={{
                            fontFamily: "var(--font-hero)",
                            fontSize: "clamp(1.5rem, 2.2vw, 2rem)",
                            fontWeight: 300,
                            color: "#F5F1EB",
                            lineHeight: 1,
                            letterSpacing: "0.02em",
                          }}
                        >
                          {item.couple}
                        </p>
                        <p
                          className="italic font-light"
                          style={{
                            fontFamily: "var(--font-hero)",
                            fontSize: "14px",
                            color: "rgba(245,241,235,0.6)",
                            marginTop: "8px",
                          }}
                        >
                          {item.storyType}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="mt-20 lg:mt-32 flex justify-center relative"
        >
          {/* Decorative faint vertical line pointing down to CTA */}
          <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-px h-10 bg-gradient-to-b from-transparent to-[rgba(245,241,235,0.15)] hidden lg:block" />
          
          <a
            href="#enquiry"
            className="group relative overflow-hidden"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "9.5px",
              fontWeight: 700,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              textDecoration: "none",
              color: "#F5F1EB",
              border: "1px solid rgba(245,241,235,0.15)",
              padding: "16px 36px",
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              transition: "all 0.5s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "#C86A4B";
              (e.currentTarget as HTMLAnchorElement).style.color = "#C86A4B";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(245,241,235,0.15)";
              (e.currentTarget as HTMLAnchorElement).style.color = "#F5F1EB";
            }}
          >
            VIEW FULL PORTFOLIO
            <span className="transition-transform duration-500 group-hover:translate-x-2" style={{ fontSize: "12px" }}>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
