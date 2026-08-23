"use client";

import { Check, ArrowRight } from "lucide-react";

interface Package {
  name: string;
  price: string;
  description: string;
  features: string[];
  recommended?: boolean;
}

const PACKAGES: Package[] = [
  {
    name: "Photo Only",
    price: "₹1,20,000",
    description: "Candid storytelling captured through stills. Best for couples who want pure editorial imagery.",
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
    description: "Our signature couple story package. Full visual coverage capturing motion, emotion, and stills.",
    features: [
      "2 Photographers + 2 Cinematographers",
      "Full Day Stills & Cinema Coverage (2 Days)",
      "3-5 Minute Cinematic Highlight Film",
      "1 Minute Teaser Reel for Socials",
      "350+ High-Res Edited Digital Photos",
      "Premium Layflat Couple Album (60 Pages)",
      "Digital gallery delivery within 6 weeks",
    ],
    recommended: true,
  },
  {
    name: "Complete Story",
    price: "₹3,80,000",
    description: "An extensive visual legacy. Multi-day coverage by our full editorial photo & cinematography team.",
    features: [
      "3 Photographers + 3 Cinematographers",
      "Full Multi-day Coverage (Up to 3 Days)",
      "6-8 Minute Editorial Wedding Film",
      "2 Minute Cinematic Teaser Reel",
      "500+ High-Res Edited Digital Photos",
      "1 Premium Couple Album + 2 Parent Albums",
      "Priority delivery within 4 weeks",
      "Raw footage on hard drive storage",
    ],
  },
];

export default function Packages() {
  return (
    <section id="packages" className="py-24 bg-[#FAF7F2] border-t border-primary/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-primary font-bold block mb-3">
            04 // PACKAGES
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold text-foreground uppercase tracking-wide">
            Our Tiers
          </h2>
          <p className="font-serif italic text-sm text-[#1E1917]/75 mt-3 max-w-md mx-auto">
            Transparent pricing for couple visual storybooks. Every package can be tailored to match your specific wedding itinerary.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PACKAGES.map((pkg, idx) => (
            <div
              key={idx}
              className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 border ${
                pkg.recommended
                  ? "bg-white border-primary shadow-xl scale-105 z-10"
                  : "bg-background border-primary/10 shadow-md hover:shadow-lg"
              }`}
            >
              {pkg.recommended && (
                <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white text-[9px] uppercase tracking-widest font-bold px-4 py-1.5 rounded-full shadow-sm">
                  Most Loved
                </span>
              )}

              <div>
                {/* Header */}
                <div className="mb-6">
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground">
                    {pkg.name}
                  </h3>
                  <p className="text-xs text-foreground/60 mt-1">{pkg.description}</p>
                </div>

                {/* Price */}
                <div className="mb-6 pb-6 border-b border-primary/10">
                  <span className="font-serif text-3xl md:text-4xl font-extrabold text-foreground">
                    {pkg.price}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-foreground/50 font-bold block mt-1">
                    *Starting rate per project
                  </span>
                </div>

                {/* Features List */}
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start text-xs text-foreground/80 leading-tight">
                      <Check className="w-4 h-4 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action button */}
              <a
                href={`#enquiry?package=${encodeURIComponent(pkg.name)}`}
                className={`inline-flex items-center justify-center space-x-2 py-3.5 px-6 rounded-full text-xs font-semibold uppercase tracking-widest transition-all duration-300 ${
                  pkg.recommended
                    ? "bg-primary hover:bg-primary-dark text-white shadow-md hover:shadow-lg"
                    : "bg-accent/40 hover:bg-accent/80 border border-primary/10 text-foreground"
                }`}
              >
                <span>Select Package</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
