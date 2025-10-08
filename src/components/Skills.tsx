import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Shield, Target, Search, Code, Network, Terminal, Eye, FileSearch, TrendingUp, TriangleAlert, Lock, FileText, ExternalLink } from 'lucide-react';
import { useState, useEffect } from 'react';
import React from 'react';
import googleCyber from '@/assets/certs/cybersecurity-google.jpg';
import googleData from '@/assets/certs/data-analytics.jpg';
import arcx from '@/assets/certs/arcx.jpg';
import tryhackme from '@/assets/certs/tryhackme-badges.png';
import tata from '@/assets/certs/tata.jpg';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('security');
  const [animatedBars, setAnimatedBars] = useState(false);
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

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
      bgColor: 'bg-red-500/20',
      iconColor: 'text-red-500',
      hoverBg: 'hover:bg-red-500/30',
      borderColor: 'border-red-500/50',
      badgeHover: 'hover:bg-red-500/10'
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
      bgColor: 'bg-purple-500/20',
      iconColor: 'text-purple-500',
      hoverBg: 'hover:bg-purple-500/30',
      borderColor: 'border-purple-500/50',
      badgeHover: 'hover:bg-purple-500/10'
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
      bgColor: 'bg-green-500/20',
      iconColor: 'text-green-500',
      hoverBg: 'hover:bg-green-500/30',
      borderColor: 'border-green-500/50',
      badgeHover: 'hover:bg-green-500/10'
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
      bgColor: 'bg-amber-500/20',
      iconColor: 'text-amber-500',
      hoverBg: 'hover:bg-amber-500/30',
      borderColor: 'border-amber-500/50',
      badgeHover: 'hover:bg-amber-500/10'
    }
  ];

  const certifications = [
    { name: 'Google Cybersecurity Certificate', image: googleCyber },
    { name: 'Google Data Analytics Professional Certificate', image: googleData },
    { name: 'Cybersecurity Bootcamp - Moringa School (Ongoing)', image: null },
    { name: 'Arcx 101 Cyber Threat Intelligence', image: arcx },
    { name: 'TryHackMe Pre-Security Learning Path', image: tryhackme },
    { name: 'Tata Cybersecurity Job Simulation', image: tata }
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className={`group cyber-glow bg-gradient-to-b from-card to-card/50 border-cyber-blue/30 card-hover animate-stagger-${Math.min(index + 1, 4)} transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer`}
              onClick={() => setActiveCategory(activeCategory === category.title ? '' : category.title)}
            >
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className={`w-14 h-14 ${category.bgColor} rounded-lg flex items-center justify-center hover-scale transition-all duration-300 group-hover:scale-110 ${category.hoverBg}`}>
                    {React.createElement(category.icon, { className: `w-7 h-7 ${category.iconColor} transition-all duration-300 group-hover:rotate-12` })}
                  </div>
                  <CardTitle className="text-lg font-bold text-foreground group-hover:text-cyber-glow transition-colors">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skill} 
                      variant="outline" 
                      className={`text-xs ${category.borderColor} ${category.iconColor} ${category.badgeHover} transition-all duration-300 hover-scale cursor-pointer hover:shadow-md animate-fade-in`}
                      style={{ animationDelay: `${skillIndex * 50}ms` }}
                      onClick={(e) => {
                        e.stopPropagation();
                        // Could add skill detail modal here
                      }}
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
                { name: 'Threat Intelligence', level: 85, icon: Search, color: 'text-blue-500' },
                { name: 'Digital Forensics', level: 80, icon: FileSearch, color: 'text-purple-500' },
                { name: 'SOC Operations', level: 90, icon: Terminal, color: 'text-green-500' },
                { name: 'Risk Assessment', level: 95, icon: TriangleAlert, color: 'text-amber-500' },
                { name: 'Incident Response', level: 85, icon: Shield, color: 'text-red-500' },
                { name: 'Security Compliance', level: 90, icon: Lock, color: 'text-cyan-500' }
              ].map((area, index) => (
                <div key={index} className={`space-y-2 animate-stagger-${Math.min(index + 1, 4)} group cursor-pointer`}>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      {React.createElement(area.icon, { className: `w-5 h-5 ${area.color} transition-all duration-300 group-hover:scale-125 group-hover:rotate-12` })}
                      <span className="text-foreground font-medium group-hover:text-cyber-glow transition-colors">{area.name}</span>
                    </div>
                    <span className="text-cyber-glow text-sm font-semibold group-hover:scale-110 transition-transform">{area.level}%</span>
                  </div>
                  <div className="h-3 bg-secondary rounded-full overflow-hidden cyber-border group-hover:h-4 transition-all duration-300">
                    <div 
                      className="h-full bg-gradient-to-r from-cyber-blue via-cyber-glow to-cyber-accent rounded-full transition-all duration-1000 ease-out animate-slide-in-right group-hover:shadow-lg"
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
                cert.image ? (
                  <button
                    key={index}
                    onClick={() => setSelectedCert(cert.image)}
                    className={`group cyber-border rounded-lg overflow-hidden bg-gradient-to-br from-card to-card/50 card-hover glow-on-hover animate-stagger-${Math.min(index + 1, 4)} cursor-pointer transition-all duration-300 hover:scale-105`}
                  >
                    <div className="aspect-[4/3] w-full overflow-hidden relative">
                      <img 
                        src={cert.image} 
                        alt={cert.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4 space-y-2">
                      <h4 className="font-semibold text-foreground text-sm line-clamp-2">
                        {cert.name}
                      </h4>
                      <div className="flex items-center justify-center space-x-2 text-cyber-glow text-xs">
                        <span>View Certificate</span>
                        <ExternalLink className="w-3 h-3" />
                      </div>
                    </div>
                  </button>
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
            
            <Dialog open={!!selectedCert} onOpenChange={() => setSelectedCert(null)}>
              <DialogContent className="max-w-6xl max-h-[90vh]">
                <DialogHeader>
                  <DialogTitle>Certificate</DialogTitle>
                </DialogHeader>
                <div className="w-full h-[75vh] overflow-auto">
                  <img 
                    src={selectedCert || ''} 
                    alt="Certificate"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </DialogContent>
            </Dialog>
            
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