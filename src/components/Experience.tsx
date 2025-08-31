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
        'Directed and streamlined interactions among stakeholders, cross-functional teams, and senior management',
        'Conducted in-depth market research and prepared comprehensive reports to guide project strategies',
        'Reduced Procurement Costs by 15% through strategic sourcing and negotiation with reliable suppliers and vendors',
        'Managed contracts and reviewed them for discrepancies, mitigating legal risks and ensuring compliance',
        'Achieved 95% On-Time Project Delivery by optimizing stakeholder communication and managing cross-functional teams effectively'
      ],
      skills: ['Project Management', 'Stakeholder Management', 'Contract Management', 'Strategic Sourcing', 'Compliance']
    },
    {
      title: 'Onboarding Manager',
      company: 'FinAccess Limited',
      location: 'Nairobi, Kenya',
      period: 'February 2020 – March 2022',
      achievements: [
        'Collaborated with sales, finance, operations, and engineering teams to ensure a seamless client onboarding process',
        'Developed a deep understanding of client business and operational objectives to tailor account setup requirements',
        'Improved project efficiency by 20% by implementing a robust framework that optimized coordination between senior management and teams',
        'Designed, developed, and delivered learning programs, training top management and staff on system usage'
      ],
      skills: ['Client Onboarding', 'Cross-functional Collaboration', 'Training & Development', 'Process Optimization']
    },
    {
      title: 'Procurement Assistant',
      company: 'Enable Youth Kenya Program',
      location: 'Nairobi, Kenya',
      period: 'September 2018 – December 2019',
      achievements: [
        'Prepared professional opinions and detailed price comparison schedules',
        'Developed and implemented an effective procurement plan',
        'Maintained secure and auditable records of procurement documents, supporting compliance with regulatory frameworks'
      ],
      skills: ['Procurement Planning', 'Price Analysis', 'Compliance Documentation', 'Vendor Management']
    }
  ];

  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-cyber-dark/20 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Professional Experience</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Over 10 years of progressive experience in project management, risk management, compliance, 
            and strategic operations across various industries. Proven track record in stakeholder management, 
            process optimization, and driving operational efficiencies.
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