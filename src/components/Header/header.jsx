import React from "react";
import logo_fcdn from '../../components/images/logo.png';
import{NavLink} from 'react-router-dom';



const header = () => {
    return (
        <div className="Header">
            <div class="container">
                <div class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom"> 
                <a href="https://www.ciudaddelnino.cl/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none">
                <img src={logo_fcdn} class="logo" alt="logo" />  </a>  
                    <ul class="nav nav-pills">
                        <div class="nav">
                                <ul class="nav nav-pills">
                                        
                                        <li class="nav-item"><a href="./header.jsx" class="btn btn-outline-primary me-3" aria-current="page">HOME</a></li>
                                        <li class="nav-item"><a href="/src/pages/Ticket/Ticket.jsx" class="nav-link">TICKETS</a></li>
                                        <li class="nav-item"><a href="/src/pages/Contacto/Contacto.jsx" class="nav-link">CONTACTO</a></li>
                                        <li class="nav-item"><a href="/src/pages/Ticket/openticket.jsx" class="btn btn-danger me-3">ABRIR TICKET</a></li>

                                        <li  class="nav-item"> <NavLink class="btn btn-outline-primary me-3" aria-current="page" to="/">Home</NavLink></li>
                                        <li  class="nav-item"> <NavLink class="nav-link" to="/Ticket">Ticket</NavLink></li>
                                        <li  class="nav-item"> <NavLink class="nav-link" to="/Contacto">Contacto</NavLink></li>
                                        <li  class="nav-item"> <NavLink class="btn btn-danger me-3" to="/Openticket">Abrir Ticket</NavLink></li>
                                </ul>
                        </div> 
                    </ul>
                </div>
            </div>

        </div>

      );

}
export default header;
