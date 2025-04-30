import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const AddReviewForm = ({ onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    username: '',
    rating: 5,
    comment: '',
    avatar: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`
  });
  
  const [errors, setErrors] = useState({});
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const setRating = (rating) => {
    setFormData({ ...formData, rating });
  };
  
  const validate = () => {
    const newErrors = {};
    if (!formData.username.trim()) newErrors.username = 'Name is required';
    if (!formData.comment.trim()) newErrors.comment = 'Review text is required';
    return newErrors;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    
    if (Object.keys(newErrors).length === 0) {
      onSubmit(formData);
    } else {
      setErrors(newErrors);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="add-review-form bg-[#252525] p-5 rounded-lg">
      <h4 className="text-lg font-semibold mb-4">Write a Review</h4>
      
      <div className="mb-4">
        <label htmlFor="username" className="block mb-2 text-sm">Your Name *</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className={`w-full bg-transparent border-2 ${errors.username ? 'border-red-500' : 'border-white/50'} rounded-lg p-2 focus:border-main`}
          placeholder="John Doe"
        />
        {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username}</p>}
      </div>
      
      <div className="mb-4">
        <label className="block mb-2 text-sm">Your Rating *</label>
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map(star => (
            <FaStar 
              key={star}
              className={star <= formData.rating ? "text-main cursor-pointer" : "text-gray-500 cursor-pointer"}
              size={24}
              onClick={() => setRating(star)}
            />
          ))}
        </div>
      </div>
      
      <div className="mb-4">
        <label htmlFor="comment" className="block mb-2 text-sm">Your Review *</label>
        <textarea
          id="comment"
          name="comment"
          value={formData.comment}
          onChange={handleChange}
          rows={4}
          className={`w-full bg-transparent border-2 ${errors.comment ? 'border-red-500' : 'border-white/50'} rounded-lg p-2 focus:border-main resize-none`}
          placeholder="Share your thoughts about this product..."
        ></textarea>
        {errors.comment && <p className="text-red-500 text-xs mt-1">{errors.comment}</p>}
      </div>
      
      <div className="flex gap-3">
        <button type="submit" className="btn-red">Submit Review</button>
        <button type="button" onClick={onCancel} className="bg-transparent border-2 border-white/50 px-4 py-2 rounded-lg hover:border-white">
          Cancel
        </button>
      </div>
    </form>
  );
};

export default AddReviewForm;