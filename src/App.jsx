import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import ResearchOverview from './components/ResearchOverview'
import MarketAnalysis from './components/MarketAnalysis'
import CurriculumSection from './components/CurriculumSection'
import VideoScripts from './components/VideoScripts'
import DetailedScripts from './components/DetailedScripts'
import CompetitivePosition from './components/CompetitivePosition'

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ResearchOverview />
        <MarketAnalysis />
        <CurriculumSection />
        <VideoScripts />
        <DetailedScripts />
        <CompetitivePosition />
      </main>
      
      {/* Footer */}
      <footer className="bg-muted/30 border-t py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 asu-gradient rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">AI</span>
                </div>
                <div>
                  <h3 className="font-bold asu-text-gradient">AI & Games Research</h3>
                  <p className="text-xs text-muted-foreground">ASU Course Development</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Comprehensive research and competitive analysis for ASU's innovative 
                AI & Games course development initiative.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Research Components</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Global market analysis (19+ programs)</li>
                <li>• Competitive positioning strategy</li>
                <li>• Complete curriculum design</li>
                <li>• Production-ready video scripts</li>
                <li>• Implementation roadmap</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Key Findings</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Significant market gaps identified</li>
                <li>• First-mover advantage opportunity</li>
                <li>• Strong competitive positioning</li>
                <li>• High market demand validation</li>
                <li>• Clear implementation pathway</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Research conducted July 2025 • Arizona State University • 
              <span className="asu-text-gradient font-semibold"> Innovation in AI Education</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

