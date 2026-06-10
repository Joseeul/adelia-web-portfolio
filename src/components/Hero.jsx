import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { HeartHandshake, MapPin, BriefcaseBusiness, MoveRight, Eye, ChevronsDown } from "lucide-react";
import { motion } from "motion/react";
import heroImage from "../assets/hero_image.svg";
import linkedinIcon from "../assets/icons/linkedin_icon.svg";
import instagramIcon from "../assets/icons/instagram_icon.svg";

export default function Hero() {
  const [resumeUrl, setResumeUrl] = useState("https://drive.google.com/file/d/1E3yoS9IFb07-W2-UTpNGacE-cq9CEozc/view?usp=drivesdk");

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
        console.error("Failed to fetch resume URL in Hero:", err);
      }
    }
    fetchResumeUrl();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <section className="relative min-h-screen pt-24 pb-16 flex items-center bg-cream overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 z-0">
        {/* Left Circle: Warm Yellow */}
        <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] bg-[#FEDD8C]/25 rounded-full blur-[100px] pointer-events-none"></div>
        {/* Right Circle: Rose Dark */}
        <div className="absolute bottom-1/4 -right-20 w-[450px] h-[450px] bg-rose-dark/15 rounded-full blur-[120px] pointer-events-none"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full z-10 relative">
        {/* Left Column: Text & Actions */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="order-2 md:order-1 flex flex-col items-start text-left"
        >
          {/* Badge */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-rose-dark border-2 border-black text-white font-footlight text-[15px] font-medium shadow-sm mb-6 cursor-pointer transition-transform hover:animate-[wiggle_0.25s_ease-in-out_infinite]"
          >
            <HeartHandshake className="w-6 h-6" />
            <span>Nice to meet you!</span>
          </motion.div>

          {/* Heading */}
          <motion.h1 
            variants={itemVariants}
            className="font-footlight text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-[1.15]"
          >
            Hi, I'm <span className="text-rose-dark underline">Adelia.</span>
            <span className="mt-2 relative block text-rose-dark">
              Animation Student
            </span>
          </motion.h1>

          {/* Subtitle / Description */}
          <motion.p 
            variants={itemVariants}
            className="mt-6 font-abeezee text-base sm:text-base text-black leading-relaxed max-w-lg"
          >
            An Animation student at BINUS University with a passion for visual
            storytelling, illustration, and design. I enjoy transforming ideas
            into engaging visual experiences through animation, digital
            illustration, graphic design, and motion graphics. I aim to create
            meaningful visuals that are both creative and impactfull while
            continuously exploring new ways to communicate ideas creatively.
          </motion.p>

          {/* Badges Info */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap gap-x-6 gap-y-3 mt-6 font-abeezee text-base text-rose-dark"
          >
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4" />
              South Tangerang, Indonesia
            </span>
            <span className="flex items-center gap-1.5">
              <BriefcaseBusiness className="w-4 h-4" />
              Available Now
            </span>
          </motion.div>

          {/* Action Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap gap-4 mt-8 w-full sm:w-auto"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="px-8 py-3 bg-rose-dark text-cream hover:bg-[#b56e7c] text-sm rounded-lg font-abeezee shadow-sm hover:shadow-md transition-all duration-300 text-center flex-1 sm:flex-initial flex items-center justify-center gap-2"
            >
              <MoveRight className="w-4 h-4" />
              Hire Me
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 border border-rose-dark text-rose-dark hover:bg-rose-dark/5 text-sm rounded-lg font-abeezee transition-all duration-300 flex items-center justify-center gap-2 flex-1 sm:flex-initial"
            >
              <Eye className="w-4 h-4" />
              See Resume
            </motion.a>
          </motion.div>

          {/* Divider Line */}
          <motion.hr 
            variants={itemVariants}
            className="w-full border-t border-rose-dark mt-10" 
          />

          {/* Social Links */}
          <motion.div 
            variants={itemVariants}
            className="w-full mt-6 flex items-center gap-4"
          >
            <span className="font-abeezee text-base text-rose-dark font-normal">
              Follow me:
            </span>
            <div className="flex gap-4">
              {/* LinkedIn */}
              <motion.a
                whileHover={{ scale: 1.15 }}
                href="https://linkedin.com/in/adeliawiratma"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:opacity-80 transition-opacity duration-200"
              >
                <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6" />
              </motion.a>

              {/* Instagram */}
              <motion.a
                whileHover={{ scale: 1.15 }}
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:opacity-80 transition-opacity duration-200"
              >
                <img src={instagramIcon} alt="Instagram" className="w-6 h-6" />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Illustration */}
        <div className="order-1 md:order-2 flex justify-center items-center relative">
          {/* Avatar Ring/Halo */}
          <div className="absolute w-[80%] aspect-square max-w-[320px] md:max-w-[420px] rounded-full border-2 border-dashed border-rose-light/30 animate-[spin_60s_linear_infinite]"></div>
          <div className="absolute w-[70%] aspect-square max-w-[280px] md:max-w-[370px] rounded-full bg-rose-light/5"></div>

          <motion.img
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: [0, -12, 0]
            }}
            transition={{
              opacity: { duration: 0.6, ease: "easeOut" },
              scale: { duration: 0.6, ease: "easeOut" },
              y: {
                repeat: Infinity,
                repeatType: "mirror",
                duration: 4,
                ease: "easeInOut"
              }
            }}
            src={heroImage}
            alt="Adelia Avatar Illustration"
            className="w-full max-w-[340px] md:max-w-none md:w-[460px] md:h-[490px] object-contain drop-shadow-[0_10px_20px_rgba(198,130,144,0.15)] z-10"
          />
        </div>
      </div>

      {/* Down Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center hidden md:flex flex-col items-center pointer-events-none z-10">
        <span className="font-abeezee text-base font-medium text-rose-dark mb-1.5 tracking-wider">
          Scroll down to learn more about me!
        </span>
        <ChevronsDown className="w-6 h-6 animate-bounce mt-4" />
      </div>

      {/* Custom Animations inject style */}
      <style>{`
        @keyframes wiggle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-3deg); }
          75% { transform: rotate(3deg); }
        }
      `}</style>
    </section>
  );
}
