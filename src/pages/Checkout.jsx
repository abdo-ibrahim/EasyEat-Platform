import React, { useState } from "react";
import { useSelector } from "react-redux";
import Crumb from "../components/Banner/Crumb";
import HeaderLine from "../components/Tittles/HeaderLine";
import { Link, useNavigate } from "react-router-dom";
import { FaCreditCard, FaMoneyBillWave, FaPaypal } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

const Checkout = () => {
  const navigate = useNavigate();
  const { carts } = useSelector((state) => state.carts);
  const subtotal = carts.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);

  const shipping = 25;
  const tax = subtotal * 0.14;
  const total = subtotal + shipping + tax;

  const [paymentMethod, setPaymentMethod] = useState("card");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    phone: "",
    cardNumber: "",
    cardExpiry: "",
    cardCvv: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.postalCode) newErrors.postalCode = "Postal code is required";
    if (!formData.phone) newErrors.phone = "Phone number is required";

    if (paymentMethod === "card") {
      if (!formData.cardNumber) newErrors.cardNumber = "Card number is required";
      if (!formData.cardExpiry) newErrors.cardExpiry = "Expiry date is required";
      if (!formData.cardCvv) newErrors.cardCvv = "CVV is required";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();

    if (Object.keys(newErrors).length === 0) {
      toast.success("Order placed successfully!");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } else {
      setErrors(newErrors);
      toast.error("Please fill all required fields");
    }
  };

  if (carts.length === 0) {
    return (
      <div className="checkout p-4 relative">
        <Crumb />
        <div className="container">
          <HeaderLine heading={"Your cart is empty"} desc={"Nothing to checkout"} />
          <Link to="/shop" className="btn-red mx-auto">
            Return To Shop
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout p-4 relative">
      <Crumb />
      <div>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
      <div className="container">
        <HeaderLine heading={"Checkout"} desc={"Complete your order"} />

        <div className="checkout-container my-8 flex flex-col lg:flex-row gap-8 justify-between">
          {/* Customer Information Form */}
          <div className="checkout-form w-full lg:w-2/3">
            <form onSubmit={handleSubmit} className="bg-gray p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-6 border-b border-white/20 pb-2">Customer Information</h3>

              <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block mb-2 text-sm">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`w-full bg-transparent border-2 ${errors.firstName ? "border-red-500" : "border-white"} rounded-lg p-3 focus:border-main`}
                  />
                  {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                </div>
                <div>
                  <label htmlFor="lastName" className="block mb-2 text-sm">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={`w-full bg-transparent border-2 ${errors.lastName ? "border-red-500" : "border-white"} rounded-lg p-3 focus:border-main`}
                  />
                  {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm">
                  Email Address *
                </label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={`w-full bg-transparent border-2 ${errors.email ? "border-red-500" : "border-white"} rounded-lg p-3 focus:border-main`} />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              <div className="mb-6">
                <label htmlFor="address" className="block mb-2 text-sm">
                  Address *
                </label>
                <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} className={`w-full bg-transparent border-2 ${errors.address ? "border-red-500" : "border-white"} rounded-lg p-3 focus:border-main`} />
                {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
              </div>

              <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="city" className="block mb-2 text-sm">
                    City *
                  </label>
                  <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} className={`w-full bg-transparent border-2 ${errors.city ? "border-red-500" : "border-white"} rounded-lg p-3 focus:border-main`} />
                  {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
                </div>
                <div>
                  <label htmlFor="postalCode" className="block mb-2 text-sm">
                    Postal Code *
                  </label>
                  <input
                    type="text"
                    id="postalCode"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleChange}
                    className={`w-full bg-transparent border-2 ${errors.postalCode ? "border-red-500" : "border-white"} rounded-lg p-3 focus:border-main`}
                  />
                  {errors.postalCode && <p className="text-red-500 text-xs mt-1">{errors.postalCode}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-2 text-sm">
                    Phone *
                  </label>
                  <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} className={`w-full bg-transparent border-2 ${errors.phone ? "border-red-500" : "border-white"} rounded-lg p-3 focus:border-main`} />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-6 border-b border-white/20 pb-2 mt-8">Payment Method</h3>

              <div className="mb-6 space-y-4">
                <div className={`p-4 border-2 ${paymentMethod === "card" ? "border-main" : "border-white/50"} rounded-lg flex items-center gap-3 cursor-pointer`} onClick={() => setPaymentMethod("card")}>
                  <input type="radio" id="card" name="paymentMethod" checked={paymentMethod === "card"} onChange={() => setPaymentMethod("card")} className="h-4 w-4" />
                  <FaCreditCard className={paymentMethod === "card" ? "text-main" : ""} size={24} />
                  <label htmlFor="card" className="cursor-pointer">
                    Credit/Debit Card
                  </label>
                </div>

                <div className={`p-4 border-2 ${paymentMethod === "paypal" ? "border-main" : "border-white/50"} rounded-lg flex items-center gap-3 cursor-pointer`} onClick={() => setPaymentMethod("paypal")}>
                  <input type="radio" id="paypal" name="paymentMethod" checked={paymentMethod === "paypal"} onChange={() => setPaymentMethod("paypal")} className="h-4 w-4" />
                  <FaPaypal className={paymentMethod === "paypal" ? "text-main" : ""} size={24} />
                  <label htmlFor="paypal" className="cursor-pointer">
                    PayPal
                  </label>
                </div>

                <div className={`p-4 border-2 ${paymentMethod === "cash" ? "border-main" : "border-white/50"} rounded-lg flex items-center gap-3 cursor-pointer`} onClick={() => setPaymentMethod("cash")}>
                  <input type="radio" id="cash" name="paymentMethod" checked={paymentMethod === "cash"} onChange={() => setPaymentMethod("cash")} className="h-4 w-4" />
                  <FaMoneyBillWave className={paymentMethod === "cash" ? "text-main" : ""} size={24} />
                  <label htmlFor="cash" className="cursor-pointer">
                    Cash on Delivery
                  </label>
                </div>
              </div>

              {paymentMethod === "card" && (
                <div className="mt-6 space-y-4">
                  <div>
                    <label htmlFor="cardNumber" className="block mb-2 text-sm">
                      Card Number *
                    </label>
                    <input
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      placeholder="XXXX XXXX XXXX XXXX"
                      value={formData.cardNumber}
                      onChange={handleChange}
                      className={`w-full bg-transparent border-2 ${errors.cardNumber ? "border-red-500" : "border-white"} rounded-lg p-3 focus:border-main`}
                    />
                    {errors.cardNumber && <p className="text-red-500 text-xs mt-1">{errors.cardNumber}</p>}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="cardExpiry" className="block mb-2 text-sm">
                        Expiry Date *
                      </label>
                      <input
                        type="text"
                        id="cardExpiry"
                        name="cardExpiry"
                        placeholder="MM/YY"
                        value={formData.cardExpiry}
                        onChange={handleChange}
                        className={`w-full bg-transparent border-2 ${errors.cardExpiry ? "border-red-500" : "border-white"} rounded-lg p-3 focus:border-main`}
                      />
                      {errors.cardExpiry && <p className="text-red-500 text-xs mt-1">{errors.cardExpiry}</p>}
                    </div>
                    <div>
                      <label htmlFor="cardCvv" className="block mb-2 text-sm">
                        CVV *
                      </label>
                      <input
                        type="text"
                        id="cardCvv"
                        name="cardCvv"
                        placeholder="XXX"
                        value={formData.cardCvv}
                        onChange={handleChange}
                        className={`w-full bg-transparent border-2 ${errors.cardCvv ? "border-red-500" : "border-white"} rounded-lg p-3 focus:border-main`}
                      />
                      {errors.cardCvv && <p className="text-red-500 text-xs mt-1">{errors.cardCvv}</p>}
                    </div>
                  </div>
                </div>
              )}
            </form>
          </div>

          {/* Order Summary */}
          <div className="order-summary w-full lg:w-1/3">
            <div className="bg-gray p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-6 border-b border-white/20 pb-2">Order Summary</h3>

              <div className="space-y-4">
                {/* Items Overview */}
                <div className="space-y-3">
                  {carts.map((item) => (
                    <div key={item.id} className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <span className="bg-main text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">{item.quantity}</span>
                        <span className="truncate max-w-[200px]">{item.name}</span>
                      </div>
                      <span>{item.price * item.quantity} EG</span>
                    </div>
                  ))}
                </div>

                {/* Price Breakdown */}
                <div className="border-t border-white/10 pt-4 space-y-2">
                  <div className="between-flex">
                    <span>Subtotal</span>
                    <span>{subtotal} EG</span>
                  </div>
                  <div className="between-flex">
                    <span>Shipping</span>
                    <span>{shipping} EG</span>
                  </div>
                  <div className="between-flex">
                    <span>Tax (14%)</span>
                    <span>{tax.toFixed(2)} EG</span>
                  </div>
                </div>

                {/* Total */}
                <div className="border-t border-white/20 pt-4">
                  <div className="between-flex text-lg font-bold">
                    <span>Total</span>
                    <span className="text-main">{total.toFixed(2)} EG</span>
                  </div>
                </div>
              </div>

              <button type="submit" onClick={handleSubmit} className="btn-red w-full mt-6">
                Place Order
              </button>

              <div className="text-xs text-center mt-4 text-white/60">
                By placing your order, you agree to our{" "}
                <Link to="/terms" className="text-main">
                  Terms and Conditions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
