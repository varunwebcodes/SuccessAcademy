import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
 
const NAV_ITEMS = [
  {
    label: "About",
    links: [
      { name: "Our Story", href: "#about" },
      { name: "Meet the Mentor", href: "#about" },
      { name: "Mission", href: "#about" },
    ],
  },
  {
    label: "Courses",
    links: [
      { name: "English", href: "#courses" },
      { name: "Mathematics", href: "#courses" },
      { name: "Economics", href: "#courses" },
    ],
  },
  {
    label: "Results",
    links: [
      { name: "Toppers", href: "#testimonials" },
      { name: "Testimonials", href: "#testimonials" },
      { name: "Study Material", href: "#courses" },
    ],
  },
  {
    label: "Contact",
    links: [
      { name: "WhatsApp", href: "#contact" },
      { name: "Instagram", href: "https://instagram.com/success.academy_ak" },
      { name: "Free Demo", href: "#contact" },
    ],
  },
];
 
const ArrowUpRight = () => (
  <svg
    width="11"
    height="11"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);
 
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
 
  const menuRef = useRef(null);
  const cardsRef = useRef([]);
 
  // Pixel values — change once here, applies everywhere
  const NAV_HEIGHT = 68;
  const NAV_PT = 20;      // padding-top of header (pt-5)
  const MENU_GAP = 10;    // gap between navbar pill bottom and menu top
  const SIDE_PAD = "clamp(16px, 3vw, 36px)";
  const MAX_W = "1400px";
 
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
 
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      gsap.fromTo(
        menuRef.current,
        { opacity: 0, y: -12, scale: 0.985 },
        { opacity: 1, y: 0, scale: 1, duration: 0.38, ease: "power3.out" }
      );
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 22 },
        { opacity: 1, y: 0, stagger: 0.07, duration: 0.42, ease: "power3.out", delay: 0.08 }
      );
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);
 
  return (
    <>
      {/* ─────────────────────── NAVBAR ─────────────────────── */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          paddingTop: `${NAV_PT}px`,
        }}
      >
        <div style={{ maxWidth: MAX_W, margin: "0 auto", paddingLeft: SIDE_PAD, paddingRight: SIDE_PAD }}>
          <div
            style={{
              height: `${NAV_HEIGHT}px`,
              display: "flex",
              alignItems: "center",
              paddingLeft: "20px",
              paddingRight: "20px",
              borderRadius: "16px",
              border: `1.5px solid ${scrolled || isOpen ? "rgba(255,255,255,0.09)" : "rgba(255,255,255,0.05)"}`,
              backgroundColor: scrolled || isOpen ? "rgba(12,14,18,0.96)" : "rgba(12,14,18,0.68)",
              backdropFilter: "blur(22px)",
              WebkitBackdropFilter: "blur(22px)",
              boxShadow: scrolled || isOpen ? "0 8px 36px rgba(0,0,0,0.45)" : "none",
              transition: "background-color 0.4s, border-color 0.4s, box-shadow 0.4s",
            }}
          >
            {/* LEFT — Logo */}
            <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
              <a href="#home" style={{ display: "flex", alignItems: "center", gap: "11px", textDecoration: "none" }}>
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "12px",
                    background: "linear-gradient(135deg, #3b82f6 0%, #22d3ee 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    boxShadow: "0 4px 14px rgba(59,130,246,0.28)",
                  }}
                >
                  <span style={{ color: "#fff", fontWeight: 900, fontSize: "13px" }}>SA</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span style={{ color: "#fff", fontWeight: 700, fontSize: "14.5px", letterSpacing: "0.015em", lineHeight: 1 }}>
                    Success Academy
                  </span>
                  <span style={{ color: "#6b7280", fontSize: "11px", marginTop: "3px", lineHeight: 1 }}>
                    Learn • Grow • Achieve
                  </span>
                </div>
              </a>
            </div>
 
            {/* CENTER — Desktop nav links */}
            <nav
              style={{ display: "flex", alignItems: "center", gap: "36px" }}
              className="hidden lg:flex"
            >
              {["About", "Courses", "Results", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  style={{ color: "#9ca3af", fontSize: "14px", fontWeight: 500, textDecoration: "none", transition: "color 0.2s", letterSpacing: "0.01em" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#9ca3af")}
                >
                  {item}
                </a>
              ))}
            </nav>
 
            {/* RIGHT — CTA + hamburger */}
            <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "10px" }}>
              <a
                href="#contact"
                className="hidden sm:flex"
                style={{
                  alignItems: "center",
                  gap: "6px",
                  padding: "8px 16px",
                  borderRadius: "10px",
                  backgroundColor: "#fff",
                  color: "#0f172a",
                  fontSize: "13px",
                  fontWeight: 700,
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                  transition: "background-color 0.2s",
                  flexShrink: 0,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#eff6ff")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#fff")}
              >
                Free Demo
                <span style={{ color: "#3b82f6", fontSize: "15px" }}>→</span>
              </a>
 
              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
                  border: `1.5px solid ${isOpen ? "#fff" : "rgba(255,255,255,0.1)"}`,
                  backgroundColor: isOpen ? "#fff" : "rgba(255,255,255,0.04)",
                  color: isOpen ? "#000" : "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  flexShrink: 0,
                  transition: "all 0.22s",
                }}
              >
                {isOpen ? (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                ) : (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>
 
      {/* ─────────────────────── BACKDROP ─────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={() => setIsOpen(false)}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 40,
              backgroundColor: "rgba(0,0,0,0.58)",
              backdropFilter: "blur(6px)",
              WebkitBackdropFilter: "blur(6px)",
            }}
          />
        )}
      </AnimatePresence>
 
      {/* ─────────────────────── DROPDOWN ─────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            style={{
              position: "fixed",
              /* sits exactly below the navbar pill */
              top: `${NAV_PT + NAV_HEIGHT + MENU_GAP}px`,
              left: 0,
              right: 0,
              zIndex: 50,
            }}
          >
            {/* ⚠️ SAME max-width + side-padding as the navbar wrapper so edges align */}
            <div style={{ maxWidth: MAX_W, margin: "0 auto", paddingLeft: SIDE_PAD, paddingRight: SIDE_PAD }}>
 
              {/* Menu card */}
              <div
                style={{
                  backgroundColor: "rgba(11,13,17,0.97)",
                  backdropFilter: "blur(28px)",
                  WebkitBackdropFilter: "blur(28px)",
                  border: "1.5px solid rgba(255,255,255,0.08)",
                  borderRadius: "20px",
                  padding: "22px",
                  boxShadow: "0 28px 72px rgba(0,0,0,0.65)",
                }}
              >
 
                {/* ── Top row ── */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingBottom: "18px",
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                    gap: "12px",
                  }}
                >
                  <div>
                    <p style={{ color: "#fff", fontWeight: 700, fontSize: "14px", margin: 0 }}>Navigation</p>
                    <p style={{ color: "#6b7280", fontSize: "12.5px", marginTop: "3px", marginBottom: 0 }}>
                      Explore Success Academy
                    </p>
                  </div>
 
                  <a
                    href="#contact"
                    onClick={() => setIsOpen(false)}
                    style={{
                      padding: "9px 18px",
                      borderRadius: "10px",
                      backgroundColor: "#3b82f6",
                      color: "#fff",
                      fontSize: "13px",
                      fontWeight: 600,
                      textDecoration: "none",
                      whiteSpace: "nowrap",
                      flexShrink: 0,
                      transition: "background-color 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#60a5fa")}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#3b82f6")}
                  >
                    Book Free Demo
                  </a>
                </div>
 
                {/* ── 4-col grid ── */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: "10px",
                    marginTop: "18px",
                  }}
                  // override to 4 cols on large screens via Tailwind
                  className="lg:!grid-cols-4-nav"
                >
                  {NAV_ITEMS.map((item, i) => (
                    <div
                      key={item.label}
                      ref={(el) => (cardsRef.current[i] = el)}
                      style={{
                        backgroundColor: "rgba(255,255,255,0.03)",
                        border: "1.5px solid rgba(255,255,255,0.07)",
                        borderRadius: "14px",
                        padding: "18px 16px",
                        transition: "background-color 0.22s, border-color 0.22s",
                        cursor: "default",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.055)";
                        e.currentTarget.style.borderColor = "rgba(255,255,255,0.13)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.03)";
                        e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                      }}
                    >
                      {/* Category label */}
                      <p
                        style={{
                          color: "#fff",
                          fontSize: "13px",
                          fontWeight: 600,
                          margin: "0 0 14px 0",
                          letterSpacing: "0.01em",
                        }}
                      >
                        {item.label}
                      </p>
 
                      {/* Links */}
                      <div style={{ display: "flex", flexDirection: "column", gap: "11px" }}>
                        {item.links.map((link) => (
                          <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              fontSize: "13px",
                              color: "#9ca3af",
                              textDecoration: "none",
                              transition: "color 0.18s",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.color = "#fff";
                              const arrow = e.currentTarget.querySelector("[data-arrow]");
                              if (arrow) { arrow.style.opacity = "1"; arrow.style.transform = "translateX(0)"; }
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.color = "#9ca3af";
                              const arrow = e.currentTarget.querySelector("[data-arrow]");
                              if (arrow) { arrow.style.opacity = "0"; arrow.style.transform = "translateX(-4px)"; }
                            }}
                          >
                            <span>{link.name}</span>
                            <span
                              data-arrow
                              style={{
                                opacity: 0,
                                transform: "translateX(-4px)",
                                transition: "opacity 0.18s, transform 0.18s",
                                display: "flex",
                                alignItems: "center",
                                flexShrink: 0,
                              }}
                            >
                              <ArrowUpRight />
                            </span>
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
 
                {/* ── Footer ── */}
                <div
                  style={{
                    marginTop: "18px",
                    paddingTop: "14px",
                    borderTop: "1px solid rgba(255,255,255,0.06)",
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "6px",
                  }}
                >
                  <p style={{ color: "#6b7280", fontSize: "12px", margin: 0 }}>© 2025 Success Academy</p>
                  <p style={{ color: "#4b5563", fontSize: "12px", margin: 0 }}>Built for future toppers 🚀</p>
                </div>
 
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
 
      {/* Inline style to handle 4-col grid on lg screens without custom Tailwind class */}
      <style>{`
        @media (min-width: 1024px) {
          .nav-grid { grid-template-columns: repeat(4, 1fr) !important; }
        }
      `}</style>
    </>
  );
};
 
export default Navbar;