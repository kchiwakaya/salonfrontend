import React from 'react';
import { Link } from 'react-router-dom';
import logo from "./logo2.png";
import './header.css';

const Header = ({ isLoggedIn, onLogout }) => (
    <header>
        <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body custom-nav" data-bs-theme="dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src={logo} className="logo" alt="logo" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/features">Features</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/pricing">Pricing</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Add New
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><Link className="dropdown-item" to="/add-style">Add New Style</Link></li>
                                <li><Link className="dropdown-item" to="/add-appointment">Add New Appointment</Link></li>
                                <li><Link className="dropdown-item" to="/add-customer">Add New Customer</Link></li>
                                <li><Link className="dropdown-item" to="/book-appointment">Book Appointment</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
);

export default Header;