import { Link, useLocation, useParams } from "wouter";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { motion } from "framer-motion";
import { useAppLocation } from "../../../hooks/useAppLocation";
import { useAppStore } from "../../../store/appStore";
import { useShallow } from "zustand/react/shallow";

export const NextLevel = ({ nextlvl, className }) => {
  const [location, setAppLocation] = useAppLocation();
  const { setWin, setInitialKnockCount } = useAppStore(
    useShallow((state) => ({
      setWin: state.setWin,
      setInitialKnockCount: state.setInitialKnockCount,
    }))
  );

  const handleClick = () => {
    setAppLocation(`/loading/${nextlvl}`, { replace: true });
    setWin(false); // Reset win status before navigating to the next level
    setInitialKnockCount(); // Reset knock count before navigating to the next level
  };

  return (
    <div onClick={handleClick} className={`${className} cursor-pointer`}>
      <TbPlayerTrackNextFilled size={50} />
    </div>
  );
};

export const LoadingScreen = () => {
  const params = useParams();
  const [location, setAppLocation] = useAppLocation();
  const lvl = parseInt(params.lvl);

  setTimeout(() => {
    setAppLocation(`/game/${lvl}`);
  }, 500);

  return (
    <div className="fixed bg-black h-screen top-0 left-0 w-full h-full flex justify-center items-center z-10">
      <div className="p-4 rounded-md">
        <div className="flex justify-center">
          <>
            <motion.span
              className="w-4 h-4 my-12 mx-1 bg-white rounded-full"
              animate={{
                y: [0, -20, 0],
                opacity: [1, 0], // Fades out
                transition: { duration: 1, repeat: Infinity },
              }}
            />
            <motion.span
              className="w-4 h-4 my-12 mx-1 bg-white rounded-full"
              animate={{
                y: [0, -20, 0],
                opacity: [1, 0], // Fades out
                transition: { duration: 1, repeat: Infinity, delay: 0.2 },
              }}
            />
            <motion.span
              className="w-4 h-4 my-12 mx-1 bg-white rounded-full"
              animate={{
                y: [0, -20, 0],
                opacity: [1, 0], // Fades out
                transition: { duration: 1, repeat: Infinity, delay: 0.4 },
              }}
            />
          </>
        </div>
      </div>
    </div>
  );
};
