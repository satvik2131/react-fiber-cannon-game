import { FaGithub, FaLinkedin, FaExternalLinkAlt } from "react-icons/fa";

export function ResumeViewer() {
  return (
    <div className="max-w-6xl mx-auto p-6 sm:p-10 text-gray-800 dark:text-gray-100 font-sans">
      {/* Header */}
      <div className="bg-white dark:bg-gray-900 shadow-lg rounded-3xl p-6 sm:p-10 mb-10 border border-gray-200 dark:border-gray-800">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold">Satvik Kushwaha</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Full-Stack Developer | React | Node.js | Three.js | Android
            </p>
            <div className="mt-2 text-sm text-gray-500 space-y-1">
              <p>📞 +91 7509593038</p>
              <p>
                📧{" "}
                <a href="mailto:satvik213161@gmail.com" className="underline">
                  satvik213161@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-4 text-base mt-2">
                <a
                  href="https://github.com/satvik2131"
                  target="_blank"
                  className="flex items-center gap-1 underline"
                >
                  <FaGithub /> GitHub
                </a>
                <a
                  href="https://linkedin.com/in/satvik-kushwaha-7b7b1811b"
                  target="_blank"
                  className="flex items-center gap-1 underline"
                >
                  <FaLinkedin /> LinkedIn
                </a>
                <a
                  href="https://satvik2131.netlify.app"
                  target="_blank"
                  className="flex items-center gap-1 underline"
                >
                  <FaExternalLinkAlt /> Portfolio
                </a>
              </p>
            </div>
          </div>
          <a
            href="https://atom-dish-e6d.notion.site/Satvik-Kushwaha-15dc151318df806fb9fbf1ae3263108f?source=copy_link"
            target="_blank"
            className="mt-6 md:mt-0 inline-block bg-black text-white dark:bg-white dark:text-black px-5 py-2 rounded-full font-medium hover:scale-105 transition"
          >
            View Full Resume →
          </a>
        </div>
      </div>

      {/* About */}
      <section className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 mb-6 shadow-sm">
        <h2 className="text-2xl font-semibold mb-2">About</h2>
        <p>
          Full-Stack Developer with 4+ years of experience building scalable
          web, mobile, and backend systems. Skilled in React, Next.js, Node.js,
          and 3D web experiences (Three.js). Open-source contributor to projects
          like Kestra and Organic Maps.
        </p>
      </section>

      {/* Skills */}
      <section className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 mb-6 shadow-sm">
        <h2 className="text-2xl font-semibold mb-3">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-sm">
          <span>JavaScript / TypeScript</span>
          <span>React / Next.js / Vue</span>
          <span>Node.js / Express</span>
          <span>Three.js / R3F</span>
          <span>Jetpack Compose</span>
          <span>Firebase / REST APIs</span>
          <span>Docker / GitHub Actions</span>
          <span>PostgreSQL / MongoDB</span>
        </div>
      </section>

      {/* Experience */}
      <section className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 mb-6 shadow-sm">
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>
        <div className="space-y-5">
          <div>
            <h3 className="font-semibold text-lg">
              Frontend Engineer – Intangles Lab (Sep 2024 – Mar 2025)
            </h3>
            <ul className="list-disc list-inside text-sm">
              <li>
                Migrated Angular.js to React.js, improving performance by 40%
              </li>
              <li>Implemented Redux-Saga & SSO integration</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg">
              Freelance Developer (Aug 2020 – Aug 2024)
            </h3>
            <ul className="list-disc list-inside text-sm">
              <li>Developed 20+ apps/web projects with 4.8⭐ client ratings</li>
              <li>Created Alexa Skill with AWS Lambda & Firebase</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg">
              SDE Intern – Fountane (Apr 2023 – Dec 2023)
            </h3>
            <ul className="list-disc list-inside text-sm">
              <li>Created 3D modeling platform (Three.js + Node)</li>
              <li>Migrated Babylon.js to Three.js (30% bundle size drop)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 mb-6 shadow-sm">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="space-y-4 text-sm">
          <div>
            <h3 className="font-bold">🎮 3D Portfolio Game</h3>
            <p>Interactive 3D resume with analytics and CMS backend.</p>
            🔗{" "}
            <a
              href="https://satvik2131.netlify.app"
              target="_blank"
              className="underline"
            >
              Live Site
            </a>
          </div>
          <div>
            <h3 className="font-bold">📱 Sparepark Android App</h3>
            <p>Realtime parking app with Google Maps and Firebase.</p>
            🔗{" "}
            <a
              href="https://github.com/satvik2131/spare-park"
              target="_blank"
              className="underline"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Contributions */}
      <section className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 mb-6 shadow-sm">
        <h2 className="text-2xl font-semibold mb-2">
          Open Source Contributions
        </h2>
        <ul className="list-disc list-inside text-sm">
          <li>
            <a
              href="https://github.com/kestra-io/kestra/commits?author=satvik2131"
              className="underline"
            >
              Kestra Workflow Engine
            </a>{" "}
            — 10+ PRs for bugs & docs
          </li>
          <li>
            <a
              href="https://github.com/organicmaps/organicmaps/commits?author=satvik2131"
              className="underline"
            >
              Organic Maps
            </a>{" "}
            — fixes for mobile nav + map UI
          </li>
        </ul>
      </section>

      {/* Education */}
      <section className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm">
        <h2 className="text-2xl font-semibold mb-2">Education</h2>
        <p className="text-sm">
          <strong>B.Tech in Computer Science</strong> — Gyan Ganga College of
          Technology, Jabalpur (2019–2023)
        </p>
      </section>
    </div>
  );
}
