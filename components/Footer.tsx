import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="py-6">
      <div className="mt-4 text-center text-xs">
        <p>
          Copyright &copy; {new Date().getFullYear()} Hot Blue Tree Pty Ltd.
          <br />
          All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
