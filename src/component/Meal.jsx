import React, { useEffect, useState } from 'react'
import Mealitem from './Mealitem'
import ReciepeIndex from './ReciepeIndex'

const Meal = () => {
  const [url, setUrl]= useState("https://www.themealdb.com/api/json/v1/1/search.php?f=c");

  const [item, setItem] =useState();

  const [show, setShow] =useState(false)

  const [search, setSearch] =useState()

  useEffect(() =>{
    fetch(url).then(res=>res.json().then(data =>{console.log(data.meals);
    setItem(data.meals);
    setShow(true)
  }))
  },[url])

  const setIndex = (intial) =>{
    setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${intial}`)
  }

  const searchReciepe = (evt) =>{
    if(evt.key === "Enter"){
      setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    }

  }
  
  return (
    <>
        <div className='main'>
            <div className='heading'>
                <h1> Discover Tasty Recipes at Your Fingertips</h1>
                <h2>Search Your Food Recipe Now!</h2>
            </div>
            <div className="searchbox">
              <input type="search" className='search-bar' placeholder='Search Your Favourite Recipes here........' onChange={e=>setSearch(e.target.value.toUpperCase())} value={search} onKeyPress={searchReciepe}/>
              <button onClick={() =>setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)}>Search</button>
            </div>
            <div className="container">
              {
                show ? <Mealitem data={item} /> : "Not Found"
              }
        
           
            </div>

            <div className='index-container'>
              <ReciepeIndex alphaIndex={setIndex}/>
            </div>
        </div>
    </> 
  )
}

export default Meal