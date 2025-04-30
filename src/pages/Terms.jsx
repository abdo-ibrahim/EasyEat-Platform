import React from "react";
import HeaderLine from "../components/Tittles/HeaderLine";

const Terms = () => {
  return (
    <div className="terms-conditions py-16 px-4 relative">
      <div className="container">
        <HeaderLine heading={"Terms & Conditions"} desc={"Legal Agreement"} />

        <div className="max-w-4xl mx-auto bg-gray rounded-xl shadow-lg p-8 mb-10">
          <div className="terms-content space-y-6 text-white/90">
            <section>
              <h3 className="text-2xl mb-3 text-main">1. Acceptance of Terms</h3>
              <p>By accessing or using our food delivery service, you agree to be bound by these Terms and Conditions. If you do not agree to all the terms, please do not use our services.</p>
            </section>

            <section>
              <h3 className="text-2xl mb-3 text-main">2. Account Registration</h3>
              <p>To place orders, you must register an account with accurate personal information. You are responsible for maintaining the confidentiality of your account credentials and all activities under your account.</p>
            </section>

            <section>
              <h3 className="text-2xl mb-3 text-main">3. Ordering & Payment</h3>
              <p>
                All orders are subject to availability. Prices are subject to change without notice. We accept payment via credit/debit cards and other payment methods displayed at checkout. All payments are processed securely through our payment
                providers.
              </p>
            </section>

            <section>
              <h3 className="text-2xl mb-3 text-main">4. Delivery</h3>
              <p>Delivery times are estimates and may vary based on location, weather, and traffic conditions. We are not responsible for delays outside of our control. Please ensure delivery address information is accurate.</p>
            </section>

            <section>
              <h3 className="text-2xl mb-3 text-main">5. Food Safety & Allergies</h3>
              <p>While we take precautions to prevent cross-contamination, we cannot guarantee that any item is completely free of allergens. Please inform us of any allergies or dietary requirements when placing your order.</p>
            </section>

            <section>
              <h3 className="text-2xl mb-3 text-main">6. Refunds & Cancellations</h3>
              <p>Orders may be canceled before they enter preparation. Once preparation begins, cancellations may not be possible. Refunds are processed according to our refund policy and may take 5-7 business days to appear in your account.</p>
            </section>

            <section>
              <h3 className="text-2xl mb-3 text-main">7. Privacy Policy</h3>
              <p>We collect and process your personal data in accordance with our Privacy Policy. By using our services, you consent to our collection and use of your information as described in our Privacy Policy.</p>
            </section>

            <section>
              <h3 className="text-2xl mb-3 text-main">8. Intellectual Property</h3>
              <p>All content on our website and app, including logos, images, and text, is our property and protected by copyright laws. You may not use, reproduce, or distribute our content without our written permission.</p>
            </section>

            <section>
              <h3 className="text-2xl mb-3 text-main">9. Limitation of Liability</h3>
              <p>We are not liable for any indirect, consequential, or incidental damages arising from your use of our services. Our total liability shall not exceed the amount you paid for the specific order that caused the damage.</p>
            </section>

            <section>
              <h3 className="text-2xl mb-3 text-main">10. Changes to Terms</h3>
              <p>We may modify these terms at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services constitutes acceptance of the modified terms.</p>
            </section>

            <section>
              <p className="mt-8 pt-6 border-t border-white/20 text-center text-sm">Last updated: April 30, 2025. If you have any questions about these Terms and Conditions, please contact us.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
