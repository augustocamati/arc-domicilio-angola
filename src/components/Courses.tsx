import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Monitor, 
  Cpu, 
  Network, 
  Server, 
  Globe, 
  Search, 
  Shield,
  Briefcase,
  Clock,
  Users,
  ChevronRight
} from "lucide-react";
import webDevImage from "@/assets/web-development.jpg";

const Courses = () => {
  const courses = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Desenvolvimento Web FullStack",
      description: "Aprenda a criar aplicações web completas, desde o front-end até ao back-end, utilizando as tecnologias mais actuais do mercado.",
      duration: "6-8 semanas",
      level: "Iniciante a Avançado",
      topics: ["HTML, CSS, JavaScript", "React/Vue.js", "Node.js", "Bases de dados", "APIs REST"],
      popular: true
    },
    {
      icon: <Monitor className="h-8 w-8" />,
      title: "Front-End & Web Designer",
      description: "Domine as técnicas de design e desenvolvimento de interfaces modernas, responsivas e centradas no utilizador.",
      duration: "4-6 semanas",
      level: "Iniciante",
      topics: ["Design UI/UX", "CSS Avançado", "JavaScript", "Frameworks CSS", "Prototipagem"]
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "Programação de Microcontroladores",
      description: "Desenvolva projectos de automação e IoT utilizando Arduino, ESP32 e outras plataformas de desenvolvimento.",
      duration: "5-7 semanas",
      level: "Intermediário",
      topics: ["Arduino Programming", "ESP32/ESP8266", "Sensores e Actuadores", "IoT", "Automação"]
    },
    {
      icon: <Network className="h-8 w-8" />,
      title: "Redes de Computadores",
      description: "Compreenda e configure redes desde o básico até configurações empresariais avançadas.",
      duration: "6-8 semanas",
      level: "Básico a Avançado",
      topics: ["Fundamentos TCP/IP", "Configuração de routers", "Segurança de redes", "VPN", "Monitorização"]
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: "Administração de Servidores Linux",
      description: "Gerencie servidores Linux de forma profissional, desde a instalação até à manutenção e segurança.",
      duration: "5-6 semanas",
      level: "Intermediário a Avançado",
      topics: ["Instalação e configuração", "Shell scripting", "Segurança", "Backup e recuperação", "Monitorização"]
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "WordPress & Lojas Virtuais",
      description: "Crie sites profissionais e lojas online utilizando WordPress, WooCommerce e outras ferramentas.",
      duration: "3-4 semanas",
      level: "Iniciante",
      topics: ["WordPress básico", "Personalização de temas", "WooCommerce", "SEO básico", "Manutenção"]
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: "SEO e Marketing Digital",
      description: "Aprenda a optimizar sites para motores de busca e desenvolva estratégias de marketing digital eficazes.",
      duration: "4-5 semanas",
      level: "Iniciante a Intermediário",
      topics: ["SEO On-page/Off-page", "Google Analytics", "Google Ads", "Social Media Marketing", "Content Marketing"]
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Desenvolvimento Seguro",
      description: "Desenvolva aplicações com foco na segurança, implementando as melhores práticas de cybersegurança.",
      duration: "5-6 semanas",
      level: "Intermediário a Avançado",
      topics: ["Segurança em aplicações web", "Criptografia", "Testes de penetração", "OWASP", "Secure coding"]
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: "Engenharia de Software Empresarial",
      description: "Aprenda metodologias e ferramentas para desenvolvimento de software em ambiente empresarial.",
      duration: "8-10 semanas",
      level: "Avançado",
      topics: ["Metodologias ágeis", "DevOps", "Arquitectura de software", "Gestão de projectos", "Clean Code"]
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="courses" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Cursos e Formações Disponíveis
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Oferecemos uma ampla gama de cursos técnicos, todos adaptados para aulas ao domicílio 
            com material profissional incluído e certificação de conclusão.
          </p>
          
          {/* Hero Course Card */}
          <div className="max-w-4xl mx-auto mb-12">
            <Card className="overflow-hidden shadow-elegant border-0 bg-gradient-to-r from-primary/5 to-accent/5">
              <div className="grid lg:grid-cols-2">
                <div className="p-8 lg:p-12">
                  <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
                    Mais Popular
                  </Badge>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    Desenvolvimento Web FullStack
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    O curso mais completo para quem quer entrar no mundo da programação web. 
                    Desde HTML básico até aplicações complexas com bases de dados.
                  </p>
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      6-8 semanas
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      Iniciante a Avançado
                    </div>
                  </div>
                  <Button variant="hero" onClick={scrollToContact} className="group">
                    Inscrever-se Agora
                    <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
                <div className="relative h-64 lg:h-auto">
                  <img 
                    src={webDevImage} 
                    alt="Desenvolvimento Web FullStack"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-primary/20 to-transparent"></div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card key={index} className="p-6 hover:shadow-card transition-all duration-300 border-0 bg-card/70 backdrop-blur-sm group relative overflow-hidden">
              {course.popular && (
                <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                  Popular
                </Badge>
              )}
              
              <div className="mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <div className="text-primary">{course.icon}</div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{course.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{course.description}</p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Duração:</span>
                  <span className="font-medium text-foreground">{course.duration}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Nível:</span>
                  <span className="font-medium text-foreground">{course.level}</span>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold mb-3 text-foreground">Principais tópicos:</h4>
                <div className="flex flex-wrap gap-2">
                  {course.topics.slice(0, 3).map((topic, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {topic}
                    </Badge>
                  ))}
                  {course.topics.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{course.topics.length - 3} mais
                    </Badge>
                  )}
                </div>
              </div>

              <Button 
                variant="outline" 
                className="w-full group-hover:bg-primary group-hover:text-primary-foreground"
                onClick={scrollToContact}
              >
                Saber Mais
              </Button>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-8 lg:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground">
              Não encontrou o curso que procura?
            </h3>
            <p className="text-muted-foreground mb-8 text-lg">
              Desenvolvemos formações personalizadas de acordo com as suas necessidades específicas. 
              Entre em contacto connosco para discutir o seu projecto educacional.
            </p>
            <Button variant="hero" size="lg" onClick={scrollToContact}>
              Solicitar Curso Personalizado
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Courses;