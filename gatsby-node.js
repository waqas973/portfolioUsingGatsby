const path = require('path');

exports.createPages = async ({graphql , actions}) =>{
    const {createPage} = actions;

    const result = await graphql(`
       {
        allStrapiBlogs {
          nodes {
            slug
          }
        }
      }
    `)
   
    result.data.allStrapiBlogs.nodes.forEach(blog => {
        createPage({
            path : `/blogs/${blog.slug}`,
            component : path.resolve(`src/templates/blog-template.js`),
            context : {
                slug : blog.slug
            }
        })
    });
}
