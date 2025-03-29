"use client"; // needed for client-side hooks (IntersectionObserver)
import { useEffect } from "react";
import Link from "next/link";
import { TeamMemberCard } from "@/components/TeamMemberCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { Shield, Heart, CheckCircle } from "lucide-react";

// Utility function to convert a service name to a URL-friendly slug.
function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-") // replace non-alphanumeric with hyphen
    .replace(/(^-|-$)/g, ""); // trim starting and ending hyphens
}

// 1) DYNAMIC CONTENT (placeholders)
const companyHistory =
  "Founded in 1990, our company has grown from a small local agency to a nationwide financial insurance provider...";
const journeyImage = "/images/our-journey.jpg"; // dynamic picture for Our Journey section

const missionStatement =
  "Our mission is to provide reliable, innovative insurance solutions that secure the financial future of families and businesses.";
const missionIcons = [
  { icon: <Shield className="w-8 h-8" />, label: "Security" },
  { icon: <Heart className="w-8 h-8" />, label: "Care" },
  { icon: <CheckCircle className="w-8 h-8" />, label: "Trust" },
];

// Offerings for the "What We Offer" section
const offerings = [
  "Life Insurance",
  "Travel Insurance",
  "Health & Dental",
  "Critical Illness",
  "International Students",
  "Group Benefits",
  "Disability",
];

const stats = [
  { label: "Years in Business", value: "35+" },
  { label: "Clients Served", value: "1.2M" },
  { label: "Claims Settled", value: "95%" },
  { label: "Years in Business", value: "35+" },
  { label: "Clients Served", value: "1.2M" },
  { label: "Claims Settled", value: "95%" },
  { label: "Years in Business", value: "35+" },
  { label: "Clients Served", value: "1.2M" },
  { label: "Claims Settled", value: "95%" },
];

const teamMembers = [
  {
    name: "Alice Johnson",
    role: "CEO & Founder",
    image: "/images/team-alice.jpg",
    bio: "Alice founded the company in 1990...",
  },
  {
    name: "Bob Smith",
    role: "Chief Financial Officer",
    image: "/images/team-bob.jpg",
    bio: "Bob oversees our financial strategies...",
  },
  {
    name: "Catherine Lee",
    role: "Head of Client Relations",
    image: "/images/team-catherine.jpg",
    bio: "Catherine ensures customer satisfaction...",
  },
];

const testimonials = [
  {
    quote: "Exceptional service and peace of mind. Highly recommended!",
    author: "John Doe",
    company: "ABC Corp",
  },
  {
    quote: "Responsive and supportive during our claim process. Five stars!",
    author: "Jane Smith",
    company: "XYZ Ltd.",
  },
];

// 2) COMPONENT
export default function DynamicAboutSection() {
  // 3) SCROLL REVEAL ANIMATION
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-up");
            observer.unobserve(entry.target); // animate once
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-section").forEach((el) =>
      observer.observe(el)
    );

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full">
      {/* Company History Section with Dynamic Picture */}
      <section className="fade-section bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16 px-6 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-4">Our Journey</h1>
            <p className="max-w-3xl text-lg leading-relaxed">{companyHistory}</p>
          </div>
          <div className="flex-1 mt-6 md:mt-0 md:ml-8">
            <img
              src={journeyImage}
              alt="Our Journey"
              className="w-full h-auto rounded-lg shadow"
            />
          </div>
        </div>
      </section>

      {/* Mission Statement Section with Icons */}
      <section className="fade-section py-16 px-6 md:px-12 lg:px-24">
        <h2 className="text-2xl font-bold mb-4 text-center">Our Mission</h2>
        <p className="max-w-2xl text-center mx-auto text-lg">{missionStatement}</p>
        <div className="flex justify-center mt-6 space-x-8">
          {missionIcons.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              {item.icon}
              <span className="mt-2 text-sm">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section as a Grid (No Scrolling, No Buttons) */}
      <section className="fade-section bg-blue-50 py-16 px-6 md:px-12 lg:px-24">
        <h2 className="text-2xl font-bold mb-8 text-center">What We Offer</h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {offerings.map((service, idx) => (
            <Link key={idx} href={`/quote/${slugify(service)}`}>
              <div className="bg-blue-100 p-6 rounded-xl shadow hover:shadow-md transition-shadow duration-300 cursor-pointer">
                <h3 className="text-xl font-semibold">{service}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Stats / Achievements Section */}
      <section className="fade-section py-16 px-6 md:px-12 lg:px-24">
        <h2 className="text-2xl font-bold mb-8 text-center">Our Achievements</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <span className="text-4xl font-bold text-blue-600">{stat.value}</span>
              <p className="text-md font-medium text-muted-foreground mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Members Section */}
      <section className="fade-section bg-blue-50 py-16 px-6 md:px-12 lg:px-24">
        <h2 className="text-2xl font-bold mb-8 text-center">Meet the Team</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.name} member={member} />
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="fade-section py-16 px-6 md:px-12 lg:px-24">
        <h2 className="text-2xl font-bold mb-8 text-center">
          What Our Clients Say
        </h2>
        <div className="flex flex-col md:flex-row md:space-x-8 md:overflow-x-auto">
          {testimonials.map((t, idx) => (
            <div key={idx} className="md:min-w-[300px] mb-6 md:mb-0">
              <TestimonialCard testimonial={t} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
