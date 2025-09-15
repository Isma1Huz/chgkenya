import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 gradient-community rounded-lg flex items-center justify-center shadow-warm">
                <Home className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl">CHG Kenya</span>
            </div>
            <p className="text-background/80 text-sm">
              Restoring dignity and transforming lives through decent housing for marginalized families in Kenya.
            </p>
            <div className="flex space-x-4">
              <Button size="icon" variant="ghost" className="text-background/80 hover:text-background hover:bg-ultra-brown/20">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-background/80 hover:text-background hover:bg-accent/20">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-background/80 hover:text-background hover:bg-brand-green/20">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-background/80 hover:text-background hover:bg-secondary/20">
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <div className="space-y-3">
              <Link to="/about" className="block text-background/80 hover:text-background transition-smooth">
                About Us
              </Link>
              <Link to="/projects" className="block text-background/80 hover:text-background transition-smooth">
                Our Work
              </Link>
              <Link to="/donate" className="block text-background/80 hover:text-background transition-smooth">
                Donate
              </Link>
              <Link to="/contact" className="block text-background/80 hover:text-background transition-smooth">
                Contact
              </Link>
            </div>
          </div>

          {/* Our Work */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Work</h3>
            <div className="space-y-3">
              <a href="#" className="block text-background/80 hover:text-background transition-smooth">
                Korogocho Project
              </a>
              <a href="#" className="block text-background/80 hover:text-background transition-smooth">
                Skills Training
              </a>
              <a href="#" className="block text-background/80 hover:text-background transition-smooth">
                Community Development
              </a>
              <a href="#" className="block text-background/80 hover:text-background transition-smooth">
                Impact Stories
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-ultra-brown mt-0.5" />
                <span className="text-background/80 text-sm">
                  Kamulu, Kasarani Sub-county<br />
                  Nairobi, Kenya
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent" />
                <span className="text-background/80 text-sm">info@chgkenya.org</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-brand-green" />
                <span className="text-background/80 text-sm">+254 700 000 000</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 text-center">
          <p className="text-background/60 text-sm">
            © 2024 Commonwealth Housing Group Kenya. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;