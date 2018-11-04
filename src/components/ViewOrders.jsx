import React, { Component } from 'react'
import NavBar from './NavBar.jsx'

class ViewOrders extends Component {
  constructor (props) {
    super(props)

    this.state = {
      orders: ''
    }
  }
  componentDidMount () {
    fetch('https://snp-restfull.herokuapp.com/orders', {
      type: 'GET'
    })
    .then(response => response.json())
    .then(data => this.setState({ orders: data }))
  }
  handleOrders () {
    const untrackedFields = ['__v', '_id', 'Created_date']
    if (this.state.orders)
    return this.state.orders.map(order => {
      return(
        <div className="card" key={Math.random()} style={{ width: '18rem' }}>
          <ul className="list-group list-group-flush">
            {Object.keys(order).map(key => 
              untrackedFields.includes(key)
              ? ''
              : <li key={Math.random()} className="list-group-item">{key}: {order[key]}</li>)}
          </ul>
        </div>)
    })
  }
  render () {
    return (
    <div className='app-wrapper'>
      <NavBar />
      <h1>Users Orders:</h1>
      <div className='cards'>
        {this.handleOrders()}
      </div>
    </div>)
  }
}

export default ViewOrders