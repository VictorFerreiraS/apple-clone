// Styles
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import HomepageAd from "./ad/HomepageAd";
import "./HomePage.css";

export default function HomePage() {
  const { data: rows } = useFetch("http://localhost:8000/rows");

  return (
    <div className="HomePage-container">
      <HomepageAd />
      <div className="home-page-products">
        {rows &&
          rows.map((row) => (
            <div key={row.id} className={`item, item-${row.id}`}>
              <div
                className="background-image-wraper"
                style={{ backgroundImage: `url('${row.productImage}')` }}
              >
                <div className="text-container">
                  <div className="text-wraper">
                    <div
                      className="headline"
                      style={{ backgroundImage: `url('${row.title}')` }}
                    >
                      {row.title}
                    </div>
                    <p className="subtitle">{row.subtitle}</p>
                    <div className="links">
                      <Link className="link-one" to={row.linkOneAdress}>
                        {row.linkOne}
                      </Link>
                      <Link
                        className={row.linkTwo ? "link-two" : "link-two-false"}
                        to={row.linkTwoAdress}
                      >
                        {row.linkTwo}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
