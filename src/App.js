import React from 'react';
import './style.css'; 
import Die from './Die'; 
import {nanoid} from "nanoid";
import Confetti from 'react-confetti';


function App() {
const [dice,setDice]=React.useState(getRandomNumbersArray())
const [tenzies,setTenzies]=React.useState(false)

React.useEffect(()=>{
const allHeld = dice.every(die => die.isHeld)
const firstValue = dice[0].value
const allSameValue = dice.every(die=> die.value === firstValue)
if (allHeld && allSameValue){
  setTenzies(true)
  console.log(" you won!")
}
},[dice])


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
                   {tenzies && <Confetti />}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="container" >
    {diceElements}
     </div>
    <button className='roll' onClick={Roll}>
      {tenzies? ' New Game' : ' Roll'}
    </button> 
    </main>
  );
}

export default App;
