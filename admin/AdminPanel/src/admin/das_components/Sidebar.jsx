import React from 'react'
import { Link } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div>
    <aside id="sidebar" className="sidebar">
  <ul className="sidebar-nav" id="sidebar-nav">
    <li className="nav-item">
      <Link to='/dashboard' className="nav-link collapsed" href="index.html">
        <i className="bi bi-grid" />
        <span>Dashboard</span>
      </Link>
    </li>{/* End Dashboard Nav */}
   
  
    <li className="nav-item">
      <a className="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" href="#">
        <i className="bi bi-layout-text-window-reverse" /><span>Product</span><i className="bi bi-chevron-down ms-auto" />
      </a>
      <ul id="tables-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
        
        <Link to="/items">
           <i className="bi bi-circle" /><span>Add Item</span>
        </Link>
        <li>
          <Link to="/itemslist">
            <i className="bi bi-circle" /><span>List Item</span>
          </Link>
        </li>
        <Link to="/orderitemslist">
            <i className="bi bi-circle" /><span>Order Item</span>
          </Link>
      </ul>
    </li>{/* End Tables Nav */}
   
    <li className="nav-item">
      <a className="nav-link collapsed" href="users-profile.html">
        <i className="bi bi-person" />
        <span>Profile</span>
      </a>
    </li>{/* End Profile Page Nav */}
    <li className="nav-item">
      <a className="nav-link collapsed" href="pages-faq.html">
        <i className="bi bi-question-circle" />
        <span>F.A.Q</span>
      </a>
    </li>{/* End F.A.Q Page Nav */}
    <li className="nav-item">
      <a className="nav-link collapsed" href="pages-contact.html">
        <i className="bi bi-envelope" />
        <span>Contact</span>
      </a>
    </li>{/* End Contact Page Nav */}
    <li className="nav-item">
      <a className="nav-link collapsed" href="pages-register.html">
        <i className="bi bi-card-list" />
        <span>Register</span>
      </a>
    </li>{/* End Register Page Nav */}
    <li className="nav-item">
      <a className="nav-link collapsed" href="pages-login.html">
        <i className="bi bi-box-arrow-in-right" />
        <span>Login</span>
      </a>
    </li>{/* End Login Page Nav */}
    <li className="nav-item">
      <a className="nav-link collapsed" href="pages-error-404.html">
        <i className="bi bi-dash-circle" />
        <span>Error 404</span>
      </a>
    </li>{/* End Error 404 Page Nav */}
    <li className="nav-item">
      <a className="nav-link " href="pages-blank.html">
        <i className="bi bi-file-earmark" />
        <span>Blank</span>
      </a>
    </li>{/* End Blank Page Nav */}
  </ul>
</aside>{/* End Sidebar*/}

    </div>
  )
}

export default Sidebar
