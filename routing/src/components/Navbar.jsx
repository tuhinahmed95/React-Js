import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
          
          <div className="container"> 

            <div className="nav d-flex"> 
                <ul> 
                    <li> 
                        <Link to="/">Home</Link>
                    </li>

                    <li> 
                        <Link to="/about">About</Link>
                    </li>

                    <li> 
                        <Link to="/service">Service</Link>
                    </li>

                    <li> 
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>

          </div>


        </div>
    );
};

export default Navbar;