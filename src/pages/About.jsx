import React from 'react'
import about1 from '../assets/about1.jpg';
import about2 from '../assets/about2.jpg';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const About = () => {
  return (
    <>
    <Navbar/>
      <div className='hero-img'>
        <div className='heading'>
          <h1>About Us</h1>
          
        </div>
      </div>

      <div className='about'>
        <div className='left'>
          <h1>About our recipe app</h1>
          <p>
           We are passionate about food and sharing delicious recipes. Our app makes cooking fun and easy. We love to cook and want to
           help you discover new recipes. This website is simplifies meal planning.
          </p>
         
        </div>
        <div className='right'>
          <div className='img-container'>
            <div className='img-stack top'>
              <img src={about1}
                className="img"
                alt='true' />
            </div>
            <div className='img-stack bottom'>
              <img src={about2}
                className="img"
                alt='true' />
            </div>
          </div>
        </div>
      </div>
      <div className=" d-md-block p-5 mb-4">
        <div className="heading"> <h3>Recipe Cornor </h3>
          <p className="fs-4"><em>"Good food is all the sweeter when shared with good friends"</em></p>
        </div>
      </div>

      <Footer/>

    </>
  )
}

export default About