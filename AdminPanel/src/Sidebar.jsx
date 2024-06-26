import React from 'react'
import { BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsListCheck, BsMenuButtonWideFill, BsFillGearFill } from 'react-icons/bs'

function Sidebar() {
  return (
    <aside id='sidebar'>

     <div className='sidebar-titel'> 
        <div className='sidebar-brand'> 
            <BsCart3 className='icon_header'/> SHOP
        </div>
        <span className='icon close_icon'>X</span>
     </div>

     <ul className='sidebar-list'> 
        <li className='sidebar-list-item'> 
            <a href=""> 
                <BsCart3 className='icon'/> Dashboard
            </a>
        </li>

        <li className='sidebar-list-item'> 
            <a href=""> 
                <BsCart3 className='icon'/> Products
            </a>
        </li>

        <li className='sidebar-list-item'> 
            <a href=""> 
                <BsCart3 className='icon'/> Categories
            </a>
        </li>

        <li className='sidebar-list-item'> 
            <a href=""> 
                <BsCart3 className='icon'/> Customers
            </a>
        </li>

        <li className='sidebar-list-item'> 
            <a href=""> 
                <BsCart3 className='icon'/> Inventory
            </a>
        </li>

        <li className='sidebar-list-item'> 
            <a href=""> 
                <BsCart3 className='icon'/> Reports
            </a>
        </li>

        <li className='sidebar-list-item'> 
            <a href=""> 
                <BsCart3 className='icon'/> Setting
            </a>
        </li>
     </ul>

    </aside>
  )
}

export default Sidebar
