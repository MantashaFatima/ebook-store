import books from "../data/books";

export default function Testimonials() {
  const reviews = [
    {
      name: "Rahul",
      text: "Best platform for UPSC preparation.",
      bookId: 1,
    },
    {
      name: "Aman",
      text: "Amazing collection of books.",
      bookId: 4,
    },
    {
      name: "Priya",
      text: "Very easy reading experience.",
      bookId: 8,
    },
  ];

  return (
    <section className="py-20">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Student Success Stories
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {reviews.map((item) => {
            const book = books.find((b) => b.id === item.bookId) || books[0];

            return (
              <div
                key={item.name}
                className="bg-white shadow-lg p-8 rounded-2xl"
              >
                <img
                  src={book.image}
                  alt={book.title}
                  className="h-44 w-full object-cover rounded-2xl mb-5"
                />

                <p>{item.text}</p>

                <h3 className="font-bold mt-5">
                  {item.name}
                </h3>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}