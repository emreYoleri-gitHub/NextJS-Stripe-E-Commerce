import React from "react";

import { Product, FooterBanner, HeroBanner, Footer } from "../components";

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <div className="products-heading">
        <h2>Beset Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className="products-container">
        {["product1", "product2"].map((product) => product)}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
