import { Card } from "@/components/ui/card";
import { CheckCircle, Award, Users, Target } from "lucide-react";
import homeTeachingImage from "@/assets/home-teaching.jpg";

const About = () => {
  const features = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Atendimento Personalizado",
      description: "Cada aluno recebe atenção individual, com conteúdo adaptado ao seu ritmo e necessidades específicas."
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Instrutores Qualificados",
      description: "Equipa liderada por Augusto Camati, técnico formado no ITEL e graduando em Engenharia Informática."
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Conteúdo Actualizado",
      description: "Cursos alinhados com as exigências do mercado de trabalho angolano e internacional."
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Suporte Contínuo",
      description: "Apoio técnico antes, durante e após a conclusão dos cursos para garantir o sucesso dos alunos."
    }
  ];

  const benefits = [
    "Aulas no conforto da sua casa",
    "Horários flexíveis adaptados à sua agenda",
    "Material profissional incluído nas aulas",
    "Certificação de conclusão de curso",
    "Networking com outros profissionais da área",
    "Orientação para inserção no mercado de trabalho"
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Por que escolher a Academia ARC?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Somos uma empresa angolana especializada na prestação de serviços técnicos e educacionais, 
            focada em levar formação de qualidade directamente até si.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          
          {/* Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-card">
              <img 
                src={homeTeachingImage} 
                alt="Aulas ao domicílio - Academia ARC"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-6 py-3 rounded-full font-semibold shadow-button">
              Formação ao Domicílio
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Formação Técnica Especializada em Angola
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                A Academia ARC nasceu da necessidade de oferecer formação técnica de qualidade 
                em Angola, com foco especial no atendimento domiciliar. Acreditamos que a 
                educação deve ser acessível, personalizada e adaptada à realidade de cada aluno.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Com anos de experiência no sector tecnológico e educacional, desenvolvemos 
                uma metodologia única que combina teoria e prática, sempre com equipamentos 
                profissionais e conteúdo actualizado.
              </p>
            </div>

            {/* Benefits List */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-foreground">O que oferecemos:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-card transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-primary">{feature.icon}</div>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;