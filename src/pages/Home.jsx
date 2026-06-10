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
      const targetId = location.hash;
      const element = document.querySelector(targetId);
      if (element) {
        // Initial scroll
        element.scrollIntoView({ behavior: "smooth" });

        let userInteracted = false;
        const stopAutoScroll = () => {
          userInteracted = true;
          cleanup();
        };

        // Listen for user interactions to avoid fighting manual scrolls
        window.addEventListener("wheel", stopAutoScroll, { passive: true });
        window.addEventListener("touchmove", stopAutoScroll, { passive: true });
        window.addEventListener("keydown", stopAutoScroll, { passive: true });

        let lastHeight = document.body.scrollHeight;
        const observer = new ResizeObserver(() => {
          if (userInteracted) return;
          const currentHeight = document.body.scrollHeight;
          if (currentHeight !== lastHeight) {
            lastHeight = currentHeight;
            requestAnimationFrame(() => {
              const targetElement = document.querySelector(targetId);
              if (targetElement && !userInteracted) {
                targetElement.scrollIntoView({ behavior: "smooth" });
              }
            });
          }
        });

        observer.observe(document.body);

        const timeoutId = setTimeout(() => {
          cleanup();
        }, 2500);

        const cleanup = () => {
          observer.disconnect();
          clearTimeout(timeoutId);
          window.removeEventListener("wheel", stopAutoScroll);
          window.removeEventListener("touchmove", stopAutoScroll);
          window.removeEventListener("keydown", stopAutoScroll);
        };

        return cleanup;
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
