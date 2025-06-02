import React from "react";
const Header: React.FC = () => {
  return (
    <header className="flex flex-row justify-center items-center w-full p-4">
      <div className="text-2xl font-bold text-center text-balance bg-gradient-to-tr from-blue-500 to-cyan-500 bg-clip-text text-transparent">
        <p>Hot Blue Tree</p>
      </div>
    </header>
  );
};

export default Header;
