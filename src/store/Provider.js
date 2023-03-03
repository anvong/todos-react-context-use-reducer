import { useReducer } from 'react'
import Context from './Context'
import reducer, {initState} from './reducer'
// import logger from './logger'

// provider component using reducer
function Provider({children}) {
    // logger is use to call reducer for logging 
    const [state, dispatch] = useReducer(reducer, initState)
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
}

export default Provider