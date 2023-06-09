import React from "react";
import { ReactDOM } from "react";

export default  function Die(props) {
 const dies=[
    {
    id: 1,
    value:1
    },
    {
    id: 2,
    value:2
    },
    {
     id: 3,
     value:3
    },
    {
    id: 4,
    value:4
    },
    {
    id: 5,
    value:5
    },
    {
    id: 6,
    value:6
    }
    ,
    {
    id: 7,
    value:1
    },
    {
    id: 8,
    value:2
    },
    {
    id: 9,
    value:3
    },
    {
    id: 10,
    value:4
    }
]

 const styles={
   backgroundColor: props.isHeld? "mediumspringgreen": "white"
 }

   return(
    <div className="die" style={styles} onClick={props.HoldDice}>
    <h1>{props.value}</h1>   
    </div>
   ) 
   }