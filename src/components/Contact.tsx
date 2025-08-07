import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  MessageCircle,
  Calendar,
  CheckCircle
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      content: "augustocamati21@gmail.com",
      description: "Resposta em até 24h"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "WhatsApp",
      content: "+244 xxx xxx xxx",
      description: "Atendimento directo"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Localização",
      content: "Luanda, Angola",
      description: "Atendemos toda a província"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Horário",
      content: "Seg - Sáb: 8h - 18h",
      description: "Domingos apenas emergências"
    }
  ];

  const services = [
    "Aulas ao Domicílio",
    "Desenvolvimento Web",
    "Automação/IoT",
    "Consultoria em Redes",
    "Administração de Servidores",
    "Curso Personalizado",
    "Outro (especificar na mensagem)"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Mensagem enviada com sucesso!",
      description: "Entraremos em contacto consigo em breve.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: ""
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Entre em Contacto Connosco
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pronto para começar a sua jornada de aprendizagem ou desenvolver o seu projecto? 
            Estamos aqui para ajudar e responder a todas as suas questões.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">Informações de Contacto</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <div className="text-primary">{info.icon}</div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                      <p className="text-foreground">{info.content}</p>
                      <p className="text-sm text-muted-foreground">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <Card className="border-0 bg-gradient-to-br from-primary/5 to-accent/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-primary" />
                  Contacto Rápido
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => window.open(`mailto:augustocamati21@gmail.com?subject=Interesse em Curso&body=Olá, tenho interesse em saber mais sobre os cursos da Academia ARC.`)}
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Enviar Email
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => window.open('https://wa.me/244999999999?text=Olá, tenho interesse nos cursos da Academia ARC')}
                >
                  <Phone className="h-4 w-4 mr-2" />
                  WhatsApp
                </Button>
                <Button 
                  variant="accent" 
                  className="w-full justify-start"
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  Agendar Reunião
                </Button>
              </CardContent>
            </Card>

            {/* Benefits */}
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Por que nos contactar?</h4>
              <div className="space-y-3">
                {[
                  "Consultoria gratuita sobre cursos",
                  "Orçamentos personalizados",
                  "Agendamento flexível",
                  "Suporte técnico especializado"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl">Envie-nos uma Mensagem</CardTitle>
                <p className="text-muted-foreground">
                  Preencha o formulário abaixo e entraremos em contacto consigo o mais breve possível.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome Completo *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="O seu nome"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="seu@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefone/WhatsApp</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+244 xxx xxx xxx"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service">Serviço de Interesse</Label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="">Seleccione um serviço</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Descreva as suas necessidades, horários preferenciais, localização ou qualquer outra informação relevante..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full group">
                    <Send className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform" />
                    Enviar Mensagem
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Ao enviar esta mensagem, concorda com o processamento dos seus dados para fins de contacto. 
                    Os seus dados são tratados com confidencialidade.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-12 text-foreground">Perguntas Frequentes</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                question: "Como funcionam as aulas ao domicílio?",
                answer: "Levamos todo o material necessário até sua casa e adaptamos o conteúdo ao seu ritmo de aprendizagem."
              },
              {
                question: "Qual é a duração típica dos cursos?",
                answer: "Varia entre 3-10 semanas dependendo do curso e da disponibilidade do aluno."
              },
              {
                question: "Fornecem certificado de conclusão?",
                answer: "Sim, todos os nossos cursos incluem certificado de conclusão reconhecido."
              },
              {
                question: "Fazem orçamentos gratuitos?",
                answer: "Sim, oferecemos consultoria e orçamentos gratuitos para todos os serviços."
              },
              {
                question: "Atendem fora de Luanda?",
                answer: "Actualmente focamos em Luanda, mas avaliamos pedidos de outras províncias."
              },
              {
                question: "O material está incluído no preço?",
                answer: "Sim, todo o material didáctico e equipamentos necessários estão incluídos."
              }
            ].map((faq, index) => (
              <Card key={index} className="border-0 bg-muted/30">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2 text-foreground">{faq.question}</h4>
                  <p className="text-sm text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;