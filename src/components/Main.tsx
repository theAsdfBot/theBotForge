import React, { useEffect } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import NavBar from './nav/NavBar'
import BillingView from './billing/BillingView'
import Dashboard from './dashboard/Dashboard'

import { loadingProfiles } from '../store/billingProfiles/thunks'

const Main = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadingProfiles())
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