import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Globe, Search, FileText, Users, Target, Lightbulb } from 'lucide-react';

const ResearchOverview = () => {
  const researchStats = [
    { label: 'Academic Programs Analyzed', value: 4, total: 4, color: 'bg-primary' },
    { label: 'Online Courses Reviewed', value: 7, total: 7, color: 'bg-accent' },
    { label: 'Industry Programs Studied', value: 4, total: 4, color: 'bg-secondary' },
    { label: 'Emerging Platforms Evaluated', value: 4, total: 4, color: 'bg-green-500' }
  ];

  const keyFindings = [
    {
      icon: Target,
      title: 'Market Gap Identified',
      description: 'No existing program combines academic credibility with current AI tools and comprehensive pipeline coverage.',
      impact: 'Critical'
    },
    {
      icon: Users,
      title: 'Fragmented Landscape',
      description: 'Market divided between theoretical academic programs and narrow commercial training with limited overlap.',
      impact: 'High'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Opportunity',
      description: 'First-mover advantage available for comprehensive AI game development curriculum with academic backing.',
      impact: 'High'
    },
    {
      icon: Globe,
      title: 'Global Demand',
      description: '530+ AI gaming startups indicate strong industry demand for skilled professionals in this emerging field.',
      impact: 'Medium'
    }
  ];

  const methodology = [
    {
      phase: 'Discovery',
      description: 'Comprehensive web search across academic institutions, online platforms, and industry training providers',
      coverage: '19+ programs identified across 4 major categories'
    },
    {
      phase: 'Analysis',
      description: 'Detailed examination of curriculum content, delivery methods, target audiences, and competitive positioning',
      coverage: 'In-depth analysis of top competitors in each category'
    },
    {
      phase: 'Evaluation',
      description: 'Assessment of market gaps, positioning opportunities, and strategic advantages for ASU course',
      coverage: 'Competitive matrix across 6 key factors'
    },
    {
      phase: 'Synthesis',
      description: 'Development of unique positioning strategy and implementation recommendations',
      coverage: 'Comprehensive competitive analysis and market entry strategy'
    }
  ];

  const getImpactColor = (impact) => {
    switch (impact) {
      case 'Critical': return 'text-red-600 bg-red-100';
      case 'High': return 'text-orange-600 bg-orange-100';
      case 'Medium': return 'text-blue-600 bg-blue-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <section id="overview" className="research-section py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            <Search className="w-4 h-4 mr-2" />
            Comprehensive Research
          </Badge>
          <h2 className="text-4xl font-bold mb-4 asu-text-gradient">Research Overview</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Global analysis of AI & Games educational offerings, revealing market gaps and 
            positioning opportunities for ASU's innovative course development.
          </p>
        </div>

        {/* Research Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {researchStats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground mb-3">{stat.label}</div>
                <Progress value={(stat.value / stat.total) * 100} className="h-2" />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key Findings */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center">Key Research Findings</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {keyFindings.map((finding, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <finding.icon className="w-5 h-5 mr-3 text-primary" />
                    {finding.title}
                    <Badge className={`ml-auto ${getImpactColor(finding.impact)}`}>
                      {finding.impact} Impact
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{finding.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Research Methodology */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileText className="w-5 h-5 mr-2 text-primary" />
              Research Methodology
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {methodology.map((phase, index) => (
                <div key={index} className="relative">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold mr-3">
                      {index + 1}
                    </div>
                    <h4 className="font-semibold">{phase.phase}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{phase.description}</p>
                  <Badge variant="outline" className="text-xs">{phase.coverage}</Badge>
                  
                  {/* Connector line */}
                  {index < methodology.length - 1 && (
                    <div className="hidden lg:block absolute top-4 left-full w-full h-0.5 bg-border transform translate-x-3"></div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Research Scope */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Global Research Scope</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Geographic Coverage</h4>
                  <p className="text-sm text-muted-foreground">
                    Worldwide analysis with focus on English-language offerings from leading institutions 
                    and platforms in North America, Europe, and Asia-Pacific regions.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Program Types</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">University Degrees</Badge>
                    <Badge variant="outline">Online Courses</Badge>
                    <Badge variant="outline">Professional Training</Badge>
                    <Badge variant="outline">Bootcamps</Badge>
                    <Badge variant="outline">Certification Programs</Badge>
                    <Badge variant="outline">Emerging Platforms</Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Analysis Criteria</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Curriculum content and learning objectives</li>
                    <li>• Technology focus and tool integration</li>
                    <li>• Delivery format and accessibility</li>
                    <li>• Target audience and prerequisites</li>
                    <li>• Cost structure and value proposition</li>
                    <li>• Industry recognition and outcomes</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Research Timeline</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-primary rounded-full mr-3"></div>
                  <div>
                    <div className="font-semibold text-sm">July 2025</div>
                    <div className="text-xs text-muted-foreground">Research conducted</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-accent rounded-full mr-3"></div>
                  <div>
                    <div className="font-semibold text-sm">Current</div>
                    <div className="text-xs text-muted-foreground">Market conditions</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-secondary rounded-full mr-3"></div>
                  <div>
                    <div className="font-semibold text-sm">Future</div>
                    <div className="text-xs text-muted-foreground">Continuous monitoring</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-3 bg-muted rounded-lg">
                <div className="text-sm font-semibold mb-1">Data Currency</div>
                <div className="text-xs text-muted-foreground">
                  All data reflects market conditions as of July 2025. 
                  Recommendations include framework for ongoing market monitoring.
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ResearchOverview;

