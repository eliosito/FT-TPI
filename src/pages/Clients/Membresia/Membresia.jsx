import { useState } from "react";
import { useLocation } from "wouter";
import { comprarMembresia } from  "../../../services/menbresia"
import "./Membresia.css";

const PRECIO = "$15.000";

function Membresia() {
    const [, navigate] = useLocation();

    const [form, setForm] = useState({
        titular: "",
        numero: "",
        vencimiento: "",
        cvv: ""
    });
    const [errores, setErrores] = useState({});
    const [procesando, setProcesando] = useState(false);

    const handleChange = (e) => {
        let { name, value } = e.target;

        // formatos: 1234 5678 9012 3456 / MM/AA / solo números en el código
        if (name === "numero") {
            value = value.replace(/\D/g, "").slice(0, 16).replace(/(.{4})/g, "$1 ").trim();
        }
        if (name === "vencimiento") {
            value = value.replace(/\D/g, "").slice(0, 4);
            if (value.length > 2) {
                value = value.slice(0, 2) + "/" + value.slice(2);
            }
        }
        if (name === "cvv") {
            value = value.replace(/\D/g, "").slice(0, 4);
        }

        setForm({ ...form, [name]: value });
    };

    const validacion = () => {
        const nuevosErrores = {};

        if (!form.titular.trim()) {
            nuevosErrores.titular = "El nombre del titular es obligatorio";
        }

        if (form.numero.replace(/\s/g, "").length !== 16) {
            nuevosErrores.numero = "El número debe tener 16 dígitos";
        }

        if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(form.vencimiento)) {
            nuevosErrores.vencimiento = "Usá el formato MM/AA";
        }

        if (form.cvv.length < 3) {
            nuevosErrores.cvv = "Código inválido";
        }

        return nuevosErrores;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const nuevosErrores = validacion();
        if (Object.keys(nuevosErrores).length > 0) {
            setErrores(nuevosErrores);
            return;
        }

        setErrores({});
        setProcesando(true);

        try {

            await new Promise((resolver) => setTimeout(resolver, 1500));
            
            const datos = await comprarMembresia();
            localStorage.setItem("token", datos.token)
            navigate("/public/crear-organizacion", { replace: true });
        } catch (error) {
            console.error(error.response?.status, error.response?.data);
            setErrores({ general: "No se pudo procesar el pago. Intentá de nuevo." });
        } finally {
            setProcesando(false);
        }
    };

    return (
        <main className="membresia-container">

            <section className="membresia-plan">
                <h1>Hacete socio de WickHub</h1>
                <p className="membresia-subtitulo">
                    Creá tu organización y publicá tus eventos.
                </p>

                <div className="membresia-precio">
                    <span className="membresia-monto">{PRECIO}</span>
                    <span className="membresia-periodo">por mes</span>
                </div>

                <ul className="membresia-beneficios">
                    <li>Creá tu organización</li>
                    <li>Publicá y gestioná tus eventos</li>
                    <li>Sumá a tu equipo como miembros</li>
                    <li>Panel privado de administración</li>
                </ul>
            </section>
            <section className="membresia-pago">
                <h2>Datos de pago</h2>

                <form className="membresia-form" onSubmit={handleSubmit}>

                    <div className="membresia-campo">
                        <label htmlFor="titular">Nombre del titular</label>
                        <input
                            id="titular"
                            type="text"
                            name="titular"
                            autoComplete="cc-name"
                            placeholder="Como figura en la tarjeta"
                            value={form.titular}
                            onChange={handleChange}
                        />
                        {errores.titular && <span className="membresia-error">{errores.titular}</span>}
                    </div>

                    <div className="membresia-campo">
                        <label htmlFor="numero">Número de tarjeta</label>
                        <input
                            id="numero"
                            type="text"
                            name="numero"
                            inputMode="numeric"
                            autoComplete="cc-number"
                            placeholder="0000 0000 0000 0000"
                            value={form.numero}
                            onChange={handleChange}
                        />
                        {errores.numero && <span className="membresia-error">{errores.numero}</span>}
                    </div>

                    <div className="membresia-fila">
                        <div className="membresia-campo">
                            <label htmlFor="vencimiento">Vencimiento</label>
                            <input
                                id="vencimiento"
                                type="text"
                                name="vencimiento"
                                inputMode="numeric"
                                autoComplete="cc-exp"
                                placeholder="MM/AA"
                                value={form.vencimiento}
                                onChange={handleChange}
                            />
                            {errores.vencimiento && <span className="membresia-error">{errores.vencimiento}</span>}
                        </div>

                        <div className="membresia-campo">
                            <label htmlFor="cvv">Código de seguridad</label>
                            <input
                                id="cvv"
                                type="password"
                                name="cvv"
                                inputMode="numeric"
                                autoComplete="cc-csc"
                                placeholder="123"
                                value={form.cvv}
                                onChange={handleChange}
                            />
                            {errores.cvv && <span className="membresia-error">{errores.cvv}</span>}
                        </div>
                    </div>

                    {errores.general && <span className="membresia-error">{errores.general}</span>}

                    <button type="submit" className="membresia-boton" disabled={procesando}>
                        {procesando ? "Procesando pago..." : `Pagar ${PRECIO}`}
                    </button>

                    <p className="membresia-aviso">
                        Pago de prueba: no se realiza ningún cobro real.
                    </p>

                </form>
            </section>

        </main>
    );
}

export default Membresia;