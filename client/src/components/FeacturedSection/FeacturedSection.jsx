import { Link } from "react-router-dom"
import "./FeacturedSection.css"

function FeacturedSection() {
  return (
    <section className="feacturedSection">
        
        <div className="feacturedSectionUnderContainer">
            <h2>En descuento</h2>
            <div className="feacturedSectionUnder">
                <Link className="feacturedSectionCard">
                    <picture>
                        <img src="src\assets\wommens.jfif" alt="" />
                    </picture>
                    <span>Mujeres</span>
                </Link>

                <Link className="feacturedSectionCard">
                    <picture>
                        <img src="src\assets\hombres.jfif" alt="" />
                    </picture>
                    <span>Hombres</span>
                </Link>

                <Link className="feacturedSectionCard">
                    <picture>
                        <img src="src\assets\mascotas.jfif" alt="" />
                    </picture>
                    <span>Mascotas</span>
                </Link>

                <Link className="feacturedSectionCard">
                    <picture>
                        <img src="src\assets\juguetes.jfif" alt="" />
                    </picture>
                    <span>Juguetes</span>
                </Link>
            </div>
        </div>

    </section>
  )
}

export default FeacturedSection