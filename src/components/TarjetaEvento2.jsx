import "./TarjetaEvento2.css";

const meses = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];

function TarjetaEvento2({ imagen, nombre, lugar, fecha, hora, agotado }) {
    // fecha llega como "2000-01-30"
    const [anio, mesNumero, diaNumero] = fecha.slice(0, 10).split("-");
    const dia = Number(diaNumero);
    const mes = meses[Number(mesNumero) - 1];

    // hora llega como "21:00:00" (si no hay hora, no se muestra ese bloque)
    let horas = "";
    let minutos = "";
    if (hora) {
        [horas, minutos] = hora.split(":");
    }

    return (
        <article className="te2">

            <div className="te2-imagen">
                <img src={imagen} alt={nombre} />
                {agotado && <span className="te2-cinta">Agotado</span>}
            </div>

            <p className="te2-lugar">📍 {lugar}</p>

            <h3 className="te2-nombre">{nombre}</h3>

            <div className="te2-fecha">
                <div className="te2-bloque">
                    <span className="te2-numero">{dia}</span>
                    <span className="te2-detalle">
                        <span>{mes}</span>
                        <span>{anio}</span>
                    </span>
                </div>

                {hora && (
                    <>
                        <span className="te2-separador"></span>
                        <div className="te2-bloque">
                            <span className="te2-numero">{horas}</span>
                            <span className="te2-detalle">
                                <span>{minutos}</span>
                                <span>hrs</span>
                            </span>
                        </div>
                    </>
                )}
            </div>

        </article>
    );
}

export default TarjetaEvento2;