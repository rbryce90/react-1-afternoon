import React, { Component } from 'react';

export class EvenAndOdd extends Component {
    constructor(props){
        super(props);
        this.state = {
            evenArray : [],
            oddArray : [],
            userInput : ''
        }
    }
    userI(value){
        console.log(value)
       this.setState({
           userInput: value,
       })
    }
    updateEvenOdd(){
        const { evenArray, oddArray } = this.state;
        let newStr = this.state.userInput.split(',').map( (element) => parseInt(element, 10));
        newStr.map( (element) => element % 2 === 0 ? evenArray.push(element) : oddArray.push(element));
        this.setState({
            evenArray: evenArray,
            oddArray: oddArray
        })
    }
    

    
  render() {
    const {evenArray, oddArray, userInput} = this.state;
    return (
      <div className='puzzleBox evenAndOddPB'>
          <h4> Evens and Odds  </h4>
          <input className='inputLine' onChange={  (event) => this.userI(event.target.value) } value={userInput} />
          <button className='confirmationButton' onClick={  
              () => this.updateEvenOdd(userInput)
          }> "Button" </button>
          <span className='resultsBox'>Evens:{JSON.stringify(evenArray)} </span>
          <span className='resultsBox'> Odd: {JSON.stringify(oddArray)} </span>
      </div>
    )
  }
}

export default EvenAndOdd
