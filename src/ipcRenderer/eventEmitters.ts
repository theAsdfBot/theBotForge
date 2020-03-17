import { ipcRenderer } from 'electron'

import { BillingProfile } from '@typesTS/billingTypes'

export const emitStartUpDataRequest = () => ipcRenderer.send('startup-data-request')

export const emitUpdateProfile = (payload: BillingProfile) => ipcRenderer.send('update-billing-profile', payload)

export const emitDeleteProfile = (id: string) => ipcRenderer.send('delete-billing-profile', id)