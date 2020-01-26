import * as React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import NavBar from './nav/NavBar'
import BillingView from './billing/BillingView'
import Dashboard from './dashboard/Dashboard'

const Main = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
        <Route path='/' component={BillingView} />
          <Route path='/asdf' exact component={Dashboard} />
        </Switch>
      </Router>
    </div>
  )
}

export default Main