import { Card } from "@/components/ui/card"
import { Wrench, Printer, Cpu, RefreshCw, Zap, Shield } from "lucide-react"

const services = [
  {
    icon: Wrench,
    title: "Naprawa komputerów",
    description:
      "Profesjonalna diagnostyka i naprawa komputerów stacjonarnych i laptopów. Wymiana podzespołów, czyszczenie, optymalizacja systemu.",
    features: ["Diagnostyka", "Wymiana podzespołów", "Optymalizacja"],
  },
  {
    icon: Printer,
    title: "Naprawa drukarek",
    description:
      "Serwis wszystkich typów drukarek - laserowych, atramentowych i wielofunkcyjnych. Usuwanie zacięć, wymiana tonerów i części.",
    features: ["Wszystkie marki", "Szybka naprawa", "Gwarancja"],
  },
  {
    icon: Cpu,
    title: "Składanie PC",
    description:
      "Projektowanie i składanie komputerów na zamówienie. Dobierzemy podzespoły idealnie dopasowane do Twoich potrzeb i budżetu.",
    features: ["Indywidualna konfiguracja", "Gaming & Workstation", "Montaż i testy"],
  },
  {
    icon: RefreshCw,
    title: "Flipping komputerów",
    description:
      "Profesjonalny refurbishing używanych komputerów. Kupujemy, odnawiamy i sprzedajemy sprawdzone urządzenia w atrakcyjnych cenach.",
    features: ["Sprawdzona jakość", "Gwarancja", "Niskie ceny"],
  },
  {
    icon: Zap,
    title: "Upgrade sprzętu",
    description:
      "Modernizacja i rozbudowa istniejącego sprzętu. Zwiększenie pamięci RAM, wymiana dysku na SSD, upgrade karty graficznej.",
    features: ["Zwiększenie wydajności", "Doradztwo", "Instalacja"],
  },
  {
    icon: Shield,
    title: "Ochrona danych",
    description:
      "Backup i odzyskiwanie danych, instalacja oprogramowania antywirusowego, zabezpieczenie systemu przed zagrożeniami.",
    features: ["Backup danych", "Odzyskiwanie plików", "Antywirus"],
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">Nasze usługi</h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Oferujemy kompleksowe usługi serwisowe dla Twojego sprzętu komputerowego. Profesjonalnie, szybko i w
            konkurencyjnych cenach.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card border-border"
              >
                <div className="bg-primary/10 text-primary w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
