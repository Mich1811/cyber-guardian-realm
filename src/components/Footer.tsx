import { Shield, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cyber-dark border-t border-cyber-blue/30 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
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
                  className="block text-muted-foreground hover:text-cyber-glow transition-colors"
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
                className="w-10 h-10 bg-cyber-blue/20 rounded-lg flex items-center justify-center hover:bg-cyber-blue/30 transition-colors"
              >
                <Github className="w-5 h-5 text-cyber-blue" />
              </a>
              <a
                href="https://www.linkedin.com/in/nicholasoyaro"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-cyber-blue/20 rounded-lg flex items-center justify-center hover:bg-cyber-blue/30 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-cyber-blue" />
              </a>
              <a
                href="mailto:nicholas.oyaro@example.com"
                className="w-10 h-10 bg-cyber-blue/20 rounded-lg flex items-center justify-center hover:bg-cyber-blue/30 transition-colors"
              >
                <Mail className="w-5 h-5 text-cyber-blue" />
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