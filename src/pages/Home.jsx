import React from 'react'
import ProximosEventos from '../secciones/ProximosEventos'
import Destacados from '../secciones/Destacados'
import Publicaciones from '../secciones/Publicaciones'

export default function Home() {
  return (
    <div>
      <ProximosEventos/>

      <Destacados/>
    
      <Publicaciones/>

    </div>
  )
}
