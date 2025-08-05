import { Html } from "@react-three/drei";
import { Experience, Intro, Skills, Hobbies, Projects, Resume } from "../";
import { useState, useEffect } from "react";
import { useAppStore } from "../../../store/appStore";

export function CardHolder({ lvl, winStatus }) {
  const [winCardPosition, setWinCardPosition] = useState([0, 0, 0]);
  const setWin = useAppStore((state) => state.setWin);

  let WinCard;
  if (lvl) {
    switch (lvl) {
      case 1:
        WinCard = Intro;
        break;
      case 2:
        WinCard = Skills;
        break;
      case 3:
        WinCard = Experience;
        break;
      case 4:
        WinCard = Hobbies;
        break;
      case 5:
        WinCard = Projects;
        break;
      case 6:
        WinCard = Resume;
        break;
      default:
        WinCard = () => <div>Oops!</div>;
    }
  }

  const handleClose = () => {
    setWin(false);
  };

  return (
    <Html
      center
      position={winCardPosition}
      className={winStatus ? null : "hidden"}
    >
      <div
        className="relative w-[44rem] max-w-full bg-gray-700 rounded-lg p-5 shadow-2xl overflow-y-auto"
        style={{
          maxHeight: "80vh",
          overflowY: "auto",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center rounded-full bg-gray-600 hover:bg-red-500 transition-colors duration-200 z-50"
        >
          <span className="text-white text-xl">&times;</span>
        </button>

        <div className="mt-6">
          {" "}
          {/* Add padding to prevent content hiding under close button */}
          <WinCard />
        </div>
      </div>
    </Html>
  );
}
