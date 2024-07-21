import { Link } from "react-router-dom";

import "./LoginSection.css"

function LoginSection() {
  return (
    <section className="LoginSection">
      <h1>Registrate para tener una mejor experiencia!</h1>
      <div>
      <Link className="registerLoginSection">Registrarse</Link>
      </div>
      <p>Ya tienes una cuenta? <Link className="accountRedirect">Iniciar sesión</Link></p>
    </section>
  )
}

export default LoginSection