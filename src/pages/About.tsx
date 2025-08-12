import { Card } from "@/components/ui/card";
import { CheckCircle, Award, Users, Target, BookOpen, Briefcase } from "lucide-react";
import homeTeachingImage from "@/assets/home-teaching.jpg";

const About = () => {
  const mission = [
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Educação de Qualidade",
      description: "Promover formação técnica de excelência adaptada ao mercado angolano"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Inclusão e Acessibilidade",
      description: "Tornar a educação técnica acessível a todos os níveis da sociedade"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Inovação Constante",
      description: "Acompanhar as tendências tecnológicas globais e adaptar ao contexto local"
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "Empregabilidade",
      description: "Preparar profissionais qualificados para o mercado de trabalho"
    }
  ];

  const values = [
    "Excelência em todos os serviços prestados",
    "Inovação na metodologia de ensino",
    "Compromisso com o desenvolvimento de Angola",
    "Ética e transparência nas relações",
    "Sustentabilidade e responsabilidade social",
    "Adaptabilidade às necessidades do mercado"
  ];

  const timeline = [
    {
      year: "2022",
      title: "Fundação da Academia ARC",
      description: "Início das atividades com explicações para o ensino médio técnico em Electrónica e Telecomunicações, Informática e Sistemas de Multimédia"
    },
    {
      year: "2023",
      title: "Expansão para Cursos",
      description: "Crescimento natural partindo para cursos técnicos especializados e formação profissional"
    },
    {
      year: "2024",
      title: "Desenvolvimento Consolidado",
      description: "Amadurecimento da oferta formativa e estabelecimento de metodologias próprias de ensino"
    },
    {
      year: "2025",
      title: "Serviços e Consultorias",
      description: "Evolução para prestação de serviços técnicos especializados e consultorias empresariais"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Sobre a Academia ARC
          </h1>
          <p className="text-xl lg:text-2xl max-w-4xl mx-auto opacity-90">
            Uma empresa angolana comprometida com a excelência na formação técnica 
            e no desenvolvimento de soluções inovadoras para o mercado nacional.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-card">
                <img 
                  src={homeTeachingImage} 
                  alt="Formação técnica - Academia ARC"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-6 py-3 rounded-full font-semibold shadow-button">
                Formação Inovadora
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4 text-foreground">
                  Nossa Missão
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Democratizar o acesso à formação técnica de qualidade em Angola, 
                  oferecendo soluções educacionais inovadoras que preparam profissionais 
                  competentes para os desafios do mercado contemporâneo.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  Nossa Visão
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Ser a principal referência em formação técnica e serviços educacionais 
                  em Angola, contribuindo para o desenvolvimento sustentável do país 
                  através da capacitação de recursos humanos qualificados.
                </p>
              </div>
            </div>
          </div>

          {/* Mission Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {mission.map((item, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-card transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm group hover:scale-105">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <div className="text-primary">{item.icon}</div>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Nossos Valores
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Os princípios que orientam todas as nossas ações e decisões empresariais.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 group">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Nossa Jornada
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Marcos importantes na evolução da Academia ARC.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent"></div>
              
              {timeline.map((event, index) => (
                <div key={index} className="relative flex items-start mb-12 group">
                  {/* Timeline dot */}
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center z-10 group-hover:bg-accent transition-colors">
                    <div className="w-3 h-3 bg-primary-foreground rounded-full"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="ml-8 flex-1">
                    <Card className="p-6 border-0 bg-card/50 backdrop-blur-sm hover:shadow-card transition-all duration-300 group-hover:scale-105">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="text-2xl font-bold text-primary">{event.year}</span>
                        <h3 className="text-xl font-semibold text-foreground">{event.title}</h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{event.description}</p>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
