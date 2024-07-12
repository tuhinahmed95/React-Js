import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Navbar from '../../das_components/Navbar'
import Sidebar from '../../das_components/Sidebar'
import Footer from '../../das_components/DasFooter'
import { NavLink, Link } from 'react-router-dom';

const OrderList = () => {
    const [items, setItems] = useState([]);

    const itemDelete = (id) => {
        // axios.delete("http://localhost/react-php/php-api/product/deleteItem.php?id=" + id)
        //     .then((res) => (console.log(res)))

        axios.get("http://localhost/react-php/php-api/product/listorderitem.php")
            .then((res) => setItems(res.data))
    }

     useEffect(() => {
       axios.get("http://localhost/react-php/php-api/product/listorderitem.php")
         .then((res) => setItems(res.data))
    }, [])
  return (
    <div>
      <div>
     <Navbar />
      <Sidebar />
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Blank Page</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item">Pages</li>
              <li className="breadcrumb-item active">Blank</li>
            </ol>
          </nav>
        </div>
        {/* End Page Title */}
        <section className="section">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                {/* <div className="card-body">
                  <h5 className="card-title">Table with stripped rows</h5> */}
                  {/* Table with stripped rows */}
                  <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">FirstName</th>
                                <th scope="col">Latname</th>
                                <th scope="col">Email</th>
                                <th scope="col">Street</th>
                                <th scope="col">City</th>
                                <th scope="col">State</th>
                                <th scope="col">Zipcode</th>
                                <th scope="col">Country</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Totalbill</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((data, i) => {
                                return (
                              
                                        <tr key={i}>
                                            <th scope="row">{++i}</th>
                                            <td>{data.firstname}</td>
                                            <td>{data.lastname}</td>
                                            <td>{data.email}</td>
                                            <td>{data.street}</td>
                                            <td>{data.city}</td>
                                            <td>{data.state}</td>
                                            <td>{data.zipcode}</td>
                                            <td>{data.country}</td>
                                            <td>{data.phone}</td>
                                            <td>{data.totalbill}</td>
                                            {/* <td>
                                                <img className='w-50' src={`http://localhost/react-php/php-api/product/images/${data.photo}`} />
                                            </td> */}
                                            <td>
                                                {/* <NavLink to={`/itemedit/${data.id}`}>
                                                    <button className='btn btn-info mb-2 mt-2'>Update</button>
                                                </NavLink> */}
                                                {/* <button className='btn btn-danger' onClick={() => { itemDelete(data.id) }}>Delete</button> */}
                                            </td>
                                        </tr>
                               
                                )
                            })}
                        </tbody>
              </table>
                  {/* End Table with stripped rows */}
                {/* </div> */}
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* End #main */}

      <Footer />
    </div>
    </div>
  )
}

export default OrderList
