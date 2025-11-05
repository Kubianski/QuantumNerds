"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const pricingData = [
  {
    category: "Naprawa komputerów",
    items: [
      { service: "Diagnostyka i wycena", price: "Gratis" },
      { service: "Czyszczenie komputera", price: "od 80 zł" },
      { service: "Wymiana pasty termoprzewodzącej", price: "od 60 zł" },
      { service: "Instalacja systemu Windows", price: "od 500 zł" },
      { service: "Naprawa laptopa", price: "od 150 zł" },
      { service: "Wymiana dysku HDD na SSD", price: "od 120 zł" },
    ],
  },
  {
    category: "Naprawa drukarek",
    items: [
      { service: "Diagnostyka drukarki", price: "Gratis" },
      { service: "Czyszczenie drukarki", price: "od 70 zł" },
      { service: "Usunięcie zacięcia papieru", price: "od 50 zł" },
      { service: "Naprawa drukarki laserowej", price: "od 120 zł" },
      { service: "Naprawa drukarki atramentowej", price: "od 100 zł" },
      { service: "Wymiana głowicy drukującej", price: "od 150 zł" },
    ],
  },
  {
    category: "Składanie PC",
    items: [
      { service: "Konsultacja i dobór podzespołów", price: "Gratis" },
      { service: "Składanie PC (bez podzespołów)", price: "od 200 zł" },
      { service: "PC do biura", price: "od 1500 zł" },
      { service: "PC do gier (entry)", price: "od 3000 zł" },
      { service: "PC do gier (mid)", price: "od 5000 zł" },
      { service: "PC do gier (high-end)", price: "od 8000 zł" },
    ],
  },
  {
    category: "Inne usługi",
    items: [
      { service: "Upgrade RAM", price: "od 80 zł" },
      { service: "Upgrade karty graficznej", price: "od 100 zł" },
      { service: "Backup danych", price: "od 100 zł" },
      { service: "Odzyskiwanie danych", price: "od 300 zł" },
      { service: "Instalacja oprogramowania", price: "od 50 zł" },
      { service: "Konfiguracja sieci domowej", price: "od 150 zł" },
    ],
  },
]

export function Pricing() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="pricing" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">Cennik usług</h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Transparentne ceny bez ukrytych kosztów. Dokładną wycenę otrzymasz po bezpłatnej diagnostyce.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {pricingData.map((category, index) => (
            <Card key={index} className="p-6 md:p-8 bg-card border-border">
              <h3 className="text-2xl font-bold text-card-foreground mb-6">{category.category}</h3>
              <div className="space-y-4">
                {category.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between py-3 border-b border-border last:border-0"
                  >
                    <div className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-card-foreground">{item.service}</span>
                    </div>
                    <span className="font-semibold text-primary ml-4 whitespace-nowrap">{item.price}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Potrzebujesz indywidualnej wyceny?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
            Skontaktuj się z nami, aby otrzymać bezpłatną wycenę dostosowaną do Twoich potrzeb. Odpowiemy w ciągu 24
            godzin.
          </p>
          <Button size="lg" onClick={scrollToContact} className="bg-primary hover:bg-primary-dark text-white">
            Zapytaj o wycenę
          </Button>
        </Card>
      </div>
    </section>
  )
}
