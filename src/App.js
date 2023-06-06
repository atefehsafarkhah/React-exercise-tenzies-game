import React from 'react';
import './style.css'; 
import Die from './Die';


function App() {
const [dice,setDice]=React.useState(getRandomNumbersArray())


function getRandomNumbersArray(){
  const randomNumbersArray = [];

  for (let i = 0; i < 10 ; i++) {
    const randomNumber = Math.ceil(Math.random() * 6);
    randomNumbersArray.push(randomNumber);
  }

  return randomNumbersArray;
}

const diceElements= dice.map(die=> <Die value={die}/>)
return (
    
    <main>
      <div className="container">
    {diceElements}
     </div>

    </main>
  );
}

export default App;
