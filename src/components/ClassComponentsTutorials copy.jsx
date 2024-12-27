// Components
import React, { Component } from 'react'

class ClassComponentsTutorials extends Component {
  // Constructors
  constructor(props){
    super(props);

    // state
    this.state = {
        count: 0
    }

    // Bind Events
    this.countPlusHandleClick = this.countPlusHandleClick.bind(this)
    this.countMinusHandleClick = this.countMinusHandleClick.bind(this)
  }// end constructor
  
  // cdm

  // Event
  countPlusHandleClick() {
    this.setState({count:this.setState.count+1});
  } // end event

  countMinusHandleClick() {
    this.setState({count:this.setState.count-1});
  } // end event

  render(){
    return(
        <div>
            <h1>Class Component</h1>
            <p>Count: {this.state.count}</p>
            <button className="btn btn-primary" onClick={this.countPlusHandleClick}>+</button>
            <button className="btn btn-danger ms-2" onClick={this.countMinusHandleClick}>-</button>
        </div>
    );
  }
} //end ClassComponentsTutorials

export default ClassComponentsTutorials;

