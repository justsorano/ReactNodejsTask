import React from 'react'
import img from '..//../assets/mobile.jpg'
export const Header = () =>{
   return (
      <div className='header'>
         <div className='header__contant _header--container'>
            <a className='header__title' href='/'>AppCo</a>
            <div className='header__main'>
               <div className='header__info info'>
                  <h1 className='info__title'> <span>Brainstorming</span> for desired perfect Usability</h1>
                  <h3 className='info__subtitle'>
                  Our design projects are fresh and simple and will benefit <br/> your business greatly. Learn more about our work!
                  </h3>
                  <button className='btn info__btn'>Views Stats</button>
               </div>
               <div className='header__phone'>
                  <img src={img} alt='phone'></img>
               </div>
            </div>
         </div>
      </div>
   )
}