import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Navbar from '../../das_components/Navbar'
import Sidebar from '../../das_components/Sidebar'
import Footer from '../../das_components/DasFooter'
import { NavLink, Link } from 'react-router-dom';

const ListProduct = () => {
    const [items, setItems] = useState([]);

    const itemDelete = (id) => {
        axios.delete("http://localhost/react-php/php-api/product/deleteItem.php?id=" + id)
            .then((res) => (console.log(res)))

        axios.get("http://localhost/react-php/php-api/product/getItems.php")
            .then((res) => setItems(res.data))
    }

    useEffect(() => {
        axios.get("http://localhost/react-php/php-api/product/getItems.php")
            .then((res) => setItems(res.data))
    }, [])
  return (
    <div>
      <div>
     <Navbar />
      <Sidebar />
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Category List</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item">Pages</li>
              <li className="breadcrumb-item active">Product</li>
            </ol>
          </nav>
        </div>
        {/* End Page Title */}
        <section className="section">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Category Table </h5>
                  {/* Table with stripped rows */}
                  <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Product Name</th>
                                <th scope="col">Price</th>
                                <th scope="col">Photo</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((data, i) => {
                                return (
                              
                                        <tr key={i}>
                                            <th scope="row">{++i}</th>
                                            <td>{data.name}</td>
                                            <td>{data.details}</td>
                                            <td>
                                                <img className='w-50' src={`http://localhost/react-php/php-api/product/images/${data.photo}`} />
                                            </td>
                                            <td>
                                                <NavLink to={`/itemedit/${data.id}`}>
                                                    <button className='btn btn-info mb-2 mt-2'>Update</button>
                                                </NavLink>
                                                <button className='btn btn-danger' onClick={() => { itemDelete(data.id) }}>Delete</button>
                                            </td>
                                        </tr>
                               
                                )
                            })}
                        </tbody>
              </table>
                  {/* End Table with stripped rows */}
                </div>
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

export default ListProduct
