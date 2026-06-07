import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logo.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      if (location.pathname !== "/") {
        navigate("/" + href);
      } else {
        const targetId = href === "#" ? "html" : href;
        const element = document.querySelector(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  const navLinks = [
    { name: "Overview", href: "#" },
    { name: "About Me", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/90 backdrop-blur-md shadow-md py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="w-full px-6 sm:px-12 flex justify-between items-center">
        {/* Brand Logo */}
        <Link
          to="/"
          onClick={(e) => handleNavClick(e, "#")}
          className="hover:opacity-80 transition-opacity duration-200 flex items-center"
        >
          <img
            src={logo}
            alt="Adelia Wiratma Logo"
            className="h-9 md:h-13 w-auto"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6 font-abeezee text-base font-medium text-rose-dark/95">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-rose-dark after:transition-all after:duration-300 hover:after:w-full transition-colors hover:text-rose-dark"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="px-4 py-2.5 bg-rose-dark text-cream hover:bg-[#b56e7c] active:scale-95 text-base font-medium rounded-full font-abeezee shadow-sm hover:shadow-md transition-all duration-300"
          >
            Contact Me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-rose-dark focus:outline-none p-1"
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`md:hidden fixed top-17.5 left-0 w-full bg-cream shadow-xl border-t border-rose-dark/10 transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-80 opacity-100 py-6" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <ul className="flex flex-col space-y-4 px-6 font-abeezee text-base font-medium text-rose-dark">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={(e) => {
                  setIsOpen(false);
                  handleNavClick(e, link.href);
                }}
                className="block py-2 border-b border-rose-dark/5 hover:text-rose-light transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={(e) => {
                setIsOpen(false);
                handleNavClick(e, "#contact");
              }}
              className="inline-block w-full text-center px-6 py-2.5 bg-rose-dark text-cream hover:bg-[#b56e7c] rounded-full text-sm font-medium shadow-sm transition-colors"
            >
              Contact Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
