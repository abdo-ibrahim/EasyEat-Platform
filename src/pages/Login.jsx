import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderLine from "../components/Tittles/HeaderLine";

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
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
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    
    if (Object.keys(newErrors).length === 0) {
      console.log('Login data:', formData);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="login py-16 px-4 relative">
      <div className="container">
        <HeaderLine heading={"Welcome Back"} desc={"Login to Your Account"} />
        
        <div className="max-w-md mx-auto bg-gray rounded-xl shadow-lg p-6 mb-10">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
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

            <div className="flex items-center justify-between my-2">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="rememberMe"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  className="h-4 w-4 border-2 rounded bg-transparent focus:ring-main"
                />
                <label htmlFor="rememberMe" className="ml-2 text-sm">Remember me</label>
              </div>
              <Link to="/forgot-password" className="text-main hover:underline text-sm">Forgot Password?</Link>
            </div>

            <button type="submit" className="btn-red w-full py-3 mt-4">
              Login
            </button>

            <p className="text-center mt-4">
              Don't have an account? <Link to="/register" className="text-main hover:underline">Register</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;