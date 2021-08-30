import React from "react"
import { Link } from "gatsby"
const data = [
     {
       id:1,
       text:'home',
       url : '/'
     },
     {
      id:2,
      text:'about',
      url : '/about'
    },
    {
      id:3,
      text:'projects',
      url : '/projects'
    },
    {
      id:4,
      text:'blog',
      url : '/blog'
    },
    {
      id:5,
      text:'contact',
      url : '/contact'
    }
]

const template = data.map((links)=>{
        return <li key={links.id}>
            <Link to={links.url}>{links.text}</Link>
        </li>
})

const PageLinks = ({styleClass})=>{
      return <ul className={`${styleClass ? styleClass : ''} `}>{template}</ul>

}

export default PageLinks;