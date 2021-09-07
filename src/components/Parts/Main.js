import React from 'react'


export const Main = () =>{
   return (
      <main className='main'>
         <div className='main__contant _container'>
            <div className='main__title'>
            Why <span>small business owners<br/>
            love</span> AppCo?
            </div>
            <div className='main__subtitle'>Our design projects are fresh and simple and will benefit your business<br/> greatly. Learn more about our work!</div>
            <div className='main__data data'>
               <div className='data__item'>
                  <div className='data__item--space'></div>
                  <a href='/' className='_icon-gadgets'>
                     <span className='_icon-gadgets path1'></span>
                     <span className='_icon-gadgets path2'></span>
                  </a>
                  <div className='data__item--title'>Clean Design</div>
                  <div className='data__item--subtitle'>
                  Increase sales by showing true <br/> dynamics of your website.
                  </div>
               </div>
               <div className='data__item'>
               <div className='data__item--space'></div>
               <a href='/' className='_icon-lock'>
                     <span className='_icon-lock path1'></span>
                     <span className='_icon-lock path2'></span>
                     <span className='_icon-lock path3'></span>
                     <span className='_icon-lock path4'></span>
                     <span className='_icon-lock path5'></span>
                  </a>
                  <div className='data__item--title'>Secure Data</div>
                  <div className='data__item--subtitle'>
                  Build your online store’s trust using <br/> Social Proof &amp; Urgency.
                  </div>
               </div>
               <div className='data__item'>
               <div className='data__item--space'></div>
               <a href='/' className='_icon-things'>
                     <span className='_icon-things path1'></span>
                     <span className='_icon-things path2'></span>
                     <span className='_icon-things path3'></span>
                     <span className='_icon-things path4'></span>
                     <span className='_icon-things path5'></span>
                     <span className='_icon-things path6'></span>
                  </a>
                  <div className='data__item--title'>Retina Ready</div>
                  <div className='data__item--subtitle'>
                  Realize importance of social proof in customer’s purchase decision.
                  </div>
               </div>
            </div>
         </div>
      </main>
   )
}