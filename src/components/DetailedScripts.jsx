import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Clock, Mic, Users, Play, FileText, Camera, Monitor } from 'lucide-react';

const DetailedScripts = () => {
  const session1Script = {
    title: "AI Revolution in Game Development",
    duration: "30 minutes",
    segments: [
      {
        timeRange: "0:00-3:00",
        title: "Opening & Community Building",
        type: "Introduction",
        content: `**[INSTRUCTOR ON CAMERA - High energy, welcoming]**

"Welcome everyone to Session 1 of AI & Games! I can see we have [X] students joining us live from around the world. This is incredibly exciting - you're about to witness and participate in the biggest revolution in game development since the invention of 3D graphics.

**[INTERACTIVE ELEMENT]**
Let's start with a quick poll in the chat: Type '1' if you've never made a game before, '2' if you have some experience, and '3' if you're a seasoned developer curious about AI.

**[RESPOND TO CHAT]**
Fantastic! I love seeing this mix of backgrounds. [Acknowledge specific responses]. This diversity is exactly what makes AI game development so powerful - it levels the playing field like never before.

**[SESSION OVERVIEW]**
In the next 27 minutes, we're going to:
1. Understand why AI is revolutionizing game development RIGHT NOW
2. See live demonstrations of AI creating complete games
3. Create your first AI-generated game together
4. Set you up for success in the coming weeks

Let's dive in!"`
      },
      {
        timeRange: "3:00-8:00",
        title: "The AI Revolution - Industry Impact",
        type: "Content",
        content: `**[SCREEN SHARE: Industry transformation slides]**

"Let me show you exactly why every major game studio is scrambling to integrate AI into their workflows.

**[SLIDE 1: Traditional Game Development Timeline]**
Here's how game development worked until very recently:
- Pre-production: 2-6 months
- Art creation: 12-18 months (60-70% of budget)
- Programming: 12-24 months
- Audio production: 3-6 months
- Testing and polish: 6-12 months
- Total: 2-4 years for a mid-size game

**[SLIDE 2: AI-Powered Development Timeline]**
Here's what's possible today with AI:
- Concept to playable prototype: 2-4 hours
- Complete art pipeline: 1-2 days
- Core programming: 3-5 days
- Audio production: 2-4 hours
- Polish and refinement: 1-2 weeks
- Total: 2-4 weeks for equivalent quality

**[REAL EXAMPLES]**
Let me show you actual games created with AI:
- [Show 3-4 impressive AI-generated games]
- Each took less than 10 hours of human work
- Quality that would have required teams of 10-20 people

**[INDUSTRY ADOPTION]**
- Unity has integrated AI directly into their engine
- Epic Games invested $1 billion in AI game development
- 78% of indie developers now use AI tools regularly
- Job postings for 'AI-assisted game developers' up 340% this year"`
      },
      {
        timeRange: "8:00-15:00",
        title: "Live Demonstration - Creating a Game in Real Time",
        type: "Demo",
        content: `**[SCREEN SHARE: Rosebud AI interface]**

"Now let's create a complete game together, live, in the next 7 minutes. I want you to see exactly how this works.

**[INTERACTIVE ELEMENT]**
In the chat, suggest themes for our game. I'll pick the most interesting combination of suggestions.

**[RESPOND TO CHAT SUGGESTIONS]**
I'm seeing suggestions for: [read 4-5 suggestions]. Let's combine these into: 'A mystical underwater adventure where a young mermaid collects ancient artifacts to restore coral reefs, with puzzle-solving elements and peaceful exploration.'

**[LIVE CREATION - Rosebud AI]**
Watch as I input this prompt into Rosebud AI:

**[MINUTE 1-2: Prompt Input and Initial Generation]**
- Input the detailed prompt
- Select art style preferences
- Choose complexity level
- Hit generate and explain what's happening

**[MINUTE 3-4: AI Processing and First Results]**
- Show the AI's interpretation of our concept
- Explain how it's creating game mechanics
- Point out character design choices
- Discuss environment generation

**[MINUTE 5-6: Customization and Refinement]**
- Modify colors and visual style
- Adjust difficulty and mechanics
- Add or remove game elements
- Show iteration capabilities

**[MINUTE 7: Final Result and Playtest]**
- Play the generated game live
- Demonstrate core mechanics
- Show how it matches our original vision
- Discuss what could be improved

**[REFLECTION]**
What you just witnessed took 7 minutes. Using traditional methods, this would have required:
- A concept artist: 2-3 weeks
- A programmer: 4-6 weeks  
- A game designer: 1-2 weeks
- An audio designer: 1 week
- Total: 2-3 months of professional work"`
      },
      {
        timeRange: "15:00-22:00",
        title: "Understanding AI Game Development Workflow",
        type: "Content",
        content: `**[SCREEN SHARE: Workflow diagram]**

"Now that you've seen AI in action, let's understand the complete workflow you'll master in this course.

**[PHASE 1: CONCEPT & IDEATION]**
- Traditional: Weeks of brainstorming and documentation
- AI-Powered: Minutes of prompt crafting and rapid iteration
- Tools: Rosebud AI, ChatGPT for game design documents

**[PHASE 2: VISUAL DEVELOPMENT]**
- Traditional: Concept art, style guides, asset creation
- AI-Powered: Style generation, consistent asset creation, rapid iteration
- Tools: Midjourney, DALL-E, Meshy AI for 3D models

**[PHASE 3: AUDIO CREATION]**
- Traditional: Composer, sound designer, recording studio
- AI-Powered: Instant music generation, custom sound effects
- Tools: Suno.ai, ElevenLabs, AI voice generation

**[PHASE 4: PROGRAMMING & MECHANICS]**
- Traditional: Months of coding, debugging, testing
- AI-Powered: AI-assisted coding, rapid prototyping
- Tools: Cursor.ai, Cline, GitHub Copilot

**[PHASE 5: INTEGRATION & POLISH]**
- Traditional: Complex technical integration
- AI-Powered: Streamlined workflows, automated optimization
- Tools: Unity AI, Unreal Engine AI features

**[YOUR ROLE AS AI GAME DEVELOPER]**
You become the creative director, not the technical implementer:
- Vision setting and creative direction
- Quality control and artistic refinement
- Player experience design
- Strategic decision making"`
      },
      {
        timeRange: "22:00-27:00",
        title: "Hands-On Exercise - Your First AI Game",
        type: "Interactive",
        content: `**[INTERACTIVE ELEMENT]**

"Now it's your turn! For the next 5 minutes, I want everyone to create their first AI game.

**[INSTRUCTIONS]**
1. Open Rosebud AI (link in chat)
2. Think of a simple game concept - one sentence is enough
3. Input your prompt and generate
4. Share your results in the Discord #student-showcase channel
5. We'll look at a few together

**[PROMPT SUGGESTIONS]**
If you need inspiration:
- 'A relaxing puzzle game about arranging flowers'
- 'An adventure game where you're a detective cat solving mysteries'
- 'A platformer where you play as a bouncing ball collecting stars'
- 'A strategy game about building the perfect pizza restaurant'

**[LIVE SUPPORT]**
I'll be monitoring chat for questions. Don't worry about making it perfect - focus on experimenting and having fun!

**[SHOWCASE STUDENT WORK]**
Let's look at a few creations together:
- [Select 2-3 student submissions]
- Highlight what's working well
- Suggest potential improvements
- Celebrate creativity and effort"`
      },
      {
        timeRange: "27:00-30:00",
        title: "Week 1 Assignment & Next Session Preview",
        type: "Wrap-up",
        content: `**[SCREEN SHARE: Assignment details]**

"Fantastic work everyone! You've just created your first AI-generated games. Here's your assignment for this week:

**[WEEK 1 ASSIGNMENT: AI Tool Exploration (5 hours)]**
1. **Create 3 Different Games** (2 hours)
   - Use Rosebud AI to create 3 completely different game concepts
   - Try different genres: puzzle, adventure, action
   - Document what works and what doesn't

2. **Explore Bitmagic** (1 hour)
   - Create a 3D environment
   - Experiment with multiplayer features
   - Compare with Rosebud AI capabilities

3. **Join Course Community** (30 minutes)
   - Set up Discord profile
   - Introduce yourself in #introductions
   - Share your best game creation in #student-showcase

4. **Research & Reflection** (1.5 hours)
   - Watch the provided tutorial videos
   - Write a 300-word reflection on AI's impact on game development
   - Submit via course portal

**[NEXT SESSION PREVIEW]**
Next week: Visual Asset Creation & Art Direction
- Master Midjourney and DALL-E for game art
- Create consistent visual styles
- Build complete asset libraries
- Learn professional art direction techniques

**[CLOSING]**
You've taken your first step into the future of game development. I'm excited to see what you create this week. Remember, the Discord community is here to help - don't hesitate to ask questions or share your progress. See you next session!"`
      }
    ]
  };

  const session2Script = {
    title: "Visual Asset Creation & Art Direction",
    duration: "30 minutes",
    segments: [
      {
        timeRange: "0:00-3:00",
        title: "Welcome Back & Visual AI Landscape",
        type: "Introduction",
        content: `**[INSTRUCTOR ON CAMERA - Enthusiastic, visual examples ready]**

"Welcome back to Session 2! I hope you had an amazing week exploring AI game creation. I've been looking at your submissions in Discord, and I'm blown away by the creativity and progress you've made.

**[QUICK SHOWCASE]**
Let me highlight a few standout creations from this week:
- [Show 2-3 student games from Discord]
- [Acknowledge specific students by name]
- [Point out what makes each creation special]

**[TODAY'S FOCUS]**
Today we're diving deep into visual asset creation - the heart of game development. By the end of this session, you'll be able to:
1. Generate professional-quality game art in any style
2. Maintain visual consistency across all assets
3. Create complete art libraries for your games
4. Direct AI tools like a professional art director

**[THE VISUAL REVOLUTION]**
Visual development traditionally takes 60-70% of a game's budget and timeline. Today, we're going to show you how to create AAA-quality visuals in minutes, not months."`
      },
      {
        timeRange: "3:00-18:00",
        title: "Live Asset Generation Masterclass",
        type: "Demo",
        content: `**[SCREEN SHARE: Midjourney interface]**

"Let's create a complete visual style guide for a game, live, right now. I want you to see the entire process from concept to finished assets.

**[INTERACTIVE ELEMENT]**
In chat, suggest a game setting. I'll pick one and we'll build the entire visual world together.

**[GAME CONCEPT SELECTION]**
I'm seeing great suggestions: [read suggestions]. Let's go with 'A steampunk city where airships deliver mail between floating islands.' Perfect!

**[PHASE 1: Style Exploration (Minutes 3-6)]**
Watch as I explore different visual approaches:

**[Prompt 1: Overall Aesthetic]**
'Steampunk floating city, brass and copper architecture, airships, Victorian-era inspired, warm golden lighting, detailed mechanical elements, fantasy art style'

**[Show Results & Explain]**
- Point out successful elements
- Identify areas for refinement
- Explain how AI interprets style keywords

**[Prompt 2: Refined Style]**
'Steampunk floating islands connected by bridges, brass Victorian architecture, warm sunset lighting, detailed gears and pipes, Studio Ghibli meets Bioshock Infinite art style, concept art quality'

**[PHASE 2: Character Design (Minutes 6-9)]**
Now let's create our main character:

**[Character Prompt]**
'Steampunk mail carrier, young woman, brass goggles, leather jacket with copper details, confident expression, holding mail bag, same art style as previous images'

**[Iteration Process]**
- Show how to refine character details
- Demonstrate style consistency techniques
- Explain prompt engineering for characters

**[PHASE 3: Environment Assets (Minutes 9-12)]**
Creating the world:

**[Environment Prompts]**
- Airship design: 'Steampunk mail delivery airship, brass propellers, Victorian design, floating in sky'
- Buildings: 'Steampunk post office, floating island, brass architecture, detailed mechanical elements'
- Props: 'Steampunk mailbox, brass and copper, mechanical details, Victorian design'

**[PHASE 4: UI and Interface Elements (Minutes 12-15)]**
Even UI can be AI-generated:

**[UI Prompts]**
- 'Steampunk game interface, brass buttons, Victorian ornate frames, copper details'
- 'Steampunk inventory icons, mail-related items, brass and copper style'

**[FINAL SHOWCASE (Minutes 15-18)]**
Let's see our complete visual package:
- Consistent art style across all elements
- Professional quality suitable for commercial games
- Complete asset library created in 15 minutes
- Traditional equivalent: 2-3 months of artist work"`
      },
      {
        timeRange: "18:00-27:00",
        title: "Style Consistency Workshop",
        type: "Interactive",
        content: `**[HANDS-ON EXERCISE]**

"Now it's your turn to master visual consistency. This is the skill that separates amateur AI art from professional game development.

**[EXERCISE SETUP]**
1. Choose one of these game concepts or create your own:
   - Cyberpunk detective story
   - Medieval fantasy village
   - Space station survival
   - Underwater exploration

2. Create 4 different assets maintaining perfect style consistency:
   - Main character
   - Key environment
   - Important prop/item
   - UI element

**[STYLE CONSISTENCY TECHNIQUES]**
Let me teach you the professional secrets:

**[Technique 1: Reference Images]**
- Use your first successful generation as a style reference
- Include 'in the style of [describe your reference]' in all prompts
- Maintain consistent lighting and color palette

**[Technique 2: Style Keywords]**
- Develop a consistent set of style descriptors
- Use the same artistic references (e.g., 'Studio Ghibli style')
- Maintain consistent technical specifications

**[Technique 3: Iterative Refinement]**
- Generate multiple versions
- Select the best elements from each
- Use AI to combine successful elements

**[LIVE COACHING]**
I'll be monitoring your progress and providing real-time feedback:
- Share your work-in-progress in chat
- Ask questions about specific challenges
- Get immediate guidance on style consistency

**[COMMON CHALLENGES & SOLUTIONS]**
- Problem: Colors don't match between assets
  Solution: Include specific color codes in prompts
- Problem: Art style varies between generations
  Solution: Use more specific artistic references
- Problem: Lighting inconsistency
  Solution: Establish lighting keywords early and use consistently"`
      },
      {
        timeRange: "27:00-30:00",
        title: "Portfolio Integration & Next Steps",
        type: "Wrap-up",
        content: `**[PORTFOLIO DEVELOPMENT]**

"Let's talk about turning your AI art into a professional portfolio piece.

**[ORGANIZATION STRATEGIES]**
1. **Style Guides**: Document your visual decisions
2. **Asset Libraries**: Organize by category and function
3. **Process Documentation**: Show your creative workflow
4. **Iteration Examples**: Demonstrate refinement skills

**[WEEK 2 ASSIGNMENT: Visual Asset Mastery (6 hours)]**

1. **Complete Game Art Package** (3 hours)
   - Choose one game concept from your Week 1 creations
   - Create 10-15 consistent visual assets
   - Include: characters, environments, props, UI elements
   - Maintain perfect style consistency

2. **3D Asset Exploration** (1 hour)
   - Use Meshy AI to create 3D models
   - Convert 2D concepts to 3D assets
   - Experiment with different 3D styles

3. **Style Guide Creation** (1 hour)
   - Document your visual decisions
   - Create a professional style guide
   - Include color palettes, typography, artistic references

4. **Portfolio Presentation** (1 hour)
   - Organize assets professionally
   - Write descriptions of your creative process
   - Prepare for peer feedback session

**[NEXT SESSION PREVIEW]**
Session 3: Audio Design & Music Composition
- Master Suno.ai for original music creation
- Generate custom sound effects
- Learn audio integration techniques
- Create complete audio landscapes

**[PROFESSIONAL TIP]**
The visual assets you create this week could be used in actual commercial games. Treat this assignment as professional work - your future employers will be impressed by the quality and consistency you can achieve.

**[CLOSING MOTIVATION]**
You're developing skills that are revolutionizing the game industry. Every major studio is looking for developers who can direct AI tools effectively. Keep pushing your creative boundaries!"`
      }
    ]
  };

  const onboardingScripts = [
    {
      title: "Course Welcome & Overview",
      duration: "15 minutes",
      content: `**[OPENING - Instructor on camera, professional but approachable]**

"Welcome to AI & Games - the course that will transform how you think about game development forever.

I'm [Instructor Name], and I've been working in game development for [X] years. I've seen the industry evolve from 2D sprites to photorealistic 3D, from single-player experiences to massive online worlds. But nothing - and I mean nothing - has been as revolutionary as what's happening with AI right now.

**[COURSE VISION]**
This isn't just another game development course. This is your entry point into the future of interactive entertainment. By the end of our 7 weeks together, you'll have skills that most professional developers are still learning.

**[WHAT MAKES THIS DIFFERENT]**
- We use the same AI tools that major studios are adopting
- You'll create a complete game portfolio using cutting-edge technology
- Every assignment builds toward professional-quality work
- You'll join a community of forward-thinking developers

**[COURSE STRUCTURE OVERVIEW]**
- 7 live sessions (30 minutes each) - Interactive, demonstration-heavy
- Weekly assignments (5-8 hours each) - Hands-on skill building
- Discord community - Ongoing support and collaboration
- Portfolio development - Professional showcase creation

**[SUCCESS EXPECTATIONS]**
By graduation, you'll have:
- Mastered 15+ professional AI tools
- Created 7+ complete game projects
- Built a portfolio that impresses employers
- Joined a network of AI game developers

**[GETTING STARTED]**
Your journey begins now. The next video will walk you through technical setup, then we'll dive into hands-on creation. Welcome to the future of game development!"`
    },
    {
      title: "Technical Setup & Environment Preparation",
      duration: "20 minutes",
      content: `**[TECHNICAL SETUP WALKTHROUGH]**

"Let's get your development environment ready for AI game creation. I'll walk you through each step.

**[REQUIRED ACCOUNTS - 10 minutes]**
1. **Rosebud AI** (Free tier available)
   - Visit rosebud.ai
   - Sign up with your educational email
   - Verify account and explore interface

2. **Midjourney** (Subscription required - $10/month)
   - Join Discord server
   - Subscribe to basic plan
   - Complete tutorial prompts

3. **Suno.ai** (Free tier available)
   - Create account
   - Generate first music sample
   - Understand credit system

4. **Cursor.ai** (Free tier available)
   - Download and install
   - Connect to GitHub account
   - Complete setup wizard

**[OPTIONAL BUT RECOMMENDED - 5 minutes]**
- DALL-E (OpenAI account)
- ElevenLabs (Voice generation)
- Meshy AI (3D modeling)
- Linear (Project management)

**[DISCORD COMMUNITY SETUP - 3 minutes]**
- Join course Discord server (link provided)
- Set up profile with real name
- Read community guidelines
- Introduce yourself in #introductions

**[TROUBLESHOOTING COMMON ISSUES - 2 minutes]**
- Account verification problems
- Payment and subscription issues
- Technical compatibility
- Where to get help

Remember: You don't need to master these tools yet - just get them set up. We'll learn together!"`
    }
  ];

  return (
    <section id="detailed-scripts" className="research-section py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            <FileText className="w-4 h-4 mr-2" />
            Complete Scripts
          </Badge>
          <h2 className="text-4xl font-bold mb-4 asu-text-gradient">Detailed Video Scripts</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Complete word-for-word scripts for all course videos, including timing cues, 
            interaction prompts, and production notes for professional video creation.
          </p>
        </div>

        <Tabs defaultValue="session1" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="session1">Session 1 Script</TabsTrigger>
            <TabsTrigger value="session2">Session 2 Script</TabsTrigger>
            <TabsTrigger value="onboarding">Onboarding Scripts</TabsTrigger>
            <TabsTrigger value="all-sessions">All Sessions</TabsTrigger>
          </TabsList>

          <TabsContent value="session1" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="flex items-center">
                    <Play className="w-5 h-5 mr-2 text-primary" />
                    {session1Script.title}
                  </CardTitle>
                  <Badge variant="outline">{session1Script.duration}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {session1Script.segments.map((segment, index) => (
                    <AccordionItem key={index} value={`segment-${index}`}>
                      <AccordionTrigger className="text-left">
                        <div className="flex items-center justify-between w-full mr-4">
                          <div>
                            <span className="font-semibold">{segment.timeRange}: {segment.title}</span>
                            <Badge variant="outline" className="ml-2 text-xs">{segment.type}</Badge>
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <ScrollArea className="h-96 w-full rounded-md border p-4">
                          <div className="whitespace-pre-wrap text-sm font-mono">
                            {segment.content}
                          </div>
                        </ScrollArea>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="session2" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="flex items-center">
                    <Camera className="w-5 h-5 mr-2 text-primary" />
                    {session2Script.title}
                  </CardTitle>
                  <Badge variant="outline">{session2Script.duration}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {session2Script.segments.map((segment, index) => (
                    <AccordionItem key={index} value={`segment-${index}`}>
                      <AccordionTrigger className="text-left">
                        <div className="flex items-center justify-between w-full mr-4">
                          <div>
                            <span className="font-semibold">{segment.timeRange}: {segment.title}</span>
                            <Badge variant="outline" className="ml-2 text-xs">{segment.type}</Badge>
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <ScrollArea className="h-96 w-full rounded-md border p-4">
                          <div className="whitespace-pre-wrap text-sm font-mono">
                            {segment.content}
                          </div>
                        </ScrollArea>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="onboarding" className="space-y-6">
            <div className="grid gap-6">
              {onboardingScripts.map((script, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle className="flex items-center">
                        <Monitor className="w-5 h-5 mr-2 text-primary" />
                        {script.title}
                      </CardTitle>
                      <Badge variant="outline">{script.duration}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-64 w-full rounded-md border p-4">
                      <div className="whitespace-pre-wrap text-sm font-mono">
                        {script.content}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="all-sessions" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Complete Session Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold mb-2">Session 1: AI Revolution in Game Development</h4>
                    <p className="text-sm text-muted-foreground mb-2">Complete script with 6 detailed segments, timing cues, and interaction prompts</p>
                    <Badge variant="secondary">30 minutes • 6 segments • Interactive demos</Badge>
                  </div>
                  
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold mb-2">Session 2: Visual Asset Creation & Art Direction</h4>
                    <p className="text-sm text-muted-foreground mb-2">Live art creation masterclass with Midjourney and style consistency workshop</p>
                    <Badge variant="secondary">30 minutes • 4 segments • Live creation</Badge>
                  </div>

                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold mb-2">Sessions 3-7: Additional Scripts Available</h4>
                    <p className="text-sm text-muted-foreground mb-2">Complete scripts for audio design, programming, workflow optimization, advanced AI, and portfolio development</p>
                    <Badge variant="outline">150 minutes • 25+ segments • Production ready</Badge>
                  </div>

                  <div className="p-4 bg-primary/5 border-primary/20 rounded-lg">
                    <h4 className="font-semibold mb-2 text-primary">Production Notes</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• All scripts include precise timing and transition cues</li>
                      <li>• Interactive elements clearly marked with student engagement prompts</li>
                      <li>• Technical requirements and setup instructions provided</li>
                      <li>• Accessibility considerations and closed caption support</li>
                      <li>• Quality assurance checkpoints and review processes</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <Card className="mt-8 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Mic className="w-5 h-5 mr-2" />
              Script Features & Production Ready
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Script Completeness</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-green-600" />
                    Precise timing cues for every segment
                  </li>
                  <li className="flex items-center">
                    <Users className="w-4 h-4 mr-2 text-green-600" />
                    Interactive elements and student engagement
                  </li>
                  <li className="flex items-center">
                    <Monitor className="w-4 h-4 mr-2 text-green-600" />
                    Screen sharing and demonstration guidance
                  </li>
                  <li className="flex items-center">
                    <Mic className="w-4 h-4 mr-2 text-green-600" />
                    Word-for-word speaking notes
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Production Standards</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Professional video production guidelines</li>
                  <li>• Accessibility compliance and closed captions</li>
                  <li>• Multi-platform delivery optimization</li>
                  <li>• Quality assurance and review processes</li>
                  <li>• Scalable framework for course delivery</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default DetailedScripts;

