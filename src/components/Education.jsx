import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Educational
            <span className="block text-purple-600">Background</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            My academic journey and qualifications
          </p>
        </div>

        {/* Education Card */}
        <div className="max-w-4xl mx-auto">
          <div className="group relative">
            {/* Gradient background with glassmorphism effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
            
            <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 sm:p-12 shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-500 transform hover:scale-[1.02]">
              {/* Main Content */}
              <div className="text-center space-y-8">
                {/* Graduation Cap Icon */}
                <div className="relative mx-auto w-24 h-24 sm:w-32 sm:h-32">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-lg opacity-30 animate-pulse"></div>
                  <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 rounded-full w-full h-full flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-500">
                    <GraduationCap className="w-12 h-12 sm:w-16 sm:h-16 text-white" />
                  </div>
                </div>

                {/* Degree Information */}
                <div className="space-y-4">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                    Bachelor of Engineering
                  </h3>
                  <p className="text-xl sm:text-2xl text-purple-600 font-semibold">
                    Computers and Automatic Control Department
                  </p>
                </div>

                {/* University and Details */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-8">
                  {/* University */}
                  <div className="flex flex-col items-center space-y-3 p-6 bg-white/50 rounded-2xl backdrop-blur-sm border border-white/30 hover:bg-white/70 transition-all duration-300">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-center">
                      <p className="font-semibold text-gray-800 text-lg">University</p>
                      <p className="text-gray-600">Tanta University</p>
                    </div>
                  </div>

                  {/* Duration */}
                  <div className="flex flex-col items-center space-y-3 p-6 bg-white/50 rounded-2xl backdrop-blur-sm border border-white/30 hover:bg-white/70 transition-all duration-300">
                    <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-center">
                      <p className="font-semibold text-gray-800 text-lg">Duration</p>
                      <p className="text-gray-600">2019 - 2024</p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex flex-col items-center space-y-3 p-6 bg-white/50 rounded-2xl backdrop-blur-sm border border-white/30 hover:bg-white/70 transition-all duration-300">
                    <div className="p-3 bg-gradient-to-r from-green-500 to-teal-500 rounded-full">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-center">
                      <p className="font-semibold text-gray-800 text-lg">Location</p>
                      <p className="text-gray-600">Tanta, Egypt</p>
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl border border-purple-100">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">Key Focus Areas</h4>
                  <div className="flex flex-wrap justify-center gap-3">
                    {[
                      'Software Engineering',
                      'Control Systems',
                      'Computer Programming',
                      'Digital Signal Processing',
                      'Embedded Systems',
                      'Automation',
                      'Database Systems',
                      'Web Development'
                    ].map((subject, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-white text-purple-700 rounded-full text-sm font-medium border border-purple-200 hover:bg-purple-50 transition-colors duration-200"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-6 right-6 w-20 h-20 bg-gradient-to-br from-purple-400/20 to-blue-500/20 rounded-full blur-2xl"></div>
              <div className="absolute bottom-6 left-6 w-16 h-16 bg-gradient-to-tr from-pink-400/20 to-purple-500/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>

        {/* Academic Achievements */}
        <div className="mt-12 max-w-2xl mx-auto">
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-100">
            <h4 className="text-xl font-bold text-gray-800 mb-6 text-center">Academic Highlights</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">5 Years</div>
                <div className="text-gray-600">Engineering Study</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">2024</div>
                <div className="text-gray-600">Graduation Year</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;