import messageIcon from "../assets/icons/message_icon.svg";
import whatsappIcon from "../assets/icons/whatsapp_icon.svg";
import linkedinIcon from "../assets/icons/linkedin_ori.svg";
import instagramIcon from "../assets/icons/ig_icon.svg";
import gmailIcon from "../assets/icons/gmail_icon.svg";

export default function Contact() {
  const contactLinks = [
    {
      name: "WhatsApp",
      value: "+628119811171",
      href: "https://wa.me/628119811171",
      icon: whatsappIcon,
    },
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

  return (
    <section
      id="contact"
      className="py-24 bg-cream text-rose-dark relative overflow-hidden"
    >
      {/* Background Soft Pink Ambient Gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-0 w-full h-[60%] bg-gradient-to-t from-rose-light/10 to-transparent pointer-events-none"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 text-xs sm:text-4xl font-footlight tracking-widest text-black mb-2">
            <img src={messageIcon} alt="Message Icon" className="w-9 h-9" />
            Contact Me
          </div>
          <h2 className="font-footlight text-3xl sm:text-4xl lg:text-5xl text-black mt-6">
            <span className="text-rose-dark underline">Connect</span> With Me
          </h2>
        </div>

        {/* Contact Main Card */}
        <div className="bg-rose-dark text-cream rounded-[36px] p-8 sm:p-12 shadow-lg hover:shadow-xl transition-shadow duration-300 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
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
          <div className="flex flex-col gap-6 items-start justify-center md:pl-8">
            {contactLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group transition-transform duration-300 hover:translate-x-1"
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
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
