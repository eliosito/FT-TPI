import React from 'react'
import ProximosEventos from '../../secciones/Clients/ProximosEventos'
import Destacados from '../../secciones/Clients/Destacados'
import Publicaciones from '../../secciones/Clients/Publicaciones'
import UltimosEventos from '../../secciones/Clients/UltimosEventos'
import CarruselEventos from '../../secciones/Clients/CarrouselEventos'
import CarruselPublicacion from '../../secciones/Clients/CarrouselPublicaciones'

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
