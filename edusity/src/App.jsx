import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Programs from './components/programs/Programs'
import Title from './components/title/Title'
import About from './components/about/About'
import Campus from './components/campus/Campus'
import Testimonial from './components/testimonial/Testimonial'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {

  


  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container"> 
        <Title subTitle='Our Programs' title='What We Offer'/>
        <Programs/>
        <About/>
        <Title subTitle='Gallery' title='Campus Photos'/>
        <Campus/>
        <Title subTitle='Testimonials' title='What Student Says'/>
        <Testimonial/>
        <Title subTitle='Contact Us' title='Get In Touch'/>
        <Contact/>
        <Footer/>
      </div>
     
    </div>
  )
}

export default App
