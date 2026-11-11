import { Link } from "wouter";
import "./Header.css";

import { FaRegUserCircle } from "react-icons/fa";

import { LuShoppingCart } from "react-icons/lu";

import { IoSearch } from "react-icons/io5";


function Header() {
    function CerrarSesion  () {   
        localStorage.removeItem("token")

    }
    return (
        <header className="wick-header">
            <div className="header-container">


                <div className="header-logo">
                    WickHub
                </div>

                <nav className="header-nav">
                    <Link href="/">Home</Link>
                    <Link href="/publicaciones">Publicaciones</Link>
                    <Link href="/rastro">Mi rastro</Link>
                    <button onClick={CerrarSesion} > Cerrar Sesion</button>
                </nav>

                <div className="header-icons">
                    <LuShoppingCart />



                    <IoSearch />
                    <FaRegUserCircle />



                </div>

            </div>
        </header>
    );
}

export default Header;
