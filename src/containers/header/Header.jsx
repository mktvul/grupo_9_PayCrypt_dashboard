import React from "react";
import "./header.css";
import logo from '../../images/paycrypt-logo.svg'
import defaultUser from '../../images/default-user.png'

const Header = () => {
    return (
     
        <header className='header'>
            <img className='logo' src={logo} alt="Logo"/>
        </header>

    )
}

export default Header;