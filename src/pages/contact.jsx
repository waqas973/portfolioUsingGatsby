import React from 'react'
import Layout from '../Components/Layout'
import Seo from '../Components/Seo'

const Contact = () => {
    return (
        <Layout>
             <Seo title='Contact ' description="this is our Contact page" />
            <section className="contact-page">
                <article className="contact-form">
                    <h3>get in touch</h3>
                    <form >
                    <div className="form-group">
                        <input type="text" placeholder='name' className="form-control" />
                        <input type="email" placeholder='email' className="form-control" />
                         <textarea name='message' rows='5' placeholder='message' className='form-control'></textarea>
                    </div>
                    <button type='submit' className='submit-btn btn'>submit here</button>
                    </form>
                </article>
            </section>
        </Layout>
    )
}

export default Contact
