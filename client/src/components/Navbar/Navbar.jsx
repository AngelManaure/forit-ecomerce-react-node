import { Link } from "react-router-dom";

import { useNav } from "../../context/NavContext";

import {
  CartIcon,
  MenuIcon,
  SearchIcon,
  DownArrow,
  UpArrow,
  HomeIcon,
  CloseIcon,
  AccountIcon,
} from "../Icons/Svg";

import "./Navbar.css";

function Navbar() {
  const {
    navActive,
    cartActive,
    categoryActive,
    activeNav,
    activeCart,
    activeCategory,
  } = useNav();

  return (
    <header className="header" id="header">
      <div className="topNavbar">
        <Link to={"/"} className="logoContainer">
          <img className="logo" src="src\assets\logo2.png" alt="logo" />
        </Link>

        <div className="rightIcons">
          <div onClick={activeCart}>
            <CartIcon id='cart'/>
            <label htmlFor="cart" className="cartCount">0</label>
          </div>
          <div onClick={activeNav}>
            <MenuIcon />
          </div>
        </div>
      </div>
      <div className="downContainer">
        <div className="searchContainer">
          <input type="text" />
          <div>
            <SearchIcon />
          </div>
        </div>
        <div className="categoryContainer" onClick={activeCategory}>
          <h3>Categorías</h3>
          <div>{categoryActive === false ? <DownArrow /> : <UpArrow />}</div>
        </div>
      </div>

      <nav className={navActive === false ? "navModal" : "showNavModal"}>
        <div className="navModalFilter">
          <picture onClick={activeNav}>
            <CloseIcon />
          </picture>
        </div>
        <section className="navContainer">
          <header className="navHeader">
            <picture>
              <img className="navLogo" src="src\assets\logo2.png" alt="logo" />
            </picture>
            <Link to={"/"} className="navHomeIcon">
              <HomeIcon />
            </Link>
          </header>
          <Link to={"/login"} className="navLink navLinkIcon" onClick={activeNav}>
            <h3>Iniciar sesión</h3>
            <picture>
              <AccountIcon />
            </picture>
          </Link>

          <article className="navLinksUl">
            <h4>Más buscados</h4>
            <ul>
              <li>
                <Link>Laptos</Link>
              </li>

              <li>
                <Link>Ropa para damas</Link>
              </li>

              <li>
                <Link>Iphone</Link>
              </li>

              <li>
                <Link>Juguetes para gatos</Link>
              </li>
            </ul>
          </article>

          <Link className="navLink" to={"/deliveries"}>
            <h4>Envíos</h4>
          </Link>

          <Link className="navLink" to={"/contact"}>
            <h4>Contactar</h4>
          </Link>

          <Link className="navLink" to={"/categories"}>
            <h4>Categorías</h4>
          </Link>

          <Link className="navLink" to={"/cart"}>
            <h4>Carrito</h4>
          </Link>

          <article className="navLinkUser">
            <Link to={"/my-shops"}>Mis compras</Link>
            <Link to={"/help"}>Ayuda</Link>
            <Link to={"/terms"}>Políticas y condiciones de uso</Link>
          </article>
        </section>
      </nav>

      <div className={cartActive === false ? "cartModal" : "showCartModal"}>
        <div className="closeCartModal" onClick={activeCart}>
          <CloseIcon />
        </div>
        <ul className="cartProductList">
          <li className="cartProduct">
            <article>
              <div>
              <picture>
                <img src="src\assets\laptop.jfif" alt="image" />
                <label htmlFor="" className="productListCount">1</label>
              </picture>

              <div className="productDataList">
              <Link to={""}>Light Laptop Computer PC</Link>
              <label htmlFor="">16RAM - 128GB</label>
              </div>
              </div>
              <span className="productListAmount">64,00 $</span>
            </article>
          </li>

            <li className="cartProduct">
            <article>
              <div>
              <picture>
                <img src="src\assets\gato.png" alt="image" />
                <label htmlFor="" className="productListCount">1</label>
              </picture>

              <div className="productDataList">
              <Link>Juego para gatos</Link>
              <label htmlFor="">Pelotas de agua</label>
              </div>
              </div>
              <span className="productListAmount">7,50 $</span>
            </article>
            </li>

            <li className="cartProduct">
            <article>
              <div>
              <picture>
                <img src="src\assets\vestido-dama.jfif" alt="image" />
                <label htmlFor="" className="productListCount">1</label>
              </picture>

              <div className="productDataList">
              <Link>Vestido Anthropologie</Link>
              <label htmlFor="">Talla M</label>
              </div>
              </div>
              <span className="productListAmount">64,00 $</span>
            </article>
            </li>
        </ul>
        <form className="productCuponForm">
          <input type="text" />
          <button>Usar</button>
        </form>
        <div className="totalCartCount">
          <span className="sendInfotTotalCart"><h3>Subtotal</h3> <span>135,50 $</span></span>
          <div className="sendInfo">
            <span>Envíos</span>
            <span>Calcular en el siguiente paso</span>
          </div>
          <div className="infoTotalCart">
            <h3>Total</h3>
            <div className="totalcartAmount">
            <span className="payCoin">USD</span>
            <span className="totalCountUSD">135,50 $</span>
              </div>
          </div>
        </div>
              <button className="payCartButton">Pagar</button>          
      </div>

      <div
        className={
          categoryActive === false ? "categoryModal" : "showCategoryModal"
        }
      >
        <ul className="categoryModalList">
          <li>
            <Link to={"/categories/pc"} className="categoryModalLink">PC</Link>
          </li>
          <li>
            <Link to={"/categories/repuestos"} className="categoryModalLink">Repuestos</Link>
          </li>
          <li>
            <Link to={"/categories/ropa"} className="categoryModalLink">Ropa</Link>
          </li>
          <li>
            <Link to={"/categories/mueblres"} className="categoryModalLink">Muebles</Link>
          </li>
          <li>
            <Link to={"/categories"} className="categoryModalLink">Ver más</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
