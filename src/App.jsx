import { useState } from 'react'
import {Route, Switch } from "wouter";
import './App.css'
import Login from './pages/Login'
import Home from './pages/Home'
import Publicaciones from './pages/Publicaciones';
import Rastro from './pages/Rastro';

function App() {


  return (
    <>
        <Switch>
            <Route path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/publicaciones" component={Publicaciones} />
            <Route path="/rastro" component={Rastro} />


        </Switch>
    </>
  )
}

export default App
