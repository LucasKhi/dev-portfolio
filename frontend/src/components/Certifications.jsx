import { Code, Layout, Database, Figma } from "lucide-react";

export default function Portfolio() {
  const skills = [
    {
      category: "Front-end",
      items: ["Angularjs", "Angular", "Vue.js", "React", "HTML5", "CSS3", "SASS", "Javascript", "Typescript"],
      icon: <Layout className="mr-2 text-blue-500" />,
    },
    {
      category: "Back-end",
      items: ["PHP", "Laravel", "CodeIgniter", "Lumen", 'Node'],
      icon: <Code className="mr-2 text-green-500" />,
    },
    {
      category: "Banco de Dados",
      items: ["MySQL", "PostgreSQL"],
      icon: <Database className="mr-2 text-purple-500" />,
    },
    {
      category: "Outros",
      items: ["UI/UX", "Figma", "Git", "GitLab", "Github"],
      icon: <Figma className="mr-2 text-pink-500" />,
    },
  ];

  return (
    <section id="portfolio" className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Habilidades Técnicas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {skills.map((skillGroup, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                {skillGroup.icon}
                <h3 className="text-xl font-semibold">{skillGroup.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}