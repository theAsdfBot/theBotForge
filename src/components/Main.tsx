import * as React from 'react'
import { MemoryRouter, Route, Switch } from 'react-router-dom'

import NavBar from './nav/NavBar'
import BillingView from './billing/BillingView'
import Dashboard from './dashboard/Dashboard'

const Main = () => {
  return (
    <div>
      <MemoryRouter>
        <NavBar />
        <Switch>
          <Route path='/' exact component={Dashboard} />
          <Route path='/billing-profiles' component={BillingView} />
        </Switch>
      </MemoryRouter>
    </div>
  )
}

export default Main