import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 text-white py-20">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Content */}

          <div>

            <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
              India's #1 Exam E-Book Platform
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mt-6">
              Crack Your Dream Exam
              <br />
              With Premium E-Books
            </h1>

            <p className="mt-6 text-lg text-gray-200">
              Access high-quality study material for
              UPSC, SSC, Banking, Railway and other
              competitive examinations.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">

              <Link
                to="/books"
                className="bg-white text-indigo-700 px-8 py-4 rounded-xl font-semibold hover:scale-105 duration-300"
              >
                Explore Books
              </Link>

              <Link
                to="/library"
                className="border border-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-indigo-700 duration-300"
              >
                My Library
              </Link>

            </div>

            {/* Stats */}

            <div className="flex gap-8 mt-10">

              <div>
                <h3 className="text-3xl font-bold">
                  500+
                </h3>
                <p className="text-gray-200">
                  E-Books
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">
                  25K+
                </h3>
                <p className="text-gray-200">
                  Students
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">
                  4.9★
                </h3>
                <p className="text-gray-200">
                  Rating
                </p>
              </div>

            </div>

          </div>

          {/* Right Side */}

          <div>

            <img
              src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=1200"
              alt="Book Collection"
              className="rounded-3xl shadow-2xl h-48 sm:h-64 md:h-96 lg:h-[500px] w-full object-cover"
            />

          </div>

        </div>

      </div>

    </section>
  );
}