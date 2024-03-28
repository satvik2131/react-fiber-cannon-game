// import { Link } from "react-router-dom";
import { Link } from "wouter";
import intro from "../../data/intro.json";
import { FaTwitter, FaLinkedin, FaGithub, FaStar } from "react-icons/fa";
import { TbPlayerTrackNextFilled } from "react-icons/tb";

export function Intro() {
  return (
    <div>
      <div class="font-bold text-2xl mb-2 text-center text-zinc-50">
        {intro.title}
      </div>
      <hr className="my-6 border-t border-gray-300" />

      <ThreeStars />

      <div class="max-w-sm rounded overflow-hidden shadow-xl bg-slate-800">
        <div class="px-6 py-4">
          <p class=" text-base text-white">{intro.description}</p>
        </div>
      </div>

      <hr className="my-6 border-t border-gray-300" />

      <SocialIcons />

      <NextLevel />
    </div>
  );
}

const ThreeStars = () => {
  return (
    <div className="flex justify-center space-x-4 m-3">
      <FaStar className="text-yellow-400 w-6 h-6" />
      <FaStar className="text-yellow-400 w-6 h-6" />
      <FaStar className="text-yellow-400 w-6 h-6" />
    </div>
  );
};

const NextLevel = () => {
  return (
    <Link to={`/game/2`} className="flex justify-end text-slate-200">
      <TbPlayerTrackNextFilled size={50} />
    </Link>
  );
};

const SocialIcons = () => {
  return (
    <div className="flex space-x-4 ">
      <a
        href={intro.twitterurl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-blue-600 transition duration-300"
      >
        <FaTwitter className="w-6 h-6" />
      </a>
      <a
        href={intro.linkedinurl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 transition duration-300"
      >
        <FaLinkedin className="w-6 h-6" />
      </a>
      <a
        href={intro.githuburl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white"
      >
        <FaGithub className="w-6 h-6" />
      </a>
    </div>
  );
};
