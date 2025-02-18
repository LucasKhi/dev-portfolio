import {
  Code,
  ExternalLink,
  Loader,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useEffect, useState } from "react";
import { fetchGitHubRepos } from "../services/githubService";

export default function Portfolio() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetchGitHubRepos("lucaskhi").then((repos) => {
      const excludedRepos = ["target-sistemas-test", "lucaskhi"];

      const formattedRepos = repos
        .filter((repo) => !repo.fork)
        .filter((repo) => !excludedRepos.includes(repo.name))
        .map((repo) => ({
          title: repo.name,
          description: repo.description || "Sem descrição",
          link: repo.html_url,
        }));
      setProjects(formattedRepos);
      setLoading(false);
    });
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + 1, Math.ceil(projects.length / 3) - 1)
    );
  };

  const visibleProjects = projects.slice(
    currentIndex * 3,
    currentIndex * 3 + 3
  );

  if (loading) {
    return (
      <section id="portfolio" className="py-16">
        <h2 className="text-3xl font-bold mb-8">Portfolio</h2>
        <div className="flex justify-center">
          <Loader className="animate-spin text-blue-500" size={32} />
        </div>
      </section>
    );
  }

  return (
    <section id="portfolio" className="py-16">
      <h2 className="text-3xl font-bold mb-8">Portfolio</h2>
      <div className="relative">
        {/* Botão de navegação para a esquerda */}
        {currentIndex > 0 && (
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 z-10"
          >
            <ChevronLeft size={24} className="text-blue-500" />
          </button>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col"
              style={{ minHeight: "255px" }}
            >
              <div className="flex items-center mb-4">
                <Code className="mr-2 text-blue-500" />
                <h3 className="text-xl font-semibold truncate">
                  {project.title}
                </h3>
              </div>
              <p className="text-gray-600 overflow-hidden text-ellipsis">
                {project.description}
              </p>
              <div className="mt-auto">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600 flex items-center"
                >
                  Ver Projeto <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {currentIndex < Math.ceil(projects.length / 3) - 1 && (
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 z-10"
          >
            <ChevronRight size={24} className="text-blue-500" />
          </button>
        )}
      </div>
    </section>
  );
}
