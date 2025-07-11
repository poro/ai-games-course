import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Play, 
  Clock, 
  Users, 
  Palette, 
  Music, 
  Code, 
  Workflow, 
  Sparkles, 
  Trophy,
  ChevronRight,
  Download
} from 'lucide-react';

const Curriculum = () => {
  const weeks = [
    {
      week: 1,
      title: 'AI Revolution in Game Development',
      duration: '30 min',
      icon: Sparkles,
      color: 'bg-[#8C1D40]',
      description: 'Explore the AI landscape and create your first AI-generated game',
      topics: [
        'Industry impact and game design theory',
        'Live demonstration: First AI game creation',
        'Tool setup and community introduction',
        'Assignment: AI Tool Exploration & First Games (5 hours)'
      ],
      tools: ['Rosebud AI', 'Bitmagic', 'Prompt Engineering']
    },
    {
      week: 2,
      title: 'Visual Asset Creation & Art Direction',
      duration: '30 min',
      icon: Palette,
      color: 'bg-[#FFC627]',
      description: 'Master 2D and 3D asset generation with consistent visual style',
      topics: [
        'Art direction theory and professional standards',
        'Live demo: Complete asset creation workflow',
        'Style consistency and optimization techniques',
        'Assignment: Visual Asset Creation & Style Development (5 hours)'
      ],
      tools: ['Midjourney', 'DALL-E', 'Meshy AI', 'Blender Integration']
    },
    {
      week: 3,
      title: 'Audio Design & Music Creation',
      duration: '30 min',
      icon: Music,
      color: 'bg-[#00A3E0]',
      description: 'Compose soundtracks and create immersive audio experiences',
      topics: [
        'Audio theory and emotional impact in games',
        'Live demo: Music composition and sound effects',
        'Audio integration and implementation techniques',
        'Assignment: Audio Design & Music Composition (5 hours)'
      ],
      tools: ['Suno.ai', 'ElevenLabs', 'Audio Integration']
    },
    {
      week: 4,
      title: 'AI-Assisted Programming',
      duration: '30 min',
      icon: Code,
      color: 'bg-[#78BE20]',
      description: 'Build complex game mechanics with AI coding assistance',
      topics: [
        'Programming theory and AI collaboration',
        'Live demo: Complex game mechanics development',
        'Local AI setup and advanced techniques',
        'Assignment: AI-Assisted Programming & Implementation (5 hours)'
      ],
      tools: ['Cursor.ai', 'Cline', 'Ollama', 'Unity/Godot']
    },
    {
      week: 5,
      title: 'Workflow Optimization',
      duration: '30 min',
      icon: Workflow,
      color: 'bg-[#FF7F32]',
      description: 'Design efficient development pipelines and project management',
      topics: [
        'Professional development workflows',
        'Live demo: Multi-tool integration and automation',
        'Project management and scope control',
        'Assignment: Workflow Optimization & Project Management (5 hours)'
      ],
      tools: ['Pipeline Automation', 'Quality Control', 'Project Planning']
    },
    {
      week: 6,
      title: 'Advanced AI Integration',
      duration: '30 min',
      icon: Sparkles,
      color: 'bg-[#8C1D40]',
      description: 'Explore cutting-edge techniques and custom AI integrations',
      topics: [
        'Emerging AI tools and techniques',
        'Live demo: Custom AI integrations',
        'Industry insights and future trends',
        'Assignment: Advanced AI Integration & Innovation (5 hours)'
      ],
      tools: ['Custom APIs', 'Emerging Platforms', 'Innovation Labs']
    },
    {
      week: 7,
      title: 'Portfolio & Professional Development',
      duration: '30 min',
      icon: Trophy,
      color: 'bg-[#FFC627]',
      description: 'Present projects and prepare for industry careers',
      topics: [
        'Student project presentations',
        'Industry insights and career guidance',
        'Portfolio optimization and networking',
        'Assignment: Final Portfolio & Game Design Document (5 hours)'
      ],
      tools: ['Portfolio Development', 'Industry Standards', 'Career Prep']
    }
  ];

  const supportingMaterials = [
    {
      title: 'Setup & Onboarding Videos',
      duration: '45 minutes',
      description: 'Complete tool setup, first steps, and troubleshooting guides'
    },
    {
      title: 'Skill Development Tutorials',
      duration: '80 minutes',
      description: 'Advanced techniques, asset integration, and portfolio development'
    },
    {
      title: 'Project Management Guides',
      duration: '30 minutes',
      description: 'Game design documents and indie development best practices'
    }
  ];

  return (
    <section id="curriculum" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-[#00A3E0] text-white">Curriculum</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            7 Weeks to 
            <span className="text-[#8C1D40]"> AI Mastery</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Each week builds upon the previous, taking you from AI novice to creating 
            professional-quality games with cutting-edge artificial intelligence tools.
          </p>
        </div>

        {/* Course Structure Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-[#8C1D40] rounded-full flex items-center justify-center mx-auto mb-4">
                <Play className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">3 Hours</h3>
              <p className="text-gray-600">Live interactive sessions with demonstrations</p>
            </CardContent>
          </Card>
          
          <Card className="text-center border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-[#FFC627] rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-[#8C1D40]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">35 Hours</h3>
              <p className="text-gray-600">Hands-on assignments and portfolio building</p>
            </CardContent>
          </Card>
          
          <Card className="text-center border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-[#00A3E0] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">7 Hours</h3>
              <p className="text-gray-600">Community engagement and peer collaboration</p>
            </CardContent>
          </Card>
        </div>

        {/* Weekly Curriculum */}
        <div className="space-y-8 mb-16">
          {weeks.map((week, index) => (
            <Card key={week.week} className="card-hover border-0 shadow-lg overflow-hidden">
              <div className="flex flex-col lg:flex-row">
                {/* Week Header */}
                <div className={`${week.color} text-white p-8 lg:w-80 flex-shrink-0`}>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <week.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm font-medium opacity-90">Week {week.week}</div>
                      <div className="text-xs opacity-75">{week.duration} Live Session</div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{week.title}</h3>
                  <p className="text-white/90 text-sm leading-relaxed">{week.description}</p>
                  
                  {/* Tools */}
                  <div className="mt-4">
                    <div className="text-xs font-medium opacity-90 mb-2">Key Tools:</div>
                    <div className="flex flex-wrap gap-1">
                      {week.tools.map((tool) => (
                        <span key={tool} className="text-xs bg-white/20 px-2 py-1 rounded">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Week Content */}
                <div className="flex-1 p-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Session Content</h4>
                  <ul className="space-y-3">
                    {week.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-start space-x-3">
                        <ChevronRight className="w-4 h-4 text-[#8C1D40] mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{topic}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Progress Indicator */}
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span>Week {week.week} of 7</span>
                      <div className="flex space-x-1">
                        {Array.from({ length: 7 }, (_, i) => (
                          <div
                            key={i}
                            className={`w-2 h-2 rounded-full ${
                              i < week.week ? week.color : 'bg-gray-200'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Supporting Materials */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Supporting Video Library</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {supportingMaterials.map((material, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 bg-[#8C1D40] rounded-lg flex items-center justify-center">
                      <Play className="w-4 h-4 text-white" />
                    </div>
                    <Badge variant="outline" className="text-xs">{material.duration}</Badge>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{material.title}</h4>
                  <p className="text-sm text-gray-600">{material.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Download Curriculum */}
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="bg-[#8C1D40] hover:bg-[#8C1D40]/90 text-white"
          >
            <Download className="mr-2 w-5 h-5" />
            Download Full Curriculum
          </Button>
          <p className="text-sm text-gray-600 mt-2">
            Get the complete course outline, assignments, and resource list
          </p>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;

