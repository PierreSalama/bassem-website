// "use client";

// import * as React from "react";
// import { usePathname } from "next/navigation";
// import Link from "next/link";
// import Image from "next/image";
// import clsx from "clsx";

// export function TopBar() {
//   const pathname = usePathname() || "";

//   // Sample tabs for navigation
//   const tabs = [
//     { name: "Home", href: "/" },
//     { name: "About", href: "/about" },
//     { name: "Services", href: "/services" },
//     { name: "Contact", href: "/contact" },
//   ];

//   return (
//     <header
//       className={clsx(
//         "fixed top-0 left-0 right-0 h-16 border-b shadow-md z-40",
//         "transition-all duration-300 flex items-center justify-between px-4",
//         "text-white",
//         "backdrop-blur-md" // Apply blur effect
//       )}
//       style={{
//         // Use a semi-transparent dark blue color that complements your pattern.
//         background: "rgba(30, 58, 138, 0.75)",
//       }}
//     >
//       {/* LEFT: Logo wrapped in a Link */}
//       <div className="flex items-center">
//         <Link href="/">
//           <Image src="/logo.jpg" alt="Logo" width={40} height={40} />
//         </Link>
//       </div>

//       {/* CENTER: Breadcrumb */}
//       <nav className="flex items-center justify-center">
//         <ol className="flex items-center space-x-2">
//           <li>
//             <Link href="/" className="text-sm font-medium text-white">
//               Home
//             </Link>
//           </li>
//           {pathname !== "/" && (
//             <li className="text-sm font-medium text-gray-200">
//               / {pathname.replace("/", "")}
//             </li>
//           )}
//         </ol>
//       </nav>

//       {/* RIGHT: Navigation Tabs */}
//       <div className="flex space-x-4">
//         {tabs.map((tab) => (
//           <Link
//             key={tab.href}
//             href={tab.href}
//             className={clsx(
//               "px-3 py-2 text-sm font-medium rounded-md",
//               pathname === tab.href
//                 ? "bg-blue-600 text-white"
//                 : "text-white hover:bg-blue-500"
//             )}
//           >
//             {tab.name}
//           </Link>
//         ))}
//       </div>
//     </header>
//   );
// }







// src/components/Topbar.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Import the official dropdown menu components generated by shadcn-ui
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

export default function Topbar() {
  // State for mobile menu toggle
  const [menuOpen, setMenuOpen] = useState(false);

  // State for navbar background transparency
  const [navSolid, setNavSolid] = useState(false);

  // Get the current path for breadcrumbs
  const pathname = usePathname();

  // Build breadcrumbs (if not on the homepage)
  const crumbs: { label: string; href: string; isCurrent?: boolean }[] = [];
  if (pathname && pathname !== "/") {
    crumbs.push({ label: "Home", href: "/" });
    const segments = pathname.split("/").filter(Boolean);
    // Special handling: if on a quote page, remove "quote" from the breadcrumb
    if (segments[0] === "quote" && segments[1]) {
      const insuranceName = segments[1].replace(/-/g, " ");
      const pageLabel =
        insuranceName.charAt(0).toUpperCase() + insuranceName.slice(1);
      crumbs.push({ label: pageLabel, href: pathname, isCurrent: true });
    } else {
      const pageLabel =
        segments[0].charAt(0).toUpperCase() + segments[0].slice(1);
      crumbs.push({ label: pageLabel, href: pathname, isCurrent: true });
    }
  }

  // Update navbar opacity on scroll using a scroll listener
  useEffect(() => {
    const handleScroll = () => {
      // When scrolled more than 50px, set navbar to solid
      setNavSolid(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        navSolid ? "bg-white bg-opacity-100" : "bg-white bg-opacity-60"
      } backdrop-blur-md`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo Section */}
        <div className="flex items-center">
          {/* Text logo */}
          <Link
            href="/"
            className="text-2xl font-bold text-gray-800 hover:opacity-80"
          >
            MyInsurance
          </Link>
          {/*
          // Option for image logo (uncomment if needed)
          <Link href="/">
            <Image src="/images/logo.png" alt="Company Logo" width={120} height={50} />
          </Link>
          */}
        </div>

        {/* Breadcrumbs (Desktop Only) */}
        <div className="hidden md:block text-sm font-medium">
          {crumbs.length > 0 && (
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2">
                {crumbs.map((crumb, idx) => (
                  <li key={idx} className="flex items-center">
                    {idx !== 0 && (
                      <span className="mx-1 text-gray-500">/</span>
                    )}
                    {crumb.isCurrent ? (
                      <span className="text-gray-800 drop-shadow-sm">
                        {crumb.label}
                      </span>
                    ) : (
                      <Link
                        href={crumb.href}
                        className="text-gray-600 hover:text-gray-800 drop-shadow-sm"
                      >
                        {crumb.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          )}
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            href="/"
            className="text-sm font-semibold hover:text-blue-600"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-sm font-semibold hover:text-blue-600"
          >
            About
          </Link>

          {/* Services Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="text-sm font-semibold hover:text-blue-600 flex items-center">
                Services <ChevronDownIcon className="w-4 h-4 ml-1" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-56 bg-white text-gray-700 shadow-md rounded-md mt-2"
            >
              <DropdownMenuItem asChild>
                <Link href="/quote/life-insurance">Life Insurance</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/quote/travel-insurance">Travel Insurance</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/quote/health-dental-insurance">
                  Health & Dental
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/quote/critical-illness-insurance">
                  Critical Illness
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/quote/international-students-insurance">
                  International Students
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/quote/group-employee-benefit">
                  Group Benefits
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/quote/disability-insurance">
                  Disability Insurance
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/contact">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
              Contact
            </Button>
          </Link>
        </div>

        {/* Mobile Hamburger Menu */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1">
            <span
              className={`block w-6 h-[3px] bg-black transition-transform duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-[3px] bg-black transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`block w-6 h-[3px] bg-black transition-transform duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white bg-opacity-90 backdrop-blur-md text-center p-4 space-y-3 absolute top-full left-0 w-full shadow-lg transition-all duration-300">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="block text-lg font-semibold"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => setMenuOpen(false)}
            className="block text-lg font-semibold"
          >
            About
          </Link>
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="block text-lg font-semibold"
          >
            Contact
          </Link>
          <div className="border-t border-gray-300 pt-3">
            <span className="block text-md font-semibold mb-2">Services</span>
            <Link
              href="/quote/life-insurance"
              onClick={() => setMenuOpen(false)}
              className="block"
            >
              Life Insurance
            </Link>
            <Link
              href="/quote/travel-insurance"
              onClick={() => setMenuOpen(false)}
              className="block"
            >
              Travel Insurance
            </Link>
            <Link
              href="/quote/health-dental-insurance"
              onClick={() => setMenuOpen(false)}
              className="block"
            >
              Health & Dental
            </Link>
            <Link
              href="/quote/critical-illness-insurance"
              onClick={() => setMenuOpen(false)}
              className="block"
            >
              Critical Illness
            </Link>
            <Link
              href="/quote/international-students-insurance"
              onClick={() => setMenuOpen(false)}
              className="block"
            >
              International Students
            </Link>
            <Link
              href="/quote/group-employee-benefit"
              onClick={() => setMenuOpen(false)}
              className="block"
            >
              Group Benefits
            </Link>
            <Link
              href="/quote/disability-insurance"
              onClick={() => setMenuOpen(false)}
              className="block"
            >
              Disability Insurance
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
