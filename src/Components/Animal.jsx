import React from 'react'

const Animal = () => {
    let animals =["cat","dog","horse"]
  return (
    <>
     {animals.map((animal) =>(
        <h1>{animal}</h1>
     ))}
    </>
  )
}

export default Animal
