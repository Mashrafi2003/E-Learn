import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-container'>
            {/* Footer Details about what E-learn is */}
            <div className='details-container'>
                <h4>About E-learn</h4>
                <p>
                E-learn is designed for the institutions dealing with the education systems. Fully Layered Photoshop (PSD) files are also included for you to easily edit the things you want.
                </p>
                <p><i class="fas fa-id-card"></i>123 124 42 42</p>
                <p><i class="far fa-envelope"></i>info@yourdomain.com</p>
                <p><i class="fas fa-map-marker-alt"></i>893 Fifth Ave, New York NY 01741</p>
            </div>
            <div className="leatest">
                <h3>Leatest courses</h3>
                <ul>
                    <li>Learn How to develop a management Softwars</li>
                    <li>Learn Microsoft Excel and Complete guideline</li>
                    <li>Learn The Basics of Java Language</li>
                    <li>Learn about competitive Programming Basics</li>
                </ul>
                <h3>Best Support</h3>
                <ul>
                    <li>Become a vateran student</li>
                    <li>Become a instructor</li>
                </ul>
            </div>
            {/* CopyRight and Links are shown Here */}
            <div>
                <h5 className='copyright'>All rights are reserved by E-learn 2022</h5>
            </div>
            <div className='fonts'>
            <i class="fab fa-facebook fa-2x font"></i>
            <i class="fab fa-twitter fa-2x font"></i>
            <i class="fab fa-discord fa-2x font"></i>
            <i class="fab fa-instagram fa-2x font"></i>
            </div>
            

                
            </div>
       
    );
};

export default Footer;