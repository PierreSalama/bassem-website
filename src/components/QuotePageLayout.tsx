"use client";

import Link from "next/link";
import QuoteForm from "./QuoteForm";
import { insuranceTypes, InsuranceType } from "@/config/insuranceTypes";

interface QuotePageLayoutProps {
  insuranceType: InsuranceType;
}

export default function QuotePageLayout({ insuranceType }: QuotePageLayoutProps) {
  // Get all other insurance types except the current one
  const otherInsuranceTypes = insuranceTypes.filter(
    (type) => type.id !== insuranceType.id
  );

  return (
    <div className="min-h-screen animate-gradient flex flex-col items-center justify-center p-4 space-y-8 relative">
      {/* Return Button */}
      <div className="absolute top-4 left-4">
        <Link
          href="/"
          className="px-4 py-2 bg-white text-blue-600 rounded shadow hover:bg-gray-200 transition-colors transform hover:scale-105"
        >
          &larr; Return to Options
        </Link>
      </div>

      {/* Page Title */}
      <div className="w-full max-w-md text-center">
        <h1 className="text-5xl font-bold text-white">{insuranceType.name}</h1>
      </div>

      {/* Multi-step form card */}
      <div className="w-full max-w-md bg-white text-gray-800 rounded-lg shadow-lg p-6">
        {/* Progress Bar & Step Info */}
        <div className="mb-6">
          <div className="flex justify-between items-center text-sm text-gray-600 mb-2">
            <span>Step 1 of 3</span>
            <span>{insuranceType.stepLabels.step1}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              style={{ width: "33%" }}
              className="bg-blue-500 h-2 rounded-full transition-all duration-300"
            ></div>
          </div>
        </div>

        {/* Form */}
        <QuoteForm
          title={insuranceType.name}
          stepLabels={insuranceType.stepLabels}
        />
      </div>

      {/* Other Insurance Options */}
      <div className="w-full max-w-4xl text-center">
        <h3 className="text-2xl font-bold text-white mb-4">
          Explore Our Other Insurance Quotes
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          {otherInsuranceTypes.map((type) => (
            <Link
              key={type.id}
              href={type.quoteUrl}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors transform hover:scale-105"
            >
              {type.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 