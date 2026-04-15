import { ChevronRight } from 'lucide-react';
import React from 'react'
import { FaInstagram } from 'react-icons/fa';
import { FiFacebook } from 'react-icons/fi';
import { RiTwitterXFill } from 'react-icons/ri';
import { useNavigate } from 'react-router';

const navLinks = [
  { id: '/home', label: 'Home' },
  { id: '/about', label: 'About Us' },
  { id: '/executives', label: 'Executives' },
  { id: '/gallery', label: 'Gallery' },
  { id: '/news', label: 'News & Events' },
  { id: '/contact', label: 'Contact' },
];

export default function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="bg-[#701619] text-white pt-16 pb-8 border-t-4 border-[#F27200]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="size-10 bg-white rounded-full flex items-center justify-center text-[#8A1C21] font-bold text-lg mr-3">
                IHS
              </div>
              <span className="text-xl font-bold">IHS2001<span className="text-[#F27200]">Alumni</span></span>
            </div>
            <p className="text-white text-sm mb-6 leading-relaxed">
              The official digital home for the Ikeja High School Class of 2001. Preserving memories, fostering connections, and giving back.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="size-8 rounded-full bg-[#8A1C21] flex items-center justify-center hover:bg-[#F27200] hover:text-white transition-colors">
                <FiFacebook size={16} />
              </a>
              <a href="#" className="size-8 rounded-full bg-[#8A1C21] flex items-center justify-center hover:bg-[#F27200] hover:text-white transition-colors">
                <RiTwitterXFill size={16} />
              </a>
              <a href="#" className="size-8 rounded-full bg-[#8A1C21] flex items-center justify-center hover:bg-[#F27200] hover:text-white transition-colors">
                <FaInstagram size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white border-b border-[#A32227] pb-2 inline-block">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navLinks.slice(1, 5).map(link => (
                <li key={link.id}>
                  <button 
                    onClick={() => navigate(link.id)} 
                    className="text-white hover:text-[#F27200] transition-colors text-sm flex items-center">
                    <ChevronRight className="size-3 mr-2" /> {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white border-b border-[#A32227] pb-2 inline-block">Information</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#" 
                  className="text-white hover:text-[#F27200] transition-colors text-sm flex items-center"
                >
                  <ChevronRight className="size-3 mr-2" /> Privacy Policy</a>
              </li>
              <li>
                <a href="#" 
                  className="text-white hover:text-[#F27200] transition-colors text-sm flex items-center"
                >
                  <ChevronRight className="size-3 mr-2" /> Terms of Service
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-white hover:text-[#F27200] transition-colors text-sm flex items-center"
                >
                  <ChevronRight className="size-3 mr-2" /> Constitution
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-white hover:text-[#F27200] transition-colors text-sm flex items-center"
                >
                  <ChevronRight className="size-3 mr-2" /> Dues & Payments
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white border-b border-[#A32227] pb-2 inline-block">
              Newsletter
            </h4>
            <p className="text-white text-sm mb-4">
              Subscribe to our newsletter to get the latest updates directly in your inbox.
            </p>
            <form 
              className="flex flex-col space-y-2" 
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Your Email Address"
                className="px-4 py-2 bg-[#8A1C21] border border-[#A32227] rounded-lg focus:outline-none focus:border-[#F27200] text-sm text-white placeholder-white"
                required
              />
              <button 
                type="submit" 
                className="px-4 py-2 bg-[#F27200] text-white font-bold rounded-lg hover:bg-[#FF881A] transition-colors text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-[#A32227] text-white pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} IHS2001Alumni. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
