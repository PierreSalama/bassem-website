import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  company?: string;
}

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card className="bg-muted/50 px-6 py-4 rounded-md">
      <CardContent className="relative text-sm italic text-muted-foreground">
        {/* Decorative quote icon in the background */}
        <Quote className="absolute -top-1 -left-1 w-6 h-6 opacity-20" />
        <p>"{testimonial.quote}"</p>
      </CardContent>
      <CardFooter className="text-sm font-semibold text-muted-foreground">
        – {testimonial.author}{testimonial.company ? `, ${testimonial.company}` : ""}
      </CardFooter>
    </Card>
  );
}
