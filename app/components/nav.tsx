import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router';
import { Button } from './button';
import { Mail, Menu, Phone, X } from "lucide-react";
import { FiFacebook } from "react-icons/fi";
import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";

const navLinks = [
  { id: '/', label: 'Home' },
  { id: "/about", label: 'About Us' },
  { id: '/executives', label: 'Executives' },
  { id: '/gallery', label: 'Gallery' },
  { id: '/news', label: 'News & Events' },
  { id: '/contact', label: 'Contact' },
];

export default function Nav() {
  const navigate = useNavigate();
  const location = useLocation();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <div className="bg-[#701619] text-gray-300 py-2 text-sm hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex space-x-6">
            <span className="flex items-center">
              <Mail className="size-4 mr-2" /> admin@ihs2001alumni.com
            </span>
            <span className="flex items-center">
              <Phone className="size-4 mr-2" /> +234 800 000 0000
            </span>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-[#F27200] transition-colors">
              <FiFacebook size={16} />
            </a>
            <a href="#" className="hover:text-[#F27200] transition-colors">
              <RiTwitterXFill size={16} />
            </a>
            <a href="#" className="hover:text-[#F27200] transition-colors">
              <FaInstagram size={16} />
            </a>
          </div>
        </div>
      </div>

      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div
              className="flex items-center cursor-pointer"
              onClick={() => navigate("/")}
            >
              <div className="size-12 bg-[#8a1c21] rounded-full flex items-center justify-center text-white font-bold text-xl mr-3 shadow-inner">
                IHS
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-[#701619] leading-tight">IHS2001 {" "}
                  <span className="text-[#F27200]">Alumni</span>
                </span>
                <span className="text-xs text-gray-500 font-medium uppercase tracking-widest">Class of 2001</span>
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-4">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.id || (location.pathname.startsWith(link.id) && link.id !== '/');
                return (
                  <button
                    key={link.id}
                    onClick={() => navigate(link.id)}
                    className={`px-3 py-2 rounded-md text-sm lg:text-base font-semibold transition-colors cursor-pointer ${isActive
                      ? 'text-[#8A1C21] border-b-2 border-[#F27200]'
                      : 'text-gray-600 hover:text-[#8A1C21] hover:bg-gray-50'
                      }`}
                  >
                    {link.label}
                  </button>
                );
              })}
              <div className="pl-4">
                <Button
                  onClick={() => navigate("contact")} variant="primary"
                  className="py-2 px-4 text-sm "
                >
                  Join Directory
                </Button>
              </div>
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-600 hover:text-blue-900 focus:outline-none p-2"
              >
                {isMobileMenuOpen ? <X className="size-7" /> : <Menu className="size-7" />}
              </button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.id || (location.pathname.startsWith(link.id) && link.id !== '/');
                return (
                  <button
                    key={link.id}
                    onClick={() => navigate(link.id)}
                    className={`block w-full text-left px-4 py-3 text-base font-medium rounded-md ${isActive
                      ? 'bg-[#fef5c6] text-[#8a1c21]'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-[#8a1c21]'
                      }`}
                  >
                    {link.label}
                  </button>
                );
              })}
              <div className="pt-4 px-4">
                <Button
                  onClick={() => navigate('contact')} variant="primary"
                  className="w-full"
                >
                  Join Directory
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}
