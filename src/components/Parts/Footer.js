import React from 'react'

export const Footer = () =>{
   return(
      <footer className='footer'>
         <div className='footer__contant _container'>
            <form className='footer__form form'>
               <input className='form__input' placeholder='Enter your email'/>
               <button className='btn form__btn' type='submit'>Subscribe</button>
            </form>
            <div className='footer__info'>
               <div className='footer__logo'>AppCo</div>
               <div className='footer__copy'>All rights reserved by ThemeTags</div>
               <div className='footer__copy'>Copyrights © 2019.</div>
            </div>
         </div>
      </footer>
   )
}