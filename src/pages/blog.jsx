import { graphql } from 'gatsby';
import React from 'react'
import Blogs from '../Components/Blogs';
import Layout from '../Components/Layout';
import Seo from '../Components/Seo';

const Blog = ({data}) => {
    const {allStrapiBlogs : {nodes : blogs} } = data;
    return (
        <Layout >
           <Seo title='Blog' description="this is our Blog page" />
            <div className="blog-page">
                <Blogs blogs={blogs} title='blog' />
            </div>
        </Layout>
    )
}

export default Blog;


export const query = graphql`
  {
    allStrapiBlogs {
      nodes {
        desc
        slug
        category
        id
        title
        date(formatString: "MMMM Do , YYYYY")
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
            }
          }
        }
      }
    }
  }
`