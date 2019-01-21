import React, { Component } from 'react';

export class Palindrome extends Component {
  constructor(props){
    super(props);
    this.state = {
      userInput : '',
      palidrome : '',
    }
  }
  updateUserI(value){
    this.setState({
      userInput: value,
    })
  }
  testPalidrome(){
    let palidrome = this.state.userInput.split('').reverse();
    for(let i = 0; i < palidrome.length; i++){
      if (palidrome[i] === this.state.userInput.charAt(i)){
        this.setState({
          palidrome : 'true',
        })
      }else{
        this.setState({
          palidrome : 'false',
        })
      }
    }
  }

  render() {
    return (
      <div className="puzzleBox filterStringPB">  
        <h4>Palidrome</h4>
          <input className="inputLine" onChange={ (event) => this.updateUserI(event.target.value) }/>
          <button className="confirmationButton" onClick={ () => this.testPalidrome() }>Another "Button"</button>
          <span className="resultsBox">Palidrome:{this.state.palidrome}</span>


      </div>
    )
  }
}

export default Palindrome
