import { useEffect } from "react"
import {useAuthContext} from '../hooks/useAuthContext.js'
import { usePeriodContext } from "../hooks/usePeriodContext.js"
import PeriodCalendar from "../components/PeriodCalendar.js"

const Home = () =>{

    const {period,dispatch} = usePeriodContext()
    const{user} = useAuthContext()

    useEffect(() =>{
        const fetchPeriod = async () =>{
            const response = await fetch('/period/all', {
                headers: {
                    'Authorization':`Bearer ${user.token}`
                }
            })
            const  json = await response.json()

            if (response.ok){
                dispatch({type:'SET_PERIODS', payload:json})
            }
        }
        if(user){
            fetchPeriod()
        }
    },[dispatch,user])

    return(
        <div className="home">
            <div>
                {period && period.map((period) =>(
                    <PeriodCalendar key={period._id}/>
                ))}
            </div>
        </div>
    )
}

export default Home