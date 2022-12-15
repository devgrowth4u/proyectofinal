import React from "react";
import Header from "../../components/Header/header";
import Cards from "../../components/Cards/cards";
import Footer from "../../components/Footer/footer";



function Card() {

  return (
      <>
              <Header/>
              <div id="cartas" className="cards">
              <div className="container cards">
                  <div className="row">
                      <Cards />
                  </div>
                  
                </div>
              </div>
              <Footer />
          

      </>
  )
}

export default Card;
