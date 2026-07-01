import ReviewCard from "./ReviewCard";
import { ronnie, carol, lula } from "../../assets/images";

const reviews = [
  {
    id: 1,
    name: "Ronnie Hamill",
    image: ronnie,
    review:
      "I can't express how thrilled I am with my new natural plants. They bring such a fresh and vibrant energy to my home.",
  },
  {
    id: 2,
    name: "Carol James",
    image: carol,
    review:
      "Beautiful quality plants and excellent packaging. Every plant arrived healthy and looks stunning in my living room.",
  },
  {
    id: 3,
    name: "Lula Watson",
    image: lula,
    review:
      "FloraVision exceeded my expectations. The plants instantly transformed my workspace into a peaceful environment.",
  },
];

function Reviews() {
  return (
    <section className="mx-auto mt-32 max-w-7xl px-8">

      <div className="text-center">

        <p className="text-sm uppercase tracking-[6px] text-green-400">
          Testimonials
        </p>

        <h2 className="mt-4 text-5xl font-semibold text-white">
          What Our Customers Say
        </h2>

        <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-300">
          Thousands of customers trust FloraVision to bring life,
          freshness, and happiness into their homes.
        </p>

      </div>

      <div className="mt-20 grid grid-cols-3 gap-8">

        {reviews.map((review) => (
          <ReviewCard
            key={review.id}
            image={review.image}
            name={review.name}
            review={review.review}
          />
        ))}

      </div>

    </section>
  );
}

export default Reviews;