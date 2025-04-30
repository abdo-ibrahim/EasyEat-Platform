import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "../../styles/components/Header/Header.css";
import { FaHeart, FaUser } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useMobileContext } from "../../utils/MobileHandler";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const { carts } = useSelector((state) => state.carts);
  const { wishList } = useSelector((state) => state.wishList);
  const [links, setLinks] = useState([
    { id: 1, to: "/", name: "Home" },
    { id: 2, to: "/shop", name: "Shop" },
    { id: 3, to: "/about", name: "About" },
    { id: 4, to: "/contact", name: "Contact" },
  ]);
  const { isMobile } = useMobileContext();
  const [openMenu, setOpenMenu] = useState(false);
  
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  const handleNavClick = () => {
    if (!openMenu) return;
    setOpenMenu(false); // Close menu when clicking outside
  };

  return (
    <header>
      <div className="container">
        <div className="logo cursor-pointer" onClick={() => navigate("/")}>
          <img src="./assets/imgs/logo.png" alt="" />
        </div>
        {isMobile && (
          <div
            className={`nav-menu ${openMenu ? "active" : ""}`}
            onClick={() => setOpenMenu(!openMenu)}
          >
            <span></span>
            <span></span>
          </div>
        )}
        <nav className={`${openMenu ? "" : "none"}`}>
          <ul
            className={`${openMenu ? "active" : "none"}`}
            onClick={handleNavClick}
          >
            {links.map((link) => (
              <li key={link.id}>
                <NavLink to={link.to}>{link.name}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="nav-icons">
          <div onClick={() => navigate("/wishlist")}>
            <span>{wishList.length}</span>
            <FaHeart />
          </div>
          <div onClick={() => navigate("/cart")}>
            <span>{carts.length}</span>
            <HiOutlineShoppingCart />
          </div>
          <div onClick={() => navigate(isAuthenticated ? "/profile" : "/login")}>
            <FaUser />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
