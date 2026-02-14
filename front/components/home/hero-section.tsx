"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Plane, MapPin, Clock, ChevronDown } from "lucide-react"

const heroImages = [
  "/iguazu-falls-waterfall-jungle-argentina.jpg",
  "/purmamarca-seven-colors-mountain-jujuy-argentina.jpg",
  "/cafayate-vineyards-wine-region-salta-argentina.jpg",
]

export function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {heroImages.map((img, idx) => (
        <div
          key={img}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            idx === currentImage ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={img || "/placeholder.svg"}
            alt="Paisaje argentino"
            fill
            className="object-cover"
            priority={idx === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/80" />
        </div>
      ))}

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="font-[family-name:var(--font-barrio)] text-5xl md:text-7xl text-background mb-4 animate-fade-up">
            Sendero Sur
          </h1>
          <p
            className="font-serif text-2xl md:text-4xl text-background/90 mb-6 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            Rutas Turísticas de Argentina
          </p>
          <p className="text-lg text-background/80 max-w-xl mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Descubrí los paisajes más impresionantes del país con rutas diseñadas para que viajes sin preocupaciones.
            Aeropuerto en el inicio y fin de cada ruta, domos ecológicos en cada parada.
          </p>

          <div className="flex flex-wrap gap-4 mb-12 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Link href="/rutas">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                <MapPin className="h-5 w-5" />
                Explorar Rutas
              </Button>
            </Link>
            <Link href="#como-funciona">
              <Button
                size="lg"
                variant="outline"
                className="border-background/50 text-background hover:bg-background/10 gap-2 bg-transparent"
              >
                Cómo Funciona
              </Button>
            </Link>
          </div>

          <div
            className="flex flex-wrap gap-6 text-background/80 text-sm animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="flex items-center gap-2">
              <Plane className="h-5 w-5 text-primary" />
              <span>Aeropuerto al inicio y fin</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-accent" />
              <span>Domos ecológicos incluidos</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              <span>Máximo 5hs entre destinos</span>
            </div>
          </div>
        </div>
      </div>

      <Link
        href="#como-funciona"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-background/60 hover:text-background transition-colors animate-bounce"
      >
        <ChevronDown className="h-8 w-8" />
      </Link>
    </section>
  )
}
