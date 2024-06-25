import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav className='nav d-flex w-100 bg-primary'> 
                <ul className='nav-item align-items-center'> 
                    <li className='nav-link text-light'>Home</li>
                    <li className='nav-link text-light'>about</li>
                    <li className='nav-link text-light'>service</li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;