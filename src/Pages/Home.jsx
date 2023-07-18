import React from "react";
import CatList from "./Home/CatList";
import Banner from "./Home/Banner";
import CatSlider from "./Home/CatSlider";

const Home = () => {
  return (
  <>
  <main className="container py-3">
    <div className="row">
    <CatList />
    <Banner/>
    </div>
    <div className="row">
      <CatSlider tt="laptops"/>
      <CatSlider tt="smartphones"/>
    </div>
  </main>
  </>
    )
};

export default Home;
