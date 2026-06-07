import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero";
import About from "../components/About";
import Journey from "../components/Journey";
import Tools from "../components/Tools";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      <Hero />
      <About />
      <Journey />
      <Tools />
      <Portfolio />
      <Contact />
    </>
  );
}
