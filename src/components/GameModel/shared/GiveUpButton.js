import { Html } from "@react-three/drei";
import { useAppStore } from "../../../store/appStore";
import { useShallow } from "zustand/react/shallow";

export default function GiveUpButton() {
  const { setWin, setInitialKnockCount } = useAppStore(
    useShallow((state) => ({
      setWin: state.setWin,
      setInitialKnockCount: state.setInitialKnockCount,
    }))
  );
  const handleGiveUp = () => {
    setWin(true); // set win status to true
  };
  return (
    <Html position={[4.2, 1.7, 0]}>
      <div
        onClick={handleGiveUp}
        className="cursor-pointer hover:scale-110 transition-transform"
      >
        <svg
          width="100px"
          height="100px"
          viewBox="0 0 256 256"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          baseProfile="full"
          enableBackground="new 0 0 256 256"
          style={{
            backgroundColor: "black",
            borderRadius: "20px",
            boxShadow: "2px 1px #ffff",
          }}
          fill="#ffffff"
          stroke="#ffffff"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0" />

          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <g id="SVGRepo_iconCarrier">
            <g>
              <circle cx="129" cy="43.7" r="19.2" />
              <path d="M185.6,1.5c-4.6,0-8.4,3.8-8.4,8.4v34.9l-18.7,18.7c-2.8,2.8-6.6,4.2-10.3,4.2H129h0h-19.2c-3.7,0-7.5-1.4-10.3-4.2 L80.8,44.8V9.9c0-4.6-3.8-8.4-8.4-8.4c-4.6,0-8.4,3.8-8.4,8.4v38.4c0,2.4,1,4.5,2.6,6l36,36v1.3v64.8v86.4c0,6.6,5.4,12,12,12 s12-5.4,12-12v-84c0-1.3,1.1-2.4,2.4-2.4s2.4,1.1,2.4,2.4v84c0,6.6,5.4,12,12,12s12-5.4,12-12v-86.4h0V90.4l36-36 c1.6-1.5,2.6-3.7,2.6-6V9.9C194,5.3,190.2,1.5,185.6,1.5z" />
            </g>
          </g>
        </svg>
      </div>
    </Html>
  );
}
