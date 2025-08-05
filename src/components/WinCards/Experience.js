import experiences from "../../data/experience.json";
import { motion } from "framer-motion";
import { NextLevel } from "./utils/RedirectionAndLoading";

export default function Experience() {
  return (
    <section className="relative flex items-center justify-center">
      {/* Floating planets */}
      <motion.div
        className="absolute w-8 h-8 bg-yellow-300 rounded-full top-10 left-10"
        animate={{ x: [0, 20, -20, 0], y: [0, -20, 20, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-6 h-6 bg-blue-400 rounded-full bottom-20 right-12"
        animate={{ x: [0, -15, 15, 0], y: [0, 15, -15, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-5 h-5 bg-pink-400 rounded-full top-1/2 left-0"
        animate={{ y: [0, -10, 10, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />
      {/* Card container */}
      <div className=" w-[44rem] h-[32rem] rounded-2xl p-6 bg-opacity-0">
        <h2 className="text-2xl font-bold text-center text-[#61dafb] mb-4">
          Professional Experience
        </h2>
        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-gray-900 bg-opacity-70 rounded-xl p-4 shadow hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-lg font-semibold text-white">{exp.title}</h3>
              <p className="text-gray-400 text-sm mb-1">
                {exp.company} {exp.company && "|"} {exp.duration}
              </p>
              <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                {exp.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
          <hr className="my-6 border-t border-gray-300" />

          <NextLevel nextlvl={4} className="flex justify-end text-slate-200" />
        </div>
      </div>
    </section>
  );
}
