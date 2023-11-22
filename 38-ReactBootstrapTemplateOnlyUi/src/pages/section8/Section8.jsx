import React from 'react'
import "./section8.scss";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
function Section8() {
  return (
    <div>
        <div className="container">
            <div className='boxes'>
                <div className="box1">
                    <div className='icon'>
                    <FaFacebook />
                    </div>
          
                </div>
                <div className="box2">
                    <div className="icon">
                    <FaTwitter />
                    </div>
             
                    
                </div>
                <div className="box3">
                    <div className="icon">
                    <FaGithub />    
                    </div>
             
                </div>

            </div>
            <div className="text">
                <p>Copyright © Your Website 2023</p>
            </div>
            
        </div>

    </div>
  )
}

export default Section8