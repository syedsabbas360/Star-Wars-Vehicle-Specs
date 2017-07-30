import React, { Component } from 'react';

export default class Vehicles extends Component {
  constructor(props){
    super(props)
    this.state = {
      vehicles: []
    }
  }
  componentWillMount(){
    console.log("componentWillMount")
  }
  componentDidMount(){
    console.log("componentDidMount")
    fetch("http://swapi.co/api/vehicles/")
    .then( r => r.json() )
    .then( json => {
      this.setState({
        vehicles: json.results
      })
    })
  }
  componentWillUnmount(){
    console.log("componentWillUnmount")

  }

  render(){
    return (
      <div className="MainCard">

        {this.state.vehicles.map( (vehicle) => {
          return <div className="vehicle" key={vehicle.url}>

          <div className= "card" className="jumbotron">

          <div className="TopSection">
          <h6>Vehicles: {vehicle.name}</h6>
          <h6>Model: {vehicle.model}</h6>
          </div>

          <div className="Spec">

          </div>
          <h7>Specs</h7>
          <ul>
          <p>Manufacturer: {vehicle.manufacturer}</p>
          <p>Class: {vehicle.vehicle_class}</p>
          <p>Crew: {vehicle.crew}</p>
          <p>Length: {vehicle.length}</p>
          <p>Max: {vehicle.max_atmosphering_speed}</p>
          <p>Cargo Capacity: {vehicle.cargo_capacity}</p>
          </ul>
          </div>

          </div>
        })}
      </div>
    )
  }
}
