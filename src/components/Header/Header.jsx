import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Container, Logo, LogoutBtn } from "../index";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Header.css";
function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const [showButtons, setShowButtons] = useState(window.innerWidth > 768);

  const toggleButtons = () => {
    setShowButtons(!showButtons);
  };

  useEffect(() => {
    const handleResize = () => {
      setShowButtons(window.innerWidth > 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "About",
      slug: "/about",
      active: true,
    },
    {
      name: "Contact",
      slug: "/contact",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "Prime",
      slug: "/prime",
      active: authStatus,
    },
  ];
  return (
    <header>
      <nav>
        <div className="logo">
          <Link to="/">
            <Logo width="70px" />
          </Link>
        </div>
        <img
          src="dropdown-toggle.png"
          alt="dropdown-toggle"
          onClick={toggleButtons}
          className="toggle-button"
        />
        <div className={showButtons ? "btn-container-sm" : "btn-container-lg"}>
          <ul className="nav-links">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className="nav-btn">
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
