"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Jak długo trwa naprawa komputera?",
    answer:
      "Czas naprawy zależy od rodzaju usterki. Proste naprawy (np. czyszczenie, instalacja systemu) wykonujemy w ciągu 24 godzin. Bardziej skomplikowane naprawy mogą zająć 2-5 dni roboczych. Po diagnostyce zawsze informujemy o przewidywanym czasie naprawy.",
  },
  {
    question: "Czy udzielacie gwarancji na naprawy?",
    answer:
      "Tak! Na wszystkie wykonane naprawy udzielamy 6-miesięcznej gwarancji. Na nowe podzespoły stosujemy gwarancję producenta (zazwyczaj 24-36 miesięcy). Na składane przez nas komputery udzielamy 12-miesięcznej gwarancji.",
  },
  {
    question: "Ile kosztuje diagnostyka?",
    answer:
      "Diagnostyka i wycena naprawy są całkowicie bezpłatne! Płacisz tylko wtedy, gdy zdecydujesz się na naprawę. Nie ma żadnych ukrytych kosztów.",
  },
  {
    question: "Czy naprawiacie wszystkie marki komputerów i drukarek?",
    answer:
      "Tak, naprawiamy komputery i drukarki wszystkich marek - Dell, HP, Lenovo, Asus, Acer, Canon, Epson, Brother i wiele innych. Mamy doświadczenie zarówno ze sprzętem konsumenckim, jak i biznesowym.",
  },
  {
    question: "Czy mogę dostarczyć komputer do naprawy?",
    answer:
      "Oczywiście! Możesz osobiście dostarczyć sprzęt do naszego serwisu. Pracujemy od poniedziałku do piątku w godzinach 9:00-18:00, w soboty 10:00-14:00. Oferujemy również usługę odbioru i dostawy sprzętu na terenie miasta.",
  },
  {
    question: "Jak wygląda proces składania komputera na zamówienie?",
    answer:
      "Proces składania PC składa się z kilku etapów: 1) Bezpłatna konsultacja i dobór podzespołów do Twoich potrzeb i budżetu, 2) Zamówienie części, 3) Profesjonalny montaż i testy, 4) Instalacja systemu i oprogramowania, 5) Odbiór gotowego komputera. Cały proces trwa zazwyczaj 5-7 dni roboczych.",
  },
  {
    question: "Co to jest flipping komputerów?",
    answer:
      "Flipping to proces, w którym kupujemy używane komputery, profesjonalnie je odnawiamy (czyszczenie, wymiana podzespołów, instalacja systemu), testujemy i sprzedajemy w atrakcyjnych cenach. Wszystkie komputery z naszej oferty flippingu są sprawdzone i objęte gwarancją.",
  },
  {
    question: "Czy oferujecie wsparcie po naprawie?",
    answer:
      "Tak! Po każdej naprawie lub złożeniu komputera oferujemy bezpłatne wsparcie techniczne przez telefon lub email. Jeśli pojawią się jakiekolwiek problemy, chętnie pomożemy je rozwiązać.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Najczęściej zadawane pytania
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Masz pytania? Sprawdź naszą sekcję FAQ lub skontaktuj się z nami bezpośrednio.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="overflow-hidden bg-card border-border">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-muted/50 transition-colors"
              >
                <span className="font-semibold text-card-foreground text-lg">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 text-muted-foreground flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
