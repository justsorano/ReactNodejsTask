import React from 'react'
import { Footer } from '../Parts/Footer'
import { Header } from '../Parts/Header'
import { Main } from '../Parts/Main'

export const HomePage = () =>{
   return (
      <div className='home'>
         <div className='home__contant'>
            <Header/>
            <Main/>
            <Footer/>
         </div>
      </div>
   )
}
