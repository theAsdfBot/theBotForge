import {
  LoadingActionType,
  LoadingState,
  INIT_LOADING,
  CANCEL_LOADING
} from './types'

const initialState: LoadingState = {
  isLoading: false
}

const loadingReducer = (state: LoadingState = initialState, action: LoadingActionType) => {
  switch (action.type) {
    case INIT_LOADING:
      return { isLoading: true }
    case CANCEL_LOADING:
      return { isLoading: false }
    default:
      return state
  }
}

export default loadingReducer