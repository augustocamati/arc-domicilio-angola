import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Award, Clock, BookOpen, TrendingUp } from "lucide-react";

const About = () => {
  const timeline = [
    {
      year: "2022",
      title: "Fundação",
      description: "Começámos com explicações especializadas para o ensino médio técnico em Electrónica, Telecomunicações, Informática e Sistemas Multimédia."
    },
    {
      year: "2023", 
      title: "Expansão para Cursos",
      description: "Crescemos e partimos para oferecer cursos técnicos especializados, ampliando nossa metodologia de ensino."
    },
    {
      year: "2024",
      title: "Consolidação",
      description: "Consolidámos nossa posição como referência em educação técnica, aperfeiçoando nossos métodos de ensino."
    },
    {
      year: "2025",
      title: "Serviços e Consultorias",
      description: "Evoluímos para oferecer serviços técnicos e consultorias especializadas, aplicando nosso conhecimento em projetos reais."
    }
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Missão",
      description: "Proporcionar educação técnica de qualidade e serviços especializados, preparando profissionais capacitados para o mercado angolano."
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Visão",
      description: "Ser a referência em educação técnica e serviços de consultoria em Angola, contribuindo para o desenvolvimento tecnológico do país."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Valores",
      description: "Excelência, inovação, compromisso com a qualidade e desenvolvimento contínuo dos nossos alunos e clientes."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-foreground mb-6">
              Sobre a Academia ARC
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              3 anos de dedicação ao ensino técnico e desenvolvimento profissional em Angola
            </p>
          </div>
        </div>
      </section>

      {/* Nossa Jornada */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Nossa Jornada em 3 Anos
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Uma evolução constante, sempre focada na excelência educacional
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {timeline.map((item, index) => (
              <Card key={index} className="relative overflow-hidden border-border/50 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {item.year}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Nossos Princípios
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Os valores que nos guiam em nossa missão educacional
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-border/50 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Estatísticas */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">3</div>
              <p className="text-muted-foreground">Anos de Experiência</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">4</div>
              <p className="text-muted-foreground">Áreas Técnicas</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">100%</div>
              <p className="text-muted-foreground">Dedicação</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">∞</div>
              <p className="text-muted-foreground">Possibilidades</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;