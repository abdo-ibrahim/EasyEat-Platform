import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderLine from "../components/Tittles/HeaderLine";

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  });
  
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    if (!formData.agreeTerms) newErrors.agreeTerms = 'You must agree to the terms and conditions';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    
    if (Object.keys(newErrors).length === 0) {
      console.log('Registration data:', formData);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="register py-16 px-4 relative">
      <div className="container">
        <HeaderLine heading={"Create Account"} desc={"Join Our Community"} />
        
        <div className="max-w-md mx-auto bg-gray rounded-xl shadow-lg p-6 mb-10">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="form-group">
              <label htmlFor="name" className="block mb-2 text-lg">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full bg-transparent border-2 ${errors.name ? 'border-red-500' : 'border-white'} rounded-lg p-3 focus:border-main`}
                placeholder="John Doe"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="email" className="block mb-2 text-lg">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full bg-transparent border-2 ${errors.email ? 'border-red-500' : 'border-white'} rounded-lg p-3 focus:border-main`}
                placeholder="your@email.com"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="password" className="block mb-2 text-lg">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full bg-transparent border-2 ${errors.password ? 'border-red-500' : 'border-white'} rounded-lg p-3 focus:border-main`}
                placeholder="••••••••"
              />
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword" className="block mb-2 text-lg">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`w-full bg-transparent border-2 ${errors.confirmPassword ? 'border-red-500' : 'border-white'} rounded-lg p-3 focus:border-main`}
                placeholder="••••••••"
              />
              {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
            </div>

            <div className="flex items-center my-2">
              <input
                type="checkbox"
                id="agreeTerms"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
                className="h-4 w-4 border-2 rounded bg-transparent focus:ring-main"
              />
              <label htmlFor="agreeTerms" className="ml-2 text-sm">
                I agree to the <Link to="/terms" className="text-main hover:underline">Terms and Conditions</Link>
              </label>
            </div>
            {errors.agreeTerms && <p className="text-red-500 text-sm mt-1">{errors.agreeTerms}</p>}

            <button type="submit" className="btn-red w-full py-3 mt-4">
              Register
            </button>

            <p className="text-center mt-4">
              Already have an account? <Link to="/login" className="text-main hover:underline">Login</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;