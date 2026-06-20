import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import BookListing from "../pages/BookListing";
import BookDetail from "../pages/BookDetail";
import Checkout from "../pages/Checkout";
import Library from "../pages/Library";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookListing />} />
        <Route path="/book/:id" element={<BookDetail />} />
        <Route path="/checkout/:id" element={<Checkout />} />
        <Route path="/library" element={<Library />} />
      </Routes>
    </BrowserRouter>
  );
}