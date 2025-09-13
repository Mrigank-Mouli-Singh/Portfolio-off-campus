import React from 'react';
import { Trophy, Target, Medal } from 'lucide-react';
import { achievements } from '../data/portfolioData';

const Achievements: React.FC = () => {
  const getAchievementIcon = (index: number) => {
    const icons = [Target, Medal, Trophy];
    const IconComponent = icons[index % icons.length];
    return <IconComponent className="w-8 h-8" />;
  };

  const getAchievementColor = (index: number) => {
    const colors = [
      'from-yellow-400 to-yellow-600',
      'from-purple-400 to-purple-600',
      'from-green-400 to-green-600'
    ];
    return colors[index % colors.length];
  };

  return (
    <section id="achievements" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Achievements
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700"
              >
                <div className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${getAchievementColor(index)} rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                    {getAchievementIcon(index)}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
                    {achievement}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;