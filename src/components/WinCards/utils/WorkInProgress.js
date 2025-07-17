import { useEffect } from "react";
import { useLocation } from "wouter";
import { useAppLocation } from "../../../hooks/useAppLocation";

export default function WorkInProgress() {
  const [location, setAppLocation] = useAppLocation();

  const notionResumeUrl =
    "https://atom-dish-e6d.notion.site/Satvik-Kushwaha-15dc151318df806fb9fbf1ae3263108f?source=copy_link";
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 px-4">
      <div className="bg-gray-800 rounded-2xl shadow-xl p-8 max-w-md text-center space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-white">
          🚧 Level in progress!
        </h2>
        <p className="text-gray-300">
          Hey! This level is still being built. For now, you can play{" "}
          <span className="font-medium text-white">Level 1</span> and{" "}
          <span className="font-medium text-white">Level 2</span>.
        </p>
        <a
          href={notionResumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-medium px-4 py-2 rounded-lg transition-colors"
        >
          📄 Check my Notion resume
        </a>
      </div>
    </div>
  );
}
