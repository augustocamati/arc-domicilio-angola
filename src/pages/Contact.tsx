import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { APP_CONFIG } from "@/config/environment"

import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Users, Briefcase, CheckCircle, Calendar } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    type: "geral"
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Mensagem enviada com sucesso!",
      description: "Entraremos em contacto consigo em breve.",
      duration: 5000,
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      type: "geral"
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: APP_CONFIG.academy.email,
      description: "Resposta em até 24 horas"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Telefone",
      details: APP_CONFIG.academy.phone,
      description: "Segunda a Sexta, 8h às 18h"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Localização",
      details: APP_CONFIG.academy.address,
      description: "Atendimento em toda a província"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Horário",
      details: "8h às 18h",
      description: "Segunda a Sexta-feira"
    }
  ];

  const serviceTypes = [
    { value: "geral", label: "Informação Geral", icon: <MessageCircle className="h-4 w-4" /> },
    { value: "cursos", label: "Cursos e Formações", icon: <Users className="h-4 w-4" /> },
    { value: "servicos", label: "Serviços Técnicos", icon: <Briefcase className="h-4 w-4" /> },
    { value: "parcerias", label: "Parcerias e Investimentos", icon: <Briefcase className="h-4 w-4" /> }
  ];

  const faqs = [
    {
      question: "Como posso inscrever-me num curso?",
      answer: "Pode inscrever-se preenchendo o formulário de contacto ou enviando um email diretamente. Entraremos em contacto para mais detalhes."
    },
    {
      question: "Oferecem cursos online?",
      answer: "Atualmente focamos em formação presencial e ao domicílio, mas estamos a desenvolver opções online para determinados cursos."
    },
    {
      question: "Qual o custo dos serviços técnicos?",
      answer: "Os custos variam conforme a complexidade do projeto. Oferecemos orçamentos gratuitos após análise inicial das necessidades."
    },
    {
      question: "Disponibilizam certificados?",
      answer: "Sim, todos os nossos cursos incluem certificação reconhecida pelo mercado angolano."
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Entre em Contacto
          </h1>
          <p className="text-xl lg:text-2xl max-w-4xl mx-auto mb-8 opacity-90">
            Estamos prontos para ajudar no seu crescimento profissional ou no
            desenvolvimento de soluções tecnológicas para sua empresa.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="p-8 border-0 bg-card/50 backdrop-blur-sm shadow-card">
                <h2 className="text-2xl font-bold mb-6 text-foreground">
                  Envie-nos uma Mensagem
                </h2>
                {/* Quick Actions */}
                <Card className="border-0 mb-8 bg-gradient-to-br from-primary/5 to-accent/5">
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
                      onClick={() =>
                        window.open(
                          `mailto:${APP_CONFIG.academy.email}?subject=Contacto da Academia ARC &body=Olá, gostaria de obter mais informações sobre os cursos e serviços oferecidos pela Academia ARC.`
                        )
                      }
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      Enviar Email
                    </Button>
                    <Button
                      variant="accent"
                      className="w-full justify-start"
                      onClick={() =>
                        window.open(
                          `https://wa.me/${APP_CONFIG.academy.whatsapp}?text=Olá, tenho interesse em saber mais sobre os cursos da Academia ARC.`
                        )
                      }
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      WhatsApp
                    </Button>

                    {/* Benefits */}
                    <div>
                      <h4 className="font-semibold mb-4 text-foreground">
                        Por que nos contactar?
                      </h4>
                      <div className="space-y-3">
                        {[
                          "Consultoria gratuita sobre cursos",
                          "Orçamentos personalizados",
                          "Agendamento flexível",
                          "Suporte técnico especializado",
                        ].map((benefit, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Nome Completo *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="hover:border-primary/50 focus:border-primary transition-colors"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="hover:border-primary/50 focus:border-primary transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Telefone
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="hover:border-primary/50 focus:border-primary transition-colors"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="type"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Tipo de Consulta *
                      </label>
                      <select
                        id="type"
                        name="type"
                        required
                        value={formData.type}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary hover:border-primary/50 transition-colors"
                      >
                        {serviceTypes.map((type) => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Assunto *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="hover:border-primary/50 focus:border-primary transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Mensagem *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="hover:border-primary/50 focus:border-primary transition-colors"
                      placeholder="Descreva em detalhes a sua necessidade ou questão..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full hover:scale-105 transition-transform"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Enviar Mensagem
                  </Button>
                </form>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6 text-foreground">
                  Informações de Contacto
                </h2>
                <div className="grid gap-6">
                  {contactInfo.map((info, index) => (
                    <Card
                      key={index}
                      className="p-6 border-0 bg-card/50 backdrop-blur-sm hover:shadow-card transition-all duration-300 group hover:scale-105"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <div className="text-primary">{info.icon}</div>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                            {info.title}
                          </h3>
                          <p className="text-foreground font-medium">
                            {info.details}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Service Types */}
              <div>
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  Como Podemos Ajudar?
                </h3>
                <div className="space-y-3">
                  {serviceTypes.map((type, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-lg bg-card/30 hover:bg-card/50 transition-colors"
                    >
                      <div className="text-primary">{type.icon}</div>
                      <span className="text-foreground">{type.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Perguntas Frequentes
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Respostas às questões mais comuns dos nossos clientes.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className="p-6 border-0 bg-card/50 backdrop-blur-sm hover:shadow-card transition-all duration-300 group hover:scale-105"
              >
                <h3 className="text-lg font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {faq.question}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ainda tem Dúvidas?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            A nossa equipa está sempre disponível para esclarecer qualquer
            questão e ajudar a encontrar a melhor solução para suas
            necessidades.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 text-white border-white/20 hover:bg-white/20"
              onClick={() =>
                window.open(
                  `https://wa.me/${APP_CONFIG.academy.whatsapp}?text=Olá, tenho interesse em mais informações sobre a Academia ARC.`
                )
              }
            >
              <Phone className="mr-2 h-5 w-5" />
              pergunte no Whatsapp
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
};

export default Contact;
