"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Camera, Film, Users } from "lucide-react";

export default function About() {
  const stats = [
    { icon: <Camera className="w-5 h-5" />, value: "8+", label: "Years Active" },
    { icon: <Film className="w-5 h-5" />, value: "350+", label: "Weddings Captured" },
    { icon: <Users className="w-5 h-5" />, value: "15K+", label: "IG Followers" },
  ];

  return (
    <section id="about" className="py-24 bg-background border-t border-primary/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Behind the Scenes Image (Editorial Portrait Frame) */}
          <div className="lg:col-span-6 relative aspect-3/4 rounded-2xl overflow-hidden shadow-lg border border-primary/5">
            <Image
              src="/images/candid_couple_laughing,.png"
              alt="KMJ Productions Behind the Scenes Team at Sunset"
              fill
              className="object-cover"
            />
            {/* Elegant text caption on overlay (Instagram styled) */}
            <div className="absolute bottom-6 left-6 right-6 bg-[#FAF7F2]/90 backdrop-blur-sm p-4 rounded-xl shadow-md border border-primary/10">
              <span className="font-serif italic text-xs text-primary block">Behind the scenes</span>
              <p className="font-serif text-sm font-semibold text-foreground mt-0.5">
                Laughing with our couples. We believe the best shots happen when you forget the camera is even there.
              </p>
            </div>
          </div>

          {/* Studio Story & Stats */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-primary font-bold block mb-3">
              03 // THE STUDIO
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-semibold text-foreground uppercase tracking-wide mb-6">
              Storytellers at Heart
            </h2>

            <div className="space-y-6 text-foreground/80 font-sans text-sm md:text-base leading-relaxed">
              <p>
                We don’t do stiff, traditional poses. Based in Guwahati, Assam, **KMJ Productions** is a collective of candid photographers and cinematic filmmakers dedicated to catching love in its truest, most joyful motion.
              </p>
              <p>
                From piggyback runs in sunset fields to the emotional chaos of traditional Haldi ceremonies, we capture the unscripted fragments of your celebration. Every film, every print, and every canvas is treated as a customized storybook of your wedding day.
              </p>
            </div>

            {/* Location Banner */}
            <div className="mt-8 p-4 rounded-xl bg-accent/40 border border-primary/10 flex items-center space-x-3 max-w-sm">
              <MapPin className="w-5 h-5 text-primary shrink-0" />
              <div className="text-xs">
                <span className="font-bold text-foreground block">Pan-India Availability</span>
                <span className="text-foreground/75 block">Based in Guwahati, traveling wherever your stories take us.</span>
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-primary/15">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <div className="flex items-center space-x-2 text-primary">
                    {stat.icon}
                    <span className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                      {stat.value}
                    </span>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-foreground/60 font-semibold mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
