import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../Components/Layout'
import Seo from '../Components/Seo'
import ReactMarkdown from 'react-markdown'

const BlogPosts = ({data}) => {
    const {content,title,desc} = data.strapiBlogs;
    console.log(content);
    return (
        <Layout>
             <Seo title={title} description={desc} />
         <section className='blog-template'>
             <div className='section-center'>
                <article className='blog-content'>
               
                  <ReactMarkdown children={content} />
                </article>
                <Link to='/blog' className='btn center-btn'>
                    blog
                </Link>
             </div>
         </section>
        <div>
        </div>

        </Layout>
    )
}

export default BlogPosts

export const query = graphql`
   query GetSingleBlog($slug: String) {
    strapiBlogs(slug: {eq: $slug}) {
      content
      title
      desc
    }
  }
  `