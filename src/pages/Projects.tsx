import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Link } from 'react-router-dom';
import { Home, Users, Droplets, Zap, GraduationCap, Heart, CheckCircle, ArrowRight } from 'lucide-react';
import projectImage from '@/assets/project-kamulu.jpg';

const Projects = () => {
  const projectStats = [
    { label: 'Total Families', value: '25', progress: 48, icon: Users },
    { label: 'Units Completed', value: '12/25', progress: 48, icon: Home },
    { label: 'People Impacted', value: '86/180', progress: 48, icon: Heart },
    { label: 'Remaining Units', value: '13', progress: 52, icon: Home },
  ];

  const features = [
    {
      icon: Home,
      title: 'Self-Contained Units',
      description: 'Each family gets privacy and dignity with separate bedrooms for boys, girls, and parents.',
    },
    {
      icon: Droplets,
      title: 'Clean Water Access',
      description: 'Piped water system with tanks and water tower courtesy of Lotto Foundation.',
    },
    {
      icon: Zap,
      title: 'Modern Infrastructure',
      description: 'Electricity, proper sanitation, and waste management systems.',
    },
    {
      icon: GraduationCap,
      title: 'Skills Training',
      description: '25 youths trained in construction skills through UN-Habitat partnership.',
    },
  ];

  const testimonials = [
    {
      name: 'Serra Odhiambo',
      quote: 'I used to live in Korogocho in a single room with my husband and 6 children. Now my children have separate bedrooms and we have privacy. My life is now dignified.',
      impact: 'Privacy and Dignity Restored',
    },
    {
      name: 'Robert',
      quote: 'I was facing eviction from Korogocho for being unable to pay rent after losing my job due to COVID-19. Coming to this project was a blessing and great relief.',
      impact: 'New Beginning After Crisis',
    },
    {
      name: 'Maria',
      quote: 'Treating respiratory ailments was a norm during my stay in overcrowded Korogocho. Since coming to Kamulu, I have never suffered any respiratory ailment.',
      impact: 'Health and Wellness Restored',
    },
  ];

  const achievements = [
    'Purchased 2-acre site in Kamulu with all necessary documentation and approvals',
    'Availed piped water infrastructure with tanks and water tower',
    'Built functional septic tank and sanitation facilities',
    '12 housing units constructed, 8 families already relocated',
    'No reported cases of airborne diseases since relocation',
    'Families exhibit high self-esteem due to dignified living conditions',
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 gradient-hope">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 gradient-warm text-white border-none px-6 py-2 text-base">
              Our Work
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-8">
              Transforming Lives,
              <span className="gradient-warm bg-clip-text text-transparent"> One Home at a Time</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Our flagship project is relocating 25 families from Korogocho informal settlement 
              to decent, safe homes in Kamulu, impacting 180 lives.
            </p>
          </div>
        </div>
      </section>

      {/* Project Progress */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Project Progress</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {projectStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card key={index} className="p-6 hover-lift border-none shadow-soft">
                    <CardContent className="p-0 text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 gradient-warm rounded-full mb-4 shadow-warm">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                      <div className="text-muted-foreground font-medium mb-4">{stat.label}</div>
                      <Progress value={stat.progress} className="h-2" />
                      <div className="text-sm text-muted-foreground mt-2">{stat.progress}% Complete</div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src={projectImage} 
                  alt="Kamulu housing project" 
                  className="rounded-xl shadow-soft w-full hover-lift"
                />
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold">The Kamulu Project</h3>
                <p className="text-lg text-muted-foreground">
                  Located in Kamulu, Kasarani Sub-county on the outskirts of Nairobi, our 2-acre site 
                  provides a safe, healthy environment away from the challenges of Korogocho.
                </p>
                <div className="space-y-4">
                  {achievements.slice(0, 3).map((achievement, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <p className="text-muted-foreground">{achievement}</p>
                    </div>
                  ))}
                </div>
                <Button className="gradient-warm text-white btn-glow" asChild>
                  <Link to="/donate">
                    <Heart className="w-4 h-4 mr-2" />
                    Support This Project
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Features */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Project Features</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="p-6 hover-lift border-none shadow-soft text-center">
                  <CardContent className="p-0">
                    <div className="inline-flex items-center justify-center w-16 h-16 gradient-accent rounded-full mb-4 shadow-soft">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Success Stories</h2>
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
            Hear directly from the families whose lives have been transformed by decent housing.
          </p>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover-lift border-none shadow-soft">
                <CardContent className="p-0">
                  <div className="text-4xl text-primary mb-4">"</div>
                  <p className="text-muted-foreground mb-6 italic">{testimonial.quote}</p>
                  <div className="border-t pt-4">
                    <div className="font-semibold text-primary">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.impact}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study - Robert's Poultry Business */}
      <section className="py-20 gradient-hope">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Case Study: Economic Empowerment</h2>
            <div className="bg-white rounded-xl p-8 shadow-soft">
              <h3 className="text-2xl font-bold mb-4 text-primary">Robert's Success Story</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Robert, who lost his job during COVID-19, has since started rearing improved chicken breeds, 
                local chickens, Muscovy ducks, and guinea fowls in Kamulu.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">400</div>
                  <div className="text-muted-foreground">Eggs per month</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">$90</div>
                  <div className="text-muted-foreground">Monthly income</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">1</div>
                  <div className="text-muted-foreground">Son in school</div>
                </div>
              </div>
              <p className="text-muted-foreground">
                From the proceeds, Robert pays for savings, monthly expenses, and has enrolled his son 
                in junior high school. He's looking to expand this viable business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Remaining Achievements */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Impact So Far</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {achievements.slice(3).map((achievement, index) => (
              <Card key={index + 3} className="p-6 hover-lift border-none shadow-soft">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Help Us Complete This Project</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            We need to construct 13 more housing units to reach our goal of 25 families. 
            With your support, we can complete this transformation.
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
                Donate Now
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="ghost" 
              className="px-8 py-6 text-lg text-white hover:bg-white/20 border border-white/30 transition-smooth"
              asChild
            >
              <Link to="/contact">
                Learn More
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;