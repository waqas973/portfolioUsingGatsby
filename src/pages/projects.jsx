import { graphql } from 'gatsby';
import React from 'react'
import Layout from '../Components/Layout';
import Projects from '../Components/Projects';
import Seo from '../Components/Seo';

const ProjectsPage = ({data}) => {
        const {allStrapiProjects : {nodes : projects}} = data;
        return <Layout>
           <Seo title='Project ' description="this is our Project page" />
            <section className="projects-page">
            <Projects projects={projects} title="All projects"  />
            </section>
        </Layout>
    
}


export default ProjectsPage


export const query = graphql`
  {
    allStrapiProjects {
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
  }
`