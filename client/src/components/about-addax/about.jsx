import React from 'react'
import './about.scss'
import { FaCheck } from "react-icons/fa6";
import video from "../../assets/image/about.jpg";

const About = () => {
  return (
      <div id='about' className="about-addax">
           <div className="container">
             <div className="section-title">
               <div className="liner">
                 <div id="line1"></div>
                 <div id="line2"></div>
               </div>
               <div className="txt">
                 <h1>
                   About <span>Addax</span>
                 </h1>
                 <p>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                   eiusmod tempor incididunt ut labore et dolore magna aliqua.
                 </p>
               </div>
             </div>
   
             <div className="marketing-video">
               <div className="marketing-wrapper">
                 <div className="top-txt">
                   <h2>
                     We Are Digital <span>Marketing & Branding</span>
                   </h2>
                   <p>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                     do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                   </p>
                 </div>
   
                 <div className="bottom-wrapper">
                   <div className="txt-wrapper">
                     <div className="txt">
                       <FaCheck className="icon" />
                       <p>Creative Design</p>
                     </div>
                     <div className="txt">
                       <FaCheck className="icon" />
                       <p>Retina Ready</p>
                     </div>
                     <div className="txt">
                       <FaCheck className="icon" />
                       <p>Responsive Design</p>
                     </div>
                   </div>
                   <div className="txt-wrapper">
                     <div className="txt">
                       <FaCheck className="icon" />
                       <p>Modern Design</p>
                     </div>
                     <div className="txt">
                       <FaCheck className="icon" />
                       <p>Awesome Design</p>
                     </div>
                     <div className="txt">
                       <FaCheck className="icon" />
                       <p>Digital Marketing & Branding</p>
                     </div>
                   </div>
                 </div>
                 <button>Read More</button>
               </div>
               <div className="video">
                 <img src={video} alt="" />
               </div>
             </div>
           </div>
         </div>
   
  )
}

export default About