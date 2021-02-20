import React from 'react'
import './Sidebar.css'
import { menuData } from '../Navbar/MenuItems'
import { Button } from '../Button/Button'
import { FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className="sidebar-container">
            <div className="icon">
                <FaTimes className="close-icon" />
            </div>
            <div className="sidebar-wrapper">
                <div className="sidebar-menu">
                    {menuData.map((item, index) => (
                        <Link to={item.link} key={index} className="sidebar-links">
                            {item.title}
                        </Link>
                    ))}
                </div>
                <div className="button-wrap">
                    <Button buttonStyle='btn--outline' to="/contact">
                        Contact Us
                    </Button>
                </div>
            </div>
        </div>

    )
}

export default Sidebar
