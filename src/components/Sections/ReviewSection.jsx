import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import ReviewItem from './ReviewItem';
import AddReviewForm from './AddReviewForm';

const ReviewSection = ({ productId }) => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      username: "John Doe",
      rating: 4,
      date: "April 15, 2025",
      comment: "Really delicious! The meat was tender and the apple chutney added the perfect sweet and tangy balance. Would definitely order again.",
      avatar: "https://i.pravatar.cc/150?img=1"
    },
    {
      id: 2,
      username: "Sarah Smith",
      rating: 5,
      date: "April 10, 2025",
      comment: "Absolutely amazing! The flavors were perfect and the portion size was generous. My whole family loved it!",
      avatar: "https://i.pravatar.cc/150?img=5"
    },
    {
      id: 3,
      username: "Mike Johnson",
      rating: 3,
      date: "April 3, 2025",
      comment: "Good, but I found it a bit too spicy for my taste. The meat quality was excellent though.",
      avatar: "https://i.pravatar.cc/150?img=8"
    }
  ]);
  
  const [showAddReview, setShowAddReview] = useState(false);
  
  const averageRating = reviews.length > 0 
    ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length 
    : 0;
  
  const handleAddReview = (newReview) => {
    setReviews([
      ...reviews,
      {
        id: reviews.length + 1,
        ...newReview,
        date: new Date().toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        })
      }
    ]);
    setShowAddReview(false);
  };

  return (
    <div className="review-section mt-12 bg-gray p-6 rounded-xl">
      <h3 className="text-xl font-semibold mb-6 border-b border-white/20 pb-2">Customer Reviews</h3>
      
      {/* Rating summary */}
      <div className="rating-summary flex flex-col md:flex-row items-center md:items-start gap-8 mb-8">
        <div className="average-rating text-center md:text-left">
          <div className="text-5xl font-bold text-main mb-2">{averageRating.toFixed(1)}</div>
          <div className="flex mb-2">
            {[...Array(5)].map((_, i) => (
              <FaStar 
                key={i} 
                className={i < Math.round(averageRating) ? "text-main" : "text-gray-500"} 
                size={20}
              />
            ))}
          </div>
          <div className="text-sm text-white/70">{reviews.length} reviews</div>
        </div>
        
        <div className="rating-bars flex-1">
          {[5, 4, 3, 2, 1].map(rating => {
            const count = reviews.filter(r => r.rating === rating).length;
            const percentage = reviews.length > 0 ? (count / reviews.length) * 100 : 0;
            
            return (
              <div key={rating} className="flex items-center gap-2 mb-2">
                <div className="flex items-center gap-1 w-12">
                  <span>{rating}</span>
                  <FaStar className="text-main" size={14} />
                </div>
                <div className="flex-1 bg-white/10 h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-main h-full rounded-full" 
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
                <div className="w-10 text-xs text-right">{count}</div>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Review list */}
      <div className="reviews-list space-y-6 mb-8">
        {reviews.map(review => (
          <ReviewItem key={review.id} review={review} />
        ))}
      </div>
      
      {/* Add review button or form */}
      {!showAddReview ? (
        <button 
          onClick={() => setShowAddReview(true)} 
          className="btn-red"
        >
          Write a Review
        </button>
      ) : (
        <AddReviewForm 
          onSubmit={handleAddReview}
          onCancel={() => setShowAddReview(false)}
        />
      )}
    </div>
  );
};

export default ReviewSection;