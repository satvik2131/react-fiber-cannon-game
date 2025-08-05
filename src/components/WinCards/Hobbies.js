import { NextLevel } from "./utils/RedirectionAndLoading";

export default function Hobbies() {
  const hobbies = [
    {
      title: "Playing Flute",
      icon: "🎵",
      description: "Classical flute player with focus on Indian melodies",
      color: "from-purple-500 to-pink-500",
      details: [
        "Started Playing randomly and fell in love with it",
        "Played a lot for my family and friends",
        "Currently learning advanced techniques and improvisation",
      ],
    },
    {
      title: "Travelling",
      icon: "🌎",
      description: "Exploring new places and cultures",
      color: "from-blue-500 to-teal-500",
      details: [
        "Enjoys solo and group travels",
        "It's kind of relief from daily routine",
      ],
    },
    {
      title: "Photography",
      icon: "📸",
      description: "Capturing moments and landscapes",
      color: "from-amber-500 to-red-500",
      details: [
        "Not a professional, but loves to capture memories",
        "Have a good score in google Maps",
      ],
    },
    {
      title: "Gaming",
      icon: "🎮",
      description: "Strategy and open-world games",
      color: "from-green-500 to-emerald-500",
      details: [
        "Open world and racing is my favorite genre",
        "Fan of old consoles",
      ],
    },
  ];

  return (
    <>
      <header>
        <h2 className="text-2xl font-bold text-center text-[#61dafb] mb-4">
          Hobbies and Interests
        </h2>
      </header>
      <section
        aria-labelledby="hobbies-section"
        className="w-full max-w-2xl mx-auto p-4 sm:p-8 bg-opacity-70"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {hobbies.map((hobby, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl bg-gradient-to-br ${hobby.color} 
                hover:scale-105 hover:sm:col-span-2 hover:z-10
                transition-all duration-300 shadow-lg hover:shadow-xl
                group cursor-pointer relative overflow-hidden`}
            >
              <div className="flex items-start gap-4">
                <span className="text-4xl group-hover:scale-110 transition-transform">
                  {hobby.icon}
                </span>
                <div className="space-y-2">
                  <h3 className="font-bold text-white text-lg">
                    {hobby.title}
                  </h3>
                  <p className="text-white/80 text-sm">{hobby.description}</p>
                  {/* Expanded details on hover */}
                  <div className="max-h-0 group-hover:max-h-40 transition-all duration-300 overflow-hidden">
                    <ul className="text-white/90 text-sm mt-3 space-y-1">
                      {hobby.details?.map((detail, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-white/80 rounded-full"></span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer>
        <hr className="my-6 border-t border-gray-300" />
        <NextLevel nextlvl={5} className="flex justify-end text-slate-200" />
      </footer>
    </>
  );
}
