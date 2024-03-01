import './index.scss'
import { useEffect,useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCss3,faGitAlt,faHtml5,faJsSquare,faReact,} from '@fortawesome/free-brands-svg-icons'

const About = () => {

    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>About me</h1>
                <p>As a proactive Information Systems & Business Administration sophomore at the American University in Bulgaria, I'm dedicated to honing my programming skills. Currently mastering Java and expanding my proficiency in languages like JavaScript and its frameworks, I bring a dynamic and evolving skill set to the table.</p>
                <p>In my role as a Freelance Website Developer for Elevate Accelerator, I've demonstrated expertise in HTML, CSS, and JavaScript, creating impactful web pages. My commitment to continuous learning is evident in my coursework and practical projects, ensuring I stay at the forefront of web development. </p>
                <p>My journey includes freelancing for Elevate Accelerator, monitoring IT environments at Hewlett Packard Enterprise, and excelling in public relations and web design at The Hub AUBG.</p>
                <p>I enjoy collaborating with like-minded people and am proactive with extracurricular activities connected to Entrepreneurship and Innovation.</p>
            </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
export default About