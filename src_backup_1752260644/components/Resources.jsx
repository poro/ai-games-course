import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { 
  ExternalLink, 
  Download, 
  Star, 
  DollarSign, 
  Zap, 
  Palette, 
  Music, 
  Code, 
  Gamepad2,
  BookOpen,
  Video,
  FileText
} from 'lucide-react';

const Resources = () => {
  const toolCategories = [
    {
      title: 'AI Game Platforms',
      icon: Gamepad2,
      color: 'bg-[#8C1D40]',
      tools: [
        {
          name: 'Rosebud AI',
          description: 'Complete AI game creation platform with visual scripting',
          pricing: 'Free tier + Premium',
          rating: 4.8,
          features: ['Visual scripting', 'Asset generation', 'Publishing tools']
        },
        {
          name: 'Bitmagic',
          description: 'AI-powered 3D game development with collaborative features',
          pricing: 'Free + Educational',
          rating: 4.6,
          features: ['3D environments', 'Multiplayer support', 'Educational tools']
        }
      ]
    },
    {
      title: 'Visual Asset Creation',
      icon: Palette,
      color: 'bg-[#FFC627]',
      tools: [
        {
          name: 'Midjourney',
          description: 'High-quality AI image generation for game art',
          pricing: '$10-60/month',
          rating: 4.9,
          features: ['Artistic styles', 'High resolution', 'Style consistency']
        },
        {
          name: 'Meshy AI',
          description: '3D model generation from text and images',
          pricing: 'Free tier + Credits',
          rating: 4.5,
          features: ['Text-to-3D', 'Image-to-3D', 'Game-ready models']
        },
        {
          name: 'DALL-E 3',
          description: 'Precise image generation with text integration',
          pricing: 'Pay per use',
          rating: 4.7,
          features: ['Text integration', 'Style control', 'High quality']
        }
      ]
    },
    {
      title: 'Audio & Music',
      icon: Music,
      color: 'bg-[#00A3E0]',
      tools: [
        {
          name: 'Suno.ai',
          description: 'AI music composition for games and media',
          pricing: 'Free tier + Pro',
          rating: 4.6,
          features: ['Multiple genres', 'Loopable tracks', 'Commercial license']
        },
        {
          name: 'ElevenLabs',
          description: 'AI voice generation and sound effects',
          pricing: 'Free tier + Premium',
          rating: 4.8,
          features: ['Voice cloning', 'Sound effects', 'Multiple languages']
        }
      ]
    },
    {
      title: 'Programming & Development',
      icon: Code,
      color: 'bg-[#78BE20]',
      tools: [
        {
          name: 'Cursor.ai',
          description: 'AI-powered code editor with Claude integration',
          pricing: 'Free + Pro',
          rating: 4.7,
          features: ['Code completion', 'Bug fixing', 'Refactoring']
        },
        {
          name: 'Cline (VS Code)',
          description: 'AI coding assistant extension for VS Code',
          pricing: 'Free',
          rating: 4.5,
          features: ['Local AI models', 'Code explanation', 'Debugging help']
        },
        {
          name: 'Ollama',
          description: 'Run large language models locally',
          pricing: 'Free & Open Source',
          rating: 4.6,
          features: ['Local deployment', 'Privacy focused', 'Multiple models']
        }
      ]
    }
  ];

  const gameEngines = [
    {
      name: 'Unity',
      description: 'Industry-standard game engine with AI integration',
      aiFeatures: ['Unity Muse', 'AI-assisted scripting', 'Asset generation'],
      pricing: 'Free Personal License',
      bestFor: '3D games, mobile, VR/AR'
    },
    {
      name: 'Unreal Engine',
      description: 'High-end game engine with advanced AI tools',
      aiFeatures: ['MetaHuman Creator', 'AI navigation', 'Procedural generation'],
      pricing: 'Free (5% royalty)',
      bestFor: 'AAA games, realistic graphics'
    },
    {
      name: 'Godot',
      description: 'Open-source engine with growing AI plugin ecosystem',
      aiFeatures: ['AI plugins', 'GDScript AI tools', 'Community extensions'],
      pricing: 'Free & Open Source',
      bestFor: 'Indie games, 2D/3D, learning'
    }
  ];

  const learningResources = [
    {
      type: 'Documentation',
      icon: FileText,
      items: [
        'Complete Course Curriculum (PDF)',
        'AI Tool Setup Guides',
        'Game Design Document Templates',
        'Portfolio Development Checklist'
      ]
    },
    {
      type: 'Video Tutorials',
      icon: Video,
      items: [
        'Tool Setup and Configuration',
        'Advanced Prompt Engineering',
        'Asset Integration Workflows',
        'Professional Portfolio Creation'
      ]
    },
    {
      type: 'Templates & Assets',
      icon: Download,
      items: [
        'Project Template Library',
        'Asset Organization Systems',
        'Code Examples and Scripts',
        'Reference Art Collections'
      ]
    }
  ];

  return (
    <section id="resources" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-[#78BE20] text-white">Resources</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Your AI 
            <span className="text-[#8C1D40]"> Toolkit</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Access the complete collection of AI tools, game engines, and learning resources 
            used throughout the course. Everything you need to create amazing games.
          </p>
        </div>

        {/* AI Tools by Category */}
        <div className="space-y-12 mb-16">
          {toolCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div className="flex items-center space-x-3 mb-6">
                <div className={`${category.color} w-10 h-10 rounded-lg flex items-center justify-center`}>
                  <category.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.tools.map((tool, toolIndex) => (
                  <Card key={toolIndex} className="card-hover border-0 shadow-lg">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{tool.name}</CardTitle>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm font-medium">{tool.rating}</span>
                        </div>
                      </div>
                      <CardDescription className="text-sm">{tool.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <DollarSign className="w-4 h-4 text-green-600" />
                          <span className="text-sm font-medium">{tool.pricing}</span>
                        </div>
                        
                        <div>
                          <div className="text-sm font-medium text-gray-900 mb-2">Key Features:</div>
                          <div className="flex flex-wrap gap-1">
                            {tool.features.map((feature, featureIndex) => (
                              <Badge key={featureIndex} variant="outline" className="text-xs">
                                {feature}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <Button size="sm" variant="outline" className="w-full">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Learn More
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Game Engines */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Game Engines & AI Integration</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {gameEngines.map((engine, index) => (
              <Card key={index} className="card-hover border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">{engine.name}</CardTitle>
                  <CardDescription>{engine.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm font-medium text-gray-900 mb-2">AI Features:</div>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {engine.aiFeatures.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-2">
                            <Zap className="w-3 h-3 text-[#FFC627]" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="pt-3 border-t border-gray-200">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium">Pricing:</span>
                        <span className="text-green-600">{engine.pricing}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm mt-1">
                        <span className="font-medium">Best for:</span>
                        <span className="text-gray-600">{engine.bestFor}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Learning Resources */}
        <div className="bg-white rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Learning Resources</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {learningResources.map((resource, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#8C1D40] rounded-full flex items-center justify-center mx-auto mb-4">
                  <resource.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">{resource.type}</h4>
                <ul className="space-y-2">
                  {resource.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-sm text-gray-600 flex items-center justify-center space-x-2">
                      <Download className="w-3 h-3 text-[#FFC627]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button size="lg" className="bg-[#8C1D40] hover:bg-[#8C1D40]/90 text-white">
              <Download className="mr-2 w-5 h-5" />
              Access All Resources
            </Button>
            <p className="text-sm text-gray-600 mt-2">
              Available to enrolled students and course alumni
            </p>
          </div>
        </div>

        {/* Cost Breakdown */}
        <div className="mt-16 bg-gradient-to-r from-[#8C1D40] to-[#FFC627] rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Total Tool Cost Analysis</h3>
            <p className="text-white/90">Transparent pricing for all course tools</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">$0</div>
              <div className="text-sm text-white/90">Free Tools Only</div>
              <div className="text-xs text-white/75 mt-1">Godot, Ollama, Open Source</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">$10-20</div>
              <div className="text-sm text-white/90">Basic Premium</div>
              <div className="text-xs text-white/75 mt-1">Suno.ai, Cursor.ai Pro</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">$50-100</div>
              <div className="text-sm text-white/90">Full Professional</div>
              <div className="text-xs text-white/75 mt-1">All premium features</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">$200+</div>
              <div className="text-sm text-white/90">Studio Level</div>
              <div className="text-xs text-white/75 mt-1">Commercial production</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;

