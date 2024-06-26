import React from 'react'
import { BsCart } from 'react-icons/bs'

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
                <BsCart className='icon'/> Dashboard
            </a>
        </li>

        <li className='sidebar-list-item'> 
            <a href=""> 
                <BsCart className='icon'/> Products
            </a>
        </li>

        <li className='sidebar-list-item'> 
            <a href=""> 
                <BsCart className='icon'/> Categories
            </a>
        </li>

        <li className='sidebar-list-item'> 
            <a href=""> 
                <BsCart className='icon'/> Customers
            </a>
        </li>

        <li className='sidebar-list-item'> 
            <a href=""> 
                <BsCart className='icon'/> Inventory
            </a>
        </li>

        <li className='sidebar-list-item'> 
            <a href=""> 
                <BsCart className='icon'/> Reports
            </a>
        </li>

        <li className='sidebar-list-item'> 
            <a href=""> 
                <BsCart className='icon'/> Setting
            </a>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar
