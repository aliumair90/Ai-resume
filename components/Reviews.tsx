import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Updated reviews data with AI Resume Builder company feedback
const reviews = [
  {
    id: 1,
    name: "John Peterson",
    review:
      "The AI Resume Builder has completely changed the way I create my resumes! The templates are professional, and the AI suggestions make it so easy to stand out.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/10.jpg",
  },
  {
    id: 2,
    name: "Emma Roberts",
    review:
      "I can't believe how simple and efficient the AI Resume Builder is! It helped me land interviews in no time with its tailored resume suggestions.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    name: "Michael Lee",
    review:
      "Thanks to the AI Resume Builder, I finally have a resume that highlights my skills effectively. The user interface is so intuitive and user-friendly.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 4,
    name: "Sophia Turner",
    review:
      "The AI Resume Builder provided fantastic templates that helped me present my experience clearly. I received great feedback from recruiters!",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
  },
];

const ReviewCard = ({ name, review, rating, avatar }) => {
  return (
    <div className="min-w-[200px] max-w-xs h-[300px] p-4 bg-green-50 rounded-lg shadow-lg flex flex-col mx-auto sm:m-4 mt-24 mb-28">
      <div className="flex items-center">
        <img
          src={avatar}
          alt={`${name} avatar`}
          className="w-12 h-12 rounded-full mr-4"
        />
        <h3 className="text-lg font-semibold">{name}</h3>
      </div>
      <div className="mt-4">
        <span className="text-yellow-400">{"★".repeat(rating)}</span>
        <span className="text-gray-300">{"★".repeat(5 - rating)}</span>
      </div>
      <p className="mt-2 text-sm text-gray-600">{review}</p>
    </div>
  );
};

const Reviews = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1536, // 2xl breakpoint
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1280, // xl breakpoint
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // lg breakpoint
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // md breakpoint
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640, // sm breakpoint
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 540, // xs breakpoint
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-white flex items-center justify-center px-4 py-8 overflow-hidden">
      <div className="w-full max-w-screen-xl mx-auto">
        <Slider {...settings}>
          {reviews.map((review) => (
            <ReviewCard
              key={review.id}
              name={review.name}
              review={review.review}
              rating={review.rating}
              avatar={review.avatar}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Reviews;
