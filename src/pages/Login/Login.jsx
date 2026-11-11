import { useLocation, Link } from "wouter";
import { useState } from "react";
import api from "../../api.js"
import "./Login.css";

function Login() {

  async function login(nombre, contrasena) {
    try {
      const respuesta = await api.post("login", { nombre, contrasena});
      localStorage.setItem("token", respuesta.data.token);
      return true;
    }  catch (error){
      console.error(error.response?.status, error.response?.data);
      return false;
  }
    
  }

  const [, navigate] = useLocation()
  
  const [form , setForm ] = useState({
    nombre: "",
    password: ""
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

  const ok = await login(form.nombre, form.password);

  if (ok) {
    setErrores({});
    navigate("/");
  } else {
    setErrores({ general: "Credenciales incorrectas" });
  }
};

    const validacion = () => {
    let newErrores ={};
    if (!form.nombre) {
      newErrores.nombre = "El nombre es obligatorio";
    }

    if (!form.password) {
      newErrores.password = "La contraseña es obligatoria";
    }

    return newErrores;
  }



  return (
    <main className="login-container">

      {/* Panel izquierdo: formulario */}
      <section className="login-form-section">

        <div className="login-content">

          <header className="login-header">
            <h1>
              Bienvenido a
              <br />
              WickHub!
            </h1>

            <h2>Iniciar Sesión</h2>
          </header>

          <form className="login-form" onSubmit={handleSubmit}>

            <div className="form-group">
              <label htmlFor="nombre">nombre</label>
              <input
                type="nombre"
                name="nombre"
                placeholder="Ingresá tu nombre"
                onChange={handleChange}
                value={form.nombre}
              />

              {errores.email && <span className="error">{errores.nombre}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="contrasena">Contraseña</label>
              <input
                type="password"
                name="password"
                placeholder="Ingresá tu contraseña"
                onChange={handleChange}
                value={form.password}
              />

              {errores.password && <span className="error">{errores.password}</span>}
3000
            </div>
              {errores.general && <span className="error">{errores.general}</span>}


            <div className="login-options">
              <label className="remember-option">
                <input type="checkbox" />
                <span>Recordar contraseña</span>
              </label>

              <a href="#" className="forgot-password">
                ¿Olvidaste tu contraseña?
              </a>
            </div>

            <button type="submit" className="login-button">
              Entrar <span>→</span>
            </button>

            <p className="register-text">
              ¿Todavía no tenés cuenta?{" "}
              <Link to='/register'>Creala acá</Link>

            </p>

          </form>

          <div className="social-login">
            <p>O iniciá sesión con</p>

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

      {/* Panel derecho: espacio para futuras imágenes */}
      <section className="login-visual-section">

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

export default Login;
