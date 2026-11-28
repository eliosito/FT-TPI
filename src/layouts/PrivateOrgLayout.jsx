import React from 'react'
import HeaderOrg from '../components/Organizadores/HeaderOrg'
import SidebarOrg from '../components/Organizadores/SidebarOrg'
import "./PrivateOrgLayout.css"

function PrivateOrgLayout({ children }) {
  return (
    <div className="orgLayout">
      <SidebarOrg />

      <div className="orgLayout-columna">
        <HeaderOrg />

        <main className="orgLayout-contenido">
          {children}
        </main>
      </div>
    </div>
  )
}

export default PrivateOrgLayout