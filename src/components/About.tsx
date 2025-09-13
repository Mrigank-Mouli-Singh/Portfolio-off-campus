import React from 'react';
import { User } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <div className="w-64 h-64 mx-auto md:mx-0 mb-8 relative">
                {/* Profile Picture Container */}
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-xl">
                  <img
                    src="/profile-photo.jpg"
                    alt="Mrigank Mouli Singh"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Gradient Ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-teal-500 opacity-20 animate-pulse"></div>
              </div>
            </div>
            
            <div>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                {personalInfo.bio}
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="font-semibold text-gray-800 dark:text-white min-w-[80px]">
                    Email:
                  </span>
                  <a 
                    href={`mailto:${personalInfo.email}`}
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {personalInfo.email}
                  </a>
                </div>
                
                <div className="flex items-center gap-4">
                  <span className="font-semibold text-gray-800 dark:text-white min-w-[80px]">
                    Location:
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">
                    Bengaluru, India
                  </span>
                </div>
                
                <div className="flex items-center gap-4">
                  <span className="font-semibold text-gray-800 dark:text-white min-w-[80px]">
                    Status:
                  </span>
                  <span className="text-green-600 dark:text-green-400">
                    Available for opportunities
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;