import React from 'react'

const RecipeIndex = ({alphaIndex}) => {
    const alpha=["A", "B", "C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    var num=0;
  return (
    <>
       {
        alpha.map(meals=>{
            return(
                <div className="numBox" key={num++} onClick={()=>alphaIndex(meals)}>
                    <h3>{meals}</h3>
                </div>
            )
        })
       }
    </>
  )
}

export default RecipeIndex