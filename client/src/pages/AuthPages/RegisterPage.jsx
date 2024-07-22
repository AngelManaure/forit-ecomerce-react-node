import { Link } from "react-router-dom";

import "./AuthPages.css";

function RegisterPage() {
  return (
    <>
      <section className="authFormContainer">
        <h2>Ingresa tus datos para continuar</h2>
        <form className="authForm">
          <div className="authInputContainer">
            <label htmlFor="username">Nombre y apellido</label>
            <input type="text" id="username" />
          </div>

          <div className="authInputContainer">
            <label htmlFor="email">Correo electrónico</label>
            <input type="email" id="email" placeholder="ejemplo@ejemplo.com"/>
          </div>

          <div className="authInputContainer">
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" placeholder="********"/>
          </div>

          <div className="redirectContainer">
            <p>
              Ya tienes una cuenta? <Link to={"/login"}>Inicia sesión</Link>
            </p>
          </div>

          <div className="authButtonContainer">
            <button className="authButton">Registrarse</button>
          </div>
        </form>
        <div className="authTermsContainer">
          <input type="checkbox" id="terms-accept" />
          <label htmlFor="terms-accept">
            Accepto las <Link>Condiciones de uso</Link> y el{" "}
            <Link>Aviso de Privacidad</Link>
          </label>
        </div>
      </section>
    </>
  );
}

export default RegisterPage;
