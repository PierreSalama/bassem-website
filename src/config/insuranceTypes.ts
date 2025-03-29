export interface InsuranceType {
  id: string;
  name: string;
  image: string;
  quoteUrl: string;
  stepLabels: {
    step1: string;
    step2: string;
    step3: string;
  };
}

export const insuranceTypes: InsuranceType[] = [
  {
    id: "life-insurance",
    name: "Life Insurance",
    image: "/images/life-insurance.jpg",
    quoteUrl: "/quote/life-insurance",
    stepLabels: {
      step1: "Your Information",
      step2: "Policy Details",
      step3: "Review & Submit",
    },
  },
  {
    id: "travel-insurance",
    name: "Travel Insurance",
    image: "/images/travel-insurance.jpeg",
    quoteUrl: "/quote/travel-insurance",
    stepLabels: {
      step1: "Your Information",
      step2: "Travel Details",
      step3: "Review & Submit",
    },
  },
  {
    id: "health-dental-insurance",
    name: "Health & Dental Insurance",
    image: "/images/health-dental-insurance.jpg",
    quoteUrl: "/quote/health-dental-insurance",
    stepLabels: {
      step1: "Your Information",
      step2: "Coverage Details",
      step3: "Review & Submit",
    },
  },
  {
    id: "critical-illness-insurance",
    name: "Critical Illness Insurance",
    image: "/images/critical-illness-insurance.jpg",
    quoteUrl: "/quote/critical-illness-insurance",
    stepLabels: {
      step1: "Your Information",
      step2: "Coverage Details",
      step3: "Review & Submit",
    },
  },
  {
    id: "international-students-insurance",
    name: "International Students Insurance",
    image: "/images/international-students-insurance.jpg",
    quoteUrl: "/quote/international-students-insurance",
    stepLabels: {
      step1: "Your Information",
      step2: "Student Details",
      step3: "Review & Submit",
    },
  },
  {
    id: "group-employee-benefit",
    name: "Group Employee Benefit",
    image: "/images/group-employee-benefit.jpg",
    quoteUrl: "/quote/group-employee-benefit",
    stepLabels: {
      step1: "Business Information",
      step2: "Employee Details",
      step3: "Review & Submit",
    },
  },
  {
    id: "disability-insurance",
    name: "Disability Insurance",
    image: "/images/disability-insurance.jpg",
    quoteUrl: "/quote/disability-insurance",
    stepLabels: {
      step1: "Your Information",
      step2: "Coverage Details",
      step3: "Review & Submit",
    },
  },
  {
    id: "auto-insurance",
    name: "Auto Insurance",
    image: "/images/auto-insurance.jpg",
    quoteUrl: "/quote/auto-insurance",
    stepLabels: {
      step1: "Your Information",
      step2: "Vehicle Details",
      step3: "Review & Submit",
    },
  },
  {
    id: "home-insurance",
    name: "Home Insurance",
    image: "/images/home-insurance.jpg",
    quoteUrl: "/quote/home-insurance",
    stepLabels: {
      step1: "Your Information",
      step2: "Property Details",
      step3: "Review & Submit",
    },
  },
  {
    id: "commercial-insurance",
    name: "Commercial Insurance",
    image: "/images/commercial-insurance.jpg",
    quoteUrl: "/quote/commercial-insurance",
    stepLabels: {
      step1: "Business Information",
      step2: "Coverage Details",
      step3: "Review & Submit",
    },
  },
  {
    id: "liability-insurance",
    name: "Liability Insurance",
    image: "/images/liability-insurance.jpg",
    quoteUrl: "/quote/liability-insurance",
    stepLabels: {
      step1: "Your Information",
      step2: "Coverage Requirements",
      step3: "Review & Submit",
    },
  },
  {
    id: "investment",
    name: "Investment",
    image: "/images/investment.jpg",
    quoteUrl: "/quote/investment",
    stepLabels: {
      step1: "Your Information",
      step2: "Investment Goals",
      step3: "Review & Submit",
    },
  },
]; 