import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import starJourneyIcon from "../assets/icons/star_journey.svg";
import educationIcon from "../assets/icons/education_icon.svg";
import workIcon from "../assets/icons/work_icon.svg";
import otherProjectIcon from "../assets/icons/other_project_icon.svg";

const TimelineItem = ({ date, title, subtitle }) => (
  <div className="relative pl-6 pb-6 last:pb-2 group">
    {/* Vertical connecting line */}
    <div className="absolute left-[5px] top-[7px] bottom-0 w-[1.5px] bg-cream group-last:hidden"></div>
    {/* Node dot */}
    <div className="absolute left-0 top-[7px] w-2.5 h-2.5 rounded-full border border-cream bg-cream group-hover:bg-rose-light group-hover:scale-125 transition-all duration-300"></div>

    <div className="flex flex-col text-left">
      <span className="text-base font-bold text-cream tracking-wider font-abeezee mb-1">
        {date}
      </span>
      <h4 className="font-footlight text-[15px] sm:text-2xl font-bold text-cream leading-tight">
        {title}
      </h4>
      <p className="font-abeezee text-[12px] sm:text-base text-cream mt-1 whitespace-pre-line">
        {subtitle}
      </p>
    </div>
  </div>
);

export default function Journey() {
  const [experiences, setExperiences] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchExperiences() {
      try {
        setIsLoading(true);
        const { data, error: fetchError } = await supabase
          .from("experiences")
          .select("*")
          .order("order_position", { ascending: true })
          .order("created_at", { ascending: false });

        if (fetchError) throw fetchError;
        setExperiences(data || []);
      } catch (err) {
        console.error("Error fetching experiences:", err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchExperiences();
  }, []);

  const educationData = experiences.filter((exp) => exp.type === "education");
  const workData = experiences.filter((exp) => exp.type === "work experience");
  const otherData = experiences.filter((exp) => exp.type === "other projects");

  return (
    <section id="journey" className="py-24 bg-cream text-rose-dark relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 text-xs sm:text-4xl font-footlight tracking-widest text-black mb-2">
            <img
              src={starJourneyIcon}
              alt="Star Journey Icon"
              className="w-9 h-9"
            />
            Academic, Work & Project
          </div>
          <h2 className="font-footlight text-3xl sm:text-4xl lg:text-5xl text-black mt-6">
            My <span className="text-rose-dark underline">Academic</span> and{" "}
            <span className="text-rose-dark underline">Professional</span>{" "}
            Journey
          </h2>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Column 1 (Left): Education & Other Projects */}
          <div className="flex flex-col gap-8">
            {/* Education Card */}
            <div className="p-6 sm:p-8 bg-rose-dark rounded-3xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center gap-3 text-cream mb-6 pb-2 border-b border-cream/10">
                <img src={educationIcon} alt="Education Icon" className="w-10 h-10 object-contain" />
                <h3 className="font-footlight text-xl sm:text-2xl font-bold">
                  Education
                </h3>
              </div>
              <div className="flex flex-col">
                {isLoading ? (
                  <div className="flex flex-col items-center justify-center py-6 text-cream/70">
                    <div className="w-6 h-6 border-2 border-cream border-t-transparent rounded-full animate-spin"></div>
                    <p className="mt-2 text-xs font-abeezee">Loading education...</p>
                  </div>
                ) : error ? (
                  <p className="text-xs text-red-300 font-abeezee font-semibold text-center py-4">Failed to load</p>
                ) : educationData.length === 0 ? (
                  <p className="text-xs text-cream/50 font-abeezee text-center py-4">No education history added.</p>
                ) : (
                  educationData.map((item) => (
                    <TimelineItem
                      key={item.id}
                      date={item.time_range}
                      title={item.title}
                      subtitle={item.description}
                    />
                  ))
                )}
              </div>
            </div>

            {/* Other Projects Card */}
            <div className="p-6 sm:p-8 bg-rose-dark rounded-3xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center gap-3 text-cream mb-6 pb-2 border-b border-cream/10">
                <img src={otherProjectIcon} alt="Other Projects Icon" className="w-10 h-10 object-contain" />
                <h3 className="font-footlight text-xl sm:text-2xl font-bold">
                  Other Projects
                </h3>
              </div>
              <div className="flex flex-col">
                {isLoading ? (
                  <div className="flex flex-col items-center justify-center py-6 text-cream/70">
                    <div className="w-6 h-6 border-2 border-cream border-t-transparent rounded-full animate-spin"></div>
                    <p className="mt-2 text-xs font-abeezee">Loading projects...</p>
                  </div>
                ) : error ? (
                  <p className="text-xs text-red-300 font-abeezee font-semibold text-center py-4">Failed to load</p>
                ) : otherData.length === 0 ? (
                  <p className="text-xs text-cream/50 font-abeezee text-center py-4">No projects added.</p>
                ) : (
                  otherData.map((item) => (
                    <TimelineItem
                      key={item.id}
                      date={item.time_range}
                      title={item.title}
                      subtitle={item.description}
                    />
                  ))
                )}
              </div>
            </div>
          </div>

          {/* Column 2 (Right): Work Experiences */}
          <div className="flex flex-col h-full">
            {/* Work Experiences Card */}
            <div className="p-6 sm:p-8 bg-rose-dark rounded-3xl shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
              <div className="flex items-center gap-3 text-cream mb-6 pb-2 border-b border-cream/10">
                <img src={workIcon} alt="Work Experiences Icon" className="w-10 h-10 object-contain" />
                <h3 className="font-footlight text-xl sm:text-2xl font-bold">
                  Work Experiences
                </h3>
              </div>
              <div className="flex flex-col">
                {isLoading ? (
                  <div className="flex flex-col items-center justify-center py-6 text-cream/70">
                    <div className="w-6 h-6 border-2 border-cream border-t-transparent rounded-full animate-spin"></div>
                    <p className="mt-2 text-xs font-abeezee">Loading experiences...</p>
                  </div>
                ) : error ? (
                  <p className="text-xs text-red-300 font-abeezee font-semibold text-center py-4">Failed to load</p>
                ) : workData.length === 0 ? (
                  <p className="text-xs text-cream/50 font-abeezee text-center py-4">No work experiences added.</p>
                ) : (
                  workData.map((item) => (
                    <TimelineItem
                      key={item.id}
                      date={item.time_range}
                      title={item.title}
                      subtitle={item.description}
                    />
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
