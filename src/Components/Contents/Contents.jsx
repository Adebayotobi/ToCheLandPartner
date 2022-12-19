import React from 'react'
import "./contents.css"
import Delivery from "../../assets/delivery.svg"
import SparePart from "../../assets/spare.svg"
import Guarantee from "../../assets/guarantee.svg"



function Content() {

    return (
        <div className='about-us' id='aboutus'>
            <div className="contents-main">
                <h1>About us</h1>
                <p>Tochel and partners is a limited liabilities company registered under the company and allied matters act of the federal republic of Nigeria to carry out parts and articulated trucks sales and supply. We started operations in the year 2000 which span between sales of various original spare parts for articulated trucks likes Daf, Howo, Scannia, Man diesel, Iveco, Mercedes, Etc. <br />

                    We have supply to various sectors of the organisation spanning all through sectors of the economy ( freight forwarding company, oil and gas, Aviations, Haulage, Financial institution's, and 3PL logistics firm.</p>
            </div>
            <div className='about-section'>
                <div className='about-group'>
                    <img src={Delivery} className="about-icon" alt="" />
                    <h3>Delivery</h3>
                    <p>We deliver original truck spare parts in and across Nigeria.</p>
                </div>
                <div className='about-group'>
                    <img src={Guarantee} className="about-icon"  alt="" />
                    <h3>Guarantee</h3>
                    <p>With the years of service and clients we have served so far alongside the feedback from our clients, we guarantee our esteemed customers of the best quality parts and services.</p>
                </div>
                <div className='about-group'>
                    <img src={SparePart} className="about-icon"  alt="" />
                    <h3>Spare parts</h3>
                    <p>We sell guaranteed spare part for the following trucks : Howo, Daf, Scannia, Man diesel, Iveco, Mercedes</p>
                </div>
            </div>
        </div>
    )
}

export default Content

