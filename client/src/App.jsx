import "./App.css";
import { Login } from "./components/login/login";
import { Stories } from "./components/product/product";
import { About } from "./components/about/about";

import { Signup } from "./components/signup/signup";
import { Navbar } from "./components/navbar/navbar";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { Footer } from "./components/Footer/Footer";
import { Createstory } from "./components/createstory/createstory";
import { DetailStory } from "./components/detailstory/detailstory";
import ReactGA from "react-ga";
import TagManager from "react-gtm-module";
import { useEffect } from "react";
const TRACKING_ID = "G-2T63N9RP64"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
    TagManager.initialize({ gtmId: "GTM-PTDWT87" });
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/stories" element={<Stories />}></Route>
        <Route path="/about" element={<About />}></Route>

        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/createstory" element={<Createstory />}></Route>
        <Route path="/detailstory/:id" element={<DetailStory />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
