import { ipcRenderer } from 'electron'

export const emitProfilesFetch = () => ipcRenderer.send('fetch-billing-profiles')

