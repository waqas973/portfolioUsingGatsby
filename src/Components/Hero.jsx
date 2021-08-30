import React from 'react'
import { graphql , useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import SocialLinks from '../constants/socialLinks';
const query = graphql`
{
  file(relativePath: {eq: "hero-img.png"}) {
    childImageSharp {
      gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
    }
  }
}
`
const Hero = () => {
   const data =  useStaticQuery(query);
   const img = data.file;
   const pathToImg = getImage(img);
    return (
        <header className='hero' >
            <div className="section-center hero-center" >
                <article className="hero-info">
                    <div>
                        <div className="underline"></div>
                        <h1>i'm waqas</h1>
                        <h4>freelance web and mobile UI/UX Designer</h4>
                        <Link to='/contact' className='btn' >contact me</Link>
                        <SocialLinks />
                    </div>
                </article>
                 <GatsbyImage image={pathToImg} alt='hero' className='hero-img' />
            </div>
        </header>
    )
}

export default Hero;
