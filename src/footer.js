import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-4">
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <p>&copy; 2024 Kevin Chiwakaya. All rights reserved.</p>
                        <ul className="list-inline">
                            <li className="list-inline-item"><a href="/about" className="text-white">About Us</a></li>
                            <li className="list-inline-item"><a href="/services" className="text-white">Services</a></li>
                            <li className="list-inline-item"><a href="/contact" className="text-white">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
