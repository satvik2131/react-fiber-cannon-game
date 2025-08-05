import { NextLevel } from "./utils/RedirectionAndLoading";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "R3F Portfolio Project",
    description:
      "You're already in this project! It's a 3D gaming portfolio built with Three.js, Cannon.js, and React Three Fiber. It includes a Can Knockdown game to showcase my skills.",
    github: "https://github.com/satvik2131/react-fiber-cannon-game",
  },
  {
    title: "Spare Parking App",
    description:
      "A native Android app built in Java that allows users to find and book nearby parking spots. Includes admin approval and Google Maps SDK integration.",
    github: "https://github.com/satvik2131/spare-park",
  },
  {
    title: "ATM Mimicking App",
    description:
      "An Android app simulating ATM operations. Supports deposit, withdrawal, and user/admin roles. Built with Java and Firebase.",
    github: "https://github.com/satvik2131/Atm-Demo-App",
  },
  {
    title: "Sports Space Booking App",
    description:
      "An Android app to reserve sports spaces. Built with Java and Firebase, it allows users to book time slots at various venues.",
    github: "https://github.com/satvik2131/sportsSpace",
  },
];

export default function Projects() {
  return (
    <section className="p-2 sm:p-10 max-w-6xl mx-auto">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
          My Projects
        </h1>
        <p className="text-gray-500 mt-2">
          Click a project to view it on GitHub
        </p>
      </header>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 list-none p-0 m-0">
        {projects.map((project, idx) => (
          <li key={idx}>
            <article className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-2xl"
              >
                <header className="flex items-center justify-between mb-3">
                  <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
                    {project.title}
                  </h2>
                  <FaGithub className="text-xl text-gray-600 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white" />
                </header>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>
              </a>
            </article>
          </li>
        ))}
      </ul>
      <hr className="my-6 border-t border-gray-300" />
      <NextLevel nextlvl={6} className="flex justify-end text-slate-200" />
    </section>
  );
}
