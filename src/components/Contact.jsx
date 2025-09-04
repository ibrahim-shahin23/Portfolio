import React, { useState } from 'react';
import { Mail, Linkedin, Github, Phone, Send, MapPin } from 'lucide-react';

const Contact = () => {
  const [hoveredContact, setHoveredContact] = useState(null);

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "ibrahimsaaed38@gmail.com",
      href: "mailto:ibrahimsaaed38@gmail.com",
      gradient: "from-red-500 to-orange-500",
      description: "Send me an email"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "Ibrahim Shahin",
      href: "https://www.linkedin.com/in/ibrahim-saeed-shahin",
      gradient: "from-blue-600 to-blue-700",
      description: "Connect with me"
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "ibrahim-shahin23",
      href: "https://github.com/ibrahim-shahin23",
      gradient: "from-gray-700 to-gray-900",
      description: "View my repositories"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+20 1115362939",
      href: "tel:+201115362939",
      gradient: "from-green-500 to-green-600",
      description: "Give me a call"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Let's Work
            <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Together
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Ready to bring your ideas to life? I'd love to hear from you and discuss how we can collaborate on your next project.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {contactInfo.map((contact, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredContact(index)}
              onMouseLeave={() => setHoveredContact(null)}
            >
              {/* Gradient background with glassmorphism effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              
              <a
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : '_self'}
                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : ''}
                className="relative block bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:bg-white/15"
              >
                {/* Icon */}
                <div className={`p-4 rounded-xl bg-gradient-to-r ${contact.gradient} mb-4 w-fit group-hover:scale-110 transition-transform duration-300`}>
                  {contact.icon}
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                    {contact.label}
                  </h3>
                  <p className="text-gray-300 text-sm mb-2">
                    {contact.description}
                  </p>
                  <p className="text-gray-200 font-medium break-all">
                    {contact.value}
                  </p>
                </div>

                {/* Hover effect arrow */}
                <div className={`absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform ${
                  hoveredContact === index ? 'translate-x-0' : 'translate-x-2'
                }`}>
                  <Send className="w-4 h-4 text-purple-400" />
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 sm:p-12 border border-white/20 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full">
                <MapPin className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Based in Tanta, Egypt
            </h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Available for remote work worldwide and local opportunities in Egypt. 
              Open to discussing full-time positions, freelance projects, and consulting opportunities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:ibrahimsaaed38@gmail.com"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <Mail className="w-5 h-5 mr-2" />
                Send Message
              </a>
              <a
                href="https://drive.google.com/file/d/19gMEIYDP2KW0FqIq84SkuRRTr7bzjf84/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 border border-purple-400 text-purple-300 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300"
              >
                <Send className="w-5 h-5 mr-2" />
                Download CV
              </a>
            </div>
          </div>
        </div>

        {/* Social Links Footer */}
        <div className="mt-16 pt-8 border-t border-white/20 text-center">
          <p className="text-gray-400 mb-4">Follow me on social media</p>
          <div className="flex justify-center space-x-6">
            {contactInfo.filter(contact => contact.href.startsWith('http')).map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;