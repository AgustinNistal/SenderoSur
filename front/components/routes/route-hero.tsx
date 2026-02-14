import Image from "next/image"
import { Plane, MapPin, Clock, Car } from "lucide-react"
import type { Route } from "@/lib/data"

const routeImages: Record<string, string> = {
  "costera-atlantica": "/puerto-piramides-whales-peninsula-valdes-argentina.jpg",
  "andina-norte": "/purmamarca-seven-colors-mountain-jujuy-argentina.jpg",
  litoral: "/iguazu-falls-waterfall-jungle-argentina.jpg",
  patagonica: "/antofagasta-sierra-pumice-field-volcanic-landscape.jpg",
  vinedos: "/cafayate-vineyards-wine-region-salta-argentina.jpg",
}

interface RouteHeroProps {
  route: Route
}

export function RouteHero({ route }: RouteHeroProps) {
  const firstStop = route.stops[0]
  const lastStop = route.stops[route.stops.length - 1]

  return (
    <section className="relative h-[60vh] min-h-[400px] flex items-end overflow-hidden">
      <Image
        src={routeImages[route.slug] || "/placeholder.svg?height=800&width=1200"}
        alt={route.name}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/50 to-foreground/20" />

      <div className="container mx-auto px-4 pb-12 relative z-10">
        <div className="flex items-center gap-2 text-primary mb-3">
          <span className="px-3 py-1 bg-primary/20 rounded-full text-sm font-medium">{route.theme}</span>
        </div>

        <h1 className="font-serif text-4xl md:text-6xl text-background mb-4">{route.name}</h1>

        <p className="text-background/80 text-lg max-w-2xl mb-6">{route.description}</p>

        <div className="flex flex-wrap gap-6 text-background">
          <div className="flex items-center gap-2 bg-background/10 px-4 py-2 rounded-lg backdrop-blur-sm">
            <Plane className="h-5 w-5 text-primary" />
            <span className="text-sm">
              {firstStop.city} — {lastStop.city}
            </span>
          </div>
          <div className="flex items-center gap-2 bg-background/10 px-4 py-2 rounded-lg backdrop-blur-sm">
            <MapPin className="h-5 w-5 text-accent" />
            <span className="text-sm">{route.stops.length} destinos</span>
          </div>
          <div className="flex items-center gap-2 bg-background/10 px-4 py-2 rounded-lg backdrop-blur-sm">
            <Clock className="h-5 w-5 text-primary" />
            <span className="text-sm">{route.duration}</span>
          </div>
          <div className="flex items-center gap-2 bg-background/10 px-4 py-2 rounded-lg backdrop-blur-sm">
            <Car className="h-5 w-5 text-accent" />
            <span className="text-sm">{route.totalDistance}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
