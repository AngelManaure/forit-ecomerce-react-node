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
                <Link to={"/my-shops"}>Mis compras</Link>
                <Link to={"/help"}>Soporte</Link>
                <Link to={"deliveries"}>Envíos</Link>
                <Link to={"/terms"}>Condiciones de uso</Link>
            </article>

            <article className="footerArticle">
                <Link to={"/account"}>Mi cuenta</Link>
                <Link to={"/report"}>Reportar</Link>
                <Link to={"/terms"}>Políticas</Link>
                <Link to={"/contact"}>Contactar</Link>
            </article>
        </div>
        <div className="footerAbout">
            <Link to={"/login"}>Iniciar sesión</Link>
            <div className="copyRight">
            <small>©Copyright - For It inc.</small>
            </div>
        </div>
    </footer>
  )
}

export default Footer