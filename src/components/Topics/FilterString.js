import React, { Component } from 'react';

export class FilterString extends Component {
  constructor(props){
    super(props);
    this.state ={
      names: ['bill', 'ted','lucy','ricky','fonzie'],
      userInput: '',
      filteredNames: [],
    }
  }
  updateStr(value){
    this.setState({
      userInput: value,
    })
  }
  filterStr(prop){
    var names = this.state.names;
    console.log(names)
    var filtered = [];
    names.map( (element) => element.includes(prop) ? filtered.push(element): null
    );
    this.setState({
      filteredNames : filtered,
    })
    console.log(this.state.filtered)
  }

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Filter String</h4>
        <span className="puzzleText">{JSON.stringify(this.state.names)}</span>
        <input className="inputLine" onChange={ (event) => this.updateStr(event.target.value) }/>
        <button className="confirmationButton" onClick={ () => this.filterStr(this.state.userInput) }>  This other so called "Button"</button>
        <span className="resultsBox filterStringRB">Filtered: {this.state.filteredNames} </span>

      </div>
    )
  }
}

export default FilterString
