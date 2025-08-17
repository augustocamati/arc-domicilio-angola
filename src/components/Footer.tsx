import { Button } from "@/components/ui/button";
import { APP_CONFIG } from "@/config/environment";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Instagram, 
  Linkedin,
  ArrowUp
} from "lucide-react";
import { useState } from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
    const [isMenuOpen, setIsMenuOpen] = useState(false)
  

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  

 

  const handleNavigation = (href: string) => {
    if (href.startsWith("/")) {
      window.location.href = href
    } else {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
    setIsMenuOpen(false)
  }

  const footerLinks = {
   
    courses: [
      { label: "Desenvolvimento Web", href: "/cursos" },
      { label: "Programação de Microcontroladores", href: "/cursos" },
      { label: "Redes de Computadores", href: "/cursos" },
      { label: "Administração de Servidores Linux", href: "/cursos" },
    ],
    services: [
      { label: "Desenvolvimento de Software", href: "/servicos" },
      { label: "Consultoria Técnica", href: "/servicos" },
      { label: "Suporte e Manutenção", href: "/servicos" },
    ],
  }

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Academia ARC
              </h3>
              <p className="text-background/80 leading-relaxed mb-6">
                {APP_CONFIG.academy.description}
              </p>
             

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="text-sm">{APP_CONFIG.academy.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="text-sm">{APP_CONFIG.academy.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-sm">{APP_CONFIG.academy.address}</span>
                </div>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Empresa</h4>
              <div className="space-y-3">
                {APP_CONFIG.urls.links.map((link, index) => (
                  <button
                    key={index}
                    onClick={() => handleNavigation(link.href)}
                    className="block text-background/80 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Courses Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Principais Cursos</h4>
              <div className="space-y-3">
                {footerLinks.courses.map((link, index) => (
                  <button
                    key={index}
                    onClick={() => handleNavigation(link.href)}
                    className="block text-background/80 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Services Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Serviços</h4>
              <div className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <button
                    key={index}
                    onClick={() => handleNavigation(link.href)}
                    className="block text-background/80 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter & Social */}
        <div className="border-t border-background/20 py-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-semibold mb-2">
                Mantenha-se Actualizado
              </h4>
              <p className="text-background/80 text-sm mb-4">
                Receba novidades sobre novos cursos e ofertas especiais.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Seu email"
                  className="flex-1 px-4 py-2 rounded-md bg-background/10 border border-background/20 text-background placeholder:text-background/60 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button variant="hero">Subscrever</Button>
              </div>
            </div>

            {/* Social Media */}
            <div className="text-center md:text-right">
              <h4 className="text-lg font-semibold mb-4">Siga-nos</h4>
              <div className="flex justify-center md:justify-end gap-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-background/80 hover:text-primary hover:bg-background/10"
                  onClick={() =>
                    window.open(APP_CONFIG.academy.social.facebook, "_blank")
                  }
                >
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-background/80 hover:text-primary hover:bg-background/10"
                  onClick={() =>
                    window.open(APP_CONFIG.academy.social.instagram, "_blank")
                  }
                >
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-background/80 hover:text-primary hover:bg-background/10"
                  onClick={() =>
                    window.open(APP_CONFIG.academy.social.linkedin, "_blank")
                  }
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-background/80 text-sm">
              © {currentYear} Academia ARC. Todos os direitos reservados.
            </div>

            <div className="flex items-center gap-6">
              <button className="text-background/80 hover:text-primary transition-colors text-sm">
                Política de Privacidade
              </button>
              <button className="text-background/80 hover:text-primary transition-colors text-sm">
                Termos de Serviço
              </button>
              <Button
                variant="ghost"
                size="icon"
                onClick={scrollToTop}
                className="text-background/80 hover:text-primary hover:bg-background/10"
              >
                <ArrowUp className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
};

export default Footer;
