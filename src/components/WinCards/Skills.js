import { useState } from "react";
import { NextLevel } from "./utils/RedirectionAndLoading";

const skills = [
  {
    name: "React",
    icon: "⚛️",
    color: "from-[#61dafb] to-[#21a1f3]",
    rating: 90,
  },
  {
    name: "Android",
    icon: "🤖",
    color: "from-[#3ddc84] to-[#1de9b6]",
    rating: 80,
  },
  {
    name: "Three.js",
    icon: "🌌",
    color: "from-gray-400 to-black",
    rating: 75,
  },
  {
    name: "Vue.js",
    icon: "🟩",
    color: "from-[#42b883] to-[#35495e]",
    rating: 70,
  },
  {
    name: "Express.js",
    icon: "🚂",
    color: "from-[#222] to-gray-700",
    rating: 85,
  },
  {
    name: "Node.js",
    icon: "🌳",
    color: "from-[#68a063] to-[#3c873a]",
    rating: 88,
  },
  {
    name: "Firebase",
    icon: "🔥",
    color: "from-[#ffca28] to-[#ffa000]",
    rating: 65,
  },
];

export function Skills() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="w-full max-w-2xl mx-auto p-4 sm:p-8 rounded-3xl bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2]">
      <h2 className="text-center text-3xl mb-8 tracking-wide font-extrabold text-gray-800">
        <span className="text-[#61dafb]">My</span> Skills
      </h2>
      <hr className="my-6 border-t border-gray-300" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {skills.map((skill, idx) => (
          <div
            key={skill.name}
            className={`relative rounded-2xl w-full flex flex-col items-center justify-center shadow-xl transition-all duration-300 cursor-pointer border-0 p-6 bg-gradient-to-br ${skill.color} overflow-hidden`}
            style={{
              boxShadow:
                hovered === idx
                  ? "0 8px 32px 0 rgba(33,186,243,0.18)"
                  : "0 4px 24px 0 rgba(0,0,0,0.08)",
              transform:
                hovered === idx ? "scale(1.04) rotate(-1deg)" : "scale(1)",
            }}
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
          >
            <span
              className={`text-5xl mb-2 drop-shadow-lg transition-all duration-300 ${
                hovered === idx ? "scale-125 rotate-6" : ""
              }`}
            >
              {skill.icon}
            </span>
            <span className="font-bold text-lg tracking-wide mb-3 text-center text-white drop-shadow">
              {skill.name}
            </span>
            {/* Interactive Rating Bar */}
            <div className="w-full flex flex-col items-center mt-2">
              <div className="w-full h-4 rounded-full bg-white/30 relative overflow-hidden group transition-all duration-200">
                <div
                  className="h-full rounded-full bg-white/80 shadow-inner transition-all duration-300"
                  style={{
                    width:
                      hovered === idx
                        ? `${skill.rating + 7}%`
                        : `${skill.rating}%`,
                    background:
                      hovered === idx
                        ? "linear-gradient(90deg,#fff 60%,#61dafb 100%)"
                        : "rgba(255,255,255,0.8)",
                    filter:
                      hovered === idx
                        ? "brightness(1.1) drop-shadow(0 0 8px #61dafb88)"
                        : "none",
                    transition: "width 0.3s, filter 0.3s, background 0.3s",
                  }}
                ></div>
                {hovered === idx && (
                  <div className="absolute inset-0 flex items-center justify-end pr-2 pointer-events-none animate-pulse">
                    <span className="text-xs font-bold text-[#61dafb] drop-shadow">
                      🚀
                    </span>
                  </div>
                )}
              </div>
              <div className="w-full flex justify-between mt-1 text-xs text-white/80 font-semibold">
                <span>Novice</span>
                <span>Expert</span>
              </div>
            </div>
            {/* Show rating value on hover */}
            <div className="mt-2 h-5 flex items-center justify-center">
              {hovered === idx && (
                <span className="text-xs px-2 py-1 rounded bg-[#61dafb]/30 text-[#222] font-semibold shadow transition-all duration-200 animate-bounce">
                  {skill.rating}%
                </span>
              )}
            </div>
            {/* Cool animated background effect on hover */}
            <div
              className={`absolute -top-10 -right-10 w-24 h-24 rounded-full bg-white/20 blur-2xl opacity-0 pointer-events-none transition-all duration-300 ${
                hovered === idx ? "opacity-100 scale-125" : ""
              }`}
            ></div>
          </div>
        ))}
      </div>
      <hr className="my-6 border-t border-gray-300" />
      <NextLevel nextlvl={3} className="flex justify-end text-slate-200" />
    </section>
  );
}
