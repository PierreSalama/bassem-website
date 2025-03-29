"use client";

import { insuranceTypes } from "@/config/insuranceTypes";
import QuotePageLayout from "@/components/QuotePageLayout";

export default function InvestmentPage() {
  const insuranceType = insuranceTypes.find((type) => type.id === "investment")!;
  return <QuotePageLayout insuranceType={insuranceType} />;
} 