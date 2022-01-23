import React from "react";
import "./header.css";
import logo from '../../images/paycrypt-logo.svg'

const Header = () => {
    return (
        <div className='div-header'>
            <header className='header'>
                <img className='logo' src={logo} alt="Logo"/>
                <nav className="nav">
                    <ul className='nav-list'>
                        <li>Inicio</li>
                        <li>Cotizaciones</li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header;