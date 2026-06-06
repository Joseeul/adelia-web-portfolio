const TimelineItem = ({ date, title, subtitle }) => (
  <div className="relative pl-6 pb-6 last:pb-2 group">
    {/* Vertical connecting line */}
    <div className="absolute left-[5px] top-[7px] bottom-0 w-[1.5px] bg-rose-light/20 group-last:hidden"></div>
    {/* Node dot */}
    <div className="absolute left-0 top-[7px] w-2.5 h-2.5 rounded-full border border-cream bg-rose-dark group-hover:bg-rose-light group-hover:scale-125 transition-all duration-300"></div>

    <div className="flex flex-col text-left">
      <span className="text-[10px] font-bold text-rose-light uppercase tracking-wider font-abeezee mb-1">
        {date}
      </span>
      <h4 className="font-footlight text-[15px] sm:text-base font-bold text-cream leading-tight">
        {title}
      </h4>
      <p className="font-abeezee text-[12px] text-cream/70 mt-1 italic">
        {subtitle}
      </p>
    </div>
  </div>
);

export default function Journey() {
  const educationData = [
    {
      date: "2020 - Present",
      title: "BINUS University",
      subtitle: "Animation Student - Focusing on 2D Animation & Storyboarding",
    },
    {
      date: "2017 - 2020",
      title: "Santo Yusup 1 High School",
      subtitle: "High School Graduate - Science Major",
    },
  ];

  const workData = [
    {
      date: "2023 - Present",
      title: "Creative Design Staff at PKM",
      subtitle: "Freelance Designer & Content Creator",
    },
    {
      date: "2022 - 2023",
      title: "Creative Design Articles for XYZ",
      subtitle: "Freelance Graphic Illustrator & Writer",
    },
    {
      date: "Oct 2021",
      title: "Logistics Staff Member for Visual Art Exhibition",
      subtitle: "Event Logistics & Backdrop Designer Coordinator",
    },
    {
      date: "Jan - Mar 2021",
      title: "Offline Editor for Class Share Film Project",
      subtitle: "Video Editing & Color Grading Specialist",
    },
    {
      date: "Jan - Mar 2021",
      title: "Offline Editor for Class Share Film Project",
      subtitle: "Video Editing & Color Grading Specialist",
    },
    {
      date: "Jan - Mar 2021",
      title: "Offline Editor for Class Share Film Project",
      subtitle: "Video Editing & Color Grading Specialist",
    },
  ];

  const otherData = [
    {
      date: "Sep - Nov 2022",
      title: "Head of Catering Division for Fund-raising & Exhibition",
      subtitle: "Division Head & Budget Planner Coordinator",
    },
    {
      date: "Jul - Aug 2021",
      title: 'Logistics Staff Member for Movie: "Warna Warni Bersama"',
      subtitle: "Prop Master & Layout Designer Assistant",
    },
    {
      date: "Jun - Dec 2021",
      title: "Decoration Staff Member for BINUS TV",
      subtitle: "Scenic Designer & Set Decorator Staff",
    },
    {
      date: "Apr - Jun 2021",
      title: "Offline Editor for Class Share Film Project",
      subtitle: "Video Editor & Continuity Checker",
    },
    {
      date: "Apr - Jun 2021",
      title: "Offline Editor for Class Share Film Project",
      subtitle: "Video Editor & Continuity Checker",
    },
    {
      date: "Apr - Jun 2021",
      title: "Offline Editor for Class Share Film Project",
      subtitle: "Video Editor & Continuity Checker",
    },
  ];

  return (
    <section id="journey" className="py-24 bg-cream text-rose-dark relative">
      <div className="max-w-6xl mx-auto px-6">
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
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
              />
            </svg>
            Academic, Work & Project
          </div>
          <h2 className="font-footlight text-3xl sm:text-4xl lg:text-5xl font-bold">
            My <span className="text-[#d8708c]">Academic</span> and{" "}
            <span className="text-[#d8708c]">Professional</span> Journey
          </h2>
          <div className="w-12 h-1 bg-rose-light/50 rounded-full mt-4"></div>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Column 1 (Left): Education & Other Projects */}
          <div className="flex flex-col gap-8">
            {/* Education Card */}
            <div className="p-6 sm:p-8 bg-rose-dark rounded-3xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center gap-3 text-cream mb-6 pb-2 border-b border-cream/10">
                <svg
                  className="w-6 h-6 text-rose-light"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.263 10.185a.75.75 0 000 1.207l6.242 4.162a.75.75 0 00.832 0l6.242-4.162a.75.75 0 000-1.207l-6.242-4.162a.75.75 0 00-.832 0l-6.242 4.162z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.75 14.25-1.492-.994-4.823 3.216a2.25 2.25 0 01-2.49 0L6.12 13.256l-1.492.994a.75.75 0 00-.361.63v4.86c0 .414.336.75.75.75h13.966c.414 0 .75-.336.75-.75v-4.86a.75.75 0 00-.361-.63z"
                  />
                </svg>
                <h3 className="font-footlight text-xl sm:text-2xl font-bold">
                  Education
                </h3>
              </div>
              <div className="flex flex-col">
                {educationData.map((item, index) => (
                  <TimelineItem
                    key={index}
                    date={item.date}
                    title={item.title}
                    subtitle={item.subtitle}
                  />
                ))}
              </div>
            </div>

            {/* Other Projects Card */}
            <div className="p-6 sm:p-8 bg-rose-dark rounded-3xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center gap-3 text-cream mb-6 pb-2 border-b border-cream/10">
                <svg
                  className="w-6 h-6 text-rose-light"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 13.5h3.86a2.25 2.25 0 012.008 1.24l.885 1.77a2.25 2.25 0 002.007 1.24h1.98a2.25 2.25 0 002.007-1.24l.885-1.77a2.25 2.25 0 012.007-1.24h3.86m-18 0h18a2.25 2.25 0 012.25 2.25v4.5A2.25 2.25 0 0119.5 21h-15a2.25 2.25 0 01-2.25-2.25v-4.5a2.25 2.25 0 012.25-2.25zm-2-4.5h20a2.25 2.25 0 002.25-2.25V5.25A2.25 2.25 0 0019.5 3h-15a2.25 2.25 0 00-2.25 2.25v3.75A2.25 2.25 0 003.75 9z"
                  />
                </svg>
                <h3 className="font-footlight text-xl sm:text-2xl font-bold">
                  Other Projects
                </h3>
              </div>
              <div className="flex flex-col">
                {otherData.map((item, index) => (
                  <TimelineItem
                    key={index}
                    date={item.date}
                    title={item.title}
                    subtitle={item.subtitle}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Column 2 (Right): Work Experiences */}
          <div className="flex flex-col h-full">
            {/* Work Experiences Card */}
            <div className="p-6 sm:p-8 bg-rose-dark rounded-3xl shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
              <div className="flex items-center gap-3 text-cream mb-6 pb-2 border-b border-cream/10">
                <svg
                  className="w-6 h-6 text-rose-light"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 14.15v4.25c0 .621-.504 1.125-1.125 1.125H4.875A1.125 1.125 0 013.75 18.4V14.15m16.5 0c0-1.286-.948-2.37-2.204-2.528L15 11.25V7.5A2.25 2.25 0 0012.75 5.25h-1.5A2.25 2.25 0 009 7.5v3.75l-3.046.372C4.698 11.78 3.75 12.864 3.75 14.15m16.5 0v1.5a2.25 2.25 0 01-2.25 2.25h-12a2.25 2.25 0 01-2.25-2.25v-1.5m16.5 0H3.75"
                  />
                </svg>
                <h3 className="font-footlight text-xl sm:text-2xl font-bold">
                  Work Experiences
                </h3>
              </div>
              <div className="flex flex-col">
                {workData.map((item, index) => (
                  <TimelineItem
                    key={index}
                    date={item.date}
                    title={item.title}
                    subtitle={item.subtitle}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
