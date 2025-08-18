import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Globe, 
  Cpu, 
  Network, 
  Server, 
  Code, 
  Settings,
  Wrench,
  Zap,
  Smartphone,
  Database,
  ArrowRight
} from "lucide-react";
import { generateBudgetWhatsAppLink, APP_CONFIG } from "@/config/environment";
import { Link } from "react-router-dom";

const Services = () => {
  const services = APP_CONFIG.services.list;

  const tools = [
    { icon: <Wrench className="h-6 w-6" />, name: "Multímetro e Ferro de Solda" },
    { icon: <Cpu className="h-6 w-6" />, name: "Kits Arduino e ESP32" },
    { icon: <Smartphone className="h-6 w-6" />, name: "Computadores e Smartphones" },
    { icon: <Network className="h-6 w-6" />, name: "Testadores de Rede" },
    { icon: <Zap className="h-6 w-6" />, name: "Equipamentos de Instalação" },
    { icon: <Database className="h-6 w-6" />, name: "Ferramentas de Desenvolvimento" }
  ];

  // const scrollToContact = () => {
  //   const element = document.querySelector("#contact");
  //   if (element) {
  //     element.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  const handleBudgetRequest = (title: string = "") => {
    window.open(generateBudgetWhatsAppLink(title), '_blank');
  };

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Serviços Técnicos Especializados
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Além da formação, oferecemos uma gama completa de serviços técnicos
            para empresas e particulares, desde desenvolvimento web até
            automação empresarial.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-card transition-all duration-300 border-0 bg-card/70 backdrop-blur-sm"
            >
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <div className="text-primary">
                    {service.icon === "Globe" && <Globe className="h-8 w-8" />}
                    {service.icon === "Cpu" && <Cpu className="h-8 w-8" />}
                    {service.icon === "Network" && (
                      <Network className="h-8 w-8" />
                    )}
                    {service.icon === "Server" && (
                      <Server className="h-8 w-8" />
                    )}
                    {service.icon === "Code" && <Code className="h-8 w-8" />}
                  </div>
                </div>
                <div className="mb-2">
                  <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded-full">
                    {service.category}
                  </span>
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-foreground">
                    Características principais:
                  </h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="text-xs text-muted-foreground flex items-center gap-2"
                      >
                        <div className="w-1 h-1 bg-accent rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link to="/servicos">
                  <Button
                    className="w-full mt-4 group-hover:bg-primary group-hover:text-primary-foreground"
                   
                  >
                    Saber mais
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tools Section */}
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground">
              Material Profissional Utilizado
            </h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Utilizamos equipamentos profissionais em todos os nossos serviços,
              garantindo qualidade e precisão em cada projecto.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {tools.map((tool, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-background rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/10 transition-colors shadow-card">
                  <div className="text-primary group-hover:scale-110 transition-transform">
                    {tool.icon}
                  </div>
                </div>
                <p className="text-sm font-medium text-foreground">
                  {tool.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground">
              Precisa de um serviço específico?
            </h3>
            <p className="text-muted-foreground mb-8 text-lg">
              Desenvolvemos soluções técnicas personalizadas de acordo com as
              necessidades do seu projecto. Entre em contacto para discutir como
              podemos ajudar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="hero"
                size="lg"
                onClick={() => handleBudgetRequest("Consultoria Gratuita")}
              >
                Solicitar Consultoria Gratuita
              </Button>
              <Button variant="outline" size="lg">
                Ver Projectos Realizados
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Services;