import { Link } from "react-router-dom";
import { FaShoppingCart, FaTrash, FaGift, FaMinus, FaPlus } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, cartCount } = useCart();

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  const discount = subtotal > 1499 ? 199 : subtotal > 999 ? 99 : 0;
  const tax = Math.round(subtotal * 0.08);
  const total = subtotal + tax - discount;
  const firstItemId = cart[0]?.id;

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-cream-100">
        {/* Header */}
        <div className="bg-forest-500 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-forest-200 mb-3">
                  Your cart
                </p>
                <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold">
                  Review your{" "}
                  <span className="italic text-forest-200">order</span>
                </h1>
                <p className="mt-4 text-forest-100/70 max-w-xl">
                  {cart.length === 0
                    ? "Add books to your cart and proceed to checkout."
                    : `${cartCount} item${cartCount !== 1 ? "s" : ""} ready for checkout.`}
                </p>
              </div>

              <div className="premium-card !bg-white/10 !border-white/20 p-6 text-center min-w-[140px]">
                <p className="text-sm uppercase tracking-[0.3em] text-forest-200">
                  Items
                </p>
                <p className="mt-2 text-4xl font-bold text-white">{cartCount}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-12">
          {cart.length === 0 ? (
            <div className="premium-card p-12 md:p-16 text-center max-w-2xl mx-auto">
              <div className="w-24 h-24 rounded-2xl bg-forest-50 text-forest-500 flex items-center justify-center mx-auto mb-6">
                <FaShoppingCart size={36} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                Your cart is empty
              </h2>
              <p className="text-slate-500 mt-3 leading-relaxed max-w-md mx-auto">
                Add study guides, exam packages and premium resources from the
                bookstore to begin checkout.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                <Link to="/books" className="btn-primary">
                  Browse E-Books
                </Link>
                <Link to="/" className="btn-secondary">
                  Back to Home
                </Link>
              </div>
            </div>
          ) : (
            <div className="grid gap-8 lg:grid-cols-[1.75fr_1fr]">
              {/* Cart items */}
              <div className="premium-card p-6 md:p-8">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-forest-400 font-semibold">
                      Cart items
                    </p>
                    <h2 className="text-2xl font-bold text-slate-900 mt-2">
                      {cart.length} product{cart.length !== 1 ? "s" : ""}
                    </h2>
                  </div>
                  <span className="badge-green">{cartCount} total qty</span>
                </div>

                <div className="space-y-5">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="grid gap-4 rounded-2xl border border-slate-100 bg-cream-50 p-5 sm:grid-cols-[110px_1fr] hover:border-forest-200 transition"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-28 sm:h-32 w-full rounded-2xl object-cover shadow-sm"
                      />

                      <div className="flex flex-col justify-between gap-4">
                        <div>
                          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                            <div>
                              <h3 className="text-lg font-bold text-slate-900">
                                {item.title}
                              </h3>
                              <p className="text-slate-400 text-sm mt-1">
                                by {item.author}
                              </p>
                            </div>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-red-500 transition shrink-0"
                            >
                              <FaTrash size={13} /> Remove
                            </button>
                          </div>

                          <div className="flex flex-wrap items-center gap-2 mt-3">
                            <span className="badge-green">{item.category}</span>
                            <span className="text-xs text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-100">
                              {item.subject}
                            </span>
                          </div>
                        </div>

                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                          <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5">
                            <span className="text-sm text-slate-500 mr-1">Qty</span>
                            <button
                              onClick={() =>
                                updateQuantity(
                                  item.id,
                                  Math.max(1, (item.quantity || 1) - 1)
                                )
                              }
                              className="w-8 h-8 rounded-full flex items-center justify-center text-slate-500 hover:bg-forest-50 hover:text-forest-500 transition"
                              aria-label="Decrease quantity"
                            >
                              <FaMinus size={10} />
                            </button>
                            <span className="w-8 text-center text-sm font-semibold text-slate-800">
                              {item.quantity || 1}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(item.id, (item.quantity || 1) + 1)
                              }
                              className="w-8 h-8 rounded-full flex items-center justify-center text-slate-500 hover:bg-forest-50 hover:text-forest-500 transition"
                              aria-label="Increase quantity"
                            >
                              <FaPlus size={10} />
                            </button>
                          </div>

                          <div className="text-right">
                            <p className="text-sm text-slate-400">Item total</p>
                            <p className="text-xl font-bold text-slate-900">
                              ₹{(item.price * (item.quantity || 1)).toFixed(0)}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <aside className="space-y-5">
                <div className="premium-card p-6 md:p-8 lg:sticky lg:top-24">
                  <p className="text-sm uppercase tracking-[0.3em] text-forest-400 font-semibold">
                    Order summary
                  </p>
                  <h2 className="text-2xl font-bold text-slate-900 mt-2">
                    Final checkout
                  </h2>

                  <div className="mt-6 space-y-3 text-slate-600">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span className="font-medium text-slate-800">
                        ₹{subtotal.toFixed(0)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Discount</span>
                      <span className="font-medium text-forest-500">
                        -₹{discount.toFixed(0)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Estimated GST</span>
                      <span className="font-medium text-slate-800">
                        ₹{tax.toFixed(0)}
                      </span>
                    </div>
                    <div className="border-t border-slate-100 pt-4 flex justify-between text-lg font-bold text-slate-900">
                      <span>Total</span>
                      <span>₹{total.toFixed(0)}</span>
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">
                    <Link
                      to={firstItemId ? `/checkout/${firstItemId}` : "/books"}
                      className="btn-primary w-full !py-3.5"
                    >
                      Checkout Now
                    </Link>
                    <Link
                      to="/books"
                      className="btn-ghost w-full !py-3.5"
                    >
                      Continue Shopping
                    </Link>
                  </div>
                </div>

                <div className="premium-card p-6 bg-forest-50 !border-forest-100">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm uppercase tracking-[0.3em] text-forest-400 font-semibold">
                        Bonus benefit
                      </p>
                      <h3 className="mt-2 text-lg font-bold text-slate-900">
                        Unlock premium bundle
                      </h3>
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-forest-500 text-white flex items-center justify-center shrink-0">
                      <FaGift size={18} />
                    </div>
                  </div>
                  <p className="mt-4 text-slate-600 text-sm leading-relaxed">
                    Add 2 more books and unlock premium exam prep notes, mock
                    tests, and audio summaries in your library.
                  </p>
                </div>
              </aside>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}
