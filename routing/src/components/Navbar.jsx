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
                        <Link to="/">About</Link>
                    </li>

                    <li> 
                        <Link to="/">Service</Link>
                    </li>

                    <li> 
                        <Link to="/">Contact</Link>
                    </li>
                </ul>
            </div>

          </div>


        </div>
    );
};

export default Navbar;