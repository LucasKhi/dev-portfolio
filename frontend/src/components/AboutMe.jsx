import imageProfile from "../assets/images/profile.jpeg";

export default function AboutMe() {
  return (
    <section id="about" className="py-16 ">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
          <div className="w-48 h-48 rounded-full overflow-hidden">
            <img
                src={imageProfile} 
                alt="Lucas Silva e Souza"
                className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="md:w-2/3">
          <h2 className="text-3xl font-bold mb-4">Lucas Silva e Souza</h2>
          <p className="text-gray-600">
            Profissional com experiência em desenvolvimento de sistemas, atuando tanto em front-end quanto back-end.
            Trabalhou com manutenção de sistemas legados e na construção de novas aplicações, focando em escalabilidade,
            performance e segurança. Possui experiência na implementação de middlewares, otimização de regras de negócio
            e desenvolvimento de interfaces responsivas. Sempre comprometido com boas práticas de desenvolvimento e a
            entrega de soluções eficientes.
          </p>
        </div>
      </div>
    </section>
  )
}

