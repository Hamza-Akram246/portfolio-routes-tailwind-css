import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-52'>
      <div className='grid md:-cols-2 gap-20 items-center'>
        <div data-aos="zoom-in-up">
          <h2 className='text-4xl md:text-5xl'>Technologies I work with</h2>
          <p className='text-gray-500 pt-6'>
            I have a solid foundationin web development, specializing in HTML, CSS, and JavaScript.
            My experience extands to using frameworks like React and Next.js to create dynamic and 
            user-frindlyapplication. I&apos;m also proficient in Tailwind CSS for afficient styling and
            design. With a passion for learning, I stay updated on the latest technologies to
            enhance my skill set and contribute effectively to projects.
            </p>
        </div>
        <div>
          <div className='grid grid-cols-2 text-green-600 text-5xl sm:text:4xl'>
            <div className='space-y-2'>
              <h2 data-aos="zoom-in-up">Typescript</h2>
              <h2 data-aos="zoom-in-up">React.js</h2>
              <h2 data-aos="zoom-in-up">Next.js</h2>
              </div>
              <div className='space-y-2'>
              <h2 data-aos="zoom-in-up">Tailwind</h2>
              <h2 data-aos="zoom-in-up">CSS</h2>
              <h2 data-aos="zoom-in-up">Node.js</h2>
              </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Skills
