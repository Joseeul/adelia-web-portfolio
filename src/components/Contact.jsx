import { MessagesSquare } from "lucide-react";
import { motion } from "motion/react";
import linkedinIcon from "../assets/icons/linkedin_ori.svg";
import instagramIcon from "../assets/icons/ig_icon.svg";
import gmailIcon from "../assets/icons/gmail_icon.svg";

export default function Contact() {
  const contactLinks = [
    {
      name: "LinkedIn",
      value: "linkedin.com/in/adeliawiratma",
      href: "https://linkedin.com/in/adeliawiratma",
      icon: linkedinIcon,
    },
    {
      name: "Instagram",
      value: "instagram.com/adeliawiratma",
      href: "https://instagram.com/adeliawiratma",
      icon: instagramIcon,
    },
    {
      name: "Email",
      value: "wiratma.adelia@gmail.com",
      href: "mailto:wiratma.adelia@gmail.com",
      icon: gmailIcon,
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 60, damping: 14 },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.25,
      },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 80, damping: 12 },
    },
  };

  return (
    <section
      id="contact"
      className="py-24 bg-cream text-rose-dark relative overflow-hidden"
    >
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 z-0">
        {/* Left Circle: Rose Dark */}
        <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] bg-rose-dark/15 rounded-full blur-[100px] pointer-events-none"></div>
        {/* Right Circle: Warm Yellow */}
        <div className="absolute bottom-1/4 -right-20 w-[450px] h-[450px] bg-[#FEDD8C]/25 rounded-full blur-[120px] pointer-events-none"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="flex items-center gap-2 text-2xl sm:text-4xl font-footlight tracking-widest text-black mb-2">
            <MessagesSquare className="w-6 h-6 sm:w-9 sm:h-9 text-rose-dark" />
            Contact Me
          </div>
          <h2 className="font-footlight text-3xl sm:text-4xl lg:text-5xl text-black mt-6">
            <span className="text-rose-dark underline">Connect</span> With Me
          </h2>
        </motion.div>

        {/* Contact Main Card */}
        <motion.div 
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="bg-rose-dark text-cream rounded-[36px] p-8 sm:p-12 shadow-lg hover:shadow-xl transition-shadow duration-300 grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
        >
          {/* Left Side: Call to Action */}
          <div className="flex flex-col text-left">
            <h3 className="font-footlight text-3xl sm:text-4xl font-bold leading-tight mb-4">
              Let's Work on Something{" "}
              <span className="text-cream underline">Awesome.</span>
            </h3>
            <p className="font-abeezee text-[14px] sm:text-base text-cream/85 leading-relaxed">
              I’m open to new ideas and collaborations to create impactful
              projects together.
            </p>
          </div>

          {/* Right Side: Contact List */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col gap-6 items-start justify-center md:pl-8"
          >
            {contactLinks.map((link, index) => (
              <motion.a
                key={index}
                variants={linkVariants}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 6, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-4 group transition-transform duration-300"
              >
                {/* Square Icon */}
                <img
                  src={link.icon}
                  alt={link.name}
                  className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-105 shrink-0"
                />
                {/* Text Details */}
                <span className="font-abeezee text-[14px] sm:text-base text-cream hover:text-cream/90 transition-colors leading-none">
                  {link.value}
                </span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
