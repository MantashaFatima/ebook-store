import { Link } from "react-router-dom";

export default function BookCard({ book }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 duration-300">

      <img
        src={book.image}
        alt={book.title}
        className="h-72 w-full object-cover"
      />

      <div className="p-4">

        <h3 className="font-bold text-lg">
          {book.title}
        </h3>

        <p className="text-gray-500">
          {book.author}
        </p>

        <div className="flex justify-between mt-4">

          <span className="font-bold text-indigo-600">
            ₹{book.price}
          </span>

          <Link
            to={`/book/${book.id}`}
            className="bg-indigo-600 text-white px-4 py-2 rounded"
          >
            View
          </Link>

        </div>
      </div>
    </div>
  );
}