import React, { useEffect } from 'react'
import { useState } from 'react'
import FoodItem from './FoodItem'
import RecipeIndex from './RecipeIndex'
import HomeSlider from './HomeSlider'
import Footer from './Footer'


const Food = () => {
  const [url, setUrl] = useState("https:/www.themealdb.com/api/json/v1/1/search.php?f=a")
  const [meals, setmeals] = useState();
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetch(url).then(res => res.json()).then(data => {

      setmeals(data.meals);
      setShow(true);
    })
  }, [url])

  const setIndex=(alpha) =>{
    setUrl(`https:/www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`)
  }

  const searchRecipe=(evt)=>{
    if (evt.key==="Enter"){
      setUrl(`https:/www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    }
  }

  return (
    <>
       <HomeSlider/>
      <div className="main">
        <div className="heading">
          <h1>Search Your Food Recipe</h1>
          <h4><em>"Looking for a recipe? Search for your favourite dish and discover new ones!"</em></h4>
        </div>
        <div className="searchBox">
          <input type="search" className="search-bar" placeholder='Search Recipe by Name or Letter' onChange={e=>setSearch(e.target.value)} onKeyPress={searchRecipe} />

        </div>
        
    
        
          {
            show ? <FoodItem data={meals} /> : "not found"
          }
       
        
        <div className="indexContainer"></div>
         <RecipeIndex alphaIndex={(alpha)=>setIndex(alpha)} />
      </div>
      
      <Footer/>
    </>
  )
}

export default Food