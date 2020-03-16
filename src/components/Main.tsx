import React, { useEffect } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import NavBar from './nav/NavBar'
import BillingView from './billing/BillingView'
import Dashboard from './dashboard/Dashboard'

import { RootState } from '../store'
import { initiateLoading } from '../store/loading/action'

import { emitProfilesFetch } from '../ipcRenderer/eventEmitters'
import { setUpListeners, removeListeners } from '../ipcRenderer/eventListeners'

const Main = () => {
  const dispatch = useDispatch()
  const isLoading = useSelector((state: RootState) => state.loading.isLoading)

  useEffect(() => {
    // componentDidMount 
    setUpListeners()
    dispatch(initiateLoading())
    emitProfilesFetch()
    // componentWillUnmount
    return removeListeners
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