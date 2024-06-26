import React from 'react'
import { BsFillArchiveFill, BsFillGrid3X3GapFill,  BsPepoleFill, BsFillBellFill } from 'react-icons/bs'



function Home() {
  return (
    <main className='main-container'>
      <div className='main'> 
        <h3>Dashborad</h3>
      </div>

      <div className='main-card'> 
        <div className="card"> 
            <div className='card-inner'> 
                <h3>PRODUCTS</h3>
                <BsFillArchiveFill className='card_icon'/>
            </div>
              <h1>300</h1>
          </div>

          <div className="card"> 
            <div className='card-inner'> 
                <h3>CATEGOTIES</h3>
                <BsFillGrid3X3GapFill className='card_icon'/>
            </div>
              <h1>12</h1>
          </div>

          <div className="card"> 
            <div className='card-inner'> 
                <h3>CUSTOMERS</h3>
                <BsPepoleFill className='card_icon'/>
            </div>
              <h1>35</h1>
          </div>

          <div className="card"> 
            <div className='card-inner'> 
                <h3>ALERTS</h3>
                <BsFillBellFill className='card_icon'/>
            </div>
              <h1>45</h1>
          </div>
      </div>
    

    </main>
  )
}

export default Home
