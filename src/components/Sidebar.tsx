import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaHome,
  FaCashRegister,
  FaClipboardList,
  FaChartPie,
  FaUser,
  FaCogs,
  FaBoxOpen,
  FaClipboardCheck,
  FaMoneyBillWave,
} from "react-icons/fa";

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState<string>('/dashboard');

  const handleLinkClick = (path: string) => {
    setActiveButton(path);
    navigate(path); 
  };

  return (
    <div className={className}>
      <div className="w-64 h-screen bg-white text-black shadow-heavy">
        <div className="flex items-center justify-center py-6">
          <img src="logo.png" alt="Logo" className="h-8 w-8" />
          <h1 className="ml-3 text-xl font-bold">
            <span className="font-bold">YB</span>{" "}
            <span className="font-serif text-xl font-normal">LAUNDRY</span>
          </h1>
        </div>
        <hr className="border-gray-300 dark:border-white"></hr>
        <nav className="mt-6 ml-2 bg-white mr-2">
          <div
            className={`flex items-center w-full text-left py-2.5 px-4 rounded transition duration-200 ${
              activeButton === "/dashboard"
                ? "bg-[#06b6d4] text-white shadow-md"
                : "text-black hover:bg-[#06b6d4] hover:text-white"
            }`}
            onClick={() => handleLinkClick("/dashboard")}
          >
            <FaHome className="mr-3" />
            Dashboard
          </div>
          <div
            className={`flex items-center w-full text-left py-2.5 px-4 rounded transition duration-200 ${
              activeButton === "/pos"
                ? "bg-[#06b6d4] text-white shadow-md"
                : "text-black hover:bg-[#06b6d4] hover:text-white"
            }`}
            onClick={() => handleLinkClick("/pos")}
          >
            <FaCashRegister className="mr-3" />
            Pos
          </div>
          <div
            className={`flex items-center w-full text-left py-2.5 px-4 rounded transition duration-200 ${
              activeButton === "/orderss"
                ? "bg-[#06b6d4] text-white shadow-md"
                : "text-black hover:bg-[#06b6d4] hover:text-white"
            }`}
            onClick={() => handleLinkClick("/orderss")}
          >
            <FaClipboardList className="mr-3" />
            Orders
          </div>
          <div
            className={`flex items-center w-full text-left py-2.5 px-4 rounded transition duration-200 ${
              activeButton === "/orders"
                ? "bg-[#06b6d4] text-white shadow-md"
                : "text-black hover:bg-[#06b6d4] hover:text-white"
            }`}
            onClick={() => handleLinkClick("/orders")}
          >
            <FaClipboardCheck className="mr-3" />
            Orders Status Screen
          </div>
          <div
            className={`flex items-center w-full text-left py-2.5 px-4 rounded transition duration-200 ${
              activeButton === "/expenses"
                ? "bg-[#06b6d4] text-white shadow-md"
                : "text-black hover:bg-[#06b6d4] hover:text-white"
            }`}
            onClick={() => handleLinkClick("/expenses")}
          >
            <FaMoneyBillWave className="mr-3" />
            Expenses
          </div>
          <div
            className={`flex items-center w-full text-left py-2.5 px-4 rounded transition duration-200 ${
              activeButton === "/customers"
                ? "bg-[#06b6d4] text-white shadow-md"
                : "text-black hover:bg-[#06b6d4] hover:text-white"
            }`}
            onClick={() => handleLinkClick("/customers")}
          >
            <FaUser className="mr-3" />
            Customers
          </div>
          <div
            className={`flex items-center w-full text-left py-2.5 px-4 rounded transition duration-200 ${
              activeButton === "/services"
                ? "bg-[#06b6d4] text-white shadow-md"
                : "text-black hover:bg-[#06b6d4] hover:text-white"
            }`}
            onClick={() => handleLinkClick("/services")}
          >
            <FaBoxOpen className="mr-3" />
            Services
          </div>
          <div
            className={`flex items-center w-full text-left py-2.5 px-4 rounded transition duration-200 ${
              activeButton === "/reports"
                ? "bg-[#06b6d4] text-white shadow-md"
                : "text-black hover:bg-[#06b6d4] hover:text-white"
            }`}
            onClick={() => handleLinkClick("/reports")}
          >
            <FaChartPie className="mr-3" />
            Reports
          </div>
          <div
            className={`flex items-center w-full text-left py-2.5 px-4 rounded transition duration-200 ${
              activeButton === "/settings"
                ? "bg-[#06b6d4] text-white shadow-md"
                : "text-black hover:bg-[#06b6d4] hover:text-white"
            }`}
            onClick={() => handleLinkClick("/settings")}
          >
            <FaCogs className="mr-3" />
            Settings
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
