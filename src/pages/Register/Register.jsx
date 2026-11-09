import { Link, useLocation } from "wouter";
import { useState } from "react";
import "./Register.css";

function Register() {

  const [, navigate] = useLocation()
  
  const [form , setForm ] = useState({
    nombre: "",
    apellido: "",
    email: "",
    password: ""
  })

  const [errores, setErrores] = useState({});


  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const usuarioFalso = {
    email: "vulprasoft@gmail.com",
    password: "nicolasalvaradodeidad"
  }

  const autenticacionUsuario = () => {
    return (
      form.email === usuarioFalso.email &&
      form.password === usuarioFalso.password
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const validacionesErrores = validacion();

    // si hay 1 o mas errores se ejetuca lo siguiente y corta el formulario
    if (Object.keys(validacionesErrores).length > 0 ) {
      setErrores(validacionesErrores);
      return;
    }

    if (autenticacionUsuario()) {
        setErrores({});

       navigate("/");

    } else {
      setErrores({
        general: "Credenciales Incorrectas"
      })

    }
  }

    const validacion = () => {
    let newErrores ={};
    if (!form.nombre.trim()) {
      newErrores.nombre = "El nombre es obligatorio";
    }

    if (!form.apellido.trim()) {
      newErrores.apellido = "El apellido es obligatorio";
    }

    if (!form.email) {
      newErrores.email = "El email es obligatorio";
    }

    if (!form.password) {
      newErrores.password = "La contraseña es obligatoria";
    }

    return newErrores;
  }



  return (
    <main className="register-container">

      {/* Panel del formulario */}
      <section className="register-form-section">

        <div className="register-content">

          <header className="register-header">
            <h1>
              Registrate gratis
              <br />
              a WickHub!
            </h1>

            <h2>Registrarse</h2>
          </header>

          <form className="register-form" onSubmit={handleSubmit}>
            <div className="register-name-fields">
              <div className="form-group">
                <label htmlFor="nombre">Nombre</label>
                <input
                  id="nombre"
                  type="text"
                  name="nombre"
                  placeholder="Ingresá tu nombre"
                  onChange={handleChange}
                  value={form.nombre}
                />
                {errores.nombre && <span className="error">{errores.nombre}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="apellido">Apellido</label>
                <input
                  id="apellido"
                  type="text"
                  name="apellido"
                  placeholder="Ingresá tu apellido"
                  onChange={handleChange}
                  value={form.apellido}
                />
                {errores.apellido && <span className="error">{errores.apellido}</span>}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Correo</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Ingresá tu correo"
                onChange={handleChange}
                value={form.email}
              />

              {errores.email && <span className="error">{errores.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Ingresá tu contraseña"
                onChange={handleChange}
                value={form.password}
              />

              {errores.password && <span className="error">{errores.password}</span>}

            </div>
              {errores.general && <span className="error">{errores.general}</span>}


            <button type="submit" className="register-button">
              Registrarme <span>→</span>
            </button>

            <p className="register-text">
              ¿Ya tenés cuenta?{" "}
              <Link to='/login'>Inicía sesion acá</Link>
            </p>

          </form>

          <div className="social-register">
            <p>O registrate con</p>

            <div className="social-buttons">
              <button type="button" className="social-button">
                Google
              </button>

              <button type="button" className="social-button">
                Apple
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Panel visual */}
      <section className="register-visual-section">

        <div className="visual-message">
          <h2>
            Tu próxima noche
            <br />
            se reserva en WickHub
          </h2>
        </div>

      </section>

    </main>
  );
}

export default Register;
