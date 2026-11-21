import { useState } from 'react'
import { Route, Switch } from "wouter";
import './App.css'
import Login from './pages/Clients/Login/Login'
import Register from './pages/Clients/Register/Register'
import Home from './pages/Clients/Home'
import Publicaciones from './pages/Clients/Publicaciones';
import Rastro from './pages/Clients/Rastro';
import PerfilOrganizacion from './pages/Clients/PerfilOrganizacion/PerfilOrganizacion';

import PublicLayout from './layouts/PublicLayout';
import NoEncontrada from './pages/Clients/NoEncontrada';
import AuthLayout from './layouts/AuthLayout';
import RutaProtegida from './components/RutaProtegida';
import RutaPublica from './components/RutaPublica';

function App() {


  return (
    <>

      <Switch>
        <Route path="/">
          <PublicLayout>
            <Home />
          </PublicLayout>
        </Route>

        <Route path="/publicaciones">
          <PublicLayout>
            <Publicaciones />
          </PublicLayout>
        </Route>

        <Route path="/rastro">
          <RutaProtegida roles={["admin"]}>
            <PublicLayout>
              <Rastro />
            </PublicLayout>
          </RutaProtegida>

        </Route>


        <Route path="/login">
          <RutaPublica>
            <AuthLayout>
              <Login />
            </AuthLayout>
          </RutaPublica>

        </Route>

        <Route path="/register">
          <RutaPublica>
            <AuthLayout>
              <Register />
            </AuthLayout>

          </RutaPublica>

        </Route>

        <Route path="/organizacion/:id">
          <PublicLayout>
            <PerfilOrganizacion />
          </PublicLayout>
        </Route>

        <Route>
          <NoEncontrada />
        </Route>


      </Switch>
    </>
  )
}

export default App
