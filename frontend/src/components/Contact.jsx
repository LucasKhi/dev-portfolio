import { Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-16">
      <h2 className="text-3xl font-bold mb-8">Contato</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Entre em Contato</h3>
          <ul className="space-y-4">
            <li className="flex items-center">
              <Mail className="mr-2 text-blue-500" />
              <span>slucas.souza@protonmail.com</span>
            </li>
            <li className="flex items-center">
              <Phone className="mr-2 text-blue-500" />
              <span>+55 (27) 99870-6935</span>
            </li>
            <li className="flex items-center">
              <MapPin className="mr-2 text-blue-500" />
              <span>Vitória/ES</span>
            </li>
          </ul>
        </div>
        <form className="space-y-4">
          <input type="text" placeholder="Nome" className="w-full p-2 border rounded" />
          <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
          <textarea placeholder="Mensagem" rows={4} className="w-full p-2 border rounded"></textarea>
          <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Enviar Mensagem
          </button>
        </form>
      </div>
    </section>
  )
}

