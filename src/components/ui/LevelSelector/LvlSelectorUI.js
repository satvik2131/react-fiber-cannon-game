// import { Link } from "react-router-dom";
import { Link } from "wouter";

export function Lvlselector() {
  return (
    <div className="h-full flex flex-col">
      {/* Lvl 1 --> 3 */}
      <div className="bg-slate-600 flex-1 min-h-[180px]">
        <LevelRow rowno={1} />
      </div>
      {/* Lvl 4--> 6 */}
      <div className="bg-blue-400 flex-1 min-h-[180px]">
        <LevelRow rowno={2} />
      </div>
    </div>
  );
}

const LevelRow = ({ rowno }) => {
  const color = rowno === 1 ? "bg-blue-400" : "bg-slate-600";
  const levels = rowno === 1 ? [1, 2, 3] : [4, 5, 6];

  return (
    <div className="grid grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-4 h-4/5 w-full px-2 py-4">
      {levels.map((lvl) => (
        <Link
          key={lvl}
          className={`
            ${color} rounded-lg 
            w-full max-w-xs mx-auto my-2
            flex flex-col items-center justify-center
            transition-all duration-200
            hover:bg-slate-950 hover:scale-105
            shadow-md
          `}
          to={`/game/${lvl}`}
        >
          <LvlCard lvl={lvl} />
        </Link>
      ))}
    </div>
  );
};

const LvlCard = ({ lvl }) => {
  const levelNames = [
    "Intro",
    "Skills",
    "Experience",
    "Hobbies",
    "Projects",
    "Resume",
  ];
  return (
    <div className="flex flex-col items-center justify-center w-full p-2">
      <div className="flex items-center justify-center p-2">
        <img
          className="w-14 h-14 sm:w-16 sm:h-16 drop-shadow-lg animate-bounce-slow"
          src="/uploads/tennis.png"
          alt={`Level ${lvl}`}
        />
      </div>
      {/* Level Number */}
      <p className="font-mono font-semibold text-center pt-2 text-base sm:text-lg text-blue-200 drop-shadow">
        Lvl- {lvl}
      </p>
      {/* Level Name - experience , skills , etc */}
      <div className="relative w-full flex justify-center">
        <span className="absolute left-1/2 -translate-x-1/2 top-2 w-28 h-6  opacity-60 rounded-full z-0"></span>
        <p className="relative z-10 font-extrabold text-center pt-2 text-xl sm:text-3xl uppercase tracking-widest hollowtext">
          {levelNames[lvl - 1]}
        </p>
      </div>
    </div>
  );
};
