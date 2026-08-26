"use client";

import { Instagram, MapPin, Phone, Mail, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#0E0C0B] text-[#F5F1EB] overflow-hidden">

      {/* Top hairline */}
      <div style={{ height: "1px", background: "rgba(245,241,235,0.06)" }} />

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 py-12 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">

          {/* Brand column */}
          <div className="md:col-span-5">
            <a href="#" style={{ textDecoration: "none" }}>
              <p
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "16px",
                  fontWeight: 300,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "#F5F1EB",
                  marginBottom: "4px",
                }}
              >
                House of Tales
              </p>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "7px",
                  letterSpacing: "0.30em",
                  textTransform: "uppercase",
                  color: "#B85C3A",
                }}
              >
                Couple Storyteller
              </p>
            </a>

            {/* Thin rule */}
            <div
              style={{
                height: "1px",
                width: "36px",
                background: "rgba(184,92,58,0.40)",
                margin: "20px 0",
              }}
            />

            <p
              className="italic"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "13px",
                lineHeight: 1.75,
                color: "rgba(245,241,235,0.45)",
                maxWidth: "300px",
              }}
            >
              Mumbai-based couple storytellers capturing raw, joy-filled wedding photography and films across India.
            </p>

            <p
              className="mt-5"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "8.5px",
                letterSpacing: "0.26em",
                textTransform: "uppercase",
                color: "rgba(245,241,235,0.22)",
              }}
            >
              Est. 2016
            </p>
          </div>

          {/* Studio details column */}
          <div className="md:col-span-4">
            <h4
              className="mb-6"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "8.5px",
                letterSpacing: "0.30em",
                textTransform: "uppercase",
                color: "#B85C3A",
              }}
            >
              Studio Details
            </h4>
            <ul className="flex flex-col gap-4">
              {[
                { Icon: Phone, text: "+91 98765 43210", href: "tel:+919876543210" },
                { Icon: Mail, text: "hello@houseoftales.com", href: "mailto:hello@houseoftales.com" },
                { Icon: MapPin, text: "Mumbai, India", href: "#" },
              ].map(({ Icon, text, href }, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Icon
                    style={{ width: "13px", height: "13px", color: "#B85C3A", flexShrink: 0, marginTop: "2px" }}
                  />
                  <div>
                    {href ? (
                      <a
                        href={href}
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: "12px",
                          color: "rgba(245,241,235,0.60)",
                          textDecoration: "none",
                          transition: "color 0.25s",
                        }}
                        onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#B85C3A")}
                        onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(245,241,235,0.60)")}
                      >
                        {text}
                      </a>
                    ) : (
                      <>
                        <span
                          style={{
                            fontFamily: "var(--font-sans)",
                            fontSize: "12px",
                            color: "rgba(245,241,235,0.60)",
                            display: "block",
                          }}
                        >
                          {text}
                        </span>
                      </>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect column */}
          <div className="md:col-span-3">
            <h4
              className="mb-6"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "8.5px",
                letterSpacing: "0.30em",
                textTransform: "uppercase",
                color: "#B85C3A",
              }}
            >
              Connect
            </h4>
            <div className="flex flex-col gap-4">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 transition-colors duration-250"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "12px",
                  color: "rgba(245,241,235,0.60)",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#B85C3A")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(245,241,235,0.60)")}
              >
                <Instagram style={{ width: "13px", height: "13px", color: "#B85C3A" }} />
                @houseoftales.weddings
              </a>

              <div
                style={{
                  borderTop: "1px solid rgba(245,241,235,0.07)",
                  paddingTop: "14px",
                  marginTop: "4px",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "8px",
                    letterSpacing: "0.24em",
                    textTransform: "uppercase",
                    color: "rgba(245,241,235,0.25)",
                    display: "block",
                    marginBottom: "8px",
                  }}
                >
                  Sister Studio
                </span>
                <a
                  href="https://www.instagram.com/kmjfotobox/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="italic transition-colors duration-250"
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "13px",
                    color: "rgba(245,241,235,0.40)",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#B85C3A")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(245,241,235,0.40)")}
                >
                  House of Tales Fotobox
                </a>
              </div>

              {/* Enquire CTA */}
              <a
                href="#enquiry"
                className="inline-flex items-center justify-center gap-2 mt-4 transition-all duration-350"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "8.5px",
                  fontWeight: 700,
                  letterSpacing: "0.24em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  padding: "10px 16px",
                  border: "1px solid rgba(184,92,58,0.35)",
                  color: "#B85C3A",
                  background: "transparent",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "#B85C3A";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#F5F1EB";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#B85C3A";
                }}
              >
                ENQUIRE NOW →
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: "1px solid rgba(245,241,235,0.05)",
        }}
      >
        <div
          className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 py-6 flex flex-col sm:flex-row justify-between items-center gap-3"
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "9.5px",
            letterSpacing: "0.18em",
            color: "rgba(245,241,235,0.22)",
          }}
        >
          <p>© {new Date().getFullYear()} House of Tales. All Rights Reserved.</p>
          <p className="flex items-center gap-1 md:gap-2">
            Designed with <Heart className="w-3 h-3 text-[#B85C3A]" />{" "}
            in Mumbai, India
          </p>
        </div>
      </div>
    </footer>
  );
}
