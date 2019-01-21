import React, { Component } from "react";

export class FilterObject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [
        {
          name: "Jimmy Joe",
          title: "Hack0r",
          age: 12
        },
        {
          name: "Jeremy Schrader",
          age: 24,
          hairColor: "brown"
        },
        {
          name: "Carly Armstrong",
          title: "CEO"
        }
      ],

      userInput: "",
      filteredEmployees: []
    };
  }
  updateUserInput(value) {
    console.log(value);
    this.setState({
      userInput: value
    });
  }
  nowFilter(prop){
    var employees = this.state.employees;
    var filteredEmployees = [];
    for ( var i = 0; i < employees.length; i++ ) {
      if ( employees[i].hasOwnProperty(prop)) {
        filteredEmployees.push(employees[i]);
      }
    }
    console.log(filteredEmployees);
    this.setState({ filteredEmployees: filteredEmployees });
  }

  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Objects</h4>
        <span className="puzzleText">{JSON.stringify(this.state.employees)} </span>
        <input
          type="text"
          className="inputLine"
          onChange={ event => this.updateUserInput(event.target.value)}
        />
        <button className="confirmationButton" onClick={ ( ) => this.nowFilter(this.state.userInput)} >
            So called "Button"
        </button>
        <span className="resultsBox filterObjectRB">Filtered:{JSON.stringify(this.state.filteredEmployees)} </span>
      </div>
    );
  }
}

export default FilterObject;
