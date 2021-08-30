
import React from 'react'
import { Helmet } from 'react-helmet'



const Seo = ({title,description}) => {

    return (
       <Helmet title={title} htmlAttributes={{lang:'en'}}>
           <meta name='description' content={description} />
       </Helmet>
    )
}

export default Seo
