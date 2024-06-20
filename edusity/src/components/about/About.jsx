import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left"> 
            <img src={about_img} className='about-img' alt="" />
            <img src={play_icon} className='play-icon'  alt="" />
        </div>
        <div className="about-right"> 
            <h3>About University</h3>
            <h2>Nurturing Tommorow's Leader Today</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo animi repellat, ullam, odit error ab delectus modi! Consequuntur dolor optio laboriosam perferendis eligendi aliquam quidem doloremque et? Et modi ipsam sit, soluta corrupti, blanditiis quisquam aspernatur voluptate laboriosam reprehenderit excepturi ex?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi porro nemo nesciunt voluptatum, maiores omnis nam officiicabo id voluptatibus, velit rem distinctio reprehenderit sapiente dolorum amet? Quae, nobis.</p>
        </div>
      
    </div>
  )
}

export default About
