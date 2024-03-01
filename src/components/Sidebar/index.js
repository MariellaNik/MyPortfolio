import { Link,NavLink } from 'react-router-dom'
import React from 'react'
import './index.scss'
import { useState } from 'react'
import LogoS from '../../assets/images/logo-s.png'
//import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome,faUser,faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => ( 
    <div className='nav-bar'>
        <Link className ='logo' to='/'>
            <img src={LogoS} alt="logo" />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="white" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="white" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="white" />
            </NavLink>
        </nav>
    </div>
)


export default Sidebar