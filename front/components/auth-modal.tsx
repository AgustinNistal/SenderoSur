"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useAuth } from "@/contexts/auth-context"
import { Loader2 } from "lucide-react"

interface AuthModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function AuthModal({ open, onOpenChange }: AuthModalProps) {
  const [mode, setMode] = useState<"login" | "register">("login")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const { login, register } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      let success: boolean
      if (mode === "login") {
        success = await login(email, password)
        if (!success) setError("Email o contraseña incorrectos")
      } else {
        if (!name.trim()) {
          setError("El nombre es requerido")
          setLoading(false)
          return
        }
        success = await register(name, email, password)
        if (!success) setError("El email ya está registrado")
      }

      if (success) {
        onOpenChange(false)
        resetForm()
      }
    } catch {
      setError("Ocurrió un error. Intentá de nuevo.")
    } finally {
      setLoading(false)
    }
  }

  const resetForm = () => {
    setName("")
    setEmail("")
    setPassword("")
    setError("")
  }

  const toggleMode = () => {
    setMode(mode === "login" ? "register" : "login")
    resetForm()
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl text-center">
            {mode === "login" ? "Iniciar Sesión" : "Crear Cuenta"}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          {mode === "register" && (
            <div className="space-y-2">
              <Label htmlFor="name">Nombre</Label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Tu nombre"
                required
              />
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Contraseña</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              minLength={6}
              required
            />
          </div>

          {error && <p className="text-destructive text-sm text-center">{error}</p>}

          <Button
            type="submit"
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
            disabled={loading}
          >
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {mode === "login" ? "Ingresar" : "Registrarse"}
          </Button>

          <p className="text-center text-sm text-muted-foreground">
            {mode === "login" ? "¿No tenés cuenta?" : "¿Ya tenés cuenta?"}{" "}
            <button type="button" onClick={toggleMode} className="text-primary hover:underline font-medium">
              {mode === "login" ? "Registrate" : "Ingresá"}
            </button>
          </p>
        </form>
      </DialogContent>
    </Dialog>
  )
}
