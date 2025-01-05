import React from 'react'


const About = () => {
  return (
    <div className='items-center'>
    <div className='grid md:grid-cols-2 gap-10'> 
    <div id= 'about' className='container pt-48 ml-9rem'>
      <h2 className='text-7xl m-40 md:text-6xl' data-aos="zoom-in-up">About Me</h2>
      </div>
      <div className='space-y-8 flex flex-cols-2'>
      <p className='text-gray-500 pt-72 mr-4 text-3xl' data-aos="zoom-in-up">
        I am a student at GIAIC, pursuing a course in Artificial Intelligence, web 3.0, & Metaverse. passionate
        about technology and constantly learning new skills to stay up-to-date with the latest innovation.
      </p>
      </div>
    </div>
    </div>

  )
}

export default About
