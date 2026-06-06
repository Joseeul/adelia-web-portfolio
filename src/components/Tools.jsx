const ToolCard = ({ name, percentage, icon }) => {
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center text-center group">
      {/* Circular Progress Container */}
      <div className="relative w-28 h-28 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
        {/* Outer SVG Ring */}
        <svg className="w-full h-full transform -rotate-90 absolute inset-0">
          {/* Background Track */}
          <circle
            cx="56"
            cy="56"
            r={radius}
            className="stroke-rose-dark/10"
            strokeWidth="5"
            fill="transparent"
          />
          {/* Foreground Progress Ring */}
          <circle
            cx="56"
            cy="56"
            r={radius}
            className="stroke-rose-dark transition-all duration-1000 ease-out"
            strokeWidth="5"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
          />
        </svg>

        {/* Inner Circle with App Icon */}
        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-md relative z-10 overflow-hidden p-2 border border-rose-light/10">
          {icon}
        </div>
      </div>

      {/* Percentage */}
      <span className="font-footlight text-lg font-bold text-rose-dark mt-4">
        {percentage}%
      </span>

      {/* Tool Name */}
      <span className="font-abeezee text-xs text-rose-dark/70 font-semibold tracking-wide mt-1 uppercase">
        {name}
      </span>
    </div>
  );
};

export default function Tools() {
  const toolsData = [
    {
      name: "Procreate",
      percentage: 90,
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"
            fill="url(#procreate-grad)"
          />
          <path
            d="M19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3z"
            fill="white"
            opacity="0.3"
          />
          <defs>
            <linearGradient id="procreate-grad" x1="2" y1="4" x2="22" y2="20">
              <stop offset="0%" stopColor="#ff4b82" />
              <stop offset="50%" stopColor="#8c4bff" />
              <stop offset="100%" stopColor="#4bc3ff" />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      name: "After Effects",
      percentage: 90,
      icon: (
        <div className="w-full h-full rounded-xl bg-[#001026] border-2 border-[#3e97ff] flex items-center justify-center font-bold text-[#3e97ff] text-xl font-sans tracking-tighter">
          Ae
        </div>
      ),
    },
    {
      name: "Photoshop",
      percentage: 90,
      icon: (
        <div className="w-full h-full rounded-xl bg-[#001c26] border-2 border-[#3ed2ff] flex items-center justify-center font-bold text-[#3ed2ff] text-xl font-sans tracking-tighter">
          Ps
        </div>
      ),
    },
    {
      name: "IbisPaint",
      percentage: 80,
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="24" rx="6" fill="url(#ibis-grad)" />
          <path
            d="M7 17l1.41-1.41M17 7l-1.41 1.41"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="12" cy="12" r="4" fill="white" />
          <circle cx="12" cy="12" r="2.2" fill="url(#ibis-grad)" />
          <defs>
            <linearGradient id="ibis-grad" x1="0" y1="0" x2="24" y2="24">
              <stop offset="0%" stopColor="#ffaa00" />
              <stop offset="100%" stopColor="#ff0066" />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      name: "Autodesk Maya",
      percentage: 80,
      icon: (
        <div className="w-full h-full rounded-xl bg-[#1b2f33] border-2 border-[#3ee6c0] flex items-center justify-center font-bold text-[#3ee6c0] text-xl font-sans">
          M
        </div>
      ),
    },
    {
      name: "Canva",
      percentage: 90,
      icon: (
        <div className="w-full h-full rounded-full bg-gradient-to-tr from-[#00c4cc] to-[#7d2ae8] flex items-center justify-center font-bold text-white text-2xl font-sans shadow-inner">
          C
        </div>
      ),
    },
  ];

  return (
    <section id="tools" className="py-24 bg-cream text-rose-dark relative">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-rose-light/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold font-abeezee tracking-widest uppercase text-rose-dark/70 mb-2">
            <svg
              className="w-4.5 h-4.5 text-rose-dark/80"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.273.807-.11 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.11v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.162.398-.14.854.11 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.11-.397.166-.709.506-.78.93l-.15.893c-.09.543-.56.94-1.11.94h-1.094c-.55 0-1.02-.397-1.11-.94l-.148-.893c-.071-.425-.384-.765-.78-.93-.398-.162-.854-.14-1.204.11l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.11v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.108.397-.165.71-.505.78-.93l.15-.894z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            My Tools
          </div>
          <h2 className="font-footlight text-3xl sm:text-4xl lg:text-5xl font-bold">
            Exploring the <span className="text-[#d8708c]">Tools</span> Behind My
            Design
          </h2>
          <div className="w-12 h-1 bg-rose-light/50 rounded-full mt-4"></div>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-12 gap-x-8 justify-center items-center">
          {toolsData.map((tool, index) => (
            <ToolCard
              key={index}
              name={tool.name}
              percentage={tool.percentage}
              icon={tool.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
