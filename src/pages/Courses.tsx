import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Cpu, 
  Radio, 
  Monitor, 
  Camera,
  Clock,
  Users,
  BookOpen,
  Target
} from "lucide-react";

const Courses = () => {
  const courses = [
    {
      icon: <Cpu className="h-8 w-8 text-primary" />,
      title: "Electrónica e Telecomunicações",
      description: "Explicações especializadas para disciplinas do ensino médio técnico em electrónica e telecomunicações.",
      subjects: [
        "Circuitos Electrónicos",
        "Sistemas de Telecomunicações", 
        "Análise de Circuitos",
        "Electrónica Digital",
        "Processamento de Sinais"
      ],
      duration: "Flexible",
      level: "Ensino Médio",
      category: "Explicações"
    },
    {
      icon: <Monitor className="h-8 w-8 text-primary" />,
      title: "Informática",
      description: "Suporte completo nas disciplinas de informática do ensino médio técnico.",
      subjects: [
        "Programação Básica",
        "Sistemas Operativos",
        "Redes de Computadores",
        "Base de Dados",
        "Arquitectura de Computadores"
      ],
      duration: "Flexible",
      level: "Ensino Médio", 
      category: "Explicações"
    },
    {
      icon: <Camera className="h-8 w-8 text-primary" />,
      title: "Sistemas Multimédia",
      description: "Explicações focadas nas disciplinas técnicas de sistemas multimédia.",
      subjects: [
        "Design Gráfico",
        "Edição de Vídeo",
        "Animação Digital",
        "Produção Audiovisual",
        "Tecnologias Web"
      ],
      duration: "Flexible",
      level: "Ensino Médio",
      category: "Explicações"
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-foreground mb-6">
              Explicações Especializadas
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Suporte personalizado nas disciplinas técnicas do ensino médio
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="px-4 py-2">
                <BookOpen className="h-4 w-4 mr-2" />
                Ensino Médio Técnico
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                <Target className="h-4 w-4 mr-2" />
                Explicações Personalizadas
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                <Users className="h-4 w-4 mr-2" />
                Apoio Individual
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Áreas de Especialização
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Oferecemos explicações especializadas nas principais disciplinas técnicas
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <Card key={index} className="border-border/50 hover:shadow-lg transition-all duration-300 hover:border-primary/20">
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    {course.icon}
                  </div>
                  <CardTitle className="text-xl text-foreground mb-2">
                    {course.title}
                  </CardTitle>
                  <Badge variant="outline" className="w-fit mx-auto">
                    {course.category}
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground text-center">
                    {course.description}
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">
                        Disciplinas Abordadas:
                      </h4>
                      <ul className="space-y-1">
                        {course.subjects.map((subject, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                            <div className="w-1 h-1 bg-primary rounded-full"></div>
                            {subject}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex justify-between items-center pt-4 border-t border-border/50">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{course.duration}</span>
                      </div>
                      <Badge variant="secondary">
                        {course.level}
                      </Badge>
                    </div>
                  </div>

                  <Button 
                    className="w-full" 
                    onClick={scrollToContact}
                  >
                    Solicitar Explicações
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Por que escolher nossas explicações?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <Target className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Foco Personalizado
              </h3>
              <p className="text-muted-foreground">
                Explicações adaptadas às necessidades específicas de cada aluno
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <BookOpen className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Metodologia Eficaz
              </h3>
              <p className="text-muted-foreground">
                Métodos de ensino comprovados e adaptados ao currículo angolano
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <Users className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Professores Qualificados
              </h3>
              <p className="text-muted-foreground">
                Equipa de professores especializados nas áreas técnicas
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <Clock className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Horários Flexíveis
              </h3>
              <p className="text-muted-foreground">
                Adaptamos os horários às necessidades dos alunos
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Courses;