"use client";

import { useState } from "react";
import { Send, Calendar, FolderOpen, Tag, User, Phone, MessageSquare } from "lucide-react";

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

    const text = `Hi KMJ Productions, I'd like to enquire about booking your photography & film services!\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Event Date:* ${formData.eventDate}\n*Event Type:* ${eventNames[formData.eventType]}\n*Package Interest:* ${packageNames[formData.packageInterest]}\n*Notes/Details:* ${formData.notes || "None"}\n\nI visited your portfolio and would love to hear back about your availability and rates. Thank you!`;

    const encodedText = encodeURIComponent(text);
    const whatsappNumber = "917577033248"; // Standard agency contact / client phone
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedText}`, "_blank");
  };

  return (
    <section id="enquiry" className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-primary font-bold block mb-3">
            06 // BOOKINGS
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold text-foreground uppercase tracking-wide">
            Tell Us Your Story
          </h2>
          <p className="font-serif italic text-sm text-[#1E1917]/75 mt-3 max-w-md mx-auto">
            Ready to capture your unscripted moments? Share your date and details below to initiate our WhatsApp conversation.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-[#FAF7F2] rounded-3xl p-8 md:p-12 shadow-lg border border-primary/5">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="flex flex-col">
                <label className="text-[10px] uppercase tracking-wider text-foreground/70 font-semibold mb-2 flex items-center">
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
                  className="bg-white border border-primary/10 focus:border-primary px-4 py-3 rounded-xl text-sm focus:outline-none transition-colors"
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col">
                <label className="text-[10px] uppercase tracking-wider text-foreground/70 font-semibold mb-2 flex items-center">
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
                  className="bg-white border border-primary/10 focus:border-primary px-4 py-3 rounded-xl text-sm focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Event Date */}
              <div className="flex flex-col">
                <label className="text-[10px] uppercase tracking-wider text-foreground/70 font-semibold mb-2 flex items-center">
                  <Calendar className="w-3.5 h-3.5 text-primary mr-1.5" />
                  Event Date
                </label>
                <input
                  type="date"
                  name="eventDate"
                  required
                  value={formData.eventDate}
                  onChange={handleChange}
                  className="bg-white border border-primary/10 focus:border-primary px-4 py-3 rounded-xl text-sm focus:outline-none transition-colors"
                />
              </div>

              {/* Event Type */}
              <div className="flex flex-col">
                <label className="text-[10px] uppercase tracking-wider text-foreground/70 font-semibold mb-2 flex items-center">
                  <FolderOpen className="w-3.5 h-3.5 text-primary mr-1.5" />
                  Event Type
                </label>
                <select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  className="bg-white border border-primary/10 focus:border-primary px-4 py-3 rounded-xl text-sm focus:outline-none transition-colors"
                >
                  <option value="wedding">Wedding</option>
                  <option value="pre-wedding">Pre-Wedding</option>
                  <option value="candid">Candid Story</option>
                  <option value="events">Other Event</option>
                </select>
              </div>

              {/* Package Interest */}
              <div className="flex flex-col">
                <label className="text-[10px] uppercase tracking-wider text-foreground/70 font-semibold mb-2 flex items-center">
                  <Tag className="w-3.5 h-3.5 text-primary mr-1.5" />
                  Select Tier
                </label>
                <select
                  name="packageInterest"
                  value={formData.packageInterest}
                  onChange={handleChange}
                  className="bg-white border border-primary/10 focus:border-primary px-4 py-3 rounded-xl text-sm focus:outline-none transition-colors"
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
              <label className="text-[10px] uppercase tracking-wider text-foreground/70 font-semibold mb-2 flex items-center">
                <MessageSquare className="w-3.5 h-3.5 text-primary mr-1.5" />
                Couple Journey & Notes
              </label>
              <textarea
                name="notes"
                rows={4}
                placeholder="Tell us a little bit about your wedding flow, venues, or specific requirements..."
                value={formData.notes}
                onChange={handleChange}
                className="bg-white border border-primary/10 focus:border-primary px-4 py-3 rounded-xl text-sm focus:outline-none transition-colors resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center space-x-2 bg-primary hover:bg-primary-dark text-white py-4 rounded-xl text-xs font-semibold uppercase tracking-widest transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Confirm & Send to WhatsApp</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
