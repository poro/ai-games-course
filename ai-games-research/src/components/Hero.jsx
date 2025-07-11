import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowDown, Sparkles, TrendingUp, Users, Award } from 'lucide-react';

const Hero = () => {
  const scrollToOverview = () => {
    const element = document.querySelector('#overview');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const keyStats = [
    { icon: TrendingUp, label: 'Programs Analyzed', value: '19+' },
    { icon: Users, label: 'Market Categories', value: '4' },
    { icon: Award, label: 'Unique Position', value: '#1' },
    { icon: Sparkles, label: 'Course Weeks', value: '7' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 asu-gradient opacity-10"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium">
            <Sparkles className="w-4 h-4 mr-2" />
            Comprehensive Market Research & Course Development
          </Badge>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up">
            <span className="asu-text-gradient">AI & Games</span>
            <br />
            <span className="text-foreground">Course Research</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in-up delay-200">
            Comprehensive competitive analysis, curriculum design, and market positioning 
            for ASU's innovative AI & Games course development initiative.
          </p>

          {/* Key Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 animate-fade-in-up delay-400">
            {keyStats.map((stat, index) => (
              <Card key={index} className="border-primary/20 hover:border-primary/40 transition-colors">
                <CardContent className="p-4 text-center">
                  <stat.icon className="w-6 h-6 mx-auto mb-2 text-primary" />
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-600">
            <Button 
              size="lg" 
              onClick={scrollToOverview}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3"
            >
              Explore Research
              <ArrowDown className="w-4 h-4 ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.open('#market-analysis', '_self')}
              className="border-primary text-primary hover:bg-primary/10 px-8 py-3"
            >
              View Market Analysis
            </Button>
          </div>

          {/* Research Scope */}
          <div className="mt-12 p-6 bg-card/50 backdrop-blur rounded-lg border animate-fade-in-up delay-800">
            <h3 className="text-lg font-semibold mb-3">Research Scope</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
              <div>
                <strong className="text-foreground">Global Analysis:</strong> Academic programs, online courses, industry training, and emerging platforms worldwide
              </div>
              <div>
                <strong className="text-foreground">Comprehensive Coverage:</strong> Market gaps, competitive positioning, curriculum design, and video script development
              </div>
              <div>
                <strong className="text-foreground">Strategic Insights:</strong> Unique positioning opportunities and implementation recommendations for ASU
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

