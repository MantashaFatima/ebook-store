# StudyBooks - E-Book Marketplace

A responsive E-Book Marketplace web application built using React.js and Tailwind CSS.

The application allows users to browse e-books, search books, view detailed information, purchase books, and access their personal library.

---

## Features

### Home Page
- Hero Banner
- Search Books
- Popular Categories
- Featured E-Books
- Best Selling Books
- Call To Action Section

### E-Book Listing Page
- Search Books
- Filter By Exam Category, Price, Language, Subject
- Sort By Price
- Grid / List View Toggle
- Pagination
- Responsive Layout

### Book Detail Page
- Book Information
- Author Details
- Book Preview
- Ratings & Reviews
- Related Books
- Buy Now Option

### Checkout Page
- Billing Information Form
- Coupon Code Section
- Payment Method Selection
- Order Summary
- Purchase Confirmation

### My Library
- Purchased Books
- Search Library
- Continue Reading
- Download Books
- Persisted purchase library using browser storage

---

## Tech Stack

- React.js
- React Router DOM
- Tailwind CSS
- JavaScript (ES6+)

---

## Project Structure

```bash
src/
│
├── assets/
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── BookCard.jsx
│   ├── FilterSidebar.jsx
│   └── CategoryCard.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── BookListing.jsx
│   ├── BookDetail.jsx
│   ├── Checkout.jsx
│   └── Library.jsx
│
├── data/
│   └── books.js
│
├── App.js
└── index.js
```

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Move into project directory:

```bash
cd studybooks
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm start
```

Application will run at:

```bash
http://localhost:3000
```

---

## Build For Production

```bash
npm run build
```

The optimized production build will be generated inside the build folder.

---

## Responsive Design

The application is fully responsive and works across:

- Desktop
- Tablet
- Mobile Devices

---

## Future Enhancements

- Backend Integration
- User Authentication
- Wishlist Functionality
- Payment Gateway Integration
- Real E-Book Reader
- API Based Search & Filtering

---

## Author

Mantasha Fatima

Software Developer

React.js | Next.js | React Native | JavaScript

---

## License

This project is created for UI Engineering Assignment evaluation purposes.