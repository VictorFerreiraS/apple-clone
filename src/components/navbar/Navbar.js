import { Link } from "react-router-dom";

// styles
import "./Navbar.css";

export default function Navbar() {
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
          <Link to="/tvandhome">Home & TV</Link>
          <Link to="/onlyonapple">Only on Apple</Link>
          <Link to="/accessories">Accessories</Link>
          <Link to="/support">Support</Link>

          <div to className="search-image"></div>
          <div className="bag-image"></div>
        </ul>
      </nav>

      {/* <div className="mobile-navbar"></dipath='/accessories'> */}
    </div>
  );
}
