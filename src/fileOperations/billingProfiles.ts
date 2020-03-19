import { app } from 'electron'
import { promises as fsp } from 'fs'

import { BillingProfile } from '@typesTS/billingTypes'

const billingProfilesFileExist = () => {
  const appDataPath = app.getPath('appData')
  return fsp.access(`${appDataPath}\\testing\\billingProfiles.json`)
    .then(() => true)
    .catch(err => {
      console.error(err)
      return false
    })
}

export const fetchBillingProfiles = async () => {
  try {
    const appDataPath = app.getPath('appData')
    const fileExist = await billingProfilesFileExist()
    console.log('file exist', fileExist)
    if (!fileExist) return []

    const data = await fsp.readFile(`${appDataPath}\\testing\\billingProfiles.json`)
    // need to handle invalid JSON formats
    const profiles = JSON.parse(data.toString()) // turning buffer into a string and parsing it into JS object
    if (!Array.isArray(profiles)) {
      throw new TypeError('Invalid format')
    }
    return profiles
  } catch (err) {
    console.log(err)
    return err
  }
}

// used to make updates to existing profiles and to add new profiles
export const updateBillingProfiles = async (payload: BillingProfile) => {
  try {
    const appDataPath = app.getPath('appData')
    const profiles: BillingProfile[] = await fetchBillingProfiles()
    let updatedProfiles: BillingProfile[] = []
    console.log('profiles call in updateBillingProfiles function:', profiles)

    const hasProfile = profiles.some((profile: BillingProfile) => profile.id === payload.id)
    if (hasProfile) {
      updatedProfiles = profiles.map((profile: BillingProfile) => profile.id === payload.id ? payload : profile)
    } else {
      updatedProfiles = [payload, ...profiles]
    }
    await fsp.writeFile(`${appDataPath}\\testing\\billingProfiles.json`, JSON.stringify(updatedProfiles))

  } catch (err) {
    console.error(err)
    return err
  }
}

export const deleteBillingProfile = async (id: string) => {
  try {
    const appDataPath = app.getPath('appData')
    const profiles = await fetchBillingProfiles()
    const updatedProfiles: BillingProfile[] = profiles.filter((profile: BillingProfile) => profile.id !== id)
    await fsp.writeFile(`${appDataPath}\\testing\\billingProfiles.json`, JSON.stringify(updatedProfiles))
  } catch (err) {
    console.error(err)
    return err
  }
}