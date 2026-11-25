import { useState } from 'react'
import { Route, Switch } from "wouter";
import './App.css'
import Login from './pages/Clients/Login/Login'
import LoginClub from './pages-Club/Login/LoginClub';
import Register from './pages/Clients/Register/Register'
import Home from './pages/Clients/Home'
import HomeClub from './pages-Club/Home';
import Publicaciones from './pages/Clients/Publicaciones';
import Rastro from './pages/Clients/Rastro';
import PerfilOrganizacion from './pages/Clients/PerfilOrganizacion/PerfilOrganizacion';
import { Redirect } from 'wouter';
import PublicLayout from './layouts/PublicLayout';
import PublicLayoutClub from './layouts/PublicLayoutClub';
import NoEncontrada from './pages/Clients/NoEncontrada';
import AuthLayout from './layouts/AuthLayout';


import RutaProtegida from './components/RutaProtegida';
import RutaPublica from './components/RutaPublica';
import RutaProtegidaClub from './components/RutaProtegidaClub';
import RutaPublicaClub from './components/RutaPublicaClub';

function App() {


  return (
    <>
      <Switch>
                <Route path="/">
        <Redirect to="/publico/" />
      </Route>


        {/* RUTAS PÚBLICAS */}

        <Route path="/publico/">
          <PublicLayout>
            <Home />
          </PublicLayout>
        </Route>

        <Route path="/publico/publicaciones">
          <PublicLayout>
            <Publicaciones />
          </PublicLayout>
        </Route>

        <Route path="/publico/rastro">
          <RutaProtegida roles={["admin"]}>
            <PublicLayout>
              <Rastro />
            </PublicLayout>
          </RutaProtegida>
        </Route>

        <Route path="/publico/login">
          <RutaPublica>
            <AuthLayout>
              <Login />
            </AuthLayout>
          </RutaPublica>
        </Route>

        <Route path="/publico/register">
          <RutaPublica>
            <AuthLayout>
              <Register />
            </AuthLayout>
          </RutaPublica>
        </Route>

          <Route path="/publico/organizacion/:id">
          <PublicLayout>
            <PerfilOrganizacion />
          </PublicLayout>
        </Route>











        <Route path="/privado/login">

          <RutaPublicaClub>
            <AuthLayout>
              <LoginClub />
            </AuthLayout>
          </RutaPublicaClub>
        </Route>

        <Route path="/privado/">
          <RutaProtegidaClub roles={["admin"]}>
            <PublicLayoutClub>
              <HomeClub />
            </PublicLayoutClub>
          </RutaProtegidaClub>
        </Route>










        <Route>
          <NoEncontrada />
        </Route>

      </Switch>
    </>
  )
}

export default App
