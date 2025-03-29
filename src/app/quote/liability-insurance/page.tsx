"use client";

import { insuranceTypes } from "@/config/insuranceTypes";
import QuotePageLayout from "@/components/QuotePageLayout";

export default function LiabilityInsurancePage() {
  const insuranceType = insuranceTypes.find((type) => type.id === "liability-insurance")!;
  return <QuotePageLayout insuranceType={insuranceType} />;
} 