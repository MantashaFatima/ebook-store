import { Link } from "react-router-dom";
import { FaBookOpen } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-bold text-indigo-600"
        >
          <FaBookOpen />
          StudyBooks
        </Link>

        <div className="flex gap-6">
          <Link to="/" className="hover:text-indigo-600">
            Home
          </Link>

          <Link to="/books" className="hover:text-indigo-600">
            Books
          </Link>

          <Link to="/library" className="hover:text-indigo-600">
            Library
          </Link>
        </div>
      </div>
    </nav>
  );
}