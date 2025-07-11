import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Progress } from './ui/progress';
import { BookOpen, Clock, Users, Target, Lightbulb, CheckCircle, Calendar, Award } from 'lucide-react';

const CurriculumSection = () => {
  const courseStructure = {
    format: '7 Live or Online Sessions × 30 minutes',
    totalTime: '3.5 hours live + 41.5 hours assignments',
    creditHours: '1 Credit (45 total hours)',
    delivery: 'Online with Discord community'
  };

  const weeklyBreakdown = [
    {
      week: 1,
      title: 'AI Revolution & First Game Creation',
      duration: '30 min',
      topics: ['Industry transformation', 'AI tool landscape', 'First game prototype'],
      tools: ['Rosebud AI', 'Bitmagic', 'Discord setup'],
      assignment: 'Create first AI-generated game concept',
      hours: 5
    },
    {
      week: 2,
      title: 'Visual Asset Creation & Art Direction',
      duration: '30 min',
      topics: ['AI art generation', 'Style consistency', 'Asset pipeline'],
      tools: ['Midjourney', 'DALL-E', 'Meshy 3D'],
      assignment: 'Complete visual asset library',
      hours: 6
    },
    {
      week: 3,
      title: 'Audio Design & Music Composition',
      duration: '30 min',
      topics: ['AI music generation', 'Sound effects', 'Audio integration'],
      tools: ['Suno.ai', 'ElevenLabs', 'Mubert'],
      assignment: 'Create complete audio package',
      hours: 6
    },
    {
      week: 4,
      title: 'AI-Assisted Programming & Integration',
      duration: '30 min',
      topics: ['Code generation', 'Game logic', 'Platform integration'],
      tools: ['Cursor.ai', 'GitHub Copilot', 'Claude'],
      assignment: 'Implement core game mechanics',
      hours: 7
    },
    {
      week: 5,
      title: 'Workflow Optimization & Project Management',
      duration: '30 min',
      topics: ['AI workflow design', 'Version control', 'Team collaboration'],
      tools: ['Linear', 'Notion AI', 'Figma'],
      assignment: 'Optimize development pipeline',
      hours: 6
    },
    {
      week: 6,
      title: 'Advanced AI Integration & Innovation',
      duration: '30 min',
      topics: ['Cutting-edge techniques', 'Custom AI solutions', 'Future trends'],
      tools: ['Ollama', 'Local models', 'API integration'],
      assignment: 'Implement advanced AI features',
      hours: 7
    },
    {
      week: 7,
      title: 'Portfolio Development & Career Preparation',
      duration: '30 min',
      topics: ['Portfolio presentation', 'Industry networking', 'Career paths'],
      tools: ['Portfolio platforms', 'LinkedIn', 'Industry connections'],
      assignment: 'Complete professional portfolio',
      hours: 8
    }
  ];

  const learningObjectives = [
    {
      category: 'Technical Skills',
      objectives: [
        'Master 15+ professional AI tools for game development',
        'Understand AI-enhanced development workflows',
        'Implement complete game development pipeline',
        'Integrate multiple AI technologies effectively'
      ]
    },
    {
      category: 'Creative Applications',
      objectives: [
        'Generate compelling game narratives using AI',
        'Create professional visual and audio assets',
        'Design innovative gameplay mechanics',
        'Develop unique artistic vision with AI assistance'
      ]
    },
    {
      category: 'Professional Development',
      objectives: [
        'Build industry-ready portfolio',
        'Understand AI impact on game industry',
        'Develop collaborative skills in AI-enhanced teams',
        'Prepare for emerging career opportunities'
      ]
    },
    {
      category: 'Strategic Thinking',
      objectives: [
        'Evaluate AI tools for specific use cases',
        'Design efficient development workflows',
        'Understand ethical implications of AI in games',
        'Anticipate future trends and technologies'
      ]
    }
  ];

  const assessmentFramework = [
    {
      component: 'Weekly Assignments',
      weight: '60%',
      description: 'Progressive skill-building projects using AI tools',
      deliverables: ['Game prototypes', 'Asset libraries', 'Code implementations']
    },
    {
      component: 'Portfolio Development',
      weight: '25%',
      description: 'Professional showcase of AI game development skills',
      deliverables: ['Complete game project', 'Process documentation', 'Presentation materials']
    },
    {
      component: 'Community Participation',
      weight: '10%',
      description: 'Active engagement in Discord community and peer feedback',
      deliverables: ['Peer reviews', 'Discussion contributions', 'Collaborative projects']
    },
    {
      component: 'Innovation Challenge',
      weight: '5%',
      description: 'Creative application of AI tools beyond standard assignments',
      deliverables: ['Experimental features', 'Novel techniques', 'Industry insights']
    }
  ];

  const uniqueFeatures = [
    {
      icon: Lightbulb,
      title: 'Live AI Demonstrations',
      description: 'Real-time tool usage with student participation and immediate Q&A'
    },
    {
      icon: Users,
      title: 'Community-Driven Learning',
      description: 'Discord integration for peer collaboration and ongoing support'
    },
    {
      icon: Target,
      title: 'Portfolio-Focused Outcomes',
      description: 'Every assignment builds toward professional showcase'
    },
    {
      icon: Award,
      title: 'Industry Tool Mastery',
      description: 'Hands-on experience with actual professional AI platforms'
    }
  ];

  return (
    <section id="curriculum" className="research-section py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            <BookOpen className="w-4 h-4 mr-2" />
            Course Design
          </Badge>
          <h2 className="text-4xl font-bold mb-4 asu-text-gradient">Curriculum Design</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive 7-week curriculum combining academic rigor with cutting-edge AI tools, 
            designed for maximum learning efficiency and professional portfolio development.
          </p>
        </div>

        {/* Course Structure Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="text-center">
            <CardContent className="p-6">
              <Clock className="w-8 h-8 mx-auto mb-3 text-primary" />
              <div className="font-semibold mb-1">{courseStructure.format}</div>
              <div className="text-sm text-muted-foreground">Live or Online Sessions</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <Calendar className="w-8 h-8 mx-auto mb-3 text-accent" />
              <div className="font-semibold mb-1">{courseStructure.totalTime}</div>
              <div className="text-sm text-muted-foreground">Total Commitment</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <Award className="w-8 h-8 mx-auto mb-3 text-secondary" />
              <div className="font-semibold mb-1">{courseStructure.creditHours}</div>
              <div className="text-sm text-muted-foreground">ASU Credit</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <Users className="w-8 h-8 mx-auto mb-3 text-green-600" />
              <div className="font-semibold mb-1">{courseStructure.delivery}</div>
              <div className="text-sm text-muted-foreground">Format</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="weekly" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="weekly">Weekly Breakdown</TabsTrigger>
            <TabsTrigger value="objectives">Learning Objectives</TabsTrigger>
            <TabsTrigger value="assessment">Assessment</TabsTrigger>
            <TabsTrigger value="features">Unique Features</TabsTrigger>
          </TabsList>

          <TabsContent value="weekly" className="space-y-6">
            <div className="grid gap-6">
              {weeklyBreakdown.map((week, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="flex items-center">
                          <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold mr-3">
                            {week.week}
                          </div>
                          {week.title}
                        </CardTitle>
                        <div className="flex gap-2 mt-2">
                          <Badge variant="outline">{week.duration}</Badge>
                          <Badge variant="outline">{week.hours} hours assignment</Badge>
                        </div>
                      </div>
                      <Progress value={(week.week / 7) * 100} className="w-20 h-2" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <h4 className="font-semibold text-sm mb-2">Topics Covered</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {week.topics.map((topic, i) => (
                            <li key={i}>• {topic}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-2">AI Tools</h4>
                        <div className="flex flex-wrap gap-1">
                          {week.tools.map((tool, i) => (
                            <Badge key={i} variant="secondary" className="text-xs">{tool}</Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-2">Assignment</h4>
                        <p className="text-sm text-muted-foreground">{week.assignment}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="objectives" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {learningObjectives.map((category, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {category.objectives.map((objective, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{objective}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="assessment" className="space-y-6">
            <div className="grid gap-6">
              {assessmentFramework.map((component, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{component.component}</CardTitle>
                      <Badge variant="outline" className="text-primary border-primary">
                        {component.weight}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-3">{component.description}</p>
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Key Deliverables:</h4>
                      <div className="flex flex-wrap gap-2">
                        {component.deliverables.map((deliverable, i) => (
                          <Badge key={i} variant="secondary">{deliverable}</Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-primary">Portfolio-Driven Assessment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Our assessment framework emphasizes practical skill development and professional portfolio creation. 
                  Students graduate with a comprehensive showcase of AI game development capabilities.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-background rounded-lg">
                    <div className="text-2xl font-bold text-primary mb-1">7</div>
                    <div className="text-sm text-muted-foreground">Portfolio Projects</div>
                  </div>
                  <div className="text-center p-4 bg-background rounded-lg">
                    <div className="text-2xl font-bold text-accent mb-1">15+</div>
                    <div className="text-sm text-muted-foreground">AI Tools Mastered</div>
                  </div>
                  <div className="text-center p-4 bg-background rounded-lg">
                    <div className="text-2xl font-bold text-secondary mb-1">100%</div>
                    <div className="text-sm text-muted-foreground">Industry Ready</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="features" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {uniqueFeatures.map((feature, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <feature.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
              <CardHeader>
                <CardTitle>Innovation in AI Education</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Our curriculum represents a breakthrough in AI education, combining academic rigor with 
                  practical industry applications. Students experience the future of game development today.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Academic Excellence</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• University-level instruction and assessment</li>
                      <li>• Theoretical foundation with practical application</li>
                      <li>• Academic credit and institutional recognition</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Industry Relevance</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Current professional AI tools and platforms</li>
                      <li>• Real-world project development experience</li>
                      <li>• Career preparation and industry networking</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default CurriculumSection;

