import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className="bg-blue-900 text-white p-4 shadow relative z-40">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section (Left) */}
        <Link
          to="/"
          className="text-2xl font-bold flex items-center"
          onClick={handleLinkClick}
        >
          <img
            src="/logo.jpg"
            alt="CrowdVote Logo"
            className="h-12 w-12 md:h-16 md:w-16 rounded-full border-4 border-blue-600"
          />
          <span className="ml-3 md:ml-4 tracking-wide text-xl md:text-3xl">
            CrowdVote
          </span>
        </Link>
        {/* Hamburger Icon */}
        <button
          className="md:hidden block p-2 focus:outline-none"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? (
            // Close Icon
            <svg className="w-7 h-7 text-blue-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger Icon
            <svg className="w-7 h-7 text-blue-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
        {/* Navigation Links */}
        <nav
          className={`
            flex-col md:flex-row
            flex
            md:space-x-8
            space-y-4 md:space-y-0
            mt-4 md:mt-0
            items-center
            md:items-center
            justify-center md:justify-end
            font-semibold
            bg-blue-900
            md:bg-transparent
            md:static
            absolute md:relative top-full left-0 w-full md:w-auto
            ${menuOpen ? 'flex' : 'hidden md:flex'}
            shadow md:shadow-none
          `}
        >
          <Link to="/" className="hover:text-blue-300 w-full md:w-auto text-center" onClick={handleLinkClick}>Home</Link>
          <Link to="/vote" className="hover:text-blue-300 w-full md:w-auto text-center" onClick={handleLinkClick}>Vote</Link>
          <Link to="/about" className="hover:text-blue-300 w-full md:w-auto text-center" onClick={handleLinkClick}>About</Link>
          <Link to="/contact" className="hover:text-blue-300 w-full md:w-auto text-center" onClick={handleLinkClick}>Contact</Link>
          <Link to="/signin" className="hover:bg-blue-700 hover:text-white px-4 py-1 rounded-full border-2 border-blue-600 font-semibold w-full md:w-auto text-center" onClick={handleLinkClick}>Sign In</Link>
          <Link
            to="/signup"
            className="bg-blue-400 text-blue-900 px-4 py-1 rounded-full font-bold border-2 border-blue-400 hover:bg-blue-700 hover:text-white w-full md:w-auto text-center"
            onClick={handleLinkClick}
          >
            Sign Up
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
