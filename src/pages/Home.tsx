import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Users, Award, Target, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const highlights = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "500+ Alunos Formados",
      description: "Profissionais capacitados em diversas áreas técnicas"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Certificação Reconhecida",
      description: "Cursos validados pelo mercado angolano"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Foco no Mercado",
      description: "Conteúdo alinhado com as necessidades empresariais"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Crescimento Sustentável",
      description: "Expandindo formação técnica em Angola"
    }
  ];

  const services = [
    {
      title: "Formação Profissional",
      description: "Cursos técnicos especializados para o mercado de trabalho",
      link: "/cursos"
    },
    {
      title: "Ensino Médio Técnico",
      description: "Preparação completa para jovens estudantes",
      link: "/cursos"
    },
    {
      title: "Consultoria Empresarial",
      description: "Soluções técnicas personalizadas para empresas",
      link: "/servicos"
    },
    {
      title: "Desenvolvimento de Sistemas",
      description: "Criação de soluções digitais inovadoras",
      link: "/servicos"
    }
  ];

  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Company Overview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Líder em Formação Técnica em Angola
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              A Academia ARC é uma empresa angolana de referência na prestação de serviços educacionais e técnicos, 
              oferecendo soluções inovadoras para formação profissional, ensino médio técnico e consultoria empresarial.
            </p>
          </div>

          {/* Statistics */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {highlights.map((highlight, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-card transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm group hover:scale-105">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <div className="text-primary">{highlight.icon}</div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{highlight.title}</h3>
                <p className="text-sm text-muted-foreground">{highlight.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Nossos Serviços
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Oferecemos uma gama completa de serviços educacionais e técnicos para impulsionar o desenvolvimento profissional em Angola.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {services.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-card transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm group hover:scale-105">
                <h3 className="text-lg font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                <Link to={service.link}>
                  <Button variant="ghost" size="sm" className="p-0 h-auto font-medium">
                    Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/sobre">
              <Button size="lg" className="hover:scale-105 transition-transform">
                Conheça Nossa História <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Pronto para Investir no Futuro?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Junte-se a nós na missão de transformar a educação técnica em Angola. 
            Seja como aluno, parceiro ou investidor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contacto">
              <Button variant="secondary" size="lg" className="hover:scale-105 transition-transform">
                Entrar em Contacto
              </Button>
            </Link>
            <Link to="/cursos">
              <Button variant="outline" size="lg" className="bg-white/10 text-white border-white/20 hover:bg-white/20 hover:scale-105 transition-all">
                Ver Cursos Disponíveis
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;