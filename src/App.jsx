import React, { Component } from 'react'
import Nav from './components/nav/Nav'
import Cover from './components/cover/cover'
import Footer from './components/footer/Footer'
import Resources from './components/resources/Resources'
import Contact from './components/contact/Contact'
import Profs from './components/professor/Profs'


const App = () => {
  return (
    <>
    <Nav/>
    <Cover/>
    <Profs/>
    <Resources />
    <Contact />
    <Footer />
    </>
  )
}

export default App