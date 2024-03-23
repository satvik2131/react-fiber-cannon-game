import { Link } from "react-router-dom";

export function Homepage() {
  // console.log(window.innerWidth);
  return (
    <div className="bg-blue-400 h-full overflow-y-scroll">
      {/* Short Intro  */}
      <div className="flex sm:flex-col md:h-1/2 bg-slate-600">
        <div className="basis-3/5 flex sm:mr-0 sm:justify-center justify-end items-center mr-7">
          <p className=" hollowtext font-bold drop-shadow-xl sm:text-7xl sm:p-4 md:text-8xl lg:text-9xl">
            Hi , I'm <br />
            Satvik
          </p>
        </div>
        {/* Separator */}
        <div className="border bg-blue-400 border-solid rotate-12 w-0"></div>
        {/* Photo */}
        <div className="basis-2/5 ">
          <div className="h-full flex ml-14 sm:ml-0 sm:justify-center items-center">
            <img
              className="rounded-full sm:h-52 sm:p-4 h-52 w-max "
              src={process.env.REACT_APP_MEDIA_DIR + "avatar.jpeg  "}
            />
          </div>
        </div>
      </div>

      {/* ----------------------------------------------------------------- */}
      <div className=" w-full flex flex-col justify-center ">
        <div className=" shadow-lg rounded-lg p-4 max-w-md mx-auto">
          <p className="font-mono font-semibold justify-items-center sm:text-base text-xl w-">
            Want to know more ?
          </p>
        </div>
        <div className=" shadow-md rounded-lg p-4 max-w-md mx-auto">
          <Link
            to={"/lvlSelector"}
            className=" text-5xl hollowtext h-14 font-bold"
          >
            Play
          </Link>
        </div>
      </div>
    </div>
  );
}

const DiagonalLine = () => {
  return (
    <div className="relative w-32 h-32">
      <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-blue-500 transform origin-bottom-left -rotate-45"></div>
    </div>
  );
};
