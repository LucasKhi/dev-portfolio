

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2025 Lucas Souza. Todos os direitos reservados.</p>
          </div>
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/in/slucas-souza/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              GitHub
            </a>
            <a href="https://github.com/LucasKhi" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              Linkedin
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

