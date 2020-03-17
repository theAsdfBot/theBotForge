import { ipcMain, app } from 'electron'
import { promises as fsp } from 'fs'

import { BillingProfile } from '@typesTS/billingTypes'

import { fetchBillingProfiles } from '../fileOperations/billingProfiles'

ipcMain.on('startup-data-request', async event => {
  const [billingProfileResults] = await Promise.all([fetchBillingProfiles()]) //add other data fetches

  const response = {
    billingProfiles: {
      ...billingProfileResults
    }
  }
  event.sender.send('startup-data-response', response)
})

ipcMain.on('update-billing-profile', async (event, payload: BillingProfile) => {
  try {
    const appDataPath = app.getPath('userData')
    const data = await fsp.readFile(`${appDataPath}\\testing\\billingProfiles.json`)
    let profiles = JSON.parse(data.toString())
    profiles = profiles.map((profile: BillingProfile) => {
      if (profile.id === payload.id) return payload
      return profile
    })
    await fsp.writeFile(appDataPath, JSON.stringify(profiles))
    event.sender.send('successful-operation')
  } catch (err) {
    console.error(err)
    event.sender.send('bad-operation', err)
  }
})
