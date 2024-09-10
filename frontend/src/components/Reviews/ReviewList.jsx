import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Harsh",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    company: "Walmart",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    name: "Abhijeet",
    avatar: "https://randomuser.me/api/portraits/men/33.jpg",
    company: "Amazon",
    review: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 3,
    name: "Pranav Malpani",
    avatar: "https://randomuser.me/api/portraits/men/34.jpg",
    company: "Google",
    review: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

const ReviewList = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    let interval;
    if (isAutoPlay) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
      }, 2000); // Change every 5 seconds
    }
    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
    setIsAutoPlay(false);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    setIsAutoPlay(false);
  };

  return (
    <div className="py-7 bg-orange">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black text-center mb-4">
          They Trusted Us
        </h2>
        <p className="text-black text-center text-lg mb-12">
          We're proud to have earned the trust of our valued customers.
        </p>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {reviews.map((review) => (
                <div key={review.id} className="w-full flex-shrink-0">
                  <ReviewCard {...review} />
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <ChevronLeft className="w-6 h-6 text-blue-500" />
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <ChevronRight className="w-6 h-6 text-blue-500" />
          </button>
        </div>
      </div>
    </div>
  );
};

const ReviewCard = ({ name, avatar, company, review }) => {
  return (
    <div className="bg-white shadow-xl rounded-lg p-4 max-w-2xl mx-auto">
      <div className="flex items-center space-x-4 mb-6">
        <img
          className="w-16 h-16 rounded-full border-4 border-blue-300 shadow-md"
          src={avatar}
          alt={`${name}'s Avatar`}
        />
        <div>
          <h4 className="text-xl font-semibold text-gray-900">{name}</h4>
          <p className="text-blue-600 font-medium">{company}</p>
        </div>
      </div>
      <p className="text-gray-700 text-lg font-medium italic leading-relaxed">
        "{review}"
      </p>
    </div>
  );
};

export default ReviewList;