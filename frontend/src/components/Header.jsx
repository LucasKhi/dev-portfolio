import { Menu, X } from "lucide-react"
import { useState } from "react"

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-gray-800">
            Lucas Souza
          </a>
          <nav className="hidden md:flex space-x-4">
            <a href="#about" className="text-gray-600 hover:text-gray-800">
              Sobre
            </a>
            <a href="#portfolio" className="text-gray-600 hover:text-gray-800">
              Portfolio
            </a>
            <a href="#contact" className="text-gray-600 hover:text-gray-800">
              Contato
            </a>
          </nav>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {isMenuOpen && (
          <nav className="md:hidden bg-white px-4 py-2 flex flex-col space-y-2">
            <a href="#about" className="text-gray-600 hover:text-gray-800">
              Sobre
            </a>
            <a href="#portfolio" className="text-gray-600 hover:text-gray-800">
                Portfolio
            </a>
            <a href="#contact" className="text-gray-600 hover:text-gray-800">
              Contato
            </a>
          </nav>
        )}
      </header>
    );
  };
  
  export default Header;