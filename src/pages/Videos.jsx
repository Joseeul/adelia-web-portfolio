import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Videos() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const videos = [
    {
      title: "Starlight Symphony",
      category: "2D Animation",
      duration: "1:45 Min",
      year: "2025",
      gradient: "from-[#8c4bff]/30 to-[#ff4b82]/30",
      description: "A short student animation studying character expression, acting, and fluid transitions.",
    },
    {
      title: "Rhythm of Life",
      category: "Motion Graphics",
      duration: "0:45 Min",
      year: "2024",
      gradient: "from-[#4bc3ff]/30 to-[#8c4bff]/30",
      description: "A dynamic kinetic typography and abstract shapes compilation synced to upbeat rhythm.",
    },
    {
      title: "The Lost Page",
      category: "Animatic & Storyboard",
      duration: "3:12 Min",
      year: "2024",
      gradient: "from-[#FEDD8C]/40 to-[#ffd3b6]/40",
      description: "Complete storyboard compilation showing narrative pacing and key pose composition.",
    },
    {
      title: "Chasing Shadows",
      category: "Animation Study",
      duration: "0:25 Min",
      year: "2025",
      gradient: "from-[#ffb6c4]/40 to-[#ffd3b6]/40",
      description: "Frame-by-frame practice focusing on timing, squash and stretch, and solid drawing.",
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
            Videos & Animates
          </h1>
          <p className="font-abeezee text-base sm:text-lg text-rose-dark/90 max-w-2xl leading-relaxed">
            A selection of 2D animated short films, animatics, storyboard reels, and motion graphic compile studies.
          </p>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl">
          {videos.map((video, index) => (
            <div
              key={index}
              className="bg-white rounded-[32px] p-5 flex flex-col justify-between text-rose-dark shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
            >
              <div>
                {/* Visual Block with play button overlay */}
                <div className={`w-full aspect-[16/9] bg-gradient-to-tr ${video.gradient} rounded-[22px] flex items-center justify-center overflow-hidden relative mb-5 border border-rose-dark/5 shadow-inner`}>
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  {/* Category & Duration Badges */}
                  <span className="absolute top-4 left-4 px-3 py-1 bg-white/95 text-rose-dark text-xs font-bold font-abeezee rounded-full shadow-sm">
                    {video.category}
                  </span>
                  <span className="absolute bottom-4 right-4 px-2.5 py-0.5 bg-black/60 text-white text-[11px] font-bold font-abeezee rounded-md shadow-sm">
                    {video.duration}
                  </span>
                  {/* Play Button Overlay */}
                  <div className="w-14 h-14 bg-white text-rose-dark rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-all duration-300 cursor-pointer">
                    <svg
                      className="w-6 h-6 fill-current translate-x-0.5"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                {/* Title & Info */}
                <div className="flex justify-between items-start mb-2 px-1">
                  <h3 className="font-footlight text-xl font-bold text-black text-left group-hover:text-rose-dark transition-colors">
                    {video.title}
                  </h3>
                  <span className="font-abeezee text-[11px] font-bold text-rose-light bg-rose-dark/5 px-2 py-0.5 rounded-md mt-1">
                    {video.year}
                  </span>
                </div>

                {/* Description */}
                <p className="font-abeezee text-[13px] text-rose-dark/85 text-left px-1 mb-4 leading-relaxed">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
