import { Globe } from "lucide-react"

export default function Languages() {
  const languages = [
    { name: "Inglês", proficiency: "Avançado" },
    { name: "Português", proficiency: "Nativo" },
    { name: "Espanhol", proficiency: "Básico" },
  ]

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold mb-8">Idiomas</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {languages.map((lang, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <Globe className="mr-2 text-blue-500" />
              <h3 className="text-xl font-semibold">{lang.name}</h3>
            </div>
            <p className="text-gray-600">Nível: {lang.proficiency}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

