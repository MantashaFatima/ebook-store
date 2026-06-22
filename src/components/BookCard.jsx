import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

export default function BookCard({ book }) {
return ( <div className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">


  {/* Image */}
  <div className="relative overflow-hidden">
    <img
      src={book.image}
      alt={book.title}
      className="h-80 w-full object-cover group-hover:scale-105 transition duration-500"
    />

    <span className="absolute top-4 left-4 bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
      Bestseller
    </span>
  </div>

  {/* Content */}
  <div className="p-5">

    <div className="flex items-center gap-1 mb-3">
      <FaStar className="text-yellow-400" />
      <span className="text-sm text-gray-600">
        4.8 Rating
      </span>
    </div>

    <h3 className="font-bold text-xl text-slate-900 line-clamp-2">
      {book.title}
    </h3>

    <p className="text-gray-500 mt-2">
      By {book.author}
    </p>

    <div className="flex items-center justify-between mt-6">

      <span className="text-2xl font-bold text-slate-900">
        ₹{book.price}
      </span>

      <Link
        to={`/book/${book.id}`}
        className="bg-slate-900 text-white px-5 py-2.5 rounded-full font-medium hover:bg-slate-800 transition"
      >
        View Details
      </Link>

    </div>

  </div>
</div>


);
}
