import React from "react";
import logo_fcdn from '../../components/images/logo.png';


const footer = () => {
    return (
        <div className="Footer">
             <div class="container">
             <div class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom"> 
                <a href="https://www.ciudaddelnino.cl/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none">
                <img src={logo_fcdn} alt="logo" />  </a>  
                    <ul class="nav nav-pills">
                        <div class="direccion">     
                            <p> Dirección de Tecnología de la Información</p>
                        </div> 
                    </ul>
                </div>
            </div>
        </div>
      );

}
export default footer;