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
  RightArrow,
  TruckIcon,
  ChatIcon,
} from "../Icons/Svg";

import "./Navbar.css";

function Navbar() {
  const {
    navActive,
    // cartActive,
    categoryActive,
    activeNav,
    // activeCart,
    activeCategory,
  } = useNav();

  return (
    <header className="header">
      <div className="topNavbar">
        <Link to={"/"} className="logoContainer">
          <img className="logo" src="src\assets\logo2.png" alt="logo" />
        </Link>

        <div className="rightIcons">
          <div>
            <CartIcon />
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
          <Link className="navLink navLinkIcon">
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

          <Link className="navLink">
            <h4>Envíos</h4>
          </Link>

          <Link className="navLink">
            <h4>Contactar</h4>
          </Link>

          <Link className="navLink">
            <h4>Categorías</h4>
          </Link>

          <Link className="navLink">
            <h4>Carrito</h4>
          </Link>

          <article className="navLinkUser">
            <Link>Mis compras</Link>
            <Link>Ayuda</Link>
            <Link>Políticas y condiciones de uso</Link>
          </article>
        </section>
      </nav>

      <div className="cartModal"></div>

      <div
        className={
          categoryActive === false ? "categoryModal" : "showCategoryModal"
        }
      >
        <ul className="categoryModalList">
          <li>
            <Link className="categoryModalLink">PC</Link>
          </li>
          <li>
            <Link className="categoryModalLink">Repuestos</Link>
          </li>
          <li>
            <Link className="categoryModalLink">Ropa</Link>
          </li>
          <li>
            <Link className="categoryModalLink">Muebles</Link>
          </li>
          <li>
            <Link className="categoryModalLink">Ver más</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
