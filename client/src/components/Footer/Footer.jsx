import { Link } from "react-router-dom"
import { UpArrow } from "../Icons/Svg";

import "./Footer.css"

function Footer() {
  return (
    <footer className="footer">
        <div className="goUp">
            <a href="#header" className="goUpLink">
                <UpArrow />
            </a>
        </div>
        <div className="footerLinks">
            <article className="footerArticle">
                <Link>Mis compras</Link>
                <Link>Soporte</Link>
                <Link>Envíos</Link>
                <Link>Condiciones de uso</Link>
            </article>

            <article className="footerArticle">
                <Link>Mi cuenta</Link>
                <Link>Reportar</Link>
                <Link>Políticas</Link>
                <Link>Contactar</Link>
            </article>
        </div>
        <div className="footerAbout">
            <Link>Iniciar sesión</Link>
            <div className="copyRight">
            <small>©Copyright - For It inc.</small>
            </div>
        </div>
    </footer>
  )
}

export default Footer