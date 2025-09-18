import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, MapPin, Phone, Send, Github, Linkedin, MessageSquare } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission with loading animation
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'nicholas.oyaro@example.com',
      href: 'mailto:nicholas.oyaro@example.com',
      color: 'cyber-blue'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+254 700 000 000',
      href: 'tel:+254700000000',
      color: 'cyber-glow'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Nairobi, Kenya',
      href: null,
      color: 'cyber-accent'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-cyber-dark/20 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to discuss cybersecurity opportunities or collaboration? 
            Let's connect and explore how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm always interested in discussing cybersecurity challenges, sharing insights, 
                or exploring new opportunities in the security field. Whether you're looking for 
                a security analyst, want to collaborate on a project, or just want to discuss 
                the latest security trends, I'd love to hear from you.
              </p>
            </div>

            {/* Interactive contact methods */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card 
                  key={index} 
                  className={`cyber-glow bg-gradient-to-r from-card to-card/50 border-cyber-blue/30 card-hover transition-all duration-300 cursor-pointer animate-stagger-${Math.min(index + 1, 4)} ${hoveredIcon === info.label ? 'scale-105 shadow-lg' : ''}`}
                  onMouseEnter={() => setHoveredIcon(info.label)}
                  onMouseLeave={() => setHoveredIcon(null)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 bg-${info.color}/20 rounded-lg flex items-center justify-center hover-scale transition-all duration-300`}>
                        <info.icon className={`w-6 h-6 text-${info.color} ${hoveredIcon === info.label ? 'animate-bounce' : ''}`} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{info.label}</h4>
                        {info.href ? (
                          <a 
                            href={info.href} 
                            className={`text-${info.color} hover:text-white transition-colors duration-300 story-link`}
                          >
                            {info.value}
                          </a>
                        ) : (
                          <span className={`text-${info.color}`}>{info.value}</span>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <div className="space-y-4 animate-slide-in-up">
              <h4 className="text-lg font-semibold text-foreground">Follow Me</h4>
              <div className="flex space-x-4">
                <Button 
                  variant="cyber" 
                  size="lg" 
                  asChild 
                  className="hover-scale group"
                  onMouseEnter={() => setHoveredIcon('github')}
                  onMouseLeave={() => setHoveredIcon(null)}
                >
                  <a href="https://github.com/Mich1811" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                    <Github className={`w-5 h-5 ${hoveredIcon === 'github' ? 'animate-pulse' : ''}`} />
                    <span>GitHub</span>
                  </a>
                </Button>
                <Button 
                  variant="cyber" 
                  size="lg" 
                  asChild 
                  className="hover-scale group"
                  onMouseEnter={() => setHoveredIcon('linkedin')}
                  onMouseLeave={() => setHoveredIcon(null)}
                >
                  <a href="#" className="flex items-center space-x-2">
                    <Linkedin className={`w-5 h-5 ${hoveredIcon === 'linkedin' ? 'animate-pulse' : ''}`} />
                    <span>LinkedIn</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Interactive Contact Form */}
          <div className="animate-slide-in-right">
            <Card className="cyber-glow bg-gradient-to-br from-card to-card/50 border-cyber-blue/30 card-hover">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground flex items-center space-x-3">
                  <MessageSquare className="w-8 h-8 text-cyber-blue hover-scale" />
                  <span>Send a Message</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div className="group animate-stagger-1">
                      <Label htmlFor="name" className="text-foreground">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="transition-all duration-300 focus:border-cyber-blue focus:shadow-lg focus:shadow-cyber-blue/20 group-hover:border-cyber-glow/50"
                      />
                    </div>
                    <div className="group animate-stagger-2">
                      <Label htmlFor="email" className="text-foreground">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="transition-all duration-300 focus:border-cyber-blue focus:shadow-lg focus:shadow-cyber-blue/20 group-hover:border-cyber-glow/50"
                      />
                    </div>
                    <div className="group animate-stagger-3">
                      <Label htmlFor="message" className="text-foreground">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="transition-all duration-300 focus:border-cyber-blue focus:shadow-lg focus:shadow-cyber-blue/20 group-hover:border-cyber-glow/50 resize-none"
                        placeholder="Tell me about your project or opportunity..."
                      />
                    </div>
                  </div>
                  
                  <Button
                    type="submit"
                    variant="glow"
                    size="lg"
                    disabled={isSubmitting}
                    className={`w-full hover-scale transition-all duration-300 animate-stagger-4 ${isSubmitting ? 'animate-pulse' : ''}`}
                  >
                    <Send className={`w-5 h-5 mr-2 ${isSubmitting ? 'animate-spin' : ''}`} />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
        {/* Interactive floating elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-10 w-2 h-2 bg-cyber-blue/60 rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-cyber-glow/60 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-cyber-accent/60 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-cyber-blue/60 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
         </div>
      </div>
    </section>
  );
};

export default Contact;