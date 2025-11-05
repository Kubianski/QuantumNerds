import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Marek Kowalski",
    role: "Właściciel firmy",
    content:
      "Świetny serwis! Naprawili mojego laptopa w ciągu jednego dnia. Profesjonalna obsługa i uczciwe ceny. Polecam!",
    rating: 5,
  },
  {
    name: "Anna Nowak",
    role: "Grafik komputerowy",
    content:
      "Złożyli mi komputer do pracy z grafiką. Wszystko działa perfekcyjnie, a cena była bardzo konkurencyjna. Jestem bardzo zadowolona!",
    rating: 5,
  },
  {
    name: "Piotr Wiśniewski",
    role: "Gracz",
    content:
      "Najlepszy serwis w mieście! Pomogli mi dobrać podzespoły do PC gamingowego i profesjonalnie go złożyli. Komputer działa rewelacyjnie!",
    rating: 5,
  },
  {
    name: "Katarzyna Lewandowska",
    role: "Księgowa",
    content:
      "Szybko naprawili moją drukarkę. Bardzo miła obsługa i fachowe podejście. Na pewno wrócę, jeśli będę potrzebować pomocy.",
    rating: 5,
  },
  {
    name: "Tomasz Dąbrowski",
    role: "Student",
    content:
      "Kupiłem odnowiony komputer z ich oferty flippingu. Sprzęt w świetnym stanie, działa jak nowy, a cena była naprawdę dobra!",
    rating: 5,
  },
  {
    name: "Magdalena Zielińska",
    role: "Nauczycielka",
    content:
      "Bardzo pomocni i cierpliwi. Wytłumaczyli mi wszystko zrozumiałym językiem i szybko rozwiązali problem z moim komputerem.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">Opinie klientów</h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Zobacz, co mówią o nas nasi zadowoleni klienci. Twoje zadowolenie jest naszym priorytetem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 bg-card border-border hover:shadow-lg transition-shadow">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-card-foreground mb-4 leading-relaxed">"{testimonial.content}"</p>
              <div className="border-t border-border pt-4">
                <div className="font-semibold text-card-foreground">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
