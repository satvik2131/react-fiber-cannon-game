import { Html } from "@react-three/drei";
import { Experience, Intro, Skills } from "../";
import { useState } from "react";

export function CardHolder({ lvl, winStatus }) {
  const [winCardPosition, setWinCardPosition] = useState([0, 0, 0]);

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
      default:
        WinCard = () => <div>Current Wip!</div>;
    }
  }

  return (
    <Html
      center
      position={winCardPosition}
      className={winStatus ? null : "hidden"}
    >
      <div
        className="w-[44rem] max-w-full bg-gray-700 rounded-lg p-5 shadow-2xl overflow-y-auto"
        style={{
          maxHeight: "80vh",
          scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none", // IE 10+
        }}
      >
        <style>
          {`
            .w-96::-webkit-scrollbar,
            .w-\\[28rem\\]::-webkit-scrollbar,
            .w-\\[34rem\\]::-webkit-scrollbar {
              display: none;
            }
          `}
        </style>
        <WinCard />
      </div>
    </Html>
  );
}
