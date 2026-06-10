import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { UserRound, Eye } from "lucide-react";
import { motion } from "motion/react";
import profilePhoto from "../assets/profile_photo.png";

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 15 },
    },
  };

  return (
    <section id="about" className="py-24 bg-rose-dark text-cream relative overflow-hidden">
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
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="flex items-center gap-2 text-2xl sm:text-4xl font-footlight tracking-widest text-cream mb-2">
            <UserRound className="w-6 h-6 sm:w-9 sm:h-9" />
            About Me
          </div>
          <h2 className="font-footlight text-3xl sm:text-4xl lg:text-5xl font-bold text-cream">
            <span className="underline">Know Me</span> Better
          </h2>
        </motion.div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* Left Side: Blob Photo Placeholder */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: -40 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: "spring", stiffness: 60, damping: 15, delay: 0.1 }}
            className="md:col-span-5 flex justify-center"
          >
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px]">
              {/* Main Photo Blob Frame */}
              <motion.div 
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-2 bg-rose-light/20 flex items-center justify-center rounded-2xl overflow-hidden"
              >
                <img
                  src={profilePhoto}
                  alt="Adelia Portrait Photo"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side: Copy & Stats */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="md:col-span-7 flex flex-col items-start text-left"
          >
            <motion.h3 
              variants={itemVariants}
              className="font-footlight text-2xl sm:text-3xl font-bold text-cream mb-6"
            >
              Hello! My name is <span className="underline">Adelia</span>
            </motion.h3>
            <motion.div 
              variants={itemVariants}
              className="space-y-4 font-abeezee text-[14px] sm:text-base text-cream leading-relaxed"
            >
              <p>
                As a fourth-semester Animation student at BINUS University, I
                love transforming ideas into compelling visuals—from dynamic
                animations to charming greeting card illustrations. I anchor my
                creative process in meticulous attention to detail, a strong
                work ethic, and a collaborative spirit that helps team projects
                flourish.
              </p>
            </motion.div>

            {/* Metrics Row */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 mt-8 w-full"
            >
              <motion.div 
                whileHover={{ scale: 1.05, backgroundColor: "rgba(250, 245, 236, 0.18)" }}
                className="p-4 bg-cream/10 rounded-2xl border border-cream/20 text-center transition-all duration-300"
              >
                <div className="font-footlight text-2xl sm:text-3xl font-bold text-cream">
                  {counts.videos}
                </div>
                <div className="font-abeezee text-[10px] sm:text-xs text-cream/80 mt-1 uppercase tracking-wider font-semibold">
                  Video Projects
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.05, backgroundColor: "rgba(250, 245, 236, 0.18)" }}
                className="p-4 bg-cream/10 rounded-2xl border border-cream/20 text-center transition-all duration-300"
              >
                <div className="font-footlight text-2xl sm:text-3xl font-bold text-cream">
                  {counts.photos}
                </div>
                <div className="font-abeezee text-[10px] sm:text-xs text-cream/80 mt-1 uppercase tracking-wider font-semibold">
                  Photo Projects
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.05, backgroundColor: "rgba(250, 245, 236, 0.18)" }}
                className="p-4 bg-cream/10 rounded-2xl border border-cream/20 text-center transition-all duration-300"
              >
                <div className="font-footlight text-2xl sm:text-3xl font-bold text-cream">
                  {counts.drawings}
                </div>
                <div className="font-abeezee text-[10px] sm:text-xs text-cream/80 mt-1 uppercase tracking-wider font-semibold">
                  Drawings Projects
                </div>
              </motion.div>
            </motion.div>

            {/* CTA */}
            <motion.a
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 px-8 py-3 bg-cream text-rose-dark hover:bg-[#faf5ec]/90 text-sm font-medium rounded-xl font-abeezee shadow-sm hover:shadow-md transition-all duration-300 self-center sm:self-start flex items-center justify-center gap-2"
            >
              <Eye className="w-5 h-5 object-contain" />
              See Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
