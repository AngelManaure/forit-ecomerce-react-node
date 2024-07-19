import { createContext, useState, useContext } from "react";

export const NavContext = createContext();

export const useNav = () => {
    const context = useContext(NavContext);
    if (!context) {
        throw new Error("useNav deberia estar dentro de un NavProvider")
    } else {
        return context
    }
};

export const NavProvider = ({ children }) => {
    const [navActive, setNavActive] = useState(false);
    const [cartActive, setCartActive] = useState(false);
    const [categoryActive, setCategoryActive] = useState(false);

    const activeNav = () => {
        navActive === false
        ? setNavActive(true)
        : setNavActive(false)
    }

    const activeCart = () => {
        cartActive === false
        ? setCartActive(true)
        : setCartActive(false)
    }

    const activeCategory = () => {
        categoryActive === false
        ? setCategoryActive(true)
        : setCategoryActive(false)
    }
    
      return (
        <NavContext.Provider
            value={{
                navActive,
                cartActive,
                categoryActive,
                activeNav,
                activeCart,
                activeCategory,
            }}
        >
            { children }
        </NavContext.Provider>
      )
}