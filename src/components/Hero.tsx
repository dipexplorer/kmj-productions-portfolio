"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { Play, Calendar } from "lucide-react";

// Magnetic CTA button wrapper
function MagneticButton({
  children,
  href,
  className,
}: {
  children: React.ReactNode;
  href: string;
  className: string;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    x.set(mouseX * 0.35); // pull button 35% towards cursor
    y.set(mouseY * 0.35);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={className}
    >
      {children}
    </motion.a>
  );
}

export default function Hero() {
  const heroRef = useRef(null);
  const { scrollY } = useScroll();

  // Parallax effect: background image moves slower as scroll position increases
  const y = useTransform(scrollY, [0, 800], [0, 160]);

  // Tagline underline draws in on scroll
  const underlineScaleX = useTransform(scrollY, [0, 400], [0, 1]);

  const wordmark = "KMJ PRODUCTIONS";
  const wordmarkLetters = Array.from(wordmark);

  // Stagger letter variants
  const wordmarkContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.2,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 30, letterSpacing: "0.25em" },
    visible: {
      opacity: 1,
      y: 0,
      letterSpacing: "0.18em",
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section
      ref={heroRef}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#1E1917]"
    >
      {/* Background Image Wrapper for Parallax */}
      <motion.div style={{ y }} className="absolute inset-0 z-0 h-[120%] w-full">
        <Image
          src="/images/intimate_embrace.png"
          alt="KMJ Productions Candid Golden Hour Couple Portrait"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Soft, warm vignette overlay (rather than flat cold black) */}
        <div className="absolute inset-0 bg-linear-to-t from-[#1E1917] via-[#1E1917]/45 to-[#1E1917]/15 z-0" />
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white flex flex-col items-center">
        {/* Tagline Eyebrow */}
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-[10px] sm:text-xs uppercase tracking-[0.4em] text-[#EFEBE4]/85 mb-5 font-semibold"
        >
          Guwahati & Destinations Pan-India
        </motion.span>

        {/* Wordmark Stagger Animation */}
        <motion.h1
          variants={wordmarkContainerVariants}
          initial="hidden"
          animate="visible"
          className="font-serif text-4xl sm:text-7xl md:text-8xl font-bold text-white uppercase leading-none select-none mb-3 flex flex-wrap justify-center"
          style={{ textShadow: "0 4px 24px rgba(30, 25, 23, 0.45)" }}
        >
          {wordmarkLetters.map((letter, idx) => (
            <motion.span key={idx} variants={letterVariants} className="inline-block">
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </motion.h1>

        {/* Tagline with Scroll-linked Underline */}
        <div className="relative inline-block mb-4 pt-2">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="font-serif italic text-lg sm:text-2xl text-[#EFEBE4]/95 font-light"
          >
            Couple Storyteller
          </motion.p>
          <motion.div
            style={{ scaleX: underlineScaleX, transformOrigin: "center" }}
            className="h-px bg-primary w-full mt-2"
          />
        </div>

        {/* Editorial Brand Statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="font-sans text-[11px] sm:text-xs text-[#EFEBE4]/80 max-w-md mb-12 tracking-wider font-light leading-relaxed text-center"
        >
          Capturing the raw, messy, and joyful motion of your love story.
        </motion.p>

        {/* Magnetic Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <MagneticButton
            href="#gallery"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 bg-[#FAF7F2] hover:bg-[#EFEBE4] text-[#1E1917] px-8 py-4 rounded-full text-[10px] font-semibold uppercase tracking-widest transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <Play className="w-3.5 h-3.5 fill-[#1E1917] text-[#1E1917]" />
            <span>View Our Stories</span>
          </MagneticButton>
          <MagneticButton
            href="#enquiry"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 bg-primary hover:bg-primary-dark border border-primary/20 text-white px-8 py-4 rounded-full text-[10px] font-semibold uppercase tracking-widest transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Enquire Now</span>
          </MagneticButton>
        </motion.div>
      </div>

      {/* Floating Scroll Indicator (Mouse Wheel Animation) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center cursor-pointer"
      >
        <span className="text-[8px] uppercase tracking-[0.4em] text-[#EFEBE4]/60 mb-3 font-medium">
          Scroll to explore
        </span>
        <div className="w-[18px] h-[30px] rounded-full border border-white/25 flex justify-center p-1.5">
          <motion.div
            animate={{
              y: [0, 8, 0],
              opacity: [1, 0, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.6,
              ease: "easeInOut",
            }}
            className="w-1.5 h-1.5 rounded-full bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
}
