import React from "react";import Header 
from "../../components/Header/header";

import Footer from "../../components/Footer/footer";

import Cards from "../../components/Cards/cards";



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
