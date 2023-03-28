import React, { useEffect, useState } from 'react'
import './home.css'
import '../sass/main.scss'
import Header from './header/Header'
import Top from './top/Top'
import Hero from './hero/Hero'
import About from './about/About'
import Services from './services/Services'
import Blog from './blog/Blog'
import Footer from './footer/Footer'
import axios from 'axios'
import {PacmanLoader} from 'react-spinners'


function Home() {
  const [loading,setLoading]=useState(true)
  const [Auth,setAuth]=useState(false)

  useEffect(()=>{
    axios.get('all-products').then(res=>{
      if(res.data.status===200)
      {
        setAuth(true)

      }
      setLoading(false)
    })
    return()=>{
      setAuth(false)
  }

  },[])


  
  if(loading){

    return(

      <PacmanLoader className='lazyLoading' color="#36d7b7" />

    )

  }

  return (
    <div>
      <Top/>
      <Header/>
      <Hero/>
      <About/>
      <Services/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default Home