"use client"

import { apiRequest } from "@/hooks/api-helper"
import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { format } from "date-fns"

export interface User {
  id: string
  name: string
  email: string
  phone?: string
  avatar?: string
  reservations: Reservation[]
  comments: UserComment[]
}

export interface Reservation {
  id: string
  accommodationId: string
  accommodationName: string
  cityName: string
  checkIn: Date
  checkOut: Date
  guests: number
  totalPrice: number
  status: "pending" | "confirmed" | "cancelled"
  createdAt: Date
}

export interface UserComment {
  id: string
  accommodationId: string
  accommodationName: string
  rating: number
  text: string
  createdAt: Date
}

interface AuthContextType {
  user: User | null
  isLoading: boolean
  login: (email: string, password: string) => Promise<boolean>
  register: (name: string, email: string, password: string) => Promise<boolean>
  logout: () => void
  addReservation: (reservation: Omit<Reservation, "id" | "createdAt">) => Promise<void>
  addComment: (comment: Omit<UserComment, "id" | "createdAt">) => Promise<void>
  updateProfile: (data: { name?: string; phone?: string }) => Promise<void>
  cancelReservation: (reservationId: string) => Promise<void>
  addPackReservations: (reservations: Omit<Reservation, "id" | "createdAt">[]) => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

function toISODateOnly(value: Date | string) {
  const d = typeof value === "string" ? new Date(value) : value
  return format(d, "yyyy-MM-dd")
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const bootstrap = async () => {
      const savedUser = localStorage.getItem("sendero-sur-user")
      const token = localStorage.getItem("sendero-sur-token")

      if (savedUser) {
        const parsed = JSON.parse(savedUser)
        parsed.reservations =
          parsed.reservations?.map((r: Reservation) => ({
            ...r,
            checkIn: new Date(r.checkIn),
            checkOut: new Date(r.checkOut),
            createdAt: new Date(r.createdAt),
          })) || []
        parsed.comments =
          parsed.comments?.map((c: UserComment) => ({
            ...c,
            createdAt: new Date(c.createdAt),
          })) || []
        setUser(parsed)

        // Refrescar desde base de datos (reservas/comentarios actualizados)
        if (token && parsed.id) {
          try {
            const fresh = await apiRequest(`/users/${parsed.id}`, {
              headers: { Authorization: `Bearer ${token}` },
            })
            fresh.reservations =
              fresh.reservations?.map((r: Reservation) => ({
                ...r,
                checkIn: new Date(r.checkIn),
                checkOut: new Date(r.checkOut),
                createdAt: new Date(r.createdAt),
              })) || []
            fresh.comments =
              fresh.comments?.map((c: UserComment) => ({
                ...c,
                createdAt: new Date(c.createdAt),
              })) || []
            setUser(fresh)
            localStorage.setItem("sendero-sur-user", JSON.stringify(fresh))
          } catch {
            // Si el token venció o el usuario no existe, mantenemos el estado local.
          }
        }
      }

      setIsLoading(false)
    }

    void bootstrap()
  }, [])

  // const login = async (email: string, password: string): Promise<boolean> => {
  //   await new Promise((resolve) => setTimeout(resolve, 800))

  //   const savedUsers = JSON.parse(localStorage.getItem("sendero-sur-users") || "[]")
  //   const existingUser = savedUsers.find(
  //     (u: User & { password: string }) => u.email === email && u.password === password,
  //   )

  //   if (existingUser) {
  //     const { password: _, ...userWithoutPassword } = existingUser
  //     userWithoutPassword.reservations = userWithoutPassword.reservations || []
  //     userWithoutPassword.comments = userWithoutPassword.comments || []
  //     setUser(userWithoutPassword)
  //     localStorage.setItem("sendero-sur-user", JSON.stringify(userWithoutPassword))
  //     return true
  //   }
  //   return false
  // }

  // const register = async (name: string, email: string, password: string): Promise<boolean> => {
  //   await new Promise((resolve) => setTimeout(resolve, 800))

  //   const savedUsers = JSON.parse(localStorage.getItem("sendero-sur-users") || "[]")
  //   const exists = savedUsers.some((u: User) => u.email === email)

  //   if (exists) return false

  //   const newUser: User & { password: string } = {
  //     id: crypto.randomUUID(),
  //     name,
  //     email,
  //     password,
  //     reservations: [],
  //     comments: [],
  //   }

  //   savedUsers.push(newUser)
  //   localStorage.setItem("sendero-sur-users", JSON.stringify(savedUsers))

  //   const { password: _, ...userWithoutPassword } = newUser
  //   setUser(userWithoutPassword)
  //   localStorage.setItem("sendero-sur-user", JSON.stringify(userWithoutPassword))
  //   return true
  // }
  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      const data = await apiRequest("/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
      })

      localStorage.setItem("sendero-sur-token", data.access_token)
      localStorage.setItem("sendero-sur-user", JSON.stringify(data.user))
      setUser(data.user)
      return true
    } catch {
      return false
    }
  }

  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    try {
      const data = await apiRequest("/auth/register", {
        method: "POST",
        body: JSON.stringify({ name, email, password }),
      })

      localStorage.setItem("sendero-sur-token", data.access_token)
      localStorage.setItem("sendero-sur-user", JSON.stringify(data.user))
      setUser(data.user)
      return true
    } catch {
      return false
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("sendero-sur-user")
    localStorage.removeItem("sendero-sur-token")
  }

  // const addReservation = (reservation: Omit<Reservation, "id" | "createdAt">) => {
  //   if (!user) return

  //   const newReservation: Reservation = {
  //     ...reservation,
  //     id: crypto.randomUUID(),
  //     createdAt: new Date(),
  //   }

  //   const updatedUser = {
  //     ...user,
  //     reservations: [...user.reservations, newReservation],
  //   }

  //   setUser(updatedUser)
  //   localStorage.setItem("sendero-sur-user", JSON.stringify(updatedUser))

  //   const savedUsers = JSON.parse(localStorage.getItem("sendero-sur-users") || "[]")
  //   const userIndex = savedUsers.findIndex((u: User) => u.id === user.id)
  //   if (userIndex !== -1) {
  //     savedUsers[userIndex].reservations = updatedUser.reservations
  //     localStorage.setItem("sendero-sur-users", JSON.stringify(savedUsers))
  //   }
  // }

  // const addComment = (comment: Omit<UserComment, "id" | "createdAt">) => {
  //   if (!user) return

  //   const newComment: UserComment = {
  //     ...comment,
  //     id: crypto.randomUUID(),
  //     createdAt: new Date(),
  //   }

  //   const updatedUser = {
  //     ...user,
  //     comments: [...user.comments, newComment],
  //   }

  //   setUser(updatedUser)
  //   localStorage.setItem("sendero-sur-user", JSON.stringify(updatedUser))

  //   const savedUsers = JSON.parse(localStorage.getItem("sendero-sur-users") || "[]")
  //   const userIndex = savedUsers.findIndex((u: User) => u.id === user.id)
  //   if (userIndex !== -1) {
  //     savedUsers[userIndex].comments = updatedUser.comments
  //     localStorage.setItem("sendero-sur-users", JSON.stringify(savedUsers))
  //   }
  // }
  const addReservation = async (reservation: Omit<Reservation, "id" | "createdAt">) => {
    if (!user) return
    const token = localStorage.getItem("sendero-sur-token")

    const payload = {
      ...reservation,
      checkIn: toISODateOnly(reservation.checkIn),
      checkOut: toISODateOnly(reservation.checkOut),
    }

    const newReservation = await apiRequest(`/reservations/${user.id}`, {
      method: "POST",
      headers: token ? { Authorization: `Bearer ${token}` } : undefined,
      body: JSON.stringify(payload),
    })

    const updated = { ...user, reservations: [...user.reservations, newReservation] }
    setUser(updated)
    localStorage.setItem("sendero-sur-user", JSON.stringify(updated))
  }

  const addPackReservations = async (reservations: Omit<Reservation, "id" | "createdAt">[]) => {
    if (!user) return
    const token = localStorage.getItem("sendero-sur-token")

    const newReservations: Reservation[] = []

    for (const res of reservations) {
      const payload = {
        ...res,
        checkIn: toISODateOnly(res.checkIn),
        checkOut: toISODateOnly(res.checkOut),
      }

      const newRes = await apiRequest(`/reservations/${user.id}`, {
        method: "POST",
        headers: token ? { Authorization: `Bearer ${token}` } : undefined,
        body: JSON.stringify(payload),
      })
      newReservations.push(newRes)
    }

    const updated = { ...user, reservations: [...user.reservations, ...newReservations] }
    setUser(updated)
    localStorage.setItem("sendero-sur-user", JSON.stringify(updated))
  }

  const addComment = async (comment: Omit<UserComment, "id" | "createdAt">) => {
    if (!user) return
    const token = localStorage.getItem("sendero-sur-token")

    const newComment = await apiRequest(`/comments/${user.id}`, {
      method: "POST",
      headers: token ? { Authorization: `Bearer ${token}` } : undefined,
      body: JSON.stringify(comment),
    })

    const updated = { ...user, comments: [...user.comments, newComment] }
    setUser(updated)
    localStorage.setItem("sendero-sur-user", JSON.stringify(updated))
  }

  const updateProfile = async (data: { name?: string; phone?: string }) => {
    if (!user) return
    const token = localStorage.getItem("sendero-sur-token")

    const updatedUser = await apiRequest(`/users/${user.id}`, {
      method: "PATCH",
      headers: token ? { Authorization: `Bearer ${token}` } : undefined,
      body: JSON.stringify(data),
    })

    setUser(updatedUser)
    localStorage.setItem("sendero-sur-user", JSON.stringify(updatedUser))
  }

  const cancelReservation = async (reservationId: string) => {
    if (!user) return
    const token = localStorage.getItem("sendero-sur-token")

    await apiRequest(`/reservations/${reservationId}/cancel`, {
      method: "PATCH",
      headers: token ? { Authorization: `Bearer ${token}` } : undefined,
    })

    const updated = {
      ...user,
      reservations: user.reservations.map((r) =>
        r.id === reservationId ? { ...r, status: "cancelled" as const } : r
      ),
    }
    setUser(updated)
    localStorage.setItem("sendero-sur-user", JSON.stringify(updated))
  }

  return (
    <AuthContext.Provider
      value={{ user, isLoading, login, register, logout, addReservation, addComment, updateProfile, cancelReservation, addPackReservations }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
