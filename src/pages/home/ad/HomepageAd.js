import "./HomepageAd.css";

export default function HomepageAd() {
  return (
    <div className="homepage-ad-container">
      <div className="homepage-ad">
        <div className="homepage-ad-image"></div>

        <a target={"_blank"} href="https://brasil.unicef.org.br/">
          <p>Donate to support families</p>
          <p className="arrow-link" >&nbsp; affected by the war in Ukraine</p>
        </a>
      </div>
    </div>
  );
}
