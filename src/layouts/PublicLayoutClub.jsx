import React from 'react'
import HeaderClub from '../components/Organizadores/headerClub'
function PublicLayoutClub({ children }) {
  return (
    <>
    <HeaderClub/>

    <main>
        {children}
    </main>

    </>

  )
}

export default PublicLayoutClub