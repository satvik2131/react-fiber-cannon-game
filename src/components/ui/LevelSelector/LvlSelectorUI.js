import { useAppLocation } from "../../../hooks/useAppLocation";
import {
  MdCheckCircle,
  MdLockOpen,
  MdRadioButtonChecked,
  MdDownload,
  MdDescription,
  MdExpandLess,
} from "react-icons/md";
import { Link } from "wouter";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b-4 border-black px-4 sm:px-6 py-3 sm:py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-300 border-4 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] flex items-center justify-center">
            <span className="text-black text-lg sm:text-2xl">🕹️</span>
          </div>
          <span className="font-black text-base sm:text-xl tracking-tighter uppercase italic">SATVIK.DEV</span>
        </div>
        <nav className="flex items-center gap-4 sm:gap-8 font-bold uppercase tracking-wider text-xs sm:text-sm">
          <a className="hover:underline decoration-4 underline-offset-4" href="/">
            Home
          </a>
          <a className="bg-yellow-300 px-3 sm:px-4 py-1 sm:py-1.5 border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)]" href="#levels">
            Levels
          </a>
        </nav>
      </div>
    </header>
  );
};

const TennisBall = () => {
  return (
    <div
      className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-yellow-300 border-3 sm:border-4 border-black relative overflow-hidden flex items-center justify-center outline outline-3 sm:outline-4 outline-black outline-offset-2 sm:outline-offset-4"
      style={{
        backgroundImage: "linear-gradient(135deg, transparent 48%, black 48%, black 52%, transparent 52%)",
      }}
    />
  );
};

const LevelCard = ({ lvl, onPlay }) => {
  const levelData = [
    {
      name: "INTRO",
    },
    {
      name: "SKILLS",
    },
    {
      name: "EXPERIENCE",
    },
    {
      name: "HOBBIES",
    },
    {
      name: "PROJECTS",
    },
    {
      name: "RESUME",
    },
  ];

  const data = levelData[lvl - 1];
  const isDark = lvl > 3;

  const bgColor = isDark ? "bg-gray-800" : "bg-blue-500";
  const textColor = isDark ? "text-white" : "text-black";

  return (
    <div
      onClick={() => onPlay(lvl)}
      className={`neo-card ${bgColor} p-4 sm:p-6 md:p-8 flex flex-col items-center shadow-[8px_8px_0_0_rgba(0,0,0,1)] sm:shadow-[10px_10px_0_0_rgba(0,0,0,1)] cursor-pointer transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0_0_rgba(0,0,0,1)] sm:hover:shadow-[14px_14px_0_0_rgba(0,0,0,1)]`}
    >
      <div className="w-full flex justify-start mb-4 sm:mb-6">
        <span className="font-mono font-bold bg-yellow-300 text-black px-2 sm:px-3 py-1 border-2 border-black text-xs sm:text-sm">
          Lvl - {lvl}
        </span>
      </div>

      <div className="mb-4 sm:mb-6">
        <TennisBall />
      </div>

      <div className="text-center mb-4 sm:mb-6 w-full">
        <h3 className={`font-mono font-black text-xl sm:text-2xl md:text-3xl uppercase ${textColor}`}>
          {data.name}
        </h3>
      </div>

      {lvl === 6 ? (
        <button className="w-full py-2 sm:py-3 md:py-4 bg-yellow-300 border-3 sm:border-4 border-black font-mono font-black uppercase text-xs sm:text-sm shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:shadow-[8px_8px_0_0_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 active:translate-x-0 active:translate-y-0 active:shadow-none transition-all">
          LOAD_FILE.EXE
        </button>
      ) : (
        <div className="w-full px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-yellow-300/20 border-2 border-dashed border-yellow-400">
          <p className="font-mono text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-widest text-yellow-300 text-center">
            CLICK TO PLAY
          </p>
        </div>
      )}
    </div>
  );
};

export function Lvlselector() {
  const [location, setAppLocation] = useAppLocation();

  const openLevel = (lvl) => {
    setAppLocation(`/game/${lvl}`, { replace: true });
  };

  const unlockedLevels = [1, 2, 3, 4, 5, 6]; // All levels unlocked

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />

      {/* Top Section - Levels 1-3 */}
      <div className="bg-gray-800 pt-8 sm:pt-12 md:pt-16 pb-6 sm:pb-8 md:pb-12 px-3 sm:px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 sm:mb-12 md:mb-16 text-center">
            <h1 className="font-black text-3xl sm:text-4xl md:text-6xl lg:text-7xl uppercase leading-none mb-2 sm:mb-3 md:mb-4 tracking-tighter text-white">
              SELECT <span className="text-yellow-300">LEVEL</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
            {[1, 2, 3].map((lvl) => (
              <LevelCard
                key={lvl}
                lvl={lvl}
                onPlay={openLevel}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section - Levels 4-6 */}
      <div className="bg-blue-500 pt-6 sm:pt-8 md:pt-12 pb-20 sm:pb-24 px-3 sm:px-4 md:px-6 flex-grow">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
            {[4, 5, 6].map((lvl) => (
              <LevelCard
                key={lvl}
                lvl={lvl}
                onPlay={openLevel}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <div className="fixed bottom-6 right-6 z-[100] hidden md:block">
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="w-12 h-12 bg-black text-yellow-300 border-4 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] flex items-center justify-center cursor-pointer hover:-translate-y-1 transition-transform"
        >
          <MdExpandLess className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
}
