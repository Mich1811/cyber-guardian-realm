import { Shield, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cyber-dark border-t border-cyber-blue/30 py-12 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-cyber-blue/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-cyber-glow/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4 group">
            <div className="flex items-center space-x-3 hover-scale cursor-pointer transition-transform duration-300">
              <Shield className="w-8 h-8 text-cyber-blue" />
              <span className="text-xl font-bold gradient-text">Nicholas Oyaro</span>
            </div>
            <p className="text-muted-foreground">
              Cybersecurity Analyst specializing in web security, penetration testing, 
              and threat intelligence through practical, hands-on expertise.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <div className="space-y-2">
              {[
                { href: '#about', label: 'About Me' },
                { href: '#projects', label: 'Projects' },
                { href: '#skills', label: 'Skills' },
                { href: '#contact', label: 'Contact' }
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-muted-foreground hover:text-cyber-glow transition-all duration-300 hover:translate-x-2 story-link"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Mich1811"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-cyber-blue/20 rounded-lg flex items-center justify-center hover:bg-cyber-blue/30 transition-all duration-300 hover-scale hover:rotate-12 group"
              >
                <Github className="w-5 h-5 text-cyber-blue group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://www.linkedin.com/in/nicholasoyaro"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-cyber-blue/20 rounded-lg flex items-center justify-center hover:bg-cyber-blue/30 transition-all duration-300 hover-scale hover:rotate-12 group"
              >
                <Linkedin className="w-5 h-5 text-cyber-blue group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="mailto:nicholas.oyaro@example.com"
                className="w-10 h-10 bg-cyber-blue/20 rounded-lg flex items-center justify-center hover:bg-cyber-blue/30 transition-all duration-300 hover-scale hover:rotate-12 group"
              >
                <Mail className="w-5 h-5 text-cyber-blue group-hover:scale-110 transition-transform" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              Available for cybersecurity opportunities and collaboration
            </p>
          </div>
        </div>

        <div className="border-t border-cyber-blue/30 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Nicholas Oyaro. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Built with React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;