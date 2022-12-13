import React from "react";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";


function Contacto() {
  return (
    <div>
      <Header />
      <h3>Contacto</h3>
      <p></p>
      <h4>
        Si quieres tener una atención más personalizada, escríbeme y
        conversemos.
      </h4>
      <p></p>
      <form>
        <label>
          <p>Nombre</p>
          <input class="nombre" type="text" name="nombre" />
          <p>Apellido</p>
          <input class="apellido" type="text" name="apellido" />
          <p>Asunto</p>
          <input class="asunto" type="text" name="asunto" />
          <p>Mensaje</p>
          <textarea>
          </textarea>
        </label>
        <p>
        <input type="Submit" value="Submit" />
        </p>
      </form>
      <Footer />
    </div>
  );
}
export default Contacto;
