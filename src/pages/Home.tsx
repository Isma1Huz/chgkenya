import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Home as HomeIcon, Target, Heart, CheckCircle, Star, Award, TrendingUp, Building, Droplets, Zap } from 'lucide-react';
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

  const impactStories = [
    {
      name: 'Serra Odhiambo',
      impact: 'Privacy & Dignity Restored',
      story: 'Now my children have separate bedrooms and we have privacy. My life is now dignified.',
      icon: Users,
      color: 'bg-brand-green',
    },
    {
      name: 'Robert',
      impact: 'Economic Empowerment',
      story: 'Started poultry business earning $90/month, son now in school.',
      icon: TrendingUp,
      color: 'bg-ultra-brown',
    },
    {
      name: 'Maria',
      impact: 'Health Transformation',
      story: 'No more respiratory ailments since moving from overcrowded Korogocho.',
      icon: Heart,
      color: 'bg-accent',
    },
  ];

  const projectFeatures = [
    {
      title: 'Self-Contained Units',
      description: 'Each family gets privacy with separate bedrooms',
      icon: HomeIcon,
      stat: '25 Units',
      color: 'gradient-community'
    },
    {
      title: 'Clean Water Access',
      description: 'Piped water system with storage infrastructure',
      icon: Droplets,
      stat: '100% Coverage',
      color: 'gradient-accent'
    },
    {
      title: 'Modern Infrastructure',
      description: 'Electricity, sanitation, and waste management',
      icon: Zap,
      stat: '2 Acres',
      color: 'gradient-warm'
    },
    {
      title: 'Skills Training',
      description: 'Construction training for community youth',
      icon: Building,
      stat: '25 Youth',
      color: 'gradient-hero'
    },
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
          <Badge className="mb-6 gradient-community text-white border-none px-6 py-2 text-base">
            Restoring Dignity, Transforming Lives
          </Badge>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            A Decent Home Has the
            <span className="gradient-warm bg-clip-text text-transparent"> Power to Transform</span> a Life
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-white/90 leading-relaxed">
            Together we can make affordable housing for all. There's dignity in that. 
            Commonwealth Housing Group Kenya is joining hands with 25 families from Korogocho 
            to break the cycle and create hope for 180 lives.
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
            <h2 className="text-3xl md:text-5xl font-bold mb-8">We Believe...</h2>
            <div className="text-4xl md:text-6xl font-bold text-ultra-brown mb-6">
              Slums are not a permanent problem.
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed">
              They are "poverty and social-traps" that can be eliminated by communities coming together 
              in agreement for better living conditions that bring back dignity. We exist to make social change.
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
              <h3 className="text-2xl md:text-3xl font-bold">Community Transformation</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brand-green rounded-full mt-3"></div>
                  <p className="text-muted-foreground">200,000 people deserve dignified living in Korogocho</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3"></div>
                  <p className="text-muted-foreground">Communities united by the vision of better living conditions</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-ultra-brown rounded-full mt-3"></div>
                  <p className="text-muted-foreground">Breaking the cycle through community participation and hope</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-bright-yellow rounded-full mt-3"></div>
                  <p className="text-muted-foreground">Building thriving communities of people united by dignified living</p>
                </div>
              </div>
              <div className="pt-4">
                <h4 className="text-xl font-semibold text-brand-green mb-2">Together, we can make this change!</h4>
                <p className="text-muted-foreground">Join us in bringing dignity back through community-led transformation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stories Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">Stories of Transformation</h2>
            <p className="text-xl text-muted-foreground">
              Real families, real change. Hear how dignified housing has transformed lives.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {impactStories.map((story, index) => {
              const Icon = story.icon;
              return (
                <Card key={index} className="relative overflow-hidden hover-lift border-none shadow-soft">
                  <CardContent className="p-6">
                    <div className={`inline-flex items-center justify-center w-12 h-12 ${story.color} rounded-full mb-4`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{story.name}</h3>
                    <div className="text-sm font-semibold text-primary mb-3">{story.impact}</div>
                    <p className="text-muted-foreground italic">"{story.story}"</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modern Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">Project Features</h2>
            <p className="text-xl text-muted-foreground">
              Every detail designed for dignity, community, and sustainable living.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projectFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="group relative overflow-hidden hover-lift border-none shadow-soft">
                  <CardContent className="p-6 text-center">
                    <div className={`inline-flex items-center justify-center w-16 h-16 ${feature.color} rounded-full mb-4 shadow-warm group-hover:scale-110 transition-smooth`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-primary mb-2">{feature.stat}</div>
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Community Partnership Section */}
      <section className="py-20 gradient-hope">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-ultra-brown text-white border-none px-4 py-2">
                Community Partnership
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                The CHG-MWAMKO Partnership
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                MWAMKO (Mwito Wa Makao Korogocho) means "a call for better homes for the people of Korogocho." 
                This community-led initiative started in 2007 when 25 families came together with a shared vision 
                of dignified living.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-ultra-brown">2007</div>
                  <div className="text-sm text-muted-foreground">Community Started</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">2012</div>
                  <div className="text-sm text-muted-foreground">CHG Partnership</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-green">2015</div>
                  <div className="text-sm text-muted-foreground">Land Purchased</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-bright-yellow">2024</div>
                  <div className="text-sm text-muted-foreground">12 Units Complete</div>
                </div>
              </div>
              <Button className="gradient-community text-white btn-glow" asChild>
                <Link to="/about">
                  <Award className="w-4 h-4 mr-2" />
                  Learn Our Story
                </Link>
              </Button>
            </div>
            <div className="relative">
              <img 
                src={projectImage} 
                alt="MWAMKO community transformation" 
                className="rounded-xl shadow-soft w-full hover-lift"
              />
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-warm">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 gradient-warm rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-primary">48% Complete</div>
                    <div className="text-sm text-muted-foreground">12 of 25 Units</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Robert's Success Story - Modern Case Study */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-brand-green text-white border-none px-4 py-2">
                Success Story
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">From Crisis to Opportunity</h2>
              <p className="text-xl text-muted-foreground">
                How dignified housing became the foundation for economic empowerment
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-soft overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="p-8 lg:p-12">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 gradient-warm rounded-full flex items-center justify-center shadow-warm">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Robert's Journey</h3>
                      <p className="text-muted-foreground">From job loss to thriving entrepreneur</p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-muted-foreground mb-8">
                    Robert lost his job during COVID-19 and faced eviction from Korogocho. 
                    The housing project didn't just give him shelter—it gave him opportunity.
                  </p>
                  
                  <div className="grid grid-cols-3 gap-6 mb-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-ultra-brown mb-2">400</div>
                      <div className="text-sm text-muted-foreground">Eggs per Month</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-accent mb-2">$90</div>
                      <div className="text-sm text-muted-foreground">Monthly Income</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-brand-green mb-2">1</div>
                      <div className="text-sm text-muted-foreground">Son in School</div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-hope rounded-xl p-6">
                    <p className="italic text-foreground">
                      "The housing project was a blessing. Now I rear improved chickens, ducks, and guinea fowls. 
                      My son is in school, and I'm expanding the business. This is what dignity looks like."
                    </p>
                    <div className="mt-4 font-semibold text-primary">- Robert, Project Beneficiary</div>
                  </div>
                </div>
                
                <div className="bg-gradient-community p-8 lg:p-12 text-white flex items-center">
                  <div>
                    <h4 className="text-2xl font-bold mb-6">The Multiplier Effect</h4>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-6 h-6 mt-1 flex-shrink-0" />
                        <div>
                          <div className="font-semibold">Economic Independence</div>
                          <div className="text-white/80">Self-sustaining poultry business</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-6 h-6 mt-1 flex-shrink-0" />
                        <div>
                          <div className="font-semibold">Education Access</div>
                          <div className="text-white/80">Son enrolled in quality school</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-6 h-6 mt-1 flex-shrink-0" />
                        <div>
                          <div className="font-semibold">Community Impact</div>
                          <div className="text-white/80">Inspiring other families</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-6 h-6 mt-1 flex-shrink-0" />
                        <div>
                          <div className="font-semibold">Future Growth</div>
                          <div className="text-white/80">Plans to expand business</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Partners in Change</h2>
            <p className="text-xl text-muted-foreground">
              Working in collaboration with organizations who share our values and commitment 
              to fight poverty through decent housing.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 hover-lift border-none shadow-soft text-center">
              <CardContent className="p-0">
                <div className="w-16 h-16 gradient-hero rounded-full mx-auto mb-4 flex items-center justify-center shadow-warm">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold mb-2">Commonwealth Housing Trust (UK)</h3>
                <p className="text-sm text-muted-foreground">London-based charity funding project implementation</p>
              </CardContent>
            </Card>
            
            <Card className="p-6 hover-lift border-none shadow-soft text-center">
              <CardContent className="p-0">
                <div className="w-16 h-16 gradient-accent rounded-full mx-auto mb-4 flex items-center justify-center shadow-warm">
                  <Droplets className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold mb-2">Lotto Foundation</h3>
                <p className="text-sm text-muted-foreground">Water infrastructure and storage systems</p>
              </CardContent>
            </Card>
            
            <Card className="p-6 hover-lift border-none shadow-soft text-center">
              <CardContent className="p-0">
                <div className="w-16 h-16 gradient-warm rounded-full mx-auto mb-4 flex items-center justify-center shadow-warm">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold mb-2">UN-Habitat</h3>
                <p className="text-sm text-muted-foreground">Skills training for 25 community youth</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center">
            <p className="text-muted-foreground mb-6">
              <strong>Other Partners:</strong> LDS Charity Kenya, Aga Khan Foundation, Bamburi Cement, 
              Finlays Limited, ABSA Bank Limited, and more.
            </p>
            <Button variant="outline" className="hover-lift" asChild>
              <Link to="/about">
                View All Partners
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      <section className="py-20 gradient-community text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Join Our Community of Change</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Every contribution counts. Together we inspire, together we build, together we create 
            dignified living for families who deserve hope and happiness.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="gradient-warm text-white px-8 py-6 text-lg btn-glow hover-lift"
              asChild
            >
              <Link to="/donate">
                <Heart className="w-5 h-5 mr-2" />
                Join the Movement
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