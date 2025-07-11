import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Video, Clock, Users, Mic, Camera, Monitor, Play, FileText } from 'lucide-react';

const VideoScripts = () => {
  const videoOverview = {
    totalContent: '4 hours 40 minutes',
    liveContent: '3.5 hours (7 sessions)',
    supportingContent: '1 hour 10 minutes',
    onboardingContent: '70 minutes',
    productionReady: true
  };

  const liveSessionScripts = [
    {
      session: 1,
      title: 'AI Revolution & First Game Creation',
      duration: '30 minutes',
      segments: [
        { time: '0-5 min', content: 'Welcome & Industry Context', type: 'Introduction' },
        { time: '5-15 min', content: 'Live AI Tool Demonstration', type: 'Demo' },
        { time: '15-25 min', content: 'Student Participation Workshop', type: 'Interactive' },
        { time: '25-30 min', content: 'Assignment Overview & Q&A', type: 'Wrap-up' }
      ],
      keyDemos: ['Rosebud AI game creation', 'Bitmagic platform tour', 'Discord community setup'],
      learningOutcomes: ['Understand AI impact on gaming', 'Create first AI game prototype', 'Join course community']
    },
    {
      session: 2,
      title: 'Visual Asset Creation & Art Direction',
      duration: '30 minutes',
      segments: [
        { time: '0-3 min', content: 'Recap & Visual AI Landscape', type: 'Introduction' },
        { time: '3-18 min', content: 'Live Asset Generation Demo', type: 'Demo' },
        { time: '18-27 min', content: 'Style Consistency Workshop', type: 'Interactive' },
        { time: '27-30 min', content: 'Portfolio Integration Tips', type: 'Wrap-up' }
      ],
      keyDemos: ['Midjourney art generation', 'DALL-E character design', 'Meshy 3D modeling'],
      learningOutcomes: ['Master AI art tools', 'Develop visual style', 'Build asset library']
    },
    {
      session: 3,
      title: 'Audio Design & Music Composition',
      duration: '30 minutes',
      segments: [
        { time: '0-3 min', content: 'Audio in Games Overview', type: 'Introduction' },
        { time: '3-20 min', content: 'Live Music & SFX Creation', type: 'Demo' },
        { time: '20-27 min', content: 'Audio Integration Workshop', type: 'Interactive' },
        { time: '27-30 min', content: 'Professional Audio Tips', type: 'Wrap-up' }
      ],
      keyDemos: ['Suno.ai music composition', 'ElevenLabs voice synthesis', 'Audio editing workflow'],
      learningOutcomes: ['Create original music', 'Generate sound effects', 'Integrate audio assets']
    },
    {
      session: 4,
      title: 'AI-Assisted Programming & Integration',
      duration: '30 minutes',
      segments: [
        { time: '0-3 min', content: 'AI Coding Revolution', type: 'Introduction' },
        { time: '3-20 min', content: 'Live Coding with AI', type: 'Demo' },
        { time: '20-27 min', content: 'Code Review & Optimization', type: 'Interactive' },
        { time: '27-30 min', content: 'Best Practices & Ethics', type: 'Wrap-up' }
      ],
      keyDemos: ['Cursor.ai coding session', 'GitHub Copilot integration', 'Claude code review'],
      learningOutcomes: ['AI-assisted programming', 'Code quality improvement', 'Ethical AI usage']
    },
    {
      session: 5,
      title: 'Workflow Optimization & Project Management',
      duration: '30 minutes',
      segments: [
        { time: '0-3 min', content: 'Modern Development Workflows', type: 'Introduction' },
        { time: '3-18 min', content: 'AI Project Management Demo', type: 'Demo' },
        { time: '18-27 min', content: 'Team Collaboration Exercise', type: 'Interactive' },
        { time: '27-30 min', content: 'Scaling & Efficiency Tips', type: 'Wrap-up' }
      ],
      keyDemos: ['Linear project management', 'Notion AI documentation', 'Figma collaborative design'],
      learningOutcomes: ['Optimize workflows', 'Improve collaboration', 'Scale development']
    },
    {
      session: 6,
      title: 'Advanced AI Integration & Innovation',
      duration: '30 minutes',
      segments: [
        { time: '0-3 min', content: 'Cutting-Edge AI Techniques', type: 'Introduction' },
        { time: '3-20 min', content: 'Advanced Tool Demonstration', type: 'Demo' },
        { time: '20-27 min', content: 'Innovation Challenge', type: 'Interactive' },
        { time: '27-30 min', content: 'Future Trends Discussion', type: 'Wrap-up' }
      ],
      keyDemos: ['Ollama local models', 'Custom AI integration', 'Experimental techniques'],
      learningOutcomes: ['Advanced AI techniques', 'Innovation mindset', 'Future preparation']
    },
    {
      session: 7,
      title: 'Portfolio Development & Career Preparation',
      duration: '30 minutes',
      segments: [
        { time: '0-5 min', content: 'Portfolio Importance & Industry Insights', type: 'Introduction' },
        { time: '5-20 min', content: 'Live Portfolio Review & Feedback', type: 'Demo' },
        { time: '20-28 min', content: 'Networking & Career Strategies', type: 'Interactive' },
        { time: '28-30 min', content: 'Course Celebration & Next Steps', type: 'Wrap-up' }
      ],
      keyDemos: ['Portfolio presentation', 'LinkedIn optimization', 'Industry networking'],
      learningOutcomes: ['Professional portfolio', 'Career preparation', 'Industry connections']
    }
  ];

  const supportingVideos = [
    {
      category: 'Onboarding',
      videos: [
        { title: 'Course Welcome & Overview', duration: '15 min', description: 'Industry context and course structure' },
        { title: 'Technical Setup Guide', duration: '20 min', description: 'Step-by-step tool installation' },
        { title: 'AI Tools Quick Start', duration: '25 min', description: 'Hands-on tool experience' },
        { title: 'Community Guide', duration: '10 min', description: 'Discord setup and collaboration' }
      ]
    },
    {
      category: 'Tutorials',
      videos: [
        { title: 'Advanced Prompt Engineering', duration: '15 min', description: 'Optimize AI tool outputs' },
        { title: 'Troubleshooting Common Issues', duration: '12 min', description: 'Problem-solving guide' },
        { title: 'Portfolio Best Practices', duration: '18 min', description: 'Professional presentation tips' }
      ]
    }
  ];

  const productionSpecs = {
    videoQuality: '1080p HD minimum, 4K preferred',
    audioQuality: 'Professional microphone, noise cancellation',
    platform: 'Zoom/Teams with recording capability',
    editing: 'Minimal editing, natural flow preferred',
    accessibility: 'Closed captions, transcript provided',
    delivery: 'Multiple formats for various platforms'
  };

  const scriptFeatures = [
    {
      icon: Mic,
      title: 'Detailed Speaking Notes',
      description: 'Word-for-word scripts with timing cues and transition guidance'
    },
    {
      icon: Monitor,
      title: 'Screen Share Guidance',
      description: 'Specific instructions for demonstrations and tool usage'
    },
    {
      icon: Users,
      title: 'Interaction Prompts',
      description: 'Student engagement activities and Q&A facilitation'
    },
    {
      icon: Camera,
      title: 'Production Notes',
      description: 'Technical requirements and quality standards'
    }
  ];

  return (
    <section id="video-scripts" className="research-section py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            <Video className="w-4 h-4 mr-2" />
            Video Production
          </Badge>
          <h2 className="text-4xl font-bold mb-4 asu-text-gradient">Video Scripts</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Complete production-ready scripts for all course videos, including live or online sessions, 
            onboarding materials, and supporting tutorials with detailed timing and interaction guidance.
          </p>
        </div>

        {/* Content Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          <Card className="text-center">
            <CardContent className="p-6">
              <Clock className="w-8 h-8 mx-auto mb-3 text-primary" />
              <div className="font-semibold mb-1">{videoOverview.totalContent}</div>
              <div className="text-sm text-muted-foreground">Total Content</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <Play className="w-8 h-8 mx-auto mb-3 text-accent" />
              <div className="font-semibold mb-1">{videoOverview.liveContent}</div>
              <div className="text-sm text-muted-foreground">Live or Online Sessions</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <FileText className="w-8 h-8 mx-auto mb-3 text-secondary" />
              <div className="font-semibold mb-1">{videoOverview.supportingContent}</div>
              <div className="text-sm text-muted-foreground">Supporting Videos</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <Users className="w-8 h-8 mx-auto mb-3 text-green-600" />
              <div className="font-semibold mb-1">{videoOverview.onboardingContent}</div>
              <div className="text-sm text-muted-foreground">Onboarding</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <Badge className="w-8 h-8 mx-auto mb-3 bg-green-100 text-green-800 flex items-center justify-center">✓</Badge>
              <div className="font-semibold mb-1">Ready</div>
              <div className="text-sm text-muted-foreground">Production Status</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="live-sessions" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="live-sessions">Live or Online Sessions</TabsTrigger>
            <TabsTrigger value="supporting">Supporting Videos</TabsTrigger>
            <TabsTrigger value="production">Production Guide</TabsTrigger>
            <TabsTrigger value="features">Script Features</TabsTrigger>
          </TabsList>

          <TabsContent value="live-sessions" className="space-y-6">
            <Accordion type="single" collapsible className="w-full">
              {liveSessionScripts.map((session, index) => (
                <AccordionItem key={index} value={`session-${session.session}`}>
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center justify-between w-full mr-4">
                      <div>
                        <span className="font-semibold">Session {session.session}: {session.title}</span>
                        <Badge variant="outline" className="ml-2">{session.duration}</Badge>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Session Structure</h4>
                        <div className="space-y-2">
                          {session.segments.map((segment, i) => (
                            <div key={i} className="flex items-center justify-between p-3 bg-background rounded-lg">
                              <div>
                                <div className="font-medium text-sm">{segment.content}</div>
                                <div className="text-xs text-muted-foreground">{segment.time}</div>
                              </div>
                              <Badge variant="outline" className="text-xs">{segment.type}</Badge>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Key Demonstrations</h4>
                          <div className="flex flex-wrap gap-2">
                            {session.keyDemos.map((demo, i) => (
                              <Badge key={i} variant="secondary" className="text-xs">{demo}</Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-2">Learning Outcomes</h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            {session.learningOutcomes.map((outcome, i) => (
                              <li key={i}>• {outcome}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </TabsContent>

          <TabsContent value="supporting" className="space-y-6">
            <div className="grid gap-6">
              {supportingVideos.map((category, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{category.category} Videos</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {category.videos.map((video, i) => (
                        <div key={i} className="p-4 bg-muted/50 rounded-lg">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-semibold text-sm">{video.title}</h4>
                            <Badge variant="outline" className="text-xs">{video.duration}</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{video.description}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-primary">Just-in-Time Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Supporting videos provide targeted assistance when students need it most, 
                  reducing cognitive load during live sessions while ensuring comprehensive coverage.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-background rounded-lg">
                    <div className="text-2xl font-bold text-primary mb-1">70</div>
                    <div className="text-sm text-muted-foreground">Minutes Onboarding</div>
                  </div>
                  <div className="text-center p-4 bg-background rounded-lg">
                    <div className="text-2xl font-bold text-accent mb-1">45</div>
                    <div className="text-sm text-muted-foreground">Minutes Tutorials</div>
                  </div>
                  <div className="text-center p-4 bg-background rounded-lg">
                    <div className="text-2xl font-bold text-secondary mb-1">100%</div>
                    <div className="text-sm text-muted-foreground">Accessibility</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="production" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Production Specifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Technical Requirements</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Video Quality:</span>
                        <span className="text-muted-foreground">{productionSpecs.videoQuality}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Audio Quality:</span>
                        <span className="text-muted-foreground">{productionSpecs.audioQuality}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Platform:</span>
                        <span className="text-muted-foreground">{productionSpecs.platform}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Editing:</span>
                        <span className="text-muted-foreground">{productionSpecs.editing}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Accessibility & Delivery</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Accessibility:</span>
                        <span className="text-muted-foreground">{productionSpecs.accessibility}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Delivery:</span>
                        <span className="text-muted-foreground">{productionSpecs.delivery}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quality Assurance Framework</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold mb-2">Pre-Production</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Script review and approval</li>
                      <li>• Technical setup verification</li>
                      <li>• Demo preparation and testing</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold mb-2">Production</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Real-time quality monitoring</li>
                      <li>• Backup recording systems</li>
                      <li>• Live interaction facilitation</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold mb-2">Post-Production</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Quality review and editing</li>
                      <li>• Caption generation and review</li>
                      <li>• Multi-platform optimization</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="features" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {scriptFeatures.map((feature, index) => (
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
                <CardTitle>Professional Video Production</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Our comprehensive script collection ensures consistent, high-quality video production 
                  that engages students and delivers professional educational content.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Script Completeness</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Word-for-word speaking notes</li>
                      <li>• Precise timing and pacing guidance</li>
                      <li>• Interactive element integration</li>
                      <li>• Technical demonstration steps</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Production Ready</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Professional quality standards</li>
                      <li>• Accessibility compliance</li>
                      <li>• Multi-platform optimization</li>
                      <li>• Scalable delivery framework</li>
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

export default VideoScripts;

