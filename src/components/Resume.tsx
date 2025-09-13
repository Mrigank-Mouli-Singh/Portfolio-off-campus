import React from 'react';
import { Download, FileText, Eye } from 'lucide-react';

const Resume: React.FC = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/res.pdf';
    link.download = 'Mrigank_Mouli_Singh_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleView = () => {
    window.open('/res.pdf', '_blank');
  };

  return (
    <section id="resume" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Resume
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-teal-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-8 shadow-lg">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center">
                <FileText className="w-12 h-12 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                Download My Resume
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Get a comprehensive overview of my skills, experience, and achievements. 
                My resume includes detailed information about my projects, technical skills, 
                and academic background.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleView}
                  className="flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 font-medium"
                >
                  <Eye size={20} />
                  View Resume
                </button>
                
                <button
                  onClick={handleDownload}
                  className="flex items-center justify-center gap-3 px-8 py-4 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-all duration-300 hover:scale-105 font-medium"
                >
                  <Download size={20} />
                  Download PDF
                </button>
              </div>

              <div className="mt-8 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-600">
                <div className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <FileText size={16} />
                  <span>PDF Format • Updated September 2025</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
