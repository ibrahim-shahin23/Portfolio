// src/contexts/ScrollContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the context
const ScrollContext = createContext();

// Custom hook to use the scroll context
export const useScroll = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error('useScroll must be used within a ScrollProvider');
  }
  return context;
};

// Context provider component
export const ScrollProvider = ({ children }) => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolling, setIsScrolling] = useState(false);
  
  // Define navigation items
  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ];

  // Scroll to section function
  const scrollToSection = (sectionId) => {
    setIsScrolling(true);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
    
    // Reset scrolling state after animation completes
    setTimeout(() => setIsScrolling(false), 1000);
  };

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling) return; // Don't update during programmatic scrolling
      
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolling]);

  // Context value
  const value = {
    scrollToSection,
    activeSection,
    navItems,
    isScrolling
  };

  return (
    <ScrollContext.Provider value={value}>
      {children}
    </ScrollContext.Provider>
  );
};

export default ScrollContext;