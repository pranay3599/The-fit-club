import React from 'react'
import {programsData} from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png';
import "./Program.css"
const Program = () => {
  return (
    <div className="program" id="program">
        <div className="program-header">
           <span className='stroke-text' >Explore our</span>
           <span>Programs</span>
           <span className='stroke-text' >to shape you</span>
        </div>

        <div className="programs-categories">
            {programsData.map((program,id)=>(
               <div className="category" key={id}>
                  {program.image}
                  <span>{program.heading}</span>
                  <span>{program.details}</span>
                  <div className="join-now">
                    <span>Join Now</span>
                    <img src={RightArrow} alt="" />
                  </div>
               </div> 
            ))}
        </div>
    </div>
  )
}

export default Program
