"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check } from "lucide-react";

interface Package {
  name: string;
  price: string;
  description: string;
  features: string[];
  featured?: boolean;
}

const PACKAGES: Package[] = [
  {
    name: "Photo Only",
    price: "₹1,20,000",
    description: "Pure editorial imagery. Candid storytelling through stills for couples who want timeless photographs.",
    features: [
      "2 Senior Photographers",
      "Full Day Candid Coverage (2 Days)",
      "250+ High-Res Edited Digital Photos",
      "Premium Layflat Couple Album (40 Pages)",
      "Digital gallery delivery within 6 weeks",
    ],
  },
  {
    name: "Photo + Film",
    price: "₹2,50,000",
    description: "Our signature story package. Full visual coverage capturing motion, emotion, and stills.",
    features: [
      "2 Photographers + 2 Cinematographers",
      "Full Day Stills & Cinema Coverage (2 Days)",
      "3–5 Minute Cinematic Highlight Film",
      "1 Minute Teaser Reel for Socials",
      "350+ High-Res Edited Digital Photos",
      "Premium Layflat Couple Album (60 Pages)",
      "Digital gallery delivery within 6 weeks",
    ],
    featured: true,
  },
  {
    name: "Complete Story",
    price: "₹3,80,000",
    description: "An extensive visual legacy. Multi-day coverage by our full editorial photo & cinematography team.",
    features: [
      "3 Photographers + 3 Cinematographers",
      "Full Multi-day Coverage (Up to 3 Days)",
      "6–8 Minute Editorial Wedding Film",
      "2 Minute Cinematic Teaser Reel",
      "500+ High-Res Edited Digital Photos",
      "1 Premium Album + 2 Parent Albums",
      "Priority delivery within 4 weeks",
      "Raw footage on hard drive",
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.14, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Packages() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="packages"
      ref={ref}
      className="relative py-16 lg:py-28 bg-[#0E0C0B] overflow-hidden"
    >
      {/* Ambient glow */}
      <div
        className="absolute bottom-0 right-1/3 w-96 h-64 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, rgba(184,92,58,0.07), transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <span className="section-label block mb-4" style={{ color: "#B85C3A" }}>
            04 // PACKAGES
          </span>
          <h2
            className="section-heading"
            style={{ fontSize: "clamp(2rem, 3.5vw, 3.2rem)", color: "#F5F1EB" }}
          >
            Our Tiers
          </h2>
          <p
            className="italic mt-4 mx-auto"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "13.5px",
              color: "rgba(245,241,235,0.45)",
              maxWidth: "380px",
              lineHeight: 1.7,
            }}
          >
            Transparent pricing. Every package can be tailored to your wedding itinerary.
          </p>
          <div
            className="mx-auto mt-6"
            style={{
              height: "1px",
              width: "40px",
              background: "rgba(184,92,58,0.50)",
            }}
          />
        </motion.div>

        {/* Packages grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-px" style={{ background: "rgba(245,241,235,0.06)" }}>
          {PACKAGES.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className="relative flex flex-col"
              style={{
                background: pkg.featured ? "#19160F" : "#0E0C0B",
                padding: "40px 32px",
              }}
            >
              {/* Featured indicator */}
              {pkg.featured && (
                <div
                  className="absolute top-0 inset-x-0 flex justify-center"
                  style={{ transform: "translateY(-1px)" }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "8px",
                      fontWeight: 700,
                      letterSpacing: "0.26em",
                      textTransform: "uppercase",
                      color: "#F5F1EB",
                      background: "#B85C3A",
                      padding: "5px 14px",
                    }}
                  >
                    MOST LOVED
                  </span>
                </div>
              )}

              {/* Package name */}
              <p
                className="mb-1"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "8.5px",
                  letterSpacing: "0.26em",
                  textTransform: "uppercase",
                  color: "#B85C3A",
                }}
              >
                {pkg.name}
              </p>

              {/* Price */}
              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(1.8rem, 2.8vw, 2.5rem)",
                  fontWeight: 300,
                  color: "#F5F1EB",
                  lineHeight: 1,
                  marginBottom: "8px",
                }}
              >
                {pkg.price}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "8.5px",
                  letterSpacing: "0.20em",
                  textTransform: "uppercase",
                  color: "rgba(245,241,235,0.28)",
                  marginBottom: "20px",
                }}
              >
                STARTING RATE PER PROJECT
              </p>

              {/* Divider */}
              <div
                style={{
                  height: "1px",
                  background: "rgba(245,241,235,0.07)",
                  marginBottom: "20px",
                }}
              />

              {/* Description */}
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "12.5px",
                  lineHeight: "1.70",
                  color: "rgba(245,241,235,0.50)",
                  marginBottom: "24px",
                }}
              >
                {pkg.description}
              </p>

              {/* Features */}
              <ul className="flex flex-col gap-3 flex-1 mb-10">
                {pkg.features.map((feat, fi) => (
                  <li key={fi} className="flex items-start gap-3">
                    <Check
                      style={{
                        width: "13px",
                        height: "13px",
                        color: "#B85C3A",
                        flexShrink: 0,
                        marginTop: "2px",
                      }}
                    />
                    <span
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "12px",
                        color: "rgba(245,241,235,0.65)",
                        lineHeight: 1.55,
                      }}
                    >
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={`#enquiry?package=${encodeURIComponent(pkg.name)}`}
                className="inline-flex items-center justify-center gap-3 transition-all duration-350"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "9px",
                  fontWeight: 700,
                  letterSpacing: "0.24em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  padding: "12px 20px",
                  border: `1px solid ${pkg.featured ? "#B85C3A" : "rgba(245,241,235,0.14)"}`,
                  color: pkg.featured ? "#F5F1EB" : "rgba(245,241,235,0.55)",
                  background: pkg.featured ? "#B85C3A" : "transparent",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.background = "#B85C3A";
                  el.style.borderColor = "#B85C3A";
                  el.style.color = "#F5F1EB";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.background = pkg.featured ? "#B85C3A" : "transparent";
                  el.style.borderColor = pkg.featured ? "#B85C3A" : "rgba(245,241,235,0.14)";
                  el.style.color = pkg.featured ? "#F5F1EB" : "rgba(245,241,235,0.55)";
                }}
              >
                SELECT PACKAGE
                <span style={{ fontSize: "11px" }}>→</span>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Fine print */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="text-center mt-8"
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "10px",
            color: "rgba(245,241,235,0.25)",
            letterSpacing: "0.14em",
          }}
        >
          All packages include pre-wedding consultations and post-delivery support.
        </motion.p>
      </div>
    </section>
  );
}
