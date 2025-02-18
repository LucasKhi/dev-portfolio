import { Star } from "lucide-react"

export default function Recognitions() {
  const recognitions = [

  ]

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold mb-8">Reconhecimentos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {recognitions.map((recognition, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <Star className="mr-2 text-blue-500" />
              <h3 className="text-xl font-semibold">{recognition.title}</h3>
            </div>
            <p className="text-gray-600">Empresa: {recognition.organization}</p>
            <p className="text-gray-600">Ano: {recognition.year}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

