import { useState } from "react";
import { Link } from "react-router-dom";

// styles
import "./DesktopNavbar.css";
import "./MobileNavbar.css";

export default function Navbar({ activate }) {
  const [activeClass, setActiveClass] = useState("");
  const [active, setActive] = useState(false);

  const toggle = () => {
    active ? setActive(false) : setActive(true);

    active
      ? (document.getElementById("main").style.overflow = "visible")
      : (document.getElementById("main").style.overflow = "hidden");

    if (active) {
      setActiveClass("inactive");
    } else {
      setActiveClass("active");
    }
  };

  console.log(active, `menu ${activeClass}`);

  return (
    <div className="navbar">
      <nav className="desktop-navbar">
        <ul>
          <Link className="apple-logo" to="/" />
          <Link to="/store">Store</Link>
          <Link to="/mac">Mac</Link>
          <Link to="/ipad">iPad</Link>
          <Link to="iphone">iPhone</Link>
          <Link to="/watch">Watch</Link>
          <Link to="/airpods">AirPods</Link>
          <Link to="/tvandhome">TV & Home</Link>
          <Link to="/onlyonapple">Only on Apple</Link>
          <Link to="/accessories">Accessories</Link>
          <Link to="/support">Support</Link>
          <div className="search-image"></div>
          <div className="bag-image"></div>
        </ul>
      </nav>

      {/* mobile menu */}
      <div className="mobile-menu">
        <div className={active ? "active" : "inactive"}>
          <nav className="mobile-navbar">
            {/* Menu animation */}
            <div className="menu-icon-container">
              <div
                onClick={() => {
                  toggle();
                  activate();
                }}
                className="menu"
              >
                <div className={`${activeClass}`}>
                  <div className="top-bar"></div>
                  <div className="bottom-bar"></div>
                </div>
              </div>
            </div>
            <Link className="apple-logo" onClick={active ? toggle: ''} to="/" />
            <div className="mobile-bag-image"></div>
          </nav>
          {/* Menu dropdown */}
          <div className="menu-dropdown">
            <div className={active ? "active" : "inactive"}>
              <div className="search-bar">
                <div className="search-icon"></div>
                <input type="search" placeholder="Search apple.com" />
              </div>
              <nav className="mobile-links">
                <Link onClick={toggle} to="/store">Store</Link>
                <Link onClick={toggle} to="/mac">Mac</Link>
                <Link onClick={toggle} to="/ipad">iPad</Link>
                <Link onClick={toggle} to="iphone">iPhone</Link>
                <Link onClick={toggle} to="/watch">Watch</Link>
                <Link onClick={toggle} to="/airpods">AirPods</Link>
                <Link onClick={toggle} to="/tvandhome">TV & Home</Link>
                <Link onClick={toggle} to="/onlyonapple">Only on Apple</Link>
                <Link onClick={toggle} to="/accessories">Accessories</Link>
                <Link onClick={toggle} to="/support">Support</Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
