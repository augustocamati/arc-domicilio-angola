import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Smartphone, 
  Globe, 
  Cog,
  Users,
  Lightbulb,
  Target,
  CheckCircle
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Desenvolvimento Web",
      description: "Criação de websites modernos e responsivos para empresas e profissionais.",
      features: [
        "Design responsivo",
        "Otimização SEO",
        "Integração com bases de dados",
        "Painel administrativo"
      ],
      category: "Desenvolvimento"
    },
    {
      icon: <Smartphone className="h-8 w-8 text-primary" />,
      title: "Aplicações Mobile",
      description: "Desenvolvimento de aplicações móveis para Android e iOS.",
      features: [
        "Interface intuitiva",
        "Performance otimizada",
        "Integração com APIs",
        "Publicação nas lojas"
      ],
      category: "Desenvolvimento"
    },
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Sistemas Personalizados",
      description: "Desenvolvimento de software à medida para necessidades específicas.",
      features: [
        "Análise de requisitos",
        "Desenvolvimento personalizado",
        "Testes e validação",
        "Suporte técnico"
      ],
      category: "Desenvolvimento"
    },
    {
      icon: <Cog className="h-8 w-8 text-primary" />,
      title: "Consultoria Técnica",
      description: "Assessoria especializada em projetos tecnológicos e infraestrutura.",
      features: [
        "Análise técnica",
        "Planeamento de projetos",
        "Otimização de processos",
        "Formação de equipas"
      ],
      category: "Consultoria"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Formação Corporativa",
      description: "Programas de formação técnica para empresas e organizações.",
      features: [
        "Formação personalizada",
        "Certificação profissional",
        "Acompanhamento contínuo",
        "Material didático"
      ],
      category: "Formação"
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: "Inovação e Automação",
      description: "Implementação de soluções inovadoras para automação de processos.",
      features: [
        "Análise de processos",
        "Soluções de automação",
        "Integração de sistemas",
        "Monitorização contínua"
      ],
      category: "Inovação"
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
              Nossos Serviços
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Soluções tecnológicas e consultoria especializada para impulsionar o seu negócio
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="px-4 py-2">
                <Code className="h-4 w-4 mr-2" />
                Desenvolvimento
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                <Target className="h-4 w-4 mr-2" />
                Consultoria
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                <Users className="h-4 w-4 mr-2" />
                Formação
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Serviços Especializados
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Oferecemos uma gama completa de serviços tecnológicos
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-border/50 hover:shadow-lg transition-all duration-300 hover:border-primary/20">
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl text-foreground mb-2">
                    {service.title}
                  </CardTitle>
                  <Badge variant="outline" className="w-fit mx-auto">
                    {service.category}
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground text-center">
                    {service.description}
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">
                        Características:
                      </h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-success" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Button 
                    className="w-full" 
                    onClick={scrollToContact}
                  >
                    Solicitar Orçamento
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Por que escolher nossos serviços?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <Target className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Soluções Personalizadas
              </h3>
              <p className="text-muted-foreground">
                Desenvolvemos soluções adaptadas às necessidades específicas de cada cliente
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <CheckCircle className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Qualidade Garantida
              </h3>
              <p className="text-muted-foreground">
                Todos os nossos projetos seguem rigorosos padrões de qualidade
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <Users className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Equipa Especializada
              </h3>
              <p className="text-muted-foreground">
                Profissionais qualificados com experiência comprovada
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <Cog className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Suporte Contínuo
              </h3>
              <p className="text-muted-foreground">
                Acompanhamento e suporte técnico em todas as fases do projeto
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;