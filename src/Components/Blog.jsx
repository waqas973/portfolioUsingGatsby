import { Link } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react'

const Blog = ({id,title,image,date,category,slug,desc}) => {
    const Imgdata = image.localFile;
    const pathToImg = getImage(Imgdata);
    return (
        <Link to={`/blogs/${slug}`} key={id} className="blog" >
            <article>
                <GatsbyImage  image={pathToImg}  className='blog-img' alt={title}  />
                <div className="blog-card">
                    <h4>{title}</h4>
                    <p >{desc}</p>
                    <div className="blog-footer">
                        <p>{category}</p>
                        <p>{date}</p>
                    </div>
                </div>
            </article>

        </Link>
    )
}

export default Blog;
