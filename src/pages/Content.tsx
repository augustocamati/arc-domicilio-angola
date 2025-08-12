import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Video, 
  Download, 
  Clock,
  Users,
  Star,
  PlayCircle,
  FileText,
  Lightbulb
} from "lucide-react";

const Content = () => {
  const contentCategories = [
    {
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      title: "Tutoriais Escritos",
      description: "Guias detalhados e tutoriais passo a passo",
      count: "15+ artigos",
      type: "Artigos"
    },
    {
      icon: <Video className="h-8 w-8 text-primary" />,
      title: "Vídeo Aulas",
      description: "Conteúdo em vídeo para aprendizagem visual",
      count: "8+ vídeos",
      type: "Vídeos"
    },
    {
      icon: <Download className="h-8 w-8 text-primary" />,
      title: "Recursos Didácticos",
      description: "Material de apoio para download",
      count: "12+ recursos",
      type: "Downloads"
    }
  ];

  const featuredContent = [
    {
      type: "Artigo",
      title: "Introdução aos Circuitos Electrónicos",
      description: "Conceitos fundamentais sobre circuitos electrónicos e componentes básicos.",
      duration: "15 min leitura",
      level: "Básico",
      category: "Electrónica",
      featured: true
    },
    {
      type: "Vídeo",
      title: "Programação em Python - Primeiros Passos",
      description: "Tutorial em vídeo sobre os fundamentos da programação em Python.",
      duration: "25 min",
      level: "Iniciante",
      category: "Informática",
      featured: true
    },
    {
      type: "Recurso",
      title: "Guia de Redes de Computadores",
      description: "Material completo sobre protocolos de rede e configuração.",
      duration: "PDF - 45 páginas",
      level: "Intermédio",
      category: "Redes",
      featured: false
    },
    {
      type: "Artigo",
      title: "Design Responsivo com CSS",
      description: "Técnicas modernas para criar layouts que se adaptam a qualquer dispositivo.",
      duration: "20 min leitura",
      level: "Intermédio",
      category: "Web Design",
      featured: false
    },
    {
      type: "Vídeo",
      title: "Edição de Vídeo com Software Livre",
      description: "Como criar vídeos profissionais usando ferramentas gratuitas.",
      duration: "35 min",
      level: "Básico",
      category: "Multimédia",
      featured: false
    },
    {
      type: "Recurso",
      title: "Cheat Sheet - Comandos Linux",
      description: "Referência rápida com os comandos mais utilizados no sistema Linux.",
      duration: "PDF - 8 páginas",
      level: "Todos",
      category: "Sistemas",
      featured: false
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Vídeo":
        return <PlayCircle className="h-5 w-5 text-primary" />;
      case "Recurso":
        return <Download className="h-5 w-5 text-primary" />;
      default:
        return <FileText className="h-5 w-5 text-primary" />;
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Básico":
      case "Iniciante":
        return "bg-success/10 text-success border-success/20";
      case "Intermédio":
        return "bg-primary/10 text-primary border-primary/20";
      case "Avançado":
        return "bg-destructive/10 text-destructive border-destructive/20";
      default:
        return "bg-muted text-muted-foreground border-border";
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
              Conteúdos Educacionais
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Acesse uma vasta biblioteca de conteúdos técnicos e educacionais para complementar seus estudos
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="px-4 py-2">
                <BookOpen className="h-4 w-4 mr-2" />
                Gratuito
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                <Users className="h-4 w-4 mr-2" />
                Para Todos
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                <Star className="h-4 w-4 mr-2" />
                Qualidade
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Content Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Tipos de Conteúdo
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Oferecemos diversos formatos de conteúdo para diferentes estilos de aprendizagem
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contentCategories.map((category, index) => (
              <Card key={index} className="text-center border-border/50 hover:shadow-lg transition-all duration-300 hover:border-primary/20">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {category.icon}
                  </div>
                  <CardTitle className="text-xl text-foreground">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    {category.description}
                  </p>
                  <Badge variant="outline" className="text-sm">
                    {category.count}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Conteúdos Disponíveis
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore nossa coleção de materiais educacionais
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {featuredContent.map((content, index) => (
              <Card key={index} className={`border-border/50 hover:shadow-lg transition-all duration-300 ${content.featured ? 'ring-2 ring-primary/20' : ''}`}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      {getTypeIcon(content.type)}
                      <Badge variant="outline" className="text-xs">
                        {content.type}
                      </Badge>
                      {content.featured && (
                        <Badge className="text-xs bg-primary text-primary-foreground">
                          <Star className="h-3 w-3 mr-1" />
                          Destaque
                        </Badge>
                      )}
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {content.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg text-foreground">
                    {content.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    {content.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        {content.duration}
                      </span>
                    </div>
                    <Badge className={`text-xs ${getLevelColor(content.level)}`}>
                      {content.level}
                    </Badge>
                  </div>

                  <Button className="w-full" variant="outline">
                    {content.type === "Vídeo" ? "Assistir" : content.type === "Recurso" ? "Descarregar" : "Ler Artigo"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="p-12 text-center">
              <Lightbulb className="h-16 w-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Quer mais conteúdos?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Estamos constantemente a criar novos materiais. Inscreva-se para receber notificações sobre novos conteúdos.
              </p>
              <Button size="lg" className="px-8">
                Subscrever Atualizações
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Content;