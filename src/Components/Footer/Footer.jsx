import React from 'react'
import "./footer.css"
import Location from "../../assets/location.svg"



function Footer() {

  return (
    <div className="footer" id='contactus'>
     <div className='footer-info'>
      <h2>Contact Us;</h2>
      <ul>
        <li >Phone: <a href="tel">+234 803 7207 378</a></li>
        <li >WhatsApp: <a href="tel">+234 812 0499 531</a></li>
        <li>Address: 244 Kirikiri road Olodi Apapa, Lagos, Nigeria.</li>
      
      </ul>
     </div>
     <div className='footer-img'>
      <img src={Location} alt="" />
     </div>
    
    </div>
  )
}

export default Footer

