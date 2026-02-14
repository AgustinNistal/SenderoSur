import { HeroSection } from "@/components/home/hero-section"
import { RoutesCarousel } from "@/components/home/routes-carousel"
import { FeaturesSection } from "@/components/home/features-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <FeaturesSection />
      <RoutesCarousel />
      <TestimonialsSection />
    </div>
  )
}
