import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  Terminal, 
  Network, 
  Search, 
  Code, 
  Server, 
  Eye, 
  Lock,
  AlertTriangle,
  Cpu
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Security Testing',
      icon: Shield,
      skills: [
        'Penetration Testing',
        'Vulnerability Assessment',
        'Web Application Security',
        'Network Security Testing',
        'Social Engineering',
        'Wireless Security'
      ],
      color: 'cyber-blue'
    },
    {
      title: 'Tools & Platforms',
      icon: Terminal,
      skills: [
        'Kali Linux',
        'Burp Suite',
        'Metasploit',
        'Nmap',
        'Wireshark',
        'OWASP ZAP',
        'Nessus',
        'Wazuh SIEM'
      ],
      color: 'cyber-glow'
    },
    {
      title: 'Programming & Scripting',
      icon: Code,
      skills: [
        'Python',
        'Bash/Shell Scripting',
        'PowerShell',
        'JavaScript',
        'SQL',
        'Regular Expressions'
      ],
      color: 'cyber-accent'
    },
    {
      title: 'Threat Intelligence',
      icon: Search,
      skills: [
        'Threat Hunting',
        'Incident Response',
        'Malware Analysis',
        'OSINT',
        'IOC Analysis',
        'Threat Modeling'
      ],
      color: 'cyber-blue'
    },
    {
      title: 'Infrastructure Security',
      icon: Server,
      skills: [
        'Network Architecture',
        'Firewall Configuration',
        'IDS/IPS Systems',
        'Log Analysis',
        'Virtualization Security',
        'Cloud Security'
      ],
      color: 'cyber-glow'
    },
    {
      title: 'Compliance & Frameworks',
      icon: Lock,
      skills: [
        'NIST Framework',
        'OWASP Top 10',
        'ISO 27001',
        'Risk Assessment',
        'Security Policies',
        'Audit Preparation'
      ],
      color: 'cyber-accent'
    }
  ];

  const certifications = [
    'Certified Ethical Hacker (CEH)',
    'CompTIA Security+',
    'CISSP Associate',
    'OSCP (In Progress)',
    'CySA+ (Planned)',
    'GCIH (Planned)'
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-background to-cyber-dark/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Technical Skills</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive expertise across cybersecurity domains, from hands-on testing 
            to strategic security planning and implementation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="cyber-glow bg-gradient-to-b from-card to-card/50 border-cyber-blue/30">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 bg-${category.color}/20 rounded-lg flex items-center justify-center`}>
                    <category.icon className={`w-6 h-6 text-${category.color}`} />
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
                      className={`text-xs border-${category.color}/50 text-${category.color} hover:bg-${category.color}/10 transition-colors`}
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
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground flex items-center space-x-3">
              <AlertTriangle className="w-8 h-8 text-cyber-blue" />
              <span>Security Focus Areas</span>
            </h3>
            <div className="space-y-4">
              {[
                { name: 'Web Application Security', level: 90 },
                { name: 'Penetration Testing', level: 85 },
                { name: 'Threat Intelligence', level: 80 },
                { name: 'Incident Response', level: 75 },
                { name: 'Network Security', level: 85 },
                { name: 'Vulnerability Research', level: 80 }
              ].map((area, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-foreground font-medium">{area.name}</span>
                    <span className="text-cyber-glow text-sm">{area.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-cyber-blue to-cyber-glow rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${area.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground flex items-center space-x-3">
              <Cpu className="w-8 h-8 text-cyber-glow" />
              <span>Certifications & Learning</span>
            </h3>
            <div className="cyber-border rounded-lg p-6 bg-gradient-to-br from-card to-card/50">
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyber-blue rounded-full"></div>
                    <span className="text-foreground">{cert}</span>
                    {cert.includes('(In Progress)') && (
                      <Badge variant="secondary" className="text-xs">In Progress</Badge>
                    )}
                    {cert.includes('(Planned)') && (
                      <Badge variant="outline" className="text-xs">Planned</Badge>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-cyber-blue/10 border border-cyber-blue/30 rounded-lg p-4">
              <div className="flex items-center space-x-3">
                <Eye className="w-5 h-5 text-cyber-blue" />
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