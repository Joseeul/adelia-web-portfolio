export default function Contact() {
  const contactLinks = [
    {
      name: "WhatsApp",
      value: "+62 812-3456-7890",
      href: "https://wa.me/6281234567890",
      bgClass: "bg-[#25D366]",
      icon: (
        <svg
          className="w-5 h-5 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.528 2.01 14.069.99 11.519.99c-5.442 0-9.866 4.372-9.87 9.802 0 1.834.512 3.55 1.529 5.104l-.994 3.63 3.79-.994-.131-.082zM16.74 13.96c-.284-.141-1.676-.827-1.936-.921-.258-.094-.446-.141-.634.141-.188.281-.727.921-.89 1.109-.164.188-.329.21-.614.07-.285-.141-1.202-.443-2.29-1.411-.847-.756-1.42-1.689-1.586-1.97-.166-.285-.018-.439.124-.579.128-.125.284-.331.427-.496.143-.165.19-.281.285-.469.094-.188.047-.353-.023-.496-.071-.141-.634-1.527-.868-2.09-.228-.549-.479-.475-.656-.484-.17-.008-.364-.01-.559-.01-.195 0-.514.073-.78.369-.268.297-1.023.999-1.023 2.435 0 1.437 1.045 2.825 1.191 3.013.147.188 2.058 3.143 4.985 4.41.696.302 1.24.482 1.661.616.699.223 1.334.191 1.837.116.56-.083 1.676-.684 1.912-1.344.237-.659.237-1.222.166-1.344-.07-.123-.258-.196-.543-.339z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      value: "linkedin.com/in/adeliawinarno",
      href: "https://linkedin.com/in/adeliawinarno",
      bgClass: "bg-[#0A66C2]",
      icon: (
        <svg
          className="w-5 h-5 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.43c-1.14 0-2.06-.92-2.06-2.06 0-1.14.92-2.06 2.06-2.06 1.14 0 2.06.92 2.06 2.06 0 1.14-.92 2.06-2.06 2.06zm15.11 13.02h-3.56v-5.6c0-1.34-.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.7H9.33V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      value: "@adelia.winarno",
      href: "https://instagram.com",
      bgClass: "bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]",
      icon: (
        <svg
          className="w-5 h-5 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051C.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      ),
    },
    {
      name: "Email",
      value: "adeliawinarno@gmail.com",
      href: "mailto:adeliawinarno@gmail.com",
      bgClass: "bg-[#EA4335]",
      icon: (
        <svg
          className="w-5 h-5 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-1.29 1.454-2.032 2.514-1.222L12 11.24l9.486-7.005c1.06-.81 2.514-.068 2.514 1.222z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="py-24 bg-cream text-rose-dark relative overflow-hidden">
      {/* Background Soft Pink Ambient Gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-0 w-full h-[60%] bg-gradient-to-t from-rose-light/10 to-transparent pointer-events-none"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold font-abeezee tracking-widest uppercase text-rose-dark/70 mb-2">
            <svg
              className="w-4.5 h-4.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
              />
            </svg>
            Contact Me
          </div>
          <h2 className="font-footlight text-3xl sm:text-4xl lg:text-5xl font-bold text-rose-dark">
            Connect <span className="text-[#d8708c]">With</span> Me
          </h2>
          <div className="w-12 h-1 bg-rose-light/50 rounded-full mt-4"></div>
        </div>

        {/* Contact Main Card */}
        <div className="bg-rose-dark text-cream rounded-[36px] p-8 sm:p-12 shadow-lg hover:shadow-xl transition-shadow duration-300 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side: Call to Action */}
          <div className="flex flex-col text-left">
            <h3 className="font-footlight text-3xl sm:text-4xl font-bold leading-tight mb-4">
              Let's Work on Something Awesome.
            </h3>
            <p className="font-abeezee text-[14px] sm:text-base text-cream/85 leading-relaxed">
              I am open to internships, freelance commissions, and creative
              collaborations in 2D animation, storyboarding, or character design.
              Let's bring your ideas to life!
            </p>
          </div>

          {/* Right Side: Contact List */}
          <div className="flex flex-col gap-5">
            {contactLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-3.5 bg-cream/5 hover:bg-cream/10 border border-cream/10 rounded-2xl transition-all duration-300 hover:translate-x-2 group"
              >
                {/* Colored Circular Icon */}
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-white shadow-sm transition-transform duration-300 group-hover:scale-110 shrink-0 ${link.bgClass}`}
                >
                  {link.icon}
                </div>
                {/* Text Details */}
                <div className="flex flex-col text-left">
                  <span className="font-abeezee text-[10px] font-bold text-rose-light uppercase tracking-wider">
                    {link.name}
                  </span>
                  <span className="font-abeezee text-[13px] sm:text-sm font-semibold text-cream mt-0.5 break-all">
                    {link.value}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
