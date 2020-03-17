import { app } from 'electron'
import { promises as fsp } from 'fs'

import { BillingProfile } from '@typesTS/billingTypes'

export const fetchBillingProfiles = () => {
  const appDataPath = app.getPath('appData')
  console.log(appDataPath)
  return fsp.readFile(`${appDataPath}\\testing\\billingProfiles.json`)
    .then(data => {
      // need to handle invalid JSON formats
      const profiles = JSON.parse(data.toString()) // turning buffer into a string and parsing it into JS object
      if (Array.isArray(profiles)) { // if it's not an array return an error
        return { profiles, success: true }
      } else {
        throw new Error('Invalid data format')
      }
    })
    .catch(err => {
      console.log(err)
      //TODO: build error handler & ENOENT means file not found / directory not found
      const message = err.code === 'ENOENT' ? 'File not found' : 'unknown err' // leaving it as unknown error for now. Dont want to send the data to frontend
      return { success: false, message }
    })
}

// used to make updates to existing profiles and to add new profiles
export const updateBillingProfiles = async (payload: BillingProfile) => {
  try {
    const appDataPath = app.getPath('appData')
    const res: any = await fetchBillingProfiles() // will type responses later
    let updatedProfiles: BillingProfile[] = []

    if (res.success) {
      // if the payload id exists in the profiles already ? then replace the object with the same id with an updated on : add the new profile to the front of the array
      updatedProfiles = res.profiles.some((profile: BillingProfile) => profile.id === payload.id) ?
        res.profiles.map((profile: BillingProfile) => {
          if (profile.id === payload.id) return payload
          return profile
        }) :
        [payload, ...res.profiles]
    } else { // if it was not successful / file does not exist, we'll start a new profiles array
      updatedProfiles = [payload]
    }

    await fsp.writeFile(`${appDataPath}\\testing\\billingProfiles.json`, JSON.stringify(updatedProfiles)) // returns nothing if operation is successful
    return { success: true }
  } catch (err) {
    console.error(err)
    return {
      success: false,
      message: err.message
    }
  }
}

export const deleteBillingProfile = async (id: string) => {
  try {
    const appDataPath = app.getPath('appData')
    const res: any = await fetchBillingProfiles()
    let updatedProfiles: BillingProfile[] = []

    if (res.success) {
      updatedProfiles = res.profiles.filter((profile: BillingProfile) => profile.id !== id)
      await fsp.writeFile(`${appDataPath}\\testing\\billingProfiles.json`, JSON.stringify(updatedProfiles))
      return { success: true }
    } else {
      throw new Error(res.message)
    }

  } catch (err) {
    console.error(err)
    return {
      success: false,
      message: err.message
    }
  }
}