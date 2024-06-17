import React from 'react'

import Fruit from './Fruit'
const Fruits = () => {
    let fruits =[
        {name:"Apple",price:100},
        {name:"Mango",price:10},
        {name:"Banana",price:1000},
        {name:"pineapple" ,price:200}
    ]
  return (
    <div>
      {fruits.map(fruit=>(
        <Fruit name={fruit.name} price={fruit.price}/>
      ))}
    </div>
  )
}

export default Fruits
