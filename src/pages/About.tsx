import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Users, Target, Heart, Shield, Handshake, CheckCircle, Calendar } from 'lucide-react';
import teamImage from '@/assets/about.jpg';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Humility',
      description: 'CHG was born of a desire to give dignity to marginalized families. We serve all with humility and respect.',
    },
    {
      icon: Handshake,
      title: 'Partnership',
      description: 'We deliver on our mission through collaboration, forging mutual understanding and lasting friendships.',
    },
    {
      icon: Users,
      title: 'Inclusivity',
      description: 'We serve all without discrimination based on political affiliation, religion, age, ethnicity, education, or gender.',
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We do what we say, say what we do, and place transparency and accountability at the heart of everything.',
    },
    {
      icon: Target,
      title: 'Sustainability',
      description: 'We go beyond providing homes to providing practical life skills and resources for thriving communities.',
    },
  ];

  const milestones = [
    { year: '2007', event: 'MWAMKO self-help group formed by 25 families in Korogocho' },
    { year: '2008', event: 'Members start monthly contributions towards decent housing project' },
    { year: '2012', event: 'CHG comes on board as funding and project implementation partner' },
    { year: '2013', event: 'CHG trains 25 youths on construction-related skills with UN-Habitat' },
    { year: '2015', event: 'CHG purchases 2 acres in Kamulu through Commonwealth Housing Trust grant' },
    { year: '2016', event: 'Project layout and design developed and approved by Nairobi County' },
    { year: '2017', event: 'Partnership with Lotto Foundation for water infrastructure secured' },
    { year: '2019', event: 'Construction of housing units began in earnest' },
    { year: '2021', event: 'First construction lot of 5 housing units completed' },
    { year: '2022', event: 'First five families move into new homes' },
    { year: '2023', event: 'Three more families relocated to completed units' },
    { year: '2024', event: 'Four additional units completed, bringing total occupied to 12' },
  ];

  const boardMembers = [
    { name: 'Harrison Kwach', position: 'Chairperson' },
    { name: 'Abdi Mohammed', position: 'Secretary' },
    { name: 'Laurent Morton', position: 'Treasurer' },
    { name: 'Albanaous Gituru', position: 'Member' },
    { name: 'Peter Simkin', position: 'Member' },
    { name: 'Robert Ogunde', position: 'Member' },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 gradient-hope">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 gradient-community text-white border-none px-6 py-2 text-base">
              Who We Are
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-8">
              Improved Housing,
              <span className=""> Dignified Lives</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We exist to make social change. To bring dignity through affordable housing for all. 
              To make communities thrive in healthy living conditions where housing is a right, not a privilege.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <img 
                src={teamImage} 
                alt="CHG Kenya team working together" 
                className="rounded-xl shadow-soft w-full hover-lift"
              />
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-primary">Our Vision</h3>
                <p className="text-lg text-muted-foreground">Improved housing, dignified lives.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-ultra-brown">Our Mission</h3>
                <p className="text-lg text-muted-foreground">
                  We exist to restore dignity and improve the livelihoods of marginalized families in 
                  informal settlements. We measure our success by the strides we make towards lifting 
                  more families into decent homes whilst providing a pathway to social and economic self-reliance.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-accent">Our Approach</h3>
                <p className="text-lg text-muted-foreground">
                  We believe communities can eliminate poverty-traps by coming together for better living 
                  conditions. When families have secure homes, they can improve their livelihoods and 
                  build thriving communities united by dignified living.
                </p>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Our Values</h2>
            <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
              Social Change, Humanity, Community, Dignity, Ingenuity and of course... Happiness
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.slice(0, 3).map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card key={index} className="p-6 hover-lift border-none shadow-soft">
                    <CardContent className="p-0 text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 gradient-community rounded-full mb-4 shadow-warm">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            <div className="grid md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
              {values.slice(3).map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card key={index + 3} className="p-6 hover-lift border-none shadow-soft">
                    <CardContent className="p-0 text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 gradient-warm rounded-full mb-4 shadow-warm">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Our History */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our History</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-muted-foreground text-center mb-12">
              Here's how the CHG-MWAMKO partnership came to be and our journey of transformation.
            </p>
            
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 gradient-warm rounded-full text-white font-bold shadow-warm">
                      {milestone.year.slice(-2)}
                    </div>
                  </div>
                  <div className="pt-2">
                    <div className="flex items-center space-x-3 mb-2">
                      <Calendar className="w-5 h-5 text-primary" />
                      <span className="font-bold text-primary">{milestone.year}</span>
                    </div>
                    <p className="text-muted-foreground">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Board Members */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Our Board</h2>
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
            Behind our ambitious vision and mission is a collection of leaders and game-changers 
            who believe in the power of decent housing to elevate families and communities.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {boardMembers.map((member, index) => (
              <Card key={index} className="p-6 hover-lift border-none shadow-soft text-center">
                <CardContent className="p-0">
                  <div className="w-20 h-20 gradient-warm rounded-full mx-auto mb-4 flex items-center justify-center shadow-warm">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-primary font-medium">{member.position}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-warm text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Join Our Mission</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Help us continue restoring dignity and transforming lives through decent housing. 
            Every contribution makes a difference.
          </p>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="px-8 py-6 text-lg bg-white text-primary border-white hover:bg-white/90 transition-smooth"
          >
            <Heart className="w-5 h-5 mr-2" />
            Support Our Work
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;