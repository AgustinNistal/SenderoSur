"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

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
  addReservation: (reservation: Omit<Reservation, "id" | "createdAt">) => void
  addComment: (comment: Omit<UserComment, "id" | "createdAt">) => void
  updateProfile: (data: { name?: string; phone?: string }) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const savedUser = localStorage.getItem("sendero-sur-user")
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
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string): Promise<boolean> => {
    await new Promise((resolve) => setTimeout(resolve, 800))

    const savedUsers = JSON.parse(localStorage.getItem("sendero-sur-users") || "[]")
    const existingUser = savedUsers.find(
      (u: User & { password: string }) => u.email === email && u.password === password,
    )

    if (existingUser) {
      const { password: _, ...userWithoutPassword } = existingUser
      userWithoutPassword.reservations = userWithoutPassword.reservations || []
      userWithoutPassword.comments = userWithoutPassword.comments || []
      setUser(userWithoutPassword)
      localStorage.setItem("sendero-sur-user", JSON.stringify(userWithoutPassword))
      return true
    }
    return false
  }

  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    await new Promise((resolve) => setTimeout(resolve, 800))

    const savedUsers = JSON.parse(localStorage.getItem("sendero-sur-users") || "[]")
    const exists = savedUsers.some((u: User) => u.email === email)

    if (exists) return false

    const newUser: User & { password: string } = {
      id: crypto.randomUUID(),
      name,
      email,
      password,
      reservations: [],
      comments: [],
    }

    savedUsers.push(newUser)
    localStorage.setItem("sendero-sur-users", JSON.stringify(savedUsers))

    const { password: _, ...userWithoutPassword } = newUser
    setUser(userWithoutPassword)
    localStorage.setItem("sendero-sur-user", JSON.stringify(userWithoutPassword))
    return true
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("sendero-sur-user")
  }

  const addReservation = (reservation: Omit<Reservation, "id" | "createdAt">) => {
    if (!user) return

    const newReservation: Reservation = {
      ...reservation,
      id: crypto.randomUUID(),
      createdAt: new Date(),
    }

    const updatedUser = {
      ...user,
      reservations: [...user.reservations, newReservation],
    }

    setUser(updatedUser)
    localStorage.setItem("sendero-sur-user", JSON.stringify(updatedUser))

    const savedUsers = JSON.parse(localStorage.getItem("sendero-sur-users") || "[]")
    const userIndex = savedUsers.findIndex((u: User) => u.id === user.id)
    if (userIndex !== -1) {
      savedUsers[userIndex].reservations = updatedUser.reservations
      localStorage.setItem("sendero-sur-users", JSON.stringify(savedUsers))
    }
  }

  const addComment = (comment: Omit<UserComment, "id" | "createdAt">) => {
    if (!user) return

    const newComment: UserComment = {
      ...comment,
      id: crypto.randomUUID(),
      createdAt: new Date(),
    }

    const updatedUser = {
      ...user,
      comments: [...user.comments, newComment],
    }

    setUser(updatedUser)
    localStorage.setItem("sendero-sur-user", JSON.stringify(updatedUser))

    const savedUsers = JSON.parse(localStorage.getItem("sendero-sur-users") || "[]")
    const userIndex = savedUsers.findIndex((u: User) => u.id === user.id)
    if (userIndex !== -1) {
      savedUsers[userIndex].comments = updatedUser.comments
      localStorage.setItem("sendero-sur-users", JSON.stringify(savedUsers))
    }
  }

  const updateProfile = (data: { name?: string; phone?: string }) => {
    if (!user) return

    const updatedUser = {
      ...user,
      ...data,
    }

    setUser(updatedUser)
    localStorage.setItem("sendero-sur-user", JSON.stringify(updatedUser))

    const savedUsers = JSON.parse(localStorage.getItem("sendero-sur-users") || "[]")
    const userIndex = savedUsers.findIndex((u: User) => u.id === user.id)
    if (userIndex !== -1) {
      savedUsers[userIndex] = { ...savedUsers[userIndex], ...data }
      localStorage.setItem("sendero-sur-users", JSON.stringify(savedUsers))
    }
  }

  return (
    <AuthContext.Provider
      value={{ user, isLoading, login, register, logout, addReservation, addComment, updateProfile }}
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
