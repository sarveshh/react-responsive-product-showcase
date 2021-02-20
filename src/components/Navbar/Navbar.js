import React from 'react'
import { Link } from 'react-router-dom'
import { menuData } from './MenuItems'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav>
            <Link to="/" className="link">ELIXR</Link>
            <i className="mobile-navicon">MenuBars</i>
            <div className="menu-items">
                {menuData.map((item, index) => (
                    <Link className="link" to={item.link} key={index}>
                        {item.title}
                    </Link>
                ))}
            </div>
        </nav>
    )
}

export default Navbar
