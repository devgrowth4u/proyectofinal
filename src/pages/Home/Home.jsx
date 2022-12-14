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
      <div id="cartas" className="cards">
          <div className="container cards">
              <div className="row">
                  <Cards />
              </div>
            </div>
        </div>
      <Footer/>
  </div>
  );
}
export default Home;
