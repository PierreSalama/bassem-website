"use client";

import { insuranceTypes } from "@/config/insuranceTypes";
import QuotePageLayout from "@/components/QuotePageLayout";

export default function CommercialInsurancePage() {
  const insuranceType = insuranceTypes.find((type) => type.id === "commercial-insurance")!;
  return <QuotePageLayout insuranceType={insuranceType} />;
} 