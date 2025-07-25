import { Html } from "@react-three/drei";
import { Intro } from "../Intro";
import { Skills } from "../Skills";
import { useState } from "react";

export function CardHolder({ lvl, cardstatus }) {
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
      default:
        WinCard = () => <div>dd</div>;
    }
  }

  return (
    <Html
      center
      position={winCardPosition}
      className={cardstatus ? null : "hidden"}
    >
      <div
        className="w-[34rem] max-w-full bg-gray-700 rounded-lg p-5 shadow-2xl overflow-y-auto"
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
