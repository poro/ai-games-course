import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Sparkles, 
  Wand2, 
  Code, 
  Palette, 
  Music,
  ChevronRight,
  Loader2
} from 'lucide-react';

const InteractiveDemo = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const demoSteps = [
    {
      id: 'concept',
      title: 'Game Concept',
      description: 'Start with a simple idea',
      prompt: 'Create a magical forest platformer where the player collects glowing crystals',
      output: 'AI analyzes your concept and suggests game mechanics, visual style, and target audience',
      color: 'bg-purple-500'
    },
    {
      id: 'visuals',
      title: 'Visual Assets',
      description: 'Generate art and animations',
      prompt: 'Pixel art style, mystical forest background, glowing crystal collectibles',
      output: 'AI creates character sprites, environment tiles, and particle effects in consistent style',
      color: 'bg-blue-500'
    },
    {
      id: 'audio',
      title: 'Music & Sound',
      description: 'Compose soundtrack and effects',
      prompt: 'Ambient forest music, magical chimes for crystal collection, footstep sounds',
      output: 'AI composes looping background music and generates all necessary sound effects',
      color: 'bg-green-500'
    },
    {
      id: 'code',
      title: 'Game Logic',
      description: 'Build mechanics and interactions',
      prompt: 'Player movement, crystal collection system, level progression, score tracking',
      output: 'AI writes complete game code with physics, collision detection, and game states',
      color: 'bg-orange-500'
    },
    {
      id: 'publish',
      title: 'Ready to Play!',
      description: 'Your game is complete',
      prompt: 'Export for web, mobile, or desktop platforms',
      output: 'Fully playable game ready for sharing, testing, and publishing',
      color: 'bg-red-500'
    }
  ];

  const getStepIcon = (stepId, className) => {
    switch (stepId) {
      case 'concept':
        return <Sparkles className={className} />;
      case 'visuals':
        return <Palette className={className} />;
      case 'audio':
        return <Music className={className} />;
      case 'code':
        return <Code className={className} />;
      case 'publish':
        return <Play className={className} />;
      default:
        return <Sparkles className={className} />;
    }
  };

  const handleStepClick = (stepIndex) => {
    setCurrentStep(stepIndex);
    setIsPlaying(false);
  };

  const handlePlayDemo = () => {
    if (isPlaying) {
      setIsPlaying(false);
      return;
    }

    setIsPlaying(true);
    setCurrentStep(0);
    
    const playSteps = () => {
      if (currentStep < demoSteps.length - 1) {
        setIsGenerating(true);
        setTimeout(() => {
          setIsGenerating(false);
          setCurrentStep(prev => prev + 1);
          setTimeout(playSteps, 1500);
        }, 2000);
      } else {
        setIsPlaying(false);
      }
    };
    
    playSteps();
  };

  const resetDemo = () => {
    setCurrentStep(0);
    setIsPlaying(false);
    setIsGenerating(false);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-[#8C1D40] text-white">Interactive Demo</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            See AI Game Creation 
            <span className="text-[#8C1D40]"> In Action</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Watch how AI transforms a simple idea into a complete game in minutes. 
            Click through each step or play the full demonstration.
          </p>
          
          {/* Demo Controls */}
          <div className="flex justify-center space-x-4">
            <Button 
              size="lg" 
              onClick={handlePlayDemo}
              className="bg-[#8C1D40] hover:bg-[#8C1D40]/90 text-white"
              disabled={isGenerating}
            >
              {isPlaying ? (
                <>
                  <Pause className="mr-2 w-5 h-5" />
                  Pause Demo
                </>
              ) : (
                <>
                  <Play className="mr-2 w-5 h-5" />
                  Play Demo
                </>
              )}
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={resetDemo}
              disabled={isGenerating}
            >
              <RotateCcw className="mr-2 w-5 h-5" />
              Reset
            </Button>
          </div>
        </div>

        {/* Demo Visualization */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Step Navigation */}
          <div className="space-y-4">
            {demoSteps.map((step, index) => (
              <Card 
                key={step.id}
                className={`cursor-pointer transition-all duration-300 ${
                  index === currentStep 
                    ? 'ring-2 ring-[#8C1D40] shadow-lg scale-105' 
                    : 'hover:shadow-md'
                } ${index < currentStep ? 'bg-green-50 border-green-200' : ''}`}
                onClick={() => handleStepClick(index)}
              >
                <CardContent className="p-4">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      index === currentStep ? step.color : 'bg-gray-100'
                    } transition-colors duration-300`}>
                      {index < currentStep ? (
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      ) : index === currentStep && isGenerating ? (
                        <Loader2 className="w-6 h-6 text-white animate-spin" />
                      ) : (
                        getStepIcon(step.id, `w-6 h-6 ${index === currentStep ? 'text-white' : 'text-gray-600'}`)
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{step.title}</h3>
                      <p className="text-sm text-gray-600">{step.description}</p>
                    </div>
                    {index === currentStep && (
                      <ChevronRight className="w-5 h-5 text-[#8C1D40]" />
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Current Step Details */}
          <div className="space-y-6">
            <Card className="border-0 shadow-xl">
              <CardHeader className={`${demoSteps[currentStep].color} text-white`}>
                <div className="flex items-center space-x-3">
                  {getStepIcon(demoSteps[currentStep].id, "w-8 h-8")}
                  <div>
                    <CardTitle className="text-2xl">{demoSteps[currentStep].title}</CardTitle>
                    <CardDescription className="text-white/90">
                      Step {currentStep + 1} of {demoSteps.length}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Your Input:</h4>
                    <div className="bg-gray-50 p-3 rounded-lg border-l-4 border-[#8C1D40]">
                      <p className="text-sm text-gray-700 italic">"{demoSteps[currentStep].prompt}"</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">AI Output:</h4>
                    <div className="bg-green-50 p-3 rounded-lg border-l-4 border-green-500">
                      {isGenerating && currentStep < demoSteps.length - 1 ? (
                        <div className="flex items-center space-x-2">
                          <Loader2 className="w-4 h-4 animate-spin text-green-600" />
                          <span className="text-sm text-green-700">AI is generating...</span>
                        </div>
                      ) : (
                        <p className="text-sm text-green-700">{demoSteps[currentStep].output}</p>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Progress Bar */}
            <div className="bg-gray-200 rounded-full h-2">
              <div 
                className="bg-[#8C1D40] h-2 rounded-full transition-all duration-500"
                style={{ width: `${((currentStep + 1) / demoSteps.length) * 100}%` }}
              ></div>
            </div>
            
            <div className="text-center text-sm text-gray-600">
              Progress: {currentStep + 1} / {demoSteps.length} steps completed
            </div>
          </div>
        </div>

        {/* Demo Results */}
        <div className="bg-gradient-to-r from-[#8C1D40] to-[#FFC627] rounded-2xl p-8 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <Wand2 className="w-16 h-16 mx-auto mb-6 text-[#FFC627]" />
            <h3 className="text-3xl font-bold mb-4">From Idea to Game in Minutes</h3>
            <p className="text-xl text-white/90 mb-6">
              This entire process takes just 10-15 minutes with AI assistance, 
              compared to weeks or months with traditional development methods.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold mb-2">15 min</div>
                <div className="text-sm text-white/80">AI-Assisted Development</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold mb-2">6 weeks</div>
                <div className="text-sm text-white/80">Traditional Solo Development</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold mb-2">6 months</div>
                <div className="text-sm text-white/80">Team Development</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemo;

