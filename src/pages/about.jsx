import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react'
import Layout from '../Components/Layout';
import Seo from '../Components/Seo';
import Title from '../Components/Title';

const About = ({data}) => {
    const {allStrapiAbout : {nodes} } = data;
  const {title,text,images,stack} = nodes[0];
  let pathToimg = getImage(images.localFile.childImageSharp);
    return (
        <Layout>
           <Seo title='About ' description="this is our About page" />
            <section className='about-page'>
                 <div className="section-center about-center">
                      <GatsbyImage image={pathToimg} alt={title} className='about-img' />
                     <article className='about-text'>
                         <Title title={title} />
                         <p>{text}</p>
                           <div className='about-stack'>
                               {
                                   stack.map((item)=>{
                                      return <span key={item.id}>{item.title}</span>
                                   })
                               }
                            </div> 
                     </article>
                 </div>
            </section>
        </Layout>
    )
}

export default About

export const query = graphql`
  {
    allStrapiAbout {
      nodes {
        stack {
          id
          title
        }
        title
        text
        images {
          localFile {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: TRACED_SVG)
            }
          }
        }
      }
    }
  }
`