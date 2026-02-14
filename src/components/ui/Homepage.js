import { Link } from "wouter";
import { useRef } from "react";
import { MdVerified, MdPlayArrow, MdCode, MdPerson } from "react-icons/md";

const NavBar = ({}) => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-transparent px-6 py-6">
      <div className="max-w-7xl mx-auto grid grid-cols-3 items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-white border-heavy flex items-center justify-center font-bold text-xl text-black">S</div>
          <span className="font-bold text-xl tracking-tight uppercase text-white">Satvik.</span>
        </div>
        <div className="text-center">
          <p className="font-mono text-sm tracking-widest uppercase text-white/90">Win the game to know about me</p>
        </div>
        <div className="flex justify-end">
          <a className="bg-white text-black border-heavy px-6 py-2 font-bold hover:bg-black hover:text-white transition-all neo-button-shadow uppercase tracking-widest text-sm" href="#">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

const FooterMarquee = ({}) => {
  return (
    <footer className="w-full bg-black py-6 overflow-hidden whitespace-nowrap border-t-4 border-black fixed bottom-0 z-50">
      <div className="inline-block animate-marquee">
        <span className="text-white font-bold text-2xl mx-12 tracking-widest uppercase">Software Developer</span>
        <span className="text-[#3b82f6] font-bold text-2xl mx-12 tracking-widest uppercase">•</span>
        <span className="text-white font-bold text-2xl mx-12 tracking-widest uppercase">Security Enthusiast</span>
        <span className="text-[#3b82f6] font-bold text-2xl mx-12 tracking-widest uppercase">•</span>
        <span className="text-white font-bold text-2xl mx-12 tracking-widest uppercase">Building to Solve</span>
        <span className="text-[#3b82f6] font-bold text-2xl mx-12 tracking-widest uppercase">•</span>
      </div>
      <div className="inline-block animate-marquee">
        <span className="text-white font-bold text-2xl mx-12 tracking-widest uppercase">Software Developer</span>
        <span className="text-[#3b82f6] font-bold text-2xl mx-12 tracking-widest uppercase">•</span>
        <span className="text-white font-bold text-2xl mx-12 tracking-widest uppercase">Security Enthusiast</span>
        <span className="text-[#3b82f6] font-bold text-2xl mx-12 tracking-widest uppercase">•</span>
        <span className="text-white font-bold text-2xl mx-12 tracking-widest uppercase">Building to Solve</span>
        <span className="text-[#3b82f6] font-bold text-2xl mx-12 tracking-widest uppercase">•</span>
      </div>
    </footer>
  );
};

const HeroLeft = ({ onPlay }) => {
  return (
    <div className="order-2 lg:order-1 flex flex-col items-start space-y-6 lg:space-y-10">
      <div className="space-y-4 lg:space-y-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold leading-none tracking-tighter text-white">
          HI, I'M <br />
          <span className="text-white border-b-8 border-black uppercase">Satvik</span>
        </h1>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-white/80 max-w-lg">Play to know more about me</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center pt-2 lg:pt-4">
        <Link to="/lvlSelector" className="bg-white text-black border-heavy text-sm sm:text-base lg:text-lg font-bold px-6 sm:px-8 lg:px-10 py-2 sm:py-3 lg:py-4 uppercase tracking-tighter flex items-center space-x-2 sm:space-x-3 lg:space-x-4 hover:bg-black hover:text-white transition-all neo-button-shadow">
          <span>PLAY</span>
          <MdPlayArrow className="w-5 sm:w-6 lg:w-8 h-5 sm:h-6 lg:h-8" />
        </Link>

        <div className="flex space-x-2 sm:space-x-4">
          <a className="w-10 sm:w-12 lg:w-14 h-10 sm:h-12 lg:h-14 border-heavy bg-white text-black flex items-center justify-center hover:bg-black hover:text-white transition-colors" href="#">
            <MdCode className="w-5 sm:w-6 lg:w-7 h-5 sm:h-6 lg:h-7" />
          </a>
          <a className="w-10 sm:w-12 lg:w-14 h-10 sm:h-12 lg:h-14 border-heavy bg-white text-black flex items-center justify-center hover:bg-black hover:text-white transition-colors" href="#">
            <MdPerson className="w-5 sm:w-6 lg:w-7 h-5 sm:h-6 lg:h-7" />
          </a>
        </div>
      </div>

      <div className="w-full max-w-sm">
        <div className="chunky-card bg-slate-600 p-4 sm:p-6 lg:p-8 flex flex-col items-center justify-center text-center">
          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2">3.4</p>
          <p className="text-[10px] sm:text-xs font-bold uppercase text-white/60 tracking-[0.3em]">Level (Years)</p>
        </div>
      </div>
    </div>
  );
};

const ProfileCard = ({ imageUrl }) => {
  return (
    <div className="order-1 lg:order-2 flex justify-center lg:justify-end px-4 sm:px-0">
      <div className="relative">
        <div className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[28rem] lg:h-[28rem] chunky-card bg-blue-500">
          <img alt="Satvik's Profile" className="w-full h-full object-cover" src={imageUrl} />
        </div>

        <div className="absolute -bottom-3 sm:-bottom-4 lg:-bottom-6 -right-3 sm:-right-4 lg:-right-6 bg-white border-heavy p-2 sm:p-3 lg:p-5 neo-button-shadow flex items-center space-x-2 sm:space-x-3 lg:space-x-4 text-black">
          <div className="w-8 sm:w-10 lg:w-14 h-8 sm:h-10 lg:h-14 bg-black rounded-lg flex items-center justify-center text-white">
            <MdVerified className="w-5 sm:w-6 lg:w-8 h-5 sm:h-6 lg:h-8" />
          </div>
          <div>
            <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-black/50">Skill Level</p>
            <p className="text-base sm:text-lg lg:text-xl font-bold">MASTER</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export function Homepage() {
  const imageUrl = useRef(`/uploads/avatar.jpeg`);

  return (
    <div className="split-background min-h-screen text-white overflow-x-hidden">
      <NavBar />

      <main className="min-h-screen flex items-center justify-center pt-20 pb-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <HeroLeft />
          <ProfileCard imageUrl={imageUrl.current} />
        </div>
      </main>

      <FooterMarquee />
    </div>
  );
}
