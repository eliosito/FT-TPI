import React from 'react'
import Header from '../components/Clients/Header'
function PublicLayouts({ children }) {
  return (
    <>
    <Header/>

    <main>
        {children}
    </main>

    </>

  )
}

export default PublicLayouts