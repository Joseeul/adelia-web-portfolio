import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../lib/supabase";

export default function Drawings() {
  const [filter, setFilter] = useState("all");
  const [selectedIdx, setSelectedIdx] = useState(null);
  const [drawings, setDrawings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const filteredDrawings = drawings.filter(
    (drawing) => filter === "all" || drawing.type === filter
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    async function fetchDrawings() {
      try {
        setIsLoading(true);
        const { data, error: fetchError } = await supabase
          .from("portfolios")
          .select("*")
          .eq("category", "drawing")
          .order("created_at", { ascending: false });

        if (fetchError) throw fetchError;

        const mappedDrawings = (data || []).map((item) => ({
          id: item.id,
          image: item.file_url,
          type: item.subcategory === "digital art" ? "digital" : "manual",
          title: item.subcategory === "digital art" ? "Digital Art" : "Manual Art",
        }));
        setDrawings(mappedDrawings);
      } catch (err) {
        console.error("Error fetching drawings:", err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchDrawings();
  }, []);

  useEffect(() => {
    if (selectedIdx === null) return;
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        setSelectedIdx((prev) => (prev === 0 ? filteredDrawings.length - 1 : prev - 1));
      } else if (e.key === "ArrowRight") {
        setSelectedIdx((prev) => (prev === filteredDrawings.length - 1 ? 0 : prev + 1));
      } else if (e.key === "Escape") {
        setSelectedIdx(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIdx, filteredDrawings.length]);

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

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-start gap-3 mb-12 font-abeezee text-sm font-medium">
          <button
            onClick={() => setFilter("all")}
            className={`px-6 py-2.5 rounded-full border transition-all duration-300 cursor-pointer ${
              filter === "all"
                ? "bg-rose-dark text-cream border-rose-dark shadow-sm scale-105"
                : "border-rose-dark/20 text-rose-dark hover:bg-rose-dark/5 active:scale-95"
            }`}
          >
            All Drawings
          </button>
          <button
            onClick={() => setFilter("digital")}
            className={`px-6 py-2.5 rounded-full border transition-all duration-300 cursor-pointer ${
              filter === "digital"
                ? "bg-rose-dark text-cream border-rose-dark shadow-sm scale-105"
                : "border-rose-dark/20 text-rose-dark hover:bg-rose-dark/5 active:scale-95"
            }`}
          >
            Digital Drawings
          </button>
          <button
            onClick={() => setFilter("manual")}
            className={`px-6 py-2.5 rounded-full border transition-all duration-300 cursor-pointer ${
              filter === "manual"
                ? "bg-rose-dark text-cream border-rose-dark shadow-sm scale-105"
                : "border-rose-dark/20 text-rose-dark hover:bg-rose-dark/5 active:scale-95"
            }`}
          >
            Manual Drawings
          </button>
        </div>

        {/* Drawings Grid / Loading / Error / Empty States */}
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-20 w-full">
            <div className="w-12 h-12 border-4 border-rose-dark border-t-transparent rounded-full animate-spin animate-duration-1000"></div>
            <p className="mt-4 font-abeezee text-rose-dark/70">Loading artworks...</p>
          </div>
        ) : error ? (
          <div className="text-center py-20 w-full">
            <p className="font-abeezee text-red-500 font-semibold">Failed to load artworks</p>
            <p className="text-xs text-rose-dark/50 mt-1">{error}</p>
          </div>
        ) : filteredDrawings.length === 0 ? (
          <div className="text-center py-20 w-full">
            <p className="font-abeezee text-rose-dark/60 font-semibold">No drawings found.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDrawings.map((drawing, index) => (
              <div
                key={drawing.id || index}
                onClick={() => setSelectedIdx(index)}
                className="bg-white rounded-[32px] p-5 text-rose-dark shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
              >
                {/* Visual Block with image */}
                <div className="w-full aspect-[4/3] rounded-[22px] overflow-hidden relative border border-rose-dark/5 shadow-inner bg-rose-dark/5">
                  <img
                    src={drawing.image}
                    alt={drawing.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedIdx !== null && filteredDrawings[selectedIdx] && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md transition-opacity duration-300"
          onClick={() => setSelectedIdx(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedIdx(null)}
            className="absolute top-6 right-6 text-cream/80 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10 z-50 cursor-pointer"
            aria-label="Close modal"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Left Arrow Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIdx((prev) => (prev === 0 ? filteredDrawings.length - 1 : prev - 1));
            }}
            className="absolute left-6 w-14 h-14 rounded-full bg-white/5 hover:bg-white/15 active:scale-95 text-white flex items-center justify-center transition-all duration-300 cursor-pointer z-50 border border-white/10"
            aria-label="Previous artwork"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          {/* Modal Content / Visual Block */}
          <div 
            className="w-full max-w-3xl aspect-[4/3] px-6 relative flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full h-full bg-white rounded-[32px] overflow-hidden relative border border-white/10 shadow-2xl">
              <img
                src={filteredDrawings[selectedIdx].image}
                alt={filteredDrawings[selectedIdx].title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIdx((prev) => (prev === filteredDrawings.length - 1 ? 0 : prev + 1));
            }}
            className="absolute right-6 w-14 h-14 rounded-full bg-white/5 hover:bg-white/15 active:scale-95 text-white flex items-center justify-center transition-all duration-300 cursor-pointer z-50 border border-white/10"
            aria-label="Next artwork"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
