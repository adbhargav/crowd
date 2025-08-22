import React from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaGithub
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0a1931] text-[#e7eaf6] py-10 mt-12 border-t border-[#185adb] shadow-inner">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Column 1: About */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-[#21d4fd]">About</h3>
          <ul className="space-y-2 text-sm text-[#b2bdfb]">
            <li>
              <Link to="/about" className="hover:text-[#21d4fd] transition-colors duration-150">Our Mission</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[#21d4fd] transition-colors duration-150">Contact Us</Link>
            </li>
            <li>
              <Link to="/vote" className="hover:text-[#21d4fd] transition-colors duration-150">How Voting Works</Link>
            </li>
          </ul>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-[#21d4fd]">Quick Links</h3>
          <ul className="space-y-2 text-sm text-[#b2bdfb]">
            <li>
              <Link to="/" className="hover:text-[#21d4fd] transition-colors duration-150">Home</Link>
            </li>
            <li>
              <Link to="/signin" className="hover:text-[#21d4fd] transition-colors duration-150">Sign In</Link>
            </li>
            <li>
              <Link to="/signup" className="hover:text-[#21d4fd] transition-colors duration-150">Sign Up</Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-[#21d4fd]">Follow Us</h3>
          <ul className="space-y-2 text-sm text-[#b2bdfb]">
            <li className="flex items-center gap-2 hover:text-[#e1306c] transition-colors duration-150">
              <FaInstagram />
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                Instagram
              </a>
            </li>
            <li className="flex items-center gap-2 hover:text-[#1da1f2] transition-colors duration-150">
              <FaTwitter />
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                Twitter
              </a>
            </li>
            <li className="flex items-center gap-2 hover:text-[#0a66c2] transition-colors duration-150">
              <FaLinkedin />
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                LinkedIn
              </a>
            </li>
            <li className="flex items-center gap-2 hover:text-[#333] transition-colors duration-150">
              <FaGithub />
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                GitHub
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Support */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-[#21d4fd]">Support</h3>
          <ul className="space-y-2 text-sm text-[#b2bdfb]">
            <li>
              <Link to="/contact" className="hover:text-[#21d4fd] transition-colors duration-150">Help Center</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-[#21d4fd] transition-colors duration-150">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-[#21d4fd] transition-colors duration-150">Terms of Use</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-xs text-[#b2bdfb] mt-10 tracking-wide">
        © {new Date().getFullYear()} <span className="text-[#21d4fd] font-bold">CrowdVote</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
