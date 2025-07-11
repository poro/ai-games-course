import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import endlessLabLogo from '../assets/endless-lab-logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 asu-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <div>
                <h1 className="font-bold asu-text-gradient">AI & Games Research</h1>
                <p className="text-xs text-muted-foreground">ASU Course Development</p>
              </div>
            </div>
            
            {/* Endless Lab Logo */}
            <div className="hidden sm:flex items-center space-x-2 pl-4 border-l border-muted">
              <img 
                src={endlessLabLogo} 
                alt="Endless Games and Learning Lab" 
                className="h-6 w-auto"
              />
              <span className="text-xs text-muted-foreground">Partner</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            <button
              onClick={() => scrollToSection('overview')}
              className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
            >
              Overview
            </button>
            <button
              onClick={() => scrollToSection('market-analysis')}
              className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
            >
              Market Analysis
            </button>
            <button
              onClick={() => scrollToSection('curriculum')}
              className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
            >
              Curriculum
            </button>
            <button
              onClick={() => scrollToSection('video-scripts')}
              className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
            >
              Video Scripts
            </button>
            <button
              onClick={() => scrollToSection('detailed-scripts')}
              className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
            >
              Detailed Scripts
            </button>
            <button
              onClick={() => scrollToSection('competitive-position')}
              className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
            >
              Competitive Position
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-2">
              <button
                onClick={() => scrollToSection('overview')}
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors text-left"
              >
                Overview
              </button>
              <button
                onClick={() => scrollToSection('market-analysis')}
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors text-left"
              >
                Market Analysis
              </button>
              <button
                onClick={() => scrollToSection('curriculum')}
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors text-left"
              >
                Curriculum
              </button>
              <button
                onClick={() => scrollToSection('video-scripts')}
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors text-left"
              >
                Video Scripts
              </button>
              <button
                onClick={() => scrollToSection('detailed-scripts')}
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors text-left"
              >
                Detailed Scripts
              </button>
              <button
                onClick={() => scrollToSection('competitive-position')}
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors text-left"
              >
                Competitive Position
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

