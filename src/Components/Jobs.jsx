import React from 'react'
import { graphql, Link } from 'gatsby';
import { useStaticQuery } from 'gatsby';
import Title from './Title';
import { useState } from 'react';
import {  FaAngleDoubleRight } from 'react-icons/fa';
const  query = graphql`
  {
    allStrapiJobs(sort: {fields: strapiId, order: DESC}) {
      nodes {
          strapiId
        company
        date
        position
        desc {
          id
          name
        }
      }
    }
  }
`;
const Jobs = () => {
 const   data  =   useStaticQuery(query);
const {allStrapiJobs : {nodes :jobs}} = data;
const [values,setValues] = useState(0)
    const {company, date,position,desc} = jobs[values];
    return (
        <section className='section jobs'>
             <Title title='experience' />
             <div className="jobs-center">
                 <div className="btn-container">
                     {
                         jobs.map((item,index)=>{
                            return (
                                <button key={item.strapiId} onClick={()=>setValues(index)} className={`job-btn ${index === values && 'active-btn'}`} >{item.company}</button>
                            )
                         })
                     }
                 </div>
                 <article className='job-info'>
                     <h3>{position}</h3>
                     <h4>{company}</h4>
                      <p className='job-date'>{date}</p>
                      {
                          desc.map((item)=>{
                           return    <div key={item.id} className='job-desc'>
                                   <FaAngleDoubleRight className='job-icon' />
                                   <p>{item.name}</p>

                               </div>
                          })
                      }

                 </article>
             </div>
             <Link to='/about' className='btn center-btn' > more info </Link>
        </section>
    )
}

export default Jobs;
