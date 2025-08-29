import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Github, Linkedin, Download, MapPin, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would handle form submission here
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
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
      value: 'nickmichira@gmail.com',
      href: 'mailto:nickmichira@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+254 720 075 756',
      href: 'tel:+254720075756'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/Mich1811',
      href: 'https://github.com/Mich1811'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/nicholasoyaro',
      href: 'https://www.linkedin.com/in/nicholasoyaro'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Nairobi, Kenya',
      href: null
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-cyber-dark/20 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to discuss cybersecurity opportunities or collaboration? 
            Let's connect and explore how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="cyber-glow bg-gradient-to-br from-card to-card/50 border-cyber-blue/30">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground flex items-center space-x-3">
                <Mail className="w-6 h-6 text-cyber-blue" />
                <span>Send a Message</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="cyber-border"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="cyber-border"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="cyber-border"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>
                <Button type="submit" variant="glow" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="cyber-glow bg-gradient-to-br from-card to-card/50 border-cyber-blue/30">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-cyber-blue/20 rounded-lg flex items-center justify-center">
                      <info.icon className="w-6 h-6 text-cyber-blue" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          target={info.href.startsWith('http') ? '_blank' : undefined}
                          rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-cyber-glow hover:text-cyber-blue transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="cyber-glow bg-gradient-to-br from-card to-card/50 border-cyber-blue/30">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-4">Professional Resources</h3>
                <div className="space-y-4">
                  <Button variant="cyber" className="w-full justify-start" asChild>
                    <a href="#" className="flex items-center space-x-3">
                      <Download className="w-5 h-5" />
                      <span>Download Resume (PDF)</span>
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start border-cyber-blue/50" asChild>
                    <a href="https://github.com/Mich1811" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3">
                      <Github className="w-5 h-5" />
                      <span>View GitHub Portfolio</span>
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start border-cyber-blue/50" asChild>
                    <a href="https://www.linkedin.com/in/nicholasoyaro" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3">
                      <Linkedin className="w-5 h-5" />
                      <span>LinkedIn Profile</span>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="cyber-border rounded-lg p-6 bg-gradient-to-br from-card to-card/50">
              <h3 className="text-lg font-bold text-foreground mb-3">Open to Opportunities</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Currently seeking cybersecurity roles in SOC operations, risk management, 
                and compliance. Available for full-time positions and consulting projects.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Risk Management', 'Compliance', 'Project Management', 'Remote Work'].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-cyber-blue/20 text-cyber-glow text-xs rounded-full border border-cyber-blue/30">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;