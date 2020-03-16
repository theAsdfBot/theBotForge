import { ipcMain as ipc, app } from 'electron'
import { promises as fsp } from 'fs'

ipc.on('fetch-billing-profiles', (event) => {
  const appDataPath = app.getPath('appData')
  console.log(`${appDataPath}\\testing\\billingProfiles.json`)
  return fsp.readFile(`${appDataPath}\\testing\\billingProfiles.json`)
    .then(data => {
      const profiles = JSON.parse(data) // it works though the error says i cant pass a buffer into JSON.parse()
      console.log(profiles)
      return profiles
    })
    .catch(err => console.error(err))
})
