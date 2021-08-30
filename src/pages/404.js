import { Link } from 'gatsby'
import React from 'react'
import Layout from '../Components/Layout'
import Seo from '../Components/Seo'

const Error = () => {
    return (
        <Layout>
             <Seo title='Page Not found ' description="this is our Error page" />
        <main className='error-page'>
        <div className='error-container'>
            <h1>Oop Page not Found</h1>
            <Link to='/' className='btn' >Go Back</Link>
        </div>
        </main>
        </Layout>
    )
}

export default Error
