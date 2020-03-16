import electron from 'electron'
const ipc = electron.ipcRenderer

export const emitProfilesFetch = () => ipc.send('fetch-billing-profiles')

