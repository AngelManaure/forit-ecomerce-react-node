import { Link } from "react-router-dom";

import "./AuthPages.css"

function LoginPage() {

  return (
    <>
    <section className="authFormContainer">
        <h2>Ingresa tus datos para continuar</h2>
        <form className="authForm">
            
            <div className="authInputContainer">
            <label htmlFor="email">
                Correo electrónico
            </label>
                <input type="email" className="authFormInput" id="email" placeholder="ejemplo@ejemplo.com" />
            </div>

            <div className="authInputContainer">
            <label htmlFor="password">
                Contraseña
            </label>
                <input type="password" className="authFormInput" id="password" placeholder="********" />
            </div>

        <div className="redirectContainer">
            <p>Aún no tienes una cuenta? <Link to={"/register"}>registrarse</Link></p>
        </div>

            <div className="authButtonContainer">
                <button className="authButton">Iniciar sesión</button>
            </div>

        </form>

    </section>
    </>
  )
}

export default LoginPage