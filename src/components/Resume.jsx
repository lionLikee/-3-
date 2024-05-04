import React, { useState } from 'react';
import './Resume.css'

export function Resume(props){

        const [num, set]=useState(0);

        function increase(){
            set(num+1);
        }

        function decrease(){
            set(num-1);
        }

        function reset(){
            set(0);
        }
    
    return(
        <div className="intro_bg">
            <div className="header">
                <p className="demo1">Let's Count!!!</p>
        
                <div className="resultbox">
                    <div className="result">{num}</div>
                </div>
        
                <div className="buttons">
                    <button className="increase" onClick={increase}>Increase</button>
                    <button className="decrease" onClick={decrease}>Decrease</button>
                    <button className="reset" onClick={reset}>Reset</button>
                </div>
            </div>
        </div>
    );
}

//export default Resume;
