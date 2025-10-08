import { Button } from '@/components/ui/button';
import { Shield, ExternalLink, MousePointer2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import heroImage from '@/assets/cyber-hero.jpg';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState('');
  
  const title = 'Cybersecurity Analyst';

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (!isDeleting && displayText.length < title.length) {
      // Typing
      timer = setTimeout(() => {
        setDisplayText(title.slice(0, displayText.length + 1));
      }, 100);
    } else if (!isDeleting && displayText.length === title.length) {
      // Pause before deleting
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting && displayText.length > 0) {
      // Deleting
      timer = setTimeout(() => {
        setDisplayText(title.slice(0, displayText.length - 1));
      }, 50);
    } else if (isDeleting && displayText.length === 0) {
      // Start typing again
      setIsDeleting(false);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting]);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.3
        }}
      />
      
      {/* Interactive floating elements */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Mouse-following particles */}
        <div 
          className="absolute w-2 h-2 bg-cyber-blue rounded-full animate-pulse transition-all duration-300 ease-out"
          style={{
            left: mousePosition.x * 0.02 + 100,
            top: mousePosition.y * 0.02 + 100,
          }}
        />
        <div 
          className="absolute w-1 h-1 bg-cyber-glow rounded-full animate-ping transition-all duration-500 ease-out"
          style={{
            right: (window.innerWidth - mousePosition.x) * 0.015 + 150,
            top: mousePosition.y * 0.01 + 200,
          }}
        />
        
        {/* Floating interactive particles */}
        <div className="absolute top-20 left-20 w-3 h-3 bg-cyber-blue/70 rounded-full animate-pulse hover:scale-150 hover:bg-cyber-glow transition-all duration-300 cursor-pointer" onClick={() => {}}></div>
        <div className="absolute top-40 right-32 w-2 h-2 bg-cyber-glow/70 rounded-full animate-ping hover:scale-125 hover:bg-cyber-blue transition-all duration-300 cursor-pointer"></div>
        <div className="absolute bottom-32 left-16 w-4 h-4 bg-cyber-accent/70 rounded-full animate-pulse delay-300 hover:scale-150 hover:bg-cyber-blue transition-all duration-300 cursor-pointer"></div>
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-cyber-blue/70 rounded-full animate-ping delay-700 hover:scale-125 hover:bg-cyber-glow transition-all duration-300 cursor-pointer"></div>
        
        {/* Interactive grid lines */}
        <div className="absolute inset-0 opacity-20">
          <div className="grid grid-cols-12 grid-rows-8 h-full w-full">
            {Array.from({ length: 96 }).map((_, i) => (
              <div key={i} className="border border-cyber-blue/10 hover:border-cyber-blue/40 transition-all duration-300"></div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-20">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main heading */}
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-4 mb-6 animate-fade-in">
              <div className="relative hover-scale">
                <img 
                  src="/lovable-uploads/cb7baea7-b4a1-42af-99f4-1da5acf09d57.png" 
                  alt="Nicholas Oyaro - Cybersecurity Analyst" 
                  className="w-32 h-32 rounded-full object-cover border-4 border-cyber-blue cyber-glow"
                />
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-cyber-blue/20 rounded-full flex items-center justify-center border-2 border-cyber-blue animate-pulse">
                  <Shield className="w-6 h-6 text-cyber-blue" />
                </div>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-stagger-1">
              <span className="gradient-text">Nicholas Oyaro</span>
            </h1>
            <div className="text-2xl md:text-3xl font-semibold animate-stagger-2 min-h-[3rem] flex items-center justify-center">
              <span className="relative gradient-text">
                {displayText}
                <span className="animate-pulse text-cyber-glow">|</span>
              </span>
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-stagger-3">
            Specializing in <span className="text-cyber-blue font-semibold">Web Security</span>, 
            <span className="text-cyber-glow font-semibold"> Penetration Testing</span>, and 
            <span className="text-cyber-accent font-semibold"> Threat Intelligence</span> through hands-on projects
          </p>

          {/* Interactive expertise badges */}
          <div className="flex flex-wrap justify-center gap-4 mt-8 animate-stagger-4">
            {['Penetration Testing', 'SIEM Analysis', 'Threat Intelligence', 'Security Analysis'].map((skill, index) => (
              <div 
                key={skill} 
                className={`group cyber-border rounded-full px-6 py-3 bg-card/50 hover-scale animate-stagger-${Math.min(index + 1, 4)} cursor-pointer relative overflow-hidden`}
                onMouseEnter={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
                  e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue/20 to-cyber-glow/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                <span className="text-cyber-glow font-medium relative z-10 group-hover:text-white transition-colors duration-300">{skill}</span>
                <div 
                  className="absolute w-16 h-16 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 scale-0 group-hover:scale-100"
                  style={{
                    left: 'var(--mouse-x, 50%)',
                    top: 'var(--mouse-y, 50%)',
                    transform: 'translate(-50%, -50%) scale(var(--scale, 0))',
                  }}
                />
              </div>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex justify-center mt-12 animate-slide-in-up">
            <Button variant="glow" size="lg" asChild className="hover-scale glow-on-hover">
              <a href="#projects" className="flex items-center space-x-2">
                <ExternalLink className="w-5 h-5" />
                <span>View Projects</span>
              </a>
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in">
            <div className="w-6 h-10 border-2 border-cyber-blue rounded-full flex justify-center">
              <div className="w-1 h-3 bg-cyber-glow rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;