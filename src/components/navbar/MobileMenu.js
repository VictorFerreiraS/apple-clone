
export default function MobileMenu() {
  return (
    <div>
      <nav className="mobile-navbar">
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
    </div>
    )
}
