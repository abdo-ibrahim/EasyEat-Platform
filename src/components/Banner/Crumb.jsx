import React from "react";
import "../../styles/components/Banner/Crumb.css";
import { useLocation } from "react-router-dom";
const Crumb = () => {
  const location = useLocation();
  const pathName = location.pathname;
  const currentPageName = pathName.split("/").pop();

  return (
    <div className="crumb relative">
      <div className="crumb-img h-[400px] w-full relative">
        <div className="overlay absolute h-full w-full bg-green opacity-50"></div>
        <img src="./assets/imgs/crumb.jpg" alt="" className="h-full w-full" />
      </div>
      <h4 className="crumb-text text-[20px]">
        Home - <span>{currentPageName}</span>
      </h4>
    </div>
  );
};

export default Crumb;
