import React from 'react'
import './Main.css'
import { assets } from '../assets/assets'

const Main = () => {
  return (
    <div className='main'>
        <div className="nav"> 
            <p>Gemini</p>
            <img src={assets.user_icon} alt="" />
        </div>

        <div className="main-container"> 
            <div className="greet"> 
                <p><span>Hello, Dev</span></p>
                <p>How Can Help You Today</p>
            </div>
            <div className="cards"> 
                <div className="card"> 
                    <p>Suggest beautiful places to see on a upcoming road trip</p>
                    <img src={assets.compass_icon} alt="" />
                </div>

                <div className="card"> 
                    <p>Briefly summerise this concepts: urban planning</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>

                <div className="card"> 
                    <p>Brainstrom team bonding activites for our work retreat</p>
                    <img src={assets.message_icon} alt="" />
                </div>

                <div className="card"> 
                    <p>Improve the roadability of the following code</p>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div>

            <div className="main-bottom"> 
                <div className="search-box"> 
                    <input type="text" placeholder='Enter a prompt here'/>
                    <div> 
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        <img src={assets.send_icon} alt="" />
                    </div>
                </div>
                <p className='bottom-info'>Gemini may display inaccurate info,including about pepole,so doubbl-check ist rspones your privacy gemini app </p>
            </div>
        </div>
    </div>
  )
}

export default Main
