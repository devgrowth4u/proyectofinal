import React from "react";import Header 
from "../../components/Header/header";

import Footer from "../../components/Footer/footer";
import data from "../../api/data.json";
import Cardfundamento from "../../components/Cards/Cardfundamento";




function Card() {
  const posts=data.posts;
 
  return (
      <>
        <Header/>
      <div className="container">
            
             <Cardfundamento/>
            
      </div>  
      <Footer />    
      </>
  )
}

export default Card;
