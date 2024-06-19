import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
          
          <div className="container"> 

            <div className="nav"> 
                <ul> 
                    <li> 
                        <NavLink to="/">Home</NavLink>
                    </li>

                    <li> 
                        <NavLink to="/about">About</NavLink>
                    </li>

                    <li> 
                        <NavLink to="/service">Service</NavLink>
                    </li>

                    <li> 
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                </ul>
            </div>

          </div>


        </div>
    );
};

export default Navbar;