import React from "react";
import '../stylesheets/header.css';
import BacktoTopButton from "./BacktoTopButton";
export default function Header() {
    return (
        <header>
            <img
                className="img-sliderprincipal"
                src="./images/sliderprincipal.jpg"
                alt="imagen-cafe">
            </img>
            <div className="nav-container">
                <nav>
                    <a href="#0">
                        <div className="navegacion">Almuerzos</div>
                    </a>
                    <a href="#1">
                        <div className="navegacion">Tapeos</div>
                    </a>
                    <a href="#2">
                        <div className="navegacion">Burguers</div>
                    </a>
                    <a href="#2">
                        <div className="navegacion">Sandwichs</div>
                    </a>
                </nav>
                <nav>
                    <a href="#3">
                        <div className="navegacion">Desayunos & Meriendas</div>
                    </a>
                    <a href="#4">
                        <div className="navegacion">Pastelería & Postres</div>
                    </a>
                    <a href="#5">
                        <div className="navegacion">Cafés & Bebidas Frías</div>
                    </a>
                    <a href="#6">
                        <div className="navegacion">Take Away</div>
                    </a>
                </nav>
            </div>
            <h1>Dedicados al buen café</h1>
            <BacktoTopButton></BacktoTopButton>
            <div className="iconUsina"><img src="images/logo_usina-removebg-preview.png" alt="logo"></img></div>
        </header>


    );
}