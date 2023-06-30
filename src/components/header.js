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
                        <button>Almuerzos</button>
                    </a>

                    <a href="#1"><button>Tapeos</button></a>
                    <a href="#2"><button>Burguers</button></a>
                    <a href="#2"><button>Sandwichs</button></a>
                    <a href="#3"><button>Desayunos & Meriendas</button></a>
                    <a href="#4"><button>Pastelería & Postres</button></a>
                    <a href="#5"><button>Cafés & Bebidas</button></a>
                    <a href="#6"><button>Take Away</button></a>

                </nav>
            </div>
            <h1>Dedicados al buen café</h1>
            <BacktoTopButton></BacktoTopButton>
            <div className="iconUsina"><img src="images/logo_usina-removebg-preview.png" alt="logo"></img></div>
        </header>


    );
}