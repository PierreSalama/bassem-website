"use client";

import { insuranceTypes } from "@/config/insuranceTypes";
import QuotePageLayout from "@/components/QuotePageLayout";

export default function AutoInsurancePage() {
  const insuranceType = insuranceTypes.find((type) => type.id === "auto-insurance")!;
  return <QuotePageLayout insuranceType={insuranceType} />;
} 