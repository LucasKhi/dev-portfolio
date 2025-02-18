import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setError("Erro ao enviar mensagem. Tente novamente.");
      }
    } catch {
      setError(`Erro ao enviar mensagem`);
    } finally {
      setLoading(false);
    }
  };

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
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Nome"
            className="w-full p-2 border rounded"
          />
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full p-2 border rounded"
          />
          <textarea
            placeholder="Mensagem"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full p-2 border rounded"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            {loading ? "Enviando..." : "Enviar Mensagem"}
          </button>
          {success && <p className="text-green-500 mt-4">Mensagem enviada com sucesso!</p>}
          {error && <p className="text-red-500 mt-4">{error}</p>}
        </form>
      </div>
    </section>
  );
}
