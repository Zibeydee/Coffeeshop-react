import React, { Children } from 'react'
import Header from '../Header/Header'
import MainContent from '../MainContent/MainContent'
import Footer from '../Footer/Footer'

function Layout({children}) {
  return (
    <div>
        <Header/>
        <MainContent>
            {children}
        </MainContent>
        <Footer/>
    </div>
  )
}

export default Layout