import { useState } from "react";

function RangeSlider(props) {
    const { value, setValue } = props;
   
    return(
        <>
        <div className="range-slider">
         <div className="range">
            <div className="range__content">
               <div className="range__slider">
                  <div className="range__slider-line" id="range-line" style={{width:`${(value*100)/360}%`}}></div>
               </div>
               
               <div className="range__thumb" id="range-thumb" style={{left: `${(value * 17)/360}rem`}} >
                  <div className="range__value">
                     <span className="range__value-number" id="range-number">{value}</span>
                  </div>
               </div>
              {/* <input type="range" id="range-input" min="0" max="360" value="180" step="1"/> */}
   
               <input type="range" className="range__input" id="range-input" min="0" max="360" value={value} onChange={(e)=>setValue(e.target.value)} step="1"/>
            </div>
         </div>
      </div>
      </>
    )
}
export default RangeSlider;