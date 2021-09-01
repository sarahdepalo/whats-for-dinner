import { useState } from 'react';
import logo from './logo.png';
import './navbar.scss';

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);

    return (
        <>
        <nav>
            <button onClick={() => setIsActive(!isActive)} className="toggleButton">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </button>
            <img src={logo} alt="What's For Dinner Logo" className="logo"/>
            <a href="https://github.com/sarahdepalo/whats-for-dinner" className={!!isActive ? "navbarLinks active" : "navbarLinks"}>Github</a>
        </nav>
        </>
    )
}

export default Navbar;