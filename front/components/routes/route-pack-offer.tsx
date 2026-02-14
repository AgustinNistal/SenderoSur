"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check, Package, Users, Calendar } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"
import { AuthModal } from "@/components/auth-modal"
import type { Route } from "@/lib/data"

interface RoutePackOfferProps {
  route: Route
}

export function RoutePackOffer({ route }: RoutePackOfferProps) {
  const [authModalOpen, setAuthModalOpen] = useState(false)
  const { user } = useAuth()

  const handleBookPack = () => {
    if (!user) {
      setAuthModalOpen(true)
      return
    }
    // TODO: Implement pack booking
    alert("Reserva de pack - próximamente!")
  }

  return (
    <section className="py-12 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-card rounded-2xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-10">
              <div className="flex items-center gap-2 text-accent mb-4">
                <Package className="h-6 w-6" />
                <span className="font-medium">Pack Completo</span>
              </div>

              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">Reservá toda la ruta</h2>

              <p className="text-muted-foreground mb-6">
                Obtené un precio especial reservando todas las noches de hospedaje de esta ruta. Incluye{" "}
                {route.stops.length} noches en domos ecológicos exclusivos.
              </p>

              <ul className="space-y-3 mb-8">
                {route.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-center gap-3 text-foreground">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
                <li className="flex items-center gap-3 text-foreground">
                  <Check className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Aeropuerto en inicio y fin de ruta</span>
                </li>
              </ul>

              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  <span>2-4 personas</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{route.duration}</span>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 p-8 md:p-10 flex flex-col justify-center">
              <div className="text-center">
                <span className="text-muted-foreground text-sm">Precio total del pack</span>
                <p className="font-serif text-5xl text-accent my-2">USD {route.packPrice}</p>
                <p className="text-muted-foreground text-sm mb-6">
                  por persona · {route.stops.length} noches incluidas
                </p>

                <Button
                  size="lg"
                  onClick={handleBookPack}
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  Reservar Pack Completo
                </Button>

                <p className="text-xs text-muted-foreground mt-4">
                  * También podés reservar cada hospedaje por separado
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AuthModal open={authModalOpen} onOpenChange={setAuthModalOpen} />
    </section>
  )
}
