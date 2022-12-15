import React from "react";
import Header from "../../components/Header/header";
import Carousell from "../../components/Carousel/carousell";
import Content from "../../components/Content/content";
import Video from "../../components/Content/video";
import Cardss from "../../components/Cards/card";
import Footer from "../../components/Footer/footer";

function Home() {
  return (
    <div>
      <Header/>
      <Carousell />
      <Content/>
      <Video />
      <Cardss/>
        <h3 className="titulo 2 col-md-12">Estamos en diez regiones, ejecutando más de un centenar de programas en nuestras tres áreas de trabajo.</h3>
      
      <Footer/>
  </div>
  );
}
export default Home;
