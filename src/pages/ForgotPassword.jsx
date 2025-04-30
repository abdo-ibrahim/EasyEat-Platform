import React, { useState } from "react";
import { Link } from "react-router-dom";
import HeaderLine from "../components/Tittles/HeaderLine";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Email address is invalid";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();

    if (Object.keys(newErrors).length === 0) {
      console.log("Reset email requested for:", email);
      setIsSubmitted(true);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="forgot-password py-16 px-4 relative">
      <div className="container">
        <HeaderLine heading={"Reset Password"} desc={"Recover Your Account"} />

        <div className="max-w-md mx-auto bg-gray rounded-xl shadow-lg p-6 mb-10">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <p className="text-center text-sm mb-4">Enter your email address and we'll send you a link to reset your password.</p>

              <div className="form-group">
                <label htmlFor="email" className="block mb-2 text-lg">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full bg-transparent border-2 ${errors.email ? "border-red-500" : "border-white"} rounded-lg p-3 focus:border-main`}
                  placeholder="your@email.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <button type="submit" className="btn-red w-full py-3 mt-4">
                Send Reset Link
              </button>

              <p className="text-center mt-4">
                Remember your password?{" "}
                <Link to="/login" className="text-main hover:underline">
                  Back to Login
                </Link>
              </p>
            </form>
          ) : (
            <div className="text-center py-8">
              <div className="flex justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-main" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
                  />
                </svg>
              </div>
              <h3 className="text-2xl mb-4">Check Your Email</h3>
              <p className="mb-6">
                We've sent a password reset link to:
                <br />
                <span className="text-main font-medium">{email}</span>
              </p>
              <p className="text-sm opacity-75 mb-6">If you don't see it, check your spam folder or request another link.</p>
              <div className="flex flex-col space-y-3">
                <button onClick={() => setIsSubmitted(false)} className="btn-red mx-auto">
                  Resend Link
                </button>
                <Link to="/login" className="text-main hover:underline text-sm">
                  Back to Login
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
