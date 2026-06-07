import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Drawings() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const drawings = [
    {
      title: "Whispers in the Woods",
      category: "Digital Illustration",
      year: "2025",
      gradient: "from-[#ffb6c4]/40 to-[#ffd3b6]/40",
      description: "A whimsical visual development piece exploring mood and natural lighting.",
    },
    {
      title: "Nebula Dreamer",
      category: "Character Concept",
      year: "2025",
      gradient: "from-[#8c4bff]/20 to-[#4bc3ff]/20",
      description: "Character development study with focus on sci-fi clothing and expression.",
    },
    {
      title: "Cozy Coffee Corner",
      category: "Background Art",
      year: "2024",
      gradient: "from-[#FEDD8C]/40 to-[#ffd3b6]/40",
      description: "Background layout study focusing on perspective, warm colors, and props.",
    },
    {
      title: "Spirit of the Samurai",
      category: "Character Acting",
      year: "2024",
      gradient: "from-[#ff4b82]/20 to-[#ffb6c4]/20",
      description: "A dynamic pose sketch exploring line weight and traditional ink style.",
    },
    {
      title: "Autumn Breeze",
      category: "Visual Development",
      year: "2025",
      gradient: "from-[#ffd3b6]/50 to-[#FEDD8C]/50",
      description: "Color script study capturing the transition of seasons and wind motion.",
    },
    {
      title: "The Clockwork Heart",
      category: "Storyboard Panel",
      year: "2024",
      gradient: "from-[#d4d4d4]/40 to-[#c68290]/25",
      description: "Keyframe drawing illustrating a crucial emotional beat in the story.",
    },
  ];

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
            Drawings & Illustrations
          </h1>
          <p className="font-abeezee text-base sm:text-lg text-rose-dark/90 max-w-2xl leading-relaxed">
            A curated showcase of my digital and traditional illustrations, character concept designs, and environment layouts.
          </p>
        </div>

        {/* Drawings Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {drawings.map((drawing, index) => (
            <div
              key={index}
              className="bg-white rounded-[32px] p-5 flex flex-col justify-between text-rose-dark shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
            >
              <div>
                {/* Visual Block with gradient (since we don't have physical images) */}
                <div className={`w-full aspect-[4/3] bg-gradient-to-tr ${drawing.gradient} rounded-[22px] flex items-center justify-center overflow-hidden relative mb-5 border border-rose-dark/5 shadow-inner`}>
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  {/* Category Badge */}
                  <span className="absolute top-4 left-4 px-3.5 py-1 bg-white/95 text-rose-dark text-xs font-bold font-abeezee rounded-full shadow-sm">
                    {drawing.category}
                  </span>
                  {/* Art Pen Silhouette Icon */}
                  <svg
                    className="w-12 h-12 text-rose-dark/25 transform group-hover:scale-110 transition-transform duration-300"
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
                </div>

                {/* Title & Info */}
                <div className="flex justify-between items-start mb-2 px-1">
                  <h3 className="font-footlight text-xl font-bold text-black text-left group-hover:text-rose-dark transition-colors">
                    {drawing.title}
                  </h3>
                  <span className="font-abeezee text-[11px] font-bold text-rose-light bg-rose-dark/5 px-2 py-0.5 rounded-md mt-1">
                    {drawing.year}
                  </span>
                </div>

                {/* Description */}
                <p className="font-abeezee text-[13px] text-rose-dark/85 text-left px-1 mb-4 leading-relaxed">
                  {drawing.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
