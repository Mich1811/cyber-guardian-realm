import { Card, CardContent } from '@/components/ui/card';
import { Shield, Target, Search, Code } from 'lucide-react';
import { useScrollAnimation, useParallax } from '@/hooks/useScrollAnimation';

const About = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: journeyRef, isVisible: journeyVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();
  const parallaxOffset = useParallax(0.3);
  
  const specializations = [
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Identifying, assessing, and mitigating operational and cybersecurity risks across organizations.'
    },
    {
      icon: Target,
      title: 'Compliance & Governance',
      description: 'Ensuring adherence to regulatory frameworks and implementing robust security governance policies.'
    },
    {
      icon: Search,
      title: 'Threat Intelligence',
      description: 'Analyzing security threats and developing intelligence to prevent and respond to cyber incidents.'
    },
    {
      icon: Code,
      title: 'Network Security',
      description: 'Securing network infrastructure and implementing protective measures against cyber threats and vulnerabilities.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background to-cyber-dark/20 relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyber-blue/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyber-glow/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Diligent professional with over 5 years of experience in risk management, compliance, 
            and strategic operations, now applying this expertise to cybersecurity and digital asset protection.
          </p>
        </div>

        <div 
          ref={journeyRef}
          className={`grid md:grid-cols-2 gap-12 items-center mb-16 transition-all duration-1000 ${
            journeyVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}
        >
          <div className="space-y-6 group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyber-blue/20 to-cyber-glow/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-1000"></div>
            <h3 className="text-2xl font-bold text-foreground">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
              Hi there and thanks for stopping by! My journey into cybersecurity began with a lifelong 
              passion for IT and a natural curiosity for analyzing how things work. This drive eventually 
              led me to a career as a cybersecurity analyst.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              For the past two years, I've gained hands-on experience in threat intelligence, digital 
              forensics, and Security Operations Center (SOC) workflows.
            </p>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyber-glow/30 to-cyber-accent/30 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative cyber-border rounded-lg p-8 bg-gradient-to-br from-card to-card/50 card-hover">
              <div className="space-y-4">
                <div className="flex items-center space-x-4 animate-stagger-1">
                  <div className="w-12 h-12 bg-cyber-blue/20 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-cyber-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Risk & Compliance Focus</h4>
                    <p className="text-sm text-muted-foreground">Strategic risk management expertise</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 animate-stagger-2">
                  <div className="w-12 h-12 bg-cyber-glow/20 rounded-full flex items-center justify-center">
                    <Target className="w-6 h-6 text-cyber-glow" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">2+ Years in Cybersecurity</h4>
                    <p className="text-sm text-muted-foreground">Threat intelligence & SOC operations</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 animate-stagger-3">
                  <div className="w-12 h-12 bg-cyber-accent/20 rounded-full flex items-center justify-center">
                    <Code className="w-6 h-6 text-cyber-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Continuous Learning</h4>
                    <p className="text-sm text-muted-foreground">Cybersecurity transition & growth</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div 
          ref={cardsRef}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {specializations.map((spec, index) => (
            <Card 
              key={index} 
              className={`cyber-glow bg-gradient-to-b from-card to-card/50 border-cyber-blue/30 card-hover group transition-all duration-700 ${
                cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-cyber-blue/20 rounded-full flex items-center justify-center mx-auto mb-4 hover-scale group-hover:bg-cyber-blue/30 transition-colors">
                  <spec.icon className="w-8 h-8 text-cyber-blue group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{spec.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{spec.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;