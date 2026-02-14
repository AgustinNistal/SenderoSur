"use client"

import { useState, useMemo } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { useAuth } from "@/contexts/auth-context"
import { AuthModal } from "@/components/auth-modal"
import { CalendarDays, Users, Loader2, Check } from "lucide-react"
import type { Accommodation } from "@/lib/data"
import type { DateRange } from "react-day-picker"

interface BookingModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  accommodation: Accommodation
}

export function BookingModal({ open, onOpenChange, accommodation }: BookingModalProps) {
  const [dateRange, setDateRange] = useState<DateRange | undefined>()
  const [guests, setGuests] = useState("2")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [authModalOpen, setAuthModalOpen] = useState(false)
  const { user, addReservation } = useAuth()

  const nights = useMemo(() => {
    if (!dateRange?.from || !dateRange?.to) return 0
    const diff = dateRange.to.getTime() - dateRange.from.getTime()
    return Math.ceil(diff / (1000 * 60 * 60 * 24))
  }, [dateRange])

  const totalPrice = nights * accommodation.pricePerNight

  const handleBook = async () => {
    if (!user) {
      setAuthModalOpen(true)
      return
    }

    if (!dateRange?.from || !dateRange?.to) return

    setLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))

    addReservation({
      accommodationId: accommodation.id,
      accommodationName: accommodation.name,
      cityName: accommodation.city,
      checkIn: dateRange.from,
      checkOut: dateRange.to,
      guests: Number.parseInt(guests),
      totalPrice,
      status: "confirmed",
    })

    setLoading(false)
    setSuccess(true)

    setTimeout(() => {
      onOpenChange(false)
      setSuccess(false)
      setDateRange(undefined)
    }, 2000)
  }

  const disabledDays = { before: new Date() }

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl">Reservar {accommodation.name}</DialogTitle>
          </DialogHeader>

          {success ? (
            <div className="py-12 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-2">Reserva Confirmada</h3>
              <p className="text-muted-foreground">
                Tu reserva ha sido procesada exitosamente. Podés verla en tu perfil.
              </p>
            </div>
          ) : (
            <div className="space-y-6 mt-4">
              <div>
                <Label className="flex items-center gap-2 mb-3">
                  <CalendarDays className="h-4 w-4" />
                  Fechas de estadía
                </Label>
                <div className="border border-border rounded-lg p-4">
                  <Calendar
                    mode="range"
                    selected={dateRange}
                    onSelect={setDateRange}
                    disabled={disabledDays}
                    numberOfMonths={1}
                    className="mx-auto"
                  />
                </div>
                {dateRange?.from && dateRange?.to && (
                  <p className="text-sm text-muted-foreground mt-2 text-center">
                    {nights} {nights === 1 ? "noche" : "noches"} seleccionadas
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="guests" className="flex items-center gap-2 mb-3">
                  <Users className="h-4 w-4" />
                  Huéspedes
                </Label>
                <Select value={guests} onValueChange={setGuests}>
                  <SelectTrigger id="guests">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: accommodation.maxGuests }, (_, i) => i + 1).map((num) => (
                      <SelectItem key={num} value={num.toString()}>
                        {num} {num === 1 ? "huésped" : "huéspedes"}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {nights > 0 && (
                <div className="bg-muted rounded-lg p-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                      USD {accommodation.pricePerNight} x {nights} noches
                    </span>
                    <span className="text-foreground">USD {totalPrice}</span>
                  </div>
                  <div className="flex justify-between font-medium border-t border-border pt-2">
                    <span className="text-foreground">Total</span>
                    <span className="text-accent font-serif text-xl">USD {totalPrice}</span>
                  </div>
                </div>
              )}

              <Button
                size="lg"
                onClick={handleBook}
                disabled={!dateRange?.from || !dateRange?.to || loading}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Procesando...
                  </>
                ) : user ? (
                  "Confirmar Reserva"
                ) : (
                  "Iniciar sesión para reservar"
                )}
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                Al reservar aceptás nuestros términos y condiciones. Cancelación gratuita hasta 48hs antes del check-in.
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <AuthModal open={authModalOpen} onOpenChange={setAuthModalOpen} />
    </>
  )
}
