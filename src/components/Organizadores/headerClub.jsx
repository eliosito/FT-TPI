import { Link } from "wouter";
import "./HeaderClub.css";

import { FaRegUserCircle } from "react-icons/fa";

import { LuShoppingCart } from "react-icons/lu";

import { IoSearch } from "react-icons/io5";

import { useLocation } from "wouter";

import { getUsuario } from "../../auth";


function HeaderClub() {
    const [, navigate] = useLocation()
    const usuario = getUsuario();
    
    function CerrarSesion  () {   
        localStorage.removeItem("token")
        navigate("/privado/login")
        

    }
    return (
        <header className="wick-header2">
            <div className="header-container2">


                <div className="header-logo2">
                    WickClub
                </div>

                <nav className="header-nav2">
                    <Link href="/privado/">Home</Link>
                    <button onClick={CerrarSesion} > Cerrar Sesion</button>
                </nav>

                <div className="header-icons2">
                    <LuShoppingCart />



                    <IoSearch />
                    {usuario && <span>Bienvenido {usuario.nombre}</span>}
                    <FaRegUserCircle />



                </div>

            </div>
        </header>
    );
}

export default HeaderClub;
