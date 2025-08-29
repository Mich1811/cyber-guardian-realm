import { Card, CardContent } from '@/components/ui/card';
import { Shield, Target, Search, Code } from 'lucide-react';

const About = () => {
  const specializations = [
    {
      icon: Shield,
      title: 'Web Security',
      description: 'Identifying and mitigating vulnerabilities in web applications, conducting thorough security assessments.'
    },
    {
      icon: Target,
      title: 'Penetration Testing',
      description: 'Simulating cyber attacks to test security systems and provide actionable remediation strategies.'
    },
    {
      icon: Search,
      title: 'Threat Intelligence',
      description: 'Analyzing security threats and developing intelligence to prevent and respond to cyber incidents.'
    },
    {
      icon: Code,
      title: 'CVE Research',
      description: 'Researching and developing exploits for known vulnerabilities to better understand security risks.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background to-cyber-dark/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate cybersecurity professional with hands-on experience in threat detection, 
            security analysis, and vulnerability research.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
              As a dedicated cybersecurity analyst, I focus on practical, hands-on security work. 
              My expertise spans from developing exploits for known CVEs to building comprehensive 
              home lab environments for security testing and skill development.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Through continuous learning and real-world application, I've developed a deep 
              understanding of security vulnerabilities, threat vectors, and defensive strategies. 
              My work includes breach simulation, detection engineering, and security analysis 
              using industry-standard tools and methodologies.
            </p>
          </div>
          
          <div className="relative">
            <div className="cyber-border rounded-lg p-8 bg-gradient-to-br from-card to-card/50">
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-cyber-blue/20 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-cyber-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Security Focus</h4>
                    <p className="text-sm text-muted-foreground">Practical security implementation</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-cyber-glow/20 rounded-full flex items-center justify-center">
                    <Target className="w-6 h-6 text-cyber-glow" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Hands-on Experience</h4>
                    <p className="text-sm text-muted-foreground">Real-world security testing</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-cyber-accent/20 rounded-full flex items-center justify-center">
                    <Code className="w-6 h-6 text-cyber-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Research & Development</h4>
                    <p className="text-sm text-muted-foreground">CVE analysis and exploit development</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specializations.map((spec, index) => (
            <Card key={index} className="cyber-glow bg-gradient-to-b from-card to-card/50 border-cyber-blue/30">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-cyber-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <spec.icon className="w-8 h-8 text-cyber-blue" />
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