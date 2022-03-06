import React from 'react';
import { ReactComponent as Logo } from "../images/logo.svg";
import  "./Header.css";

function Header() {
  return (
    <div className="header">
        <div className="logo_place">
            <Logo />
            </div>
        <div className="header_list">
            <ul>
              <li>Features</li>
              <li>Team</li>
              <li>Sign in</li>
            </ul>
        </div>
        
    </div>
  )
}

export default Header;