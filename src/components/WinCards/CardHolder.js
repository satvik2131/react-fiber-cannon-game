import { Html } from "@react-three/drei";

export function CardHolder({ lvl, cardstatus }) {
  return (
    <Html position={[-1.5, 1.5, 0]}>
      <div className="w-96 h-80 bg-slate-600 rounded-lg"></div>
    </Html>
  );
}
