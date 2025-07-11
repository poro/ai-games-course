import { Button } from '@/components/ui/button';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink,
  Twitter,
  Linkedin,
  Youtube,
  Github
} from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Course Overview', href: '#overview' },
    { name: 'Curriculum', href: '#curriculum' },
    { name: 'Resources', href: '#resources' },
    { name: 'Community', href: '#community' },
    { name: 'Enrollment', href: '#get-started' }
  ];

  const resources = [
    { name: 'Course Catalog', href: '#' },
    { name: 'Academic Calendar', href: '#' },
    { name: 'Student Support', href: '#' },
    { name: 'Technical Requirements', href: '#' },
    { name: 'FAQ', href: '#' }
  ];

  const aiTools = [
    { name: 'Rosebud AI', href: '#' },
    { name: 'Bitmagic', href: '#' },
    { name: 'Suno.ai', href: '#' },
    { name: 'Cursor.ai', href: '#' },
    { name: 'Meshy AI', href: '#' }
  ];

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'YouTube', icon: Youtube, href: '#' },
    { name: 'GitHub', icon: Github, href: '#' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Course Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-[#8C1D40] to-[#FFC627] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">AI</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">AI & Games</h3>
                <p className="text-gray-400 text-sm">Arizona State University</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Master the art of game development using cutting-edge AI tools. 
              Create professional-quality games faster than ever before with artificial intelligence as your creative partner.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#FFC627]" />
                <span className="text-gray-300">aigames@asu.edu</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#FFC627]" />
                <span className="text-gray-300">(480) 965-2100</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-[#FFC627]" />
                <span className="text-gray-300">Tempe, Arizona</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-[#FFC627] transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <a 
                    href={resource.href} 
                    className="text-gray-300 hover:text-[#FFC627] transition-colors duration-200 text-sm flex items-center space-x-1"
                  >
                    <span>{resource.name}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* AI Tools */}
          <div>
            <h4 className="text-lg font-semibold mb-4">AI Tools</h4>
            <ul className="space-y-2">
              {aiTools.map((tool) => (
                <li key={tool.name}>
                  <a 
                    href={tool.href} 
                    className="text-gray-300 hover:text-[#FFC627] transition-colors duration-200 text-sm flex items-center space-x-1"
                  >
                    <span>{tool.name}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h4 className="text-lg font-semibold mb-2">Stay Updated</h4>
              <p className="text-gray-300 text-sm">Get the latest course updates and AI tool announcements</p>
            </div>
            <div className="flex space-x-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFC627]"
              />
              <Button className="bg-[#8C1D40] hover:bg-[#8C1D40]/90 text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Social Links & Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <span className="text-gray-400 text-sm">Follow us:</span>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-[#FFC627] transition-colors duration-200"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-[#FFC627] transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="hover:text-[#FFC627] transition-colors duration-200">Terms of Service</a>
              <a href="#" className="hover:text-[#FFC627] transition-colors duration-200">Accessibility</a>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-800 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 Arizona State University. All rights reserved. | 
              <span className="text-[#FFC627]"> AI & Games Course</span> | 
              Designed for the future of game development.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

