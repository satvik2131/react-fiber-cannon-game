import { Link } from "react-router-dom";

export function Lvlselector() {
  return (
    <div className="h-full">
      {/* Lvl 1 --> 3 */}
      <div className="bg-slate-600 h-1/2">
        <LevelRow rowno={1} />
      </div>
      {/* Lvl 4--> 6 */}
      <div className="bg-blue-400 h-1/2">
        <LevelRow rowno={2} />
      </div>
    </div>
  );
}

const LevelRow = ({ rowno }) => {
  const color = rowno === 1 ? "bg-blue-400" : "bg-slate-600";
  const levels = rowno === 1 ? [1, 2, 3] : [4, 5, 6];

  return (
    <div className="grid grid-cols-3 sm:grid-cols-2 gap-4 h-4/5 ">
      {levels.map((lvl) => (
        <Link
          key={lvl}
          className={`${color} rounded-lg w-8/12 mt-5 ml-5 hover:bg-slate-950 hover:w-3/4 hover:h-full`}
          to={`/game`}
          state={{ lvl: lvl }}
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
    <div>
      <div className="container mx-auto flex items-center justify-center p-2 ">
        <img
          className="w-16 h-16"
          src="https://raw.githubusercontent.com/satvik2131/react-fiber-cannon-game/main/uploads/tennis.png"
        ></img>
      </div>
      {/* Level Number */}
      <p className="font-mono font-semibold text-center pt-4">Lvl- {lvl}</p>
      {/* Level Name - experience , skills , etc */}
      <p className="font-bold sm:text-sm hollowtext text-3xl text-center pt-4">
        {levelNames[lvl - 1]}
      </p>
    </div>
  );
};
