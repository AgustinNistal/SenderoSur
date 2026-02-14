"use client"

import { Navigation } from "@/components/navigation"
import { AccommodationsHero } from "@/components/accommodations-hero"
import { AccommodationsGrid } from "@/components/accommodations-grid"
import { useSearchParams } from "next/navigation"
import { Suspense } from "react"

export const accommodations = [
  {
    id: "domo-patagonia-glaciar",
    name: "Domo Glaciar",
    location: "El Calafate, Santa Cruz",
    route: "Ruta Patagónica",
    description: "Domo de lujo con vista panorámica al Glaciar Perito Moreno y la cordillera patagónica",
    shortDescription: "Vista al Glaciar Perito Moreno",
    price: 180,
    capacity: 2,
    amenities: [
      "Calefacción central",
      "Baño privado con ducha",
      "Ventana panorámica 360°",
      "Ropa de cama premium",
      "Terraza con asientos",
      "Cocina equipada",
    ],
    features: ["Desayuno incluido", "Parking gratuito", "WiFi de alta velocidad", "Guía turístico local"],
    images: [
      "https://ik.imagekit.io/ankxi835d/rutasimg/glaciares.jpg?updatedAt=1763065075199",
      "/domo-glaciar-interior-bed.jpg",
      "/domo-glaciar-panoramic-view.jpg",
      "/domo-glaciar-terrace-sunset.jpg",
    ],
    rating: 4.9,
    reviews: 127,
  },
  {
    id: "domo-andino-lago",
    name: "Domo del Lago",
    location: "Bariloche, Río Negro",
    route: "Ruta Andina",
    description: "Domo boutique frente al lago Nahuel Huapi, rodeado de bosques andinos y montañas nevadas",
    shortDescription: "Frente al Lago Nahuel Huapi",
    price: 150,
    capacity: 3,
    amenities: [
      "Estufa a leña",
      "Baño completo",
      "Cúpula transparente",
      "Deck de madera",
      "Parrilla exterior",
      "Kayaks disponibles",
    ],
    features: ["Desayuno incluido", "Acceso al lago", "Préstamo de bicicletas", "Mascotas permitidas"],
    images: [
      "https://ik.imagekit.io/ankxi835d/rutasimg/sur.jpg?updatedAt=1763065075249",
      "/domo-lago-interior-cozy.jpg",
      "/domo-lago-lake-view.jpg",
      "/domo-lago-deck-morning.jpg",
    ],
    rating: 4.8,
    reviews: 94,
  },
  {
    id: "domo-costero-mar",
    name: "Domo Atlántico",
    location: "Mar Azul, Buenos Aires",
    route: "Ruta Costera",
    description: "Domo ecológico a metros de la playa, con diseño minimalista y materiales sustentables",
    shortDescription: "A metros de la playa",
    price: 120,
    capacity: 2,
    amenities: [
      "Ventilación natural",
      "Baño ecológico",
      "Hamacas paraguayas",
      "Ducha exterior",
      "Kitchenette",
      "Bicicletas de playa",
    ],
    features: ["Desayuno orgánico", "Acceso directo a playa", "Clases de yoga", "Parking incluido"],
    images: [
      "https://ik.imagekit.io/ankxi835d/rutasimg/pinguinos.jpg?updatedAt=1763065075126",
      "/domo-atlantico-interior-minimal.jpg",
      "/domo-atlantico-beach-view.jpg",
      "/domo-atlantico-hammock-sunset.jpg",
    ],
    rating: 4.7,
    reviews: 81,
  },
  {
    id: "domo-vinedo-mendoza",
    name: "Domo del Viñedo",
    location: "Luján de Cuyo, Mendoza",
    route: "Ruta de Viñedos",
    description: "Domo premium entre viñedos de Malbec, con vista a la Cordillera de los Andes",
    shortDescription: "Entre viñedos de Malbec",
    price: 200,
    capacity: 2,
    amenities: [
      "Climatización",
      "Baño de lujo",
      "Ventanas panorámicas",
      "Cava de vinos",
      "Bañera exterior",
      "Cocina gourmet",
    ],
    features: ["Cata de vinos incluida", "Tour por viñedos", "Cena maridaje opcional", "Transfer desde aeropuerto"],
    images: [
      "https://ik.imagekit.io/ankxi835d/rutasimg/vacaciones-invierno-que-hacer-mendoza-vinedos-y-montana.webp?updatedAt=1763067641238",
      "/domo-vinedo-interior-luxury.jpg",
      "/domo-vinedo-vineyard-view.jpg",
      "/domo-vinedo-bathtub-sunset.jpg",
    ],
    rating: 5.0,
    reviews: 103,
  },
  {
    id: "domo-salta-valles",
    name: "Domo de los Valles",
    location: "Cafayate, Salta",
    route: "Ruta de Viñedos",
    description: "Domo en los Valles Calchaquíes con arquitectura que integra cultura andina y confort moderno",
    shortDescription: "Valles Calchaquíes",
    price: 140,
    capacity: 3,
    amenities: [
      "Calefacción geotérmica",
      "Baño completo",
      "Observatorio astronómico",
      "Fogón exterior",
      "Cocina regional",
      "Textiles artesanales",
    ],
    features: ["Desayuno regional", "Excursiones guiadas", "Degustación de vinos", "WiFi disponible"],
    images: [
      "https://ik.imagekit.io/ankxi835d/rutasimg/cerroSieteColores.jpg?updatedAt=1763065075237",
      "/domo-valles-interior-cultural.jpg",
      "/domo-valles-mountains-view.jpg",
      "/domo-valles-stargazing-night.jpg",
    ],
    rating: 4.9,
    reviews: 76,
  },
  {
    id: "domo-ushuaia-fin-mundo",
    name: "Domo del Fin del Mundo",
    location: "Ushuaia, Tierra del Fuego",
    route: "Ruta Patagónica",
    description: "Domo extremo en el punto más austral de Argentina, con vistas al Canal Beagle",
    shortDescription: "Canal Beagle, fin del mundo",
    price: 190,
    capacity: 2,
    amenities: [
      "Calefacción intensiva",
      "Baño climatizado",
      "Triple acristalamiento",
      "Chimenea a leña",
      "Terraza cubierta",
      "Cocina equipada",
    ],
    features: ["Desayuno patagónico", "Excursión Canal Beagle", "Avistaje de fauna", "Parking cubierto"],
    images: [
      "/domo-ushuaia-exterior-beagle.jpg",
      "/domo-ushuaia-interior-warm.jpg",
      "/domo-ushuaia-canal-view.jpg",
      "/domo-ushuaia-snow-landscape.jpg",
    ],
    rating: 4.9,
    reviews: 68,
  },
]

function HospedajesContent() {
  const searchParams = useSearchParams()
  const routeFilter = searchParams.get("ruta")

  const filteredAccommodations = routeFilter
    ? accommodations.filter((acc) => {
        const routeIdMap: Record<string, string> = {
          costera: "Ruta Costera",
          andina: "Ruta Andina",
          patagonica: "Ruta Patagónica",
          vinedos: "Ruta de Viñedos",
        }
        return acc.route === routeIdMap[routeFilter]
      })
    : accommodations

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <AccommodationsHero />
      <AccommodationsGrid accommodations={filteredAccommodations} routeFilter={routeFilter} />

      {/* Info Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl text-primary mb-6">Alojamiento Sustentable</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Nuestros domos están diseñados con materiales ecológicos y tecnologías de bajo impacto ambiental. Cada
              hospedaje se integra armoniosamente con el paisaje natural sin comprometer el confort.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Los domos cuentan con energía solar, sistemas de recolección de agua de lluvia y están construidos con
              principios de arquitectura bioclimática para minimizar la huella ecológica.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default function HospedajesPage() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <HospedajesContent />
    </Suspense>
  )
}
