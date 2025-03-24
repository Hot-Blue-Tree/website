import Link from "next/link";
import { LogoSvg } from "../../components/Logo";

export default function About() {
  return (
    <>
      <h1>About</h1>
      <div>
        Back to <Link href="/">Home</Link>
      </div>
      {/* <div className="grid grid-cols-3 gap-4 p-16">
        <div className="flex flex-row space-x-4 items-center justify-center fill-brand-blue">
          <div className="flex items-center justify-center size-28 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-500 text-white">
            <LogoSvg />
          </div>
          <div className="flex flex-col">
            <span className="bg-brand-blue py-px px-8 rounded-xl">
              <h1 className="text-2xl text-center font-bold tracking-wider text-white uppercase">
                Hot Blue Tree
              </h1>
            </span>
            <div className="flex flex-row justify-around items-center gap-2 px-2">
              <hr className="flex-1 h-1 bg-brand-blue" />
              <h2 className="text-lg text-center font-bold tracking-widest text-brand-blue uppercase">
                AI Consulting
              </h2>
              <hr className="flex-1 h-1 bg-brand-blue" />
            </div>
            <p className="text-lg text-center font-medium text-brand-blue -mt-1.5">
              Rooted in your Success
            </p>
          </div>
        </div>
        <div className="flex flex-row space-x-4 items-center justify-center fill-brand-blue">
          <div className="flex items-center justify-center size-28 rounded-full bg-blue-500 text-white">
            <LogoSvg />
          </div>
          <div className="flex flex-col">
            <span className="bg-brand-blue py-1 px-6 rounded-xl">
              <h1 className="text-3xl text-center font-bold tracking-wider text-white uppercase">
                Hot Blue Tree
              </h1>
            </span>
            <div className="flex flex-row justify-around items-center gap-2 px-2">
              <h2 className="text-3xl text-center tracking-widest text-brand-blue uppercase">
                AI Consulting
              </h2>
            </div>
          </div>
        </div>
        <div className="flex flex-row space-x-4 items-center justify-center fill-brand-blue">
          <div className="flex items-center justify-center size-28 rounded-full bg-cyan-500 text-white">
            <LogoSvg />
          </div>
          <div className="flex flex-col">
            <h1 className="text-4xl text-center font-bold tracking-wider text-white uppercase">
              <span className="bg-brand-blue py-1 px-4 rounded-xl">
                Hot Blue Tree
              </span>
            </h1>
          </div>
        </div>
        <div className="flex flex-row space-x-4 items-center justify-center fill-brand-blue">
          <div className="flex items-center justify-center size-28 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-500 text-white">
            <LogoSvg />
          </div>
          <div className="flex flex-col">
            <span className="bg-brand-blue py-1 px-4 rounded-xl">
              <h1 className="text-3xl text-center font-bold text-white uppercase">
                Hot Blue Tree
              </h1>
              <hr className="w-full h-px bg-white my-1" />
              <h2 className="text-xl text-center tracking-widest text-white uppercase">
                AI Consulting
              </h2>
            </span>
          </div>
        </div>
        <div className="flex flex-row space-x-4 items-center justify-center fill-brand-blue">
          <div className="flex items-center justify-center size-28 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-500 text-white">
            <LogoSvg />
          </div>
          <div className="flex flex-col">
            <span className="bg-gradient-to-tr from-blue-500 to-cyan-500 py-px px-8 rounded-xl">
              <h1 className="text-2xl text-center font-bold text-white uppercase">
                Hot Blue Tree
              </h1>
            </span>
            <div className="flex flex-row justify-around items-center gap-2 py-1 px-2">
              <h2 className="text-xl text-center tracking-widest font-semibold text-brand-blue uppercase">
                AI Consulting
              </h2>
            </div>
          </div>
        </div>
        <div className="flex flex-row space-x-4 items-center justify-center fill-brand-blue">
          <div className="flex items-center justify-center size-28 rounded-full bg-brand-blue text-white">
            <LogoSvg />
          </div>
          <div className="flex flex-col">
            <h1 className="text-4xl text-center font-bold tracking-wider text-white uppercase">
              <span className="bg-brand-blue py-1 px-4 rounded-xl">
                Hot Blue Tree
              </span>
            </h1>
          </div>
        </div>
      </div> */}
      <div className="h-[1000px] w-full bg-brand-blue">
        <LogoSvg />
      </div>
    </>
  );
}
