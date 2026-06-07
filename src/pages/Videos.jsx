import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Videos() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const videos = [
    {
      title: "Starlight Symphony",
      category: "2D Animation",
      year: "2025",
      youtubeId: "Owkr3YzkmJ8",
      description: "A short student animation studying character expression, acting, and fluid transitions.",
    },
    {
      title: "Rhythm of Life",
      category: "Motion Graphics",
      year: "2024",
      youtubeId: "eRsGyueVLvQ",
      description: "A dynamic kinetic typography and abstract shapes compilation synced to upbeat rhythm.",
    },
    {
      title: "The Lost Page",
      category: "Animatic & Storyboard",
      year: "2024",
      youtubeId: "R6MlUcmO1Mc",
      description: "Complete storyboard compilation showing narrative pacing and key pose composition.",
    },
  ];

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen bg-cream text-rose-dark pt-32 pb-24 relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] bg-[#FEDD8C]/15 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 -right-20 w-[450px] h-[450px] bg-rose-dark/10 rounded-full blur-[120px] pointer-events-none"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Back Button */}
        <Link
          to="/#portfolio"
          className="inline-flex items-center gap-2 text-rose-dark hover:text-[#b56e7c] font-semibold transition-colors font-abeezee group mb-8"
        >
          <svg
            className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
          Back to Portfolio
        </Link>

        {/* Page Title */}
        <div className="mb-12 text-left">
          <span className="font-abeezee text-sm font-semibold tracking-widest uppercase text-rose-dark/70 mb-2 block">
            Gallery
          </span>
          <h1 className="font-footlight text-4xl sm:text-5xl font-bold text-black mb-4">
            Videos & Animates
          </h1>
          <p className="font-abeezee text-base sm:text-lg text-rose-dark/90 max-w-2xl leading-relaxed">
            A selection of 2D animated short films, animatics, storyboard reels, and motion graphic compile studies.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="flex flex-col items-center max-w-4xl mx-auto w-full">
          {/* Main row (Desktop/Tablet) */}
          <div className="flex items-center justify-between w-full gap-4 sm:gap-6">
            {/* Left Arrow (Desktop/Tablet) */}
            <button
              onClick={prevSlide}
              className="hidden sm:flex w-12 h-12 rounded-full bg-rose-dark/5 hover:bg-rose-dark/10 active:scale-95 text-rose-dark items-center justify-center transition-all duration-300 cursor-pointer shrink-0"
              aria-label="Previous Video"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>

            {/* Video Viewport */}
            <div className="flex-1 aspect-[16/9] w-full bg-black/5 rounded-3xl border-4 border-rose-dark overflow-hidden shadow-lg relative z-10">
              <iframe
                className="w-full h-full absolute inset-0"
                src={`https://www.youtube.com/embed/${videos[currentIndex].youtubeId}`}
                title={videos[currentIndex].title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Right Arrow (Desktop/Tablet) */}
            <button
              onClick={nextSlide}
              className="hidden sm:flex w-12 h-12 rounded-full bg-rose-dark/5 hover:bg-rose-dark/10 active:scale-95 text-rose-dark items-center justify-center transition-all duration-300 cursor-pointer shrink-0"
              aria-label="Next Video"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>

          {/* Title & Description under the slide */}
          <div className="mt-8 text-center max-w-2xl px-4">
            <h2 className="font-footlight text-2xl sm:text-3xl font-bold text-black">
              {videos[currentIndex].title}
            </h2>
            <p className="font-abeezee text-sm sm:text-base text-rose-dark/85 mt-2 leading-relaxed">
              {videos[currentIndex].description}
            </p>
          </div>

          {/* Controls for Mobile / Dots for all */}
          <div className="flex items-center gap-6 mt-8">
            {/* Mobile Left Arrow */}
            <button
              onClick={prevSlide}
              className="flex sm:hidden w-10 h-10 rounded-full bg-rose-dark/5 hover:bg-rose-dark/10 text-rose-dark items-center justify-center transition-all duration-300 cursor-pointer"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>

            {/* Pagination Dots */}
            <div className="flex gap-2.5">
              {videos.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === idx
                      ? "bg-rose-dark scale-125 shadow-sm"
                      : "bg-rose-dark/20 hover:bg-rose-dark/40"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Mobile Right Arrow */}
            <button
              onClick={nextSlide}
              className="flex sm:hidden w-10 h-10 rounded-full bg-rose-dark/5 hover:bg-rose-dark/10 text-rose-dark items-center justify-center transition-all duration-300 cursor-pointer"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
