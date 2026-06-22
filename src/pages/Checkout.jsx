import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import books from "../data/books";
import { FaLock, FaGift, FaCheckCircle } from "react-icons/fa";

export default function Checkout() {
  const { id } = useParams();
  const [isPurchased, setIsPurchased] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [couponMessage, setCouponMessage] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);

  const book = books.find((b) => b.id === Number(id));
  const tax = book ? Math.round(book.price * 0.08) : 0;
  const baseDiscount = book && book.price > 500 ? 70 : 0;
  const couponDiscount = book && couponApplied ? Math.round(book.price * 0.12) : 0;
  const total = book ? book.price + tax - baseDiscount - couponDiscount : 0;

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

  const applyCoupon = () => {
    const code = couponCode.trim().toUpperCase();
    if (code === "STUDY20" || code === "LEARN10") {
      setCouponApplied(true);
      setCouponMessage("Coupon applied! Enjoy extra savings on your purchase.");
    } else {
      setCouponApplied(false);
      setCouponMessage("Invalid coupon code. Try STUDY20 or LEARN10.");
    }
  };

  if (!book) {
    return (
      <>
        <Navbar />

        <div className="min-h-screen bg-cream-100 text-slate-900 py-24 px-6">
          <div className="mx-auto max-w-3xl rounded-[2rem] border border-slate-200/80 bg-white p-12 text-center shadow-premium">
            <p className="text-sm uppercase tracking-[0.35em] text-forest-500/80">
              Checkout error
            </p>
            <h1 className="mt-6 text-4xl font-bold text-slate-900">Book Not Found</h1>
            <p className="mt-4 text-slate-600 leading-8">
              Please return to the book listing and choose a valid book to continue.
            </p>
            <Link
              to="/books"
              className="mt-8 inline-flex btn-primary"
            >
              Back to Books
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="bg-cream-100 min-h-screen text-slate-900">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:py-20">
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-premium">
            <div className="bg-forest-50 px-8 py-10 sm:px-12 sm:py-14">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-3xl">
                  <p className="text-sm uppercase tracking-[0.35em] text-forest-500/80">
                    Secure checkout
                  </p>
                  <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                    Fast, premium checkout for every student.
                  </h1>
                  <p className="mt-4 max-w-2xl text-slate-600 text-lg leading-8">
                    Review your order, apply discounts, and complete payment in a sleek ecommerce flow.
                  </p>
                </div>
                <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 text-center shadow-card">
                  <p className="text-sm uppercase tracking-[0.35em] text-slate-500">
                    Total payable
                  </p>
                  <p className="mt-4 text-5xl font-bold text-forest-500">₹{total.toFixed(0)}</p>
                  <p className="mt-2 text-slate-500">Includes taxes and instant savings.</p>
                </div>
              </div>
            </div>

            <div className="grid gap-8 px-6 pb-10 pt-8 sm:px-10 lg:grid-cols-[1.75fr_1fr]">
              <section className="space-y-8">
                <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-card">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <p className="text-sm uppercase tracking-[0.35em] text-slate-500">
                        Billing details
                      </p>
                      <h2 className="mt-4 text-3xl font-bold text-slate-900">
                        Enter your payment information
                      </h2>
                    </div>
                    <div className="rounded-3xl bg-forest-500/10 px-4 py-3 text-forest-500">
                      <FaLock size={20} />
                    </div>
                  </div>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    <input
                      type="text"
                      placeholder="Full name"
                      className="input-premium"
                    />
                    <input
                      type="email"
                      placeholder="Email address"
                      className="input-premium"
                    />
                    <input
                      type="tel"
                      placeholder="Phone number"
                      className="input-premium"
                    />
                    <input
                      type="text"
                      placeholder="Shipping address"
                      className="input-premium"
                    />
                  </div>

                  <div className="mt-8 rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="text-sm uppercase tracking-[0.35em] text-forest-500">
                          Coupon code
                        </p>
                        <p className="mt-2 text-slate-600 text-sm">
                          Use STUDY20 or LEARN10 for extra savings.
                        </p>
                      </div>
                      <div className="flex flex-1 flex-col gap-3 sm:flex-row">
                        <input
                          type="text"
                          value={couponCode}
                          onChange={(e) => setCouponCode(e.target.value)}
                          placeholder="Enter coupon"
                          className="input-premium"
                        />
                        <button
                          onClick={applyCoupon}
                          className="btn-primary !rounded-3xl !px-6 !py-3 !text-sm"
                        >
                          Apply
                        </button>
                      </div>
                    </div>
                    {couponMessage && (
                      <p className="mt-3 text-sm text-forest-600">{couponMessage}</p>
                    )}
                  </div>

                  <div className="mt-8">
                    <p className="text-sm uppercase tracking-[0.35em] text-slate-400">
                      Payment method
                    </p>
                    <div className="mt-4 grid gap-3">
                      <label className="flex cursor-pointer items-center gap-4 rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4 text-slate-700 transition hover:border-forest-500">
                        <input type="radio" name="payment" className="h-4 w-4 accent-forest-500" />
                        <span className="font-medium">Credit / Debit Card</span>
                      </label>
                      <label className="flex cursor-pointer items-center gap-4 rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4 text-slate-700 transition hover:border-forest-500">
                        <input type="radio" name="payment" className="h-4 w-4 accent-forest-500" />
                        <span className="font-medium">UPI</span>
                      </label>
                      <label className="flex cursor-pointer items-center gap-4 rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4 text-slate-700 transition hover:border-forest-500">
                        <input type="radio" name="payment" className="h-4 w-4 accent-forest-500" />
                        <span className="font-medium">Net Banking</span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[2rem] border border-slate-200 bg-white p-6 text-center">
                    <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Fast access</p>
                    <p className="mt-3 text-3xl font-bold text-slate-900">Instant</p>
                    <p className="mt-2 text-slate-600 text-sm">Your e-book is ready as soon as payment completes.</p>
                  </div>
                  <div className="rounded-[2rem] border border-slate-200 bg-white p-6 text-center">
                    <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Support</p>
                    <p className="mt-3 text-3xl font-bold text-slate-900">24/7</p>
                    <p className="mt-2 text-slate-600 text-sm">Study help and technical support available anytime.</p>
                  </div>
                </div>
              </section>

              <aside className="space-y-6">
                <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-card">
                  <div className="flex items-center gap-4">
                    <img
                      src={book.image}
                      alt={book.title}
                      className="h-24 w-24 rounded-3xl object-cover shadow-lg"
                    />
                    <div>
                      <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Order item</p>
                      <h2 className="mt-2 text-2xl font-bold text-slate-900">{book.title}</h2>
                      <p className="mt-1 text-slate-600">by {book.author}</p>
                    </div>
                  </div>

                  <div className="mt-8 space-y-4 text-slate-600">
                    <div className="flex justify-between">
                      <span>Book price</span>
                      <span className="text-slate-900">₹{book.price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Base discount</span>
                      <span className="text-forest-500">-₹{baseDiscount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Estimated GST</span>
                      <span className="text-slate-900">₹{tax}</span>
                    </div>
                    {couponApplied && (
                      <div className="flex justify-between text-forest-500">
                        <span>Coupon savings</span>
                        <span>-₹{couponDiscount}</span>
                      </div>
                    )}
                    <div className="border-t border-slate-200 pt-4 text-slate-900">
                      <div className="flex justify-between text-lg font-semibold">
                        <span>Total</span>
                        <span>₹{total.toFixed(0)}</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => setIsPurchased(true)}
                    className="mt-8 btn-primary text-slate-950"
                  >
                    Complete Purchase
                  </button>

                  <Link
                    to="/books"
                    className="mt-3 inline-flex w-full items-center justify-center rounded-full border border-forest-500 bg-white px-6 py-4 text-sm font-semibold text-forest-500 transition hover:bg-forest-500 hover:text-white"
                  >
                    Continue shopping
                  </Link>
                </div>

                <div className="rounded-[2rem] border border-forest-200 bg-forest-50 p-6 text-slate-900">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm uppercase tracking-[0.35em] text-forest-500/80">Special offer</p>
                      <h3 className="mt-3 text-2xl font-bold">Premium exam kit</h3>
                    </div>
                    <div className="rounded-3xl bg-forest-500/10 px-4 py-3 text-forest-600">
                      <FaGift />
                    </div>
                  </div>
                  <p className="mt-4 text-slate-600 leading-7">
                    Add one more book later to unlock the premium practice pack with mock tests, solved papers, and exam-ready summaries.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>

      {isPurchased && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-8">
          <div className="w-full max-w-xl rounded-[2rem] bg-white p-10 text-center shadow-premium">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-forest-500/10 text-forest-500">
              <FaCheckCircle size={40} />
            </div>
            <h2 className="mt-6 text-4xl font-bold text-slate-900">Purchase Complete</h2>
            <p className="mt-4 text-slate-600 leading-8">
              Your e-book is now ready in your library. Enjoy instant access and premium study support.
            </p>
            <button
              onClick={() => setIsPurchased(false)}
              className="mt-8 btn-primary text-slate-950"
            >
              Continue Exploring
            </button>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}