import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import HomePage from './components/HomePage.jsx'
import OrderForm from './components/OrderForm.jsx'
import ViewOrders from './components/ViewOrders.jsx'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/order" component={OrderForm} />
        <Route exact path="/view-orders" component={ViewOrders} />
      </Switch>
    </Router>
  )
}
export default Routes
