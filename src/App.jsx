import React, { Component } from 'react'
import Nav from './components/nav/Nav'
import Cover from './components/cover/cover'
import Footer from './components/footer/Footer'
import Resources from './components/resources/Resources'
import Contact from './components/contact/Contact'
import Hod from './components/hodmsg/hod'

import Profs from './components/professor/Profs'

import SME from './components/about_SME/SME'


const App = () => {
  return (
    <>
    <Nav/>
    <Cover/>
    <Hod/>
    <SME/>
    <Profs/>

    <Resources />
    <Contact />
    <Footer />
    </>
  )
}

export default App