import React from 'react'
import { useNavigate } from 'react-router-dom';
const FoodItem = ({ data }) => {
    console.log(data);
    let navigate=useNavigate();
    return (
        <>
        <div className="container">
        {
                (!data) ? "not found" : data.map(item => {
                    return (
                        <div className="card" key={item.idMeal} onClick={()=>{navigate(`/${item.idMeal}`)}}>
                            <img src={item.strMealThumb} alt="" />
                            <h3>{item.strMeal}</h3>
                        </div>
                    )
                })
            }
        </div>
           

        </>
    )
}

export default FoodItem