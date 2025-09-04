import React, { useState } from 'react';
import { Calendar, MapPin, ExternalLink, ChevronDown } from 'lucide-react';

// Mock logos - replace with your actual images
import iti from "../assets/ITI logo.jpeg";
import voltrack from "../assets/voltrack_pro_logo.jpeg";
import appssquare from "../assets/apps_square_logo.jpeg";

const ExperienceCard = ({ 
  company,
  logo,
  jobTitle,
  location,
  duration,
  description,
  achievements,
  technologies,
  companyUrl = "#"
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="group relative w-full max-w-4xl mx-auto">
      {/* Gradient background with glassmorphism effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
      
      <div className="relative bg-white/90 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row items-start justify-between mb-6 gap-4">
          <div className="flex items-center space-x-4">
            {/* Company Logo with hover effect */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
              <img 
                src={logo} 
                alt={`${company} logo`}
                className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-xl object-cover border-2 border-white/20 shadow-lg transform group-hover:rotate-3 transition-transform duration-300"
              />
            </div>
            
            {/* Company and Title Info */}
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  {company}
                </h3>
                <a 
                  href={companyUrl}
                  className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
                >
                  <ExternalLink size={16} />
                </a>
              </div>
              <h4 className="text-lg sm:text-xl font-semibold text-blue-600">
                {jobTitle}
              </h4>
            </div>
          </div>

          {/* Duration Badge */}
          <div className="flex flex-col items-start sm:items-end space-y-2">
            <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium rounded-full shadow-lg">
              {duration}
            </span>
            <div className="flex items-center text-sm text-gray-600">
              <MapPin size={14} className="mr-1" />
              {location}
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-700 leading-relaxed mb-6 text-base sm:text-lg">
          {description}
        </p>

        {/* Technologies Used */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 text-sm rounded-full border border-gray-200 hover:scale-105 transition-transform duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Expandable Achievements Section */}
        <div className="border-t border-gray-200 pt-4">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center justify-between w-full text-left focus:outline-none group/btn"
          >
            <span className="text-lg font-semibold text-gray-800 group-hover/btn:text-blue-600 transition-colors duration-200">
              Key Achievements
            </span>
            <ChevronDown 
              size={20} 
              className={`text-gray-500 transform transition-all duration-300 group-hover/btn:text-blue-500 ${
                isExpanded ? 'rotate-180' : ''
              }`}
            />
          </button>
          
          {/* Animated achievements list */}
          <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isExpanded ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}>
            <ul className="space-y-3">
              {achievements.map((achievement, index) => (
                <li 
                  key={index}
                  className="flex items-start space-x-3 transform transition-all duration-300 hover:translate-x-2"
                  style={{
                    transitionDelay: isExpanded ? `${index * 100}ms` : '0ms'
                  }}
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    {achievement}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full blur-2xl" />
        <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-tr from-pink-400/10 to-blue-500/10 rounded-full blur-xl" />
      </div>
    </div>
  );
};

const Experience = () => {
  const experiences = [
    {
      company: "Apps Square",
      logo: appssquare,
      jobTitle: "Odoo Developer",
      location: "Tanta",
      duration: "Jul 2025 - Present",
      description: "Responsible for developing, customizing, and maintaining Odoo ERP modules to meet business requirements",
      achievements: [
        "Developed an ERP system for a leading holding company specializing in hearing aids, optics, and pharmacies managing clinic operations, appointments, insurance company integrations, and tax agency confirmations.",
        "Implemented an ERP solution for a trading company importing and distributing ironmongery handling accounting, sales, purchasing, manufacturing, and inventory processes."
      ],
      technologies: ["React", "Django", "Digital Ocean", "Odoo", "OWL", "Python"],
      companyUrl: "#"
    },
    {
      company: "Voltrack Pro",
      logo: voltrack,
      jobTitle: "Full Stack Developer",
      duration: "Mar 2025 - Jun 2025",
      location: "Tanta",
      description: "Built and maintained full-stack applications in a fast-paced startup environment, working closely with product and design teams to create user-centric solutions.",
      achievements: [
        "Worked on a fleet management software developing a real-time location tracking and live status detection server using Nest.js, Next.js, Socket.IO, MongoDB, and Firebase Cloud Messaging for mobile notifications.",
        "Collaborated closely with the mobile (Flutter) and testing teams to troubleshoot and resolve complex issues.",
        "Designed and implemented comprehensive dashboards for multiple administrative roles."
      ],
      technologies: ["React.js", "Next.js", "Nest.js", "MongoDB"],
      companyUrl: "#"
    },
    {
      company: "Information Technology Institute",
      logo: iti,
      jobTitle: "Full Stack Developer",
      duration: "Nov 2024 - Mar 2025",
      location: "Tanta",
      description: "Full Stack Development Intensive Training Program.",
      achievements: [
        "Gained hands-on experience in Python programming, Django, Flask, and Odoo for back-end development.",
        "Created databases with MySQL and PostgreSQL.",
        "Built responsive front-end applications with React framework, Bootstrap and MUI.",
        "Learned version control with Git and containerization with Docker.",
        "Enhanced soft skills, including presentation, communication, and interviewing techniques."
      ],
      technologies: ["HTML", "CSS", "Javascript", "React", "PostgreSQL", "Python", "Django", "Odoo", "Flask", "Git", "Docker"],
      companyUrl: "#"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Professional
            <span className="block text-purple-600">Experience</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A showcase of my professional journey and achievements
          </p>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;