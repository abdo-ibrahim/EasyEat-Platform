import React, { useEffect } from "react";
import "../../styles/components/utils/LoadingScreen.css";

const LoadingScreen = ({ isLoading = true }) => {
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isLoading]);

  if (!isLoading) return null;

  return (
    <div className="loading-screen">
      <div className="burger-wrapper">
        <div className="burger">
          <div className="burger-top"></div>
          <div className="burger-filling">
            <div className="cheese"></div>
            <div className="tomato"></div>
            <div className="lettuce"></div>
            <div className="patty"></div>
          </div>
          <div className="burger-bottom"></div>
        </div>
        <div className="loading-text">
          Loading
          <span className="dots">
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
