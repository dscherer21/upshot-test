import React from "react";
import './body.css';
//import { Link } from "react-router-dom";

const Body = () => {
    return(
      <main className='container'>
        <div className='column'>
            <a href='#' className='asidelink'>Footwear</a>
            <a href='#' className='asidelink'>Water Fountains</a>
            <a href='#' className='asidelink'>Garage Door Openers</a>
            <a href='#' className='asidelink'>Smart Home Tech</a>
            <a href='#' className='asidelink'>Beverages</a>
            <a href='#' className='asidelink'>Education</a>
        </div>
        <div className='column'>
            <div className='row'>
                <div className='adbox'>
                    <img src='#' alt='#'/>
                    <h3>Title with Two Very Very Long Lines</h3>
                    <p>And a very long description to boot. Why bother describing something with so many words?</p>
                    <button>BUY NOW</button>
                </div>
            
                <div className='adbox'>
                    <img src='#' alt='#'/>
                    <h3>One Short Title</h3>
                    <p>And a very long description to boot. Why bother describing something with so many words?</p>
                    <button>BUY NOW</button>
                </div>

                <div className='adbox'>
                    <img src='#' alt='#'/>
                    <h3>One Short Title</h3>
                    <p>With a short description.</p>
                    <button>BUY NOW</button>
                </div>
            </div>
            <div className='row'>
                <div className='adbox'>
                    <img src='#' alt='#'/>
                    <h3>Title with Two Very Very Long Lines</h3>
                    <p>With a short description.</p>
                    <button>BUY NOW</button>
                </div>
            
                <div className='adbox'>
                    <img src='#' alt='#'/>
                    <h3>Title with Two Very Very Long Lines</h3>
                    <p>And a very long description to boot. Why bother describing something with so many words?</p>
                    <button>BUY NOW</button>
                </div>

                <div className='adbox'>
                    <img src='#' alt='#'/>
                    <h3>Title with Two Very Very Long Lines</h3>
                    <p>And a very long description to boot. Why bother describing something with so many words?</p>
                    <button>BUY NOW</button>
                </div>
            </div>
        </div>
      </main>
    )
}


export default Body;