import React from "react";
import './header.css';
import { Link } from "react-router-dom";

const Header = () => {
    return(
      <header className='container'>
        <div className='logoandlinks'>
            <a href='#' className='logo'>
                <img src='#' alt='#'/>
            </a>
            <div className='mainlinks'>
                <a href='#' className='mainlinks1'>Home</a>
                <a href='#' className='mainlinks1'>About</a>
                <a href='#' className='mainlinks1'>Products</a>
                <a href='#' className='mainlinks1'>Help</a>
            </div>
        </div>
        <h1>THIS IS A HEADLINE.</h1>
        
      </header>
    )
}


export default Header;