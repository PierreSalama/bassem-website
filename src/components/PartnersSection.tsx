"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Partner {
  name: string;
  image: string;
}

const partners: Partner[] = [
  { name: "Partner 1", image: "/images/partners/bmo.jpg" },
  { name: "Partner 2", image: "/images/partners/cibc.jpg" },
  { name: "Partner 3", image: "/images/partners/rbc.jpg" },
  { name: "Partner 4", image: "/images/partners/scotiabank.jpg" },
  { name: "Partner 5", image: "/images/partners/TD.jpg" },
  { name: "Partner 6", image: "/images/partners/wtv.jpg" },
];

// Utility to convert partner name to URL slug.
const toSlug = (name: string) =>
  encodeURIComponent(name.toLowerCase().replace(/\s+/g, "-"));

export default function PartnersSection() {
  // Finite carousel: currentIndex is between 0 and partners.length - 1.
  const [currentIndex, setCurrentIndex] = useState(0);

  // Move to the next slide if not at the end.
  const nextSlide = () => {
    if (currentIndex < partners.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Move to the previous slide if not at the beginning.
  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section className="py-8 bg-gray-800 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Our Partners</h2>
        <div className="relative">
          {/* Carousel viewport */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {partners.map((partner, index) => (
                <div key={index} className="flex-shrink-0 w-full">
                  <div className="flex flex-col md:flex-row items-center">
                    {/* Image Section: Clickable */}
                    <div className="md:w-1/2 w-full flex justify-center p-4">
                      <Link href={`/partners/${toSlug(partner.name)}`}>
                        <Image
                          src={partner.image}
                          alt={partner.name}
                          width={300}
                          height={200}
                          className="object-contain cursor-pointer"
                        />
                      </Link>
                    </div>
                    {/* Text Section with "See More" Button */}
                    <div className="md:w-1/2 w-full p-4">
                      <h3 className="text-2xl font-semibold mb-2">
                        {partner.name}
                      </h3>
                      <p className="text-lg mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed non risus. Suspendisse lectus tortor, dignissim sit
                        amet, adipiscing nec, ultricies sed, dolor.
                      </p>
                      <Link
                        href={`/partners/${toSlug(partner.name)}`}
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
                      >
                        See More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`absolute top-1/2 left-[-60px] transform -translate-y-1/2 bg-gray-700 px-4 py-2 rounded-full focus:outline-none ${
              currentIndex === 0
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-600"
            }`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            disabled={currentIndex === partners.length - 1}
            className={`absolute top-1/2 right-[-60px] transform -translate-y-1/2 bg-gray-700 px-4 py-2 rounded-full focus:outline-none ${
              currentIndex === partners.length - 1
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-600"
            }`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
