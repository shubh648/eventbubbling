import React, { Component } from 'react'

export default class BubblingSolution extends Component {
  state = {
        outerDiv:"",
        innerDiv:""
    }
  outerDiv = (e) =>{
       return (this.state.outerDiv==="outerClicked")?this.setState({ outerDiv:""})
       :this.setState({ outerDiv:"outerClicked"})        
      }
      
  innerDiv = (e) =>{
    e.stopPropagation();
    return (this.state.innerDiv==="innerClicked")?this.setState({ innerDiv:""})
    :this.setState({ innerDiv:"innerClicked"})
    
    }
    
  render() {
    return (
      <div className="solution">
        <h1>Solution of event bubbling:</h1><br/>
        <div className={"outer_div "+this.state.outerDiv} onClick={this.outerDiv}>
            <div className={"inner_div "+this.state.innerDiv} onClick={this.innerDiv}>

            </div>
        </div>
      </div>
    )
  }
}
