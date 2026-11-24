import { useLocation } from "wouter";
import { useState } from "react";
import api from "../../api.js";
import "./Login.css";

function LoginClub() {
  async function login(email, contrasena) {
    try {
      const respuesta = await api.post("login", { email, contrasena });
      localStorage.setItem("token", respuesta.data.token);
      return true;
    } catch (error) {
      console.error(error.response?.status, error.response?.data);
      return false;
    }
  }

  const [, navigate] = useLocation();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errores, setErrores] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validacion = () => {
    let newErrores = {};
    if (!form.email) {
      newErrores.email = "El correo es obligatorio";
    }

    if (!form.password) {
      newErrores.password = "La contraseña es obligatoria";
    }

    return newErrores;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validacionesErrores = validacion();
    if (Object.keys(validacionesErrores).length > 0) {
      setErrores(validacionesErrores);
      return;
    }

    const ok = await login(form.email, form.password);

    if (ok) {
      setErrores({});
      navigate("/privado/", { replace: true });
    } else {
      setErrores({ general: "Credenciales incorrectas" });
    }
  };

  return (
    <main className="login-container">
      <section className="login-card">
        <header className="login-header">
          <h1>WickClub</h1>
        </header>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Correo</label>
            <input
              id="email"
              type="email"
              name="email"
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
              onChange={handleChange}
              value={form.password}
            />
            {errores.password && (
              <span className="error">{errores.password}</span>
            )}
          </div>

          {/* Caja "No soy un Robot" (solo visual) */}
          <div className="captcha-box">
            <label className="captcha-check">
              <input type="checkbox" />
              No soy un Robot
            </label>
          </div>

          {errores.general && <span className="error">{errores.general}</span>}

          <button type="submit" className="login-button">
            Acceder
          </button>
        </form>
      </section>
    </main>
  );
}

export default LoginClub;