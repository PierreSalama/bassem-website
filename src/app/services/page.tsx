"use client"; // This page uses client-side hooks for animations

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// Import ShadCN UI components (ensure these paths match your project)
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// -----------------------------
// 1. Service Data Definition
// -----------------------------
const services = [
  {
    id: "life-insurance",
    title: "Life Insurance",
    description:
      "Protect your family's future with comprehensive life insurance plans.",
    imageSrc: "/images/life-insurance.jpg", // Updated filename
    stats: [
      { label: "Customers Insured", value: "10k+" },
      { label: "Years Experience", value: "20" },
      { label: "Claims Paid", value: "$50M" },
    ],
  },
  {
    id: "travel-insurance",
    title: "Travel Insurance",
    description:
      "Explore the world worry-free with our reliable travel insurance coverage.",
    imageSrc: "/images/travel-insurance.jpeg", // Updated filename
    stats: [
      { label: "Trips Covered", value: "8k+" },
      { label: "Countries Covered", value: "150+" },
      { label: "Emergencies Handled", value: "3k+" },
    ],
  },
  {
    id: "health-dental",
    title: "Health & Dental",
    description:
      "Affordable health and dental plans to keep you and your family healthy.",
    imageSrc: "/images/health-dental-insurance.jpg", // Updated filename
    stats: [
      { label: "Patients Protected", value: "5k+" },
      { label: "Partner Hospitals", value: "200+" },
      { label: "Annual Checkups", value: "12k+" },
    ],
  },
  {
    id: "critical-illness",
    title: "Critical Illness",
    description:
      "Lump-sum benefits that provide financial relief during serious illnesses.",
    imageSrc: "/images/critical-illness-insurance.jpg", // Updated filename
    stats: [
      { label: "Illnesses Covered", value: "30+" },
      { label: "Payouts Made", value: "$10M+" },
      { label: "Clients Helped", value: "1k+" },
    ],
  },
  {
    id: "international-students",
    title: "International Students",
    description:
      "Specialized insurance plans for students studying abroad in Canada.",
    imageSrc: "/images/international-students-insurance.jpg", // Updated filename
    stats: [
      { label: "Students Insured", value: "3k+" },
      { label: "Universities", value: "50+" },
      { label: "Countries", value: "20+" },
    ],
  },
  {
    id: "group-benefits",
    title: "Group Benefits",
    description:
      "Custom group insurance benefits for companies and organizations.",
    imageSrc: "/images/group-employee-benefit.jpg", // Updated filename
    stats: [
      { label: "Companies", value: "500+" },
      { label: "Members Covered", value: "50k+" },
      { label: "Programs", value: "100+" },
    ],
  },
  {
    id: "disability",
    title: "Disability Insurance",
    description:
      "Income protection plans that safeguard your lifestyle in case of disability.",
    imageSrc: "/images/disability-insurance.jpg", // Updated filename
    stats: [
      { label: "Policies Active", value: "4k+" },
      { label: "Claims Assisted", value: "700+" },
      { label: "Support Centers", value: "24/7" },
    ],
  },
];

// -----------------------------------------
// 2. Create a Custom Hook for Scroll Reveal
// -----------------------------------------
function useScrollReveal() {
  const [isVisible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

// -----------------------------------------------
// 3. Create a Service Section Component
// -----------------------------------------------
function ServiceSection({ service }: { service: typeof services[number] }) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section
      ref={ref}
      id={service.id}
      className={`relative flex items-center justify-center min-h-screen px-4 py-16 scroll-mt-20 
                  transition-all duration-700 ease-in-out ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
    >
      {/* Dark overlay to complement the dark background */}
      <div className="absolute inset-0 bg-gray-900/70 -z-10" />

      <Card className="w-full max-w-6xl mx-auto overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow bg-gray-800 flex flex-col md:flex-row">
        {/* Image Section */}
        <CardContent className="md:w-1/2 p-4 flex items-center justify-center">
          <Image
            src={service.imageSrc}
            alt={service.title}
            width={500}
            height={400}
            className="rounded-md object-cover hover:scale-105 transition-transform duration-500"
          />
        </CardContent>
        {/* Text & Details Section */}
        <CardContent className="md:w-1/2 p-6 flex flex-col justify-center">
          <CardHeader className="p-0 mb-4">
            <CardTitle className="text-2xl text-blue-300">
              {service.title}
            </CardTitle>
            <CardDescription className="text-gray-300">
              {service.description}
            </CardDescription>
          </CardHeader>
          {/* Trust Stats */}
          <div className="flex flex-wrap gap-6 mb-6">
            {service.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold text-blue-300">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
          {/* Call-to-Action Button */}
          <CardFooter className="p-0">
            <Button
              asChild
              variant="default"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md"
            >
              <a href={`/quote/${service.id}`}>Get a Quote</a>
            </Button>
          </CardFooter>
        </CardContent>
      </Card>
    </section>
  );
}

// ----------------------------------------------------
// 4. Create the Main Services Page Component with Fixed Sidebar
// ----------------------------------------------------
export default function ServicesPage() {
  return (
    <div className="flex bg-gray-900 text-white">
      {/* Fixed Sidebar Navigation (visible on md and larger screens) */}
      <aside className="hidden md:flex fixed top-0 left-0 h-screen w-64 bg-gray-800 p-6">
        <nav className="flex flex-col h-full justify-evenly overflow-hidden">
          {services.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="text-blue-300 hover:underline transition-colors"
            >
              {s.title}
            </a>
          ))}
        </nav>
      </aside>
      {/* Main Content: Add left margin to account for fixed sidebar */}
      <main className="ml-64 flex-1">
        {services.map((service) => (
          <ServiceSection key={service.id} service={service} />
        ))}
      </main>
    </div>
  );
}
