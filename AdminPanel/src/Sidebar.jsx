import React from 'react'
import { BsCart, Bsgrid1X2Fill,BsFillArchiveFill,BsFillGrid3X2GapFill, BsPepoleFill, BsListCheck, BsMenuButtonWideFill, BsFillGearFill } from 'react-icons/bs'

function Sidebar() {
  return (
    <aside id='sidebar'>
      <div className='sidebar-title'> 

        <div className='sidebar-brand'> 
            <BsCart className='icon-header'/> SHOP
        </div>
        <span className='icon close_icon'>X</span>
      </div>

      <ul className='sidebar-list'> 
        <li className='sidebar-list-item'> 
            <a href=""> 
                <Bsgrid1X2Fill className='icon'/> Dashboard
            </a>
        </li>

        <li className='sidebar-list-item'> 
            <a href=""> 
                <BsFillArchiveFill className='icon'/> Products
            </a>
        </li>

        <li className='sidebar-list-item'> 
            <a href=""> 
                <BsFillGrid3X2GapFill className='icon'/> Categories
            </a>
        </li>

        <li className='sidebar-list-item'> 
            <a href=""> 
                <BsPepoleFill className='icon'/> Customers
            </a>
        </li>

        <li className='sidebar-list-item'> 
            <a href=""> 
                <BsListCheck className='icon'/> Inventory
            </a>
        </li>

        <li className='sidebar-list-item'> 
            <a href=""> 
                <BsMenuButtonWideFill className='icon'/> Reports
            </a>
        </li>

        <li className='sidebar-list-item'> 
            <a href=""> 
                < BsFillGearFill className='icon'/> Setting
            </a>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar
