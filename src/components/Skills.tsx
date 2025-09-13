import React from 'react';
import { Code2, Database, Cloud, Wrench } from 'lucide-react';
import { skills } from '../data/portfolioData';

const Skills: React.FC = () => {
  const getSkillIcon = (skill: string) => {
    const databases = ['SQL', 'MongoDB', 'MySQL'];
    const cloud = ['AWS', 'Azure', 'Docker'];
    const tools = ['Git/GitHub', 'Linux'];
    
    if (databases.includes(skill)) return <Database className="w-5 h-5" />;
    if (cloud.includes(skill)) return <Cloud className="w-5 h-5" />;
    if (tools.includes(skill)) return <Wrench className="w-5 h-5" />;
    return <Code2 className="w-5 h-5" />;
  };

  const getSkillColor = (skill: string) => {
    const colors = [
      'from-blue-500 to-blue-600',
      'from-green-500 to-green-600', 
      'from-purple-500 to-purple-600',
      'from-red-500 to-red-600',
      'from-yellow-500 to-yellow-600',
      'from-indigo-500 to-indigo-600',
      'from-pink-500 to-pink-600',
      'from-teal-500 to-teal-600'
    ];
    return colors[skill.length % colors.length];
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700"
              >
                <div className="text-center">
                  <div className={`w-12 h-12 mx-auto mb-3 bg-gradient-to-br ${getSkillColor(skill)} rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                    {getSkillIcon(skill)}
                  </div>
                  <h3 className="text-sm font-medium text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {skill}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;