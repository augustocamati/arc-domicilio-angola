import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  MessageCircle
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email",
      content: "academiaarc@gmail.com",
      description: "Envie-nos um email e responderemos em breve"
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Telefone",
      content: "+244 923 456 789",
      description: "Ligue-nos durante o horário de funcionamento"
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Localização",
      content: "Luanda, Angola",
      description: "Atendemos em toda a província de Luanda"
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Horário",
      content: "Segunda a Sexta: 8h - 17h",
      description: "Sábados: 8h - 12h"
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
              Entre em Contacto
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Estamos aqui para ajudar. Fale connosco sobre suas necessidades educacionais ou projetos técnicos.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center border-border/50 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {info.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {info.title}
                  </h3>
                  <p className="text-foreground font-medium mb-2">
                    {info.content}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {info.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Form */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground flex items-center gap-2">
                    <Send className="h-6 w-6 text-primary" />
                    Envie-nos uma Mensagem
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        Nome *
                      </label>
                      <Input placeholder="Seu nome completo" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        Email *
                      </label>
                      <Input type="email" placeholder="seu@email.com" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Telefone
                    </label>
                    <Input placeholder="+244 xxx xxx xxx" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Assunto *
                    </label>
                    <Input placeholder="Assunto da sua mensagem" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Mensagem *
                    </label>
                    <Textarea 
                      placeholder="Descreva como podemos ajudá-lo..." 
                      rows={5}
                    />
                  </div>

                  <Button className="w-full">
                    <Send className="h-4 w-4 mr-2" />
                    Enviar Mensagem
                  </Button>
                </CardContent>
              </Card>

              {/* Additional Info */}
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl text-foreground flex items-center gap-2">
                      <MessageCircle className="h-5 w-5 text-primary" />
                      Como podemos ajudar?
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground">Explicações</h4>
                      <p className="text-sm text-muted-foreground">
                        Suporte nas disciplinas técnicas do ensino médio
                      </p>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground">Cursos</h4>
                      <p className="text-sm text-muted-foreground">
                        Formação técnica especializada
                      </p>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground">Serviços</h4>
                      <p className="text-sm text-muted-foreground">
                        Desenvolvimento e consultoria técnica
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl text-foreground">
                      Resposta Rápida
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Comprometemo-nos a responder a todas as mensagens dentro de 24 horas úteis.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Para questões urgentes, recomendamos o contacto telefónico.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;