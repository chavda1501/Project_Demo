import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return(
        <>
        <div className="container nav_bg">
            <nav className="navbar navbar-expand-lg">
                <NavLink className="navbar-brand" to="/">Logo</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-md-auto">
                        <li className="nav-item">
                            <NavLink activeClassName="menu-active" exact className="nav-link active" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="menu-active" className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="menu-active" className="nav-link" to="/service">Service</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="menu-active" className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                        
                    </ul>
                </div>
            </nav>
        </div>
        </>
    )
}
export default Navbar;