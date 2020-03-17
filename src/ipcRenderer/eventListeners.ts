import { ipcRenderer } from 'electron'

import store from '../store'
import { populateProfiles } from '../store/billingProfiles/actions'
import { cancelLoading } from '../store/loading/action'

// used for the initial fetch for data when app boots
export const setUpAppStartUpListeners = () => {
  ipcRenderer.once('startup-data-response', (event, payload) => {
    const { billingProfiles } = payload
    setTimeout(() => {
      if (billingProfiles.success) store.dispatch(populateProfiles(billingProfiles.profiles))
      store.dispatch(cancelLoading())
    }, 2000)
  })
}

// will be used for other things
ipcRenderer.on('successful-operation', (event) => {
  store.dispatch(cancelLoading())
})
ipcRenderer.on('bad-operation', (event, err) => {
  console.error(err)
  // dispatch(err to user)
})