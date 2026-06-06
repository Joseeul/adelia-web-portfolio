import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Journey from "./components/Journey";
import Tools from "./components/Tools";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-cream text-rose-dark selection:bg-rose-light selection:text-cream overflow-x-hidden antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Journey />
        <Tools />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
