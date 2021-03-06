import React, { useEffect } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import NavBar from './nav/NavBar'
import BillingView from './billing/BillingView'
import Dashboard from './dashboard/Dashboard'

import { emitStartUpDataRequest } from '../ipcRenderer/eventEmitters'
import { setUpAppStartUpListeners, setUpOperationIndicators, teardownOperationsIndicator } from '../ipcRenderer/eventListeners'

const Main = () => {
  useEffect(() => {
    // componentDidMount 
    setUpAppStartUpListeners() // used for initial data fetch, subscription is automatically unsubbed
    setUpOperationIndicators() // used to listen to successful operations and bad operations to display err messages to frontend & cancel the loading

    emitStartUpDataRequest()

    return teardownOperationsIndicator
  }, [])

  return (
    <div className='w-screen h-screen bg-black-netflix'>
      <Router>
        <NavBar />
        <hr className='border-gray-850' />
        <Switch>
          <Route path='/' component={BillingView} />
          <Route path='/asdf' exact component={Dashboard} />
        </Switch>
      </Router>
    </div>
  )
}

export default Main