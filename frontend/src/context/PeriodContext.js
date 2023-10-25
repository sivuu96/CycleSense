import { createContext, useReducer } from "react";

export const PeriodContext = createContext()

export const periodReducer = (state,action) => {
    switch(action.type) {
        case 'SET_PERIODS':
            return{
                period: action.payload
            }
        case 'ADD_PERIOD':
            return {
              period: [action.payload]
            }
        default:
            return state
    }
}

export const PeriodContextProvider = ({children}) => {

    const [state,dispatch] = useReducer(periodReducer,{
        period:null
    })

    return (
        <PeriodContext.Provider value = {{...state,dispatch}}>
            {children}
        </PeriodContext.Provider>
    )
}

