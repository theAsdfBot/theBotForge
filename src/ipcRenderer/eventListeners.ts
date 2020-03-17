import { ipcRenderer } from 'electron'

import store from '../store'
import { populateProfiles } from '../store/billingProfiles/actions'
import { cancelLoading } from '../store/loading/action'

// used for the initial fetch for data when app boots
export const setUpAppStartUpListeners = () => {
  ipcRenderer.once('startup-data-response', (event, payload) => {
    const { billingProfiles } = payload
    setTimeout(() => {
      // if error is file not found we don display error message. we're going to assume it's the user's first time using app
      if (billingProfiles.success) store.dispatch(populateProfiles(billingProfiles.profiles))
      store.dispatch(cancelLoading())
    }, 2000)
  })
}

export const setUpOperationIndicators = () => {
  ipcRenderer.on('successful-operation', (event) => {
    store.dispatch(cancelLoading())
  })
  ipcRenderer.on('unsuccessful-operation', (event, err) => {
    console.error(err)
    // dispatch(err to user)
    store.dispatch(cancelLoading())
  })
}