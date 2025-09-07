import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Award, BookOpen, Code, Server, Smartphone, Palette, Shield, TrendingUp, GraduationCap, Briefcase, Monitor, Cpu, Network, Film, ShoppingCart, Book, Settings } from "lucide-react";
import webDevImage from "@/assets/web-development.jpg";
import { Link } from "react-router-dom";
import { APP_CONFIG, generateWhatsAppLink } from "@/config/environment";

const Courses = () => {
  const courseCategories = [
    {
      title: "Formação Profissional",
      description: "Cursos técnicos especializados para profissionais",
      icon: <Briefcase className="h-8 w-8" />,
      courses: APP_CONFIG.courses.list.filter(course => course.category !== "explicacao")
    },
    {
      title: "Explicações Ensino Médio Técnico", 
      description: "Apoio pedagógico especializado para estudantes do ensino médio técnico",
      icon: <GraduationCap className="h-8 w-8" />,
      courses: APP_CONFIG.courses.list.filter(course => course.category === "explicacao")
    }
  ];

  const features = [
    "Material didático actualizado incluído",
    "Certificação reconhecida pelo mercado",
    "Suporte técnico durante todo o curso",
    "Aulas práticas com equipamentos profissionais",
    "Flexibilidade de horários",
    "Orientação para inserção no mercado de trabalho"
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Cursos & Formações
              </h1>
              <p className="text-xl lg:text-2xl mb-8 opacity-90">
                Invista no seu futuro profissional com os nossos cursos técnicos
                especializados, desde formação profissional até ensino médio
                técnico.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/inscricao">
                  <Button
                    variant="vilan"
                    size="lg"
                    className="hover:scale-105 transition-transform"
                  >
                    Inscrever-se Agora
                  </Button>
                </Link>
                {/* <Button variant="outline" size="lg" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                  Ver Calendário
                </Button> */}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-card">
                <img
                  src={webDevImage}
                  alt="Formação técnica - Academia ARC"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Categories */}
      {courseCategories.map((category, categoryIndex) => (
        <section
          key={categoryIndex}
          className={`py-20 ${categoryIndex % 2 === 0 ? "bg-muted/30" : ""}`}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="text-primary">{category.icon}</div>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {category.title}
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {category.description}
              </p>
            </div>

            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {category.courses.map((course, index) => (
                <Card
                  key={index}
                  className="overflow-hidden border-0 bg-card/50 backdrop-blur-sm hover:shadow-card transition-all duration-300 group hover:scale-105"
                >
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <div className="text-primary">
                          {course.icon === "Code" ? (
                            <Code className="h-8 w-8" />
                          ) : course.icon === "Monitor" ? (
                            <Monitor className="h-8 w-8" />
                          ) : course.icon === "Cpu" ? (
                            <Cpu className="h-8 w-8" />
                          ) : course.icon === "Server" ? (
                            <Server className="h-8 w-8" />
                          ) : course.icon === "Network" ? (
                            <Network className="h-8 w-8" />
                          ) : course.icon === "Film" ? (
                            <Film className="h-8 w-8" />
                          ) : course.icon === "TrendingUp" ? (
                            <TrendingUp className="h-8 w-8" />
                          ) : course.icon === "ShoppingCart" ? (
                            <ShoppingCart className="h-8 w-8" />
                          ) : course.icon === "Shield" ? (
                            <Shield className="h-8 w-8" />
                          ) : course.icon === "Book" ? (
                            <Book className="h-8 w-8" />
                          ) : course.icon === "Settings" ? (
                            <Settings className="h-8 w-8" />
                          ) : (
                            <Code className="h-6 w-6" />
                          )}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                          {course.title}
                        </h3>
                        <Badge variant="secondary">{course.level}</Badge>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {course.description}
                    </p>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>Duração: {course.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Users className="h-4 w-4" />
                        <span>Modalidade: {course.modalidade.join(", ")}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Award className="h-4 w-4" />
                        <span>Preço: Sob consulta</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold mb-2 text-foreground">
                        Tópicos principais:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {course.topics.map((topic, topicIndex) => (
                          <Badge
                            key={topicIndex}
                            variant="outline"
                            className="text-xs"
                          >
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Link to="/inscricao" className="flex-1">
                        <Button className="w-full hover:scale-105 transition-transform">
                          Inscrever-se
                        </Button>
                      </Link>
                      <Button
                        variant="outline"
                        size="icon"
                        className="hover:scale-105 transition-transform"
                      >
                        <BookOpen className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Features */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Por que escolher nossos cursos?
            </h2>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Oferecemos uma experiência de aprendizagem completa e
              personalizada.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 group"
              >
                <Award className="h-5 w-5 text-accent flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-sm opacity-90 group-hover:opacity-100 transition-opacity">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              variant="secondary"
              size="lg"
              className="hover:scale-105 transition-transform"
              onClick={() => window.open(generateWhatsAppLink("Olá! Gostaria de começar hoje mesmo com os cursos da Academia ARC. Podem me ajudar?"), "_blank")}
            >
              Comece Hoje Mesmo
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
};

export default Courses;
