import React from 'react'
import Title from './Title'
import cardsRepeat from '../constants/services'
const Services = () => {
    return (
        <div className='section bg-grey'>
            <Title title='services' />
            <div className="section-center services-center">
                {
                    cardsRepeat.map((service)=>{
                       const {id,icon,title,text} = service;
                       return (
                           <article key={id} className='service'>
                               {icon}
                               <h4>{title}</h4>
                               <div className="underline"></div>
                               <p>{text}</p>
                           </article>
                       )
                    })
                }
            </div>
        </div>
    )
}

export default Services;
