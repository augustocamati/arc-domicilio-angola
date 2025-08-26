import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Mail } from "lucide-react"
import { useState } from "react"
import EnrollmentForm from "./EnrollmentForm"
import { APP_CONFIG } from "@/config/environment"
import { Link } from "react-router-dom"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isEnrollmentOpen, setIsEnrollmentOpen] = useState(false)


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

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Academia ARC
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {APP_CONFIG.urls.links.map((item) => (
              <Link to={item.href} key={item.label}>
                <button
                  // onClick={() => handleNavigation(item.href)}
                  className="text-foreground hover:text-primary transition-colors duration-300"
                >
                  {item.label}
                </button>
              </Link>
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Mail className="h-4 w-4" />
              <span>{APP_CONFIG.academy.email}</span>
            </div>
            <Link to="/inscricao">
              <Button variant="hero" size="sm">
                Marcar Explicação
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              {APP_CONFIG.urls.links.map((item) => (
                <Link
                  to={item.href}
                  key={item.label}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <button className="text-foreground hover:text-primary transition-colors duration-300">
                    {item.label}
                  </button>
                </Link>
              ))}
              <div className="pt-4 border-t border-border">
                <Button
                  variant="hero"
                  className="w-full"
                  onClick={() => {
                    setIsMenuOpen(false)
                  }}
                >
                  <Link to="/inscricao">
                    <Button variant="hero" size="sm">
                      Marcar Explicação
                    </Button>
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>

      {/* Enrollment Form Dialog */}
      <EnrollmentForm
        open={isEnrollmentOpen}
        onOpenChange={setIsEnrollmentOpen}
      />
    </header>
  )
}

export default Header
