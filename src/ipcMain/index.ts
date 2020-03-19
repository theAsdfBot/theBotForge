import { ipcMain } from 'electron'

import { BillingProfile } from '@typesTS/billingTypes'

import { fetchBillingProfiles, updateBillingProfiles, deleteBillingProfile } from '../fileOperations/billingProfiles'

// listens for this event only once
ipcMain.once('startup-data-request', async event => {
  try {
    const [billingProfiles] = await Promise.all([fetchBillingProfiles()]) //add other data fetches 
    const response = {
      billingProfiles
    }

    event.sender.send('startup-data-response', response)
  } catch (err) {
    event.sender.send('unsuccessful-operation', err.message)
  }
})

ipcMain.on('update-billing-profile', async (event, payload: BillingProfile) => {
  try {
    await updateBillingProfiles(payload)
    event.sender.send('successful-operation')
  } catch (err) {
    event.sender.send('unsuccessful-operation', err.message)
  }
})

ipcMain.on('delete-billing-profile', async (event, id: string) => {
  try {
    await deleteBillingProfile(id)
    event.sender.send('successful-operation')
  } catch (err) {
    event.sender.send('unsuccessful-operation', err.message)
  }
})