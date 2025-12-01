import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white py-3 shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
        <Link to="/" className="font-bold text-2xl hover:text-blue-400 transition-colors">
          EventEase
        </Link>

        <div className="space-x-6">
          <Link to="/" className="hover:text-blue-400 transition-colors">Home</Link>
          <Link to="/providers" className="hover:text-blue-400 transition-colors">Providers</Link>
          <Link to="/register-provider" className="hover:text-green-400 transition-colors">Register</Link>
        </div>
      </div>
    </nav>
  );
}
