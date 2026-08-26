"use client";

import { useState, useRef } from "react";
import { Send, Calendar, FolderOpen, Tag, User, Phone, MessageSquare } from "lucide-react";
import { motion, useInView } from "framer-motion";

export default function Enquiry() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    eventDate: "",
    eventType: "wedding",
    packageInterest: "photo-film",
    notes: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const packageNames: Record<string, string> = {
      "photo-only": "Photo Only",
      "photo-film": "Photo + Film",
      "complete-story": "Complete Story",
      custom: "Custom Query / Other",
    };

    const eventNames: Record<string, string> = {
      wedding: "Wedding",
      "pre-wedding": "Pre-Wedding",
      candid: "Candid Story",
      events: "Corporate/Other Event",
    };

    const text = `Hi House of Tales, I'd like to enquire about booking your photography & film services!\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Event Date:* ${formData.eventDate}\n*Event Type:* ${eventNames[formData.eventType]}\n*Package Interest:* ${packageNames[formData.packageInterest]}\n*Notes/Details:* ${formData.notes || "None"}\n\nI visited your portfolio and would love to hear back about your availability and rates. Thank you!`;

    const encodedText = encodeURIComponent(text);
    const whatsappNumber = "917577033248"; // Standard agency contact / client phone
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedText}`, "_blank");
  };

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="enquiry" ref={ref} className="py-16 lg:py-40 bg-[#0E0C0B] relative overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute bottom-0 left-1/4 w-[500px] h-64 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, rgba(184,92,58,0.06), transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20">
        {/* Editorial split: left header, right form */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-16 lg:gap-24">
          {/* Left column: heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <span className="section-label block mb-5">06 // BOOKINGS</span>
            <h2
              className="section-heading mb-6"
              style={{ fontSize: "clamp(2.2rem, 3.5vw, 3.2rem)", color: "#F5F1EB" }}
            >
              Tell Us Your<br />
              <em className="italic font-light text-[#C86A4B] not-italic" style={{ fontStyle: "italic" }}>Story</em>
            </h2>
            <div className="rule" />
            <p
              className="mt-4 leading-[1.85] max-w-[280px]"
              style={{
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                fontSize: "13px",
                color: "rgba(245,241,235,0.5)",
              }}
            >
              Ready to capture your unscripted moments? Share your details and we&apos;ll get back to you within 24 hours.
            </p>
            {/* Accent divider */}
            <div
              className="mt-10 w-px hidden lg:block"
              style={{ height: "80px", background: "linear-gradient(to bottom, rgba(184,92,58,0.4), transparent)" }}
            />
          </motion.div>

          {/* Right column: form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="flex flex-col">
                <label className="text-[9px] uppercase tracking-[0.2em] text-[#F5F1EB]/60 font-bold mb-2 flex items-center">
                  <User className="w-3.5 h-3.5 text-primary mr-1.5" />
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. Rahul & Neha"
                  value={formData.name}
                  onChange={handleChange}
                  className="enquiry-input"
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col">
                <label className="text-[9px] uppercase tracking-[0.2em] text-[#F5F1EB]/60 font-bold mb-2 flex items-center">
                  <Phone className="w-3.5 h-3.5 text-primary mr-1.5" />
                  Contact Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="e.g. +91 98765 43210"
                  value={formData.phone}
                  onChange={handleChange}
                  className="enquiry-input"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Event Date */}
              <div className="flex flex-col">
                <label className="text-[9px] uppercase tracking-[0.2em] text-[#F5F1EB]/60 font-bold mb-2 flex items-center">
                  <Calendar className="w-3.5 h-3.5 text-primary mr-1.5" />
                  Event Date
                </label>
                <input
                  type="date"
                  name="eventDate"
                  required
                  value={formData.eventDate}
                  onChange={handleChange}
                  className="enquiry-input"
                />
              </div>

              {/* Event Type */}
              <div className="flex flex-col">
                <label className="text-[9px] uppercase tracking-[0.2em] text-[#F5F1EB]/60 font-bold mb-2 flex items-center">
                  <FolderOpen className="w-3.5 h-3.5 text-primary mr-1.5" />
                  Event Type
                </label>
                <select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  className="enquiry-input"
                >
                  <option value="wedding">Wedding</option>
                  <option value="pre-wedding">Pre-Wedding</option>
                  <option value="candid">Candid Story</option>
                  <option value="events">Other Event</option>
                </select>
              </div>

              {/* Package Interest */}
              <div className="flex flex-col">
                <label className="text-[9px] uppercase tracking-[0.2em] text-[#F5F1EB]/60 font-bold mb-2 flex items-center">
                  <Tag className="w-3.5 h-3.5 text-primary mr-1.5" />
                  Select Tier
                </label>
                <select
                  name="packageInterest"
                  value={formData.packageInterest}
                  onChange={handleChange}
                  className="enquiry-input"
                >
                  <option value="photo-only">Photo Only</option>
                  <option value="photo-film">Photo + Film</option>
                  <option value="complete-story">Complete Story</option>
                  <option value="custom">Custom Query</option>
                </select>
              </div>
            </div>

            {/* Notes/Details */}
            <div className="flex flex-col">
              <label className="text-[9px] uppercase tracking-[0.2em] text-[#F5F1EB]/60 font-bold mb-2 flex items-center">
                <MessageSquare className="w-3.5 h-3.5 text-primary mr-1.5" />
                Couple Journey & Notes
              </label>
              <textarea
                name="notes"
                rows={4}
                placeholder="Tell us a little bit about your wedding flow, venues, or specific requirements..."
                value={formData.notes}
                onChange={handleChange}
                className="enquiry-input resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              {/* Active-state tactile feedback on button */}
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-3 bg-[#F5F1EB] text-[#19160F] py-4 text-[9.5px] font-bold uppercase tracking-[0.26em] cursor-pointer focus:outline-none"
                style={{ transition: "background 0.4s cubic-bezier(0.22,1,0.36,1), color 0.4s cubic-bezier(0.22,1,0.36,1)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = "#B85C3A";
                  (e.currentTarget as HTMLButtonElement).style.color = "#F5F1EB";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = "#F5F1EB";
                  (e.currentTarget as HTMLButtonElement).style.color = "#19160F";
                }}
                onMouseDown={(e) => { (e.currentTarget as HTMLButtonElement).style.transform = "scale(0.985)"; }}
                onMouseUp={(e) => { (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)"; }}
              >
                <Send className="w-3.5 h-3.5" />
                <span>Confirm &amp; Send to WhatsApp</span>
              </button>
            </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
