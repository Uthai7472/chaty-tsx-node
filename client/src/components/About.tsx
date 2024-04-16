import React from 'react'

const About = ({isAuthenticated}) => {
  return (
    <div>
        { !isAuthenticated ? (
            <h1>Failed</h1>
        ) : (
            <div>
                <h1>About Page</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, modi soluta!</p>
            </div>
        )}
    </div>
  )
}

export default About