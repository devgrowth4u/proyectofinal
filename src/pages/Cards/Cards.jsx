import React from "react";
import Header from "../../components/Header/header";
import Card from "../../components/Cards/card";
import Footer from "../../components/Footer/footer";

function CartasDerechos() {
    return (
      <>
        <Header/>
        <div className="cards">
          <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <Card />
                </div>
                <div className="col-md-4">
                  <Card />
                </div>
                <div className="col-md-4">
                  <Card />
                </div>
              </div>
            </div>
        </div>

        <Footer/>
    </>
    );
  }
  export default CartasDerechos;