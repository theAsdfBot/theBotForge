import { ipcMain } from 'electron'

import { BillingProfile } from '@typesTS/billingTypes'

import { fetchBillingProfiles, updateBillingProfiles, deleteBillingProfile } from '../fileOperations/billingProfiles'

// listens for this event only once
ipcMain.once('startup-data-request', async event => {
  const [billingProfileResults] = await Promise.all([fetchBillingProfiles()]) //add other data fetches

  const response = {
    billingProfiles: {
      ...billingProfileResults
    }
  }
  console.log(response)
  event.sender.send('startup-data-response', response)
})

ipcMain.on('update-billing-profile', (event, payload: BillingProfile) => {
  return updateBillingProfiles(payload)
    .then(res => {
      console.log(res)
      if (res.success) {
        event.sender.send('successful-operation')
      } else {
        event.sender.send('unsuccessful-operation', res.message)
      }
    })
})

ipcMain.on('delete-billing-profile', (event, id: string) => {
  return deleteBillingProfile(id)
    .then(res => {
      console.log(res)
      if (res.success) {
        event.sender.send('successful-operation')
      } else {
        event.sender.send('unsuccessful-operation', res.message)
      }
    })
})