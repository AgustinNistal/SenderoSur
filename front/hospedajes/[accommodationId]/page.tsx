"use client"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { MapPin, Users, Star, ChevronLeft, ChevronRight, Wifi, Coffee, Check, CalendarIcon } from "lucide-react"
import Image from "next/image"
import { useState, use } from "react"
import { notFound } from "next/navigation"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { accommodations } from "@/app/hospedajes/page"

export default function AccommodationDetailPage({ params }: { params: Promise<{ accommodationId: string }> }) {
  const { accommodationId } = use(params)
  const [currentImage, setCurrentImage] = useState(0)
  const [checkIn, setCheckIn] = useState<Date | undefined>(undefined)
  const [checkOut, setCheckOut] = useState<Date | undefined>(undefined)
  const [guests, setGuests] = useState(2)

  const accommodation = accommodations.find((acc) => acc.id === accommodationId)

  if (!accommodation) {
    notFound()
  }

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % accommodation.images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + accommodation.images.length) % accommodation.images.length)
  }

  const calculateNights = () => {
    if (checkIn && checkOut) {
      const diffTime = Math.abs(checkOut.getTime() - checkIn.getTime())
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
      return diffDays
    }
    return 0
  }

  const nights = calculateNights()
  const totalPrice = nights * accommodation.price

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Back Button */}
      <div className="container mx-auto px-4 pt-24 pb-4">
        <Link href="/hospedajes">
          <Button variant="ghost" className="gap-2">
            <ChevronLeft className="w-4 h-4" />
            Volver a Hospedajes
          </Button>
        </Link>
      </div>

      {/* Image Gallery */}
      <div className="container mx-auto px-4 pb-8">
        <div className="relative h-[400px] md:h-[500px] bg-muted rounded-xl overflow-hidden">
          <Image
            src={accommodation.images[currentImage] || "/placeholder.svg"}
            alt={`${accommodation.name} - imagen ${currentImage + 1}`}
            fill
            className="object-cover"
          />

          {/* Carousel Controls */}
          {accommodation.images.length > 1 && (
            <>
              <div className="absolute inset-0 flex items-center justify-between p-4">
                <Button
                  size="icon"
                  variant="secondary"
                  className="bg-white/90 hover:bg-white shadow-lg"
                  onClick={prevImage}
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <Button
                  size="icon"
                  variant="secondary"
                  className="bg-white/90 hover:bg-white shadow-lg"
                  onClick={nextImage}
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>

              {/* Image Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {accommodation.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={cn(
                      "w-2 h-2 rounded-full transition-all",
                      index === currentImage ? "bg-white w-6" : "bg-white/50 hover:bg-white/75",
                    )}
                    aria-label={`Ir a imagen ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}

          <Badge className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm">{accommodation.route}</Badge>
        </div>
      </div>

      {/* Content Grid */}
      <div className="container mx-auto px-4 pb-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h1 className="font-display text-4xl md:text-5xl text-primary mb-4">{accommodation.name}</h1>

              <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>{accommodation.location}</span>
                </div>

                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-primary text-primary" />
                  <span className="font-semibold">{accommodation.rating}</span>
                  <span className="text-muted-foreground">({accommodation.reviews} reseñas)</span>
                </div>

                <div className="flex items-center gap-2 text-muted-foreground">
                  <Users className="w-4 h-4" />
                  <span>Hasta {accommodation.capacity} personas</span>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">{accommodation.description}</p>

            <Separator className="my-8" />

            {/* Amenities */}
            <div className="mb-8">
              <h2 className="font-semibold text-2xl mb-6 flex items-center gap-2">
                <Coffee className="w-6 h-6 text-primary" />
                Comodidades
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {accommodation.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-secondary/30">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            <Separator className="my-8" />

            {/* Features */}
            <div className="mb-8">
              <h2 className="font-semibold text-2xl mb-6 flex items-center gap-2">
                <Wifi className="w-6 h-6 text-primary" />
                Servicios Incluidos
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {accommodation.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-accent/20">
                    <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Booking Card */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24 border-2">
              <CardContent className="p-6">
                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl font-bold text-foreground">${accommodation.price}</span>
                    <span className="text-muted-foreground">por noche</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Precio por domo completo</p>
                </div>

                <Separator className="my-6" />

                {/* Date Selection */}
                <div className="space-y-4 mb-6">
                  <div>
                    <Label className="flex items-center gap-2 mb-2">
                      <CalendarIcon className="w-4 h-4" />
                      Fecha de entrada
                    </Label>
                    <Calendar
                      mode="single"
                      selected={checkIn}
                      onSelect={setCheckIn}
                      disabled={(date) => date < new Date()}
                      className="rounded-md border w-full"
                    />
                  </div>

                  <div>
                    <Label className="flex items-center gap-2 mb-2">
                      <CalendarIcon className="w-4 h-4" />
                      Fecha de salida
                    </Label>
                    <Calendar
                      mode="single"
                      selected={checkOut}
                      onSelect={setCheckOut}
                      disabled={(date) => !checkIn || date <= checkIn}
                      className="rounded-md border w-full"
                    />
                  </div>

                  <div>
                    <Label className="flex items-center gap-2 mb-2">
                      <Users className="w-4 h-4" />
                      Huéspedes
                    </Label>
                    <div className="flex items-center gap-3">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setGuests(Math.max(1, guests - 1))}
                        disabled={guests <= 1}
                      >
                        -
                      </Button>
                      <span className="text-lg font-semibold w-12 text-center">{guests}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setGuests(Math.min(accommodation.capacity, guests + 1))}
                        disabled={guests >= accommodation.capacity}
                      >
                        +
                      </Button>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">Máximo {accommodation.capacity} personas</p>
                  </div>
                </div>

                <Separator className="my-6" />

                {/* Price Breakdown */}
                {nights > 0 && (
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">
                        ${accommodation.price} x {nights} {nights === 1 ? "noche" : "noches"}
                      </span>
                      <span className="font-semibold">${totalPrice}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Tarifa de servicio</span>
                      <span className="font-semibold">${Math.round(totalPrice * 0.1)}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span>${totalPrice + Math.round(totalPrice * 0.1)}</span>
                    </div>
                  </div>
                )}

                <Button size="lg" className="w-full" disabled={!checkIn || !checkOut || nights === 0}>
                  {nights > 0 ? `Reservar ${nights} ${nights === 1 ? "noche" : "noches"}` : "Seleccionar fechas"}
                </Button>

                {nights > 0 && (
                  <p className="text-xs text-center text-muted-foreground mt-3">No se realizará ningún cargo aún</p>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
