import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import { FaGithubSquare, FaShareSquare } from 'react-icons/fa';

const Project = ({description,title,github,stack,url,image,index}) => {
    const Imgdata = image.localFile;
    const pathToImg = getImage(Imgdata);
    return (
        <article className='project'>
         <GatsbyImage image={ pathToImg} alt={title} className='project-img' />
         <div className="project-info">
             <span className="project-number">0{index + 1}</span>
             <h3>{title}</h3>
             <p className="project-desc">{description}</p>
             <div className="project-stack">
                 {
                     stack.map((item)=>{
                         return <span key={item.id}>{item.title}</span>
                     })
                 }
             </div>
             <div className="project-links">
                 <a href={github}>
                     <FaGithubSquare  className='project-icon ' />
                 </a>
                 <a href={url}>
                     <FaShareSquare className='project-icon' />
                 </a>
             </div>
         </div>
        </article >
    )
}

export default Project;
