import { FaStar } from "react-icons/fa";

function ReviewCard({ image, name, review }) {
  return (
    <div className="rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-green-400/30">

      <div className="flex items-center gap-4">

        <img
          src={image}
          alt={name}
          className="h-16 w-16 rounded-full object-cover"
        />

        <div>

          <h3 className="text-2xl font-semibold text-white">
            {name}
          </h3>

          <div className="mt-2 flex gap-1 text-yellow-400">
            {[...Array(5)].map((_, index) => (
              <FaStar
                key={index}
                className="text-sm"
              />
            ))}
          </div>

        </div>

      </div>

      <p className="mt-6 text-[17px] leading-8 text-gray-300">
        {review}
      </p>

    </div>
  );
}

export default ReviewCard;