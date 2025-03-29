"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function DynamicAboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create a GSAP timeline for the section
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",    // when the section's top hits the top of the viewport
          end: "bottom top",   // when the section's bottom hits the top of the viewport
          scrub: true,
          pin: true,
          // markers: true,   // Uncomment to see markers for debugging
        },
      });

      // Growth Phase: animate background image from scale 0.7, y=20 to scale 1, y=0.
      tl.fromTo(
        bgRef.current,
        { scale: 0.7, y: 20, opacity: 1 },
        { scale: 1, y: 0, opacity: 1, duration: 0.25, ease: "power2.out" },
        0
      );

      // Freeze Phase: text fades in quickly, holds, then fades out.
      tl.fromTo(
        textRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.1, ease: "power2.inOut" },
        0.25
      );
      tl.to(textRef.current, { opacity: 1, duration: 0.15 }, 0.35);
      tl.to(textRef.current, { opacity: 0, duration: 0.15, ease: "power2.inOut" }, 0.5);

      // Shrink Phase: animate background image from scale 1, y=0 to scale 0.7, y=-20.
      tl.to(bgRef.current, { scale: 0.7, y: -20, duration: 0.25, ease: "power2.in" }, 0.5);

      // Removed the filler fade-out phase: the background image remains visible.
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{ position: "relative", height: "150vh", overflow: "hidden" }}
    >
      {/* Background Image Container */}
      <div
        ref={bgRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 1,
        }}
      >
        <Image
          src="/images/about-bg.jpg" // Ensure this image exists in public/images
          alt="About Background"
          layout="fill"
          objectFit="cover"
        />
      </div>
      {/* Text Overlay */}
      <div
        ref={textRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
          zIndex: 2,
        }}
      >
        <div
          style={{
            pointerEvents: "auto",
            background: "rgba(0,0,0,0.5)",
            padding: "1.5rem",
            borderRadius: "0.5rem",
            maxWidth: "32rem",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              color: "#fff",
              marginBottom: "1rem",
            }}
          >
            About Our Company
          </h2>
          <p
            style={{
              fontSize: "1.125rem",
              color: "#fff",
              marginBottom: "1.5rem",
            }}
          >
            Protecting your loved ones and providing quality service has been our mission since 2008.
          </p>
          <Link
            href="/about"
            style={{
              padding: "0.75rem 1.5rem",
              background: "#3B82F6",
              color: "#fff",
              borderRadius: "0.375rem",
              border: "none",
              cursor: "pointer",
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            Know More
          </Link>
        </div>
      </div>
      {/* Filler Section: Reduced scroll space */}
      <div style={{ height: "50vh" }}></div>
    </section>
  );
}
