import React, { Component } from 'react'

// Using state 

 class ClassComp extends Component 
 {
    constructor()
    {
        super()
        this.state = {
            message : 'Welcome visitor'
        }
    }
    handledata()
    {
        this.setState({
            message : 'this is changed'
        })
    }

  render() {
    return (
      <div>
         Hello  {this.state.message}
     <button onClick={() => {this.handledata()}}> Change  </button>     
     </div>
    )
  }
}

export default ClassComp