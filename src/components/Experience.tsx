import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, TrendingUp } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Head of Special Projects',
      company: 'FinAccess Limited',
      location: 'Nairobi, Kenya',
      period: 'April 2022 – Present',
      achievements: [
        'Directed stakeholder interactions among cross-functional teams and senior management',
        'Conducted in-depth market research and prepared comprehensive strategic reports',
        'Reduced Procurement Costs by 15% through strategic sourcing and vendor negotiation',
        'Achieved 95% On-Time Project Delivery through optimized stakeholder communication',
        'Managed contracts and reviewed for discrepancies, mitigating legal risks'
      ],
      skills: ['Project Management', 'Risk Mitigation', 'Vendor Management', 'Strategic Planning']
    },
    {
      title: 'Onboarding Manager',
      company: 'FinAccess Limited',
      location: 'Nairobi, Kenya',
      period: 'February 2020 – March 2022',
      achievements: [
        'Collaborated across sales, finance, operations, and engineering teams',
        'Improved project efficiency by 20% through robust framework implementation',
        'Developed comprehensive learning programs for staff training',
        'Tailored account setup requirements based on client business objectives'
      ],
      skills: ['Cross-functional Leadership', 'Process Optimization', 'Training & Development']
    },
    {
      title: 'Procurement Assistant',
      company: 'Enable Youth Kenya Program',
      location: 'Nairobi, Kenya',
      period: 'September 2018 – December 2019',
      achievements: [
        'Prepared professional opinions and detailed price comparison schedules',
        'Developed and implemented effective procurement plans',
        'Maintained secure and auditable records supporting regulatory compliance'
      ],
      skills: ['Compliance Management', 'Risk Assessment', 'Documentation']
    },
    {
      title: 'Operations Manager',
      company: 'Impact Africa Industries',
      location: 'Nairobi, Kenya',
      period: 'February 2016 – May 2017',
      achievements: [
        'Provided comprehensive stock management and day-to-day operations oversight',
        'Collaborated with management team to deliver continuous operational efficiencies'
      ],
      skills: ['Operations Management', 'Team Collaboration', 'Process Improvement']
    }
  ];

  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-cyber-dark/20 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Professional Experience</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Over 5 years of experience in risk management, compliance, and strategic operations, 
            now applying this expertise to cybersecurity and digital asset protection.
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