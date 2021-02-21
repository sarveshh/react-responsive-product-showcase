import React from 'react'
import './Sidebar.module.css'
import { menuData } from '../Navbar/MenuItems'
import { Button } from '../Button/Button'
import { FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Sidebar = ({ isOpen, toggle }) => {

    let opacityClasses = ['sidebar-container'];
    if (isOpen) {
        opacityClasses.push('opacity-on')
    } else {
        opacityClasses.push('opacity-off')
    }


    return (
        <div className={opacityClasses.join(' ')} isOpen={isOpen} onClick={toggle}>
            <div className="icon">
                <FaTimes className="close-icon" onClick={toggle} />
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
                    <Button buttonStyle='btn--filled' to="/contact">
                        Contact Us
                    </Button>
                </div>
            </div>
        </div>

    )
}

export default Sidebar
