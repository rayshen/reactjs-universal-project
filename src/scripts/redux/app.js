export const appActionTypes = {
    SET_DARK_MODE:"SET_DARK_MODE",
}

/**
 * reducers
 */
const initialState = {
    darkMode:false
}
export const appReducer =  (state = initialState, action)=>{
    switch(action.type) {
        case appActionTypes.SET_DARK_MODE:
            return {
                ...state,
                darkMode:action.value
            }
        default:
            return state;
    }
}

/**
 * actions
 */
//设置演示颜色
export const setDarkMode = (value) =>{
    return async (dispatch)=>{
        // do something async/sync operation
        localStorage.setItem('DARK_MODE',value?'1':'0');
        dispatch({
            'type': appActionTypes.SET_DARK_MODE,
            'value': value,
        })
    }
}