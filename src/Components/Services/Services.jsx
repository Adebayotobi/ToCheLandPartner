import React from 'react'
import "./services.css"
import Serve from "../../assets/services.svg"
import Partner1 from "../../assets/partner1.svg"
import Partner2 from "../../assets/partner2.svg"
import Partner3 from "../../assets/partner3.svg"
import Partner4 from "../../assets/partner4.svg"
import Partner5 from "../../assets/partner5.svg"


function  Services() {

  return (
      <div className="services" id='service'>
        <h1> Vehicle We Serve</h1>
     <img src={Serve} alt="services" />
        <h1>Our Services</h1>
        <ul>
            <li>Sales of various original spare parts for articulated trucks likes Daf, Howo, Scannia, Man diesel, Iveco, Mercedes.</li>
            <li>Sales of Trucks</li>
            <li>Haulage Service</li>
        </ul>
        <h1>Our Partners</h1>
     <div className='partner'>
        <img src={Partner1} alt="partner1" />
        <img src={Partner2} alt="partner2" />
        <img src={Partner3} alt="partner3" />
        <img src={Partner4} alt="partner4" />
        <img src={Partner5} alt="partner5" />
     </div>
    </div>
  )
}

export default Services

