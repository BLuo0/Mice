import React from 'react';
import { Link } from 'react-router-dom'

const About = (props) => {

  return (
    <div>
      <nav>
        <Link to={{pathname: '/'}}>Home</Link>
      </nav>
      <h1>This is about page!</h1>
    </div>
  )
}

export default About