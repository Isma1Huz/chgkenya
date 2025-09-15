import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Home as HomeIcon, Target, Heart, CheckCircle } from 'lucide-react';
import heroImage from '@/assets/hero-housing.jpg';
import projectImage from '@/assets/project-kamulu.jpg';

const Home = () => {
  const stats = [
    { number: '25', label: 'Families to Impact', icon: Users },
    { number: '180', label: 'Lives to Transform', icon: Heart },
    { number: '12', label: 'Units Completed', icon: HomeIcon },
    { number: '13', label: 'Units Remaining', icon: Target },
  ];

  const achievements = [
    'Purchased 2-acre site in Kamulu with all necessary approvals',
    'Installed piped water, tanks, and water tower infrastructure',
    'Built functional septic tank and sanitation facilities',
    '12 housing units completed, 8 families already moved in',
    '25 youths trained in construction skills by UN-Habitat',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Hope and dignity through housing" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <Badge className="mb-6 gradient-warm text-white border-none px-6 py-2 text-base">
            Restoring Dignity, Transforming Lives
          </Badge>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            A Decent Home Has the
            <span className="gradient-warm bg-clip-text text-transparent"> Power to Transform</span> a Life
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-white/90 leading-relaxed">
            Commonwealth Housing Group Kenya is providing safe and decent homes for 25 families 
            from Korogocho informal settlement, impacting 180 lives with dignity and hope.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="gradient-warm text-white px-8 py-6 text-lg btn-glow hover-lift"
              asChild
            >
              <Link to="/donate">
                <Heart className="w-5 h-5 mr-2" />
                Donate Now
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="px-8 py-6 text-lg bg-white/10 border-white/30 text-white hover:bg-white hover:text-foreground transition-smooth"
              asChild
            >
              <Link to="/projects">
                Learn More
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 gradient-hope">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 gradient-warm rounded-full mb-4 shadow-warm">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-muted-foreground font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* The Challenge Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">The Challenge</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Korogocho is one of Kenya's most densely populated informal settlements with 200,000 people 
              living on just 1.5 square kilometers next to Nairobi's largest garbage dumping site.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={projectImage} 
                alt="Housing transformation project" 
                className="rounded-xl shadow-soft w-full hover-lift"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold">Living Conditions</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                  <p className="text-muted-foreground">Lack of proper water supply, sanitation, and waste management</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                  <p className="text-muted-foreground">No access to electricity and poor infrastructure</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                  <p className="text-muted-foreground">High levels of drugs, insecurity, and unemployment</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                  <p className="text-muted-foreground">Chronic diseases and harmful effects on child development</p>
                </div>
              </div>
              <div className="pt-4">
                <h4 className="text-xl font-semibold text-primary mb-2">We can change this!</h4>
                <p className="text-muted-foreground">We can restore their dignity and hope with your help.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Progress Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">Our Progress</h2>
            <p className="text-xl text-muted-foreground">
              We've made significant strides toward providing decent homes for 25 families
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="p-6 hover-lift border-none shadow-soft">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">{achievement}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-warm text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Get Involved</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Every contribution counts. With your help, we can turn the dream of a safe home 
            into reality for 13 more families who deserve to live with dignity.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="outline" 
              className="px-8 py-6 text-lg bg-white text-primary border-white hover:bg-white/90 transition-smooth"
              asChild
            >
              <Link to="/donate">
                <Heart className="w-5 h-5 mr-2" />
                Donate Today
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="ghost" 
              className="px-8 py-6 text-lg text-white hover:bg-white/20 border border-white/30 transition-smooth"
              asChild
            >
              <Link to="/about">
                Learn About Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;