import { createStore as reduxCreateStore } from "redux"

const reducer = (state, action) => {
  if (action.type === `SWAP_THEME`) {
    return {
      ...state,
      darkMode: !state.darkMode
    }
  }
  if (action.type === `SET_THEME`) {
    if (action.urlParam === 'light') {
      return {
        ...state,
        darkMode: false
      }
    }
    else if (action.urlParam === 'dark') {
      return {
        ...state,
        darkMode: true
      }
    }
  }

  return state
}

const initialState = {
  darkMode: false,
}

const createStore = () => reduxCreateStore(reducer, initialState)
export default createStore