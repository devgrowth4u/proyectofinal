import React from "react";
import Header from "../../components/Header/header";
import Content from "../../components/Content/content";
import Footer from "../../components/Footer/footer";
import Carousell from "../../components/Carousel/carousell";
import Cards from "../../components/Cards/cards";

function Home() {
  return (
    <div>
      <Header/>
      <Carousell />
      <Content/>
      <Cards />
      <Footer/>
  </div>
  );
}
export default Home;
