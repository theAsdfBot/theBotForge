import React, { useEffect } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import NavBar from './nav/NavBar'
import BillingView from './billing/BillingView'
import Dashboard from './dashboard/Dashboard'

import { RootState } from '../store'
import { initiateLoading } from '../store/loading/action'

import { emitStartUpDataRequest } from '../ipcRenderer/eventEmitters'
import { setUpAppStartUpListeners, setUpOperationIndicators } from '../ipcRenderer/eventListeners'

const Main = () => {
  const dispatch = useDispatch()
  const isLoading = useSelector((state: RootState) => state.loading.isLoading)

  useEffect(() => {
    // componentDidMount 
    setUpAppStartUpListeners() // used for initial data fetch, subsription is automatically unsubbed
    setUpOperationIndicators() // used to listen to successful operations and bad operations to display err messages to frontend & cancel the loading
    dispatch(initiateLoading())
    emitStartUpDataRequest()
  }, [])

  return (
    <div className='w-screen h-screen bg-black-netflix'>
      <Router>
        <NavBar />
        <hr className='border-gray-850' />
        {isLoading ? <h1 className='text-white'>LOADING</h1> : <Switch>
          <Route path='/' component={BillingView} />
          <Route path='/asdf' exact component={Dashboard} />
        </Switch>}
      </Router>
    </div>
  )
}

export default Main