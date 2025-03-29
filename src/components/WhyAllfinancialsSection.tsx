"use client";

import { CheckCircle, DollarSign, Building, Users } from "lucide-react";

export default function WhyAllfinancialsSection() {
  const benefits = [
    {
      icon: <CheckCircle className="w-8 h-8 text-blue-600" aria-hidden="true" />,
      title: "Fair and Honest Advise",
      description: "We provide transparent insurance advice tailored to your needs.",
    },
    {
      icon: <DollarSign className="w-8 h-8 text-blue-600" aria-hidden="true" />,
      title: "Affordable",
      description: "Competitive pricing for insurance that fits your budget.",
    },
    {
      icon: <Building className="w-8 h-8 text-blue-600" aria-hidden="true" />,
      title: "Access to over 26 Trusted Insurance Companies",
      description: "Partnering with industry leaders to offer you the best coverage.",
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" aria-hidden="true" />,
      title: "Serving over 1000 customers",
      description: "Trusted by thousands for reliable, prompt service.",
    },
  ];

  return (
    <section className="py-12 bg-brand-gradient animate-gradient">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-10">
          Why Choose Allfinancials Insurance
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {benefits.map((benefit) => (
            <a
              href="#"
              key={benefit.title}
              className="group block p-6 bg-white rounded-xl border border-gray-200 shadow-sm transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <div className="mb-4 flex items-center">
                {benefit.icon}
                <h3 className="ml-2 text-lg font-semibold text-gray-800">
                  {benefit.title}
                </h3>
              </div>
              <p className="text-gray-600">{benefit.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
