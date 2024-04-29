import React from 'react';
import { BrowserRouter as Router, NavLink, Navigate } from 'react-router-dom';

function Nav() {
    return (
        <Router>
            <div className="">
                <nav className="d-flex justify-content-center navbar navbar-expand-lg navbar-light bg-dark rounded-sm p-3 m-3">
                    <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/" style={{ display: 'flex', alignItems: 'center', borderRadius: '8px' }}>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLegFf2lCC2IaUpfYZR8J6M1XNGmatDCldreYYPjv4yw&s" alt="Logo" style={{ width: '50px', height: '50px', marginRight: '10px', borderRadius: '50%' }} />
    <span style={{ color: 'white', fontSize: '1.5rem', fontWeight: 'bold' }}>SNJB</span>
</NavLink>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link active text-white font-weight-bold" aria-current="page" to="/events"  onClick={() => {
                                                        Navigate('/events')
                                                    }}>Events</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link active text-white font-weight-bold" aria-current="page" to="/myEvents"  onClick={() => {
                                                        Navigate('/myEvents')
                                                    }}>Purchases</NavLink>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle text-white font-weight-bold" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Account
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        {!localStorage.getItem('token') && (
                                            <div>
                                                <li>
                                                    <NavLink className="dropdown-item font-weight-bold" to="/register"  onClick={() => {
                                                        Navigate('/register')
                                                    }}>Register</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink className="dropdown-item font-weight-bold" to="/login" onClick={() => {
                                                        Navigate('/login')
                                                    }}>Login</NavLink>
                                                </li>
                                            </div>
                                        )}
                                        {localStorage.getItem('token') && (
                                            <li>
                                                <NavLink className="dropdown-item" to="#" onClick={() => {
                                                    localStorage.removeItem('token');
                                                    // Assuming setLogin is a state setter function
                                                    setLogin(null);
                                                }}>Logout</NavLink>
                                            </li>
                                        )}
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li>
                                        <NavLink className="dropdown-item font-weight-bold" to="/help" onClick={() => {
                                                        Navigate('/help')
                                                    }}>About Us </NavLink>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        </Router>
    );
}

export default Nav;
