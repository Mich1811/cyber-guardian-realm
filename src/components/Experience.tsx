import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, TrendingUp } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Cybersecurity Risk Management Specialist',
      company: 'FinAccess Limited',
      location: 'Nairobi, Kenya',
      period: 'April 2022 – Present',
      achievements: [
        'Conducted comprehensive vendor security assessments and third-party risk evaluations',
        'Implemented security governance frameworks reducing organizational risk exposure by 15%',
        'Managed security compliance programs ensuring 95% adherence to regulatory requirements',
        'Developed incident response protocols and disaster recovery planning procedures',
        'Led cross-functional security awareness training and policy implementation'
      ],
      skills: ['Third-party Risk Assessment', 'Security Governance', 'Compliance Management', 'Incident Response']
    },
    {
      title: 'Security Compliance Analyst',
      company: 'FinAccess Limited',
      location: 'Nairobi, Kenya',
      period: 'February 2020 – March 2022',
      achievements: [
        'Designed and implemented security onboarding processes for client systems integration',
        'Developed security frameworks improving operational security posture by 20%',
        'Created comprehensive security training programs for technical and non-technical staff',
        'Conducted security assessments tailoring controls to client business requirements'
      ],
      skills: ['Security Framework Design', 'Security Training', 'Risk Assessment', 'Security Controls']
    },
    {
      title: 'Procurement Security Analyst',
      company: 'Enable Youth Kenya Program',
      location: 'Nairobi, Kenya',
      period: 'September 2018 – December 2019',
      achievements: [
        'Conducted security evaluations of suppliers and vendors for supply chain integrity',
        'Developed secure procurement processes with built-in security controls',
        'Maintained secure, auditable documentation supporting compliance frameworks',
        'Implemented vendor security assessment protocols reducing supply chain risks'
      ],
      skills: ['Supply Chain Security', 'Vendor Security Assessment', 'Security Documentation', 'Compliance Frameworks']
    }
  ];

  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-cyber-dark/20 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Professional Experience</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Over 5 years of cybersecurity-focused experience in risk management, security compliance, 
            and third-party security assessments protecting organizational digital assets.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="cyber-glow bg-gradient-to-r from-card to-card/50 border-cyber-blue/30">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
                  <div>
                    <CardTitle className="text-xl font-bold text-foreground">{exp.title}</CardTitle>
                    <p className="text-cyber-glow font-semibold text-lg">{exp.company}</p>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center space-x-2">
                    <TrendingUp className="w-5 h-5 text-cyber-blue" />
                    <span>Key Achievements</span>
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-cyber-glow rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">Core Skills Applied</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, idx) => (
                      <Badge 
                        key={idx} 
                        variant="outline" 
                        className="text-xs border-cyber-accent/50 text-cyber-accent hover:bg-cyber-accent/10"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-cyber-blue/10 to-cyber-glow/10 border border-cyber-blue/30 rounded-lg p-6 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-foreground mb-3">Career Transition Focus</h3>
            <p className="text-muted-foreground">
              Currently leveraging my extensive background in risk management, compliance, and strategic operations 
              to build expertise in cybersecurity. My unique perspective combines business operations knowledge 
              with technical security skills, positioning me to bridge the gap between business requirements 
              and security implementation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;