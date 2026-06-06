export default function About() {
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
          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold font-abeezee tracking-widest uppercase text-rose-light/80 mb-2">
            <svg
              className="w-4 h-4 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
            About Me
          </div>
          <h2 className="font-footlight text-3xl sm:text-4xl lg:text-5xl font-bold text-cream">
            Know Me Better
          </h2>
          <div className="w-12 h-1 bg-rose-light/40 rounded-full mt-4"></div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* Left Side: Blob Photo Placeholder */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
              {/* Outer rotating decorative blob layer */}
              <div className="absolute inset-0 bg-rose-light/10 rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%] animate-[spin_25s_linear_infinite] pointer-events-none"></div>

              {/* Main Photo Blob Frame */}
              <div className="absolute inset-2 border-4 border-cream rounded-[40%_60%_70%_30%_/_40%_50%_60%_50%] overflow-hidden bg-rose-light/20 flex items-center justify-center shadow-lg transition-transform duration-500 hover:scale-105">
                {/* Wavy clip-path placeholder graphic */}
                <div className="text-center p-6 flex flex-col items-center">
                  <div className="p-4 bg-cream/10 rounded-full mb-3 text-cream/90">
                    <svg
                      className="w-10 h-10"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
                      />
                    </svg>
                  </div>
                  <span className="font-footlight text-lg font-semibold block text-cream">
                    Adelia Winarno
                  </span>
                  <span className="font-abeezee text-[11px] text-cream/70 block mt-2 max-w-[160px] leading-relaxed">
                    Insert your portrait photo here. Wavy blob mask is ready!
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Copy & Stats */}
          <div className="md:col-span-7 flex flex-col items-start text-left">
            <h3 className="font-footlight text-2xl sm:text-3xl font-bold text-cream mb-6">
              Hello! My name is Adelia
            </h3>
            <div className="space-y-4 font-abeezee text-[14px] sm:text-base text-cream/90 leading-relaxed">
              <p>
                I am a passionate 2D animator and storyteller currently studying
                Animation at BINUS University. With a keen eye for motion, design,
                and character acting, I strive to bring stories to life frame by
                frame. I specialize in character animation, digital illustration,
                and script-to-storyboard visualizations.
              </p>
              <p>
                My creative approach merges expressive character drawings with smooth
                movement techniques. I am always excited to learn, collaborate on films,
                and explore new digital design boundaries. Let's create something
                amazing together!
              </p>
            </div>

            {/* Metrics Row */}
            <div className="grid grid-cols-3 gap-4 mt-8 w-full">
              <div className="p-4 bg-cream/10 rounded-2xl border border-cream/20 text-center hover:bg-cream/15 hover:scale-105 transition-all duration-300">
                <div className="font-footlight text-2xl sm:text-3xl font-bold text-cream">
                  20
                </div>
                <div className="font-abeezee text-[10px] sm:text-xs text-cream/80 mt-1 uppercase tracking-wider font-semibold">
                  Video Projects
                </div>
              </div>

              <div className="p-4 bg-cream/10 rounded-2xl border border-cream/20 text-center hover:bg-cream/15 hover:scale-105 transition-all duration-300">
                <div className="font-footlight text-2xl sm:text-3xl font-bold text-cream">
                  20
                </div>
                <div className="font-abeezee text-[10px] sm:text-xs text-cream/80 mt-1 uppercase tracking-wider font-semibold">
                  Photo Projects
                </div>
              </div>

              <div className="p-4 bg-cream/10 rounded-2xl border border-cream/20 text-center hover:bg-cream/15 hover:scale-105 transition-all duration-300">
                <div className="font-footlight text-2xl sm:text-3xl font-bold text-cream">
                  20
                </div>
                <div className="font-abeezee text-[10px] sm:text-xs text-cream/80 mt-1 uppercase tracking-wider font-semibold">
                  Drawings Projects
                </div>
              </div>
            </div>

            {/* CTA */}
            <a
              href="#journey"
              className="mt-8 px-8 py-3 bg-cream text-rose-dark hover:bg-[#faf5ec]/90 active:scale-95 text-sm font-medium rounded-full font-abeezee shadow-sm hover:shadow-md transition-all duration-300 self-center sm:self-start"
            >
              See My Journey
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
