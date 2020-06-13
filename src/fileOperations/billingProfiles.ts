import { app } from 'electron'
import fs from 'fs'

import { BillingProfile } from '@typesTS/billingTypes'

export const getLocation = () => {
  const appDataPath = app.getPath('appData')
  return `${appDataPath}\\testing\\billingProfiles.json`
}

export const billingProfilesFileExist = () => {
  return fs.existsSync(getLocation())
}

export const fetchBillingProfiles = async () => {
  const fileExist = await billingProfilesFileExist()
  console.log('file exist', fileExist)
  if (!fileExist) return []

  const data = await fs.promises.readFile(getLocation())
  // need to handle invalid JSON formats
  const profiles = JSON.parse(data.toString()) // turning buffer into a string and parsing it into JS object
  if (!Array.isArray(profiles)) {
    throw new TypeError('Invalid format')
  }
  return profiles
}

// used to make updates to existing profiles and to add new profiles
export const updateBillingProfiles = async (payload: BillingProfile) => {
  const profiles: BillingProfile[] = await fetchBillingProfiles()
  let updatedProfiles: BillingProfile[] = []
  console.log('profiles call in updateBillingProfiles function:', profiles)

  const hasProfile = profiles.some((profile: BillingProfile) => profile.id === payload.id)
  if (hasProfile) {
    updatedProfiles = profiles.map((profile: BillingProfile) => profile.id === payload.id ? payload : profile)
  } else {
    updatedProfiles = [payload, ...profiles]
  }
  await fs.promises.writeFile(getLocation(), JSON.stringify(updatedProfiles))
}

export const deleteBillingProfile = async (id: string) => {
  const profiles = await fetchBillingProfiles()
  const updatedProfiles: BillingProfile[] = profiles.filter((profile: BillingProfile) => profile.id !== id)
  await fs.promises.writeFile(getLocation(), JSON.stringify(updatedProfiles))
}
