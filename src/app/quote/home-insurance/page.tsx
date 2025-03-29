"use client";

import { insuranceTypes } from "@/config/insuranceTypes";
import QuotePageLayout from "@/components/QuotePageLayout";

export default function HomeInsurancePage() {
  const insuranceType = insuranceTypes.find((type) => type.id === "home-insurance")!;
  return <QuotePageLayout insuranceType={insuranceType} />;
} 