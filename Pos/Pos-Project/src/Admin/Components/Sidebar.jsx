import React from 'react';

const Sidebar = () => {
    return (
        <div>
             <div>
  <div className="sidebar">
    <div className="logo" />
    <ul className="menu">
      <li>
        <a href="#">
          <i className="fa fa-dashboard" />
          <span>Dashboard</span>
        </a>
      </li>
      <li>
        <a href="#">
          <i className="fa fa-wpforms" />
          <span>Bill</span>
        </a>
      </li>
      <li>
        <a href="#">
          <i className="fa fa-windows" />
          <span>Product</span>
        </a>
      </li>
      <li>
        <a href="#">
          <i className="fa fa-cart-plus" />
          <span>Supplier</span>
        </a>
      </li>
      <li>
        <a href="#">
          <i className="fa fa-file-text" />
          <span>CRM</span>
        </a>
      </li> 
      <li>
        <a href="#">
          <i className="fa fa-edit" />
          <span>Report</span>
        </a>
      </li>
      <li className="dropdown-container"><a href="#">
          <i className="fa fa-user" />
          <span> User Management</span>
        </a>
        <ul className="dropdown">
          <li><a href="#">Manage-group</a></li>
          <li><a href="#">Manage-users</a></li>
        </ul>
      </li>
    </ul>
  </div>
  <div className="main--content">
    <div className="header--wrapper">
      <div className="header--title">
        <h2>POS</h2>
        <h1>Dashboard</h1>
      </div>
      <div className="user--info">
        <button className="dropbtn"> 
          <i className="fa fa-user" />
          <i className="fa fa-caret-down" />
        </button>
        <div className="dropdown-content">
          <a href="#"> <span>Profile</span></a>
          <a href="#"><span>Settings</span></a>
          <a href="#">  <span>Logout</span></a>
        </div>
      </div>
    </div>
    <main className="main-container">
      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <h3>PRODUCTS</h3>
            <span className="material-icons-outlined">inventory_2</span>
          </div>
          <h1>249</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>CATEGORIES</h3>
            <span className="material-icons-outlined">category</span>
          </div>
          <h1>249</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>CUSTOMERS</h3>
            <span className="material-icons-outlined">groups</span>
          </div>
          <h1>2490</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>ALERTS</h3>
            <span className="material-icons-outlined">notification_important</span>
          </div>
          <h1>2</h1>
        </div>
      </div>
      <div className="charts">
        <div className="charts-card">
          <h2 className="chart-title">Top 5 products</h2>
          <div id="bar-chart" />
        </div>
        <div className="charts-card">
          <h2 className="chart-title">Purchase and sales orders</h2>
          <div id="area-chart" />
        </div>
      </div>
    </main>
  </div>
</div>

        </div>
    );
};

export default Sidebar;