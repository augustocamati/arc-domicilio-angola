import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Users, Award, Target, TrendingUp, Code, GraduationCap, Cpu, Network, Building, Database } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const highlights = [
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
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "3 Anos no Mercado",
      description: "Experiência sólida em formação técnica especializada"
    }
  ];

  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Desenvolvimento Web FullStack",
      description: "Criação de websites e aplicações web modernas com tecnologias atuais",
      link: "/cursos"
    },
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Ensino Médio Técnico",
      description: "Explicações especializadas em Electrónica, Telecomunicações, Informática e Multimédia",
      link: "/cursos"
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "Programação Arduino & IoT",
      description: "Automação e desenvolvimento de sistemas embarcados inteligentes",
      link: "/cursos"
    },
    {
      icon: <Network className="h-8 w-8" />,
      title: "Redes de Computadores",
      description: "Instalação, configuração e manutenção de infraestruturas de rede",
      link: "/cursos"
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: "Consultoria Empresarial",
      description: "Soluções técnicas e estratégicas personalizadas para empresas",
      link: "/servicos"
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Desenvolvimento de Sistemas",
      description: "ERPs, CRMs e aplicações empresariais sob medida",
      link: "/servicos"
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-96 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-primary/3 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10">
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {services.map((service, index) => (
              <Link key={index} to={service.link} className="group">
                <Card className="p-6 hover:shadow-card transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm group-hover:scale-105 cursor-pointer h-full">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <div className="text-primary group-hover:scale-110 transition-transform">{service.icon}</div>
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                  <div className="flex items-center text-primary font-medium text-sm group-hover:translate-x-1 transition-transform">
                    Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </Card>
              </Link>
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

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Por que escolher a Academia ARC?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Oferecemos formação técnica de qualidade com abordagem prática e personalizada.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover:shadow-card transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm group hover:scale-105">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Formação Personalizada</h3>
              <p className="text-sm text-muted-foreground">Aulas adaptadas ao ritmo e necessidades de cada aluno</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-card transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm group hover:scale-105">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Certificação Reconhecida</h3>
              <p className="text-sm text-muted-foreground">Cursos validados pelo mercado de trabalho angolano</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-card transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm group hover:scale-105">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Material Profissional</h3>
              <p className="text-sm text-muted-foreground">Equipamentos e recursos de qualidade incluídos</p>
            </Card>
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
    </div>
  );
};

export default Home;