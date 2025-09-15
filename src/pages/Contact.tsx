import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Users, Heart } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Our Location',
      details: [
        'Kamulu, Kasarani Sub-county',
        'Nairobi, Kenya',
      ],
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: [
        'info@chgkenya.org',
        'projects@chgkenya.org',
      ],
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: [
        '+254 700 000 000',
        '+254 711 000 000',
      ],
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: [
        'Monday - Friday: 8:00 AM - 5:00 PM',
        'Saturday: 9:00 AM - 1:00 PM',
      ],
    },
  ];

  const inquiryTypes = [
    { value: 'donation', label: 'Donation Inquiry' },
    { value: 'volunteer', label: 'Volunteer Opportunities' },
    { value: 'partnership', label: 'Partnership Proposal' },
    { value: 'media', label: 'Media & Press' },
    { value: 'general', label: 'General Information' },
    { value: 'other', label: 'Other' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. We'll get back to you within 24 hours.",
    });
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 gradient-hope">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 gradient-warm text-white border-none px-6 py-2 text-base">
              Get in Touch
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-8">
              Contact
              <span className="gradient-warm bg-clip-text text-transparent"> CHG Kenya</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Have questions about our work, want to partner with us, or interested in supporting our mission? 
              We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="p-6 hover-lift border-none shadow-soft text-center">
                  <CardContent className="p-0">
                    <div className="inline-flex items-center justify-center w-16 h-16 gradient-warm rounded-full mb-4 shadow-warm">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <div className="space-y-1">
                      {item.details.map((detail, idx) => (
                        <p key={idx} className="text-muted-foreground">{detail}</p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="shadow-soft border-none">
                <CardContent className="p-8">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold mb-4">Send Us a Message</h2>
                    <p className="text-muted-foreground">
                      Fill out the form below and we'll get back to you as soon as possible.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input id="firstName" required className="mt-2" />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input id="lastName" required className="mt-2" />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" required className="mt-2" />
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" className="mt-2" />
                    </div>

                    <div>
                      <Label htmlFor="inquiryType">Inquiry Type *</Label>
                      <Select required>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          {inquiryTypes.map((type) => (
                            <SelectItem key={type.value} value={type.value}>
                              {type.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input id="subject" required className="mt-2" />
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea 
                        id="message" 
                        required
                        placeholder="Tell us how we can help you..."
                        className="mt-2"
                        rows={6}
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full gradient-warm text-white py-6 text-lg btn-glow"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <Card className="shadow-soft border-none overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">Find Us</h3>
                    <p className="text-muted-foreground">
                      Kamulu, Kasarani Sub-county<br />
                      Nairobi, Kenya
                    </p>
                  </div>
                </div>
              </Card>

              {/* Quick Contact Options */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Quick Contact</h3>
                
                <Card className="p-4 hover-lift border-none shadow-soft">
                  <CardContent className="p-0">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 gradient-warm rounded-full flex items-center justify-center">
                        <Heart className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Donate Now</h4>
                        <p className="text-sm text-muted-foreground">Support our housing project directly</p>
                      </div>
                      <Button variant="outline" size="sm" className="ml-auto">
                        Donate
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-4 hover-lift border-none shadow-soft">
                  <CardContent className="p-0">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 gradient-accent rounded-full flex items-center justify-center">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Volunteer</h4>
                        <p className="text-sm text-muted-foreground">Join our team of volunteers</p>
                      </div>
                      <Button variant="outline" size="sm" className="ml-auto">
                        Join Us
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-4 hover-lift border-none shadow-soft">
                  <CardContent className="p-0">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 gradient-hero rounded-full flex items-center justify-center">
                        <MessageCircle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold">WhatsApp</h4>
                        <p className="text-sm text-muted-foreground">Chat with us directly</p>
                      </div>
                      <Button variant="outline" size="sm" className="ml-auto">
                        Chat
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <Card className="p-6 shadow-soft border-none">
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold mb-3">How can I donate to support the housing project?</h3>
                  <p className="text-muted-foreground">
                    You can donate through our secure online donation form, bank transfer, or mobile money. 
                    We accept one-time donations and monthly recurring donations to help us reach our goal 
                    of providing homes for 25 families.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 shadow-soft border-none">
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold mb-3">Can I visit the housing project site?</h3>
                  <p className="text-muted-foreground">
                    Yes! We welcome visitors to see our work firsthand. Please contact us in advance to 
                    arrange a site visit to our Kamulu project location. This helps us ensure proper 
                    coordination and safety measures.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 shadow-soft border-none">
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold mb-3">How are families selected for the housing project?</h3>
                  <p className="text-muted-foreground">
                    We have a professional and experienced selection panel that interviews and selects 
                    deserving MWAMKO applicants based on vulnerability criteria. All families must be 
                    members of the MWAMKO group from Korogocho informal settlement.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 shadow-soft border-none">
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold mb-3">How can I volunteer with CHG Kenya?</h3>
                  <p className="text-muted-foreground">
                    We welcome volunteers with various skills - from construction and project management 
                    to fundraising and community outreach. Contact us with your interests and availability, 
                    and we'll match you with opportunities that fit your skills.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-warm text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Join us in our mission to restore dignity and transform lives through decent housing. 
            Every action, big or small, makes a difference.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="outline" 
              className="px-8 py-6 text-lg bg-white text-primary border-white hover:bg-white/90 transition-smooth"
            >
              <Heart className="w-5 h-5 mr-2" />
              Donate Now
            </Button>
            <Button 
              size="lg" 
              variant="ghost" 
              className="px-8 py-6 text-lg text-white hover:bg-white/20 border border-white/30 transition-smooth"
            >
              <Users className="w-5 h-5 mr-2" />
              Become a Volunteer
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;