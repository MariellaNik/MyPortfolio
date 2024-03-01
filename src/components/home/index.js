import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
//import Loader from 'react-loaders'
//import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo-s.png'
//import Logo from './Logo'
import './index.scss'

const Home =() => {
    
    return(
        <div className="container home-page">
            <div className="text-zone">
                <h1> Hello, <br /> I am 
                <img src={LogoTitle} alt="developer"/>
                 ariela,
                <br/>
                a web development enthusiast!
                </h1>
                <h2>Frontend Developer / Junior Student</h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link> {/*link button*/}
            </div>
        </div>
    )
}

export default Home