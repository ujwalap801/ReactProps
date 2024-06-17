import React from 'react'
import Vegetable from './Vegetable'
const Vegetables = () => {
    let vegetables = [
        {name:"Tomoto" ,price :40},
        {name:"Bendi" ,price :50},
        {name:"Brinjal" ,price :100},
    ]
  return (
    <>
   {vegetables.map(veg =>(
    <Vegetable key={veg.name} name={veg.name} price={veg.price}/>
   ))}
    </>
  )}
   

export default Vegetables;

