import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { stagger, fadeUp } from "../utils/animationVariants";

const Hero = () => {
  const gridRef = useRef(null);
  const orb1 = useRef(null);
  const orb2 = useRef(null);

  useEffect(() => {
    gsap.to(orb1.current, {
      yPercent: 25,
      ease: "none",
      scrollTrigger: {
        trigger: gridRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });
    gsap.to(orb2.current, {
      yPercent: -20,
      ease: "none",
      scrollTrigger: {
        trigger: gridRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1.5,
      },
    });
  }, []);

  const stats = [
    { val: "500+", label: "Students" },
    { val: "95%", label: "Pass Rate" },
    { val: "5+ yrs", label: "Experience" },
    { val: "CUET", label: "Specialist" },
  ];

  return (
    <section
      id="home"
      ref={gridRef}
      className="grain"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        backgroundColor: "#08090a",
        width: "100%",
      }}
    >
      {/* Blueprint grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.040,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
          pointerEvents: "none",
        }}
      />

      {/* Glow orb 1 */}
      <div
        ref={orb1}
        style={{
          position: "absolute",
          top: "-15%",
          left: "-10%",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          pointerEvents: "none",
          background:
            "radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 65%)",
        }}
      />

      {/* Glow orb 2 */}
      <div
        ref={orb2}
        style={{
          position: "absolute",
          bottom: "-20%",
          right: "-10%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          pointerEvents: "none",
          background:
            "radial-gradient(circle, rgba(139,92,246,0.14) 0%, transparent 65%)",
        }}
      />

      {/* Announcement bar */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{ position: "relative", zIndex: 10, marginBottom: "40px" }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            marginTop: "100px",
            padding: "8px 20px",
            borderRadius: "999px",
            backgroundColor: "#141618",
            border: "1px solid rgba(255,255,255,0.08)",
            fontSize: "12px",
            color: "#9ca3af",
          }}
        >
          <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                backgroundColor: "#34d399",
                display: "inline-block",
                animation: "pulse 2s infinite",
              }}
            />
            <span style={{ color: "#34d399", fontWeight: 600 }}>
              Now Enrolling
            </span>
          </span>
          <span
            style={{
              width: "1px",
              height: "12px",
              backgroundColor: "rgba(255,255,255,0.1)",
            }}
          />
          <span>Classes 9 – 12 · English · Maths · Economics</span>
        </div>
      </motion.div>

      {/* Main content */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          width: "100%",
          maxWidth: "860px",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "clamp(16px, 4vw, 40px)",
          paddingRight: "clamp(16px, 4vw, 40px)",
        }}
      >
        {/* Heading */}
        <motion.h1
          variants={fadeUp}
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(40px, 8vw, 88px)",
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.03,
            letterSpacing: "-0.03em",
            margin: 0,
          }}
        >
          Build the mind
          <br />
          <span className="shimmer-text">that tops the class.</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={fadeUp}
          style={{
            marginTop: "24px",
            fontSize: "17px",
            color: "#6b7280",
            lineHeight: 1.7,
            maxWidth: "520px",
            marginLeft: "auto",
            marginRight: "auto",
            fontWeight: 400,
          }}
        >
          Success Academy delivers expert-led coaching in{" "}
          <span style={{ color: "#d1d5db" }}>English</span>,{" "}
          <span style={{ color: "#d1d5db" }}>Mathematics</span> &{" "}
          <span style={{ color: "#d1d5db" }}>Economics</span> — built for
          students who want results, not just attendance.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={fadeUp}
          style={{
            marginTop: "36px",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
          }}
        >
          <motion.a
            href="#courses"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "12px 24px",
              borderRadius: "12px",
              backgroundColor: "#ffffff",
              color: "#111827",
              fontWeight: 700,
              fontSize: "14px",
              textDecoration: "none",
              boxShadow: "0 4px 24px rgba(255,255,255,0.08)",
              transition: "background-color 0.2s",
            }}
          >
            Explore Courses
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "12px 24px",
              borderRadius: "12px",
              backgroundColor: "#141618",
              border: "1px solid rgba(255,255,255,0.08)",
              color: "#d1d5db",
              fontWeight: 600,
              fontSize: "14px",
              textDecoration: "none",
              transition: "all 0.2s",
            }}
          >
            Book Free Demo
          </motion.a>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          variants={fadeUp}
          style={{
            marginTop: "48px",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            columnGap: "40px",
            rowGap: "16px",
            paddingTop: "32px",
            borderTop: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          {stats.map((s, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <p
                style={{
                  color: "#ffffff",
                  fontWeight: 700,
                  fontSize: "18px",
                  lineHeight: 1,
                  fontFamily: "'Syne', sans-serif",
                }}
              >
                {s.val}
              </p>
              <p
                style={{
                  color: "#4b5563",
                  fontSize: "12px",
                  marginTop: "4px",
                }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        style={{
          position: "absolute",
          bottom: "32px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
        }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{
            width: "20px",
            height: "32px",
            borderRadius: "999px",
            border: "1px solid rgba(255,255,255,0.1)",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            paddingTop: "6px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              width: "2px",
              height: "8px",
              borderRadius: "999px",
              backgroundColor: "rgba(255,255,255,0.2)",
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
