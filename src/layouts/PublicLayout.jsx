import React from 'react'
import Header from '../components/Header'

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