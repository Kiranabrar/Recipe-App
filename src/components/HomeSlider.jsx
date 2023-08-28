import React,{ } from "react";
import bg2 from '../assets/bg2.jpeg'
import bg5 from '../assets/bg5.webp';
import Navbar from "./Navbar";
 

function Banner()
{
  
 return(
  <React.Fragment>
  <Navbar/>
   <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">   
  
    <div className="slider carousel-item active">
      <img src={bg5} className=" d-block w-100 d-sm-block" style={{height:500}} alt='...'/>
      <div className="carousel-caption d-md-block p-5 mb-5">
        <h3>Recipe Cornor </h3>
        <p className="fs-4"><em>Good food, good mood. Hungry for success in every recipe.</em></p>
      </div>
    </div>
    
      <div className="carousel-item ">
      <img src={bg2} className="d-block w-100"  style={{height:500}} alt='...'/>
      <div className="carousel-caption d-md-block p-5 mb-5 ">
        <h3>Foodie</h3>
        <p className="fs-4"><em>Count the memories, not the calories, enjoy a taste of heaven.</em></p>
      </div>
    </div>
    
   
   
    
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  </React.Fragment>

 );
}
export default Banner;