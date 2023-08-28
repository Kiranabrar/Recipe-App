import React from 'react';
import { useState } from 'react';
import FoodItem from './FoodItem';
const CategoryItem = ({ data }) => {

  const [selectedCategory, setSelectedCategory] = useState('');
  const [meals, setMeals] = useState([]);

  const fetchMealsByCategory = async (items) => {
    setSelectedCategory(items);
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${items}`);
    const data = await response.json();
    setMeals(data.meals);
  };
  return (
    <>
     
      <div className='container'>
        {
          (!data) ? "not found" : data.map(items => {
            return (

              <div className="card" key={items.idCategory} onClick={() => fetchMealsByCategory(items.strCategory)}
                style={{
                  fontWeight: items.strCategory === selectedCategory ? 'bold' : 'normal',
                  cursor: 'pointer',
                }}
              >
                <img src={items.strCategoryThumb} alt="" />
                <h3>{items.strCategory}</h3>
              </div>
            )
          })
        }
        </div>
      
    
       
        
        
            <h2>Meals</h2>
            {
             <FoodItem data={meals} /> 
            }
        
         
         

       

    </>
  )
}

export default CategoryItem