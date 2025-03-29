"use client";

import { useState } from "react";

// Configuration arrays for form questions.
// You can add, remove, or modify these without touching the email logic.
const step1Fields = [
  { name: "fullName", label: "Full Name", placeholder: "John Doe", type: "text" },
  { name: "email", label: "Email Address", placeholder: "name@example.com", type: "email" },
  { name: "phone", label: "Phone Number (optional)", placeholder: "(123) 456-7890", type: "tel" },
];

const step2Fields = [
  { name: "institutionName", label: "Institution Name", placeholder: "e.g., Harvard University", type: "text" },
  { name: "destinationCountry", label: "Destination Country", placeholder: "e.g., United Kingdom", type: "text" },
  { name: "programDuration", label: "Program Duration", placeholder: "e.g., 1 year, 4 years", type: "text" },
  { name: "programStartDate", label: "Program Start Date", placeholder: "", type: "date" },
];

export default function InternationalStudentsInsurancePage() {
  // Manage current step and form data.
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    institutionName: "",
    destinationCountry: "",
    programDuration: "",
    programStartDate: "",
  });
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Define the subject for the email; this comes from the page.
  const subject = "New International Students Insurance Quote Submission";

  // Update formData on input change.
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Submit the data to the email API route.
  const handleSubmit = async () => {
    // Combine fields from both steps.
    const allFields = [...step1Fields, ...step2Fields];
    const emailFields = allFields.map((field) => ({
      label: field.label,
      value: formData[field.name] || "",
    }));

    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ subject, fields: emailFields }),
      });
      const result = await res.json();
      if (res.ok) {
        setStatus("Email sent successfully!");
        // Optionally, clear the form:
        // setFormData({ fullName: "", email: "", phone: "", institutionName: "", destinationCountry: "", programDuration: "", programStartDate: "" });
      } else {
        setStatus(result.error || "Failed to send email.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen animate-gradient flex flex-col items-center justify-center p-4 space-y-8 relative">
      {/* Return Button */}
      <div className="absolute top-4 left-4">
        <a
          href="/"
          className="px-4 py-2 bg-white text-blue-600 rounded shadow hover:bg-gray-200 transition-colors transform hover:scale-105"
        >
          &larr; Return to Options
        </a>
      </div>

      {/* Page Title */}
      <div className="w-full max-w-md text-center">
        <h1 className="text-5xl font-bold text-white">International Students Insurance</h1>
      </div>

      {/* Multi-step form card */}
      <div className="w-full max-w-md bg-white text-gray-800 rounded-lg shadow-lg p-6">
        {/* Progress Bar & Step Info */}
        <div className="mb-6">
          <div className="flex justify-between items-center text-sm text-gray-600 mb-2">
            <span>Step {step} of 3</span>
            <span>
              {step === 1
                ? "Your Information"
                : step === 2
                ? "Study Details"
                : "Review & Submit"}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              style={{ width: `${(step / 3) * 100}%` }}
              className="bg-blue-500 h-2 rounded-full transition-all duration-300"
            ></div>
          </div>
        </div>

        {/* STEP 1: Personal Info */}
        {step === 1 && (
          <div>
            <h2 className="text-lg font-semibold mb-4 text-blue-900">Your Information</h2>
            {step1Fields.map((field) => (
              <div key={field.name} className="mb-4">
                <label htmlFor={field.name} className="block text-sm font-medium text-gray-700 mb-1">
                  {field.label}
                </label>
                <input
                  id={field.name}
                  name={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  value={formData[field.name]}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-300 p-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            ))}
            <div className="mt-6 flex justify-end">
              <button
                className="px-4 py-2 rounded-md bg-gray-300 text-gray-500 cursor-not-allowed mr-2"
                disabled
              >
                Back
              </button>
              <button
                onClick={() => setStep(2)}
                className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-500 transition-colors transform hover:scale-105"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: Study Details */}
        {step === 2 && (
          <div>
            <h2 className="text-lg font-semibold mb-4 text-blue-900">Study Details</h2>
            {step2Fields.map((field) => (
              <div key={field.name} className="mb-4">
                <label htmlFor={field.name} className="block text-sm font-medium text-gray-700 mb-1">
                  {field.label}
                </label>
                <input
                  id={field.name}
                  name={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  value={formData[field.name]}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-300 p-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            ))}
            <div className="mt-6 flex justify-between">
              <button
                onClick={() => setStep(1)}
                className="px-4 py-2 rounded-md bg-blue-100 text-blue-900 hover:bg-blue-200 transition-colors transform hover:scale-105"
              >
                Back
              </button>
              <button
                onClick={() => setStep(3)}
                className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-500 transition-colors transform hover:scale-105"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Review & Submit */}
        {step === 3 && (
          <div>
            <h2 className="text-lg font-semibold mb-4 text-blue-900">Review & Submit</h2>
            <p className="mb-4 text-gray-800">
              Please review your details before submitting your international students insurance request.
            </p>
            <ul className="mb-6 text-sm text-gray-700">
              {[...step1Fields, ...step2Fields].map((field) => (
                <li key={field.name}>
                  <strong>{field.label}:</strong> {formData[field.name] || "-"}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex justify-between">
              <button
                onClick={() => setStep(2)}
                className="px-4 py-2 rounded-md bg-blue-100 text-blue-900 hover:bg-blue-200 transition-colors transform hover:scale-105"
              >
                Back
              </button>
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors transform hover:scale-105"
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <div className="w-6 h-6 border-4 border-white border-dashed rounded-full animate-spin"></div>
                    <span className="ml-2">Sending...</span>
                  </div>
                ) : (
                  "Submit"
                )}
              </button>
            </div>
            {status && (
              <p className="mt-4 text-center text-sm font-semibold text-red-600">
                {status}
              </p>
            )}
          </div>
        )}
      </div>

      {/* Additional Section for Other Insurance Options */}
      <div className="w-full max-w-4xl text-center">
        <h3 className="text-2xl font-bold text-white mb-4">
          Explore Our Other Insurance Quotes
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
        <a
            href="/quote/life-insurance"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors transform hover:scale-105"
          >
            Life Insurance
          </a>
          <a
            href="/quote/travel-insurance"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors transform hover:scale-105"
          >
            Travel Insurance
          </a>
          <a
            href="/quote/health-dental-insurance"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors transform hover:scale-105"
          >
            Health & Dental
          </a>
          <a
            href="/quote/critical-illness-insurance"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors transform hover:scale-105"
          >
            Critical Illness
          </a>
          
          <a
            href="/quote/group-employee-benefit"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors transform hover:scale-105"
          >
            Group Benefits
          </a>
          <a
            href="/quote/disability-insurance"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors transform hover:scale-105"
          >
            Disability
          </a>
        </div>
      </div>
    </div>
  );
}
