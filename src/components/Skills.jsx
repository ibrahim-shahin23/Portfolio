import React, { useState } from 'react';
import { Code, Database, Globe, Wrench, BarChart, BrainCircuit, Star } from 'lucide-react';

const Skills = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const skillCategories = [
    {
      title: "Frontend Technologies",
      icon: <Globe className="w-6 h-6" />,
      gradient: "from-blue-500 to-cyan-500",
      skillHoverColor: "group-hover/skill:text-blue-500",
      skills: [
        { name: "HTML5", level: 95, icon: "🌐" },
        { name: "CSS3", level: 90, icon: "🎨" },
        { name: "JavaScript", level: 88, icon: "⚡" },
        { name: "React", level: 90, icon: "⚛️" },
        { name: "Next.js", level: 85, icon: "🚀" },
        { name: "Flutter", level: 80, icon: "📱" },
        { name: "Material-UI", level: 80, icon: "🎭" },
        { name: "Bootstrap", level: 95, icon: "📐" },
        { name: "jQuery", level: 80, icon: "📱" },
      ]
    },
    {
      title: "Backend Technologies",
      icon: <Code className="w-6 h-6" />,
      gradient: "from-purple-500 to-pink-500",
      skillHoverColor: "group-hover/skill:text-purple-500",
      skills: [
        { name: "Python", level: 92, icon: "🐍" },
        { name: "Django", level: 88, icon: "🎯" },
        { name: "Flask", level: 80, icon: "🔥" },
        { name: "Node.js", level: 85, icon: "🟢" },
        { name: "Nest.js", level: 82, icon: "🏠" },
        { name: "Odoo", level: 87, icon: "🔧" }
      ]
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6" />,
      gradient: "from-green-500 to-teal-500",
      skillHoverColor: "group-hover/skill:text-green-500",
      skills: [
        { name: "MySQL", level: 88, icon: "🐬" },
        { name: "PostgreSQL", level: 90, icon: "🐘" },
        { name: "MongoDB", level: 85, icon: "🍃" }
      ]
    },
    {
      title: "Tools & DevOps",
      icon: <Wrench className="w-6 h-6" />,
      gradient: "from-orange-500 to-red-500",
      skillHoverColor: "group-hover/skill:text-orange-500",
      skills: [
        { name: "GitHub", level: 90, icon: "🐙" },
        { name: "BitBucket", level: 80, icon: "🪣" },
        { name: "Docker", level: 82, icon: "🐳" },
        { name: "Git", level: 88, icon: "📝" }
      ]
    },
    {
      title: "Data & Analytics",
      icon: <BarChart className="w-6 h-6" />,
      gradient: "from-indigo-500 to-purple-500",
      skillHoverColor: "group-hover/skill:text-indigo-500",
      skills: [
        { name: "Machine Learning", level: 78, icon: "🧠" },
        { name: "Data Analysis", level: 82, icon: "📊" },
        { name: "Excel", level: 85, icon: "📈" },
        { name: "Power BI", level: 75, icon: "⚡" },
        { name: "Tableau", level: 70, icon: "🎯" }
      ]
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Technical
            <span className="block text-purple-600">Skills</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              onMouseEnter={() => setHoveredCategory(categoryIndex)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${category.gradient} text-white mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors duration-300">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group/skill">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg">{skill.icon}</span>
                        <span className={`font-medium text-gray-700 ${category.skillHoverColor} transition-colors duration-200`}>
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm font-semibold text-gray-500">
                        {skill.level}%
                      </span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${category.gradient} rounded-full transition-all duration-1000 ease-out transform origin-left`}
                        style={{
                          width: hoveredCategory === categoryIndex ? `${skill.level}%` : '0%',
                          transitionDelay: `${skillIndex * 100}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-purple-400/10 to-blue-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-tr from-pink-400/10 to-purple-500/10 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex flex-wrap justify-center items-center gap-6 text-gray-600">
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-500" />
                <span className="font-medium">3+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-2">
                <Code className="w-5 h-5 text-blue-500" />
                <span className="font-medium">Full Stack Development</span>
              </div>
              <div className="flex items-center space-x-2">
                <Database className="w-5 h-5 text-green-500" />
                <span className="font-medium">Database Design</span>
              </div>
              <div className="flex items-center space-x-2">
                <BrainCircuit className="w-5 h-5 text-purple-500" />
                <span className="font-medium">AI Integration</span>
              </div>
              <div className="flex items-center space-x-2">
                <BarChart className="w-5 h-5 text-pink-500" />
                <span className="font-medium">Data Analysis</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;