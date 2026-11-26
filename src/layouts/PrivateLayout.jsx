import React from 'react'
import HeaderClub from '../components/Organizadores/headerClub'
function PrivateLayout({ children }) {
  return (
    <>
      <HeaderClub />

      <main>
        {children}
      </main>


    </>
  )
}
export default PrivateLayout