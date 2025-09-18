import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, Shield, Server, Flag, Bug, ChevronRight, Eye } from 'lucide-react';
import { useState } from 'react';

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const projects = [
    {
      title: 'Cybersecurity Home Lab',
      description: 'Comprehensive home lab environment for breach simulations and detection skill building. Features host-only 10.10.10.0/24 network with Wazuh SIEM, DVWA targets, Windows 10 endpoint, and Kali Linux attacker machine.',
      icon: Server,
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
      title: 'CTF Walkthroughs',
      description: 'Detailed documentation and solutions for Capture The Flag challenges, showcasing problem-solving approaches and security analysis techniques.',
      icon: Flag,
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
    <section id="projects" className="py-24 bg-gradient-to-b from-cyber-dark/20 to-background">
      <div className="container mx-auto px-6">
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
                    <div className="w-12 h-12 bg-cyber-blue/20 rounded-lg flex items-center justify-center hover-scale group-hover:bg-cyber-blue/40 transition-all duration-300">
                      <project.icon className="w-6 h-6 text-cyber-blue group-hover:text-white transition-colors duration-300" />
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
                        ? "This comprehensive lab environment has enabled practical skill development in breach simulation, detection engineering, and incident response workflows, providing hands-on experience with enterprise security tools."
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