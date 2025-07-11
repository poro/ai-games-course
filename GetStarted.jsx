import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  CheckCircle, 
  Clock, 
  DollarSign, 
  Calendar, 
  Users, 
  ArrowRight,
  Star,
  Award,
  BookOpen,
  Zap
} from 'lucide-react';

const GetStarted = () => {
  const enrollmentSteps = [
    {
      step: 1,
      title: 'Register for Course',
      description: 'Enroll through ASU course registration system',
      action: 'Register Now'
    },
    {
      step: 2,
      title: 'Join Community',
      description: 'Access Discord server and course materials',
      action: 'Join Discord'
    },
    {
      step: 3,
      title: 'Setup Tools',
      description: 'Follow setup guides for AI tools and software',
      action: 'Download Guide'
    },
    {
      step: 4,
      title: 'Start Creating',
      description: 'Begin your first AI-powered game project',
      action: 'Start Learning'
    }
  ];

  const courseDetails = [
    {
      icon: Calendar,
      label: 'Duration',
      value: '7 Weeks',
      description: 'Intensive hands-on learning'
    },
    {
      icon: Clock,
      label: 'Time Commitment',
      value: '45 Hours Total',
      description: '3 hrs live + 42 hrs practice'
    },
    {
      icon: Users,
      label: 'Class Size',
      value: 'Limited Enrollment',
      description: 'Small cohorts for personalized attention'
    },
    {
      icon: Award,
      label: 'Credit',
      value: '1 Credit Hour',
      description: 'Official ASU course credit'
    }
  ];

  const prerequisites = [
    'No programming experience required',
    'Basic computer literacy',
    'Creative mindset and willingness to experiment',
    'Reliable internet connection',
    'Computer capable of running modern software'
  ];

  const whatYouGet = [
    'Access to 15+ premium AI tools',
    'Complete video tutorial library',
    'Live instructor demonstrations',
    'Peer collaboration and feedback',
    'Professional portfolio development',
    'Industry networking opportunities',
    'Lifetime community access',
    'Career guidance and support'
  ];

  const pricingTiers = [
    {
      name: 'ASU Student',
      price: 'Tuition Rate',
      description: 'Standard ASU tuition pricing',
      features: [
        'Full course access',
        'Academic credit',
        'Student support services',
        'Campus resources'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$1,200',
      description: 'For working professionals',
      features: [
        'Full course access',
        'Certificate of completion',
        'Professional networking',
        'Career advancement focus'
      ],
      popular: true
    },
    {
      name: 'Audit',
      price: '$600',
      description: 'Course content only',
      features: [
        'Video content access',
        'Community participation',
        'No academic credit',
        'Self-paced learning'
      ],
      popular: false
    }
  ];

  return (
    <section id="get-started" className="py-20 bg-gradient-to-br from-[#8C1D40] to-[#FFC627]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-white text-[#8C1D40]">Get Started</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Create with 
            <span className="text-[#FFC627]"> AI?</span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Join the next generation of game developers. Start your journey into AI-powered 
            game creation and build the skills that will define the future of interactive entertainment.
          </p>
        </div>

        {/* Course Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {courseDetails.map((detail, index) => (
            <Card key={index} className="border-0 shadow-lg bg-white/95 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-[#8C1D40] rounded-lg flex items-center justify-center mx-auto mb-4">
                  <detail.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-sm font-medium text-gray-600 mb-1">{detail.label}</div>
                <div className="text-lg font-bold text-gray-900 mb-2">{detail.value}</div>
                <div className="text-xs text-gray-500">{detail.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enrollment Steps */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">How to Enroll</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {enrollmentSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#FFC627] rounded-full flex items-center justify-center mx-auto mb-4 text-[#8C1D40] font-bold text-xl">
                  {step.step}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{step.title}</h4>
                <p className="text-white/80 text-sm mb-4">{step.description}</p>
                <Button size="sm" variant="outline" className="border-white text-white hover:bg-white hover:text-[#8C1D40]">
                  {step.action}
                </Button>
                {index < enrollmentSteps.length - 1 && (
                  <ArrowRight className="w-6 h-6 text-white/60 mx-auto mt-4 hidden lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Choose Your Path</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <Card key={index} className={`border-0 shadow-xl ${tier.popular ? 'ring-4 ring-[#FFC627] scale-105' : ''} bg-white`}>
                {tier.popular && (
                  <div className="bg-[#FFC627] text-[#8C1D40] text-center py-2 font-semibold text-sm">
                    Most Popular
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-gray-900">{tier.name}</CardTitle>
                  <div className="text-3xl font-bold text-[#8C1D40] my-4">{tier.price}</div>
                  <CardDescription>{tier.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${tier.popular ? 'bg-[#8C1D40] hover:bg-[#8C1D40]/90 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-900'}`}
                  >
                    {tier.popular ? 'Enroll Now' : 'Learn More'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* What You Get & Prerequisites */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="border-0 shadow-xl bg-white">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900 flex items-center">
                <Star className="w-6 h-6 text-[#FFC627] mr-2" />
                What You Get
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {whatYouGet.map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl bg-white">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900 flex items-center">
                <BookOpen className="w-6 h-6 text-[#8C1D40] mr-2" />
                Prerequisites
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {prerequisites.map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <Zap className="w-5 h-5 text-[#FFC627] flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <p className="text-sm text-green-800">
                  <strong>Perfect for beginners!</strong> This course is designed for anyone interested 
                  in game development, regardless of technical background.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Creative Process?</h3>
            <p className="text-white/90 mb-6">
              Join hundreds of students who are already creating amazing games with AI. 
              The future of game development starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#FFC627] hover:bg-[#FFC627]/90 text-[#8C1D40] font-semibold px-8">
                Enroll Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#8C1D40]">
                Schedule Info Session
              </Button>
            </div>
            <p className="text-white/70 text-sm mt-4">
              Questions? Contact us at aigames@asu.edu
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;

