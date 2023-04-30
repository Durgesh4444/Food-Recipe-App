import React, { useState } from "react";
import { useParams } from "react-router-dom";

const ReciepeInfo = () => {
  const [item, setItem] = useState();

  // eslint-disable-next-line 

  
// eslint-disable-next-line 
  let vid;

  const { MealId } = useParams();
  if (MealId !== "") {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data.meals[0]);
      });
  }

  if (item) {
    const url = item.strYoutube;
    const str = url.split("=");
    vid = str[1];
  }

  return (
    <>
      {!item ? (
        ""
      ) : (
        <>
          <h1 className="tittle">{item.strMeal.toUpperCase()}</h1>
          <div className="content">
            <img className="img" src={item.strMealThumb} alt="img" />
            <div className="inner-content">
              {/* <h2> Origin :{item.strArea} Reciepe</h2>
                <h2>Category :{item.strCategory}</h2> */}
              <h1>Ingradient</h1>
              <div className="name">
                <div>
            
              {(item.strIngredient1 !== null && item.strIngredient1 !== "") ? <h4>{item.strIngredient1.toUpperCase()+ " : "} {item.strMeasure1}</h4> : ""} 
               
              {(item.strIngredient2 !== null && item.strIngredient2 !== "") ? <h4>{item.strIngredient2.toUpperCase()+ "  : " } {item.strMeasure2}</h4> : ""}  
                
              {( item.strIngredient3 !== null && item.strIngredient3 !== "") ? <h4>{item.strIngredient3.toUpperCase()+ " :  "}{item.strMeasure3}</h4> :""} 
               
                {( item.strIngredient4 !== null && item.strIngredient4 !== "") ? <h4>{item.strIngredient4.toUpperCase()+ " : "}{item.strMeasure4}</h4> : ""} 
           
                
                  {( item.strIngredient5 !== null && item.strIngredient5 !== "") ? <h4>{item.strIngredient5.toUpperCase()+ " : "}{item.strMeasure5}</h4> : ""} 
                  
               
               
                {(item.strIngredient6 !== null && item.strIngredient6 !== "") ? <h4>{item.strIngredient6.toUpperCase()+ " : "}{item.strMeasure6}</h4> : ""} 
               
                {( item.strIngredient7 !== null && item.strIngredient7 !== "") ? <h4>{item.strIngredient7.toUpperCase()+ " : "}{item.strMeasure7}</h4> :""} 
                
                {(item.strIngredient8 !== null && item.strIngredient8 !== "") ? <h4>{item.strIngredient8.toUpperCase()+ " : "}{item.strMeasure8}</h4> : ""} 
                </div>
                <div>
                {(item.strIngredient9 !== null && item.strIngredient9 !== "") ? <h4>{item.strIngredient9.toUpperCase()+ " : "}{item.strMeasure9}</h4> : ""} 

                {(item.strIngredient10 !== null && item.strIngredient10 !== "") ? <h4>{item.strIngredient10.toUpperCase()+ " : "}{item.strMeasure10}</h4> : ""} 
               
                {(item.strIngredient11 !== null && item.strIngredient11 !== "") ? <h4>{item.strIngredient11.toUpperCase()+ " : "}{item.strMeasure11}</h4> : ""} 
                
                {(item.strIngredient12 !== null && item.strIngredient12 !== "") ? <h4>{item.strIngredient12.toUpperCase()+ " : "}{item.strMeasure12}</h4> : ""} 
                {(item.strIngredient13 !== null && item.strIngredient13 !== "") ? <h4>{item.strIngredient13.toUpperCase()+ " : "}{item.strMeasure13}</h4> : ""} 

                {(item.strIngredient14 !== null && item.strIngredient14 !== "") ? <h4>{item.strIngredient14.toUpperCase()+ " : "}{item.strMeasure14}</h4> : ""} 

                {(item.strIngredient15 !== null && item.strIngredient15 !== "") ? <h4>{item.strIngredient15.toUpperCase()+ " : "}{item.strMeasure15}</h4> : ""} 

                {(item.strIngredient16 !== null && item.strIngredient16 !== "") ? <h4>{item.strIngredient16.toUpperCase()+ " : "}{item.strMeasure16}</h4> : ""} 
                </div>
              </div>
            </div>
          </div>
          <div className="ingredent">
            {/* <h1>Ingradient</h1>
            <div>
                <h4>{item.strIngredient1}:{item.strMeasure1}</h4>
                <h4>{item.strIngredient2}:{item.strMeasure2}</h4>
                <h4>{item.strIngredient3}:{item.strMeasure3}</h4>
                <h4>{item.strIngredient4}:{item.strMeasure4}</h4>
                <h4>{item.strIngredient5}:{item.strMeasure5}</h4>
                <h4>{item.strIngredient6}:{item.strMeasure6}</h4>
                <h4>{item.strIngredient7}:{item.strMeasure7}</h4>
                <h4>{item.strIngredient8}:{item.strMeasure8}</h4>
            </div> */}
          </div>
          <div className="instruction">
            <h1>Instruction</h1>
            <h3>{item.strInstructions}</h3>
          </div>
          <div className="youtube">
            <iframe
              src={`https://www.youtube.com/embed/${vid}`}
              title="vid"
              frameborder="0"
            ></iframe>
          </div>
        </>
      )}
    </>
  );
};

export default ReciepeInfo;
