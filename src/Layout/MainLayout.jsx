import React from 'react'
import Header from '../components/Header/header'

function MainLayout({ page }) {
   return (
      <>
         <Header />
         {/* main */}
         {page}
         {/* main */}
      </>
   )
}

export default MainLayout
