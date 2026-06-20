import { useParams, Link } from "react-router-dom";
import books from "../data/books";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BookCard from "../components/BookCard";

export default function BookDetail() {
  const { id } = useParams();

  const book = books.find(
    (b) => b.id === Number(id)
  );

  if (!book) {
    return <h1>Book Not Found</h1>;
  }

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-2 gap-12">

          {/* Book Image */}
          <div>
            <img
              src={book.image}
              alt={book.title}
              className="rounded-2xl shadow-xl w-full"
            />

            {/* Preview Pages */}
            <div className="mt-8">
              <h3 className="text-2xl font-bold mb-4">
                Preview Pages
              </h3>

              <div className="grid grid-cols-3 gap-4">
                <img
                  src={book.image}
                  alt={`${book.title} preview 1`}
                  className="rounded-lg"
                />
                <img
                  src={book.image}
                  alt={`${book.title} preview 2`}
                  className="rounded-lg"
                />
                <img
                  src={book.image}
                  alt={`${book.title} preview 3`}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Book Details */}
          <div>

            <span className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full">
              Bestseller
            </span>

            <h1 className="text-5xl font-bold mt-5">
              {book.title}
            </h1>

            <p className="mt-4 text-lg text-gray-600">
              By {book.author}
            </p>

            <div className="flex items-center gap-2 mt-4">
              <span className="text-yellow-500 text-xl">
                ⭐⭐⭐⭐⭐
              </span>

              <span className="font-semibold">
                4.8 (2,450 Reviews)
              </span>
            </div>

            <p className="mt-6 text-gray-600 leading-8">
              This comprehensive e-book is specially
              designed for students preparing for
              competitive examinations. It covers
              theory, practice questions, mock tests,
              previous year papers and exam strategies.
            </p>

            <div className="mt-8">
              <span className="text-4xl font-bold text-indigo-600">
                ₹{book.price}
              </span>
            </div>

            <div className="flex gap-4 mt-8">

              <Link
                to={`/checkout/${book.id}`}
                className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-indigo-700"
              >
                Buy Now
              </Link>

              <button className="border border-indigo-600 text-indigo-600 px-8 py-4 rounded-xl font-semibold">
                Add To Wishlist
              </button>

            </div>

            {/* Ratings Section */}

            <div className="mt-12">

              <h3 className="text-2xl font-bold mb-5">
                Ratings & Reviews
              </h3>

              <div className="mb-8">
                <img
                  src={book.image}
                  alt={`${book.title} cover`}
                  className="rounded-3xl shadow-xl w-full md:w-2/3"
                />
              </div>

              <div className="bg-slate-100 p-6 rounded-2xl">

                <div className="text-yellow-500 text-2xl">
                  ⭐⭐⭐⭐⭐
                </div>

                <p className="font-bold mt-2">
                  Excellent Content Quality
                </p>

                <p className="text-gray-600 mt-3">
                  Students love this book because it
                  provides detailed explanations,
                  mock tests and smart exam tips.
                </p>

              </div>

              <div className="bg-slate-100 p-6 rounded-2xl mt-4">

                <p className="font-bold">
                  Rahul Sharma
                </p>

                <p className="text-gray-600 mt-2">
                  Helped me clear my prelims exam.
                  Highly recommended.
                </p>

              </div>

              <div className="bg-slate-100 p-6 rounded-2xl mt-4">

                <p className="font-bold">
                  Priya Verma
                </p>

                <p className="text-gray-600 mt-2">
                  Very well structured and easy to
                  understand.
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Related Books */}

        <div className="mt-24">

          <h2 className="text-4xl font-bold mb-10">
            Related Books
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            {books.map((item) => (
              <BookCard
                key={item.id}
                book={item}
              />
            ))}

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}