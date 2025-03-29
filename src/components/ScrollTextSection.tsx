"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function ScrollTextSection() {
  const ref = useRef<HTMLDivElement>(null);

  // Capture the scroll progress for this section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Control the text opacity: fade in from 30% to 50%, then fade out by 70%
  const textOpacity = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0, 1, 0]);

  return (
    <section ref={ref} className="relative h-screen">
      {/* Fixed Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/scroll-bg.jpg"  // Replace with your image path in public/images
          alt="Scroll Background"
          fill
          className="object-cover"
        />
      </div>
      {/* Text Overlay */}
      <motion.div
        style={{ opacity: textOpacity }}
        className="relative flex items-center justify-center h-full"
      >
        <div className="bg-black bg-opacity-50 p-8 rounded max-w-xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-4">
            Our Vision
          </h2>
          <p className="text-white text-center">
            Protecting those you love and serving our community with unmatched
            commitment and care is at the heart of our mission.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
