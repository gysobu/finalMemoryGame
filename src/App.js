import React, { Component } from 'react';
import './App.css';
import MemoryCard from './MemoryCard';
function generateDeck(){
  let symbols=['a','b','c','d','e','f','g','h']
  let deck=[]
  for(let i=0;i<16;i++){
    deck.push({isFlipped:false,symbol:symbols[i%8]})
  }
  shuffle(deck)
  return deck;
}
function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
  }
  return a;
}


class App extends Component {
  constructor(){
    super();
    this.state={
      deck:generateDeck(),
      pickedCards:[]

    };
  }

  pickCard(cardIndex){

    

  }
  render() {
    let cardsJSX = this.state.deck.map((card,index)=>{
      return <MemoryCard key={index} isFlipped={card.isFlipped} symbol={card.symbol}/>

    })
      
    
    return (
      <div className="App">
        <header className="App-header">
          <title>Memory Game</title>
          <subtitle>Match cards to win</subtitle>  
        </header>
        <div>
        {cardsJSX.slice(0,4)}
        
        </div>
        <div>
       
        {cardsJSX.slice(4,8)}
        
        </div>
        <div>
        
        {cardsJSX.slice(8,12)}
        
        </div>
        <div>
        
        {cardsJSX.slice(12,16)}
        </div>
    </div>
    );
  }
}

export default App;