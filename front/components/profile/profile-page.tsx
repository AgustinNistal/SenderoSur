"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { format } from "date-fns"
import { es } from "date-fns/locale"
import { User, Calendar, MessageSquare, MapPin, Star, Edit2, Save, X, Clock, CreditCard, Users } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"

export function ProfilePage() {
  const router = useRouter()
  const { user, isLoading, updateProfile } = useAuth()
  const [activeTab, setActiveTab] = useState("reservas")
  const [isEditing, setIsEditing] = useState(false)
  const [editName, setEditName] = useState("")
  const [editPhone, setEditPhone] = useState("")

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/")
    }
  }, [user, isLoading, router])

  useEffect(() => {
    if (user) {
      setEditName(user.name)
      setEditPhone(user.phone || "")
    }
  }, [user])

  // Handle hash navigation
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.replace("#", "")
      if (hash === "reservas" || hash === "datos" || hash === "comentarios") {
        setActiveTab(hash)
      }
    }
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent" />
      </div>
    )
  }

  if (!user) return null

  const handleSaveProfile = () => {
    updateProfile({ name: editName, phone: editPhone })
    setIsEditing(false)
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "confirmed":
        return <Badge className="bg-green-500/20 text-green-500 border-green-500/30">Confirmada</Badge>
      case "pending":
        return <Badge className="bg-yellow-500/20 text-yellow-500 border-yellow-500/30">Pendiente</Badge>
      case "cancelled":
        return <Badge className="bg-red-500/20 text-red-500 border-red-500/30">Cancelada</Badge>
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/20 to-accent/20 py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center">
              <User className="w-10 h-10 text-primary" />
            </div>
            <div>
              <h1 className="font-serif text-3xl md:text-4xl text-foreground">{user.name}</h1>
              <p className="text-muted-foreground">{user.email}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:inline-flex">
            <TabsTrigger value="reservas" className="gap-2">
              <Calendar className="w-4 h-4" />
              <span className="hidden sm:inline">Mis Reservas</span>
              <span className="sm:hidden">Reservas</span>
            </TabsTrigger>
            <TabsTrigger value="datos" className="gap-2">
              <User className="w-4 h-4" />
              <span className="hidden sm:inline">Datos Personales</span>
              <span className="sm:hidden">Datos</span>
            </TabsTrigger>
            <TabsTrigger value="comentarios" className="gap-2">
              <MessageSquare className="w-4 h-4" />
              <span className="hidden sm:inline">Mis Comentarios</span>
              <span className="sm:hidden">Comentarios</span>
            </TabsTrigger>
          </TabsList>

          {/* Reservas Tab */}
          <TabsContent value="reservas" className="space-y-4">
            <h2 className="font-serif text-2xl text-foreground">Mis Reservas</h2>
            {user.reservations.length === 0 ? (
              <Card className="bg-card border-border">
                <CardContent className="flex flex-col items-center justify-center py-12 text-center">
                  <Calendar className="w-16 h-16 text-muted-foreground mb-4" />
                  <h3 className="font-serif text-xl text-foreground mb-2">No tienes reservas aún</h3>
                  <p className="text-muted-foreground mb-4">
                    Explora nuestros hospedajes y reserva tu próxima aventura
                  </p>
                  <Button onClick={() => router.push("/hospedajes")} className="bg-primary hover:bg-primary/90">
                    Ver Hospedajes
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="grid gap-4">
                {user.reservations
                  .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
                  .map((reservation) => (
                    <Card key={reservation.id} className="bg-card border-border overflow-hidden">
                      <CardContent className="p-0">
                        <div className="flex flex-col md:flex-row">
                          <div className="md:w-48 h-32 md:h-auto bg-primary/10 flex items-center justify-center">
                            <MapPin className="w-12 h-12 text-primary/50" />
                          </div>
                          <div className="flex-1 p-6">
                            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                              <div>
                                <h3 className="font-serif text-xl text-foreground">{reservation.accommodationName}</h3>
                                <p className="text-muted-foreground flex items-center gap-1">
                                  <MapPin className="w-4 h-4" />
                                  {reservation.cityName}
                                </p>
                              </div>
                              {getStatusBadge(reservation.status)}
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                              <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-primary" />
                                <div>
                                  <p className="text-muted-foreground">Check-in</p>
                                  <p className="font-medium text-foreground">
                                    {format(new Date(reservation.checkIn), "d MMM yyyy", { locale: es })}
                                  </p>
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-primary" />
                                <div>
                                  <p className="text-muted-foreground">Check-out</p>
                                  <p className="font-medium text-foreground">
                                    {format(new Date(reservation.checkOut), "d MMM yyyy", { locale: es })}
                                  </p>
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                <Users className="w-4 h-4 text-primary" />
                                <div>
                                  <p className="text-muted-foreground">Huéspedes</p>
                                  <p className="font-medium text-foreground">{reservation.guests}</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                <CreditCard className="w-4 h-4 text-primary" />
                                <div>
                                  <p className="text-muted-foreground">Total</p>
                                  <p className="font-medium text-foreground">
                                    ${reservation.totalPrice.toLocaleString()}
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div className="mt-4 pt-4 border-t border-border flex items-center gap-2 text-xs text-muted-foreground">
                              <Clock className="w-3 h-3" />
                              Reservado el{" "}
                              {format(new Date(reservation.createdAt), "d 'de' MMMM, yyyy", { locale: es })}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            )}
          </TabsContent>

          {/* Datos Personales Tab */}
          <TabsContent value="datos" className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="font-serif text-2xl text-foreground">Datos Personales</h2>
              {!isEditing && (
                <Button variant="outline" size="sm" onClick={() => setIsEditing(true)} className="gap-2">
                  <Edit2 className="w-4 h-4" />
                  Editar
                </Button>
              )}
            </div>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>Información de la cuenta</CardTitle>
                <CardDescription>Gestiona tu información personal</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {isEditing ? (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre completo</Label>
                      <Input
                        id="name"
                        value={editName}
                        onChange={(e) => setEditName(e.target.value)}
                        className="bg-background border-border"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" value={user.email} disabled className="bg-muted border-border" />
                      <p className="text-xs text-muted-foreground">El email no puede ser modificado</p>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Teléfono</Label>
                      <Input
                        id="phone"
                        value={editPhone}
                        onChange={(e) => setEditPhone(e.target.value)}
                        placeholder="+54 11 1234-5678"
                        className="bg-background border-border"
                      />
                    </div>
                    <div className="flex gap-2">
                      <Button onClick={handleSaveProfile} className="gap-2 bg-primary hover:bg-primary/90">
                        <Save className="w-4 h-4" />
                        Guardar
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => {
                          setIsEditing(false)
                          setEditName(user.name)
                          setEditPhone(user.phone || "")
                        }}
                        className="gap-2"
                      >
                        <X className="w-4 h-4" />
                        Cancelar
                      </Button>
                    </div>
                  </>
                ) : (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-3 border-b border-border">
                      <span className="text-muted-foreground">Nombre</span>
                      <span className="font-medium text-foreground">{user.name}</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-border">
                      <span className="text-muted-foreground">Email</span>
                      <span className="font-medium text-foreground">{user.email}</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-border">
                      <span className="text-muted-foreground">Teléfono</span>
                      <span className="font-medium text-foreground">{user.phone || "No especificado"}</span>
                    </div>
                    <div className="flex items-center justify-between py-3">
                      <span className="text-muted-foreground">Miembro desde</span>
                      <span className="font-medium text-foreground">
                        {format(new Date(), "MMMM yyyy", { locale: es })}
                      </span>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>Estadísticas</CardTitle>
                <CardDescription>Tu actividad en Sendero Sur</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 rounded-lg bg-primary/10">
                    <p className="text-3xl font-serif text-primary">{user.reservations.length}</p>
                    <p className="text-sm text-muted-foreground">Reservas</p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-accent/10">
                    <p className="text-3xl font-serif text-accent">{user.comments.length}</p>
                    <p className="text-sm text-muted-foreground">Comentarios</p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-muted col-span-2 md:col-span-1">
                    <p className="text-3xl font-serif text-foreground">
                      {user.reservations.filter((r) => r.status === "confirmed").length}
                    </p>
                    <p className="text-sm text-muted-foreground">Viajes completados</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Comentarios Tab */}
          <TabsContent value="comentarios" className="space-y-4">
            <h2 className="font-serif text-2xl text-foreground">Mis Comentarios</h2>
            {user.comments.length === 0 ? (
              <Card className="bg-card border-border">
                <CardContent className="flex flex-col items-center justify-center py-12 text-center">
                  <MessageSquare className="w-16 h-16 text-muted-foreground mb-4" />
                  <h3 className="font-serif text-xl text-foreground mb-2">No has dejado comentarios aún</h3>
                  <p className="text-muted-foreground mb-4">Después de tu estadía, podrás compartir tu experiencia</p>
                  <Button onClick={() => router.push("/hospedajes")} variant="outline">
                    Explorar Hospedajes
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="grid gap-4">
                {user.comments
                  .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
                  .map((comment) => (
                    <Card key={comment.id} className="bg-card border-border">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="font-serif text-lg text-foreground">{comment.accommodationName}</h3>
                            <p className="text-sm text-muted-foreground">
                              {format(new Date(comment.createdAt), "d 'de' MMMM, yyyy", { locale: es })}
                            </p>
                          </div>
                          <div className="flex items-center gap-1">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < comment.rating ? "fill-accent text-accent" : "text-muted-foreground"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-foreground">{comment.text}</p>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
