import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
// import Services from "./components/Services";
import Contact from "./components/Contact";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Certifications from "./components/Certifications";
import Languages from "./components/Languages";
// import Recognitions from "./components/Recognitions";
import Experiences from "./components/Experiences";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header/>
      <main className="flex-1 container mx-auto px-4 py-8">
        <AboutMe />
        <Experiences />
        <Portfolio />
        <Certifications />
        {/* <Services /> */}
        <Languages />
        <Contact />
        <CTA />
        {/* <Recognitions /> */}
      </main>
        <Footer />
    </div>

  );
}

export default App;