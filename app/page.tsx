import { LogoSvg } from "../components/Logo";

const Home = () => {
  return (
    <>
      <div className="flex-1 flex flex-col items-center justify-center max-w-5xl mx-auto px-8 space-y-8 py-8 md:space-y-24 md:py-24">
        <div className="flex flex-col items-center justify-center gap-8">
          <div className="flex items-center justify-center h-48 md:h-36 bg-gradient-to-tr from-blue-500 to-cyan-500 text-white aspect-square rounded-full">
            <LogoSvg />
          </div>
          <h1 className="text-4xl font-bold text-center text-balance bg-gradient-to-tr from-blue-500 to-cyan-500 bg-clip-text text-transparent p-2">
            Big things are coming
            <span className="animate-ping-dot-1">.</span>
            <span className="animate-ping-dot-2">.</span>
            <span className="animate-ping-dot-3">.</span>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Home;
