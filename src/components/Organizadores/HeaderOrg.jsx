import { Link } from "wouter";
import "./HeaderOrg.css";

import { useLocation } from "wouter";
import { getUsuario } from "../../auth";

import { IoSearch } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";

function HeaderOrg() {
    const [, navigate] = useLocation()
    const usuario = getUsuario();
    
    function CerrarSesion  () {   
        localStorage.removeItem("token")
        navigate("/privado/login")
        

    }
    return (
        <header className="wick-header3">
            <div className="header-container3">


                <div className="header-name3">
                    WickClub
                </div>

                <nav className="header-nav3">
                    <Link href="/privado/">Home</Link>
                    <button onClick={CerrarSesion} > Cerrar Sesion</button>
                </nav>

                <div className="header-icons3">

                    <IoSearch />
                    <FaRegUserCircle />
                    {usuario && <span>{usuario.nombre} {usuario.apellido}</span>}

                </div>

            </div>
        </header>
    );
}

export default HeaderOrg;
