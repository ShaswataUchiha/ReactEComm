import React from 'react'
import "./Footer.css"
import footer_logo from '../Assests/logo_big.png'
import insta_icon from '../Assests/instagram_icon.png'
import pin_icon from '../Assests/pintester_icon.png'
import wp_icon from '../Assests/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img src={footer_logo} alt=''/>
            <p>SHOPPER</p>
        </div>

        <ul className='footer-links'>
            <li>Comapny</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className='fotter-social-collections'>
            <div className='fotter-icons-container'>
                <img src={insta_icon} alt=''/>
            </div>
            <div className='fotter-icons-container'>
                <img src={pin_icon} alt=''/>
            </div>
            <div className='fotter-icons-container'>
                <img src={wp_icon} alt=''/>
            </div>
        </div>

        <div className='footer-copyright'>
            <hr/>
            <p>Copyright @ 2023 - All Right Reserved</p>
        </div>

    </div>
  )
    
}

export default Footer