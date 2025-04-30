import React from 'react';
import { FaStar } from 'react-icons/fa';

const ReviewItem = ({ review }) => {
  const { username, rating, date, comment, avatar } = review;
  
  return (
    <div className="review-item p-4 border border-white/10 rounded-lg">
      <div className="flex items-start gap-4">
        <div className="avatar">
          <img 
            src={avatar || "https://i.pravatar.cc/150"} 
            alt={username}
            className="w-12 h-12 rounded-full object-cover"
          />
        </div>
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
            <h4 className="font-semibold">{username}</h4>
            <span className="text-xs text-white/50">{date}</span>
          </div>
          <div className="flex mb-2">
            {[...Array(5)].map((_, i) => (
              <FaStar 
                key={i} 
                className={i < rating ? "text-main" : "text-gray-500"} 
                size={16}
              />
            ))}
          </div>
          <p className="text-white/80">{comment}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;