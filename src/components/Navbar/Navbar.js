import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../Button/Button'
import { menuData } from './MenuItems'
import './Navbar.css'
import { FaBars } from 'react-icons/fa'


const Navbar = () => {
    return (
        <nav>
            <Link to="/" className="link">ELIXR</Link>
            <div className="mobile-menu-icon"><FaBars /></div>
            <div className="menu-items">
                {menuData.map((item, index) => (
                    <Link className="link" to={item.link} key={index}>
                        {item.title}
                    </Link>
                ))}
            </div>
            <div className="signup-button">
                <Button
                    buttonStyle='btn--outline' to='/signup'
                >
                    SIGN UP
                </Button>
            </div>
        </nav>
    )
}

export default Navbar
