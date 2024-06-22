import React from 'react'
import './Quiz.css'

const Quiz = () => {
  return (
    <div className='container'>
        <h1>Quiz App</h1>
        <hr />
        <h2>Which Device Is Required For The Internet Connection?</h2>
        <ul> 
            <li>Modem</li>
            <li>Router</li>
            <li>Lab Cable</li>
            <li>Pen Drive</li>
        </ul>
        <button>Next</button>
      
    </div>
  )
}

export default Quiz
