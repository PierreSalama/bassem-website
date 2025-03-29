"use client";

import { Shield, Phone } from "lucide-react";

export default function ContactArea() {
  return (
    <section className="py-12 bg-brand-gradient animate-gradient">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8">
          Get in Touch
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Left Side */}
          <div
            className="group block p-6 bg-gray-50 rounded-xl border border-gray-200 shadow-sm 
                       transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-blue-100 
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <div className="mb-4 flex items-center">
              <Shield className="w-8 h-8 text-blue-600" aria-hidden="true" />
              <h3 className="ml-2 text-lg font-semibold text-gray-800">
                Insuring what is most important to you
              </h3>
            </div>
            <a
              href="/contact"
              className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-md transition-colors duration-300 hover:bg-blue-700"
            >
              Contact Us
            </a>
          </div>

          {/* Right Side */}
          <div
            className="group block p-6 bg-gray-50 rounded-xl border border-gray-200 shadow-sm 
                       transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-blue-100 
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <div className="mb-4 flex items-center">
              <Phone className="w-8 h-8 text-blue-600" aria-hidden="true" />
              <h3 className="ml-2 text-lg font-semibold text-gray-800">
                Call us for any questions
              </h3>
            </div>
            <div className="mt-4 p-4 border border-gray-300 rounded-md bg-gray-100">
              <p className="text-gray-800 font-medium">
                <a href="tel:1-800-555-1234">1-800-555-1234</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
