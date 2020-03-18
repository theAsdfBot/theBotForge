import { ipcRenderer } from 'electron'

import store from '../store'
import { populateProfiles } from '../store/billingProfiles/actions'

// used for the initial fetch for data when app boots
export const setUpAppStartUpListeners = () => {
  ipcRenderer.once('startup-data-response', (event, payload) => {
    const { billingProfiles } = payload
    // if error is file not found we don display error message. we're going to assume it's the user's first time using app
    if (billingProfiles.success) store.dispatch(populateProfiles(billingProfiles.profiles))
  })
}

export const setUpOperationIndicators = () => {
  ipcRenderer.on('successful-operation', (event) => {
  })
  ipcRenderer.on('unsuccessful-operation', (event, err) => {
    console.error(err)
    // dispatch(err to user)
  })
}

export const teardownOperationsIndicator = () => {
  ipcRenderer.removeAllListeners('successful-operation')
  ipcRenderer.removeAllListeners('unsuccessful-operation')
}