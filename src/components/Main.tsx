import React, { useEffect } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { ipcRenderer } from 'electron'

import NavBar from './nav/NavBar'
import BillingView from './billing/BillingView'
import Dashboard from './dashboard/Dashboard'

import { emitProfilesFetch } from '../ipcRenderer'
import { populateProfiles } from '../store/billingProfiles/actions'

const Main = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    // ComponentDidMount setup & fetch
    ipcRenderer.on('send-billing-profiles', (event, payload) => {
      dispatch(populateProfiles(payload))
    })
    emitProfilesFetch()

    // componentWillUnmount cleanup
    return function cleanUp() {
      ipcRenderer.removeListener('sending-billing-profiles', () => console.log('removed listener'))
    }

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