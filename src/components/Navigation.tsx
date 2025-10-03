import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Shield, Github, Linkedin } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('#hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['hero', 'about', 'projects', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(`#${current}`);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-background/95 backdrop-blur-lg border-b border-cyber-blue/50 shadow-lg shadow-cyber-blue/10' 
        : 'bg-background/80 backdrop-blur-md border-b border-cyber-blue/30'
    }`}>
      <div className={`container mx-auto px-6 transition-all duration-300 ${scrolled ? 'py-3' : 'py-4'}`}>
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2 group cursor-pointer">
            <Shield className="w-8 h-8 text-cyber-blue group-hover:rotate-12 transition-transform duration-300" />
            <span className="text-xl font-bold gradient-text">Nicholas Oyaro</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-foreground hover:text-cyber-glow transition-all duration-300 relative group ${
                  activeSection === item.href ? 'text-cyber-glow' : ''
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-cyber-blue transition-all duration-300 ${
                  activeSection === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </a>
            ))}
            <div className="flex items-center space-x-4 ml-4">
              <Button variant="ghost" size="icon" asChild className="hover-scale hover:rotate-12 transition-all duration-300">
                <a href="https://github.com/Mich1811" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="hover-scale hover:rotate-12 transition-all duration-300">
                <a href="#contact">
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="cyber" asChild className="hover-scale glow-on-hover group">
                <a href="#contact" className="relative overflow-hidden">
                  <span className="relative z-10">Contact Me</span>
                  <span className="absolute inset-0 bg-cyber-glow/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                </a>
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-cyber-blue/30 animate-slide-in-up z-50">
            <div className="flex flex-col space-y-4 px-6 py-6">
              {navItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`text-foreground hover:text-cyber-glow transition-all duration-300 story-link animate-stagger-${Math.min(index + 1, 4)} hover:translate-x-2 ${
                    activeSection === item.href ? 'text-cyber-glow' : ''
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex items-center space-x-4 pt-4 animate-fade-in">
                <Button variant="ghost" size="icon" asChild className="hover-scale hover:rotate-12 transition-all duration-300">
                  <a href="https://github.com/Mich1811" target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild className="hover-scale hover:rotate-12 transition-all duration-300">
                  <a href="#contact">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;