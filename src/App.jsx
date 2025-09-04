import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUp } from 'lucide-react';

// Import all components (these would be separate files in a real project)
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import { useScroll } from './contexts/ScrollContext';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollToSection, activeSection, navItems } = useScroll();
 
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-white/20 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-200"
            >
              Ibrahim Shahin
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                      : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-lg border-b border-white/20 shadow-xl">
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full px-4 py-3 rounded-xl text-left font-medium transition-all duration-200 ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                      : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );


};

// Scroll to Top Button
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 z-50"
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};

// Loading Component
const LoadingScreen = () => {
return (
<div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center z-50">
<div className="text-center">
<div className="w-16 h-16 border-4 border-purple-400 border-t-transparent rounded-full animate-spin mb-4"></div>
<p className="text-purple-300 text-lg font-semibold">Loading...</p>
</div>
</div>
);
};

// Main Portfolio Component tying all together
const App = () => {
const [loading, setLoading] = useState(true);

useEffect(() => {
// Simulate loading for example, or replace with real data fetching
const timer = setTimeout(() => {
setLoading(false);
}, 1500);
return () => clearTimeout(timer);
}, []);

if (loading) {
return <LoadingScreen />;
}

return (
<div>
<Navigation />
<main className="pt-16">
<section id="hero"><Hero scrollToSection={scroll} /></section>
<section id="about"><About /></section>
<section id="skills"><Skills /></section>
<section id="experience"><Experience /></section>
<section id="projects"><Projects /></section>
<section id="education"><Education /></section>
<section id="contact"><Contact /></section>
</main>
<ScrollToTop />
</div>
);
};

export default App;