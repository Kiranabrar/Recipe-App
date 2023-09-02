import React from 'react'
import CategoryItem from './CategoryItem';
import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Category = () => {
 /*{ const [urlcat] = useState("https:/www.themealdb.com/api/json/v1/1/categories.php");
  const [items, setItems] = useState();
  const [shows, setShows] = useState(false);

  useEffect(() => {
    fetch(urlcat).then(res => res.json()).then(data => {
      setItems(data.categories);
      setShows(true);
    })
  }, [urlcat])
}*/
  


  const [shows, setShows] = useState(false);
  const [items, setItems]=useState([]);
  useEffect(() =>{
    setShows(true);
  getItems();
  },[]);
  async function getItems(){
    const response=await fetch(`https:/www.themealdb.com/api/json/v1/1/categories.php`);
    const data=await response.json();
    setItems(data.categories);
  }


  return (
    <>
    <Navbar/>
    
        
    
    <div className="main2">
    
    <h2>Categories</h2>
   
        {
          shows ? <CategoryItem data={items} /> : "not found"
        }
        </div>
       
    <Footer/>
   
    </>

  )
}

export default Category