import React from 'react';

const About = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
          {/* Section title */}
          <div className="lg:w-1/3 flex-shrink-0">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 text-center lg:text-left sticky top-8">
              About
              <span className="block text-purple-600">Me</span>
            </h2>
          </div>
          
          {/* Content */}
          <div className="lg:w-2/3 space-y-6 lg:space-y-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg mb-4">
                Dynamic Full Stack Engineer and Odoo Developer with experience developing and customizing Odoo ERP
                modules, alongside building real-time fleet management software using Nest.js, Next.js, Socket.IO, MongoDB.
                Proficient in Python, Django, Flask, React, and database management with MySQL and PostgreSQL, complemented
                by hands-on expertise in AI, machine learning, and data analysis from internships at Huawei and NTI.
              </p>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                Skilled in creating responsive web applications and interactive dashboards, I am passionate about integrating AI with software
                systems to deliver innovative, smart solutions that optimize business processes and enhance user experiences.
              </p>
            </div>
            
            {/* Skills tags */}
            <div className="flex flex-wrap gap-2 sm:gap-3 pt-4">
              {['React', 'Django', 'Node.js', 'Python', 'AI/ML', 'MongoDB', 'PostgreSQL', 'Next.js'].map((skill) => (
                <span key={skill} className="px-3 py-1 sm:px-4 sm:py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors">
                  {skill}
                </span>
              ))}
            </div>
            
            <div className="pt-6">
              <a 
                href='https://drive.google.com/file/d/19gMEIYDP2KW0FqIq84SkuRRTr7bzjf84/view?usp=sharing' 
                target='_blank' 
                rel="noopener noreferrer"
                className='inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 text-sm sm:text-base'
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download My CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;