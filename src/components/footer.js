import React from "react";
import '../stylesheets/footer.css'
import { AiOutlineFacebook, AiOutlineInstagram} from "react-icons/ai";
export default function Footer() {
    return (
        <footer>
            <div><h4>Encontranos en:</h4></div>
            <div><h4>Abierto de:</h4></div>
            <div><h4>E-mail:</h4></div>
            <div><h4>Nuestras Redes:</h4></div>
            <div>
                <p>Palermo Hollywood
                    <br />Recoleta
                    <br />San Isidro
                    <br />Villa Crespo
                    <br />Villa Urquiza
                    <br />Cañitas
                    <br />Caballito
                </p>
            </div>
            <div>
                <p>Lunes a Domingos
                    <br />de 8:30 - 21:00
                </p>
            </div>
            <div>
                info@usinacafetera.com.ar
            </div>
            <div>
                <a href="https://www.facebook.com/UsinaCafetera/?locale=es_LA" target="_blank" rel="noreferrer">
                    <AiOutlineFacebook className="icon-facebook icon" />
                </a>
                <a href="https://www.instagram.com/usinacafetera/?hl=es" target="_blank" rel="noreferrer">
                    <AiOutlineInstagram className="icon-instagram icon" />
                </a>
            </div>
        </footer>
    );
}