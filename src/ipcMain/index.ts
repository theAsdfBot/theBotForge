import { ipcMain as ipc, app } from 'electron'
import { promises as fsp } from 'fs'

ipc.on('fetch-billing-profiles', (event) => {
  const appDataPath = app.getPath('appData')
  console.log(`${appDataPath}\\testing\\billingProfiles.json`)
  return fsp.readFile(`${appDataPath}\\testing\\billingProfiles.json`) //TODO: add decryption logic
    .then(data => {
      const str = data.toString()
      const profiles = JSON.parse(str)
      console.log(profiles)
      event.sender.send('send-billing-profiles', profiles) // TODO: turn event names into const vars
    })
    .catch(err => console.error(err))
})
