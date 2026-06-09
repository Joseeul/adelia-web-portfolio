import { Link } from "react-router-dom";
import { Brush } from "lucide-react";

export default function Portfolio() {
  const categories = [
    {
      title: "Drawings",
      description:
        "A selection of digital and traditional illustrations, character designs, and background concept art.",
      buttonText: "Discover Drawings",
      path: "/drawings",
      icon: (
        <svg
          className="w-12 h-12 text-rose-dark/45"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.53 16.122l9.37-9.37a2.25 2.25 0 113.182 3.182l-9.37 9.39a4.5 4.5 0 01-1.63 1.09l-3.02 1.008a.75.75 0 01-.94-.94l1.008-3.02a4.5 4.5 0 011.09-1.63z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 5.25l4 4M2.25 12a10.003 10.003 0 0015.75 8.25"
          />
        </svg>
      ),
    },
    {
      title: "Videos",
      description:
        "2D animated shorts, motion graphics, and video editing compilations showing motion principles and timing.",
      buttonText: "Discover Videos",
      path: "/videos",
      icon: (
        <svg
          className="w-12 h-12 text-rose-dark/45"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.75 9.75l5 2.25-5 2.25v-4.5z"
          />
        </svg>
      ),
    },
    {
      title: "Photos",
      description:
        "Landscape, portrait photography, and experimental photo manipulations capturing unique lighting and framing.",
      buttonText: "Discover Photos",
      path: "/photos",
      icon: (
        <svg
          className="w-12 h-12 text-rose-dark/45"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15a2.25 2.25 0 002.25-2.25V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-rose-dark text-cream relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 text-base sm:text-4xl font-footlight tracking-widest text-cream mb-2">
            <Brush className="w-5 h-5 sm:w-9 sm:h-9" />
            My Portfolio
          </div>
          <h2 className="font-footlight text-3xl sm:text-4xl lg:text-5xl text-cream mt-6">
            Discover My <span className="underline">Projects.</span>
          </h2>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="bg-white rounded-[32px] p-6 flex flex-col justify-between text-rose-dark shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <div>
                {/* Image Placeholder */}
                <div className="w-full aspect-[4/3] bg-rose-dark/5 rounded-[22px] flex items-center justify-center border border-rose-dark/10 overflow-hidden relative mb-6">
                  {/* Subtle hover zoom ring */}
                  <div className="absolute inset-0 bg-rose-dark/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  {/* App/Category Icon */}
                  <div className="transform group-hover:scale-110 transition-transform duration-500">
                    {cat.icon}
                  </div>
                </div>

                {/* Card Title */}
                <h3 className="font-footlight text-2xl font-bold text-left mb-3">
                  {cat.title}
                </h3>

                {/* Card Description */}
                <p className="font-abeezee text-sm text-rose-dark/80 leading-relaxed text-left mb-8">
                  {cat.description}
                </p>
              </div>

              {/* Action Button */}
              <Link
                to={cat.path}
                className="w-full py-3 bg-rose-dark text-cream hover:bg-[#b56e7c] active:scale-[0.98] rounded-full text-sm font-semibold font-abeezee shadow-sm hover:shadow-md transition-all duration-300 text-center block"
              >
                {cat.buttonText}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
