import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import profilePhoto from "../assets/profile_photo.png";
import userIcon from "../assets/icons/user_icon.svg";
import eyeIcon from "../assets/icons/eye.svg";

export default function About() {
  const [resumeUrl, setResumeUrl] = useState("https://drive.google.com/file/d/1E3yoS9IFb07-W2-UTpNGacE-cq9CEozc/view?usp=drivesdk");
  const [counts, setCounts] = useState({ videos: 0, photos: 0, drawings: 0 });

  useEffect(() => {
    async function fetchResumeUrl() {
      try {
        const { data, error } = await supabase
          .from("site_settings")
          .select("resume_url")
          .maybeSingle();
        if (!error && data?.resume_url) {
          setResumeUrl(data.resume_url);
        }
      } catch (err) {
        console.error("Failed to fetch resume URL in About:", err);
      }
    }

    async function fetchProjectCounts() {
      try {
        const [videoRes, photoRes, drawingRes] = await Promise.all([
          supabase
            .from("portfolios")
            .select("*", { count: "exact", head: true })
            .eq("category", "videos"),
          supabase
            .from("portfolios")
            .select("*", { count: "exact", head: true })
            .eq("category", "photos"),
          supabase
            .from("portfolios")
            .select("*", { count: "exact", head: true })
            .eq("category", "drawing"),
        ]);

        setCounts({
          videos: videoRes.count || 0,
          photos: photoRes.count || 0,
          drawings: drawingRes.count || 0,
        });
      } catch (err) {
        console.error("Failed to fetch project counts in About:", err);
      }
    }

    fetchResumeUrl();
    fetchProjectCounts();
  }, []);

  return (
    <section id="about" className="py-24 bg-rose-dark text-cream relative">
      {/* Decorative vector background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 text-base sm:text-4xl font-footlight tracking-widest text-cream mb-2">
            <img src={userIcon} alt="User Icon" className="w-5 h-5 sm:w-9 sm:h-9" />
            About Me
          </div>
          <h2 className="font-footlight text-3xl sm:text-4xl lg:text-5xl font-bold text-cream">
            <span className="underline">Know Me</span> Better
          </h2>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* Left Side: Blob Photo Placeholder */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px]">
              {/* Main Photo Blob Frame */}
              <div className="absolute inset-2 bg-rose-light/20 flex items-center justify-center transition-transform duration-500 hover:scale-105">
                <img
                  src={profilePhoto}
                  alt="Adelia Portrait Photo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Side: Copy & Stats */}
          <div className="md:col-span-7 flex flex-col items-start text-left">
            <h3 className="font-footlight text-2xl sm:text-3xl font-bold text-cream mb-6">
              Hello! My name is <span className="underline">Adelia</span>
            </h3>
            <div className="space-y-4 font-abeezee text-[14px] sm:text-base text-cream leading-relaxed">
              <p>
                As a fourth-semester Animation student at BINUS University, I
                love transforming ideas into compelling visuals—from dynamic
                animations to charming greeting card illustrations. I anchor my
                creative process in meticulous attention to detail, a strong
                work ethic, and a collaborative spirit that helps team projects
                flourish.
              </p>
            </div>

            {/* Metrics Row */}
            <div className="grid grid-cols-3 gap-4 mt-8 w-full">
              <div className="p-4 bg-cream/10 rounded-2xl border border-cream/20 text-center hover:bg-cream/15 hover:scale-105 transition-all duration-300">
                <div className="font-footlight text-2xl sm:text-3xl font-bold text-cream">
                  {counts.videos}
                </div>
                <div className="font-abeezee text-[10px] sm:text-xs text-cream/80 mt-1 uppercase tracking-wider font-semibold">
                  Video Projects
                </div>
              </div>

              <div className="p-4 bg-cream/10 rounded-2xl border border-cream/20 text-center hover:bg-cream/15 hover:scale-105 transition-all duration-300">
                <div className="font-footlight text-2xl sm:text-3xl font-bold text-cream">
                  {counts.photos}
                </div>
                <div className="font-abeezee text-[10px] sm:text-xs text-cream/80 mt-1 uppercase tracking-wider font-semibold">
                  Photo Projects
                </div>
              </div>

              <div className="p-4 bg-cream/10 rounded-2xl border border-cream/20 text-center hover:bg-cream/15 hover:scale-105 transition-all duration-300">
                <div className="font-footlight text-2xl sm:text-3xl font-bold text-cream">
                  {counts.drawings}
                </div>
                <div className="font-abeezee text-[10px] sm:text-xs text-cream/80 mt-1 uppercase tracking-wider font-semibold">
                  Drawings Projects
                </div>
              </div>
            </div>

            {/* CTA */}
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 px-8 py-3 bg-cream text-rose-dark hover:bg-[#faf5ec]/90 active:scale-95 text-sm font-medium rounded-xl font-abeezee shadow-sm hover:shadow-md transition-all duration-300 self-center sm:self-start flex items-center justify-center gap-2"
            >
              <img src={eyeIcon} alt="Eye Icon" className="w-5 h-5 object-contain" />
              See Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
