"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { submitContactForm } from "@/app/actions/contact"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setStatus(null)

    try {
      const formDataObj = new FormData()
      formDataObj.append("name", formData.name)
      formDataObj.append("email", formData.email)
      formDataObj.append("phone", formData.phone)
      formDataObj.append("message", formData.message)

      const result = await submitContactForm(formDataObj)

      if (result.success) {
        setStatus({ type: "success", message: result.message })
        setFormData({ name: "", email: "", phone: "", message: "" })
      } else {
        setStatus({ type: "error", message: result.message })
      }
    } catch (error) {
      setStatus({ type: "error", message: "Wystąpił błąd podczas wysyłania wiadomości." })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">Skontaktuj się z nami</h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Masz pytania lub potrzebujesz pomocy? Napisz do nas lub zadzwoń. Odpowiemy jak najszybciej!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="p-8 bg-card border-border">
            <h3 className="text-2xl font-bold text-card-foreground mb-6">Wyślij wiadomość</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-card-foreground mb-2">
                  Imię i nazwisko
                </label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Jan Kowalski"
                  className="bg-background"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="jan@example.com"
                  className="bg-background"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-card-foreground mb-2">
                  Telefon
                </label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+48 123 456 789"
                  className="bg-background"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-2">
                  Wiadomość
                </label>
                <Textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Opisz swój problem lub zapytanie..."
                  rows={5}
                  className="bg-background"
                />
              </div>
              {status && (
                <div
                  className={`p-4 rounded-lg ${
                    status.type === "success"
                      ? "bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20"
                      : "bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20"
                  }`}
                >
                  {status.message}
                </div>
              )}
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary-dark text-white"
                size="lg"
                disabled={isLoading}
              >
                {isLoading ? "Wysyłanie..." : "Wyślij wiadomość"}
              </Button>
            </form>
          </Card>

          <div className="space-y-6">
            <Card className="p-6 bg-card border-border">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 text-primary p-3 rounded-lg">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground mb-1">Telefon</h4>
                  <p className="text-muted-foreground">+48 22 274 23 17</p>
                  <p className="text-sm text-muted-foreground mt-1">Pon-Pt: 9:00-18:00, Sob: 10:00-21:00</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 text-primary p-3 rounded-lg">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground mb-1">Email</h4>
                  <p className="text-muted-foreground">kontakt@quantumnerds.pl</p>
                  <p className="text-sm text-muted-foreground mt-1">Odpowiadamy w ciągu 24h</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 text-primary p-3 rounded-lg">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground mb-1">Adres</h4>
                  <p className="text-muted-foreground">ul. Kopijników 67B</p>
                  <p className="text-muted-foreground">03-274 Warszawa</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 text-primary p-3 rounded-lg">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground mb-1">Godziny otwarcia</h4>
                  <div className="space-y-1 text-muted-foreground">
                    <p>Poniedziałek - Piątek: 9:00 - 18:00</p>
                    <p>Sobota: 10:00 - 21:00</p>
                    <p>Niedziela: Nieczynne</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
