import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const Testimonials = () => {
  const testimonials = [
    {
      name: "João Silva",
      role: "Estudante de Electrónica",
      content:
        "A Academia ARC transformou minha compreensão das disciplinas técnicas. As explicações são claras e diretas.",
      rating: 5,
      image: "/placeholder.svg",
    },
    {
      name: "Maria Santos",
      role: "Estudante de Informática",
      content:
        "Excelente apoio no ensino médio. Os professores têm uma metodologia que realmente funciona.",
      rating: 5,
      image: "/placeholder.svg",
    },
    {
      name: "António Costa",
      role: "Estudante de Multimédia",
      content:
        "Consegui melhorar significativamente nas disciplinas técnicas graças ao suporte da Academia ARC.",
      rating: 5,
      image: "/placeholder.svg",
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            O que dizem os nossos alunos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Veja os depoimentos de quem já experimentou a qualidade do ensino da
            Academia ARC
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="relative overflow-hidden border-border/50 hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                <p className="text-foreground mb-6 italic">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-primary text-primary"
                    />
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-semibold">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
