export const TYPES = {
    SET_DARK_MODE:"SET_DARK_MODE",
}

//设置演示颜色
const setDarkMode = (value) =>{
    return async (dispatch)=>{
        // do something async/sync operation
        localStorage.setItem('DARK_MODE',value?'1':'0');
        dispatch({
            'type': TYPES.SET_DARK_MODE,
            'value': value,
        })
    }
}

export default {TYPES,setDarkMode};

