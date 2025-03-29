"use client";

import Link from "next/link";
import Image from "next/image";

const insurances = [
  { name: "Life Insurance", image: "/images/life-insurance.jpg", quoteUrl: "/quote/life-insurance" },
  { name: "Travel Insurance", image: "/images/travel-insurance.jpeg", quoteUrl: "/quote/travel-insurance" },
  { name: "Individual Health & Dental Insurance", image: "/images/health-dental-insurance.jpg", quoteUrl: "/quote/health-dental-insurance" },
  { name: "Critical Illness Insurance", image: "/images/critical-illness-insurance.jpg", quoteUrl: "/quote/critical-illness-insurance" },
  { name: "International Students Insurance", image: "/images/international-students-insurance.jpg", quoteUrl: "/quote/international-students-insurance" },
  { name: "Group Employee Benefit", image: "/images/group-employee-benefit.jpg", quoteUrl: "/quote/group-employee-benefit" },
  { name: "Disability Insurance", image: "/images/disability-insurance.jpg", quoteUrl: "/quote/disability-insurance" },
  { name: "Auto Insurance", image: "/images/auto-insurance.jpg", quoteUrl: "/quote/auto-insurance" },
  { name: "Home Insurance", image: "/images/home-insurance.jpg", quoteUrl: "/quote/home-insurance" },
  { name: "Commercial Insurance", image: "/images/commercial-insurance.jpg", quoteUrl: "/quote/commercial-insurance" },
  { name: "Liability Insurance", image: "/images/liability-insurance.jpg", quoteUrl: "/quote/liability-insurance" },
  { name: "Investment", image: "/images/investment.jpg", quoteUrl: "/quote/investment" },
];

export default function InsuranceProductsSection() {
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">
        Our Insurance Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {insurances.map((insurance, index) => (
          <div
            key={index}
            className="relative rounded-lg overflow-hidden shadow-lg"
          >
            <div className="relative h-64 w-full">
              <Image
                src={insurance.image}
                alt={insurance.name}
                fill
                className="object-cover transition-transform duration-300 filter brightness-75"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
                <h2 className="mb-4 text-center text-2xl font-extrabold text-white">
                  {insurance.name}
                </h2>
                <Link href={insurance.quoteUrl}>
                  <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Get A Quote
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
