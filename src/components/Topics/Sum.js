import React, { Component } from 'react'

export class Sum extends Component {
  constructor(props){
    super(props);
    this.state ={
      number1: 0,
      number2: 0,
      sum: null
    }
  }
  updateNumber1(value){
    this.setState({
      number1: parseInt(value, 10),
    })
  }
  updateNumber2(value){
    this.setState({
      number2: parseInt(value, 10),
    })
  }

  solveProblem(num1, num2){
    this.setState({
      sum: num1 + num2,
    })
  }

  render() {
    return (
      <div className="puzzleBox sumPB">  
        <h4>Sum</h4>   
        <input className="inputLine" onChange={ (event) => this.updateNumber1(event.target.value) }/>
        <input className="inputLine" onChange={ (event) => this.updateNumber2(event.target.value) }/>
        <button className="confirmationButton" onClick={ () => this.solveProblem(this.state.number1,this.state.number2) }> "Button" </button>
        <span className="resultsBox"> Sum: {this.state.sum} </span>

      </div>
    )
  }
}

export default Sum
