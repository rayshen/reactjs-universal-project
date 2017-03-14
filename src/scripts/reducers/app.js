import appActions from '../actions/app';

const initialState = {
  darkMode:false
}

export default (state = initialState, action)=>{
  switch(action.type) {
    case appActions.TYPES.SET_DARK_MODE:
      return {
        ...state,
        darkMode:action.value
      }
    default:
      return state;
  }
}