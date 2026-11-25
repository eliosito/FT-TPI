import { Link } from "wouter";
import "./HeaderClub.css";

import { FaRegUserCircle } from "react-icons/fa";

import { LuShoppingCart } from "react-icons/lu";

import { IoSearch } from "react-icons/io5";

import { useLocation } from "wouter";

function HeaderClub() {
    const [, navigate] = useLocation()
    
    function CerrarSesion  () {   
        localStorage.removeItem("token")
        navigate("/privado/login")
        

    }
    return (
        <header className="wick-header">
            <div className="header-container">


                <div className="header-logo">
                    WickClub
                </div>

                <nav className="header-nav">
                    <Link href="/privado/">Home</Link>
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

export default HeaderClub;
