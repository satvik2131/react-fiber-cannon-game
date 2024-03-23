import { Html } from "@react-three/drei";
import { Intro } from "./Intro";

export function CardHolder({ lvl, cardstatus }) {
  var WinCard;
  switch (lvl) {
    case 1:
      WinCard = Intro;
  }

  return (
    <Html position={[-1.5, 1.5, 0]} className={cardstatus ? null : "hidden"}>
      <div className="w-96 h-auto bg-slate-600 rounded-lg p-8 shadow-2xl">
        <WinCard />
      </div>
    </Html>
  );
}
