import { Link, useLocation, useParams } from "wouter";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { motion } from "framer-motion";

export const NextLevel = ({ nextlvl, className }) => {
  return (
    <Link to={`/loading/${nextlvl}`} className={className}>
      <TbPlayerTrackNextFilled size={50} />
    </Link>
  );
};

export const LoadingScreen = () => {
  const params = useParams();
  const [location, setLocation] = useLocation();
  const lvl = parseInt(params.lvl);

  setTimeout(() => {
    setLocation(`/game/${lvl}`);
  }, 1500);

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
