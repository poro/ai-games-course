import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Progress } from './ui/progress';
import { Target, TrendingUp, Shield, Lightbulb, Rocket, Star, CheckCircle, AlertTriangle } from 'lucide-react';

const CompetitivePosition = () => {
  const strategicAdvantages = [
    {
      icon: Target,
      title: 'First-Mover Advantage',
      description: 'First comprehensive AI game development curriculum with academic backing',
      impact: 'Critical',
      timeline: 'Immediate'
    },
    {
      icon: Shield,
      title: 'Academic Credibility',
      description: 'University recognition combined with cutting-edge technology',
      impact: 'High',
      timeline: 'Long-term'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Leadership',
      description: 'Continuous integration of emerging AI tools and techniques',
      impact: 'High',
      timeline: 'Ongoing'
    },
    {
      icon: Rocket,
      title: 'Market Timing',
      description: 'Perfect alignment with AI adoption curve in gaming industry',
      impact: 'Medium',
      timeline: 'Current'
    }
  ];

  const competitiveMatrix = [
    {
      factor: 'Academic Credibility',
      ourScore: 9,
      academicAvg: 9,
      onlineAvg: 5,
      industryAvg: 7,
      advantage: 'Tied with academic leaders'
    },
    {
      factor: 'Current Technology',
      ourScore: 9,
      academicAvg: 4,
      onlineAvg: 8,
      industryAvg: 6,
      advantage: 'Leading edge integration'
    },
    {
      factor: 'Accessibility',
      ourScore: 8,
      academicAvg: 3,
      onlineAvg: 9,
      industryAvg: 4,
      advantage: 'Balanced approach'
    },
    {
      factor: 'Community Support',
      ourScore: 9,
      academicAvg: 6,
      onlineAvg: 3,
      industryAvg: 8,
      advantage: 'Strong community focus'
    },
    {
      factor: 'Comprehensive Coverage',
      ourScore: 9,
      academicAvg: 9,
      onlineAvg: 4,
      industryAvg: 5,
      advantage: 'Complete pipeline coverage'
    },
    {
      factor: 'Cost Effectiveness',
      ourScore: 8,
      academicAvg: 6,
      onlineAvg: 8,
      industryAvg: 3,
      advantage: 'Competitive pricing'
    }
  ];

  const marketOpportunities = [
    {
      opportunity: 'Academic Market Leadership',
      description: 'Establish ASU as pioneer in AI game education',
      potential: 'High',
      effort: 'Medium',
      timeline: '6-12 months'
    },
    {
      opportunity: 'Industry Partnerships',
      description: 'Collaborate with AI tool companies and game studios',
      potential: 'High',
      effort: 'Medium',
      timeline: '3-6 months'
    },
    {
      opportunity: 'Global Online Expansion',
      description: 'Reach international students through online delivery',
      potential: 'Medium',
      effort: 'Low',
      timeline: '1-3 months'
    },
    {
      opportunity: 'Corporate Training Market',
      description: 'Develop professional development programs for studios',
      potential: 'Medium',
      effort: 'High',
      timeline: '12-18 months'
    }
  ];

  const implementationStrategy = [
    {
      phase: 'Launch',
      timeline: '0-3 months',
      objectives: ['Deploy course curriculum', 'Establish industry partnerships', 'Build student community'],
      metrics: ['Enrollment numbers', 'Student satisfaction', 'Industry engagement'],
      risks: ['Technology adoption', 'Market acceptance'],
      mitigation: ['Comprehensive onboarding', 'Industry advisory board']
    },
    {
      phase: 'Growth',
      timeline: '3-12 months',
      objectives: ['Scale enrollment', 'Develop specialized tracks', 'Expand partnerships'],
      metrics: ['Market share', 'Student outcomes', 'Industry recognition'],
      risks: ['Competition emergence', 'Resource constraints'],
      mitigation: ['Continuous innovation', 'Strategic partnerships']
    },
    {
      phase: 'Leadership',
      timeline: '12+ months',
      objectives: ['Market leadership', 'Global expansion', 'Research initiatives'],
      metrics: ['Industry influence', 'Alumni success', 'Academic recognition'],
      risks: ['Market saturation', 'Technology disruption'],
      mitigation: ['Innovation pipeline', 'Adaptive framework']
    }
  ];

  const riskAssessment = [
    {
      risk: 'Technology Evolution',
      probability: 'High',
      impact: 'Medium',
      mitigation: 'Flexible curriculum framework for rapid tool integration',
      status: 'Managed'
    },
    {
      risk: 'Market Competition',
      probability: 'Medium',
      impact: 'Medium',
      mitigation: 'First-mover advantage and continuous innovation',
      status: 'Monitored'
    },
    {
      risk: 'Industry Acceptance',
      probability: 'Low',
      impact: 'High',
      mitigation: 'Strong industry partnerships and alumni placement',
      status: 'Controlled'
    },
    {
      risk: 'Resource Requirements',
      probability: 'Low',
      impact: 'Medium',
      mitigation: 'Efficient design leveraging existing ASU capabilities',
      status: 'Managed'
    }
  ];

  const getImpactColor = (impact) => {
    switch (impact) {
      case 'Critical': return 'text-red-600 bg-red-100';
      case 'High': return 'text-orange-600 bg-orange-100';
      case 'Medium': return 'text-blue-600 bg-blue-100';
      case 'Low': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getRiskColor = (status) => {
    switch (status) {
      case 'Controlled': return 'text-green-600 bg-green-100';
      case 'Managed': return 'text-blue-600 bg-blue-100';
      case 'Monitored': return 'text-yellow-600 bg-yellow-100';
      case 'Critical': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <section id="competitive-position" className="research-section py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            <Target className="w-4 h-4 mr-2" />
            Strategic Positioning
          </Badge>
          <h2 className="text-4xl font-bold mb-4 asu-text-gradient">Competitive Position</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Strategic analysis of competitive advantages, market opportunities, and implementation 
            recommendations for establishing ASU as the leader in AI game education.
          </p>
        </div>

        <Tabs defaultValue="advantages" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="advantages">Strategic Advantages</TabsTrigger>
            <TabsTrigger value="matrix">Competitive Matrix</TabsTrigger>
            <TabsTrigger value="opportunities">Market Opportunities</TabsTrigger>
            <TabsTrigger value="implementation">Implementation</TabsTrigger>
            <TabsTrigger value="risks">Risk Assessment</TabsTrigger>
          </TabsList>

          <TabsContent value="advantages" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {strategicAdvantages.map((advantage, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <advantage.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-lg">{advantage.title}</h3>
                          <div className="flex gap-2">
                            <Badge className={getImpactColor(advantage.impact)}>
                              {advantage.impact} Impact
                            </Badge>
                            <Badge variant="outline">{advantage.timeline}</Badge>
                          </div>
                        </div>
                        <p className="text-muted-foreground">{advantage.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-primary">Unique Value Proposition</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  ASU's AI & Games course occupies a unique market position that no competitor currently matches:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <div>
                      <strong>Academic + Industry Hybrid:</strong> University credibility with cutting-edge technology
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <div>
                      <strong>Comprehensive + Accessible:</strong> Complete pipeline in efficient format
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <div>
                      <strong>Current + Future-Proof:</strong> Latest tools with adaptable framework
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="matrix" className="space-y-6">
            <div className="grid gap-4">
              {competitiveMatrix.map((factor, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-semibold">{factor.factor}</h3>
                      <Badge variant="outline" className="text-green-600 border-green-600">
                        {factor.advantage}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Our Course</div>
                        <div className="flex items-center space-x-2">
                          <Progress value={factor.ourScore * 10} className="flex-1 h-2" />
                          <span className="text-sm font-semibold text-primary">{factor.ourScore}/10</span>
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Academic Avg</div>
                        <div className="flex items-center space-x-2">
                          <Progress value={factor.academicAvg * 10} className="flex-1 h-2" />
                          <span className="text-sm">{factor.academicAvg}/10</span>
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Online Avg</div>
                        <div className="flex items-center space-x-2">
                          <Progress value={factor.onlineAvg * 10} className="flex-1 h-2" />
                          <span className="text-sm">{factor.onlineAvg}/10</span>
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Industry Avg</div>
                        <div className="flex items-center space-x-2">
                          <Progress value={factor.industryAvg * 10} className="flex-1 h-2" />
                          <span className="text-sm">{factor.industryAvg}/10</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-green-50 border-green-200">
              <CardHeader>
                <CardTitle className="text-green-700">Competitive Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-2xl font-bold text-green-600 mb-1">8.7/10</div>
                    <div className="text-sm text-muted-foreground">Overall Score</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-2xl font-bold text-green-600 mb-1">6/6</div>
                    <div className="text-sm text-muted-foreground">Leading Factors</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-2xl font-bold text-green-600 mb-1">#1</div>
                    <div className="text-sm text-muted-foreground">Market Position</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="opportunities" className="space-y-6">
            <div className="grid gap-6">
              {marketOpportunities.map((opportunity, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-semibold text-lg">{opportunity.opportunity}</h3>
                      <div className="flex gap-2">
                        <Badge className={getImpactColor(opportunity.potential)}>
                          {opportunity.potential} Potential
                        </Badge>
                        <Badge variant="outline">{opportunity.timeline}</Badge>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-3">{opportunity.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-muted-foreground">
                        Implementation Effort: <span className="font-semibold">{opportunity.effort}</span>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Timeline: <span className="font-semibold">{opportunity.timeline}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
              <CardHeader>
                <CardTitle>Market Leadership Strategy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Strategic focus on high-impact opportunities that leverage our unique competitive advantages 
                  while building sustainable market leadership position.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Immediate Priorities</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Establish academic market leadership</li>
                      <li>• Build strategic industry partnerships</li>
                      <li>• Develop strong student community</li>
                      <li>• Create thought leadership content</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Long-term Vision</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Global expansion and licensing</li>
                      <li>• Corporate training market entry</li>
                      <li>• Research and development initiatives</li>
                      <li>• Industry standard setting</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="implementation" className="space-y-6">
            <div className="grid gap-6">
              {implementationStrategy.map((phase, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle className="flex items-center">
                        <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold mr-3">
                          {index + 1}
                        </div>
                        {phase.phase} Phase
                      </CardTitle>
                      <Badge variant="outline">{phase.timeline}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      <div>
                        <h4 className="font-semibold text-sm mb-2">Objectives</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {phase.objectives.map((objective, i) => (
                            <li key={i}>• {objective}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-2">Success Metrics</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {phase.metrics.map((metric, i) => (
                            <li key={i}>• {metric}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-2">Key Risks</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {phase.risks.map((risk, i) => (
                            <li key={i}>• {risk}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-2">Mitigation</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {phase.mitigation.map((strategy, i) => (
                            <li key={i}>• {strategy}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="risks" className="space-y-6">
            <div className="grid gap-4">
              {riskAssessment.map((risk, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-semibold text-lg">{risk.risk}</h3>
                      <div className="flex gap-2">
                        <Badge variant="outline">{risk.probability} Probability</Badge>
                        <Badge variant="outline">{risk.impact} Impact</Badge>
                        <Badge className={getRiskColor(risk.status)}>{risk.status}</Badge>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm">{risk.mitigation}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-green-50 border-green-200">
              <CardHeader>
                <CardTitle className="text-green-700 flex items-center">
                  <Shield className="w-5 h-5 mr-2" />
                  Risk Management Summary
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Comprehensive risk assessment shows manageable risk profile with effective mitigation strategies in place.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-2xl font-bold text-green-600 mb-1">Low</div>
                    <div className="text-sm text-muted-foreground">Overall Risk</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-2xl font-bold text-blue-600 mb-1">High</div>
                    <div className="text-sm text-muted-foreground">Preparedness</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-2xl font-bold text-green-600 mb-1">4/4</div>
                    <div className="text-sm text-muted-foreground">Risks Managed</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-2xl font-bold text-green-600 mb-1">Ready</div>
                    <div className="text-sm text-muted-foreground">Launch Status</div>
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

export default CompetitivePosition;

