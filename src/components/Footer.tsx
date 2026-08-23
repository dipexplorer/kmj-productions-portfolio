"use client";

import { Instagram, MapPin, Phone, Mail, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#0E0C0B] text-[#F5F1EB] overflow-hidden">

      {/* Top hairline */}
      <div style={{ height: "1px", background: "rgba(245,241,235,0.06)" }} />

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">

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
                KMJ Productions
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
              Guwahati-based couple storytellers capturing raw, joy-filled wedding photography and films across India.
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
                {
                  Icon: MapPin,
                  text: "Bela Path, Zoo Road, Guwahati, Assam 781024",
                  sub: "Available Pan-India",
                },
                { Icon: Phone, text: "+91 75770 33248", href: "tel:+917577033248" },
                { Icon: Mail, text: "hello@kmjproductions.com", href: "mailto:hello@kmjproductions.com" },
              ].map(({ Icon, text, sub, href }, i) => (
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
                        {sub && (
                          <span
                            style={{
                              fontFamily: "var(--font-sans)",
                              fontSize: "10px",
                              color: "rgba(245,241,235,0.28)",
                              marginTop: "2px",
                              display: "block",
                            }}
                          >
                            {sub}
                          </span>
                        )}
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
                href="https://www.instagram.com/kmjproductions/"
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
                @kmjproductions
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
                  KMJ Fotobox
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
          <p>© {new Date().getFullYear()} KMJ Productions. All Rights Reserved.</p>
          <p className="flex items-center gap-1.5">
            Crafted with
            <Heart style={{ width: "10px", height: "10px", color: "#B85C3A", fill: "#B85C3A" }} />
            in Guwahati, Assam
          </p>
        </div>
      </div>
    </footer>
  );
}
