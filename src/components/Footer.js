import React from 'react';
import '../css/Footer.css';

const Footer = () => (
    <div className="footer">
        <footer>
            <p>© Anders Lundback {(new Date().getFullYear())}</p>
        </footer>
    </div>
)

export default Footer;
