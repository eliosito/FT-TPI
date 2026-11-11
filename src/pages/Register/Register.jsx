import { Link, useLocation } from "wouter";
import { useState } from "react";
import api from "../../api.js"
import "./Register.css";

function Register() {

  async function register(nombre, apellido, dni, contrasena, email) {
    try {
      await api.post("usuarios", { nombre, apellido, dni, contrasena, email });
      const respuesta = await api.post("login", {email , contrasena})
      localStorage.setItem("token", respuesta.data.token);
      return true;
    } catch (error) {
      console.error(error.response?.status, error.response?.data);
      return false;
    }
  }



  const [, navigate] = useLocation()

  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    dni: "",
    password: "",
    email: ""
  })

  const [errores, setErrores] = useState({});


  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validacionesErrores = validacion();
    if (Object.keys(validacionesErrores).length > 0) {
      setErrores(validacionesErrores);
      return;
    }

    const ok = await register(form.nombre, form.apellido, form.dni, form.password, form.email);

    if (ok) {
      setErrores({});
      navigate("/", { replace: true});
    } else {
      setErrores({ general: "Credenciales incorrectas" });
    }
  };


  const validacion = () => {
    let newErrores = {};
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
              <label htmlFor="dni">DNI</label>
              <input
                id="dni"
                type="text"
                name="dni"
                placeholder="Ingresá tu DNI"
                onChange={handleChange}
                value={form.dni}
              />
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
