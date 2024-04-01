import React, { useState } from "react";
import Navbar from "./Navbar";
import LandingPageDevelopers from "../utils/homepage_second_content";
import First from "./HomePage_Partials/First";
import FeaturesZigZag from "./HomePage_Partials/FeaturesZigZag";
import Developers from "./HomePage_Partials/Developers";
import OurCategories from "./HomePage_Partials/OurCategories";

const [cat1, cat2, cat3, img1, dev1, dev2] = LandingPageDevelopers;

function HomePage() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`overflow-x-hidden ${darkMode && "dark"}`}>
      <div className="flex flex-col min-h-screen overflow-x-hidden ">
        <Navbar className="overflow-x-hidden" />

        <main className="grow dark:bg-slate-950">
          <First />
          <OurCategories images={[cat1, cat2, cat3]} />
          <FeaturesZigZag images={[img1]} />
          <Developers images={[dev1, dev2]} />
          <button
            className="absolute w-16 h-16 bottom-16 right-16 bg-neutral-900 dark:bg-white rounded-full text-white dark:text-black font-semibold "
            onClick={toggleDarkMode}
          >
            {darkMode ? "LHT" : "DRK"}
          </button>
        </main>
      </div>
    </div>
  );
}

export default HomePage;
// "overflow-x-hidden
{
  /* <div class="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>; */
}
