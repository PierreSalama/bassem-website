"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer
      // Different gradient (left-to-right) in a grayish-blue range
      style={{
        background: "linear-gradient(to right, #334155, #475569)",
      }}
      className="text-white pt-8 pb-4"
    >
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-4">
        {/* Column 1 */}
        <div>
          <h2 className="text-lg font-bold mb-2">Coverus.ca</h2>
          <p>
            Protecting those you love is on the minds of millions of Canadians.
            At Coverus.ca we have the same mind set since 2008.
          </p>
        </div>

        {/* Column 2: Our Services */}
        <div>
          <h2 className="text-lg font-bold mb-2">Our Services</h2>
          <ul className="space-y-1">
            <li>Life Insurance</li>
            <li>Travel Insurance</li>
            <li>International Students Insurance</li>
            <li>Individual Health & Dental Insurance</li>
            <li>Group Employee Benefit</li>
            <li>Disability Insurance</li>
            <li>Critical Illness Insurance</li>
            <li>Life insurance calculator</li>
          </ul>
        </div>

        {/* Column 3: Quick Links */}
        <div>
          <h2 className="text-lg font-bold mb-2">Quick Links</h2>
          <ul className="space-y-1">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about-us">About Us</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
            <li>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact Us */}
        <div>
          <h2 className="text-lg font-bold mb-2">Contact Us</h2>
          <p className="mb-1 font-semibold">Location:</p>
          <p className="mb-2">
            150 Commerce Valley Dr. West. Unit 803 Thornhill, ON, L3T 7Z3
          </p>

          <p className="mb-1 font-semibold">Call Us:</p>
          <p className="mb-2">(647) 677-1420</p>

          <p className="mb-1 font-semibold">Mail Us:</p>
          <p className="mb-2">info@coverus.ca</p>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="max-w-7xl mx-auto px-4 pt-4 border-t border-white mt-4 text-sm text-center">
        <p>© 2025 by Bassem Ibrahim Nashed, all-financials.ca inc</p>
        <p>Designed &amp; Developed by DCht | Digital</p>
      </div>
    </footer>
  );
}
