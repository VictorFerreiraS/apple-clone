import { useState } from "react";
import { Link } from "react-router-dom";

// styles
import "./DesktopNavbar.css";
import "./MobileNavbar.scss";

export default function Navbar() {
  const [className, setClassName] = useState('menu-of')
  const [active, setActive] = useState(false);

  const toggle = () => {
    active ? setActive(false) : setActive(true);


    if (active) {
      setClassName('menu')
    } else{
      setClassName('menu-on')
    }
  };

  console.log(active, className);

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

          <div to className="search-image"></div>
          <div className="bag-image"></div>
        </ul>
      </nav>

      <nav className="mobile-navbar">
        {/* Menu animation */}
        <div className="menu-container">
          <div
            onClick={toggle}
            className={className}
          >
            <div className="top-bar"></div>
            <div className="bottom-bar"></div>
          </div>
        </div>
        <Link className="apple-logo" to="/" />
        <div className="mobile-bag-image"></div>
      </nav>
    </div>
  );
}
