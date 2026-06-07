import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Photos() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const photos = [
    {
      title: "Golden Hour Silence",
      category: "Landscape",
      location: "Malang, East Java",
      year: "2024",
      gradient: "from-[#FEDD8C]/30 via-[#ffd3b6]/35 to-[#ffb6c4]/30",
      description: "Sunset photography capturing the warm rays illuminating the mountaintops.",
    },
    {
      title: "Urban Solitude",
      category: "Street",
      location: "Jakarta, Indonesia",
      year: "2025",
      gradient: "from-[#d4d4d4]/40 to-[#c68290]/25",
      description: "Black and white portrait of street vendors navigating the high-contrast city shadows.",
    },
    {
      title: "Reflections of Youth",
      category: "Portrait",
      location: "Studio",
      year: "2024",
      gradient: "from-[#ffb6c4]/40 to-[#8c4bff]/15",
      description: "Conceptual photo shoot exploring lighting reflections on mirrors and glass elements.",
    },
    {
      title: "Neon Nights",
      category: "Long Exposure",
      location: "Tangerang",
      year: "2025",
      gradient: "from-[#ff4b82]/20 via-[#8c4bff]/20 to-[#4bc3ff]/20",
      description: "Long-exposure night photography tracking traffic light trails under colorful neon signage.",
    },
    {
      title: "Nature's Geometry",
      category: "Macro",
      location: "Botanical Garden",
      year: "2024",
      gradient: "from-[#ffd3b6]/50 to-[#FEDD8C]/50",
      description: "Close-up macro study focusing on organic fractal patterns and water droplets on plant leaves.",
    },
    {
      title: "Lost in Time",
      category: "Architecture",
      location: "Old Town Batavia",
      year: "2025",
      gradient: "from-[#d4d4d4]/50 to-[#ffd3b6]/30",
      description: "Architectural frame detailing textures, colonial windows, and vintage shadows.",
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
            Photography Gallery
          </h1>
          <p className="font-abeezee text-base sm:text-lg text-rose-dark/90 max-w-2xl leading-relaxed">
            A visual journal of landscapes, street portraitures, and macro studies exploring light, lines, and compositions.
          </p>
        </div>

        {/* Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="bg-white rounded-[32px] p-5 flex flex-col justify-between text-rose-dark shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
            >
              <div>
                {/* Visual Block with camera lens overlay */}
                <div className={`w-full aspect-[4/3] bg-gradient-to-tr ${photo.gradient} rounded-[22px] flex items-center justify-center overflow-hidden relative mb-5 border border-rose-dark/5 shadow-inner`}>
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  {/* Category & Location Badges */}
                  <span className="absolute top-4 left-4 px-3 py-1 bg-white/95 text-rose-dark text-xs font-bold font-abeezee rounded-full shadow-sm">
                    {photo.category}
                  </span>
                  <span className="absolute bottom-4 left-4 text-[11px] font-medium font-abeezee text-rose-dark/75 bg-cream/80 px-2 py-0.5 rounded shadow-sm">
                    {photo.location}
                  </span>
                  {/* Camera Silhouette Icon */}
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
                      d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15a2.25 2.25 0 002.25-2.25V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
                    />
                  </svg>
                </div>

                {/* Title & Info */}
                <div className="flex justify-between items-start mb-2 px-1">
                  <h3 className="font-footlight text-xl font-bold text-black text-left group-hover:text-rose-dark transition-colors">
                    {photo.title}
                  </h3>
                  <span className="font-abeezee text-[11px] font-bold text-rose-light bg-rose-dark/5 px-2 py-0.5 rounded-md mt-1">
                    {photo.year}
                  </span>
                </div>

                {/* Description */}
                <p className="font-abeezee text-[13px] text-rose-dark/85 text-left px-1 mb-4 leading-relaxed">
                  {photo.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
