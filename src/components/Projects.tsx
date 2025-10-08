import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, Shield, Server, Flag, Bug, ChevronRight, Eye, Globe } from 'lucide-react';
import { useState } from 'react';
import projectsBg from '@/assets/projects-cyber-bg.jpg';

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const projects = [
    {
      title: 'Professional Penetration Testing',
      description: 'Comprehensive penetration test reports documenting security assessments performed on authorized systems. Includes vulnerability analysis, exploitation techniques, and detailed remediation recommendations.',
      icon: Shield,
      iconColor: 'text-red-500',
      iconBgColor: 'bg-red-500/20',
      iconBgHover: 'group-hover:bg-red-500/40',
      technologies: ['Penetration Testing', 'Vulnerability Assessment', 'Security Auditing', 'Risk Analysis'],
      github: 'https://github.com/Mich1811/Penetration-Test',
      category: 'Security Assessment',
      highlights: [
        'Professional pentest reports',
        'Vulnerability identification',
        'Security recommendations',
        'Compliance documentation'
      ]
    },
    {
      title: 'Secure Barber Shop Web App (LAMP Stack)',
      description: 'Full-stack web application built with LAMP stack (Linux, Apache, MySQL, PHP) featuring secure authentication, appointment booking system, and admin dashboard with focus on security best practices.',
      icon: Globe,
      iconColor: 'text-cyan-500',
      iconBgColor: 'bg-cyan-500/20',
      iconBgHover: 'group-hover:bg-cyan-500/40',
      technologies: ['PHP', 'MySQL', 'Apache', 'Linux', 'HTML/CSS', 'JavaScript'],
      github: 'https://github.com/Mich1811/barber-shop',
      category: 'Web Development',
      highlights: [
        'Secure user authentication',
        'Appointment management system',
        'Admin dashboard',
        'SQL injection prevention'
      ]
    },
    {
      title: 'Cybersecurity Home Lab',
      description: 'Comprehensive home lab environment for breach simulations and detection skill building. Features host-only 10.10.10.0/24 network with Wazuh SIEM, DVWA targets, Windows 10 endpoint, and Kali Linux attacker machine.',
      icon: Server,
      iconColor: 'text-purple-500',
      iconBgColor: 'bg-purple-500/20',
      iconBgHover: 'group-hover:bg-purple-500/40',
      technologies: ['Wazuh SIEM', 'DVWA', 'Kali Linux', 'Windows 10', 'Network Security'],
      github: 'https://github.com/Mich1811/Home-lab',
      category: 'Infrastructure',
      highlights: [
        'Multi-machine network setup',
        'SIEM telemetry collection',
        'Realistic attack scenarios',
        'Detection engineering practice'
      ]
    },
    {
      title: 'CVE Exploit Development',
      description: 'Custom exploit for CVE-2019-9053, adapted for Python 3 with enhanced compatibility for different text encodings. Compatible with CMSMS version 2.2.9 and below.',
      icon: Bug,
      iconColor: 'text-green-500',
      iconBgColor: 'bg-green-500/20',
      iconBgHover: 'group-hover:bg-green-500/40',
      technologies: ['Python 3', 'Exploit Development', 'CVE Research', 'CMSMS'],
      github: 'https://github.com/Mich1811/CVE-2019-9053-Exploit-Python-3',
      category: 'Vulnerability Research',
      highlights: [
        'CVE exploitation',
        'Python 3 compatibility',
        'Encoding adaptations',
        'Security research'
      ]
    },
    {
      title: 'CTF Walkthroughs',
      description: 'Detailed documentation and solutions for Capture The Flag challenges, showcasing problem-solving approaches and security analysis techniques.',
      icon: Flag,
      iconColor: 'text-amber-500',
      iconBgColor: 'bg-amber-500/20',
      iconBgHover: 'group-hover:bg-amber-500/40',
      technologies: ['CTF', 'Documentation', 'Security Analysis', 'Problem Solving'],
      github: 'https://github.com/Mich1811/CTF-walkthroughs',
      category: 'Security Analysis',
      highlights: [
        'Challenge analysis',
        'Solution documentation',
        'Security methodology',
        'Knowledge sharing'
      ]
    }
  ];

  return (
    <section 
      id="projects" 
      className="py-24 relative bg-gradient-to-b from-cyber-dark/20 to-background"
      style={{
        backgroundImage: `url(${projectsBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-background/90 backdrop-blur-sm"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hands-on cybersecurity projects demonstrating practical skills in vulnerability research, 
            security testing, and infrastructure development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`cyber-glow bg-gradient-to-br from-card to-card/50 border-cyber-blue/30 h-full card-hover glow-on-hover animate-stagger-${Math.min(index + 1, 4)} transition-all duration-500 ${expandedProject === index ? 'scale-105 shadow-2xl shadow-cyber-blue/20' : ''} cursor-pointer group`}
              onClick={() => setExpandedProject(expandedProject === index ? null : index)}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 ${project.iconBgColor} rounded-lg flex items-center justify-center hover-scale ${project.iconBgHover} transition-all duration-300`}>
                      <project.icon className={`w-6 h-6 ${project.iconColor} group-hover:text-white transition-colors duration-300`} />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold text-foreground group-hover:text-cyber-glow transition-colors duration-300">{project.title}</CardTitle>
                      <Badge variant="secondary" className="mt-1 text-xs group-hover:bg-cyber-blue/20 transition-colors duration-300">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex space-x-2 items-center">
                    <Button variant="ghost" size="icon" asChild className="hover-scale" onClick={(e) => e.stopPropagation()}>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button variant="ghost" size="icon" className="hover-scale">
                      <Eye className="w-4 h-4" />
                    </Button>
                    <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${expandedProject === index ? 'rotate-90' : ''}`} />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-cyber-blue rounded-full"></div>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={tech} 
                        variant="outline" 
                        className="text-xs border-cyber-blue/50 text-cyber-glow hover-scale hover:bg-cyber-blue/20 hover:border-cyber-blue cursor-pointer transition-all duration-300"
                        style={{ animationDelay: `${techIndex * 100}ms` }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Expanded content */}
                <div className={`transition-all duration-500 overflow-hidden ${expandedProject === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="pt-4 space-y-3 border-t border-cyber-blue/20 mt-4">
                    <h4 className="font-semibold text-cyber-glow">Project Impact:</h4>
                    <p className="text-sm text-muted-foreground">
                      {index === 0 
                        ? "Professional penetration testing reports demonstrating systematic security assessment methodologies, from reconnaissance to exploitation and remediation, following industry-standard frameworks and best practices."
                        : index === 1
                        ? "A secure web application demonstrating practical implementation of security principles in a LAMP stack environment, including input validation, prepared statements, session management, and secure password handling using industry-standard hashing algorithms."
                        : index === 2
                        ? "This comprehensive lab environment has enabled practical skill development in breach simulation, detection engineering, and incident response workflows, providing hands-on experience with enterprise security tools."
                        : index === 3
                        ? "Demonstrates vulnerability research capabilities and exploit development skills, with focus on adapting existing exploits for modern environments and ensuring compatibility across different system configurations."
                        : "These detailed walkthroughs have contributed to the cybersecurity community by documenting methodical approaches to complex security challenges, helping others learn practical problem-solving techniques."
                      }
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-slide-in-up">
          <Button variant="cyber" size="lg" asChild className="hover-scale glow-on-hover">
            <a href="https://github.com/Mich1811" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
              <Github className="w-5 h-5" />
              <span>View All Projects on GitHub</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;