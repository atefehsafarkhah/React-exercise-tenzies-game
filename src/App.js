import React from 'react';
import './style.css'; 
import Die from './Die';
import {nanoid} from "nanoid"


function App() {
const [dice,setDice]=React.useState(getRandomNumbersArray())

function getRandomNumbersArray(){
  const randomNumbersArray = [];

  for (let i = 0; i < 10 ; i++) {
    const randomNumber = Math.ceil(Math.random() * 6);
    randomNumbersArray.push({value: randomNumber,
       isHeld:false,
       id:nanoid()
  })}

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
  setDice(getRandomNumbersArray())
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
