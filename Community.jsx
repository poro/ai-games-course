import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  MessageCircle, 
  Users, 
  Trophy, 
  Calendar, 
  ExternalLink,
  Star,
  Heart,
  Share2,
  BookOpen,
  Lightbulb,
  Zap
} from 'lucide-react';

const Community = () => {
  const communityFeatures = [
    {
      icon: MessageCircle,
      title: 'Discord Server',
      description: 'Real-time chat, voice channels, and screen sharing for collaboration',
      features: ['24/7 community support', 'Tool-specific channels', 'Project showcases', 'Industry discussions']
    },
    {
      icon: Users,
      title: 'Peer Learning',
      description: 'Structured collaboration and feedback systems',
      features: ['Buddy system pairing', 'Peer review cycles', 'Study groups', 'Mentorship program']
    },
    {
      icon: Trophy,
      title: 'Showcase Gallery',
      description: 'Share your creations and celebrate achievements',
      features: ['Project galleries', 'Weekly highlights', 'Achievement badges', 'Community voting']
    },
    {
      icon: Calendar,
      title: 'Events & Workshops',
      description: 'Regular community events and guest speakers',
      features: ['Industry guest talks', 'Tool workshops', 'Game jams', 'Career panels']
    }
  ];

  const studentProjects = [
    {
      title: 'Mystic Forest Adventure',
      creator: 'Sarah Chen',
      description: 'A magical platformer created entirely with AI tools, featuring procedural music and hand-crafted pixel art style.',
      tools: ['Rosebud AI', 'Suno.ai', 'Midjourney'],
      likes: 127,
      comments: 23,
      image: 'project1.jpg'
    },
    {
      title: 'Cyber Puzzle Labs',
      creator: 'Marcus Rodriguez',
      description: 'Futuristic puzzle game with AI-generated 3D environments and adaptive difficulty system.',
      tools: ['Unity', 'Meshy AI', 'Cursor.ai'],
      likes: 89,
      comments: 15,
      image: 'project2.jpg'
    },
    {
      title: 'Harmony Quest',
      creator: 'Aisha Patel',
      description: 'Music-based RPG where AI composes unique soundtracks based on player choices and emotions.',
      tools: ['Godot', 'ElevenLabs', 'DALL-E'],
      likes: 156,
      comments: 31,
      image: 'project3.jpg'
    }
  ];

  const testimonials = [
    {
      name: 'Alex Thompson',
      role: 'Game Developer at Indie Studio',
      quote: 'This course completely changed how I approach game development. The AI tools we learned are now essential parts of my daily workflow.',
      rating: 5
    },
    {
      name: 'Maria Santos',
      role: 'Computer Science Student',
      quote: 'I went from never having made a game to creating a portfolio that landed me an internship at a major studio. The community support was incredible.',
      rating: 5
    },
    {
      name: 'David Kim',
      role: 'Career Changer',
      quote: 'As someone transitioning from marketing to game development, this course provided the perfect bridge. The AI tools made the technical barriers manageable.',
      rating: 5
    }
  ];

  const upcomingEvents = [
    {
      date: 'Jan 15',
      title: 'AI Art Direction Workshop',
      speaker: 'Industry Professional',
      type: 'Workshop'
    },
    {
      date: 'Jan 22',
      title: 'Student Project Showcase',
      speaker: 'Community Event',
      type: 'Showcase'
    },
    {
      date: 'Jan 29',
      title: 'Career Panel: AI in Gaming',
      speaker: 'Industry Panel',
      type: 'Panel'
    }
  ];

  return (
    <section id="community" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-[#FF7F32] text-white">Community</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Join the 
            <span className="text-[#8C1D40]"> AI Creator</span> Community
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Connect with fellow creators, share your projects, and grow together in a supportive 
            community of AI-powered game developers.
          </p>
        </div>

        {/* Community Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {communityFeatures.map((feature, index) => (
            <Card key={index} className="card-hover border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#8C1D40] rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{feature.description}</p>
                <ul className="text-xs text-gray-500 space-y-1">
                  {feature.features.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center justify-center space-x-1">
                      <Zap className="w-3 h-3 text-[#FFC627]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Student Projects Showcase */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Student Project Showcase</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {studentProjects.map((project, index) => (
              <Card key={index} className="card-hover border-0 shadow-lg overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-[#8C1D40] to-[#FFC627] flex items-center justify-center">
                  <div className="text-white text-center">
                    <Lightbulb className="w-12 h-12 mx-auto mb-2" />
                    <div className="text-sm font-medium">Project Preview</div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{project.title}</h4>
                  <p className="text-sm text-gray-600 mb-3">by {project.creator}</p>
                  <p className="text-sm text-gray-700 mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <div className="text-xs font-medium text-gray-900 mb-2">Tools Used:</div>
                    <div className="flex flex-wrap gap-1">
                      {project.tools.map((tool, toolIndex) => (
                        <Badge key={toolIndex} variant="outline" className="text-xs">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Heart className="w-4 h-4 text-red-500" />
                        <span>{project.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="w-4 h-4 text-blue-500" />
                        <span>{project.comments}</span>
                      </div>
                    </div>
                    <Button size="sm" variant="ghost">
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              <ExternalLink className="mr-2 w-5 h-5" />
              View All Projects
            </Button>
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">What Students Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {Array.from({ length: testimonial.rating }, (_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Upcoming Events</h3>
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <Card key={index} className="border-l-4 border-l-[#8C1D40]">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-gray-900">{event.title}</h4>
                        <p className="text-sm text-gray-600">{event.speaker}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-[#8C1D40]">{event.date}</div>
                        <Badge variant="outline" className="text-xs">{event.type}</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Button className="w-full mt-6 bg-[#8C1D40] hover:bg-[#8C1D40]/90 text-white">
              <Calendar className="mr-2 w-5 h-5" />
              View Full Calendar
            </Button>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Join Our Community</h3>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-[#8C1D40] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Ready to Connect?</h4>
                  <p className="text-gray-600">Join hundreds of AI game creators sharing knowledge and building amazing projects together.</p>
                </div>
                
                <div className="space-y-4">
                  <Button className="w-full bg-[#5865F2] hover:bg-[#5865F2]/90 text-white">
                    <MessageCircle className="mr-2 w-5 h-5" />
                    Join Discord Server
                  </Button>
                  <Button variant="outline" className="w-full">
                    <BookOpen className="mr-2 w-5 h-5" />
                    Access Course Materials
                  </Button>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <div className="font-semibold text-[#8C1D40]">500+</div>
                      <div className="text-gray-600">Members</div>
                    </div>
                    <div>
                      <div className="font-semibold text-[#8C1D40]">150+</div>
                      <div className="text-gray-600">Projects</div>
                    </div>
                    <div>
                      <div className="font-semibold text-[#8C1D40]">24/7</div>
                      <div className="text-gray-600">Support</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;

