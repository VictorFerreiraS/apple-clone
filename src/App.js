import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

// Styles
import "./App.css";

// components
import Navbar from "./components/navbar/Navbar.js";
import Accessories from "./pages/accessories/Accessories";
import Airpods from "./pages/airpods/Airpods";
import HomePage from "./pages/home/HomePage";
import Ipad from "./pages/ipad/Ipad";
import Iphone from "./pages/iphone/Iphone";
import Mac from "./pages/mac/Mac";
import OnlyOnApple from "./pages/onlyonapple/OnlyOnApple";

// pages
import Store from "./pages/store/Store";
import Support from "./pages/support/Support";
import TvAndHome from "./pages/tv&home/TvAndHome";
import Watch from "./pages/watch/Watch";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route element={<HomePage />} path='/' />
          <Route element={<Store />} path="/store" />
          <Route element={<Mac />} path="/mac" />
          <Route element={<Ipad />} path="/ipad" />
          <Route element={<Iphone />} path="/iphone" />
          <Route element={<Watch />} path="/watch" />
          <Route element={<Airpods />} path="/airpods" />
          <Route element={<TvAndHome />} path="tvandhome" />
          <Route element={<OnlyOnApple />} path="onlyonapple" />
          <Route element={<Accessories />} path="/accessories" />
          <Route element={<Support />} path="/support" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


// npx json-server --watch data/db.json --port 8000