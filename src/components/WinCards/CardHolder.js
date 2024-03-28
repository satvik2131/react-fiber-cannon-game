import { Html } from "@react-three/drei";
import { Intro } from "./Intro";
import { Skills } from "./Skills";

export function CardHolder({ lvl, cardstatus }) {
  var WinCard;
  switch (lvl) {
    case 1:
      WinCard = Intro;
      break;
    case 2:
      WinCard = Skills;
      break;
  }

  return (
    <Html
      position={[-1.5, 2, 0]}
      //  className={cardstatus ? null : "hidden"}
    >
      <div className="w-96 h-auto bg-gray-700 rounded-lg p-8 shadow-2xl">
        <WinCard />
      </div>
    </Html>
  );
}
