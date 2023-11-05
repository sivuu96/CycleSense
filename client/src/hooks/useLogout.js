import {useAuthContext} from './useAuthContext'
import {usePeriodContext} from './usePeriodContext'

export const useLogout = () => {
    const {dispatch} = useAuthContext()
    const {dispatch:periodDispatch} = usePeriodContext()

    const logout = () => {
        localStorage.removeItem('user')
        dispatch({type:'LOGOUT'})

        periodDispatch({type:'SET_PERIODS',payload: null})
    }

    return {logout}
}