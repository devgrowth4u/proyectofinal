//import axios from "axios";
import React from "react";
//import { useState, useEffect } from 'react';
import data from "../../api/data.json"

function content() {
    const posts=data.posts;
    return (
    <div className="row content">
        <div className="col-md-12">
        
            <center>
                <h1 class="bienvenida"> Bienvenidos </h1>
            
            </center>
            <div id="carouselExampleIndicators" ClassName="carousel slide" data-bs-ride="carousel">
                <div ClassName="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" ClassName="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div ClassName="carousel-inner">
                    {posts.map((post) => (
                            <div ClassName="carousel-item">
                                <img src={post.img} ClassName="d-block w-100" alt="..."/>
                           </div>  
                    ))}
                </div>
                <button ClassName="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span ClassName="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span ClassName="visually-hidden">Siguiente</span>
                </button>
                <button ClassName="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span ClassName="carousel-control-next-icon" aria-hidden="true"></span>
                    <span ClassName="visually-hidden">Retocede</span>
                </button>
                </div>
               
        </div>
     </div>
    );
}
export default content;