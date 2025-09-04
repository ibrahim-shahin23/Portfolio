import React, { useState } from 'react';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      title: "Virtual Book Fair",
      description: "The Virtual Book Fair is an online platform designed to connect publishers, authors, and readers in a seamless digital environment. It offers three main interfaces: Admin Dashboard, Publisher Dashboard, and User Website, each providing specialized functionalities to manage accounts, books, sales, and user interactions efficiently.",
      link: "https://reader-hub-ui.vercel.app/",
      tech: ["React", "Django", "PostgreSQL"],
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Hotel Reservation System",
      description: "A hotel reservation full-stack web app built with Django and React enables users to browse, book, and manage hotel reservations seamlessly. Handles secure user authentication, database management (e.g., rooms, bookings, and availability), and API endpoints for CRUD operations.",
      link: "https://hotels-reservation-system-ui.vercel.app/",
      tech: ["React", "Django", "REST API"],
      gradient: "from-green-500 to-blue-500"
    },
    {
      title: "Movies App",
      description: "A front-end web application using React.js and Redux toolkit. The app allows users to view movies in different languages from the movie database API, search for their preferred movies, add movies to their wish list and display recommended movies.",
      link: "https://movie-app-git-main-ahmed-fathalla-s-projects.vercel.app/",
      tech: ["React", "Redux", "API Integration"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Inventory Management System",
      description: "A full-stack web application using Django framework. A centralized system that keeps track of shipments of products delivered to the warehouse from the factory, and products delivered to supermarkets (orders).",
      link: "https://www.linkedin.com/posts/ibrahim-saeed-shahin_django-webdevelopment-inventorymanagement-activity-7310391286845370368-vnYj?utm_source=share&utm_medium=member_desktop&rcm=ACoAADvZjcUBmp3cRiQ2LWzDqusaLR7hdXxnQ-M",
      tech: ["Django", "Python", "Database Design"],
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Technify Electronics Store",
      description: "Designed an e-commerce web application for electronics shopping with modern UI/UX and responsive design for optimal user experience across all devices.",
      link: "https://nouranelshazly.github.io/CST-Project/pages/home.html",
      tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
      gradient: "from-teal-500 to-green-500"
    },
    {
      title: "News Application",
      description: "Built an application to fetch and display the latest news, gold prices, and currency exchange rates using appropriate APIs with real-time data updates.",
      link: "https://drive.google.com/file/d/1fXV36kPQVsEZkMbzQnw0iCn4gpWWw40K/view?usp=sharing",
      tech: ["React.js", "API Integration", "Real-time Data"],
      gradient: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Section title */}
          <div className="lg:w-1/3 flex-shrink-0">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 text-center lg:text-left sticky top-8">
              My
              <span className="block text-purple-600">Projects</span>
            </h2>
          </div>
          
          {/* Projects grid */}
          <div className="lg:w-2/3">
            <div className="grid gap-6 sm:gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
                  onMouseEnter={() => setHoveredProject(index)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  {/* Project header with gradient */}
                  <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
                  
                  <div className="p-6 sm:p-8">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex-shrink-0">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${project.gradient} text-white rounded-full font-semibold text-sm hover:shadow-lg hover:scale-105 transition-all duration-300`}
                        >
                          <span className="mr-2">View Project</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${
                            hoveredProject === index
                              ? 'bg-purple-100 text-purple-700'
                              : 'bg-gray-100 text-gray-600'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;