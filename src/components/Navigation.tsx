import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Home, Users, FolderOpen, Heart, Phone } from 'lucide-react';
import logo from '@/assets/logo_2.png';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About', path: '/about', icon: Users },
    { name: 'Our Work', path: '/projects', icon: FolderOpen },
    { name: 'Donate', path: '/donate', icon: Heart },
    { name: 'Contact', path: '/contact', icon: Phone },
  ];

  const isActive = (path: string) => location.pathname === path;

    const navigate = useNavigate();
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#472D8B] ">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
             <img src={logo} className=" text-white w-full h-[4rem]" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center space-x-1 transition-smooth hover:text-ultra-brown ${
                    isActive(item.path) ? 'text-ultra-brown font-medium' : 'text-white'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
           <Button
                variant="default"
                onClick={() => navigate("/donate")}
                className="gradient-community text-white btn-glow shadow-hope mt-4"
              >
                <Heart className="w-4 h-4 mr-2" />
                Donate Now
              </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-smooth"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center space-x-3 p-2 rounded-lg transition-smooth hover:bg-muted ${
                      isActive(item.path) ? 'text-ultra-brown bg-ultra-brown/10' : 'text-muted-foreground'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
              
              <Button
                variant="default"
                onClick={() => navigate("/donate")}
                className="gradient-community text-white btn-glow shadow-hope mt-4"
              >
                <Heart className="w-4 h-4 mr-2" />
                Donate Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;