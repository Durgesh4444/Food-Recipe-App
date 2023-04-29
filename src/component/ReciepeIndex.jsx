import React from 'react'

const ReciepeIndex = (props) => {
    const intial = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let num = 0;


    const changeIndex = props.alphaIndex;
  return (
    <>
        {
            intial.map( letter => <div className='numBox' key={num++} onClick={()=>changeIndex(letter)}>{letter}</div>)
        }
    </>
  )
}

export default ReciepeIndex