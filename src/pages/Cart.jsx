import React, { useState } from "react";
import Crumb from "../components/Banner/Crumb";
import HeaderLine from "../components/Tittles/HeaderLine";
import { Link } from "react-router-dom";
import CartItem from "../components/Cart/CartItem";
import { useSelector } from "react-redux";

const Cart = () => {
  const { carts } = useSelector((state) => state.carts);
  const subtotal = carts.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);

  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const shipping = 25;
  const tax = subtotal * 0.14;
  const total = subtotal + shipping + tax - discount;

  const applyCoupon = (e) => {
    e.preventDefault();
    if (couponCode.toLowerCase() === "discount20") {
      setDiscount(subtotal * 0.2);
    } else {
      setDiscount(0);
    }
  };

  return (
    <div className="cart p-4 relative">
      <Crumb />
      <div className="container">
        {carts.length > 0 ? (
          <>
            <HeaderLine heading={"Your Cart Summary"} desc={"Your Cart Summary"} />
            <h4 className="text-2xl">{carts.length} Items In Cart</h4>
            <div className="cart-container my-8 flex flex-1 gap-8 justify-center lg:justify-between items-center lg:items-start flex-col lg:flex-row">
              <div className="items">
                {carts.map((product) => (
                  <CartItem key={product.id} product={product} />
                ))}
              </div>
              <div className="checkout btn-item w-[320px] md:w-[380px] p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-6 border-b border-white/20 pb-2">Order Summary</h3>
                <div className="space-y-4 mb-4">
                  {/* Order details */}
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

                  {discount > 0 && (
                    <div className="between-flex text-main">
                      <span>Discount</span>
                      <span>-{discount.toFixed(2)} EG</span>
                    </div>
                  )}

                  {/* Coupon form */}
                  <form onSubmit={applyCoupon} className="flex gap-2 mt-4">
                    <input type="text" placeholder="Coupon code" className="flex-1 bg-transparent border-2 border-white rounded-lg p-2 text-sm" value={couponCode} onChange={(e) => setCouponCode(e.target.value)} />
                    <button type="submit" className="bg-main px-3 py-2 rounded-lg text-sm">
                      Apply
                    </button>
                  </form>

                  {/* Total */}
                  <div className="total between-flex uppercase mt-6 pt-4 border-t border-white/20">
                    <h4 className="text-[22px]">Total</h4>
                    <p className="text-[22px] text-main">{total.toFixed(2)} EG</p>
                  </div>
                </div>
                <Link to="/checkout" className="btn-red mx-auto w-full">
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          </>
        ) : (
          <HeaderLine heading={"Your cart is currently empty."} />
        )}
        <Link to="/shop" className="btn-red mx-auto">
          Return To Shop
        </Link>
      </div>
    </div>
  );
};

export default Cart;
