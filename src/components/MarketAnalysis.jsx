import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, Users, DollarSign, Clock, Star, AlertTriangle, CheckCircle } from 'lucide-react';

const MarketAnalysis = () => {
  // Market data for visualizations
  const programsByCategory = [
    { name: 'Academic Programs', count: 4, color: '#8C1D40' },
    { name: 'Online Courses', count: 7, color: '#FFC627' },
    { name: 'Industry Training', count: 4, color: '#00A3E0' },
    { name: 'Emerging Platforms', count: 4, color: '#78BE20' }
  ];

  const competitiveMatrix = [
    { factor: 'Credibility', academic: 9, online: 5, industry: 7, ourCourse: 9 },
    { factor: 'Current Tech', academic: 4, online: 8, industry: 6, ourCourse: 9 },
    { factor: 'Accessibility', academic: 3, online: 9, industry: 4, ourCourse: 8 },
    { factor: 'Community', academic: 6, online: 3, industry: 8, ourCourse: 9 },
    { factor: 'Coverage', academic: 9, online: 4, industry: 5, ourCourse: 9 },
    { factor: 'Cost Effective', academic: 6, online: 8, industry: 3, ourCourse: 8 }
  ];

  const keyCompetitors = [
    {
      name: 'Falmouth University',
      category: 'Academic',
      duration: '1-2 years',
      cost: 'High',
      focus: 'AI Theory & Implementation',
      strengths: ['Academic credibility', 'Comprehensive theory', 'Research focus'],
      weaknesses: ['Slow tech adoption', 'High barrier to entry', 'Limited practical focus'],
      threat: 'Low'
    },
    {
      name: 'Hugging Face ML Course',
      category: 'Online',
      duration: '3-4 weeks',
      cost: 'Free',
      focus: 'ML Models in Unity',
      strengths: ['Current technology', 'Practical focus', 'Free access'],
      weaknesses: ['No academic credit', 'Limited community', 'Unity-specific'],
      threat: 'Medium'
    },
    {
      name: 'Full Sail DC3',
      category: 'Industry',
      duration: '3 weeks',
      cost: 'Medium',
      focus: 'Generative AI for Gaming',
      strengths: ['Industry focus', 'Current tools', 'Professional development'],
      weaknesses: ['Limited scope', 'No academic recognition', 'Commercial focus'],
      threat: 'Medium'
    },
    {
      name: 'Georgia Tech',
      category: 'Academic',
      duration: '1 semester',
      cost: 'High',
      focus: 'Classical Game AI',
      strengths: ['Prestigious institution', 'Technical depth', 'Online delivery'],
      weaknesses: ['Classical AI focus', 'Graduate level only', 'Programming heavy'],
      threat: 'Low'
    }
  ];

  const marketGaps = [
    {
      gap: 'Academic-Industry Bridge',
      description: 'No program combines university credibility with current industry tools',
      opportunity: 'High',
      impact: 'Critical'
    },
    {
      gap: 'Comprehensive Pipeline',
      description: 'Most focus on single aspects rather than complete AI workflow',
      opportunity: 'High',
      impact: 'High'
    },
    {
      gap: 'Accessible Quality',
      description: 'High-quality programs expensive; accessible programs lack depth',
      opportunity: 'Medium',
      impact: 'High'
    },
    {
      gap: 'Current Technology',
      description: 'Academic programs lag; commercial training too narrow',
      opportunity: 'High',
      impact: 'Medium'
    }
  ];

  const getThreatColor = (threat) => {
    switch (threat) {
      case 'Low': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'High': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getOpportunityIcon = (level) => {
    switch (level) {
      case 'High': return <TrendingUp className="w-4 h-4 text-green-600" />;
      case 'Medium': return <AlertTriangle className="w-4 h-4 text-yellow-600" />;
      case 'Low': return <CheckCircle className="w-4 h-4 text-blue-600" />;
      default: return null;
    }
  };

  return (
    <section id="market-analysis" className="research-section py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            <BarChart className="w-4 h-4 mr-2" />
            Global Market Research
          </Badge>
          <h2 className="text-4xl font-bold mb-4 asu-text-gradient">Market Analysis</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive analysis of 19+ AI & Games educational offerings across 4 major categories, 
            revealing significant market gaps and positioning opportunities.
          </p>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Market Overview</TabsTrigger>
            <TabsTrigger value="competitors">Key Competitors</TabsTrigger>
            <TabsTrigger value="gaps">Market Gaps</TabsTrigger>
            <TabsTrigger value="positioning">Competitive Matrix</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Market Distribution Chart */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="w-5 h-5 mr-2 text-primary" />
                    Programs by Category
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={programsByCategory}
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="count"
                        label={({ name, count }) => `${name}: ${count}`}
                      >
                        {programsByCategory.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Market Statistics */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2 text-primary" />
                    Market Statistics
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-primary/10 rounded-lg">
                      <div className="text-2xl font-bold text-primary">19+</div>
                      <div className="text-sm text-muted-foreground">Total Programs</div>
                    </div>
                    <div className="text-center p-4 bg-accent/10 rounded-lg">
                      <div className="text-2xl font-bold text-accent">530+</div>
                      <div className="text-sm text-muted-foreground">AI Gaming Startups</div>
                    </div>
                    <div className="text-center p-4 bg-secondary/10 rounded-lg">
                      <div className="text-2xl font-bold" style={{color: 'var(--asu-gold)'}}>4</div>
                      <div className="text-sm text-muted-foreground">Major Categories</div>
                    </div>
                    <div className="text-center p-4 bg-green-100 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">High</div>
                      <div className="text-sm text-muted-foreground">Market Opportunity</div>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <h4 className="font-semibold mb-2">Key Findings:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Fragmented market with no comprehensive leader</li>
                      <li>• Academic programs lag in current AI technology</li>
                      <li>• Online courses lack community and credibility</li>
                      <li>• Industry training has high barriers to entry</li>
                      <li>• Significant opportunity for academic-industry bridge</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="competitors" className="space-y-6">
            <div className="grid gap-6">
              {keyCompetitors.map((competitor, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{competitor.name}</CardTitle>
                        <div className="flex gap-2 mt-2">
                          <Badge variant="outline">{competitor.category}</Badge>
                          <Badge variant="outline">{competitor.duration}</Badge>
                          <Badge variant="outline">{competitor.cost} Cost</Badge>
                          <Badge className={getThreatColor(competitor.threat)}>
                            {competitor.threat} Threat
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <h4 className="font-semibold text-sm mb-2">Focus Area</h4>
                        <p className="text-sm text-muted-foreground">{competitor.focus}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-2 text-green-600">Strengths</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {competitor.strengths.map((strength, i) => (
                            <li key={i}>• {strength}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-2 text-red-600">Weaknesses</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {competitor.weaknesses.map((weakness, i) => (
                            <li key={i}>• {weakness}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="gaps" className="space-y-6">
            <div className="grid gap-6">
              {marketGaps.map((gap, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          {getOpportunityIcon(gap.opportunity)}
                          <h3 className="font-semibold text-lg ml-2">{gap.gap}</h3>
                        </div>
                        <p className="text-muted-foreground mb-3">{gap.description}</p>
                        <div className="flex gap-2">
                          <Badge variant="outline" className="text-green-600 border-green-600">
                            {gap.opportunity} Opportunity
                          </Badge>
                          <Badge variant="outline" className="text-blue-600 border-blue-600">
                            {gap.impact} Impact
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-primary">Our Unique Position</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Our ASU AI & Games course is uniquely positioned to address all identified market gaps:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <div>
                      <strong>Academic + Industry Bridge:</strong> University credibility with cutting-edge AI tools
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <div>
                      <strong>Complete Pipeline:</strong> Comprehensive coverage from narrative to deployment
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <div>
                      <strong>Accessible Quality:</strong> 1-credit format with professional-level content
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <div>
                      <strong>Current Technology:</strong> Latest AI tools with academic framework
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="positioning" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Competitive Positioning Matrix</CardTitle>
                <p className="text-muted-foreground">
                  Comparison across key factors (Scale: 1-10, where 10 is best)
                </p>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={competitiveMatrix} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="factor" />
                    <YAxis domain={[0, 10]} />
                    <Tooltip />
                    <Bar dataKey="academic" fill="#8C1D40" name="Academic Programs" />
                    <Bar dataKey="online" fill="#FFC627" name="Online Courses" />
                    <Bar dataKey="industry" fill="#00A3E0" name="Industry Training" />
                    <Bar dataKey="ourCourse" fill="#78BE20" name="Our Course" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-green-600">Competitive Advantages</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      <span className="text-sm">Highest overall score across all factors</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      <span className="text-sm">Leading in current technology integration</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      <span className="text-sm">Strong community and comprehensive coverage</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      <span className="text-sm">Balanced approach across all dimensions</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-blue-600">Market Opportunity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm">Market Size</span>
                      <Badge variant="outline" className="text-green-600">Large & Growing</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Competition Level</span>
                      <Badge variant="outline" className="text-yellow-600">Fragmented</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Entry Barriers</span>
                      <Badge variant="outline" className="text-green-600">Low</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Differentiation Potential</span>
                      <Badge variant="outline" className="text-green-600">High</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default MarketAnalysis;

