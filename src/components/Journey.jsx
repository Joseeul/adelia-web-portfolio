import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { Sparkles, GraduationCap, BriefcaseBusiness, FolderClosed } from "lucide-react";

const TimelineItem = ({ date, title, subtitle, images, onImageClick }) => (
  <div className="relative pl-6 pb-6 last:pb-2 group">
    {/* Vertical connecting line */}
    <div className="absolute left-[5px] top-[7px] bottom-0 w-[1.5px] bg-cream group-last:hidden"></div>
    {/* Node dot */}
    <div className="absolute left-0 top-[7px] w-2.5 h-2.5 rounded-full border border-cream bg-cream group-hover:bg-rose-light group-hover:scale-125 transition-all duration-300"></div>

    <div className="flex flex-col text-left">
      <span className="text-base font-bold text-cream tracking-wider font-abeezee mb-1">
        {date}
      </span>
      <h4 className="font-footlight text-[15px] sm:text-2xl font-bold text-cream leading-tight">
        {title}
      </h4>
      <p className="font-abeezee text-[12px] sm:text-base text-cream mt-1 whitespace-pre-line">
        {subtitle}
      </p>

      {/* Image / Video previews */}
      {images && images.length > 0 && (
        <div className="flex flex-wrap gap-3 mt-3">
          {images.map((img, idx) => {
            const isYouTube = img.image_url && (img.image_url.includes("youtube.com") || img.image_url.includes("youtu.be"));
            return (
              <div 
                key={img.id || idx}
                onClick={(e) => {
                  e.stopPropagation();
                  onImageClick(idx);
                }}
                className="w-20 sm:w-24 aspect-[4/3] rounded-xl overflow-hidden border border-cream/20 bg-cream/5 cursor-pointer hover:scale-105 active:scale-95 transition-all duration-300 hover:shadow-md shrink-0 flex items-center justify-center relative"
              >
                {isYouTube ? (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-red-950/20 text-rose-light border border-red-900/30">
                    <svg className="w-8 h-8 text-[#ff4b82]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11zm-13.5 4l6.5-4-6.5-4v8z" />
                    </svg>
                    <span className="text-[9px] font-bold mt-1 text-cream/70 uppercase font-abeezee">Video</span>
                  </div>
                ) : (
                  <img 
                    src={img.image_url} 
                    alt={img.description || "Preview"} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  </div>
);

export default function Journey() {
  const [experiences, setExperiences] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Lightbox Modal States
  const [activeExperience, setActiveExperience] = useState(null);
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  useEffect(() => {
    async function fetchExperiences() {
      try {
        setIsLoading(true);
        const { data, error: fetchError } = await supabase
          .from("experiences")
          .select("*, experience_images(*)")
          .order("order_position", { ascending: true })
          .order("created_at", { ascending: false });

        if (fetchError) throw fetchError;
        setExperiences(data || []);
      } catch (err) {
        console.error("Error fetching experiences:", err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchExperiences();
  }, []);

  // Keyboard navigation for image/video popup
  useEffect(() => {
    if (!activeExperience) return;
    const handleKeyDown = (e) => {
      const images = activeExperience.experience_images || [];
      if (images.length === 0) return;
      if (e.key === "ArrowLeft") {
        setActiveImageIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      } else if (e.key === "ArrowRight") {
        setActiveImageIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      } else if (e.key === "Escape") {
        setActiveExperience(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeExperience]);

  const educationData = experiences.filter((exp) => exp.type === "education");
  const workData = experiences.filter((exp) => exp.type === "work experience");
  const otherData = experiences.filter((exp) => exp.type === "other projects");

  return (
    <section id="journey" className="py-24 bg-cream text-rose-dark relative">
      <div className="max-w-6xl mx-auto px-6 font-abeezee">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 text-xs sm:text-4xl font-footlight tracking-widest text-black mb-2">
            <Sparkles className="w-9 h-9 text-rose-dark" />
            Academic, Work & Project
          </div>
          <h2 className="font-footlight text-3xl sm:text-4xl lg:text-5xl text-black mt-6">
            My <span className="text-rose-dark underline">Academic</span> and{" "}
            <span className="text-rose-dark underline">Professional</span>{" "}
            Journey
          </h2>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Education Card */}
          <div className="p-6 sm:p-8 bg-rose-dark rounded-3xl shadow-md hover:shadow-lg transition-shadow duration-300 md:col-start-1 md:row-start-1">
            <div className="flex items-center gap-3 text-cream mb-6 pb-2 border-b border-cream/10">
              <GraduationCap className="w-10 h-10 object-contain text-cream" />
              <h3 className="font-footlight text-xl sm:text-2xl font-bold">
                Education
              </h3>
            </div>
            <div className="flex flex-col">
              {isLoading ? (
                <div className="flex flex-col items-center justify-center py-6 text-cream/70">
                  <div className="w-6 h-6 border-2 border-cream border-t-transparent rounded-full animate-spin"></div>
                  <p className="mt-2 text-xs font-abeezee">Loading education...</p>
                </div>
              ) : error ? (
                <p className="text-xs text-red-300 font-abeezee font-semibold text-center py-4">Failed to load</p>
              ) : educationData.length === 0 ? (
                <p className="text-xs text-cream/50 font-abeezee text-center py-4">No education history added.</p>
              ) : (
                educationData.map((item) => (
                  <TimelineItem
                    key={item.id}
                    date={item.time_range}
                    title={item.title}
                    subtitle={item.description}
                    images={item.experience_images}
                    onImageClick={(imgIdx) => {
                      setActiveExperience(item);
                      setActiveImageIdx(imgIdx);
                    }}
                  />
                ))
              )}
            </div>
          </div>

          {/* Work Experiences Card */}
          <div className="p-6 sm:p-8 bg-rose-dark rounded-3xl shadow-md hover:shadow-lg transition-shadow duration-300 md:col-start-2 md:row-start-1 md:row-span-2 h-full">
            <div className="flex items-center gap-3 text-cream mb-6 pb-2 border-b border-cream/10">
              <BriefcaseBusiness className="w-10 h-10 object-contain text-cream" />
              <h3 className="font-footlight text-xl sm:text-2xl font-bold">
                Work Experiences
              </h3>
            </div>
            <div className="flex flex-col">
              {isLoading ? (
                <div className="flex flex-col items-center justify-center py-6 text-cream/70">
                  <div className="w-6 h-6 border-2 border-cream border-t-transparent rounded-full animate-spin"></div>
                  <p className="mt-2 text-xs font-abeezee">Loading experiences...</p>
                </div>
              ) : error ? (
                <p className="text-xs text-red-300 font-abeezee font-semibold text-center py-4">Failed to load</p>
              ) : workData.length === 0 ? (
                <p className="text-xs text-cream/50 font-abeezee text-center py-4">No work experiences added.</p>
              ) : (
                workData.map((item) => (
                  <TimelineItem
                    key={item.id}
                    date={item.time_range}
                    title={item.title}
                    subtitle={item.description}
                    images={item.experience_images}
                    onImageClick={(imgIdx) => {
                      setActiveExperience(item);
                      setActiveImageIdx(imgIdx);
                    }}
                  />
                ))
              )}
            </div>
          </div>

          {/* Other Projects Card */}
          <div className="p-6 sm:p-8 bg-rose-dark rounded-3xl shadow-md hover:shadow-lg transition-shadow duration-300 md:col-start-1 md:row-start-2">
            <div className="flex items-center gap-3 text-cream mb-6 pb-2 border-b border-cream/10">
              <FolderClosed className="w-10 h-10 object-contain text-cream" />
              <h3 className="font-footlight text-xl sm:text-2xl font-bold">
                Other Projects
              </h3>
            </div>
            <div className="flex flex-col">
              {isLoading ? (
                <div className="flex flex-col items-center justify-center py-6 text-cream/70">
                  <div className="w-6 h-6 border-2 border-cream border-t-transparent rounded-full animate-spin"></div>
                  <p className="mt-2 text-xs font-abeezee">Loading projects...</p>
                </div>
              ) : error ? (
                <p className="text-xs text-red-300 font-abeezee font-semibold text-center py-4">Failed to load</p>
              ) : otherData.length === 0 ? (
                <p className="text-xs text-cream/50 font-abeezee text-center py-4">No projects added.</p>
              ) : (
                otherData.map((item) => (
                  <TimelineItem
                    key={item.id}
                    date={item.time_range}
                    title={item.title}
                    subtitle={item.description}
                    images={item.experience_images}
                    onImageClick={(imgIdx) => {
                      setActiveExperience(item);
                      setActiveImageIdx(imgIdx);
                    }}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal for Experience Images / Videos */}
      {activeExperience && activeExperience.experience_images && activeExperience.experience_images[activeImageIdx] && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md transition-opacity duration-300"
          onClick={() => setActiveExperience(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setActiveExperience(null)}
            className="absolute top-6 right-6 text-cream/80 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10 z-50 cursor-pointer"
            aria-label="Close modal"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Left Arrow (only show if multiple images exist) */}
          {activeExperience.experience_images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveImageIdx((prev) => 
                  prev === 0 ? activeExperience.experience_images.length - 1 : prev - 1
                );
              }}
              className="absolute left-6 w-14 h-14 rounded-full bg-white/5 hover:bg-white/15 active:scale-95 text-white flex items-center justify-center transition-all duration-300 cursor-pointer z-50 border border-white/10"
              aria-label="Previous image"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
          )}

          {/* Modal Content Box */}
          <div 
            className="relative max-w-4xl w-[90vw] max-h-[85vh] bg-rose-dark rounded-3xl p-6 border border-cream/10 shadow-2xl flex flex-col md:flex-row gap-6 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Media Display Container (Image or Video Iframe) */}
            <div className="flex-1 flex items-center justify-center bg-black/20 rounded-2xl overflow-hidden border border-cream/5 min-h-[300px] aspect-video relative">
              {activeExperience.experience_images[activeImageIdx].image_url && 
              (activeExperience.experience_images[activeImageIdx].image_url.includes("youtube.com") || 
               activeExperience.experience_images[activeImageIdx].image_url.includes("youtu.be")) ? (
                <iframe
                  className="w-full h-full absolute inset-0 rounded-2xl border-0"
                  src={activeExperience.experience_images[activeImageIdx].image_url}
                  title={activeExperience.experience_images[activeImageIdx].description || activeExperience.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <img
                  src={activeExperience.experience_images[activeImageIdx].image_url}
                  alt={activeExperience.experience_images[activeImageIdx].description || activeExperience.title}
                  className="max-h-[50vh] md:max-h-[70vh] object-contain rounded-lg"
                />
              )}
            </div>

            {/* Description / Info */}
            <div className="w-full md:w-[300px] flex flex-col justify-between text-left shrink-0">
              <div>
                <span className="text-xs font-bold text-cream/70 tracking-widest uppercase mb-1 block">
                  {activeExperience.time_range}
                </span>
                <h3 className="font-footlight text-2xl font-bold text-cream mb-4">
                  {activeExperience.title}
                </h3>
                
                {activeExperience.experience_images[activeImageIdx].description && (
                  <div className="mt-4 border-t border-cream/10 pt-4">
                    <span className="text-xs font-bold text-cream/50 tracking-wider uppercase mb-1 block">
                      Attachment Description
                    </span>
                    <p className="font-abeezee text-sm text-cream leading-relaxed whitespace-pre-line">
                      {activeExperience.experience_images[activeImageIdx].description}
                    </p>
                  </div>
                )}
              </div>

              {/* Page indicator */}
              {activeExperience.experience_images.length > 1 && (
                <div className="mt-6 text-xs text-cream/50 font-semibold font-abeezee">
                  Item {activeImageIdx + 1} of {activeExperience.experience_images.length}
                </div>
              )}
            </div>
          </div>

          {/* Right Arrow (only show if multiple images exist) */}
          {activeExperience.experience_images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveImageIdx((prev) => 
                  prev === activeExperience.experience_images.length - 1 ? 0 : prev + 1
                );
              }}
              className="absolute right-6 w-14 h-14 rounded-full bg-white/5 hover:bg-white/15 active:scale-95 text-white flex items-center justify-center transition-all duration-300 cursor-pointer z-50 border border-white/10"
              aria-label="Next image"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          )}
        </div>
      )}
    </section>
  );
}
