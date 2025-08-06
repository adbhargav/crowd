import { Link } from 'react-router-dom';

const Header = () => (
  <header className="bg-blue-600 text-white p-4 text-center shadow-md">
    <nav className="flex justify-center space-x-6">
      <Link to="/" className="hover:underline">Home</Link>
      <Link to="/vote" className="hover:underline">Vote</Link>
      <Link to="/about" className="hover:underline">About</Link>
      <Link to="/contact" className="hover:underline">Contact</Link>
      <Link to="/signin" className="hover:underline">Sign In</Link>
      <Link to="/signup" className="hover:underline">Sign Up</Link>
    </nav>
  </header>
);

export default Header;
