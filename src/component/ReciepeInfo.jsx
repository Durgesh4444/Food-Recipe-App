import React, { useState } from "react";
import { useParams } from "react-router-dom";

const ReciepeInfo = () => {
  const [item, setItem] = useState();

  // eslint-disable-next-line 

  const [className, setClassName] = useState();
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
          <h1 className="tittle">{item.strMeal}</h1>
          <div className="content">
            <img className="img" src={item.strMealThumb} alt="img" />
            <div className="inner-content">
              {/* <h2> Origin :{item.strArea} Reciepe</h2>
                <h2>Category :{item.strCategory}</h2> */}
              <h1>Ingradient</h1>
              <div className="name">
                <h4 className={className}>
                  {item.strIngredient1.toUpperCase()} {"  :  "}{item.strMeasure1}
                </h4>
                <h4 className={className}>
                  {item.strIngredient2.toUpperCase()} {"  :  "}{item.strMeasure2}
                </h4>
                <h4 className={className}>
                  {item.strIngredient3.toUpperCase()} {"  :  "}{item.strMeasure3}
                </h4 >
                <h4 className={className}>
                  {item.strIngredient4.toUpperCase()} {"  :  "}{item.strMeasure4}
                </h4>
                
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
