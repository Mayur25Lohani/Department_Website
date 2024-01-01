import React from 'react'
import Nav from './components/nav/Nav'

import Cover from './components/cover/cover'
import Footer from './components/footer/Footer'
import Resources from './components/resources/Resources'
import Contact from './components/contact/Contact'

const App = () => {
  return (
    <>
    <Nav/>
    <Cover/>
    <Resources />
    <Contact />
    <Footer />
    </>
  )
}

export default App