import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { MdRssFeed } from 'react-icons/md';
import { FaBars, FaTimes } from 'react-icons/fa'; 
import { Button } from "./Button";
import '../../static/css/navbar.css';

function NavBar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton)

    return (
        <div className="navbar">
            <div className="navbar-container container">
                <Link to='/' className="navbar-logo">
                    <MdRssFeed className='navbar-icon' />
                    Simon_SWE
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    {click ? <FaTimes className="fa-times"/> : <FaBars className="fa-times"/>}
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to='/' className="nav-links" onClick={handleClick}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/experience' className="nav-links" onClick={handleClick}>
                            Experience
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/projects' className="nav-links" onClick={handleClick}>
                            Projects
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;