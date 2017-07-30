import React, { Component } from 'react';
import PersonName from './PersonName'
import './App.css'

export default class Form extends Component {
  constructor(props){
    super(props)

    this.state = {
      name: this.props.initialName
    }
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleNameChange(event){
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault()
  }

  render(){
    return (
      <div className='form'>

        <form onSubmit={this.handleSubmit}>
        <p>What is your name pilot?</p>
          <input value={this.state.name} onChange={this.handleNameChange}  type="text" placeholder="Your Name"/>
          <br/>
          <button>Submit</button>
        </form>
        <PersonName name={this.state.name} />
      </div>
    )
  }
}
