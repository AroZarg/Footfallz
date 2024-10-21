import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { About1 } from "./components/about1";
import { About2 } from "./components/about1 copy";
import { About3 } from "./components/about1 copy 8";
import { About4 } from "./components/about1 copy 7";
import { About5 } from "./components/about1 copy 6";
import { About6 } from "./components/about1 copy 5";
import { About7 } from "./components/about1 copy 4";
import { About8 } from "./components/about1 copy 3";
import { About9 } from "./components/about1 copy 2";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Services data={landingPageData.Services} />
      <About1 data={landingPageData.About} />
-     <About2 data={landingPageData.About1} reverse />
      <About3 data={landingPageData.About2} />
      <About4 data={landingPageData.About3} reverse />
      <About5 data={landingPageData.About4} />
-     <About6 data={landingPageData.About5} reverse />
      <About7 data={landingPageData.About6} />
      <About8 data={landingPageData.About7} reverse />
      <About9 data={landingPageData.About8} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
