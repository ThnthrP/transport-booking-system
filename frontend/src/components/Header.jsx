import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

export default function Header() {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 250); // หน่วง 250ms
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center px-8 py-3 gap-12">
        {/* Logo */}
        <Link to="/">
          <img
            src={assets.logo_with_name}
            alt="logo"
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* Navbar */}
        <nav className="flex items-center gap-10 text-gray-700 font-medium">
          {/* หน้าแรก */}
          <Link to="/" className="relative group">
            หน้าแรก
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#facc15] transition-all group-hover:w-full"></span>
          </Link>

          {/* Dropdown */}
          <div
            className="relative group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span className="cursor-pointer flex items-center gap-1">
              แบบฟอร์ม
              <span className="text-xs">▾</span>
            </span>

            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#facc15] transition-all group-hover:w-full"></span>

            {open && (
              <div className="absolute top-8 left-0 bg-white border shadow-lg rounded-md w-48 py-2">
                <Link
                  to="/booking"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  แบบฟอร์มจองรถ
                </Link>
              </div>
            )}
          </div>

          {/* ติดต่อเรา */}
          <Link to="/contact" className="relative group">
            ติดต่อเรา
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#facc15] transition-all group-hover:w-full"></span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
