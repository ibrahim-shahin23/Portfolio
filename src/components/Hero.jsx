import heroImage from "../assets/profile purple.jpeg";
import { useScroll } from "../contexts/ScrollContext";

const Hero = () => {

  const {scrollToSection} = useScroll()
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-4 lg:space-y-6">
              <div className="overflow-hidden">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white animate-fade-in-up">
                  Ibrahim Shahin
                </h1>
              </div>
              <div className="overflow-hidden">
                <h2 className="text-xl sm:text-2xl lg:text-3xl text-purple-300 font-light animate-fade-in-up animation-delay-300">
                  Software Engineer
                </h2>
              </div>
              <div className="overflow-hidden">
                <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0 animate-fade-in-up animation-delay-600">
                  Full Stack Developer specializing in modern web technologies and AI integration
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4 animate-fade-in-up animation-delay-900">
                <button onClick={()=>scrollToSection('projects')} className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                  View My Work
                </button>
                <button onClick={()=>scrollToSection('contact')} className="px-8 py-3 border border-purple-400 text-purple-300 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300">
                  Contact Me
                </button>
              </div>
            </div>
          </div>
          
          {/* Profile image */}
          <div className="flex-shrink-0 order-1 lg:order-2">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 animate-pulse"></div>
              <img 
                className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72 object-cover rounded-full border-4 border-white/20 shadow-2xl group-hover:scale-105 transition-transform duration-500" 
                src={heroImage} 
                alt="Ibrahim Shahin - Software Engineer" 
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx="true">{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animation-delay-300 {
          animation-delay: 0.3s;
          opacity: 0;
        }
        
        .animation-delay-600 {
          animation-delay: 0.6s;
          opacity: 0;
        }
        
        .animation-delay-900 {
          animation-delay: 0.9s;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default Hero;