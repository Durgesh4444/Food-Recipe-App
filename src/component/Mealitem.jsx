import React from 'react'
import { useNavigate } from 'react-router-dom';

const Mealitem = (props) => {
  const data = props.data;

  let navigate = useNavigate();


  return (
    <>
    {
      (!data)?  <h1 className='not'>Not Found</h1>: data.map(item =>
        <div className="card" key={item.idMeal} onClick={() =>{navigate(`/${item.idMeal}`)}}>
            <img src={item.strMealThumb} alt="" />
            <h2>{item.strMeal}</h2>
            
        </div>
      )
    }


    </>
  )
}

export default Mealitem