import { Server, Code, Shield } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Desenvolvimento Full Stack",
      description:
        "Criação de aplicações web completas, desde o back-end até o front-end, utilizando tecnologias modernas.",
      icon: Code,
    },
    {
      title: "Manutenção de Sistemas Legados",
      description:
        "Atualização e otimização de sistemas existentes, garantindo sua eficiência e compatibilidade.",
      icon: Server,
    },
    {
      title: "Implementação de Segurança",
      description:
        "Desenvolvimento de soluções seguras e implementação de melhores práticas de segurança em aplicações web.",
      icon: Shield,
    },
  ];

  return (
    <section id="services" className="py-16">
      <h2 className="text-3xl font-bold mb-8">Experiência</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <service.icon className="mr-2 text-blue-500" />
              <h3 className="text-xl font-semibold">{service.title}</h3>
            </div>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
