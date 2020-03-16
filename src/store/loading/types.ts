export const INIT_LOADING = 'INIT_LOADING'
export const CANCEL_LOADING = 'CANCEL_LOADING'

export type LoadingActionType = {
  type: typeof INIT_LOADING | typeof CANCEL_LOADING
}

export type LoadingState = {
  isLoading: boolean
}