import { Link } from "wouter";
import "./Header.css";

import { FaRegUserCircle } from "react-icons/fa";

import { LuShoppingCart } from "react-icons/lu";

import { IoSearch } from "react-icons/io5";

import { useLocation } from "wouter";

import { getUsuario } from "../../auth";

function Header() {
    const [, navigate] = useLocation()
    const usuario = getUsuario();

    function CerrarSesion() {
        localStorage.removeItem("token")
        navigate("/publico/login")


    }
    return (
        <header className="wick-header">
            <div className="header-container">


                <div className="header-logo">
                    WickHub
                </div>

                <nav className="header-nav">
                    <Link href="/">Home</Link>
                    <Link href="/publico/publicaciones">Publicaciones</Link>
                    <Link href="/publico/rastro">Mi rastro</Link>

                    {usuario ? (
                        <button onClick={CerrarSesion} > Cerrar Sesion</button>

                    ) : (
                        <button onClick={CerrarSesion} > Iniciar sesion</button>
                    )}


                </nav>

                <div className="header-icons">
                    <LuShoppingCart />



                    <IoSearch />

                    {usuario && <span>Bienvenido {usuario.nombre}</span>}
                    <FaRegUserCircle />



                </div>

            </div>
        </header>
    );
}

export default Header;
