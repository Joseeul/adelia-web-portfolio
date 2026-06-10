import { PenTool } from "lucide-react";
import canvaIcon from "../assets/icons/skills/canva.svg";
import procreateIcon from "../assets/icons/skills/procreate.svg";
import mayaIcon from "../assets/icons/skills/maya.svg";
import afterEffectsIcon from "../assets/icons/skills/after_effects.svg";
import davinciResolveIcon from "../assets/icons/skills/davinci_resolve.svg";
import premiereProIcon from "../assets/icons/skills/premier_pro.svg";
import photoshopIcon from "../assets/icons/skills/photoshop.svg";
import substancePainterIcon from "../assets/icons/skills/substance_painter.svg";
import zbrushIcon from "../assets/icons/skills/zbrush.svg";
import illustratorIcon from "../assets/icons/skills/illustrator.svg";
import unrealEngineIcon from "../assets/icons/skills/unreal_engine.svg";

const ToolItem = ({ name, icon }) => {
  return (
    <div className="flex flex-col items-center text-center group w-24 sm:w-28 shrink-0">
      {/* Icon Container */}
      <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 pointer-events-none">
        <img
          src={icon}
          alt={`${name} Icon`}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Tool Name */}
      <span className="font-abeezee text-xs sm:text-sm font-semibold text-rose-dark mt-4 group-hover:text-[#d8708c] transition-colors duration-300 tracking-wider leading-snug">
        {name}
      </span>
    </div>
  );
};

export default function Tools() {
  const categories = [
    {
      title: "Advanced",
      tools: [
        { name: "Canva", icon: canvaIcon },
        { name: "Procreate", icon: procreateIcon },
      ],
    },
    {
      title: "Intermediate",
      tools: [
        { name: "Autodesk Maya", icon: mayaIcon },
        { name: "After Effects", icon: afterEffectsIcon },
        { name: "Davinci Resolve", icon: davinciResolveIcon },
        { name: "Premiere Pro", icon: premiereProIcon },
        { name: "Photoshop", icon: photoshopIcon },
      ],
    },
    {
      title: "Basic",
      tools: [
        { name: "Substance 3D Painter", icon: substancePainterIcon },
        { name: "ZBrush", icon: zbrushIcon },
        { name: "Illustrator", icon: illustratorIcon },
        { name: "Unreal Engine", icon: unrealEngineIcon },
      ],
    },
  ];

  return (
    <section id="tools" className="py-24 bg-cream text-rose-dark relative">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-rose-light/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="flex items-center gap-2 text-2xl sm:text-4xl font-footlight tracking-widest text-black mb-2">
            <PenTool className="w-6 h-6 sm:w-9 sm:h-9 text-rose-dark" />
            My Tools
          </div>
          <h2 className="font-footlight text-3xl sm:text-4xl lg:text-5xl mt-6 text-black">
            Exploring the{" "}
            <span className="text-rose-dark underline">Tools</span> Behind My
            Design
          </h2>
        </div>

        {/* Categories Section */}
        <div className="space-y-16">
          {categories.map((category, catIndex) => (
            <div key={catIndex} className="flex flex-col items-center">
              {/* Category Header */}
              <div className="flex flex-col items-center mb-10">
                <h3 className="font-footlight text-2xl sm:text-3xl font-bold text-rose-dark text-center tracking-wide">
                  {category.title}
                </h3>
              </div>

              {/* Tools Row */}
              <div className="flex flex-wrap justify-center gap-10 sm:gap-16 w-full max-w-4xl px-4">
                {category.tools.map((tool, index) => (
                  <ToolItem key={index} name={tool.name} icon={tool.icon} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
