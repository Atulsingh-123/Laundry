import React from "react";
import { IoReorderThreeSharp } from "react-icons/io5";

interface NavbarProps {
  className?: string;
  onMenuClick?: () => void; 
}

const Navbar: React.FC<NavbarProps> = ({ className, onMenuClick }) => {
  return (
    <div className={className}>
      <div className="flex items-center justify-between bg-[#06b6d4] h-16 px-4 text-white w-full">
        <div className="text-xl cursor-pointer" onClick={onMenuClick}>
          <IoReorderThreeSharp />
        </div>
        <div className="text-right">
          <span>Hello,</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
