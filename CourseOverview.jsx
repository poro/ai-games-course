import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, Award, Target, Zap, BookOpen, Code, Palette } from 'lucide-react';

const CourseOverview = () => {
  const highlights = [
    {
      icon: Clock,
      title: '45 Total Hours',
      description: '3 hours live sessions + 42 hours hands-on practice',
      color: 'text-[#00A3E0]'
    },
    {
      icon: Users,
      title: 'All Skill Levels',
      description: 'No programming experience required',
      color: 'text-[#78BE20]'
    },
    {
      icon: Award,
      title: '1 Credit Hour',
      description: 'Official ASU course credit',
      color: 'text-[#FF7F32]'
    },
    {
      icon: Target,
      title: 'Portfolio Ready',
      description: 'Build professional game projects',
      color: 'text-[#8C1D40]'
    }
  ];

  const learningOutcomes = [
    {
      icon: Zap,
      title: 'AI Tool Mastery',
      description: 'Master 15+ AI tools for game development across all domains'
    },
    {
      icon: BookOpen,
      title: 'Complete Pipeline',
      description: 'Execute full indie game development workflow with AI assistance'
    },
    {
      icon: Code,
      title: 'Technical Skills',
      description: 'AI-assisted programming, asset creation, and workflow optimization'
    },
    {
      icon: Palette,
      title: 'Creative Vision',
      description: 'Develop artistic direction and innovative game concepts'
    }
  ];

  return (
    <section id="overview" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-[#8C1D40] text-white">Course Overview</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionize Your 
            <span className="text-[#8C1D40]"> Game Development</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            This comprehensive course transforms how you create games by leveraging cutting-edge AI tools. 
            Learn to build professional-quality games faster than ever before, regardless of your technical background.
          </p>
        </div>

        {/* Course Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((highlight, index) => (
            <Card key={index} className="card-hover border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gray-100 mb-4`}>
                  <highlight.icon className={`w-6 h-6 ${highlight.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{highlight.title}</h3>
                <p className="text-gray-600 text-sm">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Learning Outcomes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">What You'll Learn</h3>
            <div className="space-y-6">
              {learningOutcomes.map((outcome, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#8C1D40] rounded-lg flex items-center justify-center">
                    <outcome.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">{outcome.title}</h4>
                    <p className="text-gray-600">{outcome.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <Card className="border-0 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-[#8C1D40] to-[#FFC627] text-white">
                <CardTitle className="text-2xl">Course Philosophy</CardTitle>
                <CardDescription className="text-white/90">
                  AI as Your Creative Partner
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#8C1D40] rounded-full"></div>
                    <span className="text-gray-700">Democratize game development through AI</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#FFC627] rounded-full"></div>
                    <span className="text-gray-700">Focus on indie game creation and rapid prototyping</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#00A3E0] rounded-full"></div>
                    <span className="text-gray-700">Balance commercial and open-source solutions</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#78BE20] rounded-full"></div>
                    <span className="text-gray-700">Build industry-relevant skills and portfolios</span>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600 italic">
                    "AI doesn't replace creativity—it amplifies it. This course teaches you to be the creative director 
                    of your AI-powered development team."
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Industry Impact */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Industry Impact</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="text-4xl font-bold text-[#8C1D40] mb-2">60-70%</div>
              <p className="text-gray-600">of studio budgets typically spent on art—now achievable in minutes</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-[#FFC627] mb-2">18 months</div>
              <p className="text-gray-600">traditional development time reduced to days with AI assistance</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-[#00A3E0] mb-2">100%</div>
              <p className="text-gray-600">of major studios integrating AI into their development pipelines</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseOverview;

