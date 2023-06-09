import React from 'react';
import './style.css'; 
import Die from './Die';
import {nanoid} from "nanoid"


function App() {
const [dice,setDice]=React.useState(getRandomNumbersArray())


function getNewRandomNumber(){
  const randomNumber = Math.ceil(Math.random() * 6);
  return{
    value: randomNumber,
    isHeld:false,
    id:nanoid() 
  }
}

function getRandomNumbersArray(){
  const randomNumbersArray = [];

  for (let i = 0; i < 10 ; i++) {
    randomNumbersArray.push(getNewRandomNumber())}

  return randomNumbersArray;
}
 
const diceElements= dice.map(die=>  <Die  key={die.id} value={die.value}  isHeld={die.isHeld} HoldDice={()=> HoldDice(die.id) } />)

function HoldDice(id){
setDice(oldDice => oldDice.map(die => {
  return die.id === id ? {...die, isHeld: !die.isHeld} : die
}
  ))
}

function Roll(){
  setDice(oldDice => oldDice.map(die => {
    return    die.isHeld===false ? getNewRandomNumber() : die
  }
    ))



  // setDice(getRandomNumbersArray())
}
return (
    
    <main>
      <div className="container" >
    {diceElements}
     </div>
    <button className='roll' onClick={Roll}>Roll</button>  
    </main>
  );
}

export default App;
