import React from "react"
import Hero from "../Components/Hero"
import Jobs from "../Components/Jobs"
import Layout from "../Components/Layout"
import Services from "../Components/Services"
import Projects from "../Components/Projects"
import { graphql } from "gatsby"
import Blogs from "../Components/Blogs"
import Seo from "../Components/Seo"

export default function Home({data}) {
   const {
     allStrapiProjects : {nodes : projects},
     allStrapiBlogs : {nodes : blogs}
  
    } = data;
    
  return <Layout>
     <Seo title='Home ' description="this is our home page" />
      <Hero />
      <Services />
      <Jobs />
      <Projects projects={projects} title="featured projects" showLink />
      <Blogs blogs={blogs} title='Lastest blog'  showLink  />
  </Layout>
}


export const query = graphql`
  {
    allStrapiProjects(filter: {featured: {eq: true}}) {
      nodes {
        description
        github
        id
        url
        title
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
            }
          }
        }
        stack {
          id
          title
        }
      }
    }
    allStrapiBlogs(limit: 3, sort: {fields: date, order: DESC}) {
      nodes {
        content
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