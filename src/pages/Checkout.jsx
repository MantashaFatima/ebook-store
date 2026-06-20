import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import books from "../data/books";

export default function Checkout() {
  const { id } = useParams();
  const [isPurchased, setIsPurchased] = useState(false);

  const book = books.find((b) => b.id === Number(id));
  const tax = book ? Math.round(book.price * 0.1) : 0;
  const discount = book && book.price > 500 ? 50 : 0;
  const total = book ? book.price + tax - discount : 0;

  useEffect(() => {
    if (!book || !isPurchased) return;

    const purchased = JSON.parse(
      localStorage.getItem("studybooks_purchased") || "[]"
    );

    if (!purchased.includes(book.id)) {
      localStorage.setItem(
        "studybooks_purchased",
        JSON.stringify([...purchased, book.id])
      );
    }
  }, [book, isPurchased]);

  if (!book) {
    return (
      <>
        <Navbar />
        <div className="max-w-5xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Book Not Found</h1>
          <p className="text-gray-600">
            Please return to the book listing and select a valid book to purchase.
          </p>
          <Link
            to="/books"
            className="mt-8 inline-block bg-indigo-600 text-white px-8 py-3 rounded-xl"
          >
            Back to Books
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="bg-slate-100 min-h-screen py-12">

        <div className="max-w-5xl mx-auto px-6">

          <h1 className="text-4xl font-bold mb-8">
            Checkout
          </h1>

          <div className="grid md:grid-cols-3 gap-8">

            {/* Left Section */}

            <div className="md:col-span-2 bg-white rounded-2xl shadow p-8">

              <h2 className="text-2xl font-bold mb-6">
                Billing Details
              </h2>

              <div className="space-y-4">

                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full border p-3 rounded-lg"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full border p-3 rounded-lg"
                />

                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full border p-3 rounded-lg"
                />

              </div>

              {/* Coupon */}

              <div className="mt-8">

                <h3 className="font-bold text-lg mb-3">
                  Apply Coupon
                </h3>

                <div className="flex gap-3">

                  <input
                    type="text"
                    placeholder="Enter Coupon Code"
                    className="flex-1 border p-3 rounded-lg"
                  />

                  <button className="bg-indigo-600 text-white px-6 rounded-lg">
                    Apply
                  </button>

                </div>

              </div>

              {/* Payment */}

              <div className="mt-8">

                <h3 className="font-bold text-lg mb-4">
                  Payment Method
                </h3>

                <div className="space-y-3">

                  <label className="flex items-center gap-3 border p-3 rounded-lg">
                    <input
                      type="radio"
                      name="payment"
                    />
                    UPI
                  </label>

                  <label className="flex items-center gap-3 border p-3 rounded-lg">
                    <input
                      type="radio"
                      name="payment"
                    />
                    Credit / Debit Card
                  </label>

                  <label className="flex items-center gap-3 border p-3 rounded-lg">
                    <input
                      type="radio"
                      name="payment"
                    />
                    Net Banking
                  </label>

                </div>

              </div>

            </div>

            {/* Order Summary */}

            <div className="bg-white rounded-2xl shadow p-8 h-fit">

              <h2 className="text-2xl font-bold mb-6">
                Order Summary
              </h2>

              <div className="space-y-4">

                <div className="flex justify-between">
                  <span>{book.title}</span>
                  <span>₹{book.price}</span>
                </div>

                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>₹{tax}</span>
                </div>

                <div className="flex justify-between">
                  <span>Discount</span>
                  <span>-₹{discount}</span>
                </div>

                <hr />

                <div className="flex justify-between text-xl font-bold">
                  <span>Total</span>
                  <span>₹{total}</span>
                </div>

              </div>

              <button
                onClick={() =>
                  setIsPurchased(true)
                }
                className="w-full bg-green-600 text-white py-3 rounded-xl mt-8 font-semibold hover:bg-green-700"
              >
                Complete Purchase
              </button>

            </div>

          </div>

        </div>

      </div>

      {/* Purchase Confirmation */}

      {isPurchased && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center px-4">

          <div className="bg-white rounded-2xl p-10 max-w-md w-full text-center">

            <div className="text-6xl mb-4">
              🎉
            </div>

            <h2 className="text-3xl font-bold mb-4">
              Purchase Successful!
            </h2>

            <p className="text-gray-600">
              Your e-book has been added to
              your library successfully.
            </p>

            <button
              onClick={() =>
                setIsPurchased(false)
              }
              className="mt-6 bg-indigo-600 text-white px-8 py-3 rounded-xl"
            >
              Continue
            </button>

          </div>

        </div>
      )}

      <Footer />
    </>
  );
}