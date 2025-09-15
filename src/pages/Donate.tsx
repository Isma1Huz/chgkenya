import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Heart, Home, Shield, Building2, Users, Calendar, CreditCard, Lock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState<string>('');
  const [customAmount, setCustomAmount] = useState<string>('');
  const [donationType, setDonationType] = useState<'once' | 'monthly'>('once');
  const { toast } = useToast();

  const donationTiers = [
    {
      tier: 'Tier 1: Foundational Hope',
      oneTime: 'KES 1,500,000',
      monthly: 'KES 500,000',
      impact: 'Build a complete housing unit',
      description: 'Your generous contribution will directly provide a safe and secure home for a family in need, restoring their dignity and offering a foundation for a hopeful future.',
      icon: Home,
      color: 'gradient-warm',
    },
    {
      tier: 'Tier 2: Sheltering Families',
      oneTime: 'KES 250,000+',
      monthly: 'KES 83,000+',
      impact: 'Provide essential building materials',
      description: 'Donate essential building materials like roofing, windows, or doors. Your support creates a haven for a family, sheltering them from the elements.',
      icon: Shield,
      color: 'gradient-accent',
    },
    {
      tier: 'Tier 3: Building Blocks of Change',
      oneTime: 'KES 10,000+',
      monthly: 'KES 3,300+',
      impact: 'Provide vital building blocks and cement',
      description: 'Your contribution lays the groundwork for lasting impact, providing a family with a permanent and secure structure for generations.',
      icon: Building2,
      color: 'gradient-hero',
    },
  ];

  const predefinedAmounts = {
    once: ['10000', '25000', '50000', '100000', '250000', '500000'],
    monthly: ['3300', '8300', '16700', '33300', '83000', '166700'],
  };

  const handleDonationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for your donation!",
      description: "Your contribution will help transform lives through decent housing.",
    });
  };

  const formatCurrency = (amount: string) => {
    return new Intl.NumberFormat('en-KE', {
      style: 'currency',
      currency: 'KES',
      minimumFractionDigits: 0,
    }).format(parseInt(amount));
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 gradient-hope">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 gradient-warm text-white border-none px-6 py-2 text-base">
              Make a Difference
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-8">
              Donate and Make a
              <span className="gradient-warm bg-clip-text text-transparent"> Real Difference</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Every contribution counts. With your help, we can turn the dream of a safe home
              into reality for 13 more families who deserve to live with dignity.
            </p>
          </div>
        </div>
      </section>

      {/* Donation Tiers */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Choose Your Impact</h2>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {donationTiers.map((tier, index) => {
              const Icon = tier.icon;
              return (
                <Card key={index} className="p-6 hover-lift border-none shadow-soft">
                  <CardContent className="p-0">
                    <div className={`inline-flex items-center justify-center w-16 h-16 ${tier.color} rounded-full mb-4 shadow-warm`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{tier.tier}</h3>
                    <div className="space-y-2 mb-4">
                      <div className="text-2xl font-bold text-primary">
                        Give Once: {tier.oneTime}
                      </div>
                      <div className="text-lg font-semibold text-accent">
                        Give Monthly: {tier.monthly}
                      </div>
                    </div>
                    <div className="bg-primary/10 rounded-lg p-3 mb-4">
                      <div className="font-semibold text-primary text-sm mb-1">IMPACT:</div>
                      <div className="font-medium">{tier.impact}</div>
                    </div>
                    <p className="text-muted-foreground text-sm">{tier.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-soft border-none">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-3xl font-bold">Make Your Donation</CardTitle>
                <p className="text-muted-foreground">Your contribution will directly impact families in need</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleDonationSubmit} className="space-y-8">
                  {/* Donation Type Tabs */}
                  <Tabs value={donationType} onValueChange={(value) => setDonationType(value as 'once' | 'monthly')}>
                    <TabsList className="grid w-full grid-cols-2 mb-8">
                      <TabsTrigger value="once" className="flex items-center space-x-2">
                        <Heart className="w-4 h-4" />
                        <span>Give Once</span>
                      </TabsTrigger>
                      <TabsTrigger value="monthly" className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>Give Monthly</span>
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="once">
                      <div className="space-y-6">
                        <div>
                          <Label className="text-base font-semibold mb-4 block">Select Amount (KES)</Label>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                            {predefinedAmounts.once.map((amount) => (
                              <Button
                                key={amount}
                                type="button"
                                variant={selectedAmount === amount ? "default" : "outline"}
                                className={`h-12 ${selectedAmount === amount ? 'gradient-warm text-white' : ''}`}
                                onClick={() => {
                                  setSelectedAmount(amount);
                                  setCustomAmount('');
                                }}
                              >
                                {formatCurrency(amount)}
                              </Button>
                            ))}
                          </div>
                          <div className="relative">
                            <Input
                              type="number"
                              placeholder="Enter custom amount"
                              value={customAmount}
                              onChange={(e) => {
                                setCustomAmount(e.target.value);
                                setSelectedAmount('');
                              }}
                              className="pl-12 h-12"
                            />
                            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
                              KES
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="monthly">
                      <div className="space-y-6">
                        <div>
                          <Label className="text-base font-semibold mb-4 block">Select Monthly Amount (KES)</Label>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                            {predefinedAmounts.monthly.map((amount) => (
                              <Button
                                key={amount}
                                type="button"
                                variant={selectedAmount === amount ? "default" : "outline"}
                                className={`h-12 ${selectedAmount === amount ? 'gradient-warm text-white' : ''}`}
                                onClick={() => {
                                  setSelectedAmount(amount);
                                  setCustomAmount('');
                                }}
                              >
                                {formatCurrency(amount)}/mo
                              </Button>
                            ))}
                          </div>
                          <div className="relative">
                            <Input
                              type="number"
                              placeholder="Enter custom monthly amount"
                              value={customAmount}
                              onChange={(e) => {
                                setCustomAmount(e.target.value);
                                setSelectedAmount('');
                              }}
                              className="pl-12 h-12"
                            />
                            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
                              KES
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>

                  {/* Donor Information */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" required className="mt-2" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" required className="mt-2" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" required className="mt-2" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" className="mt-2" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="country">Country *</Label>
                    <Select required>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select your country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="kenya">Kenya</SelectItem>
                        <SelectItem value="uganda">Uganda</SelectItem>
                        <SelectItem value="tanzania">Tanzania</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                        <SelectItem value="us">United States</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Message (Optional)</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Leave a message of support for the families..."
                      className="mt-2"
                      rows={4}
                    />
                  </div>

                  {/* Payment Method */}
                  <div className="space-y-4">
                    <Label className="text-base font-semibold">Payment Method</Label>
                    <div className="border rounded-lg p-4 space-y-4">
                      <div className="flex items-center space-x-3">
                        <CreditCard className="w-5 h-5 text-primary" />
                        <span className="font-medium">Credit/Debit Card</span>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="cardNumber">Card Number *</Label>
                          <Input id="cardNumber" placeholder="1234 5678 9012 3456" required className="mt-2" />
                        </div>
                        <div>
                          <Label htmlFor="expiryDate">Expiry Date *</Label>
                          <Input id="expiryDate" placeholder="MM/YY" required className="mt-2" />
                        </div>
                        <div>
                          <Label htmlFor="cvv">CVV *</Label>
                          <Input id="cvv" placeholder="123" required className="mt-2" />
                        </div>
                        <div>
                          <Label htmlFor="cardName">Cardholder Name *</Label>
                          <Input id="cardName" required className="mt-2" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Security Note */}
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start space-x-3">
                    <Lock className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div className="text-sm text-green-800">
                      <div className="font-medium mb-1">Secure Donation</div>
                      <div>Your payment information is encrypted and secure. We never store your credit card details.</div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full gradient-warm text-white py-6 text-lg btn-glow"
                  >
                    <Heart className="w-5 h-5 mr-2" />
                    Complete Donation
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Other Ways to Give */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Other Ways to Give</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6 hover-lift border-none shadow-soft text-center">
              <CardContent className="p-0">
                <div className="inline-flex items-center justify-center w-16 h-16 gradient-accent rounded-full mb-4 shadow-warm">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Become a Fundraising Volunteer</h3>
                <p className="text-muted-foreground mb-4">
                  Help us reach more donors by becoming a volunteer fundraiser for the project.
                </p>
                <Button variant="outline" className="hover-lift">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="p-6 hover-lift border-none shadow-soft text-center">
              <CardContent className="p-0">
                <div className="inline-flex items-center justify-center w-16 h-16 gradient-hero rounded-full mb-4 shadow-warm">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Host a Fundraising Event</h3>
                <p className="text-muted-foreground mb-4">
                  Organize an event in your community to raise funds for the housing project.
                </p>
                <Button variant="outline" className="hover-lift">
                  Get Started
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;
