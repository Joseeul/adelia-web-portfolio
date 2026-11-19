import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Brush } from "lucide-react";
import { motion } from "motion/react";
import { supabase } from "../lib/supabase";

export default function Portfolio() {
  const [thumbnails, setThumbnails] = useState({});

  useEffect(() => {
    async function fetchThumbnails() {
      try {
        const { data, error } = await supabase
          .from("site_settings")
          .select("videos_thumbnail, photos_illustration_thumbnail")
          .maybeSingle();

        if (error) {
          console.error("Failed to fetch portfolio thumbnails:", error);
          return;
        }

        if (data) {
          setThumbnails(data);
        }
      } catch (error) {
        console.error("Failed to fetch portfolio thumbnails:", error);
      }
    }

    fetchThumbnails();
  }, []);

  const categories = [
    {
      title: "Photos & Illustration",
      thumbnailField: "photos_illustration_thumbnail",
      thumbnail:
        thumbnails.photos_illustration_thumbnail,
      description:
        "A collection of photography and digital and traditional illustrations exploring visual storytelling.",
      buttonText: "Discover Photos & Illustration",
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
      title: "3D Animation",
      thumbnailField: "videos_thumbnail",
      thumbnail: thumbnails.videos_thumbnail,
      description:
        "A selection of animation and 3D projects showcasing my learning journey in character animation, modeling, and visual storytelling.",
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
  ];

  const orderedCategories = [categories[1], categories[0]];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 15 },
    },
  };

  return (
    <section id="portfolio" className="py-24 bg-rose-dark text-cream relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="flex items-center gap-2 text-2xl sm:text-4xl font-footlight tracking-widest text-cream mb-2">
            <Brush className="w-6 h-6 sm:w-9 sm:h-9" />
            My Portfolio
          </div>
          <h2 className="font-footlight text-3xl sm:text-4xl lg:text-5xl text-cream mt-6">
            Discover My <span className="underline">Projects.</span>
          </h2>
        </motion.div>

        {/* Portfolio Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {orderedCategories.map((cat, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -8,
                scale: 1.02,
                boxShadow:
                  "0 20px 25px -5px rgb(0 0 0 / 0.15), 0 8px 10px -6px rgb(0 0 0 / 0.15)",
              }}
              className="bg-white rounded-[32px] p-6 flex flex-col justify-between text-rose-dark shadow-md transition-all duration-350 group"
            >
              <div>
                <div className="w-full aspect-[4/3] bg-rose-dark/5 rounded-[22px] flex items-center justify-center border border-rose-dark/10 overflow-hidden relative mb-6">
                  {cat.thumbnail && (
                    <img
                      src={cat.thumbnail}
                      alt={`${cat.title} thumbnail`}
                      className="absolute inset-0 w-full h-full object-cover"
                      onError={() => {
                        setThumbnails((current) => ({
                          ...current,
                          [cat.thumbnailField]: null,
                        }));
                      }}
                    />
                  )}
                  <div className="absolute inset-0 bg-rose-dark/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  {!cat.thumbnail && (
                    <div className="transform group-hover:scale-110 transition-transform duration-500">
                      {cat.icon}
                    </div>
                  )}
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
