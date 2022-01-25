import React from "react";
import "./header.css";
import logo from '../../images/paycrypt-logo.svg'
import defaultUser from '../../images/default-user.png'

const Header = () => {
    return (
     
        <header className='header'>
            <img className='logo' src={logo} alt="Logo"/>
            <nav className="nav-header">
                <ul className='nav-header-list'>
                    <li>Cotizaciones</li>
                    <li><span className='user-logged'>Admin<img src={defaultUser} alt="" className='user-logo'/></span></li>
                </ul>
            </nav>
        </header>

    )
}

export default Header;