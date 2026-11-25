import React from 'react'
import HeaderClub from '../components/Club/headerClub'
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