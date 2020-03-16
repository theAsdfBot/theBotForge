import { ipcRenderer } from 'electron'

import store from '../store'
import { populateProfiles } from '../store/billingProfiles/actions'
import { cancelLoading } from '../store/loading/action'

// used for the initial fetch for data when app boots
export const setUpAppStartUpListeners = () => {
  ipcRenderer.on('startup-data-response', (event, payload) => {
    setTimeout(() => {
      store.dispatch(populateProfiles(payload))
      store.dispatch(cancelLoading())

      removeAppStartUpListeners() // remove the listerner once it does its job and we dont need it anymore
    }, 5000)
  })
}

const removeAppStartUpListeners = () => {
  ipcRenderer.removeListener('startup-data-response', () => console.log('removed startup-data-response listener'))
}



// will be used for other things
ipcRenderer.on('successful-operation', (event) => {
  store.dispatch(cancelLoading())
})
ipcRenderer.on('bad-operation', (event, err) => {
  console.error(err)
  // dispatch(err to user)
})