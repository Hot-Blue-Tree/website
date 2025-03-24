import { Button } from "@nextui-org/button";
import Link from "next/link";
import { LogoSvg } from "../components/Logo";

export default function NotFound() {
  return (
    <div className="container max-w-5xl mx-auto px-8 flex-1 flex flex-col items-center justify-center space-y-8">
      <div className="flex items-center justify-center size-40 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-500 text-white">
        <LogoSvg />
      </div>
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-brand-blue">404 - Page Not Found</h1>
        <p className="text-xl text-gray-600">
          Oops! The page you're looking for seems to have wandered off.
        </p>
      </div>
      <Button
        as={Link}
        href="/"
        className="bg-gradient-to-tr from-blue-500 to-cyan-500 text-white"
        size="lg"
      >
        Return Home
      </Button>
    </div>
  );
}