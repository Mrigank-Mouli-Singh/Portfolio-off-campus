import React from "react";
import { ExternalLink, Github, Star } from "lucide-react";
import { projects as projectData } from "../data/portfolioData";

const placeholderImage =
  "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200";

type Project = {
  title: string;
  description: string;
  image?: string;
  tech?: string[];
  demo?: string;
  github?: string;
};

const Projects: React.FC = () => {
  // Convert your data shape to the local `projects` shape used by the UI.
  const projects: (Project & { featured?: boolean })[] = projectData.map((p) => ({
    title: p.title ?? "Untitled Project",
    description: p.description ?? "",
    image: (p as any).image ?? placeholderImage,
    tech: p.tech ?? p.technologies ?? [],
    demo: p.demo ?? p.liveUrl ?? "",
    github: p.github ?? p.githubUrl ?? "",
    // mark as featured if demo exists (you can change this rule)
    featured: Boolean(p.demo),
  }));

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Some of my recent work showcasing different technologies and problem-solving approaches
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-200 group"
            >
              {project.featured && (
                <div className="relative">
                  <div className="absolute top-4 right-4 z-10">
                    <span className="inline-flex items-center px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 rounded-full text-sm font-medium">
                      <Star className="w-4 h-4 mr-1" />
                      Featured
                    </span>
                  </div>
                </div>
              )}

              <div className="relative overflow-hidden">
                <img
                  src={project.image || placeholderImage}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
                />
                <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {(project.tech || []).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.demo || "#"}
                    target="_blank"
                    rel="noreferrer"
                    className={`flex items-center ${
                      project.demo ? "text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300" : "text-gray-400 pointer-events-none"
                    } transition-colors duration-200`}
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Live Demo
                  </a>
                  <a
                    href={project.github || "#"}
                    target="_blank"
                    rel="noreferrer"
                    className={`flex items-center ${
                      project.github ? "text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300" : "text-gray-400 pointer-events-none"
                    } transition-colors duration-200`}
                  >
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
