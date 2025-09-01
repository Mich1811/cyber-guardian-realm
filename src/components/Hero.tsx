import { Button } from '@/components/ui/button';
import { Shield, Download, ExternalLink } from 'lucide-react';
import heroImage from '@/assets/cyber-hero.jpg';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.3
        }}
      />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-20 left-20 w-2 h-2 bg-cyber-blue rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-cyber-glow rounded-full animate-ping"></div>
        <div className="absolute bottom-32 left-16 w-3 h-3 bg-cyber-accent rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-cyber-blue rounded-full animate-ping delay-700"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-20">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main heading */}
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <Shield className="w-16 h-16 text-cyber-blue cyber-glow" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="gradient-text">Nicholas Oyaro</span>
            </h1>
            <div className="text-2xl md:text-3xl text-cyber-glow font-semibold">
              Cybersecurity Analyst
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Specializing in <span className="text-cyber-blue font-semibold">Web Security</span>, 
            <span className="text-cyber-glow font-semibold"> Penetration Testing</span>, and 
            <span className="text-cyber-accent font-semibold"> Threat Intelligence</span> through hands-on projects
          </p>

          {/* Expertise badges */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {['Penetration Testing', 'SIEM Analysis', 'Threat Intelligence', 'Security Analysis'].map((skill) => (
              <div key={skill} className="cyber-border rounded-full px-6 py-3 bg-card/50">
                <span className="text-cyber-glow font-medium">{skill}</span>
              </div>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">
            <Button variant="glow" size="lg" asChild>
              <a href="#projects" className="flex items-center space-x-2">
                <ExternalLink className="w-5 h-5" />
                <span>View Projects</span>
              </a>
            </Button>
            <Button variant="cyber" size="lg" asChild>
              <a href="#contact" className="flex items-center space-x-2">
                <Download className="w-5 h-5" />
                <span>Download Resume</span>
              </a>
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="w-6 h-10 border-2 border-cyber-blue rounded-full flex justify-center">
              <div className="w-1 h-3 bg-cyber-glow rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;