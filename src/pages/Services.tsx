import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  APP_CONFIG,
  generateBudgetWhatsAppLink,
  generateWhatsAppLink
} from "@/config/environment"

import {
  Code,
  Server,
  Shield,
  Smartphone,
  Globe,
  Database,
  Users,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Briefcase,
  Settings,
  Network,
  Cpu,
} from "lucide-react"
import { Link } from "react-router-dom"

const Services = () => {
  const serviceCategories = APP_CONFIG.services.list;

  const handleBudgetRequest = (title: string = "") => {
    window.open(generateBudgetWhatsAppLink(title), "_blank")
  }
  const portfolio = [
    {
      title: "Sistema de Gestão Escolar",
      description: "ERP completo para gestão de instituições de ensino",
      technologies: ["React", "Node.js", "PostgreSQL"],
      category: "Educação",
    },
    {
      title: "E-commerce Multivendor",
      description: "Plataforma de vendas online com múltiplos vendedores",
      technologies: ["Vue.js", "Laravel", "MySQL"],
      category: "Comércio",
    },
    {
      title: "App de Gestão de Frotas",
      description: "Aplicação mobile para controlo de veículos empresariais",
      technologies: ["React Native", "Firebase", "Maps API"],
      category: "Logística",
    },
    {
      title: "Portal Corporativo",
      description: "Intranet empresarial com gestão de documentos",
      technologies: ["Angular", "NestJS", "MongoDB"],
      category: "Empresarial",
    },
  ]

  const processSteps = [
    {
      step: "01",
      title: "Consulta Inicial",
      description: "Análise detalhada das necessidades e objetivos do projeto",
    },
    {
      step: "02",
      title: "Proposta Técnica",
      description:
        "Elaboração de proposta com cronograma e orçamento detalhado",
    },
    {
      step: "03",
      title: "Desenvolvimento",
      description: "Execução do projeto com acompanhamento e feedback contínuo",
    },
    {
      step: "04",
      title: "Implementação",
      description: "Deploy, testes finais e formação da equipa do cliente",
    },
    {
      step: "05",
      title: "Suporte",
      description: "Manutenção, atualizações e suporte técnico contínuo",
    },
  ]

  const getIconForService = (iconName: string) => {
    switch (iconName) {
      case "Globe":
        return <Globe className="h-6 w-6" />
      case "Cpu":
        return <Cpu className="h-6 w-6" />
      case "Network":
        return <Network className="h-6 w-6" />
      case "Server":
        return <Server className="h-6 w-6" />
      case "Code":
        return <Code className="h-6 w-6" />
      default:
        return <Code className="h-6 w-6" />
    }
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Serviços Técnicos
          </h1>
          <p className="text-xl lg:text-2xl max-w-4xl mx-auto mb-8 opacity-90">
            Soluções tecnológicas completas para empresas e organizações que
            buscam inovação, eficiência e crescimento sustentável.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="secondary"
              size="lg"
              className="hover:scale-105 transition-transform"
              onClick={() => window.open(generateBudgetWhatsAppLink(), "_blank")}
            >
              Solicitar Orçamento
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 text-white border-white/20 hover:bg-white/20"
            >
              Ver Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Nossos Serviços
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Soluções técnicas completas e personalizadas para o seu negócio
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {serviceCategories.map((service, index) => (
              <Card
                key={index}
                className="overflow-hidden border-0 bg-card/50 backdrop-blur-sm hover:shadow-card transition-all duration-300 group hover:scale-105"
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <div className="text-primary">
                        {getIconForService(service.icon)}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <Badge variant="outline" className="text-xs mt-1">
                        {service.category}
                      </Badge>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold mb-3 text-foreground">
                      Características principais:
                    </h4>
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center gap-2"
                        >
                          <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                          <span className="text-xs text-muted-foreground">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full hover:scale-105 transition-transform"
                    onClick={() => handleBudgetRequest(service.title)}
                  >
                    Solicitar Orçamento
                  </Button>

                 
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Nosso Processo
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Metodologia comprovada para garantir o sucesso dos seus projetos.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors group-hover:scale-110 transform duration-300">
                    <span className="text-primary font-bold text-lg">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Pronto para Transformar Seu Negócio?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Entre em contacto connosco para discutir como podemos ajudar sua
            empresa a alcançar novos patamares através da tecnologia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="secondary"
              size="lg"
              className="hover:scale-105 transition-transform"
              onClick={() => window.open(generateWhatsAppLink("Olá! Gostaria de iniciar um projeto com a Academia ARC. Podem me dar mais informações sobre como começar?"), "_blank")}
            >
              Iniciar Projeto
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 text-white border-white/20 hover:bg-white/20"
            >
              Agendar Consulta
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services