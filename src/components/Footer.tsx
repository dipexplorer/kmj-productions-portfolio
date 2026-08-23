"use client";

import { Instagram, MapPin, Phone, Mail, Heart, Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#1E1917] to-[#120F0E] text-[#FAF7F2] py-16 overflow-hidden">
      {/* Fine Canvas Dotted Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#C86A4B_1px,transparent_1px)] [background-size:16px_16px] z-0" 
        aria-hidden="true"
      />
      
      {/* Warm Ambient Orange Glow in Corner */}
      <div 
        className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-primary/20 blur-[120px] pointer-events-none z-0"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start">
        {/* Left Column: Brand Bio */}
        <div className="md:col-span-5 flex flex-col space-y-4">
          <span className="font-serif text-2xl tracking-[0.15em] font-semibold text-white uppercase">
            KMJ Productions
          </span>
          <p className="font-serif italic text-xs text-[#EFEBE4]/70 max-w-sm leading-relaxed">
            Guwahati-based couple storytellers capturing raw, joy-filled candid wedding photography and films pan-India.
          </p>
          
          <div className="flex items-center space-x-2 text-[10px] uppercase tracking-widest text-[#FAF7F2]/40 font-mono mt-4">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span>Established 2016</span>
          </div>
        </div>

        {/* Middle Column: Location & Contact */}
        <div className="md:col-span-4 flex flex-col space-y-4">
          <h4 className="text-[10px] font-mono tracking-[0.3em] uppercase text-primary font-bold">
            Studio Details
          </h4>
          
          <ul className="space-y-3 text-xs text-[#EFEBE4]/80">
            <li className="flex items-start space-x-3">
              <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
              <span>Bela Path, Zoo Road, Guwahati, Assam 781024 (Available Pan-India)</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone className="w-4 h-4 text-primary flex-shrink-0" />
              <a href="tel:+917577033248" className="hover:text-primary transition-colors">
                +91 75770 33248
              </a>
            </li>
            <li className="flex items-center space-x-3">
              <Mail className="w-4 h-4 text-primary flex-shrink-0" />
              <a href="mailto:hello@kmjproductions.com" className="hover:text-primary transition-colors">
                hello@kmjproductions.com
              </a>
            </li>
          </ul>
        </div>

        {/* Right Column: Connect */}
        <div className="md:col-span-3 flex flex-col space-y-4">
          <h4 className="text-[10px] font-mono tracking-[0.3em] uppercase text-primary font-bold">
            Connect With Us
          </h4>
          
          <div className="flex flex-col space-y-3 text-xs">
            <a 
              href="https://www.instagram.com/kmjproductions/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center space-x-2 text-[#EFEBE4] hover:text-primary transition-colors"
            >
              <Instagram className="w-4 h-4 text-primary" />
              <span className="font-semibold">@kmjproductions</span>
            </a>
            
            {/* Sister Studio Cross Link */}
            <div className="pt-2 border-t border-white/10 mt-2">
              <span className="text-[9px] uppercase tracking-widest text-[#FAF7F2]/40 block mb-1">
                Sister Studio
              </span>
              <a 
                href="https://www.instagram.com/kmjfotobox/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center space-x-1.5 text-xs text-[#EFEBE4]/75 hover:text-primary transition-colors italic font-serif"
              >
                <span>KMJ Fotobox</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center text-[10px] text-white/40 tracking-wider font-mono gap-4 text-center">
        <p>&copy; {new Date().getFullYear()} KMJ Productions. All Rights Reserved.</p>
        <p className="flex items-center gap-1">
          <span>Crafted with</span>
          <Heart className="w-3 h-3 text-primary fill-primary" />
          <span>in Guwahati, Assam</span>
        </p>
      </div>
    </footer>
  );
}
