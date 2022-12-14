import React from "react";
import logo_fcdn from '../../components/images/logo.png';
import{NavLink} from 'react-router-dom';



const header = () => {
    return (
        <div className="Header">
            <div className="container">
                <div className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom"> 
                <a href="https://www.ciudaddelnino.cl/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none">
                <img src={logo_fcdn} className="logo" alt="logo" />  </a>  
                    <ul className="nav nav-pills">
                        <div className="nav">
                                <ul className="nav nav-pills">
                                        <li  className="nav-item"> <NavLink className="btn btn-outline-primary me-3" aria-current="page" to="/">Home</NavLink></li>
                                        <li  className="nav-item"> <NavLink className="nav-link" to="/Contacto">Contacto</NavLink></li>
                                        <li  className="nav-item"> <NavLink className="nav-link" to="/cards">Derechos de los Niños</NavLink></li>

                                </ul>
                        </div> 
                    </ul>
                </div>
            </div>

        </div>

      );

}
export default header;
