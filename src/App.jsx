import { useState } from 'react'
import { Route, Switch } from "wouter";
import './App.css'
import Login from './pages/Login/Login'
import Home from './pages/Home'
import Publicaciones from './pages/Publicaciones';
import Rastro from './pages/Rastro';
import Header from './components/Header';
import PublicLayout from './layouts/PublicLayout';
import NoEncontrada from './pages/NoEncontrada';
import AuthLayout from './layouts/AuthLayout';

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
          <PublicLayout>
            <Rastro />
          </PublicLayout>
        </Route>


        <Route path="/login">
          <AuthLayout>
            <Login/>
          </AuthLayout>
        </Route>

        <Route>
          <NoEncontrada/>
        </Route>


      </Switch>
    </>
  )
}

export default App
