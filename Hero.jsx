import { Button } from '@/components/ui/button';
import { Play, ArrowRight, Sparkles, Gamepad2, Brain, Code } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#8C1D40] via-[#8C1D40] to-[#FFC627]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full blur-xl"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-[#FFC627] rounded-full blur-lg"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-white rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-[#FFC627] rounded-full blur-xl"></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <Gamepad2 className="absolute top-1/4 left-1/4 w-8 h-8 text-white/20 floating-animation" style={{ animationDelay: '0s' }} />
        <Brain className="absolute top-1/3 right-1/4 w-10 h-10 text-[#FFC627]/30 floating-animation" style={{ animationDelay: '2s' }} />
        <Code className="absolute bottom-1/3 left-1/3 w-6 h-6 text-white/25 floating-animation" style={{ animationDelay: '4s' }} />
        <Sparkles className="absolute top-1/2 right-1/3 w-7 h-7 text-[#FFC627]/25 floating-animation" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-[#FFC627]" />
            <span className="text-white text-sm font-medium">1 Credit Hour • Arizona State University</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            AI & Games
            <span className="block text-[#FFC627] gradient-text">
              Create with AI
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Master the art of game development using cutting-edge AI tools. 
            From concept to creation, learn to build amazing games with artificial intelligence as your creative partner.
          </p>

          {/* Key Features */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {[
              'No Coding Required',
              '7 Live Sessions',
              'Portfolio Building',
              'Industry Tools'
            ].map((feature) => (
              <div key={feature} className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="text-white text-sm font-medium">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-[#FFC627] hover:bg-[#FFC627]/90 text-[#8C1D40] font-semibold px-8 py-4 text-lg pulse-glow"
              onClick={() => document.getElementById('get-started')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start Your Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-[#8C1D40] px-8 py-4 text-lg"
              onClick={() => document.getElementById('overview')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-white/20">
            {[
              { number: '45', label: 'Total Hours', suffix: 'hrs' },
              { number: '7', label: 'Live Sessions', suffix: '' },
              { number: '15+', label: 'AI Tools', suffix: '' },
              { number: '100%', label: 'Portfolio Based', suffix: '' }
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#FFC627] mb-2">
                  {stat.number}{stat.suffix}
                </div>
                <div className="text-white/80 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

