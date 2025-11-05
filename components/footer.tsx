"use client"

import { Wrench, Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-primary text-white p-2 rounded-lg">
                <Wrench className="h-5 w-5" />
              </div>
              <span className="text-lg font-bold text-card-foreground">
                TechService<span className="text-primary">Pro</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Profesjonalny serwis komputerowy. Naprawa, składanie i flipping komputerów oraz drukarek.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-card-foreground mb-4">Usługi</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Naprawa komputerów
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Naprawa drukarek
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Składanie PC
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Flipping komputerów
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-card-foreground mb-4">Firma</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  O nas
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("pricing")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Cennik
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Opinie
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Kontakt
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-card-foreground mb-4">Kontakt</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>ul. Komputerowa 15</li>
              <li>00-001 Warszawa</li>
              <li>+48 123 456 789</li>
              <li>kontakt@techservicepro.pl</li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a
                href="#"
                className="bg-muted hover:bg-primary hover:text-white text-muted-foreground p-2 rounded-lg transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-muted hover:bg-primary hover:text-white text-muted-foreground p-2 rounded-lg transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-muted hover:bg-primary hover:text-white text-muted-foreground p-2 rounded-lg transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 TechServicePro. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  )
}
