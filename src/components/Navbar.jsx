import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

// ── Nav Data ──────────────────────────────────────────────
const NAV_ITEMS = [
  {
    label: "About",
    bgColor: "#1a1a2e",
    textColor: "#ffffff",
    links: [
      { name: "Our Story", href: "#about" },
      { name: "Meet the Mentor", href: "#mentor" },
      { name: "Our Mission", href: "#mission" },
    ],
  },
  {
    label: "Courses",
    bgColor: "#1a1a2e",
    textColor: "#ffffff",
    links: [
      { name: "English (9–12)", href: "#english" },
      { name: "Mathematics (9–12)", href: "#maths" },
      { name: "Economics (11–12)", href: "#economics" },
    ],
  },
  {
    label: "Students",
    bgColor: "#1a1a2e",
    textColor: "#ffffff",
    links: [
      { name: "Results & Toppers", href: "#results" },
      { name: "Testimonials", href: "#testimonials" },
      { name: "Study Material", href: "#material" },
    ],
  },
  {
    label: "Contact",
    bgColor: "#1a1a2e",
    textColor: "#ffffff",
    links: [
      { name: "WhatsApp Us", href: "#whatsapp" },
      { name: "Instagram", href: "https://instagram.com/success.academy_ak" },
      { name: "Enroll Now", href: "#enroll" },
    ],
  },
];

// ── Arrow Icon ─────────────────────────────────────────────
const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="opacity-60"
  >
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

// ── Main Navbar ────────────────────────────────────────────
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const overlayRef = useRef(null);
  const menuRef = useRef(null);
  const cardsRef = useRef([]);
  const lineRef = useRef(null);

  // Scroll effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // GSAP open animation
  useEffect(() => {
    if (isOpen) {
      // Prevent body scroll
      document.body.style.overflow = "hidden";

      // Animate overlay in
      gsap.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: "power2.out" }
      );

      // Animate menu panel in
      gsap.fromTo(
        menuRef.current,
        { y: -30, opacity: 0, scale: 0.97 },
        { y: 0, opacity: 1, scale: 1, duration: 0.45, ease: "power3.out" }
      );

      // Animate horizontal line
      gsap.fromTo(
        lineRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 0.5, ease: "power3.out", delay: 0.15 }
      );

      // Stagger cards
      gsap.fromTo(
        cardsRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power3.out",
          stagger: 0.08,
          delay: 0.2,
        }
      );
    } else {
      document.body.style.overflow = "";

      if (menuRef.current) {
        gsap.to(menuRef.current, {
          y: -20,
          opacity: 0,
          scale: 0.97,
          duration: 0.3,
          ease: "power2.in",
        });
        gsap.to(overlayRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: "power2.in",
        });
      }
    }
  }, [isOpen]);

  return (
    <>
      {/* ── Top Bar ── */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled && !isOpen
            ? "bg-white/95 backdrop-blur-md shadow-md py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">

          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group z-10">
            <div className="w-11 h-11 rounded-full bg-linear-to-br from-blue-600 to-cyan-400 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
              <span className="text-white font-black text-base tracking-tight">
                SA
              </span>
            </div>
            <div className="leading-tight">
              <p
                className={`font-black text-base transition-colors duration-300 ${
                  isOpen ? "text-gray-900" : scrolled ? "text-gray-900" : "text-white"
                }`}
              >
                Success{" "}
                <span className="text-blue-500">Academy</span>
              </p>
              <p
                className={`text-[10px] font-semibold tracking-widest uppercase transition-colors duration-300 ${
                  isOpen
                    ? "text-blue-500"
                    : scrolled
                    ? "text-blue-500"
                    : "text-cyan-300"
                }`}
              >
                Let's Grow Together
              </p>
            </div>
          </a>

          {/* Right side */}
          <div className="flex items-center gap-4">
            {/* CTA — hidden when menu open */}
            {!isOpen && (
              <a
                href="#enroll"
                className="hidden sm:inline-flex items-center px-5 py-2.5 rounded-full text-sm font-bold bg-gray-900 text-white hover:bg-blue-600 transition-all duration-300 shadow-md hover:shadow-blue-400/40 hover:scale-105"
              >
                Enroll Now →
              </a>
            )}

            {/* Hamburger / Close button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                isOpen
                  ? "bg-gray-100 text-gray-900"
                  : scrolled
                  ? "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  : "bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm"
              }`}
            >
              {isOpen ? (
                // X icon
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                // Hamburger icon
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* ── Full-Screen Overlay ── */}
      {isOpen && (
        <div
          ref={overlayRef}
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* ── Card Menu Panel ── */}
      {isOpen && (
        <div
          ref={menuRef}
          className="fixed top-0 left-0 right-0 z-50 bg-white shadow-2xl rounded-b-3xl mx-2 sm:mx-6 lg:mx-10"
          style={{ opacity: 0 }}
        >
          {/* Menu header row */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
            {/* Logo inside menu */}
            <a href="#home" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
              <div className="w-10 h-10 rounded-full bg-linear-to-br from-blue-600 to-cyan-400 flex items-center justify-center">
                <span className="text-white font-black text-sm">SA</span>
              </div>
              <span className="font-black text-gray-900 text-base">
                Success <span className="text-blue-500">Academy</span>
              </span>
            </a>

            {/* Close button */}
            <div className="flex items-center gap-3">
              <a
                href="#enroll"
                onClick={() => setIsOpen(false)}
                className="hidden sm:inline-flex items-center px-5 py-2.5 rounded-full text-sm font-bold bg-gray-900 text-white hover:bg-blue-600 transition-all duration-300"
              >
                Get Started
              </a>
              <button
                onClick={() => setIsOpen(false)}
                className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-gray-200 transition-colors duration-200"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
          </div>

          {/* Animated divider line */}
          <div
            ref={lineRef}
            className="h-px bg-linear-to-r from-blue-500 via-cyan-400 to-blue-500 origin-left"
          />

          {/* Cards Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-4 sm:p-6">
            {NAV_ITEMS.map((item, i) => (
              <div
                key={item.label}
                ref={(el) => (cardsRef.current[i] = el)}
                style={{
                  backgroundColor: item.bgColor,
                  color: item.textColor,
                  opacity: 0,
                }}
                className="rounded-2xl p-5 flex flex-col justify-between min-h-40 sm:min-h-45 group hover:ring-2 hover:ring-blue-500/50 transition-all duration-300 cursor-default"
              >
                {/* Card Title */}
                <p className="text-base font-bold text-white/90">{item.label}</p>

                {/* Links */}
                <div className="flex flex-col gap-2 mt-4">
                  {item.links.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white transition-colors duration-200 group/link"
                    >
                      <span className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200">
                        <ArrowIcon />
                      </span>
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Mobile CTA */}
          <div className="sm:hidden px-4 pb-5">
            <a
              href="#enroll"
              onClick={() => setIsOpen(false)}
              className="block text-center w-full py-3.5 rounded-2xl bg-gray-900 text-white font-bold text-sm hover:bg-blue-600 transition-all duration-300"
            >
              Enroll Now →
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
