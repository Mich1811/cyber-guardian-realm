import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Shield, Target, Search, Code, Network, Terminal, Eye, FileSearch, TrendingUp, TriangleAlert, Lock, FileText, ExternalLink } from 'lucide-react';
import { useState, useEffect } from 'react';
import React from 'react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('security');
  const [animatedBars, setAnimatedBars] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimatedBars(true), 500);
    return () => clearTimeout(timer);
  }, []);
  const skillCategories = [
    {
      title: 'Cybersecurity Core',
      icon: Shield,
      skills: [
        'Threat Intelligence',
        'Digital Forensics',
        'Security Governance',
        'Risk Assessment',
        'Incident Response',
        'Vulnerability Management'
      ],
      color: 'cyber-blue'
    },
    {
      title: 'SOC Operations',
      icon: Terminal,
      skills: [
        'Security Monitoring',
        'SIEM Management',
        'Threat Hunting',
        'Log Analysis',
        'Security Alerting',
        'Threat Detection'
      ],
      color: 'cyber-glow'
    },
    {
      title: 'Risk & Compliance',
      icon: Lock,
      skills: [
        'GRC Frameworks',
        'Security Auditing',
        'Compliance Management',
        'Risk Mitigation',
        'Security Policies',
        'Regulatory Compliance'
      ],
      color: 'cyber-accent'
    },
    {
      title: 'Threat Analysis',
      icon: Search,
      skills: [
        'Malware Analysis',
        'IOC Investigation',
        'Attack Vector Analysis',
        'Security Reporting',
        'Threat Intelligence',
        'Forensic Analysis'
      ],
      color: 'cyber-blue'
    }
  ];

  const certifications = [
    { name: 'Google Cybersecurity Certificate', file: '/certifications/Coursera_Cybersecurity_Google.pdf' },
    { name: 'Google Data Analytics Professional Certificate', file: '/certifications/Coursera_Data_analytics.pdf' },
    { name: 'Cybersecurity Bootcamp - Moringa School (Ongoing)', file: null },
    { name: 'Arcx 101 Cyber Threat Intelligence', file: '/certifications/Arc_x.pdf' },
    { name: 'TryHackMe Pre-Security Learning Path', file: '/certifications/Try_Hack_me_Pre_security_Learning_Path.pdf' },
    { name: 'Tata Cybersecurity Job Simulation', file: '/certifications/Tata_forage.pdf' }
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-background to-cyber-dark/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Technical Skills</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Specialized cybersecurity expertise in threat intelligence, digital forensics, 
            and SOC operations with focus on actionable security insights.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className={`cyber-glow bg-gradient-to-b from-card to-card/50 border-cyber-blue/30 card-hover animate-stagger-${Math.min(index + 1, 4)}`}>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 bg-${category.color}/20 rounded-lg flex items-center justify-center hover-scale`}>
                    {React.createElement(category.icon, { className: `w-6 h-6 text-${category.color}` })}
                  </div>
                  <CardTitle className="text-lg font-bold text-foreground">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="outline" 
                      className={`text-xs border-${category.color}/50 text-${category.color} hover:bg-${category.color}/10 transition-colors hover-scale`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Security Focus Areas */}
          <div className="space-y-6 animate-slide-in-left">
            <h3 className="text-2xl font-bold text-foreground flex items-center space-x-3 animate-fade-in">
              <TriangleAlert className="w-8 h-8 text-cyber-blue hover-scale" />
              <span>Security Focus Areas</span>
            </h3>
            <div className="space-y-4">
              {[
                { name: 'Threat Intelligence', level: 85 },
                { name: 'Digital Forensics', level: 80 },
                { name: 'SOC Operations', level: 90 },
                { name: 'Risk Assessment', level: 95 },
                { name: 'Incident Response', level: 85 },
                { name: 'Security Compliance', level: 90 }
              ].map((area, index) => (
                <div key={index} className={`space-y-2 animate-stagger-${Math.min(index + 1, 4)} hover-scale`}>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground font-medium">{area.name}</span>
                    <span className="text-cyber-glow text-sm font-semibold">{area.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden cyber-border">
                    <div 
                      className="h-full bg-gradient-to-r from-cyber-blue to-cyber-glow rounded-full transition-all duration-1000 ease-out animate-slide-in-right"
                      style={{ width: `${area.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-6 animate-slide-in-right">
            <h3 className="text-2xl font-bold text-foreground flex items-center space-x-3 animate-fade-in">
              <Eye className="w-8 h-8 text-cyber-glow hover-scale" />
              <span>Certifications & Learning</span>
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                cert.file ? (
                  <a
                    key={index}
                    href={cert.file}
                    className={`group cyber-border rounded-lg p-6 bg-gradient-to-br from-card to-card/50 card-hover glow-on-hover animate-stagger-${Math.min(index + 1, 4)} cursor-pointer transition-all duration-300 hover:scale-105`}
                  >
                    <div className="flex flex-col items-center text-center space-y-3">
                      <div className="w-16 h-16 bg-cyber-blue/20 rounded-lg flex items-center justify-center group-hover:bg-cyber-blue/30 transition-colors">
                        <FileText className="w-8 h-8 text-cyber-blue" />
                      </div>
                      <div className="space-y-2 flex-1">
                        <h4 className="font-semibold text-foreground group-hover:text-cyber-blue transition-colors">
                          {cert.name.replace(' (Ongoing)', '')}
                        </h4>
                      </div>
                      <div className="flex items-center space-x-2 text-cyber-glow text-sm">
                        <span>View Certificate</span>
                        <ExternalLink className="w-4 h-4" />
                      </div>
                    </div>
                  </a>
                ) : (
                  <div
                    key={index}
                    className={`cyber-border rounded-lg p-6 bg-gradient-to-br from-card to-card/50 animate-stagger-${Math.min(index + 1, 4)}`}
                  >
                    <div className="flex flex-col items-center text-center space-y-3">
                      <div className="w-16 h-16 bg-cyber-accent/20 rounded-lg flex items-center justify-center">
                        <FileText className="w-8 h-8 text-cyber-accent" />
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-foreground">
                          {cert.name.replace(' (Ongoing)', '')}
                        </h4>
                        <Badge variant="secondary" className="text-xs animate-pulse">Ongoing</Badge>
                      </div>
                    </div>
                  </div>
                )
              ))}
            </div>
            
            <div className="bg-cyber-blue/10 border border-cyber-blue/30 rounded-lg p-4 card-hover animate-slide-in-up">
              <div className="flex items-center space-x-3">
                <Eye className="w-5 h-5 text-cyber-blue animate-pulse" />
                <div>
                  <h4 className="font-semibold text-foreground">Continuous Learning</h4>
                  <p className="text-sm text-muted-foreground">
                    Actively pursuing advanced certifications and staying current with emerging threats
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;