import { Briefcase } from "lucide-react";

export default function Experiences() {
  const experiences = [
    {
      title: "Desenvolvedor de Sistemas",
      company: "Grupo Alertrack",
      period: "2022 - Atualmente",
      description:
        "Atuação no desenvolvimento e manutenção de sistemas legados e novos projetos utilizando PHP e Laravel. Implementação de APIs, webhooks e middlewares para controle de usuários. Criação de interfaces responsivas com Vue.js, Angular e React.",
    },
    {
      title: "Analista de Suporte Computacional",
      company: "Grupo Alertrack",
      period: "2018 - 2022",
      description:
        "Atuação na área de infraestrutura, liderando a equipe na gestão de ambientes de TI e no suporte técnico. Participação na construção e configuração de servidores para novos serviços internos, garantindo escalabilidade e segurança. Realização de manutenções preventivas e corretivas, monitoramento de desempenho e estabilidade dos sistemas, além da implementação e otimização de processos para aumentar a eficiência operacional.",
    },
  ];

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold mb-8">Experiência Profissional</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <Briefcase className="mr-2 text-blue-500" />
              <h3 className="text-xl font-semibold">{exp.title}</h3>
            </div>
            <p className="text-gray-600 mb-2">{exp.company}</p>
            <p className="text-gray-500 mb-4">{exp.period}</p>
            <p className="text-gray-600">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
