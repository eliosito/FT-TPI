import React from 'react'
import ProximosEventos from '../secciones/ProximosEventos'
import Destacados from '../secciones/Destacados'
import Publicaciones from '../secciones/Publicaciones'
import UltimosEventos from '../secciones/UltimosEventos'
import CarruselEventos from '../secciones/CarrouselEventos'
import CarruselPublicacion from '../secciones/CarrouselPublicaciones'

export default function Home() {
  return (
    <div>
      <ProximosEventos/>

      <CarruselEventos/>

      <Destacados/>

      <UltimosEventos/>

      <CarruselPublicacion/>
    
      <Publicaciones/>


    </div>
  )
}
