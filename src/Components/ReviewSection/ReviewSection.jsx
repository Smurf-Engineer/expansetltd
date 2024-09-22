import React from "react"
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import "./ReviewSection.css";


const reviews = [
  {
    id: 1,
    user: "Jess Hopkins",
    avatarColor: "red",
    rating: 4.5,
    date: "Feb 13, 2024",
    review: "Gorgeous design! Such an elegant clothing wow. A pleasure to use!",
  },
  {
    id: 2,
    user: "Alice Banks",
    avatarColor: "yellow",
    rating: 5,
    date: "May 16, 2024",
    review:
      "The cloth has a clean design and it is very comfortable to wear as well. Soft material makes it a pleasure to wear. A fantastic product indeed!",
  },
  {
    id: 3,
    user: "Marcus Stevens",
    avatarColor: "blue",
    rating: 4,
    date: "Jan 4, 2024",
    review:
      "The quality is great, but I wish it came in more color options. Overall, a solid purchase!",
  },
  {
    id: 4,
    user: "Sarah Jones",
    avatarColor: "green",
    rating: 5,
    date: "Jul 28, 2023",
    review:
      "Absolutely amazing! The fabric is super soft, and it feels luxurious. I’ll be ordering more.",
  },
  {
    id: 5,
    user: "Tommy Lee",
    avatarColor: "purple",
    rating: 3.5,
    date: "Mar 22, 2023",
    review:
      "Nice product, but the size runs a bit small. I recommend going a size up.",
  },
  {
    id: 6,
    user: "Lisa Wright",
    avatarColor: "orange",
    rating: 4.8,
    date: "Sep 10, 2024",
    review:
      "One of the best purchases I’ve made recently. It’s stylish, comfortable, and well-priced.",
  },
  {
    id: 7,
    user: "Eric Adams",
    avatarColor: "teal",
    rating: 4.2,
    date: "Dec 30, 2023",
    review:
      "The material feels premium, but the shipping was delayed. Overall, still worth the wait!",
  },
  {
    id: 8,
    user: "Nina Garcia",
    avatarColor: "pink",
    rating: 5,
    date: "Nov 18, 2024",
    review:
      "I can’t recommend this enough! It’s everything I was looking for in clothing. Fits like a glove.",
  },
  {
    id: 9,
    user: "John Smith",
    avatarColor: "brown",
    rating: 3,
    date: "Oct 15, 2023",
    review:
      "The design is nice, but the material wasn’t as soft as I expected. It’s okay but could be better.",
  },
  {
    id: 10,
    user: "Anna Thompson",
    avatarColor: "cyan",
    rating: 4.7,
    date: "Aug 5, 2023",
    review:
      "Beautiful design and perfect fit. The colors are vibrant, and it holds up well after multiple washes.",
  },
  {
    id: 11,
    user: "David Lee",
    avatarColor: "gray",
    rating: 4.9,
    date: "Sep 25, 2024",
    review:
      "Excellent quality and craftsmanship. This has become my go-to item in the closet!",
  },
  {
    id: 12,
    user: "Olivia Mitchell",
    avatarColor: "magenta",
    rating: 4.4,
    date: "Jun 30, 2024",
    review:
      "Very stylish and comfortable, though I think it could use a few more sizing options.",
  },
  {
    id: 13,
    user: "Robert King",
    avatarColor: "navy",
    rating: 3.8,
    date: "Jul 12, 2024",
    review:
      "Pretty decent, but not as impressive as I hoped. Still, it gets the job done.",
  },
  {
    id: 14,
    user: "Sophia Williams",
    avatarColor: "lime",
    rating: 4.6,
    date: "Oct 2, 2024",
    review:
      "It’s so cozy and perfect for any season. Love the design and how it complements my wardrobe!",
  },
  {
    id: 15,
    user: "Michael Brown",
    avatarColor: "olive",
    rating: 5,
    date: "Dec 12, 2023",
    review:
      "Honestly, this is one of the best pieces of clothing I’ve bought in a long time. High quality!",
  },
];


export default function ReviewSection() {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} />);
      } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
        stars.push(<FaStarHalfAlt key={i} />);
      } else {
        stars.push(<FaRegStar key={i} />);
      }
    }
    return stars;
  };
  const getRandomReviews = (reviews) => {
    return [...reviews]
      .sort(() => 0.5 - Math.random())
      .slice(0, 2); 
  };

  const randomReviews = getRandomReviews(reviews);
  return (
    <div>
      <div className="review-section-container">
        <div className="review-section-content">
          <h1 className="review-section-title">Reviews</h1>
          <div className="review-card-container">
            {randomReviews.map((review) => (
              <div className="review-card" key={review.id}>
                <div className="review-card-header">
                  <div className="review-card-user">
                    <div className={`user-avatar ${review.avatarColor}`}>
                      {review.user.charAt(0)}
                    </div>
                    <span className="user-name">{review.user}</span>
                  </div>
                  <div className="review-card-rating">
                    {renderStars(review.rating)}
                  </div>
                </div>
                <div>{review.review}</div>
                <div className="review-card-footer">
                  <span className="review-card-date">{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
