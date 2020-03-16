import { Action, ActionCreator } from 'redux'
import {
  LoadingActionType,
  INIT_LOADING,
  CANCEL_LOADING
} from './types'

export const initiateLoading: ActionCreator<Action> = (): LoadingActionType => ({
  type: INIT_LOADING
})

export const cancelLoading: ActionCreator<Action> = (): LoadingActionType => ({
  type: CANCEL_LOADING
})